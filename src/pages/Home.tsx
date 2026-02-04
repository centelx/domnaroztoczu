import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Features } from '../components/Features';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';

export const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Features />
      <Gallery />
      <Contact />
    </main>
  );
};
