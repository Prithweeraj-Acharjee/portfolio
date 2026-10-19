import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gallery",
    description: "Paintings by Prithweeraj Acharjee, Paintings and collages by Prithweeraj Acharjee.",
    alternates: { canonical: "/gallery" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
