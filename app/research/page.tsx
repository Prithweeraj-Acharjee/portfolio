"use client";

import { research } from "@/lib/content";
import PageHeader from "@/components/PageHeader";
import { FadeUp } from "@/components/fx/Reveal";

export default function ResearchPage() {
    return (
        <div>
            <PageHeader
                index="R"
                label="Research"
                title={["Research"]}
                intro={<p>Papers and ongoing studies in AI fairness, language technology, and graphics.</p>}
                aside={
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="link-slide inline-block py-2 text-[11px] uppercase tracking-[0.3em] text-parchment">
                        Résumé, PDF ↗
                    </a>
                }
            />

            <ol className="px-6 md:px-12">
                {research.map((item, i) => (
                    <li key={item.id} className="border-b border-white/[0.08]">
                        <FadeUp className="grid md:grid-cols-12 gap-6 md:gap-10 py-12 md:py-16">
                            <div className="md:col-span-3 flex flex-wrap md:flex-col gap-x-4 gap-y-3 text-[10px] uppercase tracking-[0.3em] text-mist/80">
                                <span className="font-mono">{String(i + 1).padStart(2, "0")}</span>
                                <span>{item.year}</span>
                                <span className="text-bone/90">{item.institution ?? "Independent"}</span>
                            </div>
                            <div className="md:col-span-9">
                                <h2 className="text-3xl md:text-5xl leading-[1.05] tracking-tight text-parchment" style={{ fontFamily: "var(--font-serif)" }}>
                                    {item.title}
                                </h2>
                                <p className="mt-6 max-w-3xl text-base md:text-lg leading-relaxed text-bone/85">{item.abstract}</p>
                                <p className="mt-5 max-w-3xl text-sm leading-relaxed text-mist/90">{item.technicalDetails}</p>
                                {item.links && (
                                    <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
                                        {item.links.map((link) => (
                                            <a
                                                key={link.url}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="link-slide inline-block py-2 text-[11px] uppercase tracking-[0.3em] text-parchment"
                                            >
                                                {link.label} ↗
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </FadeUp>
                    </li>
                ))}
            </ol>
        </div>
    );
}
