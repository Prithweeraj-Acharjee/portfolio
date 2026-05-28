import type { MetadataRoute } from "next";
import { getEssays, getNotes, getAllTags } from "@/lib/writing";
import { series, projects, research } from "@/lib/content";

const SITE = "https://prithwee.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = ["", "/gallery", "/writing", "/research", "/systems", "/about", "/contact", "/now"].map((p) => ({
        url: `${SITE}${p}`,
        lastModified: new Date(),
    }));

    const essayRoutes = getEssays().map((p) => ({
        url: `${SITE}/writing/${p.slug}`,
        lastModified: new Date(p.date),
    }));

    const noteRoutes = getNotes().map((p) => ({
        url: `${SITE}/notes/${p.slug}`,
        lastModified: new Date(p.date),
    }));

    const tagRoutes = getAllTags().map((t) => ({
        url: `${SITE}/tag/${encodeURIComponent(t.tag)}`,
        lastModified: new Date(),
    }));

    const seriesRoutes = series.map((s) => ({
        url: `${SITE}/gallery/${s.id}`,
        lastModified: new Date(),
    }));

    const projectRoutes = projects.map((p) => ({
        url: `${SITE}/systems/${p.id}`,
        lastModified: new Date(),
    }));

    return [...staticRoutes, ...essayRoutes, ...noteRoutes, ...tagRoutes, ...seriesRoutes, ...projectRoutes];
}
