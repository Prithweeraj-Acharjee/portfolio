"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const capabilities = [
    { k: "01", t: "Custom Software & SaaS", d: "Product-grade web and platform builds, from zero to launch." },
    { k: "02", t: "AI / MLOps", d: "Applied AI, agents, retrieval, evaluation, and the pipelines that keep them honest." },
    { k: "03", t: "Cloud Architecture", d: "Systems designed to scale without becoming a liability." },
    { k: "04", t: "Data Engineering", d: "Pipelines and data products that turn raw signal into something usable." },
    { k: "05", t: "UI / UX Design", d: "Interfaces with taste, built to be used, not just demoed." },
    { k: "06", t: "Mobile", d: "Native-feeling apps for the device your users actually hold." },
    { k: "07", t: "Security", d: "Built in from the first commit, not bolted on at the end." },
];

const products = [
    {
        name: "Reiva",
        line: "The receptionist that never sleeps.",
        desc: "An AI receptionist for clinics. Reiva answers patients, books appointments with live serial queues, generates digital prescriptions, tracks payments, and reports to a real-time dashboard, in Bangla and English, around the clock.",
        image: "/projects/reiva.png",
        href: "https://reiva.haorgrix.com",
    },
    {
        name: "Irris",
        line: "Your phone, on autopilot.",
        desc: "A mobile AI agent. Tell it a goal in plain language and Irris plans the steps and carries them out across your apps and your device. Agentic, not just chat.",
        image: "/projects/irris.png",
        href: "https://irris.vercel.app",
    },
];

const models = [
    { t: "Fixed-scope delivery", d: "A defined build, shipped to spec." },
    { t: "Dedicated retained teams", d: "A senior team that works as yours." },
    { t: "API-licensed products", d: "Our data products, in your stack." },
];

export default function HaorGrixPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">

            {/* Hero */}
            <header className="mb-28 md:mb-40">
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="text-[11px] uppercase tracking-[0.45em] text-mist/50 mb-6 block">
                    Digital Studio, Dhaka to the world
                </motion.span>
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease }}
                    className="font-sans text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9] text-gray-200"
                    style={{ fontWeight: 400 }}>
                    HaorGrix
                </motion.h1>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
                    className="mt-8 italic text-2xl md:text-4xl text-bone/70 leading-tight"
                    style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}>
                    Where imagination becomes infrastructure.
                </motion.p>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                    className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
                    <p className="lg:col-span-7 text-mist/60 leading-relaxed max-w-2xl">
                        A 13-person digital studio building AI-native products for clients while incubating our own.
                        We work across web, mobile, AI engineering, and design. The bet is simple: a small, senior
                        team can outbuild a much larger agency, given the right product focus.
                    </p>
                    <div className="lg:col-span-5 flex lg:justify-end">
                        <a href="https://haorgrix.com" target="_blank" rel="noopener"
                            className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-parchment border border-white/[0.1] hover:border-white/30 px-6 py-3.5 transition-colors"
                            style={{ background: "rgba(255,255,255,0.01)" }}>
                            Visit haorgrix.com
                            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </div>
                </motion.div>
                <p className="mt-10 text-[11px] uppercase tracking-[0.25em] text-mist/35">
                    Co-founded by Prithweeraj Acharjee
                </p>
            </header>

            {/* Ethos */}
            <section className="mb-28 md:mb-40 grid grid-cols-1 lg:grid-cols-12 gap-10">
                <h2 className="lg:col-span-4 text-[10px] uppercase tracking-[0.4em] text-mist/40">The Studio</h2>
                <div className="lg:col-span-8 space-y-6 text-lg leading-relaxed text-bone/70"
                    style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}>
                    <p>
                        Most of the talent that gets pulled into outsourcing is undervalued and undermentored.
                        HaorGrix is an attempt to build something else, a place where the work is hard, the equity
                        is real, and the products carry our names.
                    </p>
                    <p>
                        We are engineers and designers who like shipping. We take a small number of things and build
                        them properly, with AI where it earns its place and craft everywhere.
                    </p>
                </div>
            </section>

            {/* Capabilities */}
            <section className="mb-28 md:mb-40">
                <h2 className="text-[10px] uppercase tracking-[0.4em] text-mist/40 mb-10">Capabilities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/[0.06]">
                    {capabilities.map((c) => (
                        <motion.div key={c.k} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            viewport={{ once: true }} transition={{ duration: 0.6 }}
                            className="border-b border-r border-white/[0.06] p-7 md:p-9 group hover:bg-white/[0.015] transition-colors">
                            <span className="text-[10px] font-mono tracking-widest text-bone/40">{c.k}</span>
                            <h3 className="mt-4 text-xl text-gray-200" style={{ fontWeight: 400 }}>{c.t}</h3>
                            <p className="mt-3 text-sm text-mist/50 leading-relaxed">{c.d}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Products */}
            <section className="mb-28 md:mb-40">
                <h2 className="text-[10px] uppercase tracking-[0.4em] text-mist/40 mb-12">Products</h2>
                <div className="space-y-24">
                    {products.map((p, i) => (
                        <motion.div key={p.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease }}
                            className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${i % 2 === 1 ? "" : ""}`}>
                            <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                                <a href={p.href} target="_blank" rel="noopener"
                                    className="block relative aspect-[16/10] overflow-hidden border border-white/[0.05] group"
                                    style={{ background: "rgba(255,255,255,0.01)" }}>
                                    <Image src={p.image} alt={p.name} fill
                                        className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
                                        sizes="(max-width: 1024px) 100vw, 60vw" />
                                </a>
                            </div>
                            <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                                <h3 className="font-sans text-4xl md:text-5xl tracking-tighter text-gray-200" style={{ fontWeight: 400 }}>{p.name}</h3>
                                <p className="mt-3 italic text-xl text-bone/70" style={{ fontFamily: "var(--font-serif)" }}>{p.line}</p>
                                <p className="mt-6 text-mist/55 leading-relaxed">{p.desc}</p>
                                <a href={p.href} target="_blank" rel="noopener"
                                    className="group mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-mist/50 hover:text-parchment transition-colors">
                                    Visit
                                    <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* How we work */}
            <section className="mb-24">
                <h2 className="text-[10px] uppercase tracking-[0.4em] text-mist/40 mb-10">How we work</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.05]">
                    {models.map((m) => (
                        <div key={m.t} className="bg-void p-8">
                            <h3 className="text-lg text-gray-200" style={{ fontWeight: 400 }}>{m.t}</h3>
                            <p className="mt-2 text-sm text-mist/50 leading-relaxed">{m.d}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="border-t border-white/[0.06] pt-20 pb-6 text-center">
                <p className="italic text-3xl md:text-5xl text-bone/70 leading-tight max-w-3xl mx-auto"
                    style={{ fontFamily: "var(--font-serif)" }}>
                    If you are building something that deserves to be built well, let us talk.
                </p>
                <a href="https://haorgrix.com" target="_blank" rel="noopener"
                    className="group mt-12 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-parchment border border-white/[0.12] hover:border-white/30 px-8 py-4 transition-colors">
                    Build with HaorGrix
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
            </section>
        </div>
    );
}
