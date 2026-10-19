import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gallery",
    description: "Paintings by Prithweeraj Acharjee, organized by series, including 21 Days and Material: Expressions.",
    alternates: { canonical: "/gallery" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
