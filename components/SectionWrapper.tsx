
import React from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-20 md:py-28 animate-fade-in-up" style={{ animationFillMode: 'backwards' }}>
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-light">
          {title}
        </h2>
        <div className="inline-block w-24 h-1 bg-accent rounded-full"></div>
      </div>
      {children}
    </section>
  );
};

export default SectionWrapper;
