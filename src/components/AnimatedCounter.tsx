"use client";

import { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  label: string;
  icon?: string;
}

export default function AnimatedCounter({
  end,
  suffix = "",
  duration = 2000,
  label,
  icon,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-center group">
      <div className="relative inline-block">
        {icon && (
          <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform">
            {icon}
          </span>
        )}
        <p className="text-4xl md:text-5xl font-bold gradient-text mb-1">
          {count}
          {suffix}
        </p>
        <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-500 mx-auto rounded-full" />
      </div>
      <p className="text-sm text-text-light dark:text-text-dark-light font-medium mt-2">
        {label}
      </p>
    </div>
  );
}
