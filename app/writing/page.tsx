import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getEssays, getNotes } from "@/lib/writing";

export const metadata = {
    title: "Writing, Prithweeraj Acharjee",
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
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-24 md:py-32">
            <header className="mb-20 max-w-2xl">
                <span className="text-[11px] uppercase tracking-[0.45em] text-mist/50 block mb-4">
                    Writing
                </span>
                <h1
                    className="font-sans text-5xl md:text-7xl tracking-tighter leading-none mb-6 text-gray-300"
                    style={{ fontWeight: 400 }}
                >
                    Essays & Notes
                </h1>
                <p className="text-mist/60 leading-relaxed">
                    Long-form thinking and short notes from the studio.
                </p>
            </header>

            {empty && (
                <div className="py-20 border-t border-white/[0.05]">
                    <p className="text-mist/45 italic font-serif text-lg leading-relaxed max-w-md">
                        Coming soon.
                    </p>
                </div>
            )}

            {essays.length > 0 && (
                <section className="mb-20">
                    <h2 className="text-[10px] uppercase tracking-[0.4em] text-mist/40 mb-8">
                        Essays
                    </h2>
                    <div className="divide-y divide-white/[0.05]">
                        {essays.map((post) => (
                            <article key={post.slug} className="group py-8 first:pt-0">
                                <Link href={`/writing/${post.slug}`} className="block">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:gap-12">
                                        <div className="sm:w-40 flex-shrink-0 mb-3 sm:mb-0">
                                            <span className="text-[10px] uppercase tracking-[0.25em] text-mist/40 font-mono">
                                                {formatDate(post.date)}
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <h3
                                                className="font-sans text-2xl md:text-3xl mb-3 leading-tight tracking-tighter text-gray-300 group-hover:text-parchment transition-colors"
                                                style={{ fontWeight: 400 }}
                                            >
                                                {post.title}
                                            </h3>
                                            <p className="text-mist/55 leading-relaxed mb-4 text-sm max-w-xl">
                                                {post.summary}
                                            </p>
                                            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-mist/35 group-hover:text-mist transition-colors">
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
                    <h2 className="text-[10px] uppercase tracking-[0.4em] text-mist/40 mb-8">
                        Notes
                    </h2>
                    <div className="space-y-5">
                        {notes.map((note) => (
                            <article key={note.slug} className="group">
                                <Link href={`/notes/${note.slug}`} className="block">
                                    <div className="flex items-baseline gap-4">
                                        <span className="text-[10px] uppercase tracking-widest text-mist/30 font-mono w-24 flex-shrink-0">
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
    );
}
