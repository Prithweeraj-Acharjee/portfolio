"use client";

import { motion, type Variants } from "framer-motion";
import { projects } from "@/lib/content";
import { useMode } from "@/lib/mode-context";
import Image from "next/image";
import { ExternalLink, Github, Network } from "lucide-react";
import PageHeader from "@/components/PageHeader";

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
    const { mode, toggleMode } = useMode();

    return (
        <div>
            <PageHeader
                index="S"
                label="Systems and engineering"
                title={["Built", <em key="s" className="text-bone/80">systems</em>]}
                intro={<p>Software, AI products, and interactive work, each with a live demo.</p>}
                aside={
                    <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
                        <button onClick={toggleMode} aria-pressed={mode === 'technical'} className="link-slide inline-block py-2 text-[11px] uppercase tracking-[0.3em] text-parchment">
                            {mode === 'technical' ? 'Hide' : 'Show'} the stack
                        </button>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="link-slide inline-block py-2 text-[11px] uppercase tracking-[0.3em] text-parchment">
                            Résumé, PDF ↗
                        </a>
                    </div>
                }
            />
            <div className="px-6 md:px-12 pt-16 md:pt-24">

            <div className="space-y-28 md:space-y-40 pb-24">
                {projects.map((project, index) => (
                    <motion.section key={project.id} variants={stagger} initial="hidden"
                        whileInView="show" viewport={{ once: true, margin: "-80px" }}>
                        <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
                            <span className="text-[10px] font-mono tracking-widest uppercase text-bone/60">0{index + 1}</span>
                            <span className="text-[10px] text-mist/80 font-mono uppercase tracking-widest">{project.year}</span>
                            <div className="flex-1 h-px bg-white/[0.04]" />
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                            <motion.div variants={fadeUp} className="lg:col-span-5 flex flex-col gap-6">
                                <div className="flex gap-5 items-start">
                                    <div className="w-px self-stretch flex-shrink-0 mt-1 rounded-full bg-bone/20" />
                                    <h2 className="font-serif text-3xl md:text-5xl tracking-tight leading-tight text-parchment"
                                        style={{ fontWeight: 400 }}>{project.title}</h2>
                                </div>
                                <p className="text-bone/85 leading-relaxed">{project.summary}</p>
                                <div>
                                    <h3 className="text-[10px] uppercase tracking-widest text-mist/80 mb-2">Framing</h3>
                                    <p className="text-sm text-bone/80 leading-relaxed italic" style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem" }}>“{project.conceptualFraming}”</p>
                                </div>

                                {mode === 'technical' && (
                                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                                        className="border border-white/[0.06] overflow-hidden"
                                        style={{ background: "rgba(200,191,176,0.03)" }}>
                                        <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.04]">
                                            <Network size={13} className="text-bone/40" />
                                            <span className="text-[10px] uppercase tracking-widest text-mist/80 font-semibold">Architecture</span>
                                        </div>
                                        <div className="px-5 py-4">
                                            <p className="text-xs font-mono leading-relaxed text-mist/90">{project.technicalArchitecture}</p>
                                            <div className="mt-4 flex flex-wrap gap-1.5">
                                                {project.stack.map((s) => (
                                                    <span key={s} className="text-[9px] uppercase tracking-wide px-2.5 py-1 border border-white/[0.06] text-mist/80">
                                                        {s}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                <div className="flex items-center gap-6 pt-2">
                                    {project.links?.demo && (
                                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer"
                                            className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-mist/80 hover:text-parchment transition-colors">
                                            <ExternalLink size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                            Live Demo
                                        </a>
                                    )}
                                    {project.links?.github && (
                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                                            className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-mist/80 hover:text-parchment transition-colors">
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
                                        className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
                                        sizes="(max-width: 1024px) 100vw, 60vw" />
                                )}
                            </motion.div>
                        </div>
                    </motion.section>
                ))}
            </div>
            </div>
        </div>
    );
}
