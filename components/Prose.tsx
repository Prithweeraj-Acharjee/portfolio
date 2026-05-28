import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Prose({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <article
            className={cn(
                "prose-custom font-serif text-bone/85 leading-[1.85] text-[1.05rem]",
                "[&_h2]:font-sans [&_h2]:text-3xl [&_h2]:tracking-tighter [&_h2]:text-parchment [&_h2]:font-normal [&_h2]:mt-16 [&_h2]:mb-6",
                "[&_h3]:font-sans [&_h3]:text-xl [&_h3]:tracking-tight [&_h3]:text-parchment [&_h3]:font-normal [&_h3]:mt-12 [&_h3]:mb-4",
                "[&_p]:mb-7",
                "[&_a]:text-bloodred [&_a]:underline-offset-4 [&_a]:decoration-bloodred/40 hover:[&_a]:decoration-bloodred",
                "[&_em]:italic [&_em]:text-parchment/90",
                "[&_strong]:text-parchment [&_strong]:font-medium",
                "[&_blockquote]:border-l-2 [&_blockquote]:border-bloodred/60 [&_blockquote]:pl-6 [&_blockquote]:my-10 [&_blockquote]:italic [&_blockquote]:text-mist/80",
                "[&_ul]:my-7 [&_ul]:pl-6 [&_ul]:list-disc [&_ul]:marker:text-bloodred/50",
                "[&_ol]:my-7 [&_ol]:pl-6 [&_ol]:list-decimal [&_ol]:marker:text-bloodred/50",
                "[&_li]:mb-2",
                "[&_hr]:my-14 [&_hr]:border-white/[0.06]",
                "[&_code]:font-mono [&_code]:text-[0.92em] [&_code]:bg-white/[0.04] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-bone",
                "[&_pre]:bg-ash/80 [&_pre]:border [&_pre]:border-white/[0.06] [&_pre]:rounded [&_pre]:p-5 [&_pre]:overflow-x-auto [&_pre]:my-8",
                "[&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-[0.88em]",
                "[&_img]:my-10 [&_img]:rounded",
                "first-letter:font-serif first-letter:text-6xl first-letter:font-medium first-letter:text-bloodred first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:mt-1",
                className,
            )}
        >
            {children}
        </article>
    );
}
