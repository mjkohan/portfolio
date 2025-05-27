'use client';

import React from 'react';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { LuBookOpen } from 'react-icons/lu';

interface EducationItem {
  period: string;
  institution: string;
  degree: string;
}

const educationData: EducationItem[] = [
  {
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
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <LuBookOpen className="text-primary text-xl" />
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Education</h2>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-green-500/20 rounded-lg p-6 shadow-sm">
          <ul className="space-y-8">
            {educationData.map((item, index) => (
              <li key={index} className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-primary before:text-xl">
                <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-2">
                  <span className="text-gray-600 dark:text-gray-400 font-medium">{item.period}:</span>
                  <span className="text-primary font-medium">{item.institution}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-1 ml-0 md:ml-[calc(4rem+0.5rem)]">
                  {item.degree}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Education;