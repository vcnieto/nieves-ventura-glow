import { motion } from "framer-motion";
import foto1 from "@/assets/foto1.png";
import foto2 from "@/assets/foto2.png";
import foto3 from "@/assets/foto3.png";
import foto4 from "@/assets/foto4.png";

const Gallery = () => {
  const row = [
    { src: foto1, alt: "Galería Nieves Ventura 1" },
    { src: foto2, alt: "Galería Nieves Ventura 2" },
    { src: foto3, alt: "Galería Nieves Ventura 3" },
    { src: foto4, alt: "Galería Nieves Ventura 4" },
  ];

  return (
    <section id="galeria" className="py-20 bg-warm-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Galería</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un vistazo a nuestro espacio y servicios
          </p>
        </motion.div>

        {/* Marquee row */}
        <div className="marquee max-w-7xl mx-auto">
          <div className="marquee-content gap-6">
            {[...row, ...row].map((image, index) => (
              <div key={index} className="relative w-72 h-72 rounded-2xl overflow-hidden shadow-soft flex-shrink-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading={index < 4 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
