import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "HaorGrix",
    description: "Why HaorGrix exists, in the words of its co-founder.",
    alternates: { canonical: "/haorgrix" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
