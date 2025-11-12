import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Scissors, Sparkles, Droplet, Leaf, Heart, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type ServicesProps = { variant?: "section" | "page" };

const Services = ({ variant = "section" }: ServicesProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [openCategoryId, setOpenCategoryId] = useState<string | undefined>(undefined);

  const serviceCategories = [
    {
      id: "pelo",
      name: "Pelo",
      icon: Scissors,
      services: [
        { name: "Corte de pelo", price: "25€", time: "45 min" },
        { name: "Secado y peinado", price: "20€", time: "35 min" },
        { name: "Color", price: "45€", time: "75 min" },
        { name: "Mechas", price: "55€", time: "105 min" },
        { name: "Tratamientos capilares", price: "30€", time: "45 min" },
      ],
    },
    {
      id: "unas",
      name: "Uñas",
      icon: Sparkles,
      services: [
        { name: "Manicura clásica", price: "25€", time: "40 min" },
        { name: "Manicura semipermanente", price: "35€", time: "60 min" },
        { name: "Pedicura", price: "30€", time: "50 min" },
        { name: "Pedicura semipermanente", price: "40€", time: "70 min" },
        { name: "Nail art", price: "5€", time: "20 min" },
      ],
    },
    {
      id: "facial",
      name: "Facial",
      icon: Droplet,
      services: [
        { name: "Limpieza facial profunda", price: "45€", time: "60 min" },
        { name: "Tratamiento anti-edad", price: "60€", time: "75 min" },
        { name: "Hidratación facial", price: "50€", time: "50 min" },
        { name: "Peeling suave", price: "55€", time: "50 min" },
        { name: "Tratamiento personalizado", price: "60€", time: "60 min" },
      ],
    },
    {
      id: "depilacion",
      name: "Depilación",
      icon: Leaf,
      services: [
        { name: "Depilación con cera - Piernas completas", price: "30€", time: "40 min" },
        { name: "Depilación con cera - Media pierna", price: "18€", time: "25 min" },
        { name: "Depilación con cera - Axilas", price: "10€", time: "15 min" },
        { name: "Depilación con cera - Ingles", price: "15€", time: "20 min" },
        { name: "Depilación con hilo - Cejas", price: "8€", time: "15 min" },
      ],
    },
    {
      id: "masaje",
      name: "Masaje & Cuerpo",
      icon: Heart,
      services: [
        { name: "Masaje relajante", price: "45€", time: "60 min" },
        { name: "Masaje terapéutico", price: "50€", time: "60 min" },
        { name: "Masaje descontracturante", price: "55€", time: "75 min" },
        { name: "Exfoliación corporal", price: "40€", time: "40 min" },
        { name: "Tratamiento reafirmante", price: "60€", time: "75 min" },
      ],
    },
  ];

  const categories = [
    { id: "all", label: "Todos" },
    ...serviceCategories.map((cat) => ({ id: cat.id, label: cat.name })),
  ];

  const filteredServices =
    selectedCategory === "all"
      ? serviceCategories
      : serviceCategories.filter((cat) => cat.id === selectedCategory);

  // Close any open panel when the selectedCategory changes
  useEffect(() => {
    setOpenCategoryId(undefined);
  }, [selectedCategory]);

  return (
    <section id="servicios" className="py-20 bg-warm-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una amplia gama de tratamientos profesionales para tu belleza y bienestar
          </p>
        </motion.div>

        {variant === "section" ? (
          <>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {serviceCategories.slice(0, 3).map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-2xl shadow-soft p-6 hover-lift"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{category.name}</h3>
                    </div>
                    <ul className="text-muted-foreground space-y-2">
                      {category.services.slice(0, 3).map((s, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          <span>{s.name}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
            <div className="text-center mt-10">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary-hover">
                <Link to="/servicios" className="inline-flex items-center gap-2">
                  Ver todos los servicios
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </>
        ) : (
          <>
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground hover:bg-primary-hover"
                      : "bg-card hover:bg-primary/10"
                  }
                >
                  {category.label}
                </Button>
              ))}
            </div>

            {/* Services Grid, custom single-open toggle per categoría */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {filteredServices.map((category, index) => {
                const Icon = category.icon;
                const isOpen = openCategoryId === category.id;
                const panelId = `panel-${category.id}`;
                const buttonId = `${panelId}-button`;
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-2xl shadow-soft p-6 hover-lift"
                  >
                    <button
                      id={buttonId}
                      className="w-full text-left"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenCategoryId(isOpen ? undefined : category.id)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="text-primary" size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground flex-1">{category.name}</h3>
                        <span className="text-muted-foreground">{isOpen ? "−" : "+"}</span>
                      </div>
                    </button>

                    {isOpen && (
                      <ul id={panelId} role="region" aria-labelledby={buttonId} className="space-y-2 mt-4">
                        {category.services.map((service, idx) => (
                          <li key={idx} className="flex justify-between items-center py-2 text-sm border-t first:border-t-0 border-border">
                            <span className="text-foreground">{service.name}</span>
                            <span className="flex items-baseline gap-3">
                              <span className="text-foreground font-semibold">{service.price}</span>
                              <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                {service.time}
                              </span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mt-12"
            >
              <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary-hover">
                <a
                  href="https://wa.me/34666666666"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle size={18} />
                  Reservar por WhatsApp
                </a>
              </Button>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};

export default Services;
