import type { Metadata } from "next";
import { series } from "@/lib/content";
import JsonLd from "@/components/JsonLd";
import { NAME, SITE } from "@/lib/seo";

const blurb: Record<string, string> = {
    paintings: "Abstract paintings on paper from 21 Days, a memoir in paintings by Prithwee (Prithweeraj Acharjee). Mixed media, spray paint, charcoal, 2026, with the artist's writing for each work.",
    collages: "Freedom Under, mixed media collages by Prithwee (Prithweeraj Acharjee) on the gaze, surveillance, and the lives of women.",
};

export function generateStaticParams() {
    return series.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const s = series.find((x) => x.id === id);
    if (!s) return { title: "Series not found" };
    const title = id === "collages" ? "Freedom Under: Mixed Media Collages" : id === "paintings" ? "21 Days: Abstract Paintings" : s.title;
    const description = blurb[id] ?? `${s.title}, ${s.artworks.length} works by ${NAME}.`;
    return {
        title: { absolute: `${title} · Prithwee` },
        description,
        alternates: { canonical: `/gallery/${s.id}` },
        openGraph: { title: `${title} · Prithwee`, description, images: [{ url: s.coverImage, alt: s.title }] },
    };
}

export default async function Layout({ children, params }: { children: React.ReactNode; params: Promise<{ id: string }> }) {
    const { id } = await params;
    const s = series.find((x) => x.id === id);
    const data = s && {
        "@context": "https://schema.org",
        "@type": "ImageGallery",
        name: s.title,
        description: blurb[id],
        url: `${SITE}/gallery/${s.id}`,
        author: { "@id": `${SITE}/#person` },
        hasPart: s.artworks.map((a) => ({
            "@type": "VisualArtwork",
            name: a.title,
            image: `${SITE}${a.media}`,
            artform: id === "collages" ? "Collage" : "Painting",
            artMedium: a.medium,
            dateCreated: a.year,
            creator: { "@id": `${SITE}/#person` },
            ...(a.writing ? { abstract: a.writing.split("\n\n")[0] } : {}),
        })),
    };
    return (
        <>
            {data && <JsonLd data={data} />}
            {children}
        </>
    );
}
