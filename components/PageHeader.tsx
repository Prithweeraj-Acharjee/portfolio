"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MaskLines } from "@/components/fx/Reveal";

/* The opening block every inner page shares: an index label, a large serif title that
   rises in, and an optional intro and aside. */
export default function PageHeader({ index, label, title, intro, aside }: {
    index: string;
    label: string;
    title: ReactNode[];
    intro?: ReactNode;
    aside?: ReactNode;
}) {
    const still = useReducedMotion();
    return (
        <header className="px-6 md:px-12 pt-28 md:pt-40 pb-16 md:pb-24 border-b border-white/[0.06]">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.35em] text-mist/80 mb-8 md:mb-12">
                <span>({index}) {label}</span>
                <span className="hidden sm:inline">Prithweeraj Acharjee</span>
            </div>
            <h1>
                <MaskLines
                    onLoad
                    lines={title}
                    className="block text-[16vw] md:text-[9vw] leading-[0.86] tracking-[-0.035em] text-parchment"
                    style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
                />
            </h1>
            {(intro || aside) && (
                <motion.div
                    initial={still ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-10 md:mt-16 grid md:grid-cols-12 gap-8 items-end"
                >
                    {intro && <div className="md:col-span-6 text-base md:text-lg leading-relaxed text-bone/85">{intro}</div>}
                    {aside && <div className="md:col-span-5 md:col-start-8 md:justify-self-end">{aside}</div>}
                </motion.div>
            )}
        </header>
    );
}
