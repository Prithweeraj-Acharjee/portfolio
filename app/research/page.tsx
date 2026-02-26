"use client";

import { motion } from "framer-motion";
import { research } from "@/lib/content";
import { Link2, BookOpen } from "lucide-react";

export default function ResearchPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
            <header className="mb-20">
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="text-[11px] uppercase tracking-[0.45em] text-mist/50 mb-4 block">Research</motion.span>
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="font-sans text-5xl md:text-7xl tracking-tighter leading-none mb-6 text-gray-300"
                    style={{ fontWeight: 400 }}>
                    Research
                </motion.h1>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                    className="text-mist/60 max-w-xl leading-relaxed">
                    Ongoing investigations into machine learning, digital twins, and the intersection of physical conservation and digital state-space.
                </motion.p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {research.map((item, index) => (
                    <motion.article key={item.id}
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className="group relative border border-white/[0.04] p-7 overflow-hidden transition-all duration-500 hover:border-white/[0.1]"
                        style={{ background: "rgba(255,255,255,0.01)" }}>

                        <div className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-bone/30" />

                        <div className="flex justify-between items-start mb-5">
                            <div className="flex items-center gap-3">
                                <span className="text-[9px] uppercase tracking-widest px-2.5 py-1 border border-white/[0.06] text-mist/40">
                                    {item.year}
                                </span>
                                <span className="text-[10px] text-mist/30 font-mono">{item.institution || "Independent"}</span>
                            </div>
                            <BookOpen size={15} className="text-mist/20 group-hover:text-bone/40 transition-colors" />
                        </div>

                        <h2 className="font-sans text-xl md:text-2xl mb-4 leading-tight tracking-tighter text-gray-300"
                            style={{ fontWeight: 400 }}>{item.title}</h2>
                        <p className="text-sm text-mist/60 leading-relaxed mb-6">{item.abstract}</p>

                        <div className="space-y-2">
                            <span className="text-[10px] uppercase tracking-widest text-mist/30">Technical Focus</span>
                            <p className="text-xs font-mono text-mist/40 leading-relaxed">{item.technicalDetails}</p>
                        </div>

                        {item.links && (
                            <div className="mt-6 pt-5 border-t border-white/[0.04] flex flex-wrap gap-5">
                                {item.links.map((link) => (
                                    <a key={link.url} href={link.url}
                                        className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-mist/40 hover:text-parchment transition-colors">
                                        <Link2 size={11} />{link.label}
                                    </a>
                                ))}
                            </div>
                        )}
                    </motion.article>
                ))}
            </div>
        </div>
    );
}
