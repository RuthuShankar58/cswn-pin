interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export default function PageHero({ title, subtitle, badge }: PageHeroProps) {
  return (
    <section className="dotgrid relative overflow-hidden border-b border-border bg-bg-subtle">
      <div className="glow glow-violet -left-24 -top-40 h-80 w-80" />
      <div className="glow glow-pink -right-24 -top-32 h-72 w-72" />
      <div className="container-page py-16 md:py-24">
        {badge && <p className="eyebrow mb-4">{badge}</p>}
        <h1 className="text-3xl font-bold md:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
