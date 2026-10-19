"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* First visit per session: a count to 100, then the curtain lifts. */
export default function Preloader() {
    const [show, setShow] = useState(false);
    const [n, setN] = useState(0);

    useEffect(() => {
        let seen = false;
        try { seen = sessionStorage.getItem("pp-intro") === "1"; } catch { /* storage blocked */ }
        if (seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        try { sessionStorage.setItem("pp-intro", "1"); } catch { /* storage blocked */ }
        const start = performance.now();
        const dur = 1400;
        let raf = 0;
        const tick = (t: number) => {
            setShow(true);
            const p = Math.min(1, (t - start) / dur);
            setN(Math.round((1 - Math.pow(1 - p, 3)) * 100));
            if (p < 1) raf = requestAnimationFrame(tick);
            else setTimeout(() => setShow(false), 220);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    key="pre"
                    className="fixed inset-0 z-[300] bg-void flex flex-col justify-between p-6 md:p-12"
                    initial={{ clipPath: "inset(0 0 0% 0)" }}
                    exit={{ clipPath: "inset(0 0 100% 0)" }}
                    transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
                >
                    <div className="flex justify-between text-[10px] uppercase tracking-[0.35em] text-mist/80">
                        <span>Prithweeraj Acharjee</span>
                        <span>Toledo / Habiganj</span>
                    </div>
                    <div className="flex items-end justify-between gap-6">
                        <span className="italic text-bone/70 text-xl md:text-3xl max-w-[16ch]" style={{ fontFamily: "var(--font-serif)" }}>
                            Painter, researcher, builder.
                        </span>
                        <span className="font-sans tabular-nums leading-none text-parchment text-[24vw] md:text-[14vw] tracking-tighter" style={{ fontWeight: 300 }}>
                            {n}
                        </span>
                    </div>
                    <div className="absolute left-0 bottom-0 h-[2px] bg-bloodred" style={{ width: `${n}%` }} />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
