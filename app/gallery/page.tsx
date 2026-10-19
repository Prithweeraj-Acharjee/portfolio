"use client";

import { motion } from "framer-motion";
import { series } from "@/lib/content";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function GalleryPage() {
    return (
        <div>
            <PageHeader index="G" label="Gallery" title={["Paintings", <em key="s" className="text-bone/80">and collages</em>]} intro={<p>{series.reduce((n, s) => n + s.artworks.length, 0)} works.</p>} />
            <div className="px-6 md:px-12">


            <div className="grid md:grid-cols-2 gap-x-10 gap-y-20 md:gap-y-28 pt-16 md:pt-24 pb-24">
                {series.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className={index % 2 === 1 ? "md:mt-40" : ""}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-12%" }}
                        transition={{ duration: 1.0, ease }}
                    >
                        <Link href={`/gallery/${item.id}`} data-cursor="View" className="group block">
                            <div className="flex items-baseline justify-between gap-6 mb-5">
                                <h2
                                    className="font-serif text-3xl md:text-[2.6vw] tracking-tight leading-tight text-parchment group-hover:italic transition-all duration-500"
                                    style={{ fontWeight: 400 }}
                                >
                                    {item.title}
                                </h2>
                                <span className="font-mono text-[10px] tracking-[0.3em] text-mist/80">
                                    {String(index + 1).padStart(2, "0")} / {String(series.length).padStart(2, "0")}
                                </span>
                            </div>

                            <div
                                className="relative w-full overflow-hidden bg-stone/30"
                                style={{ aspectRatio: "4 / 5" }}
                            >
                                <Image
                                    src={item.coverImage}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.05]"
                                    sizes="(max-width: 768px) 100vw, 45vw"
                                />
                            </div>

                            <div className="mt-4 flex items-baseline justify-between text-[10px] uppercase tracking-[0.25em] text-mist/80">
                                <span>{item.artworks.length} {item.artworks.length === 1 ? "work" : "works"}</span>
                                <span className="group-hover:text-bone transition-colors">View</span>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
            </div>
        </div>
    );
}
