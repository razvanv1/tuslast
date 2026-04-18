import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";

// Allowlist of trusted origins. Used both for CORS and to construct
// Stripe success/cancel URLs — never trust the raw Origin header for redirects.
// Production: tuslast.lovable.app
// Lovable preview/sandbox iframes: *.lovable.app and *.lovableproject.com
const STATIC_ALLOWED_ORIGINS = new Set<string>([
  "https://tuslast.lovable.app",
]);
const ALLOWED_ORIGIN_SUFFIXES = [
  ".lovable.app",
  ".lovableproject.com",
  ".sandbox.lovable.dev",
];
const DEFAULT_ORIGIN = "https://tuslast.lovable.app";

const isAllowedOrigin = (origin: string | null): origin is string => {
  if (!origin) return false;
  if (STATIC_ALLOWED_ORIGINS.has(origin)) return true;
  try {
    const { protocol, hostname } = new URL(origin);
    if (protocol !== "https:") return false;
    return ALLOWED_ORIGIN_SUFFIXES.some((suffix) => hostname.endsWith(suffix));
  } catch {
    return false;
  }
};

const baseCorsHeaders = {
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  Vary: "Origin",
};

const corsFor = (req: Request) => {
  const reqOrigin = req.headers.get("origin");
  const allowed = isAllowedOrigin(reqOrigin) ? reqOrigin : DEFAULT_ORIGIN;
  return { ...baseCorsHeaders, "Access-Control-Allow-Origin": allowed };
};

const PRICE_MAP: Record<string, { price: string; label: string }> = {
  ai_small_team: { price: "price_1TNId8KtdNO0AobaSsdYpovv", label: "AI for Non-Technical — Small Team" },
  ai_standard: { price: "price_1TNIdPKtdNO0AobaxnDZNfWK", label: "AI for Non-Technical — Standard" },
  hermes_self: { price: "price_1TNIdjKtdNO0AobaA492TGNf", label: "Hermes Agent — Self-directed" },
  hermes_full: { price: "price_1TNIfkKtdNO0AobapnG5sDGg", label: "Hermes Agent — Full Build" },
};

serve(async (req) => {
  const corsHeaders = corsFor(req);

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Reject requests from origins not in the allowlist. Browsers enforce CORS,
    // but server-side checks block scripted/curl callers from abusing the endpoint.
    const reqOrigin = req.headers.get("origin");
    if (!isAllowedOrigin(reqOrigin)) {
      return new Response(JSON.stringify({ error: "Forbidden" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 403,
      });
    }

    const body = await req.json().catch(() => ({}));
    const productKey = typeof body?.product === "string" ? body.product : "";
    const entry = PRICE_MAP[productKey];

    if (!entry) {
      return new Response(JSON.stringify({ error: "Invalid product key" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      });
    }

    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) {
      return new Response(JSON.stringify({ error: "Stripe is not configured" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      });
    }

    const stripe = new Stripe(stripeKey, { apiVersion: "2025-08-27.basil" });

    // Build redirect URLs from the allowlisted origin only — never the raw header.
    const redirectOrigin = reqOrigin;

    const session = await stripe.checkout.sessions.create({
      line_items: [{ price: entry.price, quantity: 1 }],
      mode: "payment",
      billing_address_collection: "required",
      success_url: `${redirectOrigin}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${redirectOrigin}/payment-canceled`,
      metadata: { product_key: productKey, label: entry.label },
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    // Log full detail server-side; return a generic message to clients to avoid
    // leaking Stripe configuration / API key / account state details.
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("create-payment error:", message);
    return new Response(
      JSON.stringify({ error: "Payment session could not be created. Please try again." }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      },
    );
  }
});
