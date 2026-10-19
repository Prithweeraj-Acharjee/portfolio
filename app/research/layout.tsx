import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/seo";
import { research } from "@/lib/content";

const title = "Research: AI Fairness and Aesthetic Bias";
const description = "AI research by Prithweeraj Acharjee: auditing aesthetic bias in Stable Diffusion and LAION, 4D Gaussian splatting, Bengali fake news detection, and dialectal Arabic machine translation.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "/research" },
    openGraph: { title: `${title} · Prithwee`, description, url: "/research" },
};

const page = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: `${SITE}/research`,
    about: { "@id": `${SITE}/#person` },
    isPartOf: { "@id": `${SITE}/#website` },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <JsonLd data={page} />
            {research.map((r) => (
                <JsonLd key={r.id} data={{
                    "@context": "https://schema.org",
                    "@type": "ScholarlyArticle",
                    headline: r.title,
                    abstract: r.abstract,
                    datePublished: r.year,
                    author: { "@id": `${SITE}/#person`, name: "Prithweeraj Acharjee" },
                    ...(r.links?.[0] ? { url: r.links[0].url } : {}),
                }} />
            ))}
            {children}
        </>
    );
}
