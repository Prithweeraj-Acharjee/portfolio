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

            <div className="space-y-40 mt-16 pb-20">
                {series.map((item, index) => (
                    <motion.div key={item.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>
                        <Link href={`/gallery/${item.id}`} className="group block w-full flex flex-col items-center">

                            {/* Massive Cover Container */}
                            <div className="w-full relative overflow-hidden mb-12"
                                style={{ height: "70vh", maxHeight: "1000px" }}>
                                <Image src={item.coverImage} alt={item.title} fill
                                    className="object-cover opacity-60 group-hover:opacity-90 transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-[1.03]"
                                    sizes="100vw" />

                                {/* Giant Ghost Number Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <span className="font-serif text-[clamp(12rem,25vw,30rem)] text-white/[0.02] group-hover:text-white/[0.04] transition-colors duration-1000 select-none">
                                        0{index + 1}
                                    </span>
                                </div>
                            </div>

                            {/* Minimalist Info */}
                            <div className="flex flex-col items-center text-center relative z-10 transition-transform duration-700 group-hover:-translate-y-3">
                                <h2 className="font-mono text-sm tracking-[0.4em] text-gray-300 uppercase mb-6">
                                    {item.title}
                                </h2>
                                <div className="inline-flex items-center gap-4 text-[9px] uppercase tracking-[0.2em] text-mist/40 group-hover:text-mist/80 transition-colors duration-500">
                                    <span>Explore Series</span>
                                    <div className="w-6 h-[1px] bg-white/20 group-hover:w-10 transition-all duration-500" />
                                    <ArrowRight size={12} className="group-hover:translate-x-2 transition-transform duration-500" />
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
