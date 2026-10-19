import type { Metadata } from "next";
import { series } from "@/lib/content";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const s = series.find((x) => x.id === id);
    if (!s) return { title: "Series not found" };
    const description = `${s.title}, ${s.artworks.length} works by Prithweeraj Acharjee.`;
    return {
        title: s.title,
        description,
        alternates: { canonical: `/gallery/${s.id}` },
        openGraph: { title: s.title, description, images: [{ url: s.coverImage, alt: s.title }] },
    };
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
