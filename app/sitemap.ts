import type { MetadataRoute } from "next";
import { getEssays, getNotes, getAllTags } from "@/lib/writing";
import { series } from "@/lib/content";

const SITE = "https://prithwee.haorgrix.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = [
        ["", 1], ["/gallery", 0.9], ["/about", 0.9], ["/research", 0.8], ["/writing", 0.8], ["/systems", 0.7], ["/haorgrix", 0.6], ["/contact", 0.6],
    ].map(([p, priority]) => ({
        url: `${SITE}${p}`,
        lastModified: new Date(),
        priority: priority as number,
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
        priority: 0.9,
        images: s.artworks.map((a) => `${SITE}${a.media}`),
    }));


    return [...staticRoutes, ...essayRoutes, ...noteRoutes, ...tagRoutes, ...seriesRoutes];
}
