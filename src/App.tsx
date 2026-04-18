import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CookieConsent from "@/components/CookieConsent";
import LangRoute from "@/components/LangRoute";
import { BauhausDefs } from "@/components/bauhaus/BauhausShapes";
import Index from "./pages/Index";

// Non-critical routes are code-split to keep the initial bundle small.
// The home route ("/") stays eager because it owns the LCP image.
const AIForNonTechnical = lazy(() => import("./pages/AIForNonTechnical"));
const Events = lazy(() => import("./pages/Events"));
const Funding = lazy(() => import("./pages/Funding"));
const About = lazy(() => import("./pages/About"));
const Assessment = lazy(() => import("./pages/Assessment"));
const Resources = lazy(() => import("./pages/Resources"));
const Hermes = lazy(() => import("./pages/Hermes"));
const AIAdoptionScore = lazy(() => import("./pages/AIAdoptionScore"));
const PrivacyPolicy = lazy(() => import("./pages/legal/PrivacyPolicy"));
const CookiePolicy = lazy(() => import("./pages/legal/CookiePolicy"));
const TermsAndConditions = lazy(() => import("./pages/legal/TermsAndConditions"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PaymentSuccess = lazy(() => import("./pages/PaymentSuccess"));
const PaymentCanceled = lazy(() => import("./pages/PaymentCanceled"));

const queryClient = new QueryClient();

const wrap = (lang: "en" | "ro", node: JSX.Element) => (
  <LangRoute lang={lang}>
    <PageTransition>{node}</PageTransition>
  </LangRoute>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={null}>
        <Routes location={location} key={location.pathname}>
          {/* EN - canonical, no prefix */}
          <Route path="/" element={wrap("en", <Index />)} />
          <Route path="/index" element={<Navigate to="/" replace />} />
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          <Route path="/for-operations" element={<Navigate to="/" replace />} />
          <Route path="/for-hr" element={<Navigate to="/" replace />} />
          <Route path="/for-it" element={<Navigate to="/" replace />} />
          <Route path="/programmes" element={<Navigate to="/programmes/ai-for-non-technical-people" replace />} />
          <Route path="/programmes/ai-for-non-technical-people" element={wrap("en", <AIForNonTechnical />)} />
          <Route path="/events" element={wrap("en", <Events />)} />
          <Route path="/funding" element={wrap("en", <Funding />)} />
          <Route path="/hermes" element={wrap("en", <Hermes />)} />
          <Route path="/resources" element={wrap("en", <Resources />)} />
          <Route path="/about" element={wrap("en", <About />)} />
          <Route path="/assessment" element={wrap("en", <Assessment />)} />
          <Route path="/ai-adoption-score" element={wrap("en", <AIAdoptionScore />)} />
          <Route path="/contact" element={<Navigate to="/assessment" replace />} />
          <Route path="/privacy-policy" element={wrap("en", <PrivacyPolicy />)} />
          <Route path="/cookie-policy" element={wrap("en", <CookiePolicy />)} />
          <Route path="/terms-and-conditions" element={wrap("en", <TermsAndConditions />)} />
          <Route path="/payment-success" element={wrap("en", <PaymentSuccess />)} />
          <Route path="/payment-canceled" element={wrap("en", <PaymentCanceled />)} />

          {/* RO - mirrored under /ro/ */}
          <Route path="/ro" element={wrap("ro", <Index />)} />
          <Route path="/ro/programmes" element={<Navigate to="/ro/programmes/ai-for-non-technical-people" replace />} />
          <Route path="/ro/programmes/ai-for-non-technical-people" element={wrap("ro", <AIForNonTechnical />)} />
          <Route path="/ro/events" element={wrap("ro", <Events />)} />
          <Route path="/ro/funding" element={wrap("ro", <Funding />)} />
          <Route path="/ro/hermes" element={wrap("ro", <Hermes />)} />
          <Route path="/ro/resources" element={wrap("ro", <Resources />)} />
          <Route path="/ro/about" element={wrap("ro", <About />)} />
          <Route path="/ro/assessment" element={wrap("ro", <Assessment />)} />
          <Route path="/ro/ai-adoption-score" element={wrap("ro", <AIAdoptionScore />)} />
          <Route path="/ro/contact" element={<Navigate to="/ro/assessment" replace />} />
          <Route path="/ro/privacy-policy" element={wrap("ro", <PrivacyPolicy />)} />
          <Route path="/ro/cookie-policy" element={wrap("ro", <CookiePolicy />)} />
          <Route path="/ro/terms-and-conditions" element={wrap("ro", <TermsAndConditions />)} />
          <Route path="/ro/payment-success" element={wrap("ro", <PaymentSuccess />)} />
          <Route path="/ro/payment-canceled" element={wrap("ro", <PaymentCanceled />)} />

          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BauhausDefs />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main className="min-h-screen">
          <AnimatedRoutes />
        </main>
        <Footer />
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
