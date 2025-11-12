import { Instagram, Facebook, Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Nieves Ventura</h3>
            <p className="text-accent-foreground/80 mb-4">
              Centro de estética profesional en Valencia especializado en belleza y bienestar
              personal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#inicio" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/#servicios" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="/#galeria" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  Galería
                </a>
              </li>
              <li>
                <a href="/#opiniones" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  Opiniones
                </a>
              </li>
              <li>
                <a href="/#contacto" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <a
                  href="tel:+34647109213"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  +34 647 109 213
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <a
                  href="mailto:info@nievesventura.com"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  info@nievesventura.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-accent-foreground/80">
                  Carrer del Mestre Valls, 40
                  <br />
                  Camins al Grau, 46022 València, Valencia
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-foreground/20 pt-8 text-center text-sm text-accent-foreground/60">
          <p>© {currentYear} Nieves Ventura - Beauty & Self Care. Todos los derechos reservados.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-accent-foreground transition-colors">
              Política de Privacidad
            </a>
            {" · "}
            <a href="#" className="hover:text-accent-foreground transition-colors">
              Términos y Condiciones
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
