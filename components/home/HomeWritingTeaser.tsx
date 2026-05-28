import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getEssays } from "@/lib/writing";

function formatDate(d: string) {
    return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function HomeWritingTeaser() {
    const essays = getEssays().slice(0, 3);
    if (essays.length === 0) return null;

    return (
        <section className="relative max-w-6xl mx-auto px-6 md:px-12 py-28 md:py-36">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
                <div>
                    <span className="text-[10px] uppercase tracking-[0.45em] text-bloodred/70 block mb-4">
                        Writing
                    </span>
                    <h2
                        className="font-sans text-4xl md:text-5xl tracking-tighter leading-[0.95] text-parchment"
                        style={{ fontWeight: 400 }}
                    >
                        Recent essays
                    </h2>
                </div>
                <Link
                    href="/writing"
                    className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-mist/50 hover:text-bone transition-colors self-start md:self-end"
                >
                    All writing <ArrowRight size={11} />
                </Link>
            </div>

            <div className="divide-y divide-white/[0.05]">
                {essays.map((p) => (
                    <Link
                        key={p.slug}
                        href={`/writing/${p.slug}`}
                        className="group block py-8 first:pt-0"
                    >
                        <div className="flex flex-col md:flex-row md:items-start md:gap-12">
                            <div className="md:w-40 flex-shrink-0 mb-3 md:mb-0">
                                <span className="text-[11px] uppercase tracking-widest text-mist/35 font-mono">
                                    {formatDate(p.date)}
                                </span>
                            </div>
                            <div className="flex-1">
                                <h3
                                    className="font-sans text-2xl md:text-3xl mb-3 leading-tight tracking-tighter text-gray-300 group-hover:text-parchment transition-colors"
                                    style={{ fontWeight: 400 }}
                                >
                                    {p.title}
                                </h3>
                                <p className="text-mist/55 leading-relaxed text-sm max-w-2xl">
                                    {p.summary}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
