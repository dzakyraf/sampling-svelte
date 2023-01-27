import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://skmyjwgbchbrtgjcebut.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrbXlqd2diY2hicnRnamNlYnV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ3NTIzNTYsImV4cCI6MTk5MDMyODM1Nn0.4ONpIvt-lOKBCzAGHQZMdZZ_L0of7u8Dxf4n4IJAqRU";

export const supabase = createClient(supabaseUrl, supabaseAnonKey)