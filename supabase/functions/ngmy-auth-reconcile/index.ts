// Merges duplicate Supabase Auth users that share the same email (e.g. Google + GitHub + email OTP).
// Keeps the oldest account with the most identities; removes extras so OAuth can auto-link.
// Deploy: supabase functions deploy ngmy-auth-reconcile --project-ref YOUR_PROJECT_REF

import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json().catch(() => ({}));
    const normalized = String(body?.email ?? "")
      .toLowerCase()
      .trim();
    if (!normalized || !normalized.includes("@")) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const url = Deno.env.get("SUPABASE_URL") ?? "";
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    if (!url || !serviceKey) {
      return new Response(JSON.stringify({ error: "Server misconfigured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const admin = createClient(url, serviceKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    const matching: Array<{
      id: string;
      email?: string;
      created_at?: string;
      identities?: Array<{ provider?: string }>;
    }> = [];

    let page = 1;
    while (page <= 20) {
      const { data, error } = await admin.auth.admin.listUsers({
        page,
        perPage: 1000,
      });
      if (error) throw error;
      for (const u of data.users) {
        const em = (u.email ?? "").toLowerCase().trim();
        if (em === normalized) matching.push(u);
      }
      if (data.users.length < 1000) break;
      page += 1;
    }

    if (matching.length <= 1) {
      return new Response(
        JSON.stringify({ ok: true, merged: 0, message: "No duplicate auth accounts" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    matching.sort((a, b) => {
      const ai = a.identities?.length ?? 0;
      const bi = b.identities?.length ?? 0;
      if (bi !== ai) return bi - ai;
      const at = new Date(a.created_at ?? 0).getTime();
      const bt = new Date(b.created_at ?? 0).getTime();
      return at - bt;
    });

    const primary = matching[0];
    const duplicates = matching.slice(1);
    let deleted = 0;

    for (const dup of duplicates) {
      if (!dup.id || dup.id === primary.id) continue;
      const { error } = await admin.auth.admin.deleteUser(dup.id);
      if (!error) deleted += 1;
    }

    return new Response(
      JSON.stringify({
        ok: true,
        merged: deleted,
        primaryId: primary.id,
        message: deleted > 0
          ? "Duplicate auth accounts removed. Sign in again with Google or GitHub."
          : "Could not remove duplicates",
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
