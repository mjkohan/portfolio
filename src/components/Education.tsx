'use client';

import React from 'react';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { LuBookOpen } from 'react-icons/lu';
import { motion } from 'framer-motion';

interface EducationItem {
  period: string;
  institution: string;
  degree: string;
}

const educationData: EducationItem[] = [
  {
    period: '2025-Present',
    institution: 'Shahid Beheshti University',
    degree: 'Master of Science in Information Technology'
  },{
    period: '2020-2025',
    institution: 'K. N. Toosi University of Technology',
    degree: 'Computer Engineering Bachelor'
  },
  {
    period: '2017-2020',
    institution: 'Atomic Energy High School',
    degree: 'Mathematics'
  }
];

const EducationCard = ({ item, index }: { item: EducationItem; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-primary before:text-xl"
  >
    <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-2">
      <span className="text-muted-foreground font-medium">{item.period}:</span>
      <span className="text-primary font-medium">{item.institution}</span>
    </div>
    <p className="text-muted-foreground mt-1 ml-0 md:ml-[calc(4rem+0.5rem)]">
      {item.degree}
    </p>
  </motion.div>
);

const Education = () => {
  return (
    <SectionContainer className="!p-0">
      <div
        id={'education'}
        style={{
          backgroundImage: "url('/images/bg.png')",
          backgroundRepeat: 'repeat',
        }}
        className="grid bg-cover grid-cols-1 gap-8 px-10 md:px-12 py-4 md:py-10 lg:py-12"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4"
        >
          <div className="flex items-center gap-2">
            <LuBookOpen className="text-primary text-xl" />
            <h2 className="text-4xl font-bold text-foreground">Education</h2>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-secondary border border-border rounded-lg p-6 shadow-sm"
        >
          <ul className="space-y-8">
            {educationData.map((item, index) => (
              <li key={index}>
                <EducationCard item={item} index={index} />
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default Education;