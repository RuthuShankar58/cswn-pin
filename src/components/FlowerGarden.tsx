"use client";

import { useEffect, useState, useCallback } from "react";

interface Flower {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
  type: number;
}

const flowerColors = [
  "#F8BBD9", // pink
  "#7CC6FE", // blue
  "#A78BFA", // purple
  "#FBC2EB", // light pink
  "#89CFF0", // baby blue
  "#DDA0DD", // plum
  "#FFB7C5", // cherry blossom
  "#B4D7FF", // sky blue
];

function FlowerSVG({ type, color, size }: { type: number; color: string; size: number }) {
  const petals = type % 3;

  if (petals === 0) {
    // 5-petal flower
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <ellipse
            key={i}
            cx="20"
            cy="12"
            rx="5"
            ry="8"
            fill={color}
            opacity="0.8"
            transform={`rotate(${angle} 20 20)`}
          />
        ))}
        <circle cx="20" cy="20" r="4" fill="#FFD700" />
      </svg>
    );
  } else if (petals === 1) {
    // 6-petal daisy
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <ellipse
            key={i}
            cx="20"
            cy="11"
            rx="4"
            ry="9"
            fill={color}
            opacity="0.75"
            transform={`rotate(${angle} 20 20)`}
          />
        ))}
        <circle cx="20" cy="20" r="5" fill="#FFF3B0" />
        <circle cx="20" cy="20" r="3" fill="#FFD700" />
      </svg>
    );
  } else {
    // Cherry blossom style
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <path
            key={i}
            d="M20 8 Q23 14 20 20 Q17 14 20 8"
            fill={color}
            opacity="0.85"
            transform={`rotate(${angle} 20 20)`}
          />
        ))}
        <circle cx="20" cy="20" r="3" fill="#FF69B4" opacity="0.6" />
        <circle cx="20" cy="20" r="1.5" fill="#FFD700" />
      </svg>
    );
  }
}

export default function FlowerGarden() {
  const [flowers, setFlowers] = useState<Flower[]>([]);
  const [visitorCount, setVisitorCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  const generateFlower = useCallback((id: number): Flower => {
    return {
      id,
      x: Math.random() * 90 + 5, // 5-95% of width
      y: Math.random() * 60 + 20, // 20-80% of height
      size: Math.random() * 16 + 20, // 20-36px
      color: flowerColors[Math.floor(Math.random() * flowerColors.length)],
      delay: Math.random() * 0.5,
      type: Math.floor(Math.random() * 3),
    };
  }, []);

  useEffect(() => {
    setMounted(true);

    // Simulate visitor count from localStorage
    const stored = localStorage.getItem("cswn-garden-visitors");
    const count = stored ? parseInt(stored) + 1 : 100;
    localStorage.setItem("cswn-garden-visitors", count.toString());
    setVisitorCount(count);

    // Generate initial flowers (representing previous visitors)
    const initialCount = Math.min(count, 25);
    const initialFlowers: Flower[] = [];
    for (let i = 0; i < initialCount; i++) {
      initialFlowers.push(generateFlower(i));
    }
    setFlowers(initialFlowers);

    // Bloom a new flower for this visitor
    const timeout = setTimeout(() => {
      setFlowers((prev) => [...prev, generateFlower(prev.length)]);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [generateFlower]);

  if (!mounted) {
    return (
      <div className="relative w-full h-64 bg-gradient-to-t from-green-100/40 via-transparent to-transparent dark:from-green-900/20 rounded-2xl" />
    );
  }

  return (
    <div className="relative w-full h-72 md:h-80 overflow-hidden rounded-2xl bg-gradient-to-t from-green-50/60 via-bg-alt/30 to-transparent dark:from-green-950/30 dark:via-bg-dark/30 border border-white/50 dark:border-white/10">
      {/* Ground grass effect */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-green-200/40 to-transparent dark:from-green-900/30" />

      {/* Flowers */}
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="absolute animate-bloom"
          style={{
            left: `${flower.x}%`,
            top: `${flower.y}%`,
            animationDelay: `${flower.delay}s`,
          }}
        >
          {/* Stem */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-full w-[2px] bg-green-400/60 dark:bg-green-500/40 animate-sway origin-top"
            style={{ height: `${flower.size * 0.8}px` }}
          />
          <FlowerSVG type={flower.type} color={flower.color} size={flower.size} />
        </div>
      ))}

      {/* Floating particles */}
      <div className="absolute top-4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float" />
      <div className="absolute top-8 right-1/3 w-1.5 h-1.5 bg-secondary/40 rounded-full animate-float-slow" />
      <div className="absolute top-12 left-2/3 w-1 h-1 bg-accent/30 rounded-full animate-float" style={{ animationDelay: "1s" }} />

      {/* Visitor counter badge */}
      <div className="absolute bottom-4 right-4 glass-card px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
        <span className="text-sm">🌸</span>
        <span className="text-xs font-medium text-text dark:text-text-dark">
          {visitorCount}+ visitors bloomed
        </span>
      </div>

      {/* Title overlay */}
      <div className="absolute top-4 left-4 glass-card px-4 py-2 rounded-full shadow-sm">
        <span className="text-xs font-medium text-text-light dark:text-text-dark-light">
          🌱 Our Community Garden
        </span>
      </div>
    </div>
  );
}
