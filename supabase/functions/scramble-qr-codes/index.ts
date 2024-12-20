import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { QRCode } from 'https://deno.land/x/qrcode/mod.ts'

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
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Get all events happening within the next 24 hours
    const now = new Date()
    const { data: events, error: eventsError } = await supabase
      .from('events')
      .select('id, start_date')
      .gte('start_date', now.toISOString())
      .lte('start_date', new Date(now.getTime() + 24 * 60 * 60 * 1000).toISOString())

    if (eventsError) throw eventsError

    for (const event of events) {
      const eventStartTime = new Date(event.start_date)
      const timeUntilStart = eventStartTime.getTime() - now.getTime()
      const hoursUntilStart = timeUntilStart / (1000 * 60 * 60)
      
      // Determine if we should scramble based on time until event
      let shouldScramble = false
      
      if (hoursUntilStart <= 0.5) {
        // Within 30 minutes of event: scramble every 10 minutes
        shouldScramble = true
        console.log(`Event ${event.id} starting soon, scrambling every 10 minutes`)
      } else if (hoursUntilStart <= 6) {
        // Check if it's been 6 hours since last scramble
        const { data: tickets } = await supabase
          .from('tickets')
          .select('qr_code_updated_at')
          .eq('event_id', event.id)
          .eq('status', 'active')
          .order('qr_code_updated_at', { ascending: false })
          .limit(1)

        if (tickets && tickets.length > 0) {
          const lastUpdate = new Date(tickets[0].qr_code_updated_at)
          const hoursSinceLastUpdate = (now.getTime() - lastUpdate.getTime()) / (1000 * 60 * 60)
          shouldScramble = hoursSinceLastUpdate >= 6
          if (shouldScramble) {
            console.log(`Event ${event.id} 6-hour scramble triggered`)
          }
        } else {
          shouldScramble = true // First scramble for these tickets
        }
      }

      if (shouldScramble) {
        // Get all tickets for this event
        const { data: tickets, error: ticketsError } = await supabase
          .from('tickets')
          .select('id')
          .eq('event_id', event.id)
          .eq('status', 'active')

        if (ticketsError) throw ticketsError

        // Update QR codes for each ticket
        for (const ticket of tickets) {
          const timestamp = new Date().toISOString()
          const salt = crypto.randomUUID()
          const qrData = JSON.stringify({
            ticketId: ticket.id,
            timestamp,
            salt,
          })

          // Generate new QR code
          const qr = new QRCode()
          const qrCodeBase64 = await qr.generate(qrData)

          // Update ticket with new QR code
          const { error: updateError } = await supabase
            .from('tickets')
            .update({
              current_qr_code: qrCodeBase64,
              qr_code_updated_at: timestamp,
            })
            .eq('id', ticket.id)

          if (updateError) {
            console.error(`Failed to update ticket ${ticket.id}:`, updateError)
          }
        }
      }
    }

    return new Response(
      JSON.stringify({ message: 'QR codes scrambled successfully' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    console.error('Error scrambling QR codes:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})