"use client";

import { motion } from "framer-motion";
import { Mail, Github, Handshake, Instagram, ArrowUpRight } from "lucide-react";

const socialLinks = [
    { name: "Email", Icon: Mail, href: "mailto:prithweeraj.poragach02@gmail.com", label: "prithweeraj.poragach02@gmail.com" },
    { name: "GitHub", Icon: Github, href: "https://github.com/Prithweeraj-Acharjee", label: "Prithweeraj-Acharjee" },
    { name: "Handshake", Icon: Handshake, href: "https://app.joinhandshake.com/profiles/bsn78c", label: "Prithweeraj Acharjee" },
    { name: "Instagram", Icon: Instagram, href: "https://www.instagram.com/prithwee____?igsh=NjZtb2J4eTBibmFu&utm_source=qr", label: "prithwee____" },
];

export default function ContactPage() {
    return (
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
            <header className="mb-16">
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="text-[11px] uppercase tracking-[0.45em] text-mist/50 mb-6 block">Contact</motion.span>
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="font-sans text-6xl md:text-9xl tracking-tighter leading-none mb-8 text-gray-300"
                    style={{ fontWeight: 400 }}>
                    Get in<br />Touch
                </motion.h1>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                    className="text-mist/60 max-w-md leading-relaxed">
                    Open to research collaborations, gallery inquiries, and systems architecture consultations.
                </motion.p>
            </header>

            <div className="space-y-2">
                {socialLinks.map(({ name, Icon, href, label }, index) => (
                    <motion.a key={name} href={href} target="_blank" rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08 + 0.35, duration: 0.6 }}
                        className="group flex items-center justify-between p-5 border border-white/[0.04] transition-all duration-400 hover:border-white/[0.1] relative overflow-hidden"
                        style={{ background: "rgba(255,255,255,0.01)" }}>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                            style={{ background: "rgba(200,191,176,0.03)" }} />
                        <div className="relative flex items-center gap-5">
                            <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 border border-white/[0.06] group-hover:border-white/[0.12] transition-colors">
                                <Icon size={15} className="text-mist/40 group-hover:text-bone transition-colors" />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-mist/30 mb-0.5">{name}</p>
                                <p className="text-sm text-mist/70 group-hover:text-parchment transition-colors">{label}</p>
                            </div>
                        </div>
                        <ArrowUpRight size={17} className="relative text-mist/20 group-hover:text-mist/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </motion.a>
                ))}
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
                className="mt-20 pt-8 border-t border-white/[0.04] text-[10px] uppercase tracking-[0.45em] text-mist/25 font-sans">
                Preserve the state. Explore the friction.
            </motion.div>
        </div>
    );
}
