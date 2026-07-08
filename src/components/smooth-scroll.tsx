"use client";

import { ReactNode, useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";

function ScrollHandler() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    const l = lenis;
    const duration = 1.0;
    const offset = 0;

    const scrollToHashTarget = (hash: string) => {
      if (!hash) return;
      const id = hash.replace(/^#/, "");
      if (!id) return;

      const el = document.getElementById(id) ?? document.querySelector(`[name="${id}"]`);
      if (!el) return;

      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!l || prefersReduced) {
        el.scrollIntoView({ behavior: "auto", block: "start" });
        return;
      }

      // Lenis can accept HTMLElement targets.
      l.scrollTo(el, {
        offset,
        duration,
      });
    };

    const handleHashChange = () => scrollToHashTarget(window.location.hash);

    window.addEventListener("hashchange", handleHashChange);

    // Handle same-page anchor clicks (prevents instant native jump).
    const onDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.("a[href^='#']") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      if (!href.startsWith("#")) return;

      // Only intercept same-page hashes.
      if (anchor.pathname !== window.location.pathname) return;

      e.preventDefault();
      // update URL hash without triggering default scroll
      window.history.pushState({}, "", href);
      scrollToHashTarget(href);
    };

    document.addEventListener("click", onDocumentClick);

    // On initial load with hash.
    if (window.location.hash) {
      scrollToHashTarget(window.location.hash);
    }

    // Route change: go to top smoothly when Lenis is present.
    // Avoid immediate jumps that feel janky.
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      document.removeEventListener("click", onDocumentClick);
    };
  }, [lenis]);

  useEffect(() => {
    if (!lenis) {
      window.scrollTo(0, 0);
      return;
    }

    lenis.scrollTo(0, { duration: 1.0 });
  }, [pathname, lenis]);

  return null;
}


export default function SmoothScroll({ children }: { children: ReactNode }) {
    return (
        <ReactLenis root options={{ lerp: 0.07, duration: 1.5, smoothWheel: true }}>
            <ScrollHandler />
            {children}
        </ReactLenis>
    );
}
