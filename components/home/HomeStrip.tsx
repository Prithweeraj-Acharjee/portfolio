"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { series } from "@/lib/content";
import { useMedia } from "@/lib/use-media";

/* 21 Days as a gallery wall that slides sideways while you scroll down. */
export default function HomeStrip() {
    const reduced = useReducedMotion();
    const wide = useMedia("(min-width: 768px)");
    /* Phones get a native swipe row; the scroll-driven wall is for wider screens. */
    const still = reduced || !wide;
    const s = series.find((x) => x.id === "21-days") ?? series[0];
    const works = s.artworks.slice(0, 12);
    const outer = useRef<HTMLElement>(null);
    const track = useRef<HTMLDivElement>(null);
    const [dist, setDist] = useState(0);
    const { scrollYProgress } = useScroll({ target: outer, offset: ["start start", "end end"] });
    const x = useTransform(scrollYProgress, [0, 1], [0, -dist]);
    const bar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    useEffect(() => {
        const measure = () => {
            if (track.current) setDist(Math.max(0, track.current.scrollWidth - window.innerWidth));
        };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    const cards = works.map((a, i) => (
        <Link
            key={a.id}
            href={`/gallery/${s.id}`}
            data-cursor="View"
            className="group relative shrink-0 w-[72vw] sm:w-[44vw] md:w-[28vw] snap-start"
        >
            <div className="relative aspect-[3/4] overflow-hidden bg-ash">
                <Image
                    src={a.media}
                    alt={a.title}
                    fill
                    sizes="(max-width: 768px) 72vw, 28vw"
                    className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.06]"
                />
            </div>
            <div className="mt-4 flex items-baseline justify-between gap-4">
                <span className="text-lg md:text-xl text-parchment" style={{ fontFamily: "var(--font-serif)" }}>{a.title}</span>
                <span className="font-mono text-[10px] text-mist/70">No. {String(i + 1).padStart(2, "0")}</span>
            </div>
        </Link>
    ));

    const head = (
        <div className="px-6 md:px-12 flex items-end justify-between gap-6 mb-10">
            <div>
                <span className="text-[10px] uppercase tracking-[0.35em] text-mist/70 block mb-4">(03) A memoir in paintings</span>
                <h2 className="text-[16vw] md:text-[9vw] leading-[0.82] tracking-[-0.03em] text-parchment" style={{ fontFamily: "var(--font-serif)" }}>
                    21 <em className="text-ember">Days</em>
                </h2>
            </div>
            <p className="hidden md:block max-w-[30ch] text-sm leading-relaxed text-bone/70">
                Twenty one days of a life put on hold, painted as they happened. The book is forthcoming.
            </p>
        </div>
    );

    if (still) {
        return (
            <section className="py-24 border-t border-white/[0.06]">
                {head}
                <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-6 px-6 md:px-12 pb-6 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none" }} data-lenis-prevent-wheel>{cards}</div>
                <p className="px-6 text-[10px] uppercase tracking-[0.35em] text-mist/70">Swipe · {s.artworks.length} paintings · <Link href={`/gallery/${s.id}`} className="underline underline-offset-4">see all</Link></p>
            </section>
        );
    }

    return (
        <section ref={outer} className="relative border-t border-white/[0.06]" style={{ height: `calc(100vh + ${dist}px)` }}>
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden pt-16">
                {head}
                <motion.div ref={track} style={{ x }} className="flex gap-6 md:gap-10 px-6 md:px-12 w-max">
                    {cards}
                    <Link
                        href={`/gallery/${s.id}`}
                        data-cursor="All"
                        className="shrink-0 w-[60vw] md:w-[24vw] aspect-[3/4] flex flex-col items-center justify-center border border-white/10 hover:border-bloodred transition-colors"
                    >
                        <span className="text-6xl md:text-7xl text-parchment" style={{ fontFamily: "var(--font-serif)" }}>{s.artworks.length}</span>
                        <span className="mt-3 text-[10px] uppercase tracking-[0.35em] text-mist/80">See every painting →</span>
                    </Link>
                </motion.div>
                <div className="mx-6 md:mx-12 mt-10 h-px bg-white/10 relative">
                    <motion.span className="absolute left-0 top-0 h-px bg-bloodred" style={{ width: bar }} />
                </div>
            </div>
        </section>
    );
}
