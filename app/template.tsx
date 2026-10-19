"use client";

import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* Set after the first page has mounted in the browser, so the very first load
   (and the server render) skip the transition and hydrate identically. */
let navigated = false;

/* Runs on every route change: a crimson curtain sweeps off as the page settles in. */
export default function Template({ children }: { children: React.ReactNode }) {
    const still = useReducedMotion();
    const animate = navigated && !still;

    useEffect(() => {
        navigated = true;
    }, []);

    return (
        <>
            <motion.div
                aria-hidden
                className="fixed inset-0 z-[150] bg-bloodred pointer-events-none"
                initial={animate ? { clipPath: "inset(0 0 0% 0)" } : false}
                animate={{ clipPath: "inset(0 0 100% 0)" }}
                transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            />
            <motion.div
                initial={animate ? { opacity: 0, y: 40 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
                {children}
            </motion.div>
        </>
    );
}
