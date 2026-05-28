import Newsletter from "@/components/Newsletter";

export default function HomeSubscribe() {
    return (
        <section className="relative max-w-3xl mx-auto px-6 md:px-12 py-32 md:py-44">
            <div className="text-center">
                <span className="text-[10px] uppercase tracking-[0.5em] text-bloodred/70 block mb-6">
                    Quiet correspondence
                </span>
                <h2
                    className="font-sans text-3xl md:text-5xl tracking-tighter leading-[0.95] text-parchment mb-6"
                    style={{ fontWeight: 400 }}
                >
                    Letters from<br />
                    <span className="italic font-serif text-bone/80">the studio</span>
                </h2>
                <p className="text-mist/55 font-serif italic text-base max-w-md mx-auto mb-10 leading-relaxed">
                    Occasional notes when a new essay or body of work lands. No schedule. No noise.
                </p>
                <div className="max-w-md mx-auto">
                    <Newsletter compact />
                </div>
            </div>
        </section>
    );
}
