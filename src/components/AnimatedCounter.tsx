"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  label: string;
}

export default function AnimatedCounter({
  end,
  suffix = "",
  duration = 1300,
  label,
}: AnimatedCounterProps) {
  // Start at the final value so SSR / no-JS / reduced-motion always show a real number.
  const [count, setCount] = useState(end);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    let frame = 0;
    let startTime = 0;

    let failsafe = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        setCount(0);
        const step = (now: number) => {
          if (!startTime) startTime = now;
          const p = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setCount(Math.round(eased * end));
          if (p < 1) frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
        // guarantee we land on the final value even if rAF stalls
        failsafe = window.setTimeout(() => setCount(end), duration + 500);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.clearTimeout(failsafe);
    };
  }, [end, duration]);

  return (
    <div ref={ref}>
      <p className="text-4xl font-bold tracking-tight md:text-5xl">
        <span className="gradient-text">
          {count}
          {suffix}
        </span>
      </p>
      <p className="mt-1.5 text-sm text-text-muted">{label}</p>
    </div>
  );
}
