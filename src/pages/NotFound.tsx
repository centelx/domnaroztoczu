import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home as HomeIcon } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-8xl md:text-9xl font-serif font-bold text-primary mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-text mb-4">
          Strona nie została znaleziona
        </h2>
        <p className="text-lg text-muted mb-8 max-w-md mx-auto">
          Wygląda na to, że zgubiłeś się w lesie. Wróć do strony głównej, aby
          odnaleźć drogę.
        </p>
        <Link to="/">
          <Button size="lg" className="inline-flex items-center space-x-2">
            <HomeIcon className="w-5 h-5" />
            <span>Wróć do strony głównej</span>
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};
