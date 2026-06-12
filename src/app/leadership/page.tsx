import PageHero from "@/components/PageHero";
import { leadership } from "@/data/leadership";
import Link from "next/link";

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        title="Leadership"
        subtitle="Meet the dedicated executive board driving CSWN's mission to empower women in technology."
        badge="Executive Board"
      />

      {/* Leadership Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">Executive Board</h2>
            <p className="text-text-light max-w-2xl mx-auto">
              Our leadership team is committed to creating meaningful opportunities and building 
              a thriving community for women in computing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader) => (
              <div
                key={leader.id}
                className="bg-white border border-gray-100 rounded-2xl p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all group"
              >
                {/* Photo placeholder */}
                <div className="w-28 h-28 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                  <span className="text-3xl">👩‍💻</span>
                </div>

                {/* Info */}
                <h3 className="font-semibold text-text text-lg">{leader.name}</h3>
                <p className="text-primary font-medium text-sm mt-1">{leader.position}</p>
                
                {leader.major && (
                  <p className="text-text-light text-xs mt-2">{leader.major}</p>
                )}
                {leader.graduationYear && (
                  <p className="text-text-lighter text-xs">Class of {leader.graduationYear}</p>
                )}

                {leader.bio && (
                  <p className="text-text-light text-xs mt-3 leading-relaxed line-clamp-3">
                    {leader.bio}
                  </p>
                )}

                {leader.linkedin && (
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs text-primary mt-3 hover:text-primary-dark"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Leadership */}
      <section className="py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text mb-6">Join Our Leadership Team</h2>
              <div className="space-y-4 text-text-light leading-relaxed">
                <p>
                  CSWN&apos;s executive board positions open each spring semester. We look for 
                  passionate, dedicated members who want to make a real impact on our community.
                </p>
                <p>
                  As a leader, you&apos;ll develop skills in project management, event planning, 
                  communications, team leadership, and more — all while building a stronger 
                  community for women in tech.
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm text-text">Executive board elections held annually</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm text-text">Committee chair positions available</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm text-text">First-year students welcome to apply</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm text-text">Mentorship from outgoing board members</span>
                </div>
              </div>

              <Link
                href="/get-involved"
                className="inline-flex items-center justify-center mt-8 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                Learn About Opportunities
              </Link>
            </div>

            <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 flex items-center justify-center aspect-square">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">⭐</span>
                </div>
                <p className="text-text-light text-sm">Leadership Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
