import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import galleryFacial from "@/assets/gallery-facial.jpg";
import galleryNails from "@/assets/gallery-nails.jpg";
import galleryMassage from "@/assets/gallery-massage.jpg";
import gallerySalon from "@/assets/gallery-salon.jpg";
import galleryProducts from "@/assets/gallery-products.jpg";
import galleryReception from "@/assets/gallery-reception.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { src: galleryFacial, alt: "Tratamiento facial profesional" },
    { src: galleryNails, alt: "Servicios de manicura y pedicura" },
    { src: galleryMassage, alt: "Sala de masajes relajantes" },
    { src: gallerySalon, alt: "Interior del salón de belleza" },
    { src: galleryProducts, alt: "Productos de belleza premium" },
    { src: galleryReception, alt: "Recepción del centro de estética" },
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
            Descubre nuestras instalaciones y servicios
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-soft hover-lift"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
                onClick={() => setSelectedImage(null)}
                aria-label="Cerrar galería"
              >
                <X size={32} />
              </button>
              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
