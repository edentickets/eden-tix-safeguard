import { serve } from "https://deno.land/std@0.190.0/http/server.ts"
import Stripe from 'https://esm.sh/stripe@14.21.0'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { eventId, quantity = 1, referralCode, paymentMethod = 'stripe' } = await req.json()

    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    )

    // Get user from auth header if available
    let userId = null
    const authHeader = req.headers.get('Authorization')
    if (authHeader) {
      const { data: { user } } = await supabaseClient.auth.getUser(authHeader.replace('Bearer ', ''))
      userId = user?.id
    }

    // Get event details
    const { data: event } = await supabaseClient
      .from('events')
      .select('*, ticket_tiers(*)')
      .eq('id', eventId)
      .single()

    if (!event) {
      throw new Error('Event not found')
    }

    // If referral code is provided, get promoter details
    let promoter = null
    if (referralCode) {
      const { data: referralLink } = await supabaseClient
        .from('promoter_referral_links')
        .select('*, promoters(*)')
        .eq('unique_code', referralCode)
        .eq('event_id', eventId)
        .single()

      if (referralLink) {
        promoter = referralLink.promoters
        console.log('Found promoter:', promoter)
      }
    }

    // Calculate commission if promoter exists
    const basePrice = event.price
    const commission = promoter ? (basePrice * (promoter.commission_rate / 100)) : 0
    console.log('Commission calculation:', { basePrice, rate: promoter?.commission_rate, commission })

    if (paymentMethod === 'paypal') {
      // Create PayPal order
      const response = await fetch('https://api-m.sandbox.paypal.com/v2/checkout/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Deno.env.get('PAYPAL_ACCESS_TOKEN')}`,
        },
        body: JSON.stringify({
          intent: 'CAPTURE',
          purchase_units: [{
            amount: {
              currency_code: 'USD',
              value: (event.price * quantity).toString(),
            },
            description: `Tickets for ${event.title}`,
          }],
          application_context: {
            return_url: `${req.headers.get('origin')}/checkout/success`,
            cancel_url: `${req.headers.get('origin')}/checkout/failure?event_id=${eventId}`,
          },
        }),
      });

      const paypalOrder = await response.json();
      
      return new Response(
        JSON.stringify({ 
          provider: 'paypal',
          url: paypalOrder.links.find((link: any) => link.rel === 'approve').href 
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        }
      )
    }

    // Default to Stripe checkout
    const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
      apiVersion: '2023-10-16',
    })

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: event.title,
              description: event.description || undefined,
              images: event.image_url ? [event.image_url] : undefined,
            },
            unit_amount: Math.round(event.price * 100), // Convert to cents
          },
          quantity,
        },
      ],
      success_url: `${req.headers.get('origin')}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/checkout/failure?event_id=${eventId}`,
      metadata: {
        eventId,
        userId,
        quantity,
        promoterId: promoter?.id,
        commission,
      },
      customer_creation: userId ? undefined : 'always',
      phone_number_collection: {
        enabled: true,
      },
      customer_email: userId ? undefined : null,
      custom_text: {
        submit: {
          message: 'You can use either email or phone number to access your tickets after payment.',
        },
      },
    })

    return new Response(
      JSON.stringify({ provider: 'stripe', url: session.url }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    )
  }
})