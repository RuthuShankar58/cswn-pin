interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  label: string;
}

/**
 * Static stat display. Kept as a component so the homepage stays declarative;
 * intentionally not animated so the real number always renders (no "0+" flash).
 */
export default function AnimatedCounter({
  end,
  suffix = "",
  label,
}: AnimatedCounterProps) {
  return (
    <div>
      <p className="text-3xl font-bold tracking-tight md:text-4xl">
        {end}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-text-muted">{label}</p>
    </div>
  );
}
