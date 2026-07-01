"use client";

import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { series } from "@/lib/content";
import Image from "next/image";
import { useRef, useState } from "react";
import { X, ArrowLeft, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

function mediumLine(medium: string, dimensions: string) {
    const dim = dimensions && dimensions !== "Variable" && dimensions !== "Large" ? `, ${dimensions}` : "";
    return `${medium}${dim}`;
}

export default function SeriesDetailPage() {
    const { id } = useParams();
    const router = useRouter();
    const currentSeries = series.find((s) => s.id === id);
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    if (!currentSeries) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-mist/50">Series not found.</p>
            </div>
        );
    }

    const artworks = currentSeries.artworks;
    const selectedArt = selectedIdx !== null ? artworks[selectedIdx] : null;
    const isMaterial = currentSeries.id === "material-expressions";

    const scrollByCards = (dir: number) => {
        const el = scrollRef.current;
        if (el) el.scrollBy({ left: dir * el.clientWidth * 0.78, behavior: "smooth" });
    };

    return (
        <div className="py-20 md:py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <button onClick={() => router.push("/gallery")}
                    className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-mist/40 hover:text-bone transition-colors mb-14 group">
                    <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                    All Series
                </button>

                <header className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16 md:mb-20">
                    <div className="lg:col-span-7">
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            className="text-[11px] uppercase tracking-[0.45em] text-mist/50 mb-4 block">Series</motion.span>
                        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease }}
                            className="italic tracking-tight leading-[0.95] text-parchment text-5xl md:text-7xl lg:text-8xl"
                            style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}>
                            {currentSeries.title}
                        </motion.h1>
                        {isMaterial && (
                            <a href="https://material-expressions.vercel.app" target="_blank" rel="noopener"
                                className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-mist/50 hover:text-bone transition-colors border border-white/[0.08] hover:border-white/[0.18] px-4 py-2.5">
                                <ExternalLink size={13} /> View the full catalogue and book
                            </a>
                        )}
                    </div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                        className="lg:col-span-5 flex flex-col justify-end">
                        <h2 className="text-[10px] uppercase tracking-[0.4em] text-mist/30 mb-4">Statement</h2>
                        <p className="text-sm leading-[1.9] text-bone/60 whitespace-pre-wrap"
                            style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: "0.98rem" }}>
                            {currentSeries.statement}
                        </p>
                    </motion.div>
                </header>
            </div>

            {/* Horizontal scrolling gallery, left to right */}
            <div className="relative">
                <button aria-label="Previous" onClick={() => scrollByCards(-1)}
                    className="hidden md:flex items-center justify-center absolute left-4 top-[38%] z-20 w-11 h-11 rounded-full border border-white/[0.08] bg-void/60 backdrop-blur-md text-mist/50 hover:text-parchment hover:border-white/20 transition-all">
                    <ChevronLeft size={20} />
                </button>
                <button aria-label="Next" onClick={() => scrollByCards(1)}
                    className="hidden md:flex items-center justify-center absolute right-4 top-[38%] z-20 w-11 h-11 rounded-full border border-white/[0.08] bg-void/60 backdrop-blur-md text-mist/50 hover:text-parchment hover:border-white/20 transition-all">
                    <ChevronRight size={20} />
                </button>

                <div ref={scrollRef}
                    className="flex items-start gap-14 md:gap-24 overflow-x-auto snap-x snap-mandatory pb-4 px-8 md:px-[12vw] [&::-webkit-scrollbar]:hidden"
                    style={{ scrollbarWidth: "none" }}>
                    {artworks.map((art, i) => (
                        <figure key={art.id} className="snap-center shrink-0 flex flex-col items-center"
                            style={{ scrollSnapAlign: "center" }}>
                            <motion.button onClick={() => setSelectedIdx(i)}
                                initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
                                whileInView={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
                                viewport={{ once: true, margin: "-8%" }}
                                transition={{ duration: 1.15, ease }}
                                className="group cursor-zoom-in block overflow-hidden"
                                style={{ background: "#e9e1d3", padding: "clamp(10px,1.1vw,16px)", boxShadow: "0 44px 90px rgba(0,0,0,0.62)" }}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={art.media} alt={art.title}
                                    className="block transition-transform duration-[1100ms] ease-out group-hover:scale-[1.04]"
                                    style={{ maxHeight: "64vh", maxWidth: "80vw", width: "auto", height: "auto" }} />
                            </motion.button>
                            <figcaption className="mt-7 text-center" style={{ maxWidth: "46ch" }}>
                                <h3 className="italic text-parchment/90 text-xl md:text-2xl leading-snug"
                                    style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}>
                                    {art.title}
                                </h3>
                                <p className="mt-2.5 font-mono text-[10px] uppercase tracking-[0.28em] text-mist/45">
                                    {mediumLine(art.medium, art.dimensions)}
                                </p>
                                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.3em] text-mist/25">{art.year}</p>
                            </figcaption>
                        </figure>
                    ))}
                </div>

                <div className="flex items-center justify-center gap-3 mt-6 font-mono text-[9px] uppercase tracking-[0.45em] text-mist/25">
                    <span className="w-6 h-px bg-white/10" /> scroll <ChevronRight size={11} />
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedArt && selectedIdx !== null && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }} onClick={() => setSelectedIdx(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12"
                        style={{ background: "rgba(8,8,8,0.98)", backdropFilter: "blur(20px)" }}>
                        <button className="absolute top-6 right-6 text-mist/40 hover:text-parchment transition-colors"
                            onClick={() => setSelectedIdx(null)}>
                            <X size={26} />
                        </button>
                        {selectedIdx > 0 && (
                            <button className="absolute left-5 top-1/2 -translate-y-1/2 p-3 text-mist/40 hover:text-parchment transition-colors"
                                onClick={(e) => { e.stopPropagation(); setSelectedIdx(selectedIdx - 1); }}>
                                <ChevronLeft size={22} />
                            </button>
                        )}
                        {selectedIdx < artworks.length - 1 && (
                            <button className="absolute right-5 top-1/2 -translate-y-1/2 p-3 text-mist/40 hover:text-parchment transition-colors"
                                onClick={(e) => { e.stopPropagation(); setSelectedIdx(selectedIdx + 1); }}>
                                <ChevronRight size={22} />
                            </button>
                        )}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl w-full items-center"
                            onClick={(e) => e.stopPropagation()}>
                            <div className="lg:col-span-8 flex items-center justify-center">
                                <div style={{ background: "#e9e1d3", padding: "clamp(10px,1vw,18px)", boxShadow: "0 40px 90px rgba(0,0,0,0.6)" }}>
                                    <Image src={selectedArt.media} alt={selectedArt.title} width={1200} height={1500}
                                        className="block w-auto" style={{ maxHeight: "78vh", maxWidth: "100%", height: "auto" }} priority />
                                </div>
                            </div>
                            <div className="lg:col-span-4 border-l border-white/[0.05] pl-8">
                                <span className="text-[10px] uppercase tracking-[0.45em] text-mist/30 mb-3 block">{currentSeries.title}</span>
                                <h2 className="italic text-parchment text-3xl md:text-4xl mb-4"
                                    style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}>{selectedArt.title}</h2>
                                <div className="w-10 h-[1px] mb-6 bg-bone/30" />
                                <p className="text-sm leading-relaxed text-mist/60 mb-8">{selectedArt.concept}</p>
                                <div className="space-y-4">
                                    {[{ l: "Year", v: selectedArt.year }, { l: "Medium", v: selectedArt.medium }, { l: "Dimensions", v: selectedArt.dimensions }].map(d => (
                                        <div key={d.l}>
                                            <p className="text-[10px] uppercase tracking-widest text-mist/30 mb-1">{d.l}</p>
                                            <p className="text-xs text-mist">{d.v}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-8 text-[10px] text-mist/25 font-mono">{selectedIdx + 1} / {artworks.length}</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
