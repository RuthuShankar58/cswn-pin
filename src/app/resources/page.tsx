import PageHero from "@/components/PageHero";
import { resourceCategories } from "@/data/resources";

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        title="Resources"
        subtitle="A curated collection of tools, guides, and opportunities to support your journey in technology."
        badge="Student Resources"
      />

      {/* Quick Links */}
      <section className="py-6 bg-bg border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {resourceCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="px-3 py-1.5 bg-bg-card border border-border hover:border-primary/50 hover:text-primary text-text-light rounded-lg text-xs font-medium transition-colors"
              >
                {cat.icon} {cat.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Sections */}
      <section className="py-16 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {resourceCategories.map((category) => (
              <div key={category.id} id={category.id}>
                <div className="mb-6 flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <div>
                    <h2 className="text-xl font-bold text-text">{category.title}</h2>
                    <p className="text-sm text-text-light">{category.description}</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {category.resources.map((resource) => (
                    <a
                      key={resource.title}
                      href={resource.url || "#"}
                      target={resource.url?.startsWith("http") ? "_blank" : undefined}
                      rel={resource.url?.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block p-5 bg-bg-card border border-border rounded-xl hover:border-primary/40 transition-colors group"
                    >
                      <h3 className="font-semibold text-text group-hover:text-primary transition-colors text-sm">
                        {resource.title}
                        {resource.url?.startsWith("http") && (
                          <span className="ml-1 text-text-lighter">↗</span>
                        )}
                      </h3>
                      <p className="text-xs text-text-light mt-1">{resource.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suggest Resource */}
      <section className="py-16 bg-bg-alt border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-text mb-2">Know a great resource?</h2>
          <p className="text-text-light text-sm mb-6">
            Help us grow this collection. Share any resource that&apos;s helped your career in tech.
          </p>
          <a
            href="mailto:cswn@purdue.edu?subject=Resource Suggestion"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-bg font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm"
          >
            Suggest a Resource
          </a>
        </div>
      </section>
    </>
  );
}
