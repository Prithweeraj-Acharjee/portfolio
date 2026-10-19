import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "Painter, researcher, and builder from Habiganj, working in Toledo. Education, exhibitions, publications, and studio photographs.",
    alternates: { canonical: "/about" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
