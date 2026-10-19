"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

/* Lines that rise out of a mask, one after another. The wrapper is what gets observed,
   because the hidden lines sit outside their clipping box and never intersect. */
export function MaskLines({ lines, className, style, delay = 0, onLoad = false }: {
    lines: ReactNode[]; className?: string; style?: React.CSSProperties; delay?: number; onLoad?: boolean;
}) {
    const still = useReducedMotion();
    const trigger = onLoad
        ? { animate: "shown" }
        : { whileInView: "shown", viewport: { once: true, margin: "-6%" } };
    return (
        <motion.span className={className} style={style} initial={still ? false : "hidden"} {...trigger}>
            {lines.map((l, i) => (
                <span key={i} className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
                    <motion.span
                        className="block"
                        variants={{ hidden: { y: "110%" }, shown: { y: "0%" } }}
                        transition={{ duration: 1.1, delay: delay + i * 0.09, ease }}
                    >
                        {l}
                    </motion.span>
                </span>
            ))}
        </motion.span>
    );
}

export function FadeUp({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
    const still = useReducedMotion();
    return (
        <motion.div
            className={className}
            initial={still ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-6%" }}
            transition={{ duration: 1, delay, ease }}
        >
            {children}
        </motion.div>
    );
}
