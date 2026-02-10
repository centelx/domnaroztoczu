import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Car, Plane, TreePine, Beer, Waves, Home, Footprints } from 'lucide-react';
import { Section } from './ui/Section';

export const Location: React.FC = () => {
  const cities = [
    { name: 'Zamość (Perła Renesansu)', distance: '25 km', time: '30 min', icon: <Car className="w-5 h-5" /> },
    { name: 'Lotnisko Lublin (Świdnik)', distance: '90 km', time: '1h 15min', icon: <Plane className="w-5 h-5" /> },
    { name: 'Lublin', distance: '100 km', time: '1h 30min', icon: <Car className="w-5 h-5" /> },
    { name: 'Rzeszów', distance: '110 km', time: '1h 40min', icon: <Car className="w-5 h-5" /> },
    { name: 'Warszawa', distance: '270 km', time: '3h 15min', icon: <Car className="w-5 h-5" /> },
    { name: 'Kraków', distance: '280 km', time: '3h 30min', icon: <Car className="w-5 h-5" /> },
  ];

  const attractions = [
    { name: 'Roztoczański Park Narodowy', distance: '1.2 km', desc: 'Szlaki piesze i rowerowe tuż za rogiem', icon: <TreePine className="w-5 h-5" /> },
    { name: 'Spływy Kajakowe', distance: '300 m', desc: 'Start spływów rzeką Wieprz w Obroczy', icon: <Waves className="w-5 h-5" /> },
    { name: 'Pijalnia Piwa Zwierzyniec', distance: '4.3 km', desc: 'Zabytkowy browar i pyszne lokalne piwo', icon: <Beer className="w-5 h-5" /> },
    { name: 'Stawy Echo', distance: '6 km', desc: 'Plaża, kąpielisko i ostoja konika polskiego', icon: <Footprints className="w-5 h-5" /> },
    { name: 'Zagroda Guciów', distance: '4 km', desc: 'Skansen, regionalna kuchnia i warsztaty', icon: <Home className="w-5 h-5" /> },
    { name: 'Szumy nad Tanwią', distance: '28 km', desc: 'Słynne progi rzeczne (rezerwat przyrody)', icon: <Waves className="w-5 h-5" /> },
  ];

  return (
    <Section id="location" background="default" className="overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
            Wszędzie blisko
          </h2>
          <div className="flex items-center justify-center space-x-2 text-lg md:text-xl text-muted">
            <MapPin className="w-5 h-5 text-accent" />
            <span>Obrocz, Aleja Lipowa 73A, 22-470 Zwierzyniec</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Sekcja: Dojazd */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-serif font-bold text-primary mb-8 flex items-center">
              <span className="bg-white p-2 rounded-lg shadow-sm mr-3">
                <Car className="w-6 h-6 text-accent" />
              </span>
              Skąd do nas dojedziesz?
            </h3>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {cities.map((city, index) => (
                <div 
                  key={index}
                  className={`flex items-center justify-between p-5 hover:bg-gray-50 transition-colors ${
                    index !== cities.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-muted/60">{city.icon}</div>
                    <span className="font-medium text-text">{city.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-accent">{city.distance}</div>
                    <div className="text-xs text-muted">{city.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Sekcja: Atrakcje */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
             <h3 className="text-2xl font-serif font-bold text-primary mb-8 flex items-center">
              <span className="bg-white p-2 rounded-lg shadow-sm mr-3">
                <TreePine className="w-6 h-6 text-accent" />
              </span>
              Co zobaczysz w okolicy?
            </h3>
            <div className="grid gap-4">
              {attractions.map((attraction, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-accent/20 hover:border-accent"
                >
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-accent">{attraction.icon}</span>
                      <h4 className="font-bold text-primary">{attraction.name}</h4>
                    </div>
                    <span className="bg-accent/10 text-accent text-sm font-bold px-2 py-1 rounded-full whitespace-nowrap">
                      {attraction.distance}
                    </span>
                  </div>
                  <p className="text-sm text-muted ml-7">
                    {attraction.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
