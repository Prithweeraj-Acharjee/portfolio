import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: { userAgent: "*", allow: "/" },
        sitemap: "https://prithwee.vercel.app/sitemap.xml",
        host: "https://prithwee.vercel.app",
    };
}
