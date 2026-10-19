import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/seo";

const title = "Blog";
const description = "Essays and journals by Prithwee (Prithweeraj Acharjee) on art, literature, colonialism, freedom, and painting in the post-AI era.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "/writing" },
    openGraph: { title: `${title} · Prithwee`, description, url: "/writing" },
};

const page = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: title,
    description,
    url: `${SITE}/writing`,
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
