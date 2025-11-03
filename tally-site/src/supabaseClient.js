import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // Warn in development when env vars are missing.
  // Do not fail here; the app can still render for local dev without DB.
  // Users should set the env vars as documented in README.md.
  // eslint-disable-next-line no-console
  console.warn('REACT_APP_SUPABASE_URL or REACT_APP_SUPABASE_ANON_KEY is not set. Supabase inserts will fail.');
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');
