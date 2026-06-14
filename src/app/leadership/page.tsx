import PageHero from "@/components/PageHero";
import { leadership } from "@/data/leadership";
import Link from "next/link";

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        title="Leadership"
        subtitle="Meet the executive board driving CSWN's mission to empower women in technology."
        badge="Executive Board"
      />

      <section className="py-20 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {leadership.map((leader) => (
              <div
                key={leader.id}
                className="bg-bg-card border border-border rounded-xl p-6 text-center hover:border-primary/40 transition-all group"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👩‍💻</span>
                </div>
                <h3 className="font-semibold text-text">{leader.name}</h3>
                <p className="text-primary text-xs font-medium mt-1">{leader.position}</p>
                {leader.major && <p className="text-text-lighter text-xs mt-1">{leader.major}</p>}
                {leader.bio && (
                  <p className="text-text-light text-xs mt-3 leading-relaxed line-clamp-3">{leader.bio}</p>
                )}
                {leader.email && (
                  <a href={`mailto:${leader.email}`} className="block text-xs text-text-lighter mt-2 hover:text-primary transition-colors">
                    {leader.email}
                  </a>
                )}
                {leader.linkedin && (
                  <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs text-primary mt-3 hover:text-primary-dark">
                    LinkedIn ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg-alt border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Leadership</p>
              <h2 className="text-2xl font-bold text-text mb-4">Join our leadership team</h2>
              <p className="text-text-light text-sm leading-relaxed mb-6">
                Executive board positions open each spring. We look for passionate members who want to make a real impact — developing skills in project management, event planning, and team leadership along the way.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Executive board elections held annually",
                  "Committee chair positions available",
                  "First-year students welcome to apply",
                  "Mentorship from outgoing board members",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-text-light">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/get-involved" className="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-bg font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm">
                Learn About Opportunities
              </Link>
            </div>
            <div className="bg-bg-card border border-border rounded-xl p-8 flex items-center justify-center aspect-square">
              <div className="text-center">
                <span className="text-5xl block mb-3">⭐</span>
                <p className="text-text-light text-sm">Leadership Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
