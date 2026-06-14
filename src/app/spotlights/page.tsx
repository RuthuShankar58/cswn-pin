import PageHero from "@/components/PageHero";
import { spotlights } from "@/data/spotlights";
import Link from "next/link";

const spotlightTypes: Record<string, { label: string; color: string }> = {
  internship: { label: "Internship", color: "text-blue-400 bg-blue-400/10" },
  research: { label: "Research", color: "text-green-400 bg-green-400/10" },
  scholarship: { label: "Scholarship", color: "text-purple-400 bg-purple-400/10" },
  award: { label: "Award", color: "text-orange-400 bg-orange-400/10" },
  alumni: { label: "Alumni", color: "text-pink-400 bg-pink-400/10" },
  ta: { label: "Teaching Assistant", color: "text-teal-400 bg-teal-400/10" },
};

export default function SpotlightsPage() {
  return (
    <>
      <PageHero
        title="Member Spotlights"
        subtitle="Celebrating the achievements, milestones, and career journeys of our incredible community members."
        badge="Success Stories"
      />

      <section className="py-20 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-4">
            {spotlights.map((spotlight) => (
              <div
                key={spotlight.id}
                className="bg-bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-xl">👩‍💻</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${spotlightTypes[spotlight.type].color}`}>
                        {spotlightTypes[spotlight.type].label}
                      </span>
                      {spotlight.graduationYear && (
                        <span className="text-xs text-text-lighter">Class of {spotlight.graduationYear}</span>
                      )}
                    </div>
                    <h3 className="font-semibold text-text">{spotlight.title}</h3>
                    <p className="text-sm text-text-light mt-2 leading-relaxed">{spotlight.description}</p>
                    {spotlight.quote && (
                      <blockquote className="mt-4 pl-3 border-l-2 border-primary/40 italic text-sm text-text-light">
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

      <section className="py-16 bg-bg-alt border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-text mb-2">Share your story</h2>
          <p className="text-text-light text-sm mb-6 max-w-lg">
            Have an achievement you&apos;d like to share? We&apos;d love to celebrate your success and inspire other members.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-bg font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm">
            Submit Your Spotlight
          </Link>
        </div>
      </section>
    </>
  );
}
