import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Index from "./pages/Index";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToHash = () => {
  const location = useLocation();
  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 50; // ~2.5s at 50ms intervals
    const timer = setInterval(() => {
      attempts += 1;
      if (location.hash) {
        const id = location.hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          clearInterval(timer);
          return;
        }
      }
      if (attempts >= maxAttempts) {
        clearInterval(timer);
        if (!location.hash) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }, 50);
    return () => clearInterval(timer);
  }, [location.pathname, location.hash]);
  return null;
};

const Servicios = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Services variant="page" />

        {/* CTA Reserva */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-card rounded-2xl shadow-elegant p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  ¿Lista para tu próxima reserva?
                </h3>
                <p className="text-muted-foreground text-lg">
                  Escríbenos por WhatsApp o utiliza el formulario de contacto para reservar tu servicio.
                </p>
              </div>
              <div className="flex gap-4 md:justify-end">
                <a
                  href="https://wa.me/34647109213"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-primary-foreground hover:bg-primary-hover transition-colors"
                >
                  Reservar por WhatsApp
                </a>
                <a
                  href="/#contacto"
                  className="inline-flex items-center justify-center rounded-md border-2 border-primary px-6 py-3 text-primary hover:bg-primary/10 transition-colors"
                >
                  Ir a Contacto
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

const Page = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Page><Index /></Page>} />
        <Route path="/servicios" element={<Page><Servicios /></Page>} />
        <Route path="*" element={<Page><NotFound /></Page>} />
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
        <ScrollToHash />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
