import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#galeria", label: "Galería" },
    { href: "#opiniones", label: "Opiniones" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#inicio"
            className="text-2xl font-bold text-primary"
            whileHover={{ scale: 1.05 }}
          >
            Nieves Ventura
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="bg-primary hover:bg-primary-hover text-primary-foreground"
            >
              <a
                href="https://wa.me/34647109213"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservar Cita
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-foreground hover:text-primary transition-colors duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
            >
              <a
                href="https://wa.me/34647109213"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservar Cita
              </a>
            </Button>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
