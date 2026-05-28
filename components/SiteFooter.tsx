import Link from "next/link";

const navLinks = [
    { name: "Gallery", href: "/gallery" },
    { name: "Research", href: "/research" },
    { name: "Systems", href: "/systems" },
    { name: "Writing", href: "/writing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

const externalLinks = [
    { name: "Instagram", href: "https://instagram.com/prithwee___" },
    { name: "GitHub", href: "https://github.com/Prithweeraj-Acharjee" },
    { name: "RSS", href: "/rss.xml" },
];

export default function SiteFooter() {
    return (
        <footer className="relative z-10 border-t border-white/[0.05] mt-20">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
                <div className="grid grid-cols-12 gap-10 mb-16">
                    <div className="col-span-12 md:col-span-5">
                        <Link
                            href="/"
                            className="font-sans text-3xl md:text-4xl tracking-tighter text-parchment leading-none block mb-4"
                            style={{ fontWeight: 400 }}
                        >
                            Prithweeraj<br />
                            <span className="italic font-serif text-bone/70">Acharjee</span>
                        </Link>
                        <p className="text-[10px] uppercase tracking-[0.4em] text-mist/40 mt-6">
                            Painter · Researcher · Builder
                        </p>
                        <p className="font-serif italic text-mist/40 text-sm mt-2">
                            Toledo, Ohio
                        </p>
                    </div>

                    <div className="col-span-6 md:col-span-3 md:col-start-7">
                        <p className="text-[10px] uppercase tracking-[0.35em] text-bloodred/70 mb-5">
                            The Work
                        </p>
                        <ul className="space-y-3">
                            {navLinks.map((l) => (
                                <li key={l.href}>
                                    <Link
                                        href={l.href}
                                        className="text-sm text-mist/55 hover:text-parchment transition-colors"
                                    >
                                        {l.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-6 md:col-span-2">
                        <p className="text-[10px] uppercase tracking-[0.35em] text-bloodred/70 mb-5">
                            Elsewhere
                        </p>
                        <ul className="space-y-3">
                            {externalLinks.map((l) => (
                                <li key={l.href}>
                                    <a
                                        href={l.href}
                                        target={l.href.startsWith("http") ? "_blank" : undefined}
                                        rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className="text-sm text-mist/55 hover:text-parchment transition-colors"
                                    >
                                        {l.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                    <span className="text-[10px] uppercase tracking-[0.35em] text-mist/30">
                        © {new Date().getFullYear()} Prithweeraj Acharjee
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.35em] text-mist/25">
                        All works © the artist
                    </span>
                </div>
            </div>
        </footer>
    );
}
