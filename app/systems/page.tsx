"use client";

import { motion, type Variants } from "framer-motion";
import { projects } from "@/lib/content";
import { useMode } from "@/lib/mode-context";
import Image from "next/image";
import { ExternalLink, Github, Network } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};
const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export default function SystemsPage() {
    const { mode } = useMode();

    return (
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
            <header className="mb-24">
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="text-[11px] uppercase tracking-[0.45em] text-mist/50 mb-4 block">
                    Systems & Engineering
                </motion.span>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease }}
                        className="font-sans text-5xl md:text-7xl tracking-tighter leading-none text-gray-300"
                        style={{ fontWeight: 400 }}>
                        Built Systems
                    </motion.h1>
                    <motion.a
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                        href="/resume.pdf" target="_blank"
                        className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-mist/60 hover:text-bone transition-colors border border-white/[0.06] hover:border-white/[0.12] px-4 py-2"
                        style={{ background: "rgba(255,255,255,0.01)" }}>
                        <ExternalLink size={13} /> View Resume
                    </motion.a>
                </div>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                    className="text-mist/60 max-w-xl leading-relaxed">
                    An intersection of architectural rigor and experimental implementation.
                    {mode === 'aesthetic' && <span> Toggle <span className="text-parchment">Technical Mode</span> for stack analysis.</span>}
                </motion.p>
            </header>

            <div className="space-y-32">
                {projects.map((project, index) => (
                    <motion.section key={project.id} variants={stagger} initial="hidden"
                        whileInView="show" viewport={{ once: true, margin: "-80px" }}>
                        <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
                            <span className="text-[10px] font-mono tracking-widest uppercase text-bone/60">0{index + 1}</span>
                            <span className="text-[10px] text-mist/30 font-mono uppercase tracking-widest">// {project.year}</span>
                            <div className="flex-1 h-px bg-white/[0.04]" />
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                            <motion.div variants={fadeUp} className="lg:col-span-5 flex flex-col gap-6">
                                <div className="flex gap-5 items-start">
                                    <div className="w-px self-stretch flex-shrink-0 mt-1 rounded-full bg-bone/20" />
                                    <h2 className="font-sans text-3xl md:text-5xl tracking-tighter leading-tight text-gray-300"
                                        style={{ fontWeight: 400 }}>{project.title}</h2>
                                </div>
                                <p className="text-mist/60 leading-relaxed">{project.summary}</p>
                                <div>
                                    <h3 className="text-[10px] uppercase tracking-widest text-mist/30 mb-2">Conceptual Framing</h3>
                                    <p className="text-sm text-mist/50 leading-relaxed">"{project.conceptualFraming}"</p>
                                </div>

                                {mode === 'technical' && (
                                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                                        className="border border-white/[0.06] overflow-hidden"
                                        style={{ background: "rgba(200,191,176,0.03)" }}>
                                        <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.04]">
                                            <Network size={13} className="text-bone/40" />
                                            <span className="text-[10px] uppercase tracking-widest text-mist/40 font-semibold">Architecture</span>
                                        </div>
                                        <div className="px-5 py-4">
                                            <p className="text-xs font-mono leading-relaxed text-mist/50">{project.technicalArchitecture}</p>
                                            <div className="mt-4 flex flex-wrap gap-1.5">
                                                {project.stack.map((s) => (
                                                    <span key={s} className="text-[9px] uppercase tracking-wide px-2.5 py-1 border border-white/[0.06] text-mist/40">
                                                        {s}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                <div className="flex items-center gap-6 pt-2">
                                    {project.links?.demo && (
                                        <a href={project.links.demo} target="_blank"
                                            className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-mist/40 hover:text-parchment transition-colors">
                                            <ExternalLink size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                            Live Demo
                                        </a>
                                    )}
                                    {project.links?.github && (
                                        <a href={project.links.github} target="_blank"
                                            className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-mist/40 hover:text-parchment transition-colors">
                                            <Github size={13} />
                                            Repository
                                        </a>
                                    )}
                                </div>
                            </motion.div>

                            <motion.div variants={fadeUp}
                                className="lg:col-span-7 aspect-[16/10] relative overflow-hidden border border-white/[0.04] group"
                                style={{ background: "rgba(255,255,255,0.01)" }}>
                                {project.media.heroVideo ? (
                                    project.media.heroVideo.includes('drive.google.com') ? (
                                        <iframe src={project.media.heroVideo.replace('/view', '/preview')}
                                            className="w-full h-full border-0 opacity-50 group-hover:opacity-80 transition-opacity duration-700" allow="autoplay" />
                                    ) : (
                                        <video src={project.media.heroVideo} autoPlay muted loop playsInline
                                            className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-700 grayscale group-hover:grayscale-0" />
                                    )
                                ) : (
                                    <Image src={project.media.hero} alt={project.title} fill
                                        className="object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-700 grayscale group-hover:grayscale-0"
                                        sizes="(max-width: 1024px) 100vw, 60vw" />
                                )}
                            </motion.div>
                        </div>
                    </motion.section>
                ))}
            </div>
        </div>
    );
}
