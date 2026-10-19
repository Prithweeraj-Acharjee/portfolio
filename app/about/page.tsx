"use client";

import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { FadeUp } from "@/components/fx/Reveal";

const facts = [
    {
        title: "Education",
        items: ["University of Toledo, B.S. Computer Science and Engineering, 2023 to present"],
    },
    {
        title: "Exhibited",
        items: ["Mind & Soul Gallery & Studios, Toledo. Group exhibition, grand opening, May 2026"],
    },
    {
        title: "Recognition",
        items: ["International Recognition for Visual Art, Teravarna, 2025"],
    },
    {
        title: "Publications",
        items: [
            "Bengali Fake News Detection, IEEE QPAIN 2025",
            "Dialectal Arabic Machine Translation, arXiv 2026",
            "Material: Painting in the Post-AI Era, book, 2026",
        ],
    },
    {
        title: "Building",
        items: ["Co-founder and CEO, HaorGrix"],
    },
];

const photos = [
    { src: "/about-06.jpg", alt: "Prithwee, close portrait in black and white", cls: "md:col-span-5", ratio: "3/4", pos: "object-top" },
    { src: "/about-04.jpg", alt: "Seated on a couch beneath a wall clock and a dartboard", cls: "md:col-span-7 md:self-end", ratio: "16/10", pos: "object-center" },
    { src: "/about-01.jpg", alt: "Holding up a printed collage", cls: "md:col-span-8 md:col-start-3", ratio: "16/8", pos: "object-top" },
    { src: "/about-03.jpg", alt: "Sitting cross-legged on the floor of the studio", cls: "md:col-span-4", ratio: "3/4", pos: "object-center" },
    { src: "/about-07.jpg", alt: "A charcoal drawing and a painted piece on the studio wall", cls: "md:col-span-6 md:col-start-7", ratio: "4/5", pos: "object-center" },
    { src: "/about-02.jpg", alt: "A hand pressed against a curtain", cls: "md:col-span-5 md:col-start-2", ratio: "4/3", pos: "object-center" },
    { src: "/about-05.jpg", alt: "Full figure seated in a studio chair", cls: "md:col-span-5", ratio: "3/4", pos: "object-top" },
];

export default function AboutPage() {
    return (
        <div>
            <PageHeader
                index="A"
                label="About"
                title={["Prithwee"]}
                intro={
                    <p className="text-2xl md:text-3xl leading-[1.35] text-parchment whitespace-pre-line" style={{ fontFamily: "var(--font-serif)" }}>
                        {`Art unsettles me.
I return to it anyway.

I work with image, distortion, memory, and code,
building systems that move, fracture, and reform.
Through image, material, and machine,
Just exploring what resists!!`}
                    </p>
                }
                aside={<span className="text-[10px] uppercase tracking-[0.3em] text-mist/80">Visual and computational artist, systems, research</span>}
            />

            <section className="px-6 md:px-12 py-16 md:py-24 border-b border-white/[0.08]">
                <dl className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
                    {facts.map((f, i) => (
                        <FadeUp key={f.title} delay={i * 0.06}>
                            <dt className="text-[10px] uppercase tracking-[0.35em] text-mist/80 mb-4">{f.title}</dt>
                            {f.items.map((it) => (
                                <dd key={it} className="text-base leading-snug text-bone/90 mb-3" style={{ fontFamily: "var(--font-serif)" }}>{it}</dd>
                            ))}
                        </FadeUp>
                    ))}
                </dl>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="link-slide inline-block mt-12 py-2 text-[11px] uppercase tracking-[0.3em] text-parchment">
                    Full résumé, PDF ↗
                </a>
            </section>

            <section className="px-6 md:px-12 py-16 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
                {photos.map((p) => (
                    <FadeUp key={p.src} className={p.cls}>
                        <div className="relative overflow-hidden bg-ash" style={{ aspectRatio: p.ratio }}>
                            <Image src={p.src} alt={p.alt} fill sizes="(max-width: 768px) 100vw, 60vw" className={`object-cover ${p.pos} grayscale`} />
                        </div>
                    </FadeUp>
                ))}
            </section>
        </div>
    );
}
