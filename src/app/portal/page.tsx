import PageHero from "@/components/PageHero";
import Link from "next/link";

const resources = [
  {
    title: "BoilerLink",
    description: "Official university page — join CSWN, RSVP to events, and track your involvement.",
    icon: "🎓",
    href: "https://boilerlink.purdue.edu/organization/computersciencewomensnetworkindy",
    external: true,
  },
  {
    title: "Instagram",
    description: "Follow us for event announcements, member spotlights, and community updates.",
    icon: "📸",
    href: "https://www.instagram.com/cswn.indy/",
    external: true,
  },
  {
    title: "LinkedIn",
    description: "Connect professionally, see job postings shared by our partners, and network.",
    icon: "💼",
    href: "https://www.linkedin.com/company/105267243/",
    external: true,
  },
  {
    title: "Discord",
    description: "Join our community chat for study groups, project collabs, and casual conversation.",
    icon: "💬",
    href: "#",
    external: true,
  },
];

const getInvolved = [
  {
    title: "Attend Events",
    description: "Drop into any of our 15+ events per semester. No commitment required.",
    icon: "🎉",
  },
  {
    title: "Join a Committee",
    description: "Help plan events, manage marketing, or build tech projects with fellow members.",
    icon: "🙋‍♀️",
  },
  {
    title: "Apply for E-Board",
    description: "Run for an executive position and shape the future of CSWN.",
    icon: "⭐",
  },
  {
    title: "Volunteer",
    description: "Help with outreach events, campus fairs, and community partnerships.",
    icon: "❤️",
  },
];

const faqs = [
  {
    question: "Do I have to be a CS major to join?",
    answer: "No! CSWN welcomes all majors. If you're interested in technology, you belong here.",
  },
  {
    question: "Is there a membership fee?",
    answer: "CSWN membership is completely free. Just sign up on BoilerLink and start attending events.",
  },
  {
    question: "Do I need to be a woman to join?",
    answer: "CSWN is open to all genders. We welcome women, non-binary individuals, and allies who support our mission.",
  },
  {
    question: "How often do you meet?",
    answer: "We have general meetings biweekly, plus additional events like speaker series, workshops, and social events throughout the semester.",
  },
  {
    question: "Can I bring a friend?",
    answer: "Absolutely! We encourage you to bring friends to any of our events. The more the merrier.",
  },
];

export default function PortalPage() {
  return (
    <>
      <PageHero
        title="Portal"
        subtitle="Resources, get involved, gallery, and more — everything you need in one place."
        badge="Hub"
      />

      {/* Quick Links / Resources */}
      <section className="py-20 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text dark:text-text-dark mb-4">Connect With Us</h2>
            <p className="text-text-light dark:text-text-dark-light max-w-2xl mx-auto">
              Find us everywhere. Stay connected and never miss an opportunity.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource) => (
              <a
                key={resource.title}
                href={resource.href}
                target={resource.external ? "_blank" : undefined}
                rel={resource.external ? "noopener noreferrer" : undefined}
                className="glass-card p-6 rounded-xl hover-lift group text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors group-hover:scale-110 transform">
                  <span className="text-2xl">{resource.icon}</span>
                </div>
                <h3 className="font-semibold text-text dark:text-text-dark mb-1">{resource.title}</h3>
                <p className="text-xs text-text-light dark:text-text-dark-light leading-relaxed">
                  {resource.description}
                </p>
                {resource.external && (
                  <svg className="w-4 h-4 text-primary mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-secondary/20 dark:bg-secondary/30 text-secondary-dark dark:text-secondary text-sm font-medium rounded-full mb-4">
              Get Involved
            </span>
            <h2 className="text-3xl font-bold text-text dark:text-text-dark mb-4">Ways to Participate</h2>
            <p className="text-text-light dark:text-text-dark-light max-w-2xl mx-auto">
              There are many ways to be part of CSWN, from casual participation to leadership roles.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {getInvolved.map((item) => (
              <div key={item.title} className="glass-card p-6 rounded-xl hover-lift flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center">
                  <span className="text-xl">{item.icon}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-text dark:text-text-dark mb-1">{item.title}</h3>
                  <p className="text-sm text-text-light dark:text-text-dark-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text dark:text-text-dark mb-4">Gallery</h2>
            <p className="text-text-light dark:text-text-dark-light max-w-2xl mx-auto">
              Moments from our events, meetings, and community.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={i}
                className={`${
                  i === 0 || i === 5 ? "md:col-span-2 md:row-span-2" : ""
                } bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 dark:from-primary/20 dark:via-secondary/20 dark:to-accent/20 rounded-xl flex items-center justify-center aspect-square hover-lift border border-white/50 dark:border-white/10 overflow-hidden group`}
              >
                <div className="text-center">
                  <span className="text-text-lighter dark:text-text-dark-light text-xs">
                    Event Image {i + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 section-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text dark:text-text-dark mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-text dark:text-text-dark mb-2 flex items-start gap-3">
                  <span className="text-primary flex-shrink-0">Q:</span>
                  {faq.question}
                </h3>
                <p className="text-sm text-text-light dark:text-text-dark-light pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 dark:from-primary/5 dark:via-secondary/5 dark:to-accent/5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-text dark:text-text-dark mb-4">
            Have Questions?
          </h2>
          <p className="text-text-light dark:text-text-dark-light mb-8 max-w-2xl mx-auto">
            Reach out to us on any of our social platforms or email us directly. We&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://boilerlink.purdue.edu/organization/computersciencewomensnetworkindy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 hover:-translate-y-0.5"
            >
              Join on BoilerLink
            </a>
            <Link
              href="/events"
              className="inline-flex items-center justify-center px-8 py-3.5 glass-card text-text dark:text-text-dark font-semibold rounded-xl hover:bg-white/80 dark:hover:bg-white/10 transition-all hover:-translate-y-0.5"
            >
              View Upcoming Events
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
