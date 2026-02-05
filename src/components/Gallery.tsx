import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { Section } from './ui/Section';

interface GalleryImageProps {
  src: string;
  alt: string;
  delay: number;
  onClick: () => void;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt, delay, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      className="relative overflow-hidden rounded-xl shadow-lg aspect-square md:aspect-auto md:h-80 cursor-pointer group"
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
        <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8" />
      </div>
    </motion.div>
  );
};

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Obsługa klawisza ESC do zamykania galerii
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const images = [
    { src: '/2.jpg', alt: 'Dom na Roztoczu - widok zewnętrzny' },
    { src: '/3.jpg', alt: 'Wnętrze domu' },
    { src: '/4.jpg', alt: 'Strefa wypoczynkowa' },
    { src: '/5.jpg', alt: 'Detale wystroju' },
    { src: '/6.jpg', alt: 'Okolica i natura' },
    { src: '/7.jpg', alt: 'Taras i ogród' },
    { src: '/8.jpg', alt: 'Udogodnienia' },
    { src: '/10.jpg', alt: 'Klimat miejsca' },
  ];

  return (
    <Section id="gallery" background="white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
            Galeria
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
            Zobacz, jak wygląda Twój przyszły wypoczynek
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <GalleryImage
              key={index}
              src={image.src}
              alt={image.alt}
              delay={index * 0.1}
              onClick={() => setSelectedImage(image.src)}
            />
          ))}
        </div>
      </div>

      {/* Modal / Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2"
            >
              <X className="w-8 h-8 md:w-10 md:h-10" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Powiększone zdjęcie"
              className="max-w-full max-h-[90vh] rounded-md shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()} // Zapobiega zamknięciu przy kliknięciu w samo zdjęcie
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};
