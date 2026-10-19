"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, type Variants } from "framer-motion";
import { useMedia } from "@/lib/use-media";

const lines = [
    { text: "Let's make", cls: "" },
    { text: "something", cls: "italic text-bone/80 md:pl-[12vw]" },
    { text: "that stays.", cls: "" },
];

// Each page reveals a different painting under the cursor; unlisted pages pick one from their path.
const byPage: Record<string, string> = {
    "/": "p-25",
    "/gallery": "p-02",
    "/research": "p-16",
    "/systems": "p-20",
    "/writing": "p-08",
    "/haorgrix": "p-23",
    "/about": "p-15",
};
const pool = Array.from({ length: 25 }, (_, i) => `p-${String(i + 1).padStart(2, "0")}`);
const paintingFor = (path: string) => {
    const key = byPage[path] ?? pool[[...path].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7) % pool.length];
    return `/artworks/paintings/${key}.jpg`;
};

const ease = [0.16, 1, 0.3, 1] as const;
const line: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.028 } } };
const letter: Variants = {
    hidden: { y: "110%", rotate: 6 },
    show: { y: "0%", rotate: 0, transition: { duration: 1, ease } },
};

export default function FooterCTA() {
    const still = useReducedMotion();
    const pathname = usePathname();
    const fine = useMedia("(pointer: fine)");
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(-999);
    const y = useMotionValue(-999);
    const sx = useSpring(x, { stiffness: 120, damping: 20 });
    const sy = useSpring(y, { stiffness: 120, damping: 20 });
    const r = useSpring(0, { stiffness: 90, damping: 18 });
    const mask = useMotionTemplate`radial-gradient(circle at ${sx}px ${sy}px, #000 0, #000 ${r}px, transparent calc(${r}px + 2px))`;

    const move = (e: React.PointerEvent) => {
        const b = ref.current?.getBoundingClientRect();
        if (!b) return;
        x.set(e.clientX - b.left);
        y.set(e.clientY - b.top);
    };

    return (
        <div
            ref={ref}
            onPointerMove={fine ? move : undefined}
            onPointerEnter={fine ? () => r.set(220) : undefined}
            onPointerLeave={fine ? () => r.set(0) : undefined}
            className="relative overflow-hidden border-b border-white/[0.06] px-6 md:px-12 pt-24 pb-16 md:pt-36 md:pb-20"
        >
            {fine && !still && (
                <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ WebkitMaskImage: mask, maskImage: mask }}>
                    <Image key={pathname} src={paintingFor(pathname)} alt="" fill sizes="100vw" className="object-cover" style={{ filter: "contrast(1.05) brightness(0.55)" }} />
                </motion.div>
            )}

            <p className="relative text-[10px] uppercase tracking-[0.35em] text-mist/70 mb-10 md:mb-14">(End) Get in touch</p>

            <h2 className="relative z-10 text-parchment [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]" style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }} aria-label="Let's make something that stays.">
                {lines.map((l) => (
                    <motion.span
                        key={l.text}
                        aria-hidden
                        className={`block overflow-hidden pb-[0.2em] -mb-[0.12em] text-[17vw] md:text-[11vw] leading-[0.92] tracking-[-0.035em] ${l.cls}`}
                        variants={line}
                        initial={still ? "show" : "hidden"}
                        whileInView="show"
                        viewport={{ once: true, margin: "-10%" }}
                    >
                        {l.text.split("").map((c, i) => (
                            <motion.span key={i} variants={letter} className="inline-block origin-bottom-left whitespace-pre">
                                {c === "." ? <span className="text-ember">.</span> : c}
                            </motion.span>
                        ))}
                    </motion.span>
                ))}
            </h2>

            <div className="relative mt-12 md:mt-16 flex flex-wrap items-end justify-between gap-8">
                <p className="max-w-[30ch] text-sm leading-relaxed text-mist/90">
                    Open to research collaborations, exhibitions, and commissions.
                </p>
                <Link
                    href="/contact"
                    className="group relative inline-flex h-28 w-28 md:h-36 md:w-36 items-center justify-center rounded-full border border-parchment/30 text-[11px] uppercase tracking-[0.3em] text-parchment overflow-hidden"
                >
                    <span className="absolute inset-0 scale-0 rounded-full bg-bloodred transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-100" />
                    <span className="relative">Write ↗</span>
                </Link>
            </div>
        </div>
    );
}
