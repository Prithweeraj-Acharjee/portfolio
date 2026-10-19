import { useSyncExternalStore } from "react";

/* Live media-query match. The server snapshot is false, so pointer- and motion-dependent
   extras only switch on after hydration. */
export function useMedia(query: string) {
    return useSyncExternalStore(
        (cb) => {
            const m = window.matchMedia(query);
            m.addEventListener("change", cb);
            return () => m.removeEventListener("change", cb);
        },
        () => window.matchMedia(query).matches,
        () => false,
    );
}
