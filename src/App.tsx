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
const PrivacyPolicy = lazy(() => import("./pages/legal/PrivacyPolicy"));
const CookiePolicy = lazy(() => import("./pages/legal/CookiePolicy"));
const TermsAndConditions = lazy(() => import("./pages/legal/TermsAndConditions"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PaymentSuccess = lazy(() => import("./pages/PaymentSuccess"));
const PaymentCanceled = lazy(() => import("./pages/PaymentCanceled"));

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={null}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Index /></PageTransition>} />
          <Route path="/index" element={<Navigate to="/" replace />} />
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          <Route path="/for-operations" element={<Navigate to="/" replace />} />
          <Route path="/for-hr" element={<Navigate to="/" replace />} />
          <Route path="/for-it" element={<Navigate to="/" replace />} />
          <Route path="/programmes" element={<Navigate to="/programmes/ai-for-non-technical-people" replace />} />
          <Route path="/programmes/ai-for-non-technical-people" element={<PageTransition><AIForNonTechnical /></PageTransition>} />
          <Route path="/events" element={<PageTransition><Events /></PageTransition>} />
          <Route path="/funding" element={<PageTransition><Funding /></PageTransition>} />
          <Route path="/hermes" element={<PageTransition><Hermes /></PageTransition>} />
          <Route path="/resources" element={<PageTransition><Resources /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/assessment" element={<PageTransition><Assessment /></PageTransition>} />
          <Route path="/contact" element={<Navigate to="/assessment" replace />} />
          <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
          <Route path="/cookie-policy" element={<PageTransition><CookiePolicy /></PageTransition>} />
          <Route path="/terms-and-conditions" element={<PageTransition><TermsAndConditions /></PageTransition>} />
          <Route path="/payment-success" element={<PageTransition><PaymentSuccess /></PageTransition>} />
          <Route path="/payment-canceled" element={<PageTransition><PaymentCanceled /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
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
