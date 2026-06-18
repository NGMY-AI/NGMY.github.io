-- Ephemeral Doc Share WebRTC signaling (short QR codes). Run once in Supabase SQL editor.
CREATE TABLE IF NOT EXISTS public.doc_share_relay (
  session_id TEXT PRIMARY KEY,
  offer TEXT NOT NULL,
  answer TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS doc_share_relay_created_idx ON public.doc_share_relay (created_at);

ALTER TABLE public.doc_share_relay ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS doc_share_relay_anon_all ON public.doc_share_relay;
CREATE POLICY doc_share_relay_anon_all ON public.doc_share_relay
  FOR ALL TO anon, authenticated
  USING (true)
  WITH CHECK (true);

-- Optional: delete rows older than 1 day (run via cron or manually)
-- DELETE FROM public.doc_share_relay WHERE created_at < NOW() - INTERVAL '1 day';
