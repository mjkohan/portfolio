'use client';

import React, { useRef } from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { motion, useAnimation, useInView } from 'framer-motion';

import Html5Icon from '../../../public/logos/html5.svg';
import Css3Icon from '../../../public/logos/css.svg';
import JavascriptIcon from '../../../public/logos/javascript.svg';
import TypescriptIcon from '../../../public/logos/typescript.svg';
import ReactIcon from '../../../public/logos/react.svg';
import NextjsIcon from '../../../public/logos/nextdotjs.svg';
import ReduxIcon from '../../../public/logos/redux.svg';
import NodejsIcon from '../../../public/logos/nodedotjs.svg';
import TailwindcssIcon from '../../../public/logos/tailwindcss.svg';
import BootstrapIcon from '../../../public/logos/bootstrap.svg';
import MuiIcon from '../../../public/logos/mui.svg';
import GitIcon from '../../../public/logos/git.svg';
import DockerIcon from '../../../public/logos/docker.svg';
import GraphqlIcon from '../../../public/logos/graphql.svg';

const techStack = [
    { name: 'HTML5', Icon: Html5Icon, color: '#E34F26' },
    { name: 'CSS3', Icon: Css3Icon, color: '#1572B6' },
    { name: 'JavaScript', Icon: JavascriptIcon, color: '#F7DF1E' },
    { name: 'TypeScript', Icon: TypescriptIcon, color: '#3178C6' },
    { name: 'React', Icon: ReactIcon, color: '#61DAFB' },
    { name: 'Next.js', Icon: NextjsIcon, color: '#000000' },
    { name: 'Redux', Icon: ReduxIcon, color: '#764ABC' },
    { name: 'Node.js', Icon: NodejsIcon, color: '#5FA04E' },
    { name: 'Tailwind CSS', Icon: TailwindcssIcon, color: '#06B6D4' },
    { name: 'Bootstrap', Icon: BootstrapIcon, color: '#7952B3' },
    { name: 'MUI', Icon: MuiIcon, color: '#007FFF' },
    { name: 'Git', Icon: GitIcon, color: '#F05032' },
    { name: 'Docker', Icon: DockerIcon, color: '#2496ED' },
    { name: 'GraphQL', Icon: GraphqlIcon, color: '#E10098' },
];

const duplicatedStack = [...techStack, ...techStack];

export function TechStack() {
    const rowRef = useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const isInView = useInView(rowRef, { once: false });

    React.useEffect(() => {
        let animationId: number;
        let start: number | null = null;
        const paused = false;
        const speed = 30; // px per second
        const row = rowRef.current;
        if (!row) return;
        const rowWidth = row.scrollWidth / 2;

        function animate(time: number) {
            if (paused) return;
            if (start === null) start = time;
            const elapsed = (time - start) / 1000;
            const x = -((elapsed * speed) % rowWidth);
            controls.set({ x });
            animationId = requestAnimationFrame(animate);
        }
        if (isInView) {
            animationId = requestAnimationFrame(animate);
        }
        return () => {
            cancelAnimationFrame(animationId);
        };
    }, [controls, isInView]);

    // Pause on hover
    const handleMouseEnter = () => controls.stop();
    const handleMouseLeave = () => {
        controls.start({}); // resume
    };

    return (
        <div className="relative w-full max-w-full overflow-hidden select-none">
            <motion.div
                ref={rowRef}
                className="flex"
                animate={controls}
                style={{ x: 0 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {duplicatedStack.map(({ name, Icon, color }, index) => (
                    <TooltipProvider key={`${name}-${index}`}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="inline-flex bg-white w-12 h-12 mx-2 items-center justify-center rounded-md p-2 transition-transform hover:scale-110 flex-shrink-0">
                                    <Icon fill={color} className="w-8 h-8" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{name}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                ))}
            </motion.div>
        </div>
    );
}
