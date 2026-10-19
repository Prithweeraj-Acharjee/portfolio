"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { MaskLines } from "@/components/fx/Reveal";

const slides = ["/hero/h-01.jpg", "/hero/h-02.jpg", "/hero/h-03.jpg", "/hero/h-04.jpg"];

const ease = [0.16, 1, 0.3, 1] as const;

export default function HomeHero() {
    const still = useReducedMotion();
    const ref = useRef<HTMLElement>(null);
    const [slide, setSlide] = useState(0);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
    const nameY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
    const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    useEffect(() => {
        if (still) return;
        const a = setInterval(() => setSlide((s) => (s + 1) % slides.length), 5200);
        return () => { clearInterval(a); };
    }, [still]);

    return (
        <section ref={ref} className="relative h-[100svh] min-h-[560px] w-full overflow-hidden">
            <motion.div className="absolute inset-0" style={still ? undefined : { y: imgY }}>
                <AnimatePresence initial={false}>
                    <motion.div
                        key={slide}
                        className="absolute inset-0"
                        initial={{ opacity: 0, scale: 1.12 }}
                        animate={{ opacity: 1, scale: 1.02 }}
                        exit={{ opacity: 0 }}
                        transition={{ opacity: { duration: 1.6 }, scale: { duration: 7, ease: "linear" } }}
                    >
                        <Image
                            src={slides[slide]}
                            alt=""
                            fill
                            priority={slide === 0}
                            sizes="100vw"
                            className="object-cover"
                            style={{ filter: "contrast(1.08) brightness(0.55) saturate(1.05)" }}
                        />
                    </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(8,8,8,0.85)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-void to-transparent" />
            </motion.div>

            <motion.div
                className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 pb-10 md:pb-12"
                style={still ? undefined : { opacity: fade }}
            >
                <motion.h1 style={still ? undefined : { y: nameY }} className="relative" aria-label="Prithwee">
                    <MaskLines
                        onLoad
                        delay={0.15}
                        lines={["Prithwee"]}
                        className="block text-[25vw] md:text-[21vw] leading-[0.78] tracking-[-0.045em] text-parchment"
                        style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
                    />
                </motion.h1>

                <div className="mt-6 md:mt-8">
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.9, ease }}
                        className="max-w-[34ch] text-sm md:text-base leading-relaxed text-bone/80"
                    >
                        Researcher, Painter<br />Cofounder, HaorGrix
                    </motion.p>
                </div>
            </motion.div>
        </section>
    );
}
