import PageHero from "@/components/PageHero";
import { sponsors, sponsorshipTiers } from "@/data/sponsors";
import Link from "next/link";

export default function SponsorsPage() {
  return (
    <>
      <PageHero
        title="Partner With CSWN"
        subtitle="Invest in the next generation of women in technology. Connect your brand with talented, driven CS students."
        badge="Sponsorship"
      />

      {/* Why Partner */}
      <section className="py-20 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Why partner</p>
              <h2 className="text-2xl font-bold text-text mb-4">Why partner with CSWN?</h2>
              <p className="text-text-light text-sm leading-relaxed mb-4">
                CSWN offers direct access to a diverse pipeline of talented women in computer science at Purdue University Indianapolis. Our members are driven, technically skilled, and actively seeking internship and career opportunities.
              </p>
              <p className="text-text-light text-sm leading-relaxed">
                As a sponsor, you&apos;ll build brand recognition among future tech leaders while supporting meaningful programming that develops the next generation of women in technology.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { value: "150+", label: "Active Members" },
                  { value: "40+", label: "Events/year" },
                  { value: "90%", label: "CS Majors" },
                  { value: "100%", label: "Career-Focused" },
                ].map((s) => (
                  <div key={s.label} className="bg-bg-card border border-border rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-primary">{s.value}</p>
                    <p className="text-xs text-text-light mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              {[
                { title: "Recruitment Events", desc: "Host exclusive meet-and-greets with CSWN members to connect with top CS talent.", icon: "🤝" },
                { title: "Technical Workshops", desc: "Lead hands-on workshops showcasing your technology and engineering culture.", icon: "💻" },
                { title: "Speaker Series", desc: "Feature your engineers in our Day in the Life Speaker Series.", icon: "🎤" },
                { title: "Company Visits", desc: "Host CSWN members at your office for behind-the-scenes tours.", icon: "🏢" },
                { title: "Resume Access", desc: "Access our member resume book with pre-vetted CS students.", icon: "📄" },
              ].map((item) => (
                <div key={item.title} className="bg-bg-card border border-border rounded-xl p-4 flex items-start gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-text text-sm">{item.title}</h3>
                    <p className="text-xs text-text-light mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-20 bg-bg-alt border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Current partners</p>
            <h2 className="text-2xl font-bold text-text">Our partners</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.id}
                href={sponsor.website || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-bg-card border border-border rounded-xl hover:border-primary/40 transition-all text-center group"
              >
                <p className="font-medium text-sm text-text group-hover:text-primary transition-colors">{sponsor.name}</p>
                <p className="text-xs text-text-lighter mt-0.5 capitalize">{sponsor.tier} Partner</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-20 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Tiers</p>
            <h2 className="text-2xl font-bold text-text">Sponsorship tiers</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sponsorshipTiers.map((tier) => (
              <div key={tier.name} className="bg-bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all">
                <h3 className="text-lg font-bold text-text">{tier.name}</h3>
                <p className="text-primary font-semibold text-sm mt-1 mb-5">{tier.price}</p>
                <ul className="space-y-2.5">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <svg className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs text-text-light">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bg-alt border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text mb-3">Ready to partner?</h2>
          <p className="text-text-light text-sm mb-6 max-w-lg">
            Reach out to discuss a custom partnership or download our sponsorship packet.
          </p>
          <div className="flex gap-4">
            <a href="#" className="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-bg font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm">
              Download Sponsorship Packet
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-2.5 border border-border text-text-light font-medium rounded-lg hover:border-primary/50 hover:text-text transition-colors text-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
