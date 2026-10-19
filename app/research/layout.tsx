import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Research",
    description: "Papers and ongoing studies in AI fairness, language technology, and graphics by Prithweeraj Acharjee.",
    alternates: { canonical: "/research" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
