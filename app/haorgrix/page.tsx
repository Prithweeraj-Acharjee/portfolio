"use client";

import { MaskLines, FadeUp } from "@/components/fx/Reveal";

const TEAM_URL = "https://haorgrix.com/team";

export default function HaorGrixPage() {
    return (
        <div className="min-h-[100svh] px-6 md:px-12 pt-28 pb-24 md:pt-40 md:pb-32 flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.35em] text-mist/70 mb-6">Co-founder</span>
            <h1>
                <MaskLines
                    onLoad
                    lines={["HaorGrix"]}
                    className="block text-[19vw] md:text-[12vw] leading-[0.85] tracking-[-0.04em] text-parchment"
                    style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
                />
            </h1>

            <div className="mt-14 md:mt-24 grid md:grid-cols-12 gap-10 flex-1">
                <FadeUp delay={0.3} className="md:col-span-7 md:col-start-6 space-y-8 text-xl md:text-3xl leading-[1.45] text-bone/90">
                    <p style={{ fontFamily: "var(--font-serif)" }}>
                        Most of the talent that gets pulled into outsourcing is undervalued and undermentored.
                        HaorGrix is an attempt to build something else, a place where the work is hard, the equity
                        is real, and the products carry our names.
                    </p>
                    <p style={{ fontFamily: "var(--font-serif)" }}>
                        We are a small, senior team of engineers, designers, and operators who like shipping. We take
                        a limited number of things and build them properly, with AI where it earns its place and
                        craft everywhere.
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.35em] text-mist/70" style={{ fontFamily: "var(--font-sans)" }}>
                        Prithwee
                    </p>
                </FadeUp>
            </div>

            <FadeUp delay={0.5}>
                <a
                    href={TEAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="Open"
                    className="group mt-20 md:mt-28 flex items-end justify-between gap-6 border-t border-white/10 pt-8"
                >
                    <span
                        className="text-4xl md:text-7xl leading-none tracking-tight text-parchment group-hover:italic transition-all"
                        style={{ fontFamily: "var(--font-serif)" }}
                    >
                        Meet the team
                    </span>
                    <span className="shrink-0 text-[10px] uppercase tracking-[0.3em] text-mist/80 group-hover:text-parchment transition-colors">
                        haorgrix.com/team ↗
                    </span>
                </a>
            </FadeUp>
        </div>
    );
}
