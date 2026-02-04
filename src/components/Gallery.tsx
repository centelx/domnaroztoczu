import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';

interface GalleryImageProps {
  src: string;
  alt: string;
  delay: number;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      className="relative overflow-hidden rounded-xl shadow-lg aspect-square md:aspect-auto md:h-80"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </motion.div>
  );
};

export const Gallery: React.FC = () => {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1449156493391-d2cfa28e468b?auto=format&fit=crop&w=800&q=80',
      alt: 'Dom na Roztoczu - widok zewnętrzny',
    },
    {
      src: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=800&q=80',
      alt: 'Kominek w salonie',
    },
    {
      src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
      alt: 'Strefa SPA z balią',
    },
    {
      src: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80',
      alt: 'Las i przyroda wokół domu',
    },
    {
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      alt: 'Przestronny salon',
    },
    {
      src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
      alt: 'Taras z widokiem na las',
    },
    {
      src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80',
      alt: 'Komfortowa sypialnia',
    },
    {
      src: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=800&q=80',
      alt: 'Sauna w strefie SPA',
    },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <GalleryImage
              key={index}
              src={image.src}
              alt={image.alt}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
