import Link from "next/link";

export default function SiteFooter() {
    return (
        <footer className="relative z-10 border-t border-white/[0.04] py-6 px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span className="text-[10px] text-mist/40 tracking-widest uppercase font-sans">
                © {new Date().getFullYear()} Prithweeraj Acharjee
            </span>
            <div className="flex items-center gap-6">
                <a
                    href="https://instagram.com/prithwee___"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] text-mist/35 tracking-[0.3em] uppercase hover:text-bone transition-colors"
                >
                    Instagram
                </a>
                <a
                    href="https://github.com/Prithweeraj-Acharjee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] text-mist/35 tracking-[0.3em] uppercase hover:text-bone transition-colors"
                >
                    GitHub
                </a>
                <Link
                    href="/rss.xml"
                    className="text-[10px] text-mist/35 tracking-[0.3em] uppercase hover:text-bone transition-colors"
                >
                    RSS
                </Link>
            </div>
        </footer>
    );
}
