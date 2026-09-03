interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export default function PageHero({ title, subtitle, badge }: PageHeroProps) {
  return (
    <section className="border-b border-border bg-bg-subtle">
      <div className="container-page py-14 md:py-20">
        {badge && <p className="eyebrow mb-3">{badge}</p>}
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
