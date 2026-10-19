"use client";

import PageHeader from "@/components/PageHeader";
import { FadeUp } from "@/components/fx/Reveal";
import LocalTime from "@/components/fx/LocalTime";

const EMAIL = "prithweeraj.poragach02@gmail.com";

const channels = [
    { name: "HaorGrix", label: "prithwee@haorgrix.com", href: "mailto:prithwee@haorgrix.com" },
    { name: "University", label: "pporag@rockets.utoledo.edu", href: "mailto:pporag@rockets.utoledo.edu" },
    { name: "Instagram", label: "@prithwee____", href: "https://www.instagram.com/prithwee____" },
    { name: "GitHub", label: "Prithweeraj-Acharjee", href: "https://github.com/Prithweeraj-Acharjee" },
    { name: "Handshake", label: "Prithweeraj Acharjee", href: "https://app.joinhandshake.com/profiles/bsn78c" },
    { name: "Résumé", label: "One page, PDF", href: "/resume.pdf" },
];

export default function ContactPage() {
    return (
        <div>
            <PageHeader
                index="C"
                label="Contact"
                title={["Get in", <em key="t" className="text-bone/80">touch</em>]}
                intro={<p>Open to research collaborations, exhibitions, and commissions.</p>}
                aside={<LocalTime className="text-[10px] uppercase tracking-[0.3em] text-mist/80" />}
            />

            <section className="px-6 md:px-12 py-16 md:py-24 border-b border-white/[0.08]">
                <FadeUp>
                    <span className="block text-[10px] uppercase tracking-[0.35em] text-mist/80 mb-6">Email</span>
                    <a
                        href={`mailto:${EMAIL}`}
                        data-cursor="Write"
                        className="group inline-block max-w-full text-[6.4vw] md:text-[4.2vw] leading-[1.1] tracking-tight text-parchment break-all md:break-normal"
                        style={{ fontFamily: "var(--font-serif)" }}
                    >
                        <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat group-hover:bg-[length:100%_1px] transition-[background-size] duration-700">
                            {EMAIL}
                        </span>
                    </a>
                </FadeUp>
            </section>

            <ul className="px-6 md:px-12">
                {channels.map((c) => (
                    <li key={c.name} className="border-b border-white/[0.08]">
                        <a
                            href={c.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group grid grid-cols-[1fr_auto] md:grid-cols-[14rem_1fr_auto] items-baseline gap-4 py-7 md:py-9"
                        >
                            <span className="text-2xl md:text-4xl text-parchment group-hover:italic transition-all" style={{ fontFamily: "var(--font-serif)" }}>{c.name}</span>
                            <span className="hidden md:block text-sm text-mist/90">{c.label}</span>
                            <span className="text-mist/80 group-hover:text-ember group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all">↗</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
