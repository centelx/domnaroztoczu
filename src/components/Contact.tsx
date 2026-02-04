import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', '4343a106-203d-4279-9980-da05e02f360f');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResult('Wiadomość wysłana! Dziękujemy.');
        form.reset();
      } else {
        setResult('Wystąpił błąd. Spróbuj ponownie lub zadzwoń.');
      }
    } catch (error) {
      setResult('Błąd połączenia.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" background="default">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
            Skontaktuj się z nami
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
            Napisz do nas lub zadzwoń. Odpowiemy szybko.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">
                Informacje kontaktowe
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-2">Telefon</h4>
                    <a
                      href="tel:507618161"
                      className="block text-muted hover:text-primary transition-colors"
                    >
                      507 618 161
                    </a>
                    <a
                      href="tel:502055223"
                      className="block text-muted hover:text-primary transition-colors"
                    >
                      502 055 223
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-2">Adres</h4>
                    <p className="text-muted">Aleja Lipowa 2</p>
                    <p className="text-muted">Obrocz</p>
                    <p className="text-muted mt-2 text-sm">
                      Z dala od hałasu, ale blisko tego, co ważne. 5 km do
                      Zwierzyńca, godzina drogi z Lublina.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-2">
                      Formularz kontaktowy
                    </h4>
                    <p className="text-muted">
                      Wypełnij formularz obok, a my skontaktujemy się z Tobą w
                      ciągu 24 godzin.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="Jan Kowalski"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="jan.kowalski@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="500 123 456"
                />
              </div>

              <div>
                <label htmlFor="dates" className="block text-sm font-medium text-text mb-2">
                  Preferowane daty (opcjonalnie)
                </label>
                <input
                  type="text"
                  id="dates"
                  name="dates"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="np. 15-20 lipca 2024"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  placeholder="Twoja wiadomość..."
                ></textarea>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}</span>
              </Button>

              {result && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center ${
                    result.includes('błąd') || result.includes('Błąd')
                      ? 'text-red-600'
                      : 'text-green-600'
                  }`}
                >
                  {result}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
