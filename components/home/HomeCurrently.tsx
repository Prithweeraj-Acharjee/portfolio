import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { now } from "@/lib/now";

export default function HomeCurrently() {
    return (
        <section className="relative max-w-6xl mx-auto px-6 md:px-12 py-28 md:py-36">
            <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                    <span className="text-[10px] uppercase tracking-[0.45em] text-bloodred/70 block mb-4">
                        Currently
                    </span>
                    <h2
                        className="font-sans text-4xl md:text-5xl tracking-tighter leading-[0.95] text-parchment"
                        style={{ fontWeight: 400 }}
                    >
                        What I&apos;m<br />doing now
                    </h2>
                    <Link
                        href="/now"
                        className="mt-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-mist/50 hover:text-bone transition-colors"
                    >
                        Full /now page <ArrowRight size={11} />
                    </Link>
                </div>
                <div className="md:col-span-8 space-y-5">
                    {now.items.map((item, i) => (
                        <div
                            key={i}
                            className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-8 py-4 border-b border-white/[0.04] last:border-b-0"
                        >
                            <div className="text-[10px] uppercase tracking-[0.3em] text-mist/40 sm:w-28 flex-shrink-0">
                                {item.label}
                            </div>
                            <div className="flex-1">
                                <div className="font-serif text-lg md:text-xl text-parchment/95 leading-snug">
                                    {item.value}
                                </div>
                                {item.note && (
                                    <div className="text-sm text-mist/50 italic mt-1">{item.note}</div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
