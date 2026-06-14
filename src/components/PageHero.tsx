interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export default function PageHero({ title, subtitle, badge }: PageHeroProps) {
  return (
    <section className="relative bg-bg pt-24 pb-16 overflow-hidden border-b border-border">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-primary/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {badge && (
          <span className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium tracking-wide mb-5">
            {badge}
          </span>
        )}
        <h1 className="text-4xl sm:text-5xl font-bold text-text tracking-tight mb-4">{title}</h1>
        {subtitle && (
          <p className="text-lg text-text-light max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
