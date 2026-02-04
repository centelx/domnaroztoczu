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
  // Zmiana: Lista zdjęć z folderu public (2-11.JPEG)
  const images = [
    {
      src: '/2.jpg',
      alt: 'Dom na Roztoczu - widok zewnętrzny',
    },
    {
      src: '/3.jpg',
      alt: 'Wnętrze domu',
    },
    {
      src: '/4.jpg',
      alt: 'Strefa wypoczynkowa',
    },
    {
      src: '/5.jpg',
      alt: 'Detale wystroju',
    },
    {
      src: '/6.jpg',
      alt: 'Okolica i natura',
    },
    {
      src: '/7.jpg',
      alt: 'Taras i ogród',
    },
    {
      src: '/8.jpg',
      alt: 'Udogodnienia',
    },
    {
      src: '/10.jpg',
      alt: 'Klimat miejsca',
    },
    {
      src: '/11.jpg',
      alt: 'Wieczorny nastrój',
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
