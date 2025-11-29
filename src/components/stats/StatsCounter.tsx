import React, {useEffect, useState, useRef, useCallback} from 'react';
import { CgAwards } from "react-icons/cg";
import { GrUserExpert } from "react-icons/gr";
import { MdComputer } from "react-icons/md";

interface CounterItemProps {
    icon: React.ReactNode;
    endValue: number;
    label: string;
    duration?: number;
}

function CounterItem({ icon, endValue, label, duration = 2000 }: CounterItemProps) {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    const animateCounter = useCallback(() => {
        const startTime = Date.now();
        const updateCounter = () => {
            const currentTime = Date.now();
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            setCount(Math.floor(progress * endValue));
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        };
        requestAnimationFrame(updateCounter);
    }, [duration, endValue]);

    useEffect(() => {
        const target = countRef.current;

        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    animateCounter();
                }
            },
            { threshold: 0.1 }
        );

        if (target) {
            observer.observe(target);
        }

        return () => {
            if (target) {
                observer.unobserve(target);
            }
        };
    }, [animateCounter]);


    return (
        <div className="flex flex-col items-start  text-center">
            <div className="text-primary mb-3 ">{icon}</div>
            <div ref={countRef} className=" text-6xl font-semibold flex items-center">
                {count}
                <span className="ml-8  text-5xl">+</span>
            </div>
            <p className="text-muted-foreground">{label}</p>
        </div>
    );
}

export function StatsCounter() {
    return (
        <section
            className="bg-cover bg-center py-16 px-4"
            style={{
                backgroundImage: "url('/images/bg.png')",
                backgroundRepeat: 'repeat',
            }}
        >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around  gap-8  rounded-lg  px-4">
                <CounterItem
                    icon={<GrUserExpert className="text-3xl" />}
                    endValue={4}
                    label="Year Experience"
                />
                <CounterItem
                    icon={<MdComputer className="text-3xl" />}
                    endValue={16}
                    label="Projects Completed"
                />

                <CounterItem
                    icon={<CgAwards className="text-3xl" />}
                    endValue={2}
                    label="Awards Winner"
                />
            </div>
        </section>
    );
}
