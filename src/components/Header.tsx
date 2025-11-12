import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleHomeClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/servicios", label: "Servicios" },
    { to: "/#galeria", label: "Galería" },
    { to: "/#opiniones", label: "Opiniones" },
    { to: "/#contacto", label: "Contacto" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-soft" : "bg-card/80 backdrop-blur-md shadow-soft"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/" onClick={handleHomeClick} className="flex items-center">
              <img
                src={logo}
                alt="Nieves Ventura"
                className="h-12 md:h-16 w-auto object-contain"
                fetchPriority="high"
                decoding="async"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={link.to === "/" ? handleHomeClick : undefined}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.label}
              </Link>
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
              <Link
                key={link.to}
                to={link.to}
                className="block text-foreground hover:text-primary transition-colors duration-300 font-medium"
                onClick={(e) => {
                  if (link.to === "/") {
                    handleHomeClick(e as unknown as React.MouseEvent<HTMLAnchorElement>);
                  }
                  setIsMobileMenuOpen(false);
                }}
              >
                {link.label}
              </Link>
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
