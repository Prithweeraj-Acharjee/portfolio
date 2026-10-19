import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/seo";

const title = "HaorGrix";
const description = "HaorGrix, the engineering and design team co-founded by Prithwee (Prithweeraj Acharjee), in his own words.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "/haorgrix" },
    openGraph: { title: `${title} · Prithwee`, description, url: "/haorgrix" },
};

const page = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: title,
    description,
    url: `${SITE}/haorgrix`,
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
