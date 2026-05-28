"use client";

import { motion } from "framer-motion";
import { series } from "@/lib/content";
import Image from "next/image";
import Link from "next/link";
import GalleryScribbleBackground from "@/components/GalleryScribbleBackground";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function GalleryPage() {
    return (
        <>
            <GalleryScribbleBackground />
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
                <header className="mb-32 max-w-3xl">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-[10px] uppercase tracking-[0.5em] text-bloodred/70 block mb-6"
                    >
                        Gallery
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.0, ease }}
                        className="font-sans text-[clamp(3rem,8vw,7rem)] tracking-tighter leading-[0.92] text-parchment mb-8"
                        style={{ fontWeight: 400 }}
                    >
                        Selected<br />
                        <span className="italic font-serif text-bone/80">series</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.9 }}
                        className="text-mist/55 leading-relaxed max-w-lg font-serif italic text-lg"
                    >
                        Bodies of work organized by conceptual inquiry. Each series begins as a question and ends when the painting tells me it has.
                    </motion.p>
                </header>

                <div className="space-y-48 md:space-y-56 mt-20 pb-24">
                    {series.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-15%" }}
                            transition={{ duration: 1.2, ease }}
                        >
                            <Link href={`/gallery/${item.id}`} className="group block">
                                <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-6">
                                    <div className="col-span-12 md:col-span-2 flex items-baseline gap-3 md:flex-col md:items-start md:gap-2">
                                        <span className="font-mono text-[10px] tracking-[0.3em] text-mist/30">
                                            {String(index + 1).padStart(2, "0")} / {String(series.length).padStart(2, "0")}
                                        </span>
                                        <span className="font-mono text-[10px] tracking-[0.3em] text-bloodred/60 uppercase md:mt-1">
                                            {item.artworks[0]?.year ?? ""}
                                        </span>
                                    </div>
                                    <div className="col-span-12 md:col-span-10">
                                        <h2
                                            className="font-sans text-3xl md:text-5xl lg:text-6xl tracking-tighter leading-[1.0] text-parchment group-hover:text-bone transition-colors duration-700"
                                            style={{ fontWeight: 400 }}
                                        >
                                            {item.title}
                                        </h2>
                                    </div>
                                </div>

                                <div
                                    className="relative w-full overflow-hidden bg-stone/30"
                                    style={{ aspectRatio: "16 / 10" }}
                                >
                                    <Image
                                        src={item.coverImage}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-all duration-[1400ms] ease-out grayscale-[35%] opacity-85 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.015]"
                                        sizes="(max-width: 768px) 100vw, 90vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-void/30 via-transparent to-transparent pointer-events-none" />
                                </div>

                                <div className="grid grid-cols-12 gap-6 md:gap-10 mt-6">
                                    <div className="col-span-12 md:col-span-2" />
                                    <div className="col-span-12 md:col-span-10 flex items-center justify-between">
                                        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-mist/40">
                                            {item.artworks.length} {item.artworks.length === 1 ? "work" : "works"}
                                        </span>
                                        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-mist/30 group-hover:text-bloodred transition-colors duration-500">
                                            View series →
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
}
