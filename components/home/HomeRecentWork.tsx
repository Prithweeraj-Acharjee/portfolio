import Link from "next/link";
import Image from "next/image";
import { series } from "@/lib/content";

export default function HomeRecentWork() {
    const featured = series[0];
    const works = featured.artworks.slice(0, 6);

    return (
        <section className="relative max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-40">
            <div className="flex items-baseline justify-between mb-16">
                <Link
                    href={`/gallery/${featured.id}`}
                    className="font-sans text-3xl md:text-5xl tracking-tighter leading-none text-parchment hover:text-bone transition-colors"
                    style={{ fontWeight: 400 }}
                >
                    {featured.title}
                </Link>
                <span className="text-[10px] uppercase tracking-[0.3em] text-mist/40 font-mono">
                    {works[0]?.year ?? ""}
                </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
                {works.map((art) => (
                    <Link
                        key={art.id}
                        href={`/gallery/${featured.id}`}
                        className="group relative aspect-[3/4] overflow-hidden bg-stone/30"
                    >
                        <Image
                            src={art.media}
                            alt={art.title}
                            fill
                            sizes="(max-width: 768px) 50vw, 33vw"
                            className="object-cover transition-all duration-[1200ms] ease-out grayscale-[25%] opacity-90 group-hover:grayscale-0 group-hover:opacity-100"
                        />
                    </Link>
                ))}
            </div>

            <div className="mt-10 flex justify-end">
                <Link
                    href="/gallery"
                    className="text-[10px] uppercase tracking-[0.35em] text-mist/45 hover:text-bone transition-colors"
                >
                    All series →
                </Link>
            </div>
        </section>
    );
}
