import { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

export function SectionContainer({ children, className = '' }: SectionContainerProps) {
  return (
    <section className={`w-full px-4 md:px-6 flex items-center justify-center py-8 md:py-20 lg:py-24 bg-secondary animated-border ${className}`}>
      <div className="container ">
        {children}
      </div>
    </section>
  );
}