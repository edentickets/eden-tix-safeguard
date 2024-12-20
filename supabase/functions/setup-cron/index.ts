import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { Pool } from 'https://deno.land/x/postgres@v0.17.0/mod.ts'

serve(async (req) => {
  try {
    const pool = new Pool(Deno.env.get('SUPABASE_DB_URL') ?? '', {
      max: 1,
    })

    const connection = await pool.connect()
    
    try {
      // Enable the pg_cron extension
      await connection.queryObject`
        CREATE EXTENSION IF NOT EXISTS pg_cron;
        CREATE EXTENSION IF NOT EXISTS pg_net;
      `

      // Schedule the scramble-qr-codes function to run every 10 minutes
      await connection.queryObject`
        SELECT cron.schedule(
          'scramble-qr-codes-every-10-min',
          '*/10 * * * *',
          $$
          SELECT
            net.http_post(
              url:='${Deno.env.get('SUPABASE_URL')}/functions/v1/scramble-qr-codes',
              headers:='{"Content-Type": "application/json", "Authorization": "Bearer ${Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')}"}'::jsonb,
              body:='{}'::jsonb
            ) as request_id;
          $$
        );
      `
    } finally {
      connection.release()
    }

    return new Response(
      JSON.stringify({ message: 'Cron job scheduled successfully' }),
      { headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    )
  }
})