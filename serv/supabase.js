const {createClient}=require('@supabase/supabase-js')

const supabaseUrl = 'https://bbfcsmkuskblxncuskem.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJiZmNzbWt1c2tibHhuY3Vza2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMzM3MTUsImV4cCI6MjAyNDcwOTcxNX0.w7WITzzAGmLQWywj32rcgmNRjDiYPnTUXCbubDvf51g';
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports=supabase;