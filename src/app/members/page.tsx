import PageHero from "@/components/PageHero";
import { leadership } from "@/data/leadership";
import Link from "next/link";

const roleColors: Record<string, string> = {
  President: "from-primary/20 to-primary/5 border-primary/30",
  "Vice President": "from-secondary/20 to-secondary/5 border-secondary/30",
  Treasurer: "from-accent/20 to-accent/5 border-accent/30",
  Secretary: "from-green-200/30 to-green-100/10 border-green-300/30",
  "Events Chair": "from-pink-200/30 to-pink-100/10 border-pink-300/30",
  "Marketing Chair": "from-amber-200/30 to-amber-100/10 border-amber-300/30",
  "Outreach Chair": "from-teal-200/30 to-teal-100/10 border-teal-300/30",
  "Technology Chair": "from-blue-200/30 to-blue-100/10 border-blue-300/30",
};

export default function MembersPage() {
  return (
    <>
      <PageHero
        title="Executive Board"
        subtitle="Meet the passionate leaders driving CSWN's mission to empower women in technology at Purdue University Indianapolis."
        badge="Leadership"
      />

      {/* Executive Board */}
      <section className="py-20 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-text dark:text-text-dark mb-4">
              Our Executive Team
            </h2>
            <p className="text-text-light dark:text-text-dark-light max-w-2xl mx-auto">
              Driven students dedicated to building an inclusive community for women in computing.
            </p>
          </div>

          {/* Leader grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader) => {
              const colorClass = roleColors[leader.position] || "from-gray-200/30 to-gray-100/10 border-gray-300/30";
              return (
                <div
                  key={leader.id}
                  className={`relative group rounded-2xl border bg-gradient-to-b ${colorClass} dark:from-white/5 dark:to-transparent dark:border-white/10 p-6 hover-lift overflow-hidden`}
                >
                  {/* Avatar placeholder */}
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 dark:from-primary/30 dark:via-secondary/30 dark:to-accent/30 flex items-center justify-center border-2 border-white/60 dark:border-white/20 shadow-md group-hover:scale-105 transition-transform">
                    <span className="text-2xl">👤</span>
                  </div>

                  {/* Info */}
                  <div className="text-center">
                    <h3 className="font-bold text-text dark:text-text-dark mb-0.5">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-semibold text-primary mb-2">
                      {leader.position}
                    </p>
                    {leader.major && (
                      <p className="text-xs text-text-light dark:text-text-dark-light mb-3">
                        {leader.major}
                      </p>
                    )}
                    {leader.bio && (
                      <p className="text-xs text-text-light dark:text-text-dark-light leading-relaxed line-clamp-3">
                        {leader.bio}
                      </p>
                    )}
                  </div>

                  {/* LinkedIn link */}
                  {leader.linkedin && (
                    <div className="mt-4 text-center">
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary-dark transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                    </div>
                  )}

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Member Spotlight Placeholder */}
      <section className="py-20 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-secondary/20 dark:bg-secondary/30 text-secondary-dark dark:text-secondary text-sm font-medium rounded-full mb-4">
              Spotlight
            </span>
            <h2 className="text-3xl font-bold text-text dark:text-text-dark mb-4">
              Member Spotlights
            </h2>
            <p className="text-text-light dark:text-text-dark-light max-w-2xl mx-auto">
              Celebrating the achievements and journeys of our incredible members.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-6 hover-lift"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 flex items-center justify-center">
                    <span className="text-lg">🌟</span>
                  </div>
                  <div>
                    <p className="font-semibold text-text dark:text-text-dark">Member Name</p>
                    <p className="text-xs text-text-light dark:text-text-dark-light">
                      Computer Science · Class of 2026
                    </p>
                  </div>
                </div>
                <p className="text-sm text-text-light dark:text-text-dark-light leading-relaxed italic">
                  &quot;CSWN has been instrumental in my professional growth. The networking events
                  and mentorship have helped me land my dream internship.&quot;
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-white/10">
                  <p className="text-xs text-text-lighter dark:text-text-dark-light">
                    Member Spotlight · Semester {i}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 dark:from-primary/5 dark:via-secondary/5 dark:to-accent/5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-text dark:text-text-dark mb-4">
            Want to Join the Leadership Team?
          </h2>
          <p className="text-text-light dark:text-text-dark-light mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for passionate individuals to help drive our mission.
            Applications open at the start of each semester.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/portal"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 hover:-translate-y-0.5"
            >
              Apply for E-Board
            </Link>
            <Link
              href="/portal"
              className="inline-flex items-center justify-center px-8 py-3.5 glass-card text-text dark:text-text-dark font-semibold rounded-xl hover:bg-white/80 dark:hover:bg-white/10 transition-all hover:-translate-y-0.5"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
