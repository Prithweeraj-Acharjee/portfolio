import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getEssays, getNotes } from "@/lib/writing";

export const metadata = {
    title: "Writing — Prithweeraj Acharjee",
    description: "Essays and notes from a painter, researcher, and builder.",
};

function formatDate(d: string) {
    return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function WritingPage() {
    const essays = getEssays();
    const notes = getNotes();

    return (
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
            <header className="mb-20">
                <span className="text-[11px] uppercase tracking-[0.45em] text-mist/50 mb-4 block">
                    Essays & Notes
                </span>
                <h1
                    className="font-sans text-5xl md:text-7xl tracking-tighter leading-none mb-6 text-gray-300"
                    style={{ fontWeight: 400 }}
                >
                    Writing
                </h1>
                <p className="text-mist/60 leading-relaxed max-w-xl">
                    Long essays on art, systems, and the friction between them.
                    Short notes from the studio and the desk.
                </p>
            </header>

            {essays.length === 0 && notes.length === 0 && (
                <p className="text-mist/40 italic">First posts arriving soon.</p>
            )}

            {essays.length > 0 && (
                <section className="mb-24">
                    <h2 className="text-[10px] uppercase tracking-[0.4em] text-bloodred/70 mb-8">
                        Essays
                    </h2>
                    <div className="divide-y divide-white/[0.05]">
                        {essays.map((post) => (
                            <article key={post.slug} className="group py-8 first:pt-0">
                                <Link href={`/writing/${post.slug}`} className="block">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:gap-12">
                                        <div className="sm:w-40 flex-shrink-0 mb-3 sm:mb-0">
                                            <span className="text-[11px] uppercase tracking-widest text-mist/35 font-mono">
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
                                            <p className="text-mist/60 leading-relaxed mb-4 text-sm">
                                                {post.summary}
                                            </p>
                                            <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-mist/35 group-hover:text-mist transition-colors">
                                                <span className="inline-flex items-center gap-1.5">
                                                    Read <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                                                </span>
                                                <span>·</span>
                                                <span>{post.readingMinutes} min</span>
                                                {post.tags && post.tags.length > 0 && (
                                                    <>
                                                        <span>·</span>
                                                        <span className="text-bloodred/70">{post.tags.slice(0, 2).join(" / ")}</span>
                                                    </>
                                                )}
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
                    <h2 className="text-[10px] uppercase tracking-[0.4em] text-bloodred/70 mb-8">
                        Notes
                    </h2>
                    <div className="space-y-6">
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
