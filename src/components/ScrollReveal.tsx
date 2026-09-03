"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Progressive scroll-reveal. Content ships visible; this opts into the
 * hidden-then-fade-in styling only when JS + IntersectionObserver are
 * available, reveals whatever is already on screen synchronously (no
 * flash), and has a failsafe so nothing can stay hidden. Renders nothing.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.revealed)")
    );
    if (!els.length) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    document.documentElement.classList.add("reveal-ready");

    // Anything already in view: reveal immediately, before paint.
    const pending = els.filter((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.95 && r.bottom > 0) {
        el.classList.add("revealed");
        return false;
      }
      return true;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    pending.forEach((el) => observer.observe(el));

    // Failsafe: never leave content hidden.
    const failsafe = window.setTimeout(() => {
      pending.forEach((el) => el.classList.add("revealed"));
    }, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [pathname]);

  return null;
}
