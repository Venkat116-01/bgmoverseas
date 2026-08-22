import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// createClient throws synchronously if the URL/key are missing, which would
// crash the whole app on load (this module is imported eagerly via the
// router) before a Supabase project is configured. Degrade to null instead
// so the rest of the site keeps working with just EmailJS until it's set up.
export const supabase =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;
