import PageHero from "@/components/PageHero";
import { resourceCategories } from "@/data/resources";

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        title="Resources"
        subtitle="Curated links and tools to help you land internships, prep for interviews, and grow in tech."
        badge="Student Resources"
      />

      {/* Category anchor nav */}
      <div className="sticky top-16 z-40 bg-bg/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {resourceCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="flex-shrink-0 px-3 py-1.5 rounded-md text-xs font-medium text-text-light hover:text-text hover:bg-white/5 transition-colors whitespace-nowrap"
              >
                {cat.icon} {cat.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Resource sections */}
      <section className="py-16 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {resourceCategories.map((category, idx) => (
            <div key={category.id} id={category.id} className="scroll-mt-28">
              {/* Section header */}
              <div className="flex items-end gap-4 mb-6 pb-4 border-b border-border">
                <span className="text-3xl leading-none">{category.icon}</span>
                <div>
                  <h2 className="text-lg font-bold text-text">{category.title}</h2>
                  <p className="text-xs text-text-light mt-0.5">{category.description}</p>
                </div>
              </div>

              {/* Resource cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {category.resources.map((resource) => {
                  const isExternal = resource.url?.startsWith("http");
                  return (
                    <a
                      key={resource.title}
                      href={resource.url || "#"}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="flex flex-col justify-between p-4 bg-bg-card border border-border rounded-xl hover:border-primary/40 hover:bg-primary/5 transition-all group"
                    >
                      <div>
                        <h3 className="font-semibold text-text text-xs leading-snug group-hover:text-primary transition-colors">
                          {resource.title}
                          {isExternal && <span className="ml-1 text-text-lighter text-[10px]">↗</span>}
                        </h3>
                        <p className="text-[11px] text-text-light mt-1.5 leading-relaxed">
                          {resource.description}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Suggest a resource */}
      <section className="py-14 bg-bg-alt border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-base font-bold text-text mb-1">Know something we&apos;re missing?</h2>
            <p className="text-xs text-text-light">
              Send us a resource that&apos;s helped you — we&apos;ll add it for the next person.
            </p>
          </div>
          <a
            href="mailto:cswn@purdue.edu?subject=Resource Suggestion"
            className="flex-shrink-0 inline-flex items-center justify-center px-5 py-2.5 bg-primary text-bg font-semibold rounded-lg hover:bg-primary-dark transition-colors text-xs"
          >
            Suggest a Resource
          </a>
        </div>
      </section>
    </>
  );
}
