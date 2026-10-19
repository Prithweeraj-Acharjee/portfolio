"use client";

import { useState } from "react";
import { useMedia } from "@/lib/use-media";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { MaskLines } from "@/components/fx/Reveal";

type Work = { title: string; kind: string; year: string; href: string; image?: string; stat?: string; ext?: boolean };

const works: Work[] = [
    { title: "21 Days", kind: "Paintings · memoir", year: "2026", href: "/gallery/21-days", image: "/artworks/21-days/td-07.jpg" },
    { title: "Material: Expressions", kind: "Paintings · book", year: "2026", href: "/gallery/material-expressions", image: "/artworks/material-expressions/me-04.jpg" },
    { title: "Aesthetics Is Not a Mirror", kind: "AI research · first author", year: "2026", href: "/research", stat: "r = 0.873" },
    { title: "A River of Gaze", kind: "Game · playable", year: "2026", href: "https://a-river-of-gaze.vercel.app", image: "/projects/river-of-gaze.png", ext: true },
    { title: "The Frustrated Sun", kind: "Living painting · generative", year: "2026", href: "https://the-frustrated-sun.vercel.app", image: "/projects/frustrated-sun.png", ext: true },
    { title: "Migration", kind: "Short film", year: "2026", href: "#film", image: "/migration-poster.jpg" },
    { title: "HaorGrix", kind: "Studio · co-founder", year: "2026", href: "/haorgrix", image: "/projects/haorgrix.png" },
    { title: "RoboTheater", kind: "System · theater", year: "2026", href: "/systems", image: "/projects/robotheater.png" },
];

export default function HomeRecentWork() {
    const [active, setActive] = useState<number | null>(null);
    const fine = useMedia("(pointer: fine)");
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, { stiffness: 160, damping: 22 });
    const sy = useSpring(y, { stiffness: 160, damping: 22 });

    const current = active !== null ? works[active] : null;

    return (
        <section
            className="relative px-6 md:px-12 py-28 md:py-40 border-t border-white/[0.06]"
            onPointerMove={(e) => { x.set(e.clientX); y.set(e.clientY); }}
        >
            <div className="flex items-end justify-between mb-14 md:mb-20 gap-6">
                <MaskLines
                    lines={["Selected", <em key="w" className="text-bone/70">work</em>]}
                    className="block text-[15vw] md:text-[8vw] leading-[0.85] tracking-[-0.03em] text-parchment"
                    style={{ fontFamily: "var(--font-serif)" }}
                />
                <span className="text-[10px] uppercase tracking-[0.35em] text-mist/70 pb-2">(02) Index · {works.length}</span>
            </div>

            <ul onPointerLeave={() => setActive(null)}>
                {works.map((w, i) => {
                    const Row = (
                        <div className="relative grid grid-cols-[2.5rem_1fr_auto] md:grid-cols-[4rem_1fr_16rem_5rem] items-baseline gap-4 py-6 md:py-8 border-b border-white/[0.08]">
                            <span className="font-mono text-[10px] text-mist/70">{String(i + 1).padStart(2, "0")}</span>
                            <span
                                className={`text-3xl md:text-[4.2vw] leading-none tracking-tight transition-all duration-500 ${active === null || active === i ? "text-parchment" : "text-mist/40"} ${active === i ? "md:translate-x-6 italic" : ""}`}
                                style={{ fontFamily: "var(--font-serif)" }}
                            >
                                {w.title}
                            </span>
                            <span className="hidden md:block text-[10px] uppercase tracking-[0.3em] text-mist/80">{w.kind}</span>
                            <span className="text-[10px] uppercase tracking-[0.3em] text-mist/70 text-right">
                                {w.year}{w.ext && <span className="ml-1">↗</span>}
                            </span>
                            <span className="col-start-2 md:hidden text-[10px] uppercase tracking-[0.3em] text-mist/70 -mt-2">{w.kind}</span>
                            <span className={`absolute left-0 bottom-[-1px] h-px bg-bloodred transition-all duration-700 ${active === i ? "w-full" : "w-0"}`} />
                        </div>
                    );
                    const common = {
                        onPointerEnter: () => setActive(i),
                        onFocus: () => setActive(i),
                        onBlur: () => setActive(null),
                        "data-cursor": w.ext ? "Open" : "View",
                        className: "block",
                    };
                    return (
                        <li key={w.title}>
                            {w.ext
                                ? <a href={w.href} target="_blank" rel="noopener noreferrer" {...common}>{Row}</a>
                                : <Link href={w.href} {...common}>{Row}</Link>}
                        </li>
                    );
                })}
            </ul>

            {fine && (
                <motion.div
                    aria-hidden
                    className="pointer-events-none fixed left-0 top-0 z-[60] w-[22vw] max-w-[340px] aspect-[4/5] -translate-x-1/2 -translate-y-1/2"
                    style={{ x: sx, y: sy }}
                >
                    <AnimatePresence>
                        {current && (
                            <motion.div
                                key={current.title}
                                className="absolute inset-0 overflow-hidden bg-ash"
                                initial={{ opacity: 0, scale: 0.85, clipPath: "inset(20% 20% 20% 20%)" }}
                                animate={{ opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0%)" }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {current.image ? (
                                    <Image src={current.image} alt="" fill sizes="340px" className="object-cover" />
                                ) : (
                                    <div className="absolute inset-0 flex flex-col justify-between p-6 bg-bloodred text-parchment">
                                        <span className="text-[10px] uppercase tracking-[0.3em]">LAION-Aesthetics audit</span>
                                        <span className="text-5xl tabular-nums" style={{ fontFamily: "var(--font-serif)" }}>{current.stat}</span>
                                        <span className="text-[10px] uppercase tracking-[0.3em]">15 occupations · 3,000 generations</span>
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            )}
        </section>
    );
}
