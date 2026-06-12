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
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {resourceCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="px-4 py-2 bg-gray-100 hover:bg-primary/10 text-text-light hover:text-primary rounded-full text-sm font-medium transition-colors"
              >
                {cat.icon} {cat.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {resourceCategories.map((category) => (
              <div key={category.id} id={category.id}>
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{category.icon}</span>
                    <h2 className="text-2xl font-bold text-text">{category.title}</h2>
                  </div>
                  <p className="text-text-light">{category.description}</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {category.resources.map((resource) => (
                    <a
                      key={resource.title}
                      href={resource.url || "#"}
                      target={resource.url?.startsWith("http") ? "_blank" : undefined}
                      rel={resource.url?.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block p-5 bg-bg-alt rounded-xl hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all group"
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
      <section className="py-16 bg-bg-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-text mb-4">Know a Great Resource?</h2>
          <p className="text-text-light mb-6">
            Help us grow this collection. If you&apos;ve found a resource that&apos;s helped your career 
            in tech, share it with the CSWN community.
          </p>
          <a
            href="mailto:cswn@purdue.edu?subject=Resource Suggestion"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            Suggest a Resource
          </a>
        </div>
      </section>
    </>
  );
}
