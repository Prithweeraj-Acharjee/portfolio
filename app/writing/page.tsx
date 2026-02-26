"use client";

import { motion } from "framer-motion";
import { writings } from "@/lib/content";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WritingPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
            <header className="mb-20">
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="text-[11px] uppercase tracking-[0.45em] text-mist/50 mb-4 block">Essays & Writing</motion.span>
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="font-sans text-5xl md:text-7xl tracking-tighter leading-none mb-6 text-gray-300"
                    style={{ fontWeight: 400 }}>
                    Writings
                </motion.h1>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                    className="text-mist/60 leading-relaxed">
                    Essays on the friction between digital perfection and organic entropy.
                </motion.p>
            </header>

            <div className="space-y-0 divide-y divide-white/[0.04]">
                {writings.map((post, index) => (
                    <motion.article key={post.id}
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className="group py-10 first:pt-0">
                        <Link href={`/writing/${post.id}`} className="block">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:gap-12">
                                <div className="flex items-start gap-3 mb-4 sm:mb-0 sm:w-40 flex-shrink-0">
                                    <div className="w-px h-full min-h-[2rem] self-stretch flex-shrink-0 rounded-full bg-bone/25" />
                                    <span className="text-[11px] uppercase tracking-widest text-mist/35 font-mono pt-0.5">
                                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <h2 className="font-sans text-2xl md:text-3xl mb-3 leading-tight tracking-tighter text-gray-300 group-hover:text-bone transition-colors duration-300"
                                        style={{ fontWeight: 400 }}>
                                        {post.title}
                                    </h2>
                                    <p className="text-mist/60 leading-relaxed mb-5 text-sm">{post.summary}</p>
                                    <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-mist/35 group-hover:text-mist transition-colors duration-300">
                                        Read Essay <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </motion.article>
                ))}
            </div>
        </div>
    );
}
