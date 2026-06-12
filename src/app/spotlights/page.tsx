import PageHero from "@/components/PageHero";
import { spotlights } from "@/data/spotlights";
import Link from "next/link";

const spotlightTypes: Record<string, { label: string; color: string }> = {
  internship: { label: "Internship", color: "bg-blue-100 text-blue-700" },
  research: { label: "Research", color: "bg-green-100 text-green-700" },
  scholarship: { label: "Scholarship", color: "bg-purple-100 text-purple-700" },
  award: { label: "Award", color: "bg-orange-100 text-orange-700" },
  alumni: { label: "Alumni", color: "bg-pink-100 text-pink-700" },
  ta: { label: "Teaching Assistant", color: "bg-teal-100 text-teal-700" },
};

export default function SpotlightsPage() {
  return (
    <>
      <PageHero
        title="Alumni & Member Spotlights"
        subtitle="Celebrating the achievements, milestones, and career journeys of our incredible community members."
        badge="Success Stories"
      />

      {/* Spotlights Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {spotlights.map((spotlight) => (
              <div
                key={spotlight.id}
                className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 flex-shrink-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👩‍💻</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${spotlightTypes[spotlight.type].color}`}>
                        {spotlightTypes[spotlight.type].label}
                      </span>
                      {spotlight.graduationYear && (
                        <span className="text-xs text-text-lighter">Class of {spotlight.graduationYear}</span>
                      )}
                    </div>
                    <h3 className="font-semibold text-text text-lg">{spotlight.title}</h3>
                    <p className="text-sm text-text-light mt-2 leading-relaxed">
                      {spotlight.description}
                    </p>
                    {spotlight.quote && (
                      <blockquote className="mt-4 pl-4 border-l-2 border-primary/30 italic text-sm text-text-light">
                        &quot;{spotlight.quote}&quot;
                      </blockquote>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">Achievement Categories</h2>
            <p className="text-text-light max-w-2xl mx-auto">
              Our members achieve incredible things across all areas of technology and academia.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Internship Success", description: "Members landing internships at top tech companies", icon: "🏢", count: "20+" },
              { title: "Research Experiences", description: "Undergraduate and graduate research contributions", icon: "🔬", count: "10+" },
              { title: "Scholarship Recipients", description: "Financial awards recognizing academic excellence", icon: "🎓", count: "15+" },
              { title: "Teaching Assistants", description: "Members serving as TAs for CS courses", icon: "📚", count: "8+" },
              { title: "Award Winners", description: "Recognition for leadership and technical achievement", icon: "🏆", count: "5+" },
              { title: "Alumni Success", description: "Career journeys after graduation", icon: "🚀", count: "30+" },
            ].map((category) => (
              <div key={category.title} className="bg-white p-6 rounded-xl border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl">{category.icon}</span>
                  <span className="text-xl font-bold text-primary">{category.count}</span>
                </div>
                <h3 className="font-semibold text-text mb-1">{category.title}</h3>
                <p className="text-sm text-text-light">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Spotlight */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-text mb-4">Share Your Story</h2>
          <p className="text-text-light mb-6 max-w-xl mx-auto">
            Have an achievement you&apos;d like to share? We&apos;d love to celebrate your success 
            and inspire other members.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            Submit Your Spotlight
          </Link>
        </div>
      </section>
    </>
  );
}
