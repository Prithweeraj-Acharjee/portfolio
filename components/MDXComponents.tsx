import Image from "next/image";
import { ReactNode } from "react";

export function Pullquote({ children }: { children: ReactNode }) {
    return (
        <blockquote className="my-12 border-l-2 border-bloodred pl-6 font-serif italic text-2xl leading-snug text-parchment/95 not-prose">
            {children}
        </blockquote>
    );
}

export function Aside({ children, label }: { children: ReactNode; label?: string }) {
    return (
        <aside className="my-10 border border-white/[0.06] bg-white/[0.015] p-6 rounded">
            {label && (
                <div className="text-[10px] uppercase tracking-[0.3em] text-bloodred/80 mb-3">
                    {label}
                </div>
            )}
            <div className="font-sans text-sm text-mist/80 leading-relaxed">{children}</div>
        </aside>
    );
}

export function Figure({
    src,
    alt,
    caption,
    width = 1200,
    height = 800,
}: {
    src: string;
    alt: string;
    caption?: string;
    width?: number;
    height?: number;
}) {
    return (
        <figure className="my-12">
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="w-full h-auto"
            />
            {caption && (
                <figcaption className="text-xs text-mist/50 font-sans mt-3 text-center italic">
                    {caption}
                </figcaption>
            )}
        </figure>
    );
}

export const mdxComponents = {
    Pullquote,
    Aside,
    Figure,
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
        // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
        <img {...props} alt={props.alt ?? ""} className="w-full h-auto my-10 rounded" />
    ),
};
