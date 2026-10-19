"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useMedia } from "@/lib/use-media";

/* A soft ring that trails the pointer. Any element with data-cursor="Label" grows it and shows the label. */
export default function Cursor() {
    const fine = useMedia("(pointer: fine)");
    const still = useMedia("(prefers-reduced-motion: reduce)");
    const enabled = fine && !still;
    const [label, setLabel] = useState<string | null>(null);
    const [down, setDown] = useState(false);
    const x = useMotionValue(-100);
    const y = useMotionValue(-100);
    const sx = useSpring(x, { stiffness: 420, damping: 34, mass: 0.5 });
    const sy = useSpring(y, { stiffness: 420, damping: 34, mass: 0.5 });

    useEffect(() => {
        if (!enabled) return;
        const move = (e: PointerEvent) => {
            x.set(e.clientX);
            y.set(e.clientY);
            const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor]");
            setLabel(el ? el.dataset.cursor || "" : null);
        };
        const press = () => setDown(true);
        const release = () => setDown(false);
        window.addEventListener("pointermove", move, { passive: true });
        window.addEventListener("pointerdown", press);
        window.addEventListener("pointerup", release);
        return () => {
            window.removeEventListener("pointermove", move);
            window.removeEventListener("pointerdown", press);
            window.removeEventListener("pointerup", release);
        };
    }, [enabled, x, y]);

    if (!enabled) return null;
    const big = label !== null && label !== "";

    return (
        <motion.div
            aria-hidden
            className="pointer-events-none fixed left-0 top-0 z-[200] flex items-center justify-center rounded-full border"
            style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
            animate={{
                width: big ? 96 : 22,
                height: big ? 96 : 22,
                backgroundColor: big ? "rgba(232,224,212,0.96)" : "rgba(232,224,212,0)",
                borderColor: big ? "rgba(232,224,212,0)" : "rgba(232,224,212,0.5)",
                scale: down ? 0.82 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
        >
            <AnimatePresence>
                {big && (
                    <motion.span
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                        className="text-[10px] uppercase tracking-[0.25em] text-void font-medium"
                    >
                        {label}
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
