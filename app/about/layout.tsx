import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/seo";

const title = "About the Artist";
const description = "About Prithwee (Prithweeraj Acharjee), a Bangladeshi abstract painter and AI researcher in Toledo, Ohio. Education at the University of Toledo and the University of Dhaka Faculty of Fine Arts, exhibitions, recognition, and contact.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "/about" },
    openGraph: { title: `${title} · Prithwee`, description, url: "/about" },
};

const page = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: title,
    description,
    url: `${SITE}/about`,
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
