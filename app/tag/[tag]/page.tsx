import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getAllPosts, getAllTags } from "@/lib/writing";

export async function generateStaticParams() {
    return getAllTags().map((t) => ({ tag: encodeURIComponent(t.tag) }));
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }) {
    const { tag } = await params;
    const decoded = decodeURIComponent(tag);
    return {
        title: `${decoded} — Prithweeraj Acharjee`,
        description: `Writing and notes tagged "${decoded}".`,
    };
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
    const { tag } = await params;
    const decoded = decodeURIComponent(tag);
    const posts = getAllPosts().filter((p) => p.tags?.includes(decoded));
    if (posts.length === 0) notFound();

    return (
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
            <Link
                href="/writing"
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-mist/40 hover:text-bone transition-colors mb-12"
            >
                <ArrowLeft size={11} /> All Writing
            </Link>

            <header className="mb-16">
                <span className="text-[10px] uppercase tracking-[0.45em] text-bloodred/70 block mb-3">
                    Tag
                </span>
                <h1
                    className="font-sans text-5xl md:text-6xl tracking-tighter leading-none text-parchment"
                    style={{ fontWeight: 400 }}
                >
                    {decoded}
                </h1>
                <p className="text-mist/50 text-sm mt-4">
                    {posts.length} {posts.length === 1 ? "post" : "posts"}
                </p>
            </header>

            <div className="divide-y divide-white/[0.05]">
                {posts.map((p) => (
                    <Link
                        key={p.slug}
                        href={p.kind === "note" ? `/notes/${p.slug}` : `/writing/${p.slug}`}
                        className="group block py-6 first:pt-0"
                    >
                        <div className="flex items-baseline gap-4 text-[10px] uppercase tracking-widest text-mist/40 font-mono mb-2">
                            <span>{new Date(p.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</span>
                            <span className="text-bloodred/60">·</span>
                            <span>{p.kind === "note" ? "Note" : "Essay"}</span>
                        </div>
                        <h2
                            className="font-sans text-xl md:text-2xl tracking-tight text-gray-300 group-hover:text-parchment transition-colors leading-tight"
                            style={{ fontWeight: 400 }}
                        >
                            {p.title}
                            <ArrowRight
                                size={14}
                                className="inline-block ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                            />
                        </h2>
                    </Link>
                ))}
            </div>
        </div>
    );
}
