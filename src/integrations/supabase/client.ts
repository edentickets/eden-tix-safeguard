import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mnuxntzgginiujjsuztb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1udXhudHpnZ2luaXVqanN1enRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI5MjY5NDAsImV4cCI6MjAxODUwMjk0MH0.eLr8ag_-_xVVqWfqxFDrj-ZcAXxe-7_EVQcYKKLqOxM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  }
});