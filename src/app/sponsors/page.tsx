import PageHero from "@/components/PageHero";
import { sponsors, sponsorshipTiers } from "@/data/sponsors";
import Link from "next/link";

const engagementOpportunities = [
  {
    title: "Recruitment Events",
    description: "Host exclusive meet-and-greets with CSWN members to connect with top CS talent.",
    icon: "🤝",
  },
  {
    title: "Technical Workshops",
    description: "Lead hands-on workshops showcasing your technology and engineering culture.",
    icon: "💻",
  },
  {
    title: "Speaker Series",
    description: "Feature your engineers in our Day in the Life Speaker Series.",
    icon: "🎤",
  },
  {
    title: "Company Visits",
    description: "Host CSWN members at your office for behind-the-scenes tours.",
    icon: "🏢",
  },
  {
    title: "Resume Access",
    description: "Access our member resume book with pre-vetted CS students.",
    icon: "📄",
  },
  {
    title: "Brand Visibility",
    description: "Prominent logo placement across our events, website, and communications.",
    icon: "⭐",
  },
];

export default function SponsorsPage() {
  return (
    <>
      <PageHero
        title="Partner With CSWN"
        subtitle="Invest in the next generation of women in technology. Connect your brand with talented, driven computer science students."
        badge="Sponsorship"
      />

      {/* Why Partner */}
      <section className="py-20 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text dark:text-text-dark mb-6">Why Partner With CSWN?</h2>
              <div className="space-y-4 text-text-light dark:text-text-dark-light leading-relaxed">
                <p>
                  CSWN offers direct access to a diverse pipeline of talented women in computer
                  science at Purdue University Indianapolis. Our members are driven, technically
                  skilled, and actively seeking internship and career opportunities.
                </p>
                <p>
                  As a sponsor, you&apos;ll build brand recognition among future tech leaders while
                  supporting meaningful programming that develops the next generation of women
                  in technology.
                </p>
              </div>

              {/* Impact stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { value: "150+", label: "Active Members" },
                  { value: "40+", label: "Events Per Year" },
                  { value: "90%", label: "CS Majors" },
                  { value: "100%", label: "Career-Focused" },
                ].map((stat) => (
                  <div key={stat.label} className="glass-card p-4 rounded-xl text-center hover-lift">
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-text-light dark:text-text-dark-light">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 dark:from-primary/20 dark:via-secondary/20 dark:to-accent/20 rounded-2xl p-8 flex items-center justify-center aspect-square border border-white/50 dark:border-white/10">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 dark:bg-primary/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">🏆</span>
                </div>
                <p className="text-text-light dark:text-text-dark-light text-sm">Your Brand Here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-20 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text dark:text-text-dark mb-4">Our Partners</h2>
            <p className="text-text-light dark:text-text-dark-light max-w-2xl mx-auto">
              Thank you to the companies investing in women in technology.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.id}
                href={sponsor.website || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 rounded-xl hover-lift text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-3 bg-gray-50 dark:bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-primary/5 dark:group-hover:bg-primary/20 transition-colors">
                  <span className="text-text-light dark:text-text-dark-light text-xs font-medium">{sponsor.name.charAt(0)}</span>
                </div>
                <p className="font-medium text-sm text-text dark:text-text-dark">{sponsor.name}</p>
                <p className="text-xs text-primary mt-1 capitalize">{sponsor.tier} Partner</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-20 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text dark:text-text-dark mb-4">Sponsorship Tiers</h2>
            <p className="text-text-light dark:text-text-dark-light max-w-2xl mx-auto">
              Choose the partnership level that best fits your organization&apos;s goals and budget.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorshipTiers.map((tier) => (
              <div
                key={tier.name}
                className="glass-card rounded-2xl p-6 hover-lift group"
              >
                <div
                  className="w-10 h-10 rounded-full mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: tier.color + "40" }}
                />
                <h3 className="text-xl font-bold text-text dark:text-text-dark">{tier.name}</h3>
                <p className="text-primary font-semibold text-lg mt-1">{tier.price}</p>

                <ul className="mt-6 space-y-3">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs text-text-light dark:text-text-dark-light">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Engagement */}
      <section className="py-20 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text dark:text-text-dark mb-4">Engagement Opportunities</h2>
            <p className="text-text-light dark:text-text-dark-light max-w-2xl mx-auto">
              Multiple ways to connect your brand with our talented community.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {engagementOpportunities.map((opportunity) => (
              <div key={opportunity.title} className="glass-card p-6 rounded-xl hover-lift group">
                <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform inline-block">{opportunity.icon}</span>
                <h3 className="font-semibold text-text dark:text-text-dark mb-2">{opportunity.title}</h3>
                <p className="text-sm text-text-light dark:text-text-dark-light">{opportunity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Packet & CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 dark:from-primary/5 dark:via-secondary/5 dark:to-accent/5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-text dark:text-text-dark mb-4">Ready to Partner?</h2>
          <p className="text-text-light dark:text-text-dark-light mb-8 max-w-2xl mx-auto">
            Download our sponsorship packet for detailed information, or reach out directly
            to discuss a custom partnership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 hover:-translate-y-0.5"
            >
              Download Sponsorship Packet
            </a>
            <Link
              href="/portal"
              className="inline-flex items-center justify-center px-8 py-3.5 glass-card text-text dark:text-text-dark font-semibold rounded-xl hover:bg-white/80 dark:hover:bg-white/10 transition-all hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
