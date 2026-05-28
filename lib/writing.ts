import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const WRITING_DIR = path.join(process.cwd(), "content/writing");
const NOTES_DIR = path.join(process.cwd(), "content/notes");

export type PostFrontmatter = {
    title: string;
    date: string;
    summary: string;
    tags?: string[];
    cover?: string;
    draft?: boolean;
    kind?: "essay" | "note";
};

export type Post = PostFrontmatter & {
    slug: string;
    content: string;
    readingMinutes: number;
    words: number;
};

function readDir(dir: string, kind: "essay" | "note"): Post[] {
    if (!fs.existsSync(dir)) return [];
    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
    return files.map((file) => {
        const raw = fs.readFileSync(path.join(dir, file), "utf-8");
        const { data, content } = matter(raw);
        const stats = readingTime(content);
        return {
            ...(data as PostFrontmatter),
            slug: file.replace(/\.(mdx|md)$/, ""),
            content,
            readingMinutes: Math.max(1, Math.round(stats.minutes)),
            words: stats.words,
            kind,
        };
    });
}

export function getAllPosts(): Post[] {
    const essays = readDir(WRITING_DIR, "essay");
    const notes = readDir(NOTES_DIR, "note");
    return [...essays, ...notes]
        .filter((p) => !p.draft)
        .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getEssays(): Post[] {
    return readDir(WRITING_DIR, "essay")
        .filter((p) => !p.draft)
        .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getNotes(): Post[] {
    return readDir(NOTES_DIR, "note")
        .filter((p) => !p.draft)
        .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getPostBySlug(slug: string, kind: "essay" | "note" = "essay"): Post | null {
    const dir = kind === "essay" ? WRITING_DIR : NOTES_DIR;
    const tryPaths = [path.join(dir, `${slug}.mdx`), path.join(dir, `${slug}.md`)];
    const filePath = tryPaths.find((p) => fs.existsSync(p));
    if (!filePath) return null;
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    const stats = readingTime(content);
    return {
        ...(data as PostFrontmatter),
        slug,
        content,
        readingMinutes: Math.max(1, Math.round(stats.minutes)),
        words: stats.words,
        kind,
    };
}

export function getAllTags(): { tag: string; count: number }[] {
    const counts = new Map<string, number>();
    getAllPosts().forEach((p) => {
        (p.tags ?? []).forEach((t) => counts.set(t, (counts.get(t) ?? 0) + 1));
    });
    return Array.from(counts.entries())
        .map(([tag, count]) => ({ tag, count }))
        .sort((a, b) => b.count - a.count);
}
