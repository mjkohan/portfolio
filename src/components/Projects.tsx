'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
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
    title: 'Taskium',
    description: 'Taskium is an advanced task management application designed to help individuals and teams organize their work efficiently. The platform includes features such as recurring tasks, reminders, customizable categories, and progress tracking. Users can manage daily, weekly, or project-based to-dos with flexibility and ease. The intuitive UI and responsive design enhance productivity and make task organization seamless across devices.',
    images: ['/images/p1_1.jpg', '/images/p1_2.jpg', '/images/p1_3.jpg', '/images/p1_4.jpg', '/images/p1_5.jpg'],
    client: 'Pixium Labs',
    completionTime: '6 months',
    technologies: ['React', 'JavaScript', 'Stripe'],
  },
  {
    id: 2,
    title: 'UltraTrader',
    description: 'UltraTrader is a financial journaling web app designed for traders and investors to document, analyze, and track their trading activity. It offers real-time market data, performance visualization tools, and detailed statistics to help users evaluate and optimize their trading strategies. The platform also supports integration with various exchanges and brokers for seamless transaction import and portfolio synchronization.',
    images: ['/images/p2_1.png', '/images/p2_2.webp'],
    client: 'Pixium Labs',
    completionTime: '10 months',
    technologies: ['React', 'Next js', 'Tailwind', 'Stripe'],
    liveDemo: 'https://ultratrader.app/',
  },
  {
    id: 3,
    title: 'Accounting System',
    description: 'This Accounting System is a web-based solution tailored for small to medium-sized businesses to manage their finances. It features modules for expense tracking, income reporting, invoice generation, balance sheets, and real-time financial dashboards. The system offers role-based access and supports multi-currency accounting, providing a comprehensive overview of financial operations in one place.',
    images: ['/images/p3_1.png'],
    client: 'Acsid Maad',
    completionTime: '8 months',
    technologies: ['Next js', 'Tailwind'],
  },
  {
    id: 4,
    title: 'Wasil',
    description: 'Wasil is a logistics and shipping app that enables users to send products from the United States to Oman with ease. The platform simplifies package tracking, delivery status updates, customs documentation, and price estimation. Built for both individual users and small businesses, it ensures a smooth, reliable international shipping experience with a modern user interface.',
    images: ['/images/p4_1.png', '/images/p4_2.png'],
    client: 'Badals',
    completionTime: '1 months',
    technologies: ['Next js', 'Tailwind'],
    liveDemo: 'https://wa9il.me/',
  },
  {
    id: 5,
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
             }} className="grid bg-cover  grid-cols-1 gap-8 px-10 md:px-12 py-4 md:py-10 lg:py-12">
          <div className="">
            <h3 className="text-primary text-lg font-medium">• Projects</h3>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">My Recent Works</h2>
          </div>

          <div className="relative bg-secondary border-primary border rounded-lg p-6 min-h-[500px]">
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={1}
                allowTouchMove={false}
                className="relative"
                loop={true}
            >
              {projects.map((project) => (
                  <SwiperSlide key={project.id + project.title}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
                      <div className="relative aspect-video bg-secondary 0 rounded-lg">
                        <Swiper
                            autoplay={{ delay: 5000 }}
                            modules={[Pagination, Autoplay]}
                            pagination={{ clickable: true }}
                            spaceBetween={10}
                            slidesPerView={1}
                            className="relative"
                        >
                          {project.images.map((img, idx) => (
                              <SwiperSlide key={idx}>
                                <div className="relative w-full h-[500px] flex justify-center items-center bg-transparent">
                                  <Image
                                      src={img}
                                      alt={`${project.title} image ${idx + 1}`}
                                      style={{objectFit:"contain"}}
                                      priority
                                      fill
                                  />
                                </div>
                              </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>

                      <div className="flex flex-col">
                        <h3 className="text-2xl font-bold text-green-500 mb-4">{project.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>

                        <div className="">
                          <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Project Info</h4>
                          <div className="space-y-4">
                            <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                              <span className="text-gray-700 dark:text-gray-300">Client</span>
                              <span className="text-gray-800 dark:text-gray-200 font-medium">{project.client}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                              <span className="text-gray-700 dark:text-gray-300">Completion Time</span>
                              <span className="text-gray-800 dark:text-gray-200 font-medium">{project.completionTime}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                              <span className="text-gray-700 dark:text-gray-300">Technologies</span>
                              <span className="text-gray-800 dark:text-gray-200 font-medium">
                            {project.technologies.join(', ')}
                          </span>
                            </div>
                          </div>

                          <div className="flex gap-4 mt-6">
                            {project.liveDemo && (
                                <a
                                    href={project.liveDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-gray-800 dark:text-gray-200 hover:text-green-500 transition-colors"
                                >
                                  <FiArrowRight className="w-4 h-4 mr-2" />
                                  Live Demo
                                </a>
                            )}
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-gray-800 dark:text-gray-200 hover:text-green-500 transition-colors"
                                >
                                  <FiArrowRight className="w-4 h-4 mr-2" />
                                  View on Github
                                </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                  </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex justify-end gap-2">
              <button
                  onClick={prevProject}
                  className="w-12 h-12 rounded-full bg-muted cursor-pointer   flex items-center justify-center  hover:bg-green-100 dark:hover:bg-green-900 transition-colors"
                  aria-label="Previous project"
              >
                <FiArrowLeft className="w-5 h-5" />
              </button>

              <button
                  onClick={nextProject}
                  className="w-12 h-12 rounded-full bg-muted cursor-pointer  flex items-center justify-center  hover:bg-green-100 dark:hover:bg-green-900 transition-colors"
                  aria-label="Next project"
              >
                <FiArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>


        </div>
      </SectionContainer>
  );
};

export default Projects;
