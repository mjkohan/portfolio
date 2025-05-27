import React from 'react';
import Image from 'next/image';
import {SectionContainer} from "@/components/ui/SectionContainer";

const Experience = () => {
  return (
    <SectionContainer className="py-16">
      <div id={'experience'} className="grid grid-cols-1 gap-8">
        <div className="mb-4">
          <h3 className="text-green-500 text-lg font-medium">• Experience</h3>
          <h2 className="text-4xl font-bold">
            <span className="text-gray-800 dark:text-gray-200">+4</span>{" "}
            <span className="text-gray-500">years of</span>{" "}
            <span className="text-gray-800 dark:text-gray-200">passion</span>{" "}
            <span className="text-gray-500">for</span>{" "}
            <br/>
            <span className="text-gray-800 dark:text-gray-200">front-end development</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1">
            <div className="space-y-6">
              <ExperienceCard 
                company="Acsid Maad"
                logo="/images/ac.png"
                period="2024 - 2025"
              />
              <ExperienceCard 
                company="Badals"
                logo="/images/badals.jpg"
                period="2023 - 2024"
              />
              <ExperienceCard 
                company="Pixium Labs"
                logo="/images/pixium.jpg"
                period="2021 - 2023"
              />

            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                Front-End Developer
              </h3>
              <ul className="space-y-4">
                <ExperienceItem text="Led development of scalable web applications, improving performance and user experience for millions of users." />
                <ExperienceItem text="Implemented modern JavaScript frameworks to enhance interactive functionality." />
                <ExperienceItem text="Collaborated with cross-functional teams to integrate new features seamlessly." />
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <TechBadge name="React" />
              <TechBadge name="Next.js" />
              <TechBadge name="TypeScript" />
              <TechBadge name="Tailwind" />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

const ExperienceCard = ({ company, logo, period }: { company: string; logo: string; period: string }) => {
  return (
    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12  relative flex-shrink-0">
          <Image className={'rounded-full'} width={120} height={120} src={logo} alt={company}/>
        </div>
        <div>
          <h4 className="font-bold text-gray-800 dark:text-gray-200">{company}</h4>
          <p className="text-gray-500 text-sm">{period}</p>
        </div>
      </div>
    </div>
  );
};

const ExperienceItem = ({ text }: { text: string }) => {
  return (
    <li className="flex items-start">
      <span className="text-green-500 mr-2 mt-1">•</span>
      <span className="text-gray-700 dark:text-gray-300">{text}</span>
    </li>
  );
};

const TechBadge = ({ name }: { name: string }) => {
  return (
    <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-md text-gray-700 dark:text-gray-300 text-sm">
      {name}
    </div>
  );
};

export default Experience;