"use client";

import Image from "next/image";
import { MaskLines, FadeUp } from "@/components/fx/Reveal";

const STATEMENT = `Art is something I always had trouble learning in school, I could never draw those perfect lines, I kept drawing as a wonderless child. Art is something that brought trouble into my home, I kept drawing through my adolescence. Art is something I don't easily understand, but I find myself staring at a soulful ceramic sculpture in the hands of a village potter, trying to understand his spirit or feel the vision embedded in a piece of mud. Art is something that messes with me, and I keep messing with it too.`;

const facts = [
    { title: "Education", items: ["University of Toledo, B.S. Computer Science and Engineering, 2023 to present"] },
    { title: "Exhibited", items: ["Mind & Soul Gallery & Studios, Toledo, May 2026"] },
    { title: "Recognition", items: ["International Recognition for Visual Art, Teravarna, 2025"] },
    { title: "Building", items: ["Co-founder and CEO, HaorGrix"] },
];

const emails = ["prithwee@haorgrix.com", "pporag@rockets.utoledo.edu", "prithweeraj.poragach02@gmail.com"];

export default function AboutPage() {
    return (
        <div className="px-6 md:px-12 pt-28 md:pt-36 pb-24">
            <div className="flex items-center justify-between gap-6 border-b border-white/[0.08] pb-6">
                <span className="text-[10px] uppercase tracking-[0.35em] text-mist/70">(A) About</span>
                <a
                    href="/Prithweeraj_Acharjee_CV.pdf"
                    download
                    className="group inline-flex items-center gap-3 rounded-full border border-parchment/25 px-5 py-3 text-[10px] uppercase tracking-[0.3em] text-parchment hover:bg-parchment hover:text-void transition-colors"
                >
                    Download CV <span className="transition-transform group-hover:translate-y-0.5">↓</span>
                </a>
            </div>

            <section className="grid md:grid-cols-12 gap-12 md:gap-16 pt-14 md:pt-20 items-start">
                <FadeUp className="md:col-span-5 md:sticky md:top-28">
                    <div className="relative aspect-[3/4] overflow-hidden bg-ash">
                        <Image src="/the-artist.jpg" alt="Prithwee, photographed in Toledo, 2026" fill priority sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
                    </div>
                    <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-mist/70">The artist. Photograph, 2026</p>
                </FadeUp>

                <div className="md:col-span-7">
                    <h1>
                        <MaskLines
                            onLoad
                            lines={["About", <em key="a" className="text-bone/70">the artist</em>]}
                            className="block text-[16vw] md:text-[7vw] leading-[0.9] tracking-[-0.03em] text-parchment"
                            style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
                        />
                    </h1>

                    <FadeUp delay={0.2}>
                        <p className="mt-12 text-2xl md:text-3xl leading-snug text-parchment" style={{ fontFamily: "var(--font-serif)" }}>
                            Prithwee is a Bangladeshi student, a painter and an alien in America.
                        </p>
                        <blockquote className="mt-10 text-lg md:text-xl leading-[1.75] text-bone/85" style={{ fontFamily: "var(--font-serif)" }}>
                            &ldquo;{STATEMENT}&rdquo;
                        </blockquote>
                        <p className="mt-8 text-[11px] uppercase tracking-[0.3em] text-mist/80">
                            Prithwee, Bancroft Street, Toledo
                        </p>
                    </FadeUp>

                    <dl className="mt-20 grid sm:grid-cols-2 gap-x-10 gap-y-10 border-t border-white/[0.08] pt-12">
                        {facts.map((f) => (
                            <div key={f.title}>
                                <dt className="text-[10px] uppercase tracking-[0.35em] text-mist/80 mb-3">{f.title}</dt>
                                {f.items.map((it) => (
                                    <dd key={it} className="text-base leading-snug text-bone/90" style={{ fontFamily: "var(--font-serif)" }}>{it}</dd>
                                ))}
                            </div>
                        ))}
                        <div className="sm:col-span-2">
                            <dt className="text-[10px] uppercase tracking-[0.35em] text-mist/80 mb-3">Email</dt>
                            {emails.map((e) => (
                                <dd key={e}>
                                    <a href={`mailto:${e}`} className="link-slide inline-block py-1 text-base md:text-lg text-parchment break-all" style={{ fontFamily: "var(--font-serif)" }}>{e}</a>
                                </dd>
                            ))}
                        </div>
                    </dl>
                </div>
            </section>
        </div>
    );
}
