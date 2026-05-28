import Link from "next/link";
import Image from "next/image";
import { series } from "@/lib/content";

export default function HomeRecentWork() {
    const featured = series[0];
    const works = featured.artworks.slice(0, 6);
    const firstStatementLine = featured.statement.split("\n")[0];

    return (
        <section className="relative max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-44">
            <div className="grid grid-cols-12 gap-6 md:gap-10 mb-20 md:mb-28">
                <div className="col-span-12 md:col-span-3">
                    <span className="text-[10px] uppercase tracking-[0.5em] text-bloodred/70 block mb-4">
                        Latest body of work
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.3em] text-mist/30 uppercase">
                        {works[0]?.year ?? ""} — Ongoing
                    </span>
                </div>
                <div className="col-span-12 md:col-span-9">
                    <Link href={`/gallery/${featured.id}`} className="group inline-block">
                        <h2
                            className="font-sans text-[clamp(2.5rem,6vw,5rem)] tracking-tighter leading-[0.95] text-parchment group-hover:text-bone transition-colors duration-700 mb-6"
                            style={{ fontWeight: 400 }}
                        >
                            {featured.title}
                        </h2>
                    </Link>
                    <p className="text-mist/55 font-serif italic text-lg max-w-2xl leading-relaxed">
                        {firstStatementLine}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {works.map((art, i) => (
                    <Link
                        key={art.id}
                        href={`/gallery/${featured.id}`}
                        className="group relative aspect-[3/4] overflow-hidden bg-stone/40"
                    >
                        <Image
                            src={art.media}
                            alt={art.title}
                            fill
                            sizes="(max-width: 768px) 50vw, 33vw"
                            className="object-cover transition-all duration-[1400ms] ease-out grayscale-[30%] opacity-85 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-void/85 via-void/30 to-transparent pt-12">
                            <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-bloodred/80 mb-1">
                                {String(i + 1).padStart(2, "0")}
                            </div>
                            <div className="font-serif text-base text-parchment leading-tight">
                                {art.title}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-16 flex justify-end">
                <Link
                    href={`/gallery/${featured.id}`}
                    className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-mist/50 hover:text-bloodred transition-colors duration-500"
                >
                    View the full series
                    <span className="block w-8 h-px bg-mist/40 group-hover:w-12 group-hover:bg-bloodred transition-all duration-500" />
                </Link>
            </div>
        </section>
    );
}
