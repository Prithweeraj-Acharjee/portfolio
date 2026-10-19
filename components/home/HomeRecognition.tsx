"use client";

import Link from "next/link";
import { series, research } from "@/lib/content";
import { FadeUp, MaskLines } from "@/components/fx/Reveal";

const paintings = series.reduce((n, s) => n + s.artworks.length, 0);

const stats = [
    { n: String(paintings), label: "Paintings online" },
    { n: String(series.length), label: "Series" },
    { n: String(research.length), label: "Research papers" },
];

const record = [
    { year: "2026", what: "Mind & Soul Gallery, Toledo", note: "Two paintings exhibited", href: "https://expressions-under-suffer.vercel.app" },
    { year: "2026", what: "Midwest Graduate Symposium", note: "First-author poster, AI aesthetics audit", href: "/research" },
    { year: "2026", what: "arXiv", note: "Dialectal Arabic machine translation, second author", href: "https://arxiv.org/abs/2604.06456" },
    { year: "2026", what: "Material: Painting in the Post-AI Era", note: "Book, published online", href: "https://material-expressions.vercel.app/book" },
    { year: "2025", what: "IEEE QPAIN 2025", note: "Bengali fake news detection, published", href: "https://ieeexplore.ieee.org/document/11171927" },
];

export default function HomeRecognition() {
    return (
        <section className="relative px-6 md:px-12 py-28 md:py-40 border-t border-white/[0.06]">
            <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                    <span className="text-[10px] uppercase tracking-[0.35em] text-mist/70 block mb-6">(05) The record</span>
                    <MaskLines
                        lines={["Shown,", "published,", <em key="b" className="text-ember">built.</em>]}
                        className="block text-5xl md:text-6xl leading-[0.95] tracking-tight text-parchment"
                        style={{ fontFamily: "var(--font-serif)" }}
                    />
                </div>

                <div className="md:col-span-8">
                    <div className="grid grid-cols-3 gap-px bg-white/[0.08] mb-16">
                        {stats.map((s, i) => (
                            <FadeUp key={s.label} delay={i * 0.08} className="bg-void p-5 md:p-6">
                                <span className="block text-5xl md:text-6xl tabular-nums text-parchment" style={{ fontFamily: "var(--font-serif)" }}>{s.n}</span>
                                <span className="block mt-2 text-[10px] uppercase tracking-[0.3em] text-mist/70">{s.label}</span>
                            </FadeUp>
                        ))}
                    </div>

                    <ul>
                        {record.map((r) => {
                            const ext = r.href.startsWith("http");
                            const inner = (
                                <span className="grid grid-cols-[3.5rem_1fr_auto] md:grid-cols-[5rem_1fr_1fr_1.5rem] gap-4 items-baseline py-5 border-b border-white/[0.08] group-hover:border-bloodred transition-colors">
                                    <span className="font-mono text-[11px] text-mist/70">{r.year}</span>
                                    <span className="text-lg md:text-xl text-parchment group-hover:italic transition-all" style={{ fontFamily: "var(--font-serif)" }}>{r.what}</span>
                                    <span className="hidden md:block text-sm text-mist/70">{r.note}</span>
                                    <span className="text-mist/70 group-hover:text-ember group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all">{ext ? "↗" : "→"}</span>
                                </span>
                            );
                            return (
                                <li key={r.what}>
                                    {ext
                                        ? <a href={r.href} target="_blank" rel="noopener noreferrer" className="group block">{inner}</a>
                                        : <Link href={r.href} className="group block">{inner}</Link>}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
}
