import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getEssays, getNotes } from "@/lib/writing";
import PageHeader from "@/components/PageHeader";

export const metadata = {
    title: "Writing",
    description: "Essays and notes from a painter, researcher, and builder.",
};

function formatDate(d: string) {
    return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function WritingPage() {
    const essays = getEssays();
    const notes = getNotes();
    const empty = essays.length === 0 && notes.length === 0;

    return (
        <div>
            <PageHeader index="W" label="Writing" title={["Essays", <em key="n" className="text-bone/80">and notes</em>]} intro={<p>Long-form thinking and short notes from the studio.</p>} />
            <div className="max-w-5xl px-6 md:px-12 py-16 md:py-24">


            {empty && (
                <div className="py-20 border-t border-white/[0.05]">
                    <p className="text-mist/80 italic font-serif text-lg leading-relaxed max-w-md">
                        Coming soon.
                    </p>
                </div>
            )}

            {essays.length > 0 && (
                <section className="mb-20">
                    <h2 className="text-[10px] uppercase tracking-[0.4em] text-mist/80 mb-8">
                        Essays
                    </h2>
                    <div className="divide-y divide-white/[0.05]">
                        {essays.map((post) => (
                            <article key={post.slug} className="group py-8 first:pt-0">
                                <Link href={`/writing/${post.slug}`} className="block">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:gap-12">
                                        <div className="sm:w-40 flex-shrink-0 mb-3 sm:mb-0">
                                            <span className="text-[10px] uppercase tracking-[0.25em] text-mist/80 font-mono">
                                                {formatDate(post.date)}
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <h3
                                                className="font-serif text-4xl md:text-6xl mb-5 leading-[1.02] tracking-tight text-parchment group-hover:italic transition-all"
                                                style={{ fontWeight: 400 }}
                                            >
                                                {post.title}
                                            </h3>
                                            <p className="text-bone/85 leading-relaxed mb-6 text-base md:text-lg max-w-2xl">
                                                {post.summary}
                                            </p>
                                            <div className="inline-flex items-center gap-2 py-2 text-[11px] uppercase tracking-[0.3em] text-parchment">
                                                Read <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </section>
            )}

            {notes.length > 0 && (
                <section>
                    <h2 className="text-[10px] uppercase tracking-[0.4em] text-mist/80 mb-8">
                        Notes
                    </h2>
                    <div className="space-y-5">
                        {notes.map((note) => (
                            <article key={note.slug} className="group">
                                <Link href={`/notes/${note.slug}`} className="block">
                                    <div className="flex items-baseline gap-4">
                                        <span className="text-[10px] uppercase tracking-widest text-mist/80 font-mono w-24 flex-shrink-0">
                                            {formatDate(note.date)}
                                        </span>
                                        <h3 className="text-bone/80 group-hover:text-parchment transition-colors text-base leading-snug">
                                            {note.title}
                                        </h3>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </section>
            )}
            </div>
        </div>
    );
}
