import Image from 'next/image'
import { TechStack } from './TechStack'
import { DownloadCV } from './DownloadCV'
import { SectionContainer } from '../ui/SectionContainer'

export default function HeroSection() {
  return (
    <SectionContainer>
      <div className="flex flex-col lg:flex-row items-end gap-8 lg:gap-12">
        <div className="relative w-full max-w-[300px] lg:max-w-[400px] aspect-square">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-[30%] rotate-3"></div>
          <div className="relative h-full w-full overflow-hidden rounded-[28%] border-2 border-border">
            <Image 
              src="/profile.jpg"
              alt="Profile" 
              fill 
              className="object-cover"
              priority
            />
            <div className="absolute w-16 h-16 bottom-0 right-0 bg-primary p-3 rounded-tl-lg">
              <code className="text-primary-foreground font-bold text-sm">&lt;/&gt;</code>
            </div>
          </div>
        </div>
        
        <div className="flex w-full flex-col gap-4 text-center lg:text-left overflow-hidden">
          <span className="inline-block mb-4 text-primary font-mono">
            Hey, I&apos;m Mohammad javad
          </span>
          
          <h1 className="text-4xl leading-20 md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-primary">{`{Front End}`}</span>  Developer
          </h1>
          
          <p className="text-lg text-muted-foreground ">
            With expertise in cutting-edge technologies such as <span className="text-primary">NextJS</span>,
            <span className="text-rose-500"> React</span>, 
             and
            <span className="text-blue-500"> Tailwind</span>...
            I deliver web solutions that are both innovative and robust.
          </p>
          <div className="lg:max-w-1/2  overflow-hidden">
            <TechStack />
          </div>

          
          <div className="mt-3">
            <DownloadCV />
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}