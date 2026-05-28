import { now } from "@/lib/now";

export const metadata = {
    title: "Now — Prithweeraj Acharjee",
    description: "What I'm working on, painting, reading, and resting on this week.",
};

export default function NowPage() {
    return (
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
            <header className="mb-16">
                <span className="text-[11px] uppercase tracking-[0.45em] text-mist/50 block mb-4">
                    Current State
                </span>
                <h1
                    className="font-sans text-5xl md:text-7xl tracking-tighter leading-none mb-6 text-gray-300"
                    style={{ fontWeight: 400 }}
                >
                    Now
                </h1>
                <p className="text-mist/60 leading-relaxed max-w-xl">
                    Borrowed from{" "}
                    <a
                        href="https://nownownow.com/about"
                        className="text-bloodred hover:underline underline-offset-4"
                    >
                        the /now page convention
                    </a>
                    . The honest answer to &ldquo;what are you up to these days.&rdquo;
                </p>
            </header>

            <div className="space-y-8">
                {now.items.map((item, i) => (
                    <div
                        key={i}
                        className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-12 pb-6 border-b border-white/[0.04] last:border-b-0"
                    >
                        <div className="text-[10px] uppercase tracking-[0.3em] text-bloodred/80 sm:w-32 flex-shrink-0">
                            {item.label}
                        </div>
                        <div className="flex-1">
                            <div className="font-serif text-xl text-parchment leading-snug mb-1">
                                {item.value}
                            </div>
                            {item.note && (
                                <div className="text-sm text-mist/60 italic">{item.note}</div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-[10px] uppercase tracking-[0.3em] text-mist/30">
                Last updated · {new Date(now.updated).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} · {now.location}
            </div>
        </div>
    );
}
