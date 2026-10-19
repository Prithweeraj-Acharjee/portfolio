"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { HAORGRIX_LOGO } from "@/components/HaorGrixLogo.svg";

// The logo assembles piece by piece, then floats and tilts toward the cursor.
export default function HaorGrixMark({ className = "" }: { className?: string }) {
    const still = useReducedMotion();
    const ref = useRef<HTMLDivElement>(null);
    const px = useMotionValue(0);
    const py = useMotionValue(0);
    const rx = useSpring(useTransform(py, [-0.5, 0.5], [10, -10]), { stiffness: 80, damping: 16 });
    const ry = useSpring(useTransform(px, [-0.5, 0.5], [-12, 12]), { stiffness: 80, damping: 16 });

    const move = (e: React.PointerEvent) => {
        const b = ref.current?.getBoundingClientRect();
        if (!b) return;
        px.set((e.clientX - b.left) / b.width - 0.5);
        py.set((e.clientY - b.top) / b.height - 0.5);
    };

    return (
        <div
            ref={ref}
            onPointerMove={still ? undefined : move}
            onPointerLeave={() => { px.set(0); py.set(0); }}
            className={`relative [perspective:1200px] ${className}`}
            aria-label="HaorGrix logo"
            role="img"
        >
            <span aria-hidden className="hg-glow absolute inset-[12%] rounded-full" />
            <motion.div style={still ? undefined : { rotateX: rx, rotateY: ry }} className="relative">
                <div className={still ? "hg-logo hg-still" : "hg-logo"} dangerouslySetInnerHTML={{ __html: HAORGRIX_LOGO }} />
            </motion.div>
        </div>
    );
}
