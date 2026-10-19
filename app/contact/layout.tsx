import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/seo";

const title = "Contact";
const description = "Contact Prithwee (Prithweeraj Acharjee), abstract painter and AI researcher, for exhibitions, commissions, and research collaborations.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "/contact" },
    openGraph: { title: `${title} · Prithwee`, description, url: "/contact" },
};

const page = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: title,
    description,
    url: `${SITE}/contact`,
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
