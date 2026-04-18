// Single source of truth for the "AI Adoption Call" CTA.
// All AI Adoption Call buttons across the site point to the internal /assessment page,
// where the user can then click through to the external Brevo calendar.
// Note: this is currently a manual funnel — soon it will be a self-serve maturity tool.
export const BOOKING_URL = "/assessment";
export const BOOKING_LABEL = "AI Adoption Call";
export const BOOKING_NOTE = "Free · 30 min · Maturity score in 24h";

// External calendar link, used ONLY on the /assessment page itself.
export const CALENDAR_URL = "https://meet.brevo.com/razvan-valceanu";
