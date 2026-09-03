"use client";

import { useEffect, useState } from "react";

// --- Pillar data for the 3 interactive flowers ---
const pillars = [
  {
    title: "Community",
    blurb: "A supportive network of women in tech who uplift, collaborate, and grow together.",
  },
  {
    title: "Growth",
    blurb: "Opportunities to build technical, professional, and leadership skills through events and hands-on experiences.",
  },
  {
    title: "Mentorship",
    blurb: "Access to mentors, guest speakers, and industry professionals who guide and inspire your journey.",
  },
];

// --- Color palettes with higher contrast ---
const palettes = [
  { petal: "#F472B6", center: "#FCD34D" }, // vibrant pink
  { petal: "#60A5FA", center: "#FDE68A" }, // clear blue
  { petal: "#A78BFA", center: "#FEF3C7" }, // rich purple
  { petal: "#F9A8D4", center: "#FCD34D" }, // soft rose
  { petal: "#38BDF8", center: "#FEF9C3" }, // sky blue
  { petal: "#C084FC", center: "#FDE68A" }, // medium purple
  { petal: "#FB7185", center: "#FEF3C7" }, // coral pink
  { petal: "#7DD3FC", center: "#FCD34D" }, // light blue
];

// --- SVG flower components ---
function SmallFlower({ color, size }: { color: number; size: number }) {
  const p = palettes[color % palettes.length];
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" fill="none" opacity="0.6">
      {[0, 72, 144, 216, 288].map((a, i) => (
        <ellipse key={i} cx="15" cy="9" rx="4" ry="6" fill={p.petal} transform={`rotate(${a} 15 15)`} />
      ))}
      <circle cx="15" cy="15" r="3" fill={p.center} />
    </svg>
  );
}

function MediumFlower({ color, size }: { color: number; size: number }) {
  const p = palettes[color % palettes.length];
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" opacity="0.8">
      {[0, 60, 120, 180, 240, 300].map((a, i) => (
        <ellipse key={i} cx="20" cy="10" rx="5" ry="9" fill={p.petal} transform={`rotate(${a} 20 20)`} />
      ))}
      <circle cx="20" cy="20" r="5" fill={p.center} />
      <circle cx="20" cy="20" r="3" fill="#F59E0B" opacity="0.7" />
    </svg>
  );
}

function LargeFlower({ color, size, active }: { color: number; size: number; active: boolean }) {
  const p = palettes[color % palettes.length];
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" className="transition-transform duration-300" style={{ transform: active ? "scale(1.15)" : "scale(1)" }}>
      {/* Glow ring when active */}
      {active && <circle cx="30" cy="30" r="28" fill="none" stroke={p.petal} strokeWidth="2" opacity="0.4" />}
      {[0, 72, 144, 216, 288].map((a, i) => (
        <ellipse key={i} cx="30" cy="14" rx="9" ry="14" fill={p.petal} opacity="0.9" transform={`rotate(${a} 30 30)`} />
      ))}
      <circle cx="30" cy="30" r="8" fill={p.center} />
      <circle cx="30" cy="30" r="5" fill="#F59E0B" opacity="0.8" />
      <circle cx="27" cy="27" r="2" fill="white" opacity="0.4" />
    </svg>
  );
}

// --- Structured layout: rows from back to front ---
function generateLayer(
  count: number,
  yMin: number,
  yMax: number,
  minSpacing: number
): { x: number; y: number }[] {
  const positions: { x: number; y: number }[] = [];
  // Distribute in rough rows
  const rows = Math.ceil(count / 12);
  const perRow = Math.ceil(count / rows);

  for (let row = 0; row < rows; row++) {
    const y = yMin + (yMax - yMin) * (row / Math.max(rows - 1, 1));
    for (let col = 0; col < perRow && positions.length < count; col++) {
      const baseX = (col / perRow) * 88 + 6;
      // Add jitter for natural feel
      const x = baseX + (Math.random() - 0.5) * minSpacing;
      const jitteredY = y + (Math.random() - 0.5) * 8;
      positions.push({ x: Math.max(4, Math.min(96, x)), y: jitteredY });
    }
  }
  return positions;
}

