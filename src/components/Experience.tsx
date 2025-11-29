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
      "w-full p-4 rounded-lg bg-secondary border transition-all duration-200",
      isSelected
        ? "border-primary "
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
    className="flex gap-2"
  >
    <span className="text-primary shrink-0 leading-[1.5]">•</span>
    <span className="text-muted-foreground leading-[1.5]">{text}</span>
  </motion.li>
);

const TechBadge = ({ name }: { name: string }) => (
  <Badge variant="outline" className="text-sm">
    {name}
  </Badge>
);

const calculateDuration = (startDate: string, endDate: string | null): string => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  const parts: string[] = [];
  if (years > 0) {
    parts.push(`${years} ${years === 1 ? 'yr' : 'yrs'}`);
  }
  if (months > 0) {
    parts.push(`${months} ${months === 1 ? 'mo' : 'mos'}`);
  }
  
  return parts.length > 0 ? parts.join(' ') : '0 mos';
};

const formatPeriod = (startDate: string, endDate: string | null): string => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : null;
  
  const formatDate = (date: Date): string => {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  };
  
  const startFormatted = formatDate(start);
  const endFormatted = end ? formatDate(end) : 'Present';
  const duration = calculateDuration(startDate, endDate);
  
  return `${startFormatted} ‑ ${endFormatted} · ${duration}`;
};

const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState<CompanyKey>("Dana Pardaz");

  const experienceData: Record<CompanyKey, {
    title: string;
    description: string[];
    technologies: string[];
  }> = {
    "Dana Pardaz": {
      title: "Frontend Developer",
      description: [
        "Migrated a legacy CRM system to Next.js, cutting page load times by 60% and boosting Core Web Vitals scores",
        "Built a modular, scalable architecture with Ant Design and SOLID principles that makes adding features easier",
        "Created technical documentation and used AI tools to speed up development and improve code quality"
      ],
      technologies: ["Next.js", "Azure DevOps", "TypeScript", "Ant Design", "Redux"]
    },
    "Acsid Maad": {
      title: "Frontend Developer",
      description: [
        "Built a web-based accounting system with Next.js that automated manual work and cut operational time by 70%",
        "Set up automated workflows for invoices and financial reports, and optimized performance with SSR and caching for real-time data processing"
      ],
      technologies: ["Next.js", "JavaScript", "TypeScript", "SHADCN/UI", "Zustand"]
    },
    "Badals": {
      title: "Frontend Developer",
      description: [
        "Built a scalable e-commerce platform with an admin dashboard for real-time analytics, inventory, and order processing",
        "Optimized checkout flow and product pages to increase conversion rates, with responsive design across all devices"
      ],
      technologies: ["Next.js", "JavaScript", "TypeScript", "Tailwind", "MUI", "GraphQl"]
    },
    "Pixium Labs": {
      title: "Frontend Developer",
      description: [
        "Built a fast, responsive trading platform with React.js showing real-time market data and live price updates",
        "Did SEO optimization to increase organic traffic and created a reusable component library for faster development"
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
              period={formatPeriod("2025-09-01", null)}
              isSelected={selectedCompany === "Dana Pardaz"}
              onClick={() => setSelectedCompany("Dana Pardaz")}
            />
            <ExperienceCard 
              company="Acsid Maad"
              logo="/images/ac.png"
              period={formatPeriod("2024-07-01", "2025-09-01")}
              isSelected={selectedCompany === "Acsid Maad"}
              onClick={() => setSelectedCompany("Acsid Maad")}
            />
            <ExperienceCard 
              company="Badals"
              logo="/images/badals.jpg"
              period={formatPeriod("2023-09-01", "2024-07-01")}
              isSelected={selectedCompany === "Badals"}
              onClick={() => setSelectedCompany("Badals")}
            />
            <ExperienceCard 
              company="Pixium Labs"
              logo="/images/pixium.jpg"
              period={formatPeriod("2021-07-01", "2023-05-01")}
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
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {experienceData[selectedCompany].title}
                  </h3>
                  <ul className="space-y-2">
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