import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Section } from './ui/Section';

const ReviewCard: React.FC<{
  name: string;
  date: string;
  content: string;
  delay: number;
}> = ({ name, date, content, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="bg-white p-8 rounded-xl shadow-lg relative"
  >
    <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/20" />
    <div className="flex space-x-1 mb-4 text-accent">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-current" />
      ))}
    </div>
    <p className="text-text leading-relaxed mb-6 italic">"{content}"</p>
    <div>
      <p className="font-serif font-bold text-primary">{name}</p>
      <p className="text-xs text-muted uppercase tracking-wider">{date}</p>
    </div>
  </motion.div>
);

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Magda i Tomek',
      date: 'Wrzesień 2023',
      content:
        'Szukaliśmy miejsca, żeby uciec od miasta i po prostu pobyć w ciszy. To było to. Wieczory w balii pod gwiazdami to absolutny sztos. Domek jest tak urządzony, że od razu czujesz się jak u siebie, a nie jak w hotelu. Na pewno wrócimy zimą.',
    },
    {
      name: 'Rodzina Kowalskich',
      date: 'Lipiec 2023',
      content:
        'Dzieciaki zachwycone przestrzenią do biegania, my bliskością kajaków. Rano kawa na tarasie smakuje tu obłędnie. Super kontakt z właścicielami – widać, że wkładają w to miejsce całe serce. Czysto, pachnąco i z klimatem.',
    },
    {
      name: 'Kasia',
      date: 'Październik 2023',
      content:
        'Obawiałam się trochę jesiennej pogody, ale kominek i sauna zrobiły robotę. Idealne miejsce na babski wyjazd. Jest bardzo prywatnie, nikt nie zagląda w okna, a do Zwierzyńca rzut beretem. Polecam z czystym sumieniem!',
    },
  ];

  return (
    <Section id="testimonials" background="accent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
            Wasze historie
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
            Najlepszą wizytówką są wspomnienia naszych Gości.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              {...review}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Podsumowanie ocen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary rounded-2xl p-8 md:p-12 text-center text-white max-w-4xl mx-auto relative overflow-hidden"
        >
          {/* Dekoracyjne tło */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute right-0 top-0 transform translate-x-1/3 -translate-y-1/3 bg-accent w-64 h-64 rounded-full blur-3xl"></div>
             <div className="absolute left-0 bottom-0 transform -translate-x-1/3 translate-y-1/3 bg-accent w-64 h-64 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:space-x-12 space-y-6 md:space-y-0">
            <div className="text-center md:text-right">
              <div className="text-6xl font-serif font-bold text-white mb-2">4.9</div>
              <div className="flex justify-center md:justify-end space-x-1 text-accent mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-white/70 text-sm">Średnia ocena Gości</p>
            </div>
            
            <div className="h-px w-full md:w-px md:h-24 bg-white/20"></div>

            <div className="text-center md:text-left max-w-md">
              <p className="text-lg md:text-xl font-serif italic mb-4">
                "Miejsce, do którego chce się wracać. Cisza, której w mieście nie znajdziesz."
              </p>
              <p className="text-white/70 text-sm">
                Dziękujemy za zaufanie i setki wspaniałych opinii na Booking i Google.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