export default function FlowerGarden() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("cswn-garden-visitors");
    const count = stored ? parseInt(stored) + 1 : 100;
    localStorage.setItem("cswn-garden-visitors", count.toString());
    setVisitorCount(count);
  }, []);

  if (!mounted) {
    return <div className="relative w-full h-80 md:h-[420px] rounded-3xl bg-gradient-to-t from-green-50/60 via-transparent to-transparent dark:from-green-950/20" />;
  }

  // Calculate layer counts based on visitor count
  const totalFlowers = visitorCount;
  const bgCount = Math.floor(totalFlowers * 0.5);   // 50% background (small)
  const midCount = Math.floor(totalFlowers * 0.35);  // 35% mid (medium)
  // 3 foreground are the interactive pillar flowers

  // Generate structured positions for each layer
  const bgPositions = generateLayer(bgCount, 15, 45, 8);
  const midPositions = generateLayer(midCount, 40, 70, 10);

  // Fixed positions for 3 interactive pillar flowers (spread evenly, foreground)
  const pillarPositions = [
    { x: 22, y: 72 },
    { x: 50, y: 68 },
    { x: 78, y: 74 },
  ];

  return (
    <div
      className="relative w-full h-80 md:h-[420px] overflow-hidden rounded-3xl border border-white/40 dark:border-white/10 shadow-2xl shadow-green-900/5 dark:shadow-primary/5"
      onClick={() => setActiveTooltip(null)}
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100/70 via-green-50/30 to-green-100/80 dark:from-[#0a1520] dark:via-[#0a1510] dark:to-[#0f1f15]" />
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-50/30 via-transparent to-blue-50/30 dark:from-pink-950/10 dark:to-blue-950/10" />

      {/* Depth haze for back layer */}
      <div className="absolute top-0 left-0 right-0 h-[45%] bg-gradient-to-b from-white/20 to-transparent dark:from-white/5 pointer-events-none" />

      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-green-300/40 via-green-200/30 to-transparent dark:from-green-900/50 dark:via-green-950/20 rounded-b-3xl" />

      {/* === BACK LAYER: Small flowers === */}
      {bgPositions.map((pos, i) => (
        <div
          key={`bg-${i}`}
          className="absolute"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            animation: `sway ${3 + (i % 3)}s ease-in-out infinite`,
            animationDelay: `${(i * 0.1) % 2}s`,
          }}
        >
          <SmallFlower color={i} size={12 + (i % 4) * 2} />
        </div>
      ))}

      {/* === MID LAYER: Medium flowers === */}
      {midPositions.map((pos, i) => (
        <div
          key={`mid-${i}`}
          className="absolute"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            animation: `sway ${3.5 + (i % 3) * 0.5}s ease-in-out infinite`,
            animationDelay: `${(i * 0.15) % 2.5}s`,
          }}
        >
          <MediumFlower color={i + 3} size={20 + (i % 3) * 4} />
        </div>
      ))}

      {/* === FOREGROUND: 3 Interactive pillar flowers === */}
      {pillarPositions.map((pos, i) => (
        <div
          key={`pillar-${i}`}
          className="absolute z-20 cursor-pointer"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            transform: "translate(-50%, -50%)",
            animation: `float ${4 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.4}s`,
          }}
          onMouseEnter={() => setActiveTooltip(i)}
          onMouseLeave={() => setActiveTooltip(null)}
          onClick={(e) => {
            e.stopPropagation();
            setActiveTooltip(activeTooltip === i ? null : i);
          }}
        >
          {/* Stem for pillar flowers */}
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-[2.5px] h-8 bg-gradient-to-b from-green-500/70 to-green-400/40 dark:from-green-400/50 dark:to-green-600/30 rounded-full" />

          <LargeFlower color={i * 2} size={52} active={activeTooltip === i} />

          {/* Tooltip */}
          {activeTooltip === i && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 animate-fade-in-up pointer-events-none">
              <div className="glass-card rounded-2xl px-5 py-4 shadow-xl border border-white/50 dark:border-white/15 w-[220px] text-center">
                <h4 className="font-bold text-sm text-text dark:text-text-dark mb-1.5">
                  {pillars[i].title}
                </h4>
                <p className="text-[11px] text-text-light dark:text-text-dark-light leading-relaxed">
                  {pillars[i].blurb}
                </p>
              </div>
              {/* Arrow */}
              <div className="w-3 h-3 bg-white/70 dark:bg-[#0f172a]/60 border-b border-r border-white/50 dark:border-white/15 rotate-45 mx-auto -mt-1.5" />
            </div>
          )}
        </div>
      ))}

      {/* Visitor counter */}
      <div className="absolute bottom-4 right-4 glass-card px-4 py-2 rounded-full flex items-center gap-2 shadow-lg border border-white/40 dark:border-white/10">
        <span className="text-xs font-semibold text-text dark:text-text-dark">
          {visitorCount}+ flowers planted
        </span>
      </div>
    </div>
  );
}
