"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const services = [
    "Custom Software & SaaS", "AI & Business Automation", "Cloud & Reliability",
    "Data & Market Intelligence", "Design That Converts", "Mobile Apps",
    "Security & Compliance", "Growth & Digital Marketing", "DevOps & Operations",
    "MLOps & AI Deployment",
];

const featured = [
    {
        name: "Reiva", line: "The receptionist that never sleeps.",
        desc: "An AI receptionist for clinics. Reiva answers patients, books appointments with live serial queues, generates digital prescriptions, tracks payments, and reports to a real-time dashboard, in Bangla and English, around the clock.",
        image: "/projects/reiva.png", href: "https://reiva.haorgrix.com",
    },
    {
        name: "Irris", line: "Your phone, on autopilot.",
        desc: "A mobile AI agent. Tell it a goal in plain language and Irris plans the steps and carries them out across your apps and your device. Agentic, not just chat.",
        image: "/projects/irris.png", href: "https://irris.vercel.app",
    },
];

const lab = [
    { name: "Warranty Tracker", type: "Mobile App", desc: "Photograph receipts, archive warranties, and search them the moment you need them.", img: "/haorgrix/lab/warranty.png" },
    { name: "ProVocab, English to Bangla", type: "Mobile App", desc: "A vocabulary builder with spaced repetition, made for Bengali speakers.", img: "/haorgrix/lab/provocab.jpg" },
    { name: "Grammar Gladiator", type: "Mobile App", desc: "Gamified English grammar and punctuation training.", img: "/haorgrix/lab/grammar.png" },
];

const team = [
    { name: "Prithweeraj A. Porag", role: "Chief Executive Officer", img: "/haorgrix/team/prithweeraj-porag.jpg" },
    { name: "Md. Musfiqur Rahman", role: "Chief Technology Officer", img: "/haorgrix/team/musfiqur-rahman.jpg" },
    { name: "Pradipta Roy Sarkar", role: "CFO & Legal Affairs", img: "/haorgrix/team/pradipta-roy-sarkar.jpg" },
    { name: "Sampanna Mahapatra", role: "Chief Operating Officer", img: "/haorgrix/team/sampanna-mahapatra.jpg" },
    { name: "Afroza Nowshin", role: "Product Manager", img: "/haorgrix/team/afroza-nowshin.jpg" },
    { name: "Dibbando Paul", role: "Head of Growth", img: "/haorgrix/team/dibbando-paul.jpg" },
    { name: "Nirupama Das", role: "People & Operations Manager", img: "/haorgrix/team/nirupama-das.jpg" },
    { name: "Antardip Himel", role: "Senior Software Engineer", img: "/haorgrix/team/antardip-himel.jpg" },
    { name: "Tanvir Alam Turjoy", role: "Sr. Content & Social Media", img: "/haorgrix/team/tanvir-alam-turjoy.jpg" },
    { name: "S N M Rayhan", role: "Software Engineer", img: "/haorgrix/team/snm-rayhan.jpg" },
    { name: "Sudipa Biswas", role: "Machine Learning Engineer", img: "/haorgrix/team/sudipa-biswas.jpg" },
    { name: "Soumita Paul Shyama", role: "Full Stack Developer", img: "/haorgrix/team/soumita-paul-shama.jpg" },
    { name: "Soumen Das", role: "Digital Marketing Manager", img: "/haorgrix/team/soumen-das.jpg" },
    { name: "MD Faysal Ahmad", role: "Content & Social Media Exec", img: "/haorgrix/team/md-faysal-ahmad.jpg" },
];

const clients = [
    { quote: "HaorGrix built our entire brand from the ground up and delivered precisely.", person: "Mustaque Ahmed", role: "Managing Director", company: "Lexfin Consulting", photo: "/haorgrix/clients/mustaque-ahmed.jpg", preview: "/haorgrix/clients/lexfin-preview.png" },
    { quote: "Our lead generation increased 3x within the first two months.", person: "Mustafizur Rahman Fahim", role: "CEO", company: "FizzBrush", photo: "/haorgrix/clients/mustafizur.jpg", preview: "/haorgrix/clients/fizzbrush-logo.png" },
    { quote: "HaorGrix handles literally everything for us and tripled our engagement.", person: "Aminul Haque Saurav", role: "Founder", company: "Filoix", photo: "/haorgrix/clients/aminul.jpg", preview: "/haorgrix/clients/filoix-logo.png" },
];

