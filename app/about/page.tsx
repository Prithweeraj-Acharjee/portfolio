"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const photos = {
    face: "/about-06.jpg",   // close portrait — anchor photo
    couch: "/about-04.jpg",   // sitting on couch with clock
    hand: "/about-02.jpg",   // hand pressed on curtain
    artwork: "/about-01.jpg",   // holding printed collage
    floor: "/about-03.jpg",   // sitting cross-legged on floor
    art: "/about-07.jpg",   // charcoal drawing + painted piece on wall
    chair: "/about-05.jpg",   // full body in studio chair
};

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-20 pb-32 px-6 md:px-12 max-w-7xl mx-auto">

            {/* ── Name header & Bio ───────────────────────────────────── */}
            <div className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="lg:col-span-6"
                >
                    <span className="text-[11px] uppercase tracking-[0.45em] text-mist/40 block mb-4">
                        About
                    </span>
                    <h1
                        className="font-sans text-[clamp(2.8rem,8vw,7rem)] leading-[0.88] tracking-tighter text-gray-300"
                        style={{ fontWeight: 400 }}
                    >
                        Prithwee
                    </h1>
                </motion.div>

                {/* Bio panel at top */}
                <motion.div
                    variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="lg:col-span-5 lg:col-start-8 flex flex-col justify-end pb-2"
                >
                    <span className="text-[10px] uppercase tracking-[0.4em] text-mist/40 mb-6 block">
                        Biography
                    </span>
                    <p
                        className="font-sans text-xl md:text-2xl leading-relaxed text-bone/70 whitespace-pre-wrap"
                        style={{ fontWeight: 300 }}
                    >
                        Art unsettles me.
                        I return to it anyway.

                        I work with image, distortion, memory, and code,
                        building systems that move, fracture, and reform.
                        Through image, material, and machine,
                        Just exploring what resists!!
                    </p>
                    <div className="mt-10 pt-6 border-t border-white/[0.06] space-y-1">
                        <p className="text-[10px] uppercase tracking-widest text-mist/30">
                            Visual & Computational Artist · Systems · Research
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* ── Row 1: Large portrait left, small inset right ─── */}
            <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-24 items-end">

                {/* Large face portrait */}
                <motion.div
                    variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="col-span-12 md:col-span-5 relative overflow-hidden bg-stone"
                    style={{ aspectRatio: "3/4" }}
                >
                    <Image src={photos.face} alt="" fill className="object-cover object-top grayscale" />
                </motion.div>

                {/* Right column: two stacked */}
                <div className="col-span-12 md:col-span-7 flex flex-col gap-6 md:gap-10">

                    {/* Wide landscape — couch */}
                    <motion.div
                        variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                        className="relative overflow-hidden bg-stone"
                        style={{ aspectRatio: "16/9" }}
                    >
                        <Image src={photos.couch} alt="" fill className="object-cover object-center grayscale" />
                    </motion.div>

                    {/* Small landscape — hand */}
                    <motion.div
                        variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                        className="relative overflow-hidden bg-stone md:ml-16"
                        style={{ aspectRatio: "4/3" }}
                    >
                        <Image src={photos.hand} alt="" fill className="object-cover object-center grayscale" />
                    </motion.div>
                </div>
            </div>

            {/* ── Row 2: offset single wide ─────────────────────── */}
            <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-24">
                <motion.div
                    variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="col-span-12 md:col-start-3 md:col-span-8 relative overflow-hidden bg-stone"
                    style={{ aspectRatio: "16/8" }}
                >
                    <Image src={photos.artwork} alt="" fill className="object-cover object-top grayscale" />
                </motion.div>
            </div>

            {/* ── Row 3: split two with intentional gap ─────────── */}
            <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-24 items-start">

                <motion.div
                    variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="col-span-12 md:col-span-4 relative overflow-hidden bg-stone"
                    style={{ aspectRatio: "3/4" }}
                >
                    <Image src={photos.floor} alt="" fill className="object-cover object-center grayscale" />
                </motion.div>

                {/* Intentional gap (cols 5-6 empty) */}

                <motion.div
                    variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="col-span-12 md:col-start-7 md:col-span-6 relative overflow-hidden bg-stone"
                    style={{ aspectRatio: "4/5" }}
                >
                    <Image src={photos.art} alt="" fill className="object-cover object-center grayscale" />
                </motion.div>
            </div>

            {/* ── Row 4: full-width chair ─────────────────── */}
            <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">

                <motion.div
                    variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="col-span-12 md:col-span-6 md:col-start-4 relative overflow-hidden bg-stone"
                    style={{ aspectRatio: "3/4" }}
                >
                    <Image src={photos.chair} alt="" fill className="object-cover object-top grayscale" />
                </motion.div>

            </div>
        </div>
    );
}
