'use client'
import Image from 'next/image'
import { TechStack } from './TechStack'
import { DownloadCV } from './DownloadCV'
import { SectionContainer } from '../ui/SectionContainer'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <SectionContainer>
      <div className="bg-secondary rounded-2xl  p-8 w-full max-w-7xl mx-auto overflow-hidden relative flex flex-col lg:flex-row items-center lg:items-end gap-12 lg:gap-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-[220px] sm:w-[300px] lg:w-[400px] flex-shrink-0 aspect-square"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-[30%] rotate-3 animate-pulse"></div>
          <div className="relative h-full w-full overflow-hidden rounded-[28%] border-2 border-border  hover:shadow-xl transition-shadow duration-300">
            <Image 
              src="/images/profile.png"
              alt="Profile" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-500"
              priority
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="absolute w-16 h-16 bottom-0 right-0 bg-primary p-3 rounded-tl-lg "
            >
              <code className="text-primary-foreground font-bold text-sm">&lt;/&gt;</code>
            </motion.div>
          </div>
        </motion.div>
        <div className="flex flex-col gap-6 lg:gap-8 w-full lg:flex-1 items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-full lg:w-auto text-center lg:text-left"
          >
            <span className="inline-block mb-4 text-primary font-mono text-lg">
              Hey, I&apos;m Mohammad javad
            </span>
            <h1 className="text-4xl leading-tight md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">{`{Front End}`}</span> Developer
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg text-muted-foreground max-w-2xl text-center lg:text-left"
          >
            With expertise in cutting-edge technologies such as{' '}
            <span className="text-primary font-medium">NextJS</span>,{' '}
            <span className="text-rose-500 font-medium">React</span>, and{' '}
            <span className="text-blue-500 font-medium">Tailwind</span>...
            I deliver web solutions that are both innovative and robust.
          </motion.p>
          <div className="w-full">
            <TechStack />
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-3"
          >
            <DownloadCV />
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  )
}