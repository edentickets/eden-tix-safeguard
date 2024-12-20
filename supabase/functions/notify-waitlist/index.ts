import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Get waitlist entries where tickets are now available
    const { data: waitlistEntries, error: waitlistError } = await supabaseClient
      .from("waitlist_entries")
      .select(`
        *,
        ticket_tiers (
          available_tickets,
          title
        ),
        events (
          title
        )
      `)
      .eq("status", "waiting")
      .eq("notification_sent", false);

    if (waitlistError) throw waitlistError;

    // Filter entries where tickets are available
    const availableEntries = waitlistEntries?.filter(
      (entry) => entry.ticket_tiers.available_tickets >= entry.quantity
    );

    if (!availableEntries?.length) {
      return new Response(
        JSON.stringify({ message: "No notifications to send" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        }
      );
    }

    // Send notifications (implement your email service here)
    const notifications = availableEntries.map(async (entry) => {
      // Update entry status
      const { error: updateError } = await supabaseClient
        .from("waitlist_entries")
        .update({ notification_sent: true })
        .eq("id", entry.id);

      if (updateError) throw updateError;

      // Here you would integrate with your email service
      console.log(`Notification sent to ${entry.email} for ${entry.events.title}`);
    });

    await Promise.all(notifications);

    return new Response(
      JSON.stringify({ 
        message: "Notifications sent", 
        count: availableEntries.length 
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});