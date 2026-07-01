import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";
import { getNotes, getPostBySlug } from "@/lib/writing";
import { mdxComponents } from "@/components/MDXComponents";

export async function generateStaticParams() {
    return getNotes().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug, "note");
    if (!post) return {};
    return {
        title: `${post.title}, Prithweeraj Acharjee`,
        description: post.summary,
    };
}

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug, "note");
    if (!post) notFound();

    return (
        <div className="max-w-2xl mx-auto px-6 py-20 md:py-28">
            <Link
                href="/writing"
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-mist/40 hover:text-bone transition-colors mb-16"
            >
                <ArrowLeft size={11} /> Back
            </Link>

            <header className="mb-12">
                <span className="text-[10px] uppercase tracking-widest text-bloodred/70 font-mono block mb-4">
                    Note / {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </span>
                <h1
                    className="font-sans text-3xl md:text-4xl tracking-tighter leading-tight text-parchment"
                    style={{ fontWeight: 400 }}
                >
                    {post.title}
                </h1>
            </header>

            <article className="font-serif text-bone/85 leading-[1.85] text-[1.02rem] [&_p]:mb-5 [&_a]:text-bloodred [&_a]:underline-offset-4 [&_em]:italic [&_strong]:text-parchment">
                <MDXRemote source={post.content} components={mdxComponents} />
            </article>
        </div>
    );
}
