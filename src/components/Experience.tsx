import { motion } from "framer-motion";
import { Award, Sparkles, Home, TrendingUp } from "lucide-react";

const Experience = () => {
  const features = [
    {
      icon: Award,
      title: "Profesionalidad",
      description: "Equipo experto con años de experiencia en el sector de la estética",
    },
    {
      icon: Sparkles,
      title: "Productos de Calidad",
      description: "Utilizamos las mejores marcas y productos profesionales del mercado",
    },
    {
      icon: Home,
      title: "Ambiente Relajante",
      description: "Espacio cuidado, íntimo y acogedor para tu máximo confort",
    },
    {
      icon: TrendingUp,
      title: "Resultados Duraderos",
      description: "Tratamientos efectivos con resultados visibles y de larga duración",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experiencia y Cuidado
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tu belleza y bienestar son nuestra prioridad
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-card rounded-2xl shadow-soft p-6 text-center hover-lift"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
