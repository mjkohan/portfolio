'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { SectionContainer } from "@/components/ui/SectionContainer";
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type CompanyKey = "Dana Pardaz" | "Acsid Maad" | "Badals" | "Pixium Labs";

interface ExperienceCardProps {
  company: CompanyKey;
  logo: string;
  period: string;
  isSelected: boolean;
  onClick: () => void;
}

const ExperienceCard = ({ company, logo, period, isSelected, onClick }: ExperienceCardProps) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={cn(
      "w-full p-4 rounded-lg border transition-all duration-200",
      isSelected
        ? "border-primary bg-primary/5"
        : "border-border hover:border-primary/50"
    )}
  >
    <div className="flex items-center gap-4">
      <div className="relative w-12 h-12 rounded-lg overflow-hidden">
        <Image
          src={logo}
          alt={`${company} logo`}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 text-left">
        <h3 className="font-medium text-foreground">{company}</h3>
        <p className="text-sm text-muted-foreground">{period}</p>
      </div>
    </div>
  </motion.button>
);

const ExperienceItem = ({ text }: { text: string }) => (
  <motion.li
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className="flex items-start gap-2"
  >
    <span className="text-primary mt-1">•</span>
    <span className="text-muted-foreground">{text}</span>
  </motion.li>
);

const TechBadge = ({ name }: { name: string }) => (
  <Badge variant="secondary" className="text-sm">
    {name}
  </Badge>
);

const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState<CompanyKey>("Dana Pardaz");

  const experienceData: Record<CompanyKey, {
    title: string;
    description: string[];
    technologies: string[];
  }> = {
    "Dana Pardaz": {
      title: "Front-End Developer",
      description: [
        "Led migration of legacy CRM system to Next.js, reducing page load times by 60% and improving Core Web Vitals scores",
        "Built modular and extensible architecture using Ant Design component library, enabling rapid feature development and easy maintenance",
        "Designed scalable module‑based structure using SOLID design patterns and monorepo architecture, enabling seamless integration of new features without impacting existing functionality",
        "Applied system design principles to create robust, maintainable architecture with clear separation of concerns and modular components",
        "Created comprehensive technical documentation including API guides, migration procedures, and component libraries for team reference",
        "Leveraged AI‑powered tools for code generation and documentation, reducing development time and improving code quality through intelligent suggestions and error detection"
      ],
      technologies: ["Next.js", "Azure DevOps", "TypeScript", "Ant Design", "Redux"]
    },
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
    <SectionContainer className="!p-0">
      <div
        id="experience"
        style={{
          backgroundImage: "url('/images/bg.png')",
          backgroundRepeat: 'repeat',
        }}
        className="grid bg-cover grid-cols-1 gap-8 px-10 md:px-12 py-4 md:py-10 lg:py-12"
      >
        <div className="space-y-4">
          <h3 className="text-primary text-lg font-medium">• Experience</h3>
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Work History</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 space-y-4">
            <ExperienceCard 
              company="Dana Pardaz"
              logo="/images/dana.jpg"
              period="Sep 2025 - Present"
              isSelected={selectedCompany === "Dana Pardaz"}
              onClick={() => setSelectedCompany("Dana Pardaz")}
            />
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

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCompany}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="col-span-1 md:col-span-2 bg-secondary border border-border rounded-lg p-6"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {experienceData[selectedCompany].title}
                  </h3>
                  <ul className="space-y-4">
                    {experienceData[selectedCompany].description.map((text, index) => (
                      <ExperienceItem key={index} text={text} />
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {experienceData[selectedCompany].technologies.map((tech, index) => (
                    <TechBadge key={index} name={tech} />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Experience;