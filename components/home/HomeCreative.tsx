"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Play } from "lucide-react";

const others = [
    { name: "A River of Gaze", note: "a playable game", href: "https://a-river-of-gaze.vercel.app", ext: true },
    { name: "The Frustrated Sun", note: "a living painting", href: "https://the-frustrated-sun.vercel.app", ext: true },
    { name: "Material", note: "the book", href: "/writing/material-book", ext: false },
];

export default function HomeCreative() {
    const [playing, setPlaying] = useState(false);

    return (
        <section className="relative max-w-5xl mx-auto px-6 md:px-12 py-32 md:py-44 text-center border-t border-white/[0.04]">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                className="text-[11px] uppercase tracking-[0.45em] text-mist/50 block mb-6">
                Short Film, 2026
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="italic text-6xl md:text-8xl text-parchment leading-none mb-12"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}>
                Migration
            </motion.h2>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="mx-auto" style={{ maxWidth: "620px" }}>
                <div className="relative overflow-hidden" style={{ boxShadow: "0 50px 120px rgba(0,0,0,0.6)" }}>
                    {!playing ? (
                        <button onClick={() => setPlaying(true)} className="relative block w-full group cursor-pointer" aria-label="Play Migration">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/migration-poster.jpg" alt="Migration, a short film" className="w-full h-auto block" />
                            <span className="absolute inset-0 flex items-center justify-center bg-void/25 group-hover:bg-void/10 transition-colors duration-500">
                                <span className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-parchment/50 flex items-center justify-center backdrop-blur-sm group-hover:border-parchment/90 group-hover:scale-105 transition-all duration-500">
                                    <Play size={22} className="text-parchment/90 ml-0.5" fill="currentColor" />
                                </span>
                            </span>
                        </button>
                    ) : (
                        <video src="/migration.mp4" poster="/migration-poster.jpg" autoPlay controls playsInline
                            className="w-full h-auto block" />
                    )}
                </div>
                <p className="mt-6 italic text-mist/50 text-sm" style={{ fontFamily: "var(--font-serif)" }}>
                    A short film. Best with sound.
                </p>
            </motion.div>

            <div className="mt-24 md:mt-32">
                <p className="text-[10px] uppercase tracking-[0.4em] text-mist/30 mb-10">Other creative works</p>
                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-14 gap-y-6">
                    {others.map((o) => (
                        <a key={o.name} href={o.href} target={o.ext ? "_blank" : undefined} rel={o.ext ? "noopener" : undefined}
                            className="group text-center">
                            <span className="block italic text-2xl md:text-3xl text-bone/80 group-hover:text-parchment transition-colors"
                                style={{ fontFamily: "var(--font-serif)" }}>
                                {o.name}
                            </span>
                            <span className="block mt-1 text-[10px] uppercase tracking-[0.3em] text-mist/40">{o.note}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
