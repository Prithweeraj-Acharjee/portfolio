"use client";

import { MaskLines, FadeUp } from "@/components/fx/Reveal";
import HaorGrixMark from "@/components/HaorGrixMark";

const links = [
    { label: "Meet the team", href: "https://haorgrix.com/team", note: "haorgrix.com/team" },
    { label: "Profile", href: "https://haorgrix.com/team/prithweeraj-porag", note: "haorgrix.com/team/prithweeraj-porag" },
];

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

            <div className="mt-14 md:mt-24 grid md:grid-cols-12 gap-10 flex-1 items-center">
                <HaorGrixMark className="w-[70%] max-w-[300px] mx-auto md:w-full md:max-w-[440px] md:col-span-4 md:col-start-1" />
                <FadeUp delay={0.3} className="md:col-span-7 md:col-start-6 space-y-8 text-xl md:text-3xl leading-[1.45] text-bone/90">
                    <p style={{ fontFamily: "var(--font-serif)" }}>
                        HaorGrix was our plan to attempt to make an exceptional team, with most of the talent that gets pulled into outsourcing, undervalued and undermentored, a place where the work is actually hard, but we feel ours.
                    </p>
                    <p style={{ fontFamily: "var(--font-serif)" }}>
                        HaorGrix is a small team of engineers and designers who liked to vision. We take a limited number of things and build them properly. The equity is real, and the products carry our names. We would rather be known for a few things that last than for many that don&rsquo;t.
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.35em] text-mist/70" style={{ fontFamily: "var(--font-sans)" }}>
                        Prithwee
                    </p>
                </FadeUp>
            </div>

            <FadeUp delay={0.5} className="mt-20 md:mt-28">
                {links.map((l) => (
                <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="Open"
                    className="group flex items-end justify-between gap-6 border-t border-white/10 py-8"
                >
                    <span
                        className="text-4xl md:text-7xl leading-none tracking-tight text-parchment group-hover:italic transition-all"
                        style={{ fontFamily: "var(--font-serif)" }}
                    >
                        {l.label}
                    </span>
                    <span className="min-w-0 break-all text-right text-[10px] uppercase tracking-[0.3em] text-mist/80 group-hover:text-parchment transition-colors">
                        {l.note} ↗
                    </span>
                </a>
                ))}
            </FadeUp>
        </div>
    );
}
