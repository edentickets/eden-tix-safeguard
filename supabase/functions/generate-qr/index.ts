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

    // Get ticket ID from request
    const { ticketId } = await req.json()
    if (!ticketId) {
      throw new Error('Ticket ID is required')
    }

    // Generate a new QR code with timestamp and random salt
    const timestamp = new Date().toISOString()
    const salt = crypto.randomUUID()
    const qrData = JSON.stringify({
      ticketId,
      timestamp,
      salt,
    })

    // Generate QR code
    const qr = new QRCode()
    const qrCodeBase64 = await qr.generate(qrData)

    // Update the ticket with new QR code
    const { error: updateError } = await supabase
      .from('tickets')
      .update({
        current_qr_code: qrCodeBase64,
        qr_code_updated_at: timestamp,
      })
      .eq('id', ticketId)

    if (updateError) {
      throw updateError
    }

    return new Response(
      JSON.stringify({ qrCode: qrCodeBase64 }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})