'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { FiArrowLeft, FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import 'swiper/css';
import 'swiper/css/pagination';
import type { Swiper as SwiperType } from 'swiper';

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  client: string;
  completionTime: string;
  technologies: string[];
  liveDemo?: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'FNT (Financial News Tracker)',
    description: 'FNT is a full-stack financial news management platform designed to track, categorize, and analyze news with a dynamic UI and advanced filters. Built with Next.js and Shadcn on the frontend, the platform features a robust backend using Express.js and Prisma with PostgreSQL database. The system incorporates Redis caching for improved performance and is fully containerized with Docker for seamless deployment and scalability.',
    images: ['/images/4.png','/images/6.png','/images/7.png','/images/8.png','/images/9.png'],
    client: 'Self-Project',
    completionTime: '3 months',
    technologies: ['Next js', 'Shadcn', 'Express.js', 'PostgreSQL', 'Prisma', 'Docker', 'Redis'],
  },
  {
    id: 2,
    title: 'Taskium',
    description: 'Taskium is an advanced task management application designed to help individuals and teams organize their work efficiently. The platform includes features such as recurring tasks, reminders, customizable categories, and progress tracking. Users can manage daily, weekly, or project-based to-dos with flexibility and ease. The intuitive UI and responsive design enhance productivity and make task organization seamless across devices.',
    images: ['/images/p1_1.jpg', '/images/p1_2.jpg', '/images/p1_3.jpg', '/images/p1_4.jpg', '/images/p1_5.jpg'],
    client: 'Pixium Labs',
    completionTime: '6 months',
    technologies: ['React', 'JavaScript', 'Stripe'],
  },
  {
    id: 3,
    title: 'UltraTrader',
    description: 'UltraTrader is a financial journaling web app designed for traders and investors to document, analyze, and track their trading activity. It offers real-time market data, performance visualization tools, and detailed statistics to help users evaluate and optimize their trading strategies. The platform also supports integration with various exchanges and brokers for seamless transaction import and portfolio synchronization.',
    images: ['/images/p2_1.png', '/images/p2_2.webp'],
    client: 'Pixium Labs',
    completionTime: '10 months',
    technologies: ['React', 'Next js', 'Tailwind', 'Stripe'],
    liveDemo: 'https://ultratrader.app/',
  },
  {
    id: 4,
    title: 'Accounting System',
    description: 'This Accounting System is a web-based solution tailored for small to medium-sized businesses to manage their finances. It features modules for expense tracking, income reporting, invoice generation, balance sheets, and real-time financial dashboards. The system offers role-based access and supports multi-currency accounting, providing a comprehensive overview of financial operations in one place.',
    images: ['/images/p3_1.png'],
    client: 'Acsid Maad',
    completionTime: '8 months',
    technologies: ['Next js', 'Tailwind'],
  },
  {
    id: 5,
    title: 'Wasil',
    description: 'Wasil is a logistics and shipping app that enables users to send products from the United States to Oman with ease. The platform simplifies package tracking, delivery status updates, customs documentation, and price estimation. Built for both individual users and small businesses, it ensures a smooth, reliable international shipping experience with a modern user interface.',
    images: ['/images/p4_1.png', '/images/p4_2.png'],
    client: 'Badals',
    completionTime: '1 months',
    technologies: ['Next js', 'Tailwind'],
    liveDemo: 'https://wa9il.me/',
  },
  {
    id: 6,
    title: 'Badals',
    description: 'Badals is a modern e-commerce platform that connects users with global brands such as Amazon, Nike, and more. It allows customers in the MENA region to browse, purchase, and receive products from international retailers. With features like product search, smart filtering, cart management, order tracking, and integration with global suppliers, Badals offers a seamless cross-border shopping experience.',
    images: ['/images/p5_1.png', '/images/p5_2.png'],
    client: 'Badals',
    completionTime: '12 months',
    technologies: ['Next js', 'MUI', 'GraphQl'],
    liveDemo: 'https://badals.com/',
  },
];

const Projects = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const allTechnologies = useMemo(() => {
    const techs = new Set<string>();
    projects.forEach(project => {
      project.technologies.forEach(tech => techs.add(tech));
    });
    return Array.from(techs);
  }, []);

  const filteredProjects = useMemo(() => {
    if (!selectedTech) return projects;
    return projects.filter(project => 
      project.technologies.includes(selectedTech)
    );
  }, [selectedTech]);

  const nextProject = () => {
    swiperRef?.slideNext();
  };

  const prevProject = () => {
    swiperRef?.slidePrev();
  };

  return (
    <SectionContainer className="!p-0">
      <div
        style={{
          backgroundImage: "url('/images/bg.png')",
          backgroundRepeat: 'repeat',
        }} 
        className="grid bg-cover grid-cols-1 gap-8 px-10 md:px-12 py-4 md:py-10 lg:py-12"
      >
        <div className="space-y-4">
          <h3 className="text-primary text-lg font-medium">• Projects</h3>
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">My Recent Works</h2>
          
          <div className="flex flex-wrap gap-2 mt-4">
            <Button
              variant={selectedTech === null ? "default" : "outline"}
              onClick={() => setSelectedTech(null)}
              className="text-sm"
            >
              All
            </Button>
            {allTechnologies.map((tech) => (
              <Button
                key={tech}
                variant={selectedTech === tech ? "default" : "outline"}
                onClick={() => setSelectedTech(tech)}
                className="text-sm"
              >
                {tech}
              </Button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTech}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative bg-secondary border-primary border rounded-lg p-6 min-h-[500px]"
          >
            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={1}
              allowTouchMove={false}
              className="relative"
              loop={true}
              autoplay={{ delay: 5000 }}
              modules={[Autoplay]}
            >
              {filteredProjects.map((project) => (
                <SwiperSlide key={project.id + project.title}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
                    <div className="flex items-center justify-center bg-white rounded-lg p-4 w-full h-[320px] md:h-[400px]">
                      <Image
                        src={project.images[0]}
                        alt={`${project.title} image 1`}
                        className="object-contain w-auto h-full max-h-full"
                        width={600}
                        height={400}
                        priority
                      />
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {project.description}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="font-medium">Client:</span>
                          <span>{project.client}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="font-medium">Duration:</span>
                          <span>{project.completionTime}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-sm"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        {project.liveDemo && (
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                          >
                            <FiExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                          >
                            <FiGithub className="w-4 h-4" />
                            View on Github
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="absolute bottom-6 right-6 flex gap-4">
              <Button
                onClick={prevProject}
                variant="outline"
                size="icon"
                className="w-10 h-10 rounded-full"
                aria-label="Previous project"
              >
                <FiArrowLeft className="w-4 h-4" />
              </Button>

              <Button
                onClick={nextProject}
                variant="outline"
                size="icon"
                className="w-10 h-10 rounded-full"
                aria-label="Next project"
              >
                <FiArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionContainer>
  );
};

export default Projects;
