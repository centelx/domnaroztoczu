import React from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <HomeIcon className="w-6 h-6" />
              <span className="text-xl font-serif font-bold">Dom na Roztoczu</span>
            </div>
            <p className="text-white/80 text-sm">
              Całoroczny dom ze strefą SPA w sercu Roztocza.
              Cisza, prywatność i komfort dla Twojego wypoczynku.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a href="tel:507618161" className="hover:text-accent transition-colors">
                  507 618 161
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a href="tel:502055223" className="hover:text-accent transition-colors">
                  502 055 223
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-white/80">Obrocz, Aleja Lipowa 73A, 22-470 Zwierzyniec</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Informacje</h3>
            <div className="space-y-2 text-sm">
              <Link
                to="/polityka-prywatnosci"
                className="block hover:text-accent transition-colors"
              >
                Polityka prywatności
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-white/80">
          <p>&copy; {currentYear} Dom na Roztoczu. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};
