import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";
import { getEssays, getPostBySlug } from "@/lib/writing";
import { mdxComponents } from "@/components/MDXComponents";
import Prose from "@/components/Prose";

export async function generateStaticParams() {
    return getEssays().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug, "essay");
    if (!post) return {};
    return {
        title: `${post.title} — Prithweeraj Acharjee`,
        description: post.summary,
    };
}

export default async function EssayPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug, "essay");
    if (!post) notFound();

    return (
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
            <Link
                href="/writing"
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-mist/40 hover:text-bone transition-colors mb-16"
            >
                <ArrowLeft size={11} /> All Writing
            </Link>

            <header className="mb-16">
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-mist/40 font-mono mb-6">
                    <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                    <span>·</span>
                    <span>{post.readingMinutes} min read</span>
                </div>
                <h1
                    className="font-sans text-4xl md:text-6xl tracking-tighter leading-[1.05] text-parchment mb-8"
                    style={{ fontWeight: 400 }}
                >
                    {post.title}
                </h1>
                <p className="font-serif italic text-mist/70 text-lg leading-relaxed max-w-2xl">
                    {post.summary}
                </p>
                {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-8">
                        {post.tags.map((t) => (
                            <Link
                                key={t}
                                href={`/tag/${encodeURIComponent(t)}`}
                                className="text-[10px] uppercase tracking-widest text-mist/50 hover:text-bone border border-white/[0.06] hover:border-white/[0.15] px-3 py-1 transition-colors"
                            >
                                {t}
                            </Link>
                        ))}
                    </div>
                )}
                <div className="mt-12 h-px w-16 bg-bone/30" />
            </header>

            <Prose>
                <MDXRemote source={post.content} components={mdxComponents} />
            </Prose>

            <footer className="mt-24 pt-12 border-t border-white/[0.05]">
                <p className="text-mist/50 font-serif italic text-sm">
                    — Prithweeraj
                </p>
            </footer>
        </div>
    );
}
