"use client";

import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { series } from "@/lib/content";
import Image from "next/image";
import { useState } from "react";
import { X, Maximize2, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

export default function SeriesDetailPage() {
    const { id } = useParams();
    const router = useRouter();
    const currentSeries = series.find((s) => s.id === id);
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

    if (!currentSeries) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-mist/50">Series not found.</p>
            </div>
        );
    }

    const artworks = currentSeries.artworks;
    const selectedArt = selectedIdx !== null ? artworks[selectedIdx] : null;

    return (
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
            <button onClick={() => router.push('/gallery')}
                className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-mist/40 hover:text-mist transition-colors mb-16 group">
                <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform" />
                Back to Gallery
            </button>

            <header className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
                <div className="lg:col-span-8">
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="text-[11px] uppercase tracking-[0.45em] text-mist/50 mb-4 block">Series</motion.span>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="font-sans text-5xl md:text-8xl tracking-tighter leading-none text-gray-300"
                        style={{ fontWeight: 400 }}>
                        {currentSeries.title}
                    </motion.h1>
                </div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                    className="lg:col-span-4 flex flex-col justify-end">
                    <h2 className="text-[10px] uppercase tracking-[0.4em] text-mist/30 mb-4">Artist Statement</h2>
                    <p className="text-sm leading-relaxed text-mist/60 whitespace-pre-wrap">{currentSeries.statement}</p>
                </motion.div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
                {artworks.map((art, index) => (
                    <motion.div key={art.id}
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }} transition={{ delay: index * 0.07 }}
                        className="group cursor-pointer" onClick={() => setSelectedIdx(index)}>
                        <div className="aspect-[3/4] relative overflow-hidden border border-white/[0.04] mb-5 transition-all duration-500 group-hover:border-white/[0.1]"
                            style={{ background: "rgba(255,255,255,0.01)" }}>
                            <div className="absolute inset-0 p-6 md:p-10">
                                <div className="relative w-full h-full">
                                    <Image src={art.media} alt={art.title} fill
                                        className="object-contain opacity-80 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0"
                                        sizes="(max-width: 768px) 100vw, 42vw" />
                                </div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="p-3 border border-white/20 bg-void/60 backdrop-blur-sm">
                                    <Maximize2 size={18} className="text-parchment/60" />
                                </div>
                            </div>
                        </div>
                        <div className="px-1">
                            <div className="flex items-start justify-between mb-2">
                                <h3 className="font-sans text-xl tracking-tighter text-gray-300" style={{ fontWeight: 400 }}>{art.title}</h3>
                                <span className="text-[10px] text-mist/40 font-mono mt-1">{art.year}</span>
                            </div>
                            <div className="w-8 h-[1px] mb-3 group-hover:w-14 transition-all duration-500 bg-bone/30" />
                            <p className="text-xs text-mist/60 leading-relaxed mb-3">{art.concept}</p>
                            <span className="inline-block text-[9px] uppercase tracking-widest text-mist/30 px-2.5 py-1 border border-white/[0.06]">
                                {art.medium}
                            </span>
                        </div>
                    </motion.div>
                ))}
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
                            <div className="lg:col-span-8 aspect-square relative" style={{ background: "rgba(255,255,255,0.02)" }}>
                                <Image src={selectedArt.media} alt={selectedArt.title} fill
                                    className="object-contain p-8 grayscale hover:grayscale-0 transition-all duration-700" priority />
                            </div>
                            <div className="lg:col-span-4 border-l border-white/[0.05] pl-8">
                                <span className="text-[10px] uppercase tracking-[0.45em] text-mist/30 mb-3 block">{currentSeries.title}</span>
                                <h2 className="font-sans text-3xl md:text-4xl tracking-tighter mb-4 text-gray-300"
                                    style={{ fontWeight: 400 }}>{selectedArt.title}</h2>
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
