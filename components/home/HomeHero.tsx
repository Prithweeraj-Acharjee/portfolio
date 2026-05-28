"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

const quote = `well, Art is something I always had trouble learning in school, as I could never draw those perfect lines, yet I kept drawing as a wonderless child. Art is something that brought trouble into my home, yet I kept drawing through my adolescence. Art is something I don't easily understand, but I find myself staring at a soulful ceramic sculpture in the hands of a village potter, trying to understand his spirit or feel the vision embedded in a piece of mud. Art is something that messes with me, and I keep messing with it too.`;

export default function HomeHero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className="absolute inset-0 md:inset-y-0 md:left-0 md:w-[52vw] z-0"
            >
                <Image
                    src="/prithwee.jpg"
                    alt="Prithweeraj"
                    fill
                    priority
                    className="object-cover object-center"
                    style={{ filter: "contrast(1.05) brightness(0.82)" }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(to bottom, rgba(8,8,8,0.35) 0%, transparent 30%, transparent 60%, rgba(8,8,8,0.6) 100%), " +
                            "linear-gradient(to right, transparent 55%, rgba(8,8,8,0.95) 100%)",
                    }}
                />
                <div
                    className="absolute top-0 left-0 right-0 h-32"
                    style={{ background: "linear-gradient(to bottom, rgba(8,8,8,0.5), transparent)" }}
                />
            </motion.div>

            <div className="relative z-10 h-full flex flex-col justify-end md:justify-center pointer-events-none">
                <div className="w-full md:w-[52vw] md:ml-[42vw] px-8 md:px-12 pb-20 md:pb-0 pointer-events-auto">

                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="font-sans text-[clamp(4rem,10vw,9rem)] leading-[0.85] tracking-tighter text-gray-400 mb-4 select-none"
                        style={{ fontWeight: 400 }}
                    >
                        PRITHWEE
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[11px] uppercase tracking-[0.45em] text-mist/40 font-mono mb-8"
                    >
                        Painter · Researcher · Builder
                    </motion.div>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.2, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
                        className="h-[1px] w-16 bg-bloodred/60 mb-8 origin-left"
                    />

                    <motion.blockquote
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 2 }}
                        className="font-serif text-[clamp(0.85rem,1.4vw,1.05rem)] leading-[1.85] text-bone/60 max-w-[42ch]"
                        style={{ fontWeight: 300 }}
                    >
                        {quote}
                    </motion.blockquote>

                </div>
            </div>

            {/* Scroll cue */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4, y: [0, 6, 0] }}
                transition={{ opacity: { duration: 1, delay: 3.2 }, y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" } }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 pointer-events-none"
            >
                <span className="text-[9px] uppercase tracking-[0.4em] text-mist/40">Scroll</span>
                <ArrowDown size={12} className="text-mist/40" />
            </motion.div>

            <div
                className="absolute bottom-0 left-0 right-0 h-[55%] md:hidden z-[1] pointer-events-none"
                style={{ background: "linear-gradient(to bottom, transparent, rgba(8,8,8,0.97) 70%)" }}
            />
        </section>
    );
}
