import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Systems",
    description: "Software, AI products, and interactive work, each with a live demo.",
    alternates: { canonical: "/systems" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
