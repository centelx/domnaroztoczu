import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'white' | 'gray';
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = '',
  background = 'default',
}) => {
  const backgrounds = {
    default: 'bg-background',
    white: 'bg-surface',
    gray: 'bg-gray-50',
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${backgrounds[background]} ${className}`}
    >
      {children}
    </section>
  );
};
