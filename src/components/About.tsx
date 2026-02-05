import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';

export const About: React.FC = () => {
  return (
    <Section id="about" background="white" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-12 text-center">
              Historia jednego oddechu
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-lg md:text-xl text-text leading-relaxed">
              Roztocze. Obrocz. Miejsce, w którym pierwszy poranek robi różnicę. To
              tutaj, po jednej nocy u znajomych, mój mąż wyszedł na taras, wziął
              głęboki oddech i powiedział: „Chciałbym tu mieszkać". Śmialiśmy się
              wtedy, że to chwila po imprezie i „przejdzie"… a jednak nie przeszło.
              Tak właśnie narodził się nasz domek – jako ucieczka od codzienności i
              miejsce, w którym naprawdę się śpi.
            </p>

            <p className="text-lg md:text-xl text-text leading-relaxed">
              Jeśli szukasz domku na wynajem na weekend i nie tylko, który daje ciszę, spokój, prywatność
              i komfort (a nie „nocleg jak każdy") – to może być dokładnie to.
              Jesteśmy w Obroczy, z dala od hałasu i głównych dróg, ale blisko tego,
              co fajne. Do Zwierzyńca masz 5 km, a z Lublina dojedziesz w godzinę.
              Wokół: pola, las, widoki „jak w górach" i spokój, którego w mieście po
              prostu nie ma.
            </p>

            <motion.blockquote
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative bg-accent/5 border-l-4 border-accent py-8 px-6 md:px-12 my-12 rounded-r-xl"
            >
              <p className="text-xl md:text-2xl font-serif italic text-primary leading-relaxed">
                Co daje największe „wow"? Wieczorem, gdy zapalają się girlandy w
                naszej strefie spa, a z tarasu ogląda się zachód słońca… dużo osób
                mówi, że w tym momencie naprawdę zaczynają odpoczywać.
              </p>
            </motion.blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
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
