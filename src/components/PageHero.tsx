interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export default function PageHero({ title, subtitle, badge }: PageHeroProps) {
  return (
    <section className="relative section-alt pt-24 pb-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 dark:bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 dark:bg-primary/20 text-primary text-sm font-medium rounded-full mb-4 border border-primary/20">
            {badge}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-text dark:text-text-dark mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-text-light dark:text-text-dark-light max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
