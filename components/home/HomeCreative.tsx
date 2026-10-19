"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const others = [
    { name: "A River of Gaze", note: "a playable game", href: "https://a-river-of-gaze.vercel.app", ext: true },
    { name: "The Frustrated Sun", note: "a living painting", href: "https://the-frustrated-sun.vercel.app", ext: true },
    { name: "Material", note: "the book", href: "/writing/material-book", ext: false },
];

export default function HomeCreative() {
    const still = useReducedMotion();
    const frame = useRef<HTMLDivElement>(null);
    const video = useRef<HTMLVideoElement>(null);
    const [muted, setMuted] = useState(true);
    const [paused, setPaused] = useState(true);
    const [progress, setProgress] = useState(0);
    const { scrollYProgress } = useScroll({ target: frame, offset: ["start end", "center center"] });
    const scale = useTransform(scrollYProgress, [0, 1], [0.86, 1]);
    const radius = useTransform(scrollYProgress, [0, 1], [28, 2]);

    // Play silently once the film is half on screen, pause when it leaves. Browsers only allow muted autoplay.
    useEffect(() => {
        const v = video.current;
        if (!v || still) return;
        const io = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) v.play().catch(() => {});
            else v.pause();
        }, { threshold: 0.5 });
        io.observe(v);
        return () => io.disconnect();
    }, [still]);

    const toggle = () => {
        const v = video.current;
        if (!v) return;
        if (v.paused) v.play().catch(() => {}); else v.pause();
    };

    return (
        <section id="film" className="relative max-w-5xl mx-auto px-6 md:px-12 py-32 md:py-44 text-center border-t border-white/[0.06] scroll-mt-20">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                className="text-[11px] uppercase tracking-[0.45em] text-mist/80 block mb-6">
                (03) Short Film, 2026
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="italic text-6xl md:text-8xl text-parchment leading-none mb-12"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}>
                Migration
            </motion.h2>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="mx-auto" style={{ maxWidth: "900px" }}>
                <motion.div
                    ref={frame}
                    className="relative overflow-hidden bg-black"
                    style={{ boxShadow: "0 50px 120px rgba(0,0,0,0.6)", ...(still ? {} : { scale, borderRadius: radius }) }}
                >
                    <video
                        ref={video}
                        src="/migration.mp4"
                        poster="/migration-poster.jpg"
                        muted={muted}
                        loop
                        playsInline
                        preload="metadata"
                        onClick={toggle}
                        onPlay={() => setPaused(false)}
                        onPause={() => setPaused(true)}
                        onTimeUpdate={(e) => setProgress(e.currentTarget.currentTime / (e.currentTarget.duration || 1))}
                        data-cursor={paused ? "Play" : "Pause"}
                        aria-label="Migration, a short film"
                        className="w-full aspect-[2/1] object-cover block cursor-pointer"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
                    <button
                        onClick={() => { setMuted((m) => !m); video.current?.play().catch(() => {}); }}
                        className="absolute left-4 bottom-4 md:left-6 md:bottom-5 inline-flex items-center gap-3 rounded-full border border-parchment/30 bg-black/30 backdrop-blur-md px-4 py-2.5 text-[10px] uppercase tracking-[0.3em] text-parchment hover:border-parchment/70 transition-colors"
                        aria-pressed={!muted}
                    >
                        <span className="flex items-end gap-[2px] h-3" aria-hidden>
                            {[0, 1, 2, 3].map((i) => (
                                <span key={i} className={`w-[2px] bg-parchment ${muted ? "h-[3px]" : "animate-eq"}`} style={{ animationDelay: `${i * 0.15}s` }} />
                            ))}
                        </span>
                        {muted ? "Sound on" : "Sound off"}
                    </button>
                    <span className="absolute left-0 bottom-0 h-[2px] bg-bloodred" style={{ width: `${progress * 100}%` }} />
                </motion.div>
                <p className="mt-6 italic text-mist/80 text-sm" style={{ fontFamily: "var(--font-serif)" }}>
                    A short film. Best with sound.
                </p>
            </motion.div>

            <div className="mt-24 md:mt-32">
                <p className="text-[10px] uppercase tracking-[0.4em] text-mist/80 mb-10">Other creative works</p>
                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-14 gap-y-6">
                    {others.map((o) => (
                        <a key={o.name} href={o.href} target={o.ext ? "_blank" : undefined} rel={o.ext ? "noopener" : undefined}
                            className="group text-center">
                            <span className="block italic text-2xl md:text-3xl text-bone/80 group-hover:text-parchment transition-colors"
                                style={{ fontFamily: "var(--font-serif)" }}>
                                {o.name}
                            </span>
                            <span className="block mt-1 text-[10px] uppercase tracking-[0.3em] text-mist/80">{o.note}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
