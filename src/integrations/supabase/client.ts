import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mnuxntzgginiujjsuztb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1udXhudHpnZ2luaXVqanN1enRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk4MjMzNzAsImV4cCI6MjAyNTM5OTM3MH0.qDlZHnHGDqK-0G1dTNQZNOsxOhz7nJgYF3UXxpGDxjg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);