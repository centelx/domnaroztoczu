import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Features } from '../components/Features';
import { Gallery } from '../components/Gallery';
import { Testimonials } from '../components/Testimonials'; // <--- Import
import { Location } from '../components/Location';
import { Contact } from '../components/Contact';

export const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Features />
      <Gallery />
      <Testimonials /> {/* <--- Wstawione tutaj */}
      <Location />
      <Contact />
    </main>
  );
};
