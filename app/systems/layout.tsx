import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/seo";

const title = "Projects";
const description = "Projects by Prithweeraj Acharjee: AI products, a vision language robotics experiment, a playable game, and a generative living painting, each with a live demo.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "/systems" },
    openGraph: { title: `${title} · Prithwee`, description, url: "/systems" },
};

const page = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: `${SITE}/systems`,
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
