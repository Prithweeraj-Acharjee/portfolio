import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { series } from "@/lib/content";

export default function HomeRecentWork() {
    // First series in the list is the newest body of work
    const featured = series[0];
    const works = featured.artworks.slice(0, 6);

    return (
        <section className="relative max-w-7xl mx-auto px-6 md:px-12 py-28 md:py-36">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
                <div>
                    <span className="text-[10px] uppercase tracking-[0.45em] text-bloodred/70 block mb-4">
                        Latest Body of Work
                    </span>
                    <h2
                        className="font-sans text-4xl md:text-5xl tracking-tighter leading-[0.95] text-parchment mb-3"
                        style={{ fontWeight: 400 }}
                    >
                        {featured.title}
                    </h2>
                    <p className="text-mist/50 text-sm max-w-md">
                        {featured.statement.split("\n")[0]}
                    </p>
                </div>
                <Link
                    href={`/gallery/${featured.id}`}
                    className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-mist/50 hover:text-bone transition-colors self-start md:self-end"
                >
                    Explore the series <ArrowRight size={11} />
                </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {works.map((art) => (
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
                            className="object-cover transition-all duration-1000 grayscale-[40%] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-void/95 via-void/40 to-transparent p-4 pt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="text-[10px] uppercase tracking-widest text-bloodred/80 mb-1">
                                {art.year}
                            </div>
                            <div className="font-serif text-base text-parchment leading-tight">
                                {art.title}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
