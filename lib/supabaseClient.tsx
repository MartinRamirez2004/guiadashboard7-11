import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sqdupyawzvtmpuxcbzse.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxZHVweWF3enZ0bXB1eGNienNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1MjQ3MTUsImV4cCI6MjA3ODEwMDcxNX0.tT2s9lrePFszK0XWNKdFlPgBkW6c0_L8sSGjGfS2GTY'

export const supabase = createClient(supabaseUrl, supabaseKey);