"use client";

import Link from "next/link";
import LocalTime from "@/components/fx/LocalTime";
import { MaskLines } from "@/components/fx/Reveal";
import { scrollToTop } from "@/components/fx/SmoothScroll";

const pages = [
    { name: "Gallery", href: "/gallery" },
    { name: "Research", href: "/research" },
    { name: "Systems", href: "/systems" },
    { name: "HaorGrix", href: "/haorgrix" },
    { name: "Writing", href: "/writing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

const elsewhere = [
    { name: "Instagram", href: "https://www.instagram.com/prithwee____" },
    { name: "GitHub", href: "https://github.com/Prithweeraj-Acharjee" },
    { name: "Handshake", href: "https://app.joinhandshake.com/profiles/bsn78c" },
    { name: "HaorGrix", href: "https://haorgrix.com" },
    { name: "Expressions Under Suffer", href: "https://expressions-under-suffer.vercel.app" },
    { name: "Material: the book", href: "https://material-expressions.vercel.app/book" },
];

const play = [
    { name: "A River of Gaze", href: "https://a-river-of-gaze.vercel.app" },
    { name: "The Frustrated Sun", href: "https://the-frustrated-sun.vercel.app" },
    { name: "Aesthetic Resistance", href: "https://aesthetic-resistance.vercel.app" },
    { name: "RoboTheater", href: "https://robotheater-site.vercel.app" },
];

const marquee = "Let's make something that stays";

export default function SiteFooter() {
    return (
        <footer className="relative z-10 border-t border-white/[0.06] bg-void overflow-hidden">
            <Link href="/contact" data-cursor="Write" className="group block py-16 md:py-24 border-b border-white/[0.06]" aria-label="Get in touch">
                <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]" aria-hidden>
                    {[0, 1].map((k) => (
                        <span key={k} className="flex items-center shrink-0">
                            {[0, 1, 2].map((j) => (
                                <span key={j} className="flex items-center">
                                    <span
                                        className="text-[16vw] md:text-[10vw] leading-none tracking-tight whitespace-nowrap text-parchment/90 group-hover:text-parchment italic px-[3vw]"
                                        style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
                                    >
                                        {marquee}
                                    </span>
                                    <span className="inline-block w-[3vw] h-[3vw] rounded-full bg-bloodred" />
                                </span>
                            ))}
                        </span>
                    ))}
                </div>
            </Link>

            <div className="px-6 md:px-12 py-16 grid grid-cols-2 md:grid-cols-12 gap-10">
                <div className="col-span-2 md:col-span-5">
                    <MaskLines
                        lines={["Painter, researcher,", "builder. Habiganj", "to Toledo."]}
                        className="block text-3xl md:text-5xl leading-[1.05] tracking-tight text-bone"
                        style={{ fontFamily: "var(--font-serif)" }}
                    />
                    <a href="mailto:prithweeraj.poragach02@gmail.com" className="inline-block mt-8 text-sm text-parchment underline decoration-bloodred underline-offset-8 hover:decoration-parchment transition-colors break-all">
                        prithweeraj.poragach02@gmail.com
                    </a>
                </div>
                <FooterCol title="Index" items={pages} internal className="md:col-start-7" />
                <FooterCol title="Elsewhere" items={elsewhere} />
                <FooterCol title="Play" items={play} />
            </div>

            <div className="px-6 md:px-12 pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[10px] uppercase tracking-[0.3em] text-mist/70">
                <span>© {new Date().getFullYear()} Prithweeraj Acharjee</span>
                <LocalTime />
                <div className="flex gap-6">
                    <Link href="/rss.xml" className="hover:text-parchment transition-colors">RSS</Link>
                    <button onClick={() => scrollToTop()} className="hover:text-parchment transition-colors">Back to top ↑</button>
                </div>
            </div>
        </footer>
    );
}

function FooterCol({ title, items, internal = false, className = "" }: { title: string; items: { name: string; href: string }[]; internal?: boolean; className?: string }) {
    return (
        <div className={`md:col-span-2 ${className}`}>
            <p className="text-[10px] uppercase tracking-[0.35em] text-mist/70 mb-5">{title}</p>
            <ul className="space-y-2.5">
                {items.map((i) => (
                    <li key={i.href}>
                        {internal ? (
                            <Link href={i.href} className="link-slide text-sm text-bone/80 hover:text-parchment">{i.name}</Link>
                        ) : (
                            <a href={i.href} target="_blank" rel="noopener noreferrer" className="link-slide text-sm text-bone/80 hover:text-parchment">
                                {i.name} <span className="text-mist/70">↗</span>
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
