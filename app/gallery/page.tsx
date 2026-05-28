"use client";

import { motion } from "framer-motion";
import { series } from "@/lib/content";
import Image from "next/image";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function GalleryPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
            <header className="mb-24 max-w-2xl">
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[11px] uppercase tracking-[0.45em] text-mist/50 block mb-4"
                >
                    Gallery
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease }}
                    className="font-sans text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-none mb-6 text-gray-300"
                    style={{ fontWeight: 400 }}
                >
                    Selected<br />Series
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-mist/60 leading-relaxed"
                >
                    Bodies of work, organized by conceptual inquiry.
                </motion.p>
            </header>

            <div className="space-y-32 md:space-y-40 mt-16 pb-24">
                {series.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-12%" }}
                        transition={{ duration: 1.0, ease }}
                    >
                        <Link href={`/gallery/${item.id}`} className="group block">
                            <div className="flex items-baseline justify-between mb-6">
                                <h2
                                    className="font-sans text-3xl md:text-5xl tracking-tighter leading-tight text-parchment group-hover:text-bone transition-colors duration-500"
                                    style={{ fontWeight: 400 }}
                                >
                                    {item.title}
                                </h2>
                                <span className="font-mono text-[10px] tracking-[0.3em] text-mist/30">
                                    {String(index + 1).padStart(2, "0")} / {String(series.length).padStart(2, "0")}
                                </span>
                            </div>

                            <div
                                className="relative w-full overflow-hidden bg-stone/30"
                                style={{ aspectRatio: "16 / 10" }}
                            >
                                <Image
                                    src={item.coverImage}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-all duration-[1200ms] ease-out grayscale-[30%] opacity-90 group-hover:grayscale-0 group-hover:opacity-100"
                                    sizes="(max-width: 768px) 100vw, 90vw"
                                />
                            </div>

                            <div className="mt-4 flex items-baseline justify-between text-[10px] uppercase tracking-[0.25em] text-mist/40">
                                <span>{item.artworks.length} {item.artworks.length === 1 ? "work" : "works"}</span>
                                <span className="group-hover:text-bone transition-colors">View</span>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
