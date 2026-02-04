import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-24">
      <Section background="white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-8">
              Polityka Prywatności
            </h1>

            <div className="prose prose-lg max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                  1. Postanowienia ogólne
                </h2>
                <p className="text-text leading-relaxed">
                  Administratorem danych osobowych jest Właściciel Obiektu "Dom na
                  Roztoczu" przy ul. Aleja Lipowa 2, Obrocz. Dane osobowe są
                  przetwarzane zgodnie z przepisami Rozporządzenia Parlamentu
                  Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w
                  sprawie ochrony osób fizycznych w związku z przetwarzaniem danych
                  osobowych i w sprawie swobodnego przepływu takich danych oraz
                  uchylenia dyrektywy 95/46/WE (RODO).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                  2. Zakres zbieranych danych
                </h2>
                <p className="text-text leading-relaxed mb-3">
                  W ramach obsługi rezerwacji i kontaktu z gośćmi zbieramy następujące
                  dane osobowe:
                </p>
                <ul className="list-disc list-inside text-text space-y-2 ml-4">
                  <li>Imię i nazwisko</li>
                  <li>Adres e-mail</li>
                  <li>Numer telefonu</li>
                  <li>Preferowane daty rezerwacji</li>
                  <li>Treść wiadomości wysłanej przez formularz kontaktowy</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                  3. Cel i podstawa prawna przetwarzania danych
                </h2>
                <p className="text-text leading-relaxed">
                  Dane osobowe są przetwarzane wyłącznie w celu:
                </p>
                <ul className="list-disc list-inside text-text space-y-2 ml-4 mt-3">
                  <li>Obsługi zapytań i rezerwacji obiektu</li>
                  <li>Nawiązania kontaktu w sprawie wynajmu</li>
                  <li>Udzielenia odpowiedzi na pytania kierowane przez formularz kontaktowy</li>
                </ul>
                <p className="text-text leading-relaxed mt-3">
                  Podstawą prawną przetwarzania danych jest art. 6 ust. 1 lit. b RODO
                  (wykonanie umowy) oraz art. 6 ust. 1 lit. f RODO (uzasadniony interes
                  administratora).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                  4. Udostępnianie danych
                </h2>
                <p className="text-text leading-relaxed">
                  Dane osobowe nie są przekazywane osobom trzecim, z wyjątkiem sytuacji,
                  gdy jest to wymagane przepisami prawa lub niezbędne do realizacji usługi
                  (np. dostawcy usług IT obsługujący formularz kontaktowy).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                  5. Okres przechowywania danych
                </h2>
                <p className="text-text leading-relaxed">
                  Dane osobowe są przechowywane przez okres niezbędny do realizacji celu,
                  dla którego zostały zebrane, lub do momentu wycofania zgody (jeśli
                  zgoda jest podstawą przetwarzania). Po tym okresie dane są trwale
                  usuwane.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                  6. Prawa użytkownika
                </h2>
                <p className="text-text leading-relaxed mb-3">
                  Zgodnie z RODO przysługują Państwu następujące prawa:
                </p>
                <ul className="list-disc list-inside text-text space-y-2 ml-4">
                  <li>Prawo dostępu do swoich danych osobowych</li>
                  <li>Prawo do sprostowania danych</li>
                  <li>Prawo do usunięcia danych</li>
                  <li>Prawo do ograniczenia przetwarzania</li>
                  <li>Prawo do przenoszenia danych</li>
                  <li>Prawo do wniesienia sprzeciwu wobec przetwarzania</li>
                </ul>
                <p className="text-text leading-relaxed mt-3">
                  W celu realizacji powyższych praw prosimy o kontakt telefoniczny pod
                  numerami: 507 618 161 lub 502 055 223.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                  7. Pliki cookies
                </h2>
                <p className="text-text leading-relaxed">
                  Strona internetowa nie wykorzystuje plików cookies do śledzenia
                  użytkowników. Ewentualne pliki cookies mogą być używane wyłącznie przez
                  zewnętrzne usługi (np. formularz kontaktowy) i są niezbędne do ich
                  prawidłowego działania.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                  8. Kontakt
                </h2>
                <p className="text-text leading-relaxed">
                  W sprawach związanych z ochroną danych osobowych prosimy o kontakt:
                </p>
                <ul className="list-none text-text space-y-2 mt-3">
                  <li>Telefon: 507 618 161</li>
                  <li>Telefon: 502 055 223</li>
                  <li>Adres: Aleja Lipowa 2, Obrocz</li>
                </ul>
              </section>

              <section className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-muted">
                  Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};
