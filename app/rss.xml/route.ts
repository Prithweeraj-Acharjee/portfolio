import { getAllPosts } from "@/lib/writing";

const SITE_URL = "https://prithwee.vercel.app";

function escapeXml(s: string) {
    return s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

export async function GET() {
    const posts = getAllPosts();
    const items = posts
        .map((p) => {
            const path = p.kind === "note" ? `/notes/${p.slug}` : `/writing/${p.slug}`;
            const url = `${SITE_URL}${path}`;
            return `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description>${escapeXml(p.summary)}</description>
    </item>`;
        })
        .join("\n");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Prithweeraj Acharjee — Writing</title>
    <link>${SITE_URL}</link>
    <description>Essays and notes from a painter, researcher, and builder.</description>
    <language>en-us</language>
${items}
  </channel>
</rss>`;

    return new Response(xml, {
        headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
    });
}
