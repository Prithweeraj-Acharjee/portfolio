"use client";

import { motion } from "framer-motion";
import { series } from "@/lib/content";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function GalleryPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
            <header className="mb-24 max-w-2xl">
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="text-[11px] uppercase tracking-[0.45em] text-mist/50 block mb-4">
                    Art Gallery
                </motion.span>
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="font-sans text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-none mb-6 text-gray-300"
                    style={{ fontWeight: 400 }}>
                    Selected<br />Series
                </motion.h1>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                    className="text-mist/60 leading-relaxed">
                    Artistic practice organized by conceptual inquiry.
                </motion.p>
            </header>

            <div className="space-y-2">
                {series.map((item, index) => (
                    <motion.div key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}>
                        <Link href={`/gallery/${item.id}`} className="group block">
                            <div className="relative flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 p-6 md:p-8 border border-white/[0.04] transition-all duration-500 hover:border-white/[0.1] overflow-hidden"
                                style={{ background: "rgba(255,255,255,0.01)" }}>

                                {/* Hover fill */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{ background: "rgba(200,191,176,0.03)" }} />

                                {/* Ghost number */}
                                <span className="absolute right-6 top-6 font-serif leading-none select-none pointer-events-none text-7xl md:text-9xl"
                                    style={{ color: "rgba(200,191,176,0.06)", fontWeight: 300 }}>
                                    0{index + 1}
                                </span>

                                {/* Thumbnail */}
                                <div className="relative lg:w-64 xl:w-80 aspect-video flex-shrink-0 overflow-hidden bg-stone">
                                    <Image src={item.coverImage} alt={item.title} fill
                                        className="object-cover opacity-50 group-hover:opacity-80 group-hover:scale-[1.02] transition-all duration-700 grayscale"
                                        sizes="(max-width: 1024px) 100vw, 320px" />
                                </div>

                                {/* Info */}
                                <div className="flex-1 relative z-10">
                                    <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl mb-3 tracking-tighter text-gray-300 group-hover:translate-x-1 transition-transform duration-500"
                                        style={{ fontWeight: 400 }}>
                                        {item.title}
                                    </h2>
                                    <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-mist/40 group-hover:text-bone transition-colors duration-300">
                                        <span>Explore</span>
                                        <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
