import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/seo";

const title = "Gallery: Abstract Paintings and Collages";
const description = "Abstract paintings and mixed media collages by Prithwee (Prithweeraj Acharjee): the 21 Days series of paintings on paper and the Freedom Under collages.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "/gallery" },
    openGraph: { title: `${title} · Prithwee`, description, url: "/gallery" },
};

const page = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: `${SITE}/gallery`,
    about: { "@id": `${SITE}/#person` },
    isPartOf: { "@id": `${SITE}/#website` },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <JsonLd data={page} />
            {children}
        </>
    );
}
