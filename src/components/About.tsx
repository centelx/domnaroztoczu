import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';

export const About: React.FC = () => {
  return (
    <Section id="about" background="white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-8 text-center">
              Wszystko zaczęło się od jednego oddechu.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-lg md:text-xl text-text leading-relaxed mb-6">
              To tutaj, po jednej nocy u znajomych, wyszliśmy na taras, wzięliśmy
              głęboki oddech i wiedzieliśmy – chcemy tu zostać. Tak narodził się
              ten dom.
            </p>
            <p className="text-lg md:text-xl text-text leading-relaxed mb-6">
              Jako ucieczka od codzienności, miejsce, gdzie pierwszy poranek robi
              różnicę, a sen jest naprawdę głęboki.
            </p>
            <p className="text-lg md:text-xl text-text leading-relaxed">
              Jeśli szukasz ciszy, prywatności i komfortu (a nie 'noclegu jak
              każdy') – zapraszamy na <strong>Aleję Lipową 2</strong>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">
                7
              </div>
              <div className="text-muted">osób</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">
                365
              </div>
              <div className="text-muted">dni w roku</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">
                100%
              </div>
              <div className="text-muted">prywatności</div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
