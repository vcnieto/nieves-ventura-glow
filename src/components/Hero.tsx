import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-beauty.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Centro de estética Nieves Ventura"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
              Tu bienestar empieza aquí
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-2xl mx-auto text-balance">
              Cuidado personal, belleza y relax con la profesionalidad de siempre
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-elegant text-lg px-8 py-6"
              >
                <a
                  href="https://wa.me/34647109213"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle size={20} />
                  Reservar por WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
              >
                <a href="#servicios">Ver Servicios</a>
              </Button>
            </div>
          </motion.div>

          {/* Featured Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 bg-card rounded-2xl shadow-elegant p-6 max-w-2xl mx-auto"
          >
            <p className="text-foreground text-lg">
              Centro de estética profesional en Valencia especializado en tratamientos de belleza,
              cuidado facial, corporal y bienestar personal
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#servicios"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ArrowDown size={32} />
      </motion.a>
    </section>
  );
};

export default Hero;
