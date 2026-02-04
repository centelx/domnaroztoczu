import React from 'react';
import { motion } from 'framer-motion';
import { Waves, Users, Dog, Flame, Film, Coffee } from 'lucide-react';
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
      title: 'Strefa SPA',
      description:
        'Sauna, balia i jacuzzi pod gołym niebem. Wieczorem, w blasku girland, to czysta magia.',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Komfort dla 7 osób',
      description:
        '2 sypialnie, salon z kominkiem, antresola. Idealne dla rodzin i grup przyjaciół.',
    },
    {
      icon: <Dog className="w-12 h-12" />,
      title: 'Prywatność',
      description:
        'Ogrodzony teren, brak sąsiadów zaglądających w okna. Bezpiecznie dla dzieci i psów.',
    },
    {
      icon: <Flame className="w-12 h-12" />,
      title: 'Miejsce na ognisko',
      description:
        'Wieczory przy ognisku i grillu. Hamaki, dobra książka i szum lasu w tle.',
    },
    {
      icon: <Film className="w-12 h-12" />,
      title: 'Kino domowe',
      description:
        'Rzutnik kinowy na wieczorne seanse. Idealne dla rodzinnych wieczorów filmowych.',
    },
    {
      icon: <Coffee className="w-12 h-12" />,
      title: 'Kominek i taras',
      description:
        'Przytulny kominek w salonie i przestronny taras z widokiem na las.',
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
