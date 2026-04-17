import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const PRICE_MAP: Record<string, { price: string; label: string }> = {
  ai_small_team: { price: "price_1TNId8KtdNO0AobaSsdYpovv", label: "AI for Non-Technical — Small Team" },
  ai_standard: { price: "price_1TNIdPKtdNO0AobaxnDZNfWK", label: "AI for Non-Technical — Standard" },
  hermes_self: { price: "price_1TNIdjKtdNO0AobaA492TGNf", label: "Hermes Agent — Self-directed" },
  hermes_full: { price: "price_1TNIfkKtdNO0AobapnG5sDGg", label: "Hermes Agent — Full Build" },
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
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

    const origin = req.headers.get("origin") ?? "https://tuslast.lovable.app";

    const session = await stripe.checkout.sessions.create({
      line_items: [{ price: entry.price, quantity: 1 }],
      mode: "payment",
      billing_address_collection: "required",
      success_url: `${origin}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/payment-canceled`,
      metadata: { product_key: productKey, label: entry.label },
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("create-payment error:", message);
    return new Response(JSON.stringify({ error: message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
