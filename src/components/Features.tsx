import React from 'react';
import { motion } from 'framer-motion';
import { Waves, Dog, Film, Wifi, UtensilsCrossed, Ship } from 'lucide-react';
import { Section } from './ui/Section';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  delay,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="text-accent mb-4">{icon}</div>
      <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-3">
        {title}
      </h3>
      <p className="text-text leading-relaxed">{description}</p>
    </motion.div>
  );
};

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Waves className="w-12 h-12" />,
      title: 'Strefa SPA & Klimat',
      description:
        'Sauna, balia, jacuzzi i girlandy świetlne. Do tego ogromny taras ze stołem, grillem i bujany fotel – idealny przy kominku lub na zewnątrz.',
    },
    {
      icon: <Ship className="w-12 h-12" />,
      title: 'Kajaki',
      description:
        'Kajaki na wyciągnięcie ręki – zaledwie 300 metrów od domku. Płyniesz rzeką, a po wyprawie zapewniamy transport powrotny prosto do domu.',
    },
    {
      icon: <Film className="w-12 h-12" />,
      title: 'Kino i Rozrywka',
      description:
        'Opcja „kina" (rzutnik i płótno na wieczorny seans), miejsce na ognisko (zima/lato), leżaki i huśtawki. Rowery do dyspozycji gości.',
    },
    {
      icon: <Dog className="w-12 h-12" />,
      title: 'Komfort i Prywatność',
      description:
        'Teren jest w pełni ogrodzony (bezpiecznie dla dzieci i psów). W środku wyposażona kuchnia ze zmywarką, 3 komplety ręczników (również do SPA), Wi-Fi i TV.',
    },
    {
      icon: <UtensilsCrossed className="w-12 h-12" />,
      title: 'Pełne Wyposażenie',
      description:
        'Kuchnia w pełni wyposażona z nowoczesnymi urządzeniami, przestronny salon z kominkiem, 2 sypialnie plus antresola. Wszystko, czego potrzebujesz do komfortowego pobytu.',
    },
    {
      icon: <Wifi className="w-12 h-12" />,
      title: 'Nowoczesne Udogodnienia',
      description:
        'Szybkie Wi-Fi, telewizor, klimatyzacja, grzejniki, ogrzewanie podłogowe, płyny pod prysznicem. Komfort na najwyższym poziomie przez cały rok.',
    },
  ];

  return (
    <Section id="features" background="default">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
            Co zyskujesz?
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
            Wszystko, czego potrzebujesz do idealnego wypoczynku w jednym miejscu.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
