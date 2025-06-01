'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import {SectionContainer} from "@/components/ui/SectionContainer";
type CompanyKey = "Acsid Maad" | "Badals" | "Pixium Labs";

const Experience = () => {

  const [selectedCompany, setSelectedCompany] = useState<CompanyKey>("Acsid Maad");

  const experienceData: Record<CompanyKey, {
    title: string;
    description: string[];
    technologies: string[];
  }> = {
    "Acsid Maad": {
      title: "Front-End Developer",
      description: [
        "Designed and developed a web‑based systems using Next.js, ",
        "Integrated authentication and authorization mechanisms for secure user access and role‑based management",
        "Collaborated closely with backend developers to design and consume RESTful APIs for financial transactions and reporting."
      ],
      technologies: ["Next.js", "JavaScript", "TypeScript", "SHADCN/UI", "Zustand"]
    },
    "Badals": {
      title: "Front-End Developer",
      description: [
        "Developed front‑end applications using TypeScript and Next.js, implemented dynamic and interactive UI components, optimized performance for better user experience, integrated GraphQL APIs, and handled authentication using Context API",
        "Integrated payment gateways such as Thawani and Stripe, and implemented seamless order tracking with FedEx shipment services",
        "Designed and implemented a scalable multi‑tenant and multi‑language architecture for front‑end applications, ensuring adaptability and maintainability.",
        "Developed a visually appealing and responsive landing page to enhance user engagement and brand presence."
      ],
      technologies: ["Next.js", "JavaScript", "TypeScript", "Tailwind", "MUI", "GraphQl"]
    },
    "Pixium Labs": {
      title: "Front-End Engineer",
      description: [
        "Developed responsive and scalable web applications using React.js and Tailwind CSS, ensuring seamless user experiences.",
        "Integrated and optimized RESTful APIs for efficient data fetching and state management",
        "Implemented advanced UI components, dynamic dashboards, and real‑time features to enhance user engagement.",
        "Utilized Google Analytics and other tracking tools to monitor user interactions, improve performance, and optimize user experience."
      ],
      technologies: ["React.js", "Next.js", "JavaScript", "Tailwind"]
    }
  };


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
                isSelected={selectedCompany === "Acsid Maad"}
                onClick={() => setSelectedCompany("Acsid Maad")}
              />
              <ExperienceCard 
                company="Badals"
                logo="/images/badals.jpg"
                period="2023 - 2024"
                isSelected={selectedCompany === "Badals"}
                onClick={() => setSelectedCompany("Badals")}
              />
              <ExperienceCard 
                company="Pixium Labs"
                logo="/images/pixium.jpg"
                period="2021 - 2023"
                isSelected={selectedCompany === "Pixium Labs"}
                onClick={() => setSelectedCompany("Pixium Labs")}
              />
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                {experienceData[selectedCompany].title}
              </h3>
              <ul className="space-y-4">
                {experienceData[selectedCompany].description.map((text, index) => (
                  <ExperienceItem key={index} text={text} />
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              {experienceData[selectedCompany].technologies.map((tech, index) => (
                <TechBadge key={index} name={tech} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

const ExperienceCard = ({ 
  company, 
  logo, 
  period, 
  isSelected, 
  onClick 
}: { 
  company: string; 
  logo: string; 
  period: string; 
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <div 
      className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
        isSelected 
          ? "border-green-500 bg-green-50 dark:bg-gray-800" 
          : "border-gray-200 dark:border-gray-700 hover:border-green-300"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 relative flex-shrink-0">
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