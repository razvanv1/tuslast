import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Index from "./pages/Index";
import ForOperations from "./pages/ForOperations";
import ForHR from "./pages/ForHR";
import ForIT from "./pages/ForIT";
import Programmes from "./pages/Programmes";
import About from "./pages/About";
import Assessment from "./pages/Assessment";
import FeaturedStory from "./pages/FeaturedStory";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/for-operations" element={<PageTransition><ForOperations /></PageTransition>} />
        <Route path="/for-hr" element={<PageTransition><ForHR /></PageTransition>} />
        <Route path="/for-it" element={<PageTransition><ForIT /></PageTransition>} />
        <Route path="/programmes" element={<PageTransition><Programmes /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/assessment" element={<PageTransition><Assessment /></PageTransition>} />
        <Route path="/assessment" element={<PageTransition><Assessment /></PageTransition>} />
        <Route path="/story/the-unfreeze" element={<PageTransition><FeaturedStory /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
