"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { FadeUp } from "@/components/fx/Reveal";

const quote = `Art is something I always had trouble learning in school, as I could never draw those perfect lines, yet I kept drawing as a wonderless child. Art is something that brought trouble into my home, yet I kept drawing through my adolescence. Art is something I don't easily understand, but I find myself staring at a soulful ceramic sculpture in the hands of a village potter, trying to understand his spirit or feel the vision embedded in a piece of mud. Art is something that messes with me, and I keep messing with it too.`;

function Word({ w, i, n, p }: { w: string; i: number; n: number; p: MotionValue<number> }) {
    const start = i / n;
    const opacity = useTransform(p, [start, Math.min(1, start + 3 / n)], [0.14, 1]);
    return <motion.span style={{ opacity }} className="inline-block mr-[0.25em]">{w}</motion.span>;
}

export default function HomeManifesto() {
    const still = useReducedMotion();
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 55%"] });
    const imgRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress: ip } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
    const y = useTransform(ip, [0, 1], ["-12%", "12%"]);
    const words = quote.split(" ");

    return (
        <section className="relative px-6 md:px-12 py-28 md:py-44">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.35em] text-mist/70 mb-14 md:mb-20">
                <span>(01) A statement</span>
                <span>Prithwee, 2026</span>
            </div>

            <div className="grid md:grid-cols-12 gap-12 md:gap-10 items-start">
                <div ref={ref} className="md:col-span-8">
                    <p
                        className="text-[7.4vw] md:text-[3.3vw] leading-[1.18] tracking-[-0.01em] text-parchment"
                        style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
                    >
                        <span className="text-ember italic">well, </span>
                        {still
                            ? quote
                            : words.map((w, i) => <Word key={i} w={w} i={i} n={words.length} p={scrollYProgress} />)}
                    </p>
                </div>

                <FadeUp className="md:col-span-4 md:pt-4">
                    <div ref={imgRef} className="relative aspect-[3/4] overflow-hidden bg-ash">
                        <motion.div className="absolute -inset-[12%]" style={still ? undefined : { y }}>
                            <Image src="/prithwee.jpg" alt="Prithweeraj Acharjee" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover grayscale-[20%]" />
                        </motion.div>
                    </div>
                    <div className="mt-4 flex justify-between text-[10px] uppercase tracking-[0.3em] text-mist/70">
                        <span>Prithweeraj Acharjee</span>
                        <span>Toledo</span>
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}
