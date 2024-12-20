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
    const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
      apiVersion: '2023-10-16',
    })

    // Get the signature from the headers
    const signature = req.headers.get('stripe-signature')
    if (!signature) {
      throw new Error('No Stripe signature found')
    }

    // Get the raw body
    const body = await req.text()

    // Verify the webhook signature
    const endpointSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET')
    if (!endpointSecret) {
      throw new Error('Stripe webhook secret not configured')
    }

    let event
    try {
      event = stripe.webhooks.constructEvent(body, signature, endpointSecret)
    } catch (err) {
      console.error(`⚠️ Webhook signature verification failed.`, err.message)
      return new Response(JSON.stringify({ error: err.message }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    // Initialize Supabase client
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    )

    // Handle the event
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object

      // Get metadata from the session
      const { eventId, userId, quantity } = session.metadata

      console.log(`Processing successful payment for event ${eventId}, user ${userId}, quantity ${quantity}`)

      // Create tickets in the database
      for (let i = 0; i < parseInt(quantity); i++) {
        const { data: ticket, error: ticketError } = await supabaseAdmin
          .from('tickets')
          .insert({
            event_id: eventId,
            owner_id: userId,
            status: 'active',
            purchase_price: session.amount_total / 100 / parseInt(quantity), // Convert from cents and divide by quantity
          })
          .select()
          .single()

        if (ticketError) {
          console.error('Error creating ticket:', ticketError)
          throw ticketError
        }

        console.log('Created ticket:', ticket)

        // Update available tickets count
        const { error: eventError } = await supabaseAdmin
          .from('events')
          .update({
            available_tickets: supabaseAdmin.rpc('decrement', { x: 1 })
          })
          .eq('id', eventId)

        if (eventError) {
          console.error('Error updating event tickets:', eventError)
          throw eventError
        }
      }
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error processing webhook:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to process webhook' }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})