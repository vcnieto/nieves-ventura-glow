import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Scissors, Sparkles, Droplet, Leaf, Heart, MessageCircle } from "lucide-react";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const serviceCategories = [
    {
      id: "pelo",
      name: "Pelo",
      icon: Scissors,
      services: [
        { name: "Corte de pelo", price: "Desde 25€" },
        { name: "Secado y peinado", price: "Desde 20€" },
        { name: "Color", price: "Desde 45€" },
        { name: "Mechas", price: "Desde 55€" },
        { name: "Tratamientos capilares", price: "Desde 30€" },
      ],
    },
    {
      id: "unas",
      name: "Uñas",
      icon: Sparkles,
      services: [
        { name: "Manicura clásica", price: "25€" },
        { name: "Manicura semipermanente", price: "35€" },
        { name: "Pedicura", price: "30€" },
        { name: "Pedicura semipermanente", price: "40€" },
        { name: "Nail art", price: "Desde 5€" },
      ],
    },
    {
      id: "facial",
      name: "Facial",
      icon: Droplet,
      services: [
        { name: "Limpieza facial profunda", price: "45€" },
        { name: "Tratamiento anti-edad", price: "Desde 60€" },
        { name: "Hidratación facial", price: "50€" },
        { name: "Peeling suave", price: "55€" },
        { name: "Tratamiento personalizado", price: "Consultar" },
      ],
    },
    {
      id: "depilacion",
      name: "Depilación",
      icon: Leaf,
      services: [
        { name: "Depilación con cera - Piernas completas", price: "30€" },
        { name: "Depilación con cera - Media pierna", price: "18€" },
        { name: "Depilación con cera - Axilas", price: "10€" },
        { name: "Depilación con cera - Ingles", price: "Desde 15€" },
        { name: "Depilación con hilo - Cejas", price: "8€" },
      ],
    },
    {
      id: "masaje",
      name: "Masaje & Cuerpo",
      icon: Heart,
      services: [
        { name: "Masaje relajante", price: "Desde 45€" },
        { name: "Masaje terapéutico", price: "Desde 50€" },
        { name: "Masaje descontracturante", price: "55€" },
        { name: "Exfoliación corporal", price: "40€" },
        { name: "Tratamiento reafirmante", price: "Desde 60€" },
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

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredServices.map((category, index) => {
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
                  <h3 className="text-2xl font-bold text-foreground">{category.name}</h3>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="services" className="border-none">
                    <AccordionTrigger className="text-primary hover:text-primary-hover font-medium">
                      Ver servicios y precios
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3 mt-2">
                        {category.services.map((service, idx) => (
                          <li key={idx} className="flex justify-between items-center text-sm">
                            <span className="text-foreground">{service.name}</span>
                            <span className="text-primary font-semibold">{service.price}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Button
                  asChild
                  className="w-full mt-4 bg-primary hover:bg-primary-hover text-primary-foreground"
                >
                  <a
                    href="https://wa.me/34647109213"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={18} />
                    Reservar por WhatsApp
                  </a>
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
