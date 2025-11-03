# Supabase setup (optional)

If you want the signup modal to persist submissions into a Supabase table named `intrest_signup`, do the following:

1. Install the Supabase JS client:

   ```bash
   npm install @supabase/supabase-js
   ```

2. Create a Supabase project and a table called `intrest_signup` with columns you want to store, for example:
   - `id` (uuid or bigint, primary key)
   - `first_name` (text)
   - `last_name` (text)
   - `email` (text)
   - `phone` (text)
   - `university` (text)
   - `created_at` (timestamp)

3. Add the following environment variables to your `.env` (or your hosting environment):

   - `REACT_APP_SUPABASE_URL` — your Supabase project URL
   - `REACT_APP_SUPABASE_ANON_KEY` — your Supabase public anon key

   Example `.env` (do NOT commit this file):

   ```env
   REACT_APP_SUPABASE_URL=https://xyzcompany.supabase.co
   REACT_APP_SUPABASE_ANON_KEY=eyJhbGciOiJI...
   ```

4. Restart the dev server. Submissions from the modal will be inserted into the `intrest_signup` table.

Note: Keep your service_role key private (don't use it in client code). The code in this project uses the anon key and expects the table to accept inserts from the anon role. If you need server-side validation or to protect insert access, create a server endpoint or use RLS/policies in Supabase.
