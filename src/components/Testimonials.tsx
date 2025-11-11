import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      rating: 5,
      text: "Excelente trato y profesionalidad. Los tratamientos faciales son increíbles, mi piel nunca había estado mejor. Totalmente recomendable.",
    },
    {
      name: "Laura Martínez",
      rating: 5,
      text: "El ambiente es muy relajante y acogedor. Siempre salgo renovada después de cada visita. Nieves es una profesional de verdad.",
    },
    {
      name: "Carmen Rodríguez",
      rating: 5,
      text: "Llevo años viniendo y nunca me decepciona. Los resultados son duraderos y el trato es excepcional. Mi centro de estética de confianza.",
    },
  ];

  return (
    <section id="opiniones" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Lo que dicen nuestras clientas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            La satisfacción de nuestras clientas es nuestra mejor carta de presentación
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl shadow-soft p-6 hover-lift"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="text-primary fill-primary" size={20} />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
              <p className="text-foreground font-semibold">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <a
            href="#"
            className="text-primary hover:text-primary-hover font-medium underline"
          >
            Ver más opiniones en Google
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
