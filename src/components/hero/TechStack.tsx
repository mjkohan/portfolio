'use client';

import React from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import {
    FaReact,
    FaNodeJs,
    FaBootstrap,
    FaGit,
    FaDocker,
    FaHtml5,
    FaCss3Alt,
} from 'react-icons/fa';
import {
    SiTypescript,
    SiNextdotjs,
    SiMui,
    SiRedux,
    SiJavascript,
} from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';

type TechItem = {
    name: string;
    icon: React.ElementType;
};

const techStack: TechItem[] = [
    { name: 'HTML5', icon: FaHtml5 },
    { name: 'CSS3', icon: FaCss3Alt },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'React', icon: FaReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Redux', icon: SiRedux },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'Tailwind CSS', icon: RiTailwindCssFill },
    { name: 'Bootstrap', icon: FaBootstrap },
    { name: 'MUI', icon: SiMui },
    { name: 'Git', icon: FaGit },
    { name: 'Docker', icon: FaDocker },
];

export function TechStack() {
    const duplicatedStack = [...techStack, ...techStack, ...techStack];

    return (
        <div className="overflow-hidden w-full max-w-full">
            <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
                {duplicatedStack.map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                        <TooltipProvider key={`${tech.name}-${index}`}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <div className="inline-flex w-12 h-12 mx-2 items-center justify-center rounded-md bg-secondary p-2 transition-transform hover:scale-110">
                                        <IconComponent className="text-5xl" />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{tech.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    );
                })}
            </div>
        </div>
    );
}

