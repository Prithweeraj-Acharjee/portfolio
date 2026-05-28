import Newsletter from "@/components/Newsletter";

export default function HomeSubscribe() {
    return (
        <section className="relative max-w-3xl mx-auto px-6 md:px-12 py-28 md:py-36 text-center">
            <span className="text-[10px] uppercase tracking-[0.45em] text-bloodred/70 block mb-4">
                Stay in the loop
            </span>
            <h2
                className="font-sans text-3xl md:text-4xl tracking-tighter leading-tight text-parchment mb-4"
                style={{ fontWeight: 400 }}
            >
                Letters from the studio
            </h2>
            <p className="text-mist/55 text-sm max-w-md mx-auto mb-8 leading-relaxed">
                Occasional notes when a new essay or body of work lands. No schedule, no spam.
            </p>
            <div className="max-w-md mx-auto">
                <Newsletter compact />
            </div>
        </section>
    );
}