function HaorGrixLink({ label = "Visit haorgrix.com", href = "https://haorgrix.com", solid = false }: { label?: string; href?: string; solid?: boolean }) {
    return (
        <a href={href} target="_blank" rel="noopener"
            className={`group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] px-6 py-3.5 transition-colors ${solid ? "text-void bg-parchment hover:bg-bone" : "text-parchment border border-white/[0.1] hover:border-white/30"}`}
            style={solid ? {} : { background: "rgba(255,255,255,0.01)" }}>
            {label}
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
    );
}

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
                        An AI-native digital studio that handles software, AI and ML, data, design, and growth under
                        one contract. One team, full accountability, instead of managing a stack of vendors. Based in
                        Dhaka, working with clients across ten and more countries.
                    </p>
                    <div className="lg:col-span-5 flex lg:justify-end">
                        <HaorGrixLink />
                    </div>
                </motion.div>
                <p className="mt-10 text-[11px] uppercase tracking-[0.25em] text-mist/35">
                    Co-founded by Prithweeraj Acharjee, Chief Executive Officer
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
                        We are a small, senior team of engineers, designers, and operators who like shipping. We take
                        a limited number of things and build them properly, with AI where it earns its place and
                        craft everywhere.
                    </p>
                </div>
            </section>

            {/* Capabilities */}
            <section className="mb-28 md:mb-40">
                <h2 className="text-[10px] uppercase tracking-[0.4em] text-mist/40 mb-10">Capabilities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/[0.06]">
                    {services.map((s, i) => (
                        <div key={s} className="border-b border-r border-white/[0.06] p-6 md:p-8 flex items-center gap-4 hover:bg-white/[0.015] transition-colors">
                            <span className="text-[10px] font-mono tracking-widest text-bone/40">{String(i + 1).padStart(2, "0")}</span>
                            <h3 className="text-lg text-gray-200" style={{ fontWeight: 400 }}>{s}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured products */}
            <section className="mb-24 md:mb-36">
                <h2 className="text-[10px] uppercase tracking-[0.4em] text-mist/40 mb-12">Products</h2>
                <div className="space-y-24">
                    {featured.map((p, i) => (
                        <motion.div key={p.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease }}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
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

            {/* The Lab */}
            <section className="mb-28 md:mb-40">
                <h2 className="text-[10px] uppercase tracking-[0.4em] text-mist/40 mb-10">The Lab</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {lab.map((a) => (
                        <motion.div key={a.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ duration: 0.6 }} className="group">
                            <div className="relative aspect-[4/3] overflow-hidden border border-white/[0.05] bg-stone/30 flex items-center justify-center">
                                <Image src={a.img} alt={a.name} fill
                                    className="object-contain p-3 opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                                    sizes="(max-width: 768px) 100vw, 33vw" />
                            </div>
                            <span className="mt-5 block text-[10px] uppercase tracking-widest text-bone/40">{a.type}</span>
                            <h3 className="mt-2 text-xl text-gray-200" style={{ fontWeight: 400 }}>{a.name}</h3>
                            <p className="mt-2 text-sm text-mist/50 leading-relaxed">{a.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Team */}
            <section className="mb-28 md:mb-40">
                <div className="flex items-baseline justify-between mb-12">
                    <h2 className="text-[10px] uppercase tracking-[0.4em] text-mist/40">The Team</h2>
                    <span className="text-[10px] font-mono tracking-widest text-mist/30">{team.length} people</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
                    {team.map((m) => (
                        <motion.div key={m.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ duration: 0.5 }} className="group">
                            <div className="relative aspect-[4/5] overflow-hidden bg-stone/40">
                                <Image src={m.img} alt={m.name} fill
                                    className="object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
                                    sizes="(max-width: 768px) 50vw, 25vw" />
                            </div>
                            <h3 className="mt-4 text-base text-gray-200 leading-tight" style={{ fontWeight: 400 }}>{m.name}</h3>
                            <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-mist/40">{m.role}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Clients */}
            <section className="mb-28 md:mb-36">
                <h2 className="text-[10px] uppercase tracking-[0.4em] text-mist/40 mb-10">Selected Clients</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {clients.map((c) => (
                        <div key={c.company} className="border border-white/[0.06] p-8 flex flex-col">
                            <p className="italic text-lg text-bone/75 leading-relaxed flex-1" style={{ fontFamily: "var(--font-serif)" }}>
                                &ldquo;{c.quote}&rdquo;
                            </p>
                            <div className="mt-8 flex items-center gap-4">
                                <div className="relative w-11 h-11 rounded-full overflow-hidden bg-stone/50 flex-shrink-0">
                                    <Image src={c.photo} alt={c.person} fill className="object-cover" sizes="44px" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-200">{c.person}</p>
                                    <p className="text-[10px] uppercase tracking-widest text-mist/40">{c.role}, {c.company}</p>
                                </div>
                            </div>
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
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <HaorGrixLink label="Build with HaorGrix" solid />
                    <a href="mailto:hello@haorgrix.com" className="text-[11px] uppercase tracking-[0.25em] text-mist/50 hover:text-parchment transition-colors">
                        hello@haorgrix.com
                    </a>
                </div>
                <p className="mt-10 text-[10px] uppercase tracking-[0.3em] text-mist/30">Dhaka, Bangladesh, working across 10 and more countries</p>
            </section>
        </div>
    );
}
