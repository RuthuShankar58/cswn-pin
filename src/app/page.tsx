import Link from "next/link";

const impactStats = [
  { label: "Members", value: "100+" },
  { label: "Events/Semester", value: "15+" },
  { label: "Industry Partners", value: "6" },
  { label: "Founded", value: "2024" },
];

const highlights = [
  {
    title: "Day in the Life Speaker Series",
    description: "Biweekly virtual sessions with women in tech — real roles, real stories.",
    category: "Speaker Series",
    href: "/day-in-the-life",
  },
  {
    title: "Workshops & Competitions",
    description: "Hands-on events like resume roasts, hackathons, and AI build challenges.",
    category: "Professional Dev",
    href: "/events",
  },
  {
    title: "Networking & Community",
    description: "Coffee chats, company visits, panels, and social events that build real connections.",
    category: "Community",
    href: "/events",
  },
  {
    title: "Women in Tech Panel",
    description: "Our annual flagship panel with accomplished women in tech sharing their paths and advice.",
    category: "Panel",
    href: "/events",
  },
  {
    title: "Company Collaborations",
    description: "We partner with student orgs and industry — from CS Club colabs to Eli Lilly company tours.",
    category: "Industry",
    href: "/events",
  },
  {
    title: "Leadership Opportunities",
    description: "Exec board and committee roles to build real leadership experience on campus.",
    category: "Leadership",
    href: "/contact",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-text leading-[1.05] tracking-tight mb-6">
            Where Women in Tech{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              Find Their Network
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-text-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Computer Science Women&apos;s Network — building community, confidence, and careers for women in tech at Purdue Indianapolis.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-primary text-bg font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm"
            >
              Get in Touch
            </Link>
            <a
              href="https://discord.gg/PLACEHOLDER"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-border text-text-light font-medium rounded-lg hover:border-primary/50 hover:text-text transition-colors text-sm flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
              </svg>
              Join Discord
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-bg-alt">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-sm text-text-light">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Programming</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text">Something for everyone</h2>
            <p className="text-text-light mt-3 max-w-xl text-sm leading-relaxed">
              From technical skill-building to social events and industry connections — CSWN runs diverse programming every semester.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {highlights.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="p-6 rounded-xl bg-bg-card border border-border hover:border-primary/40 transition-colors group block"
              >
                <span className="text-xs font-medium text-primary/80 tracking-wide uppercase">
                  {p.category}
                </span>
                <h3 className="mt-2 mb-2 font-semibold text-text group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-text-light leading-relaxed">{p.description}</p>
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-sm text-text-light hover:text-primary transition-colors"
            >
              See all events
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-bg-alt border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
              Ready to get involved?
            </h2>
            <p className="text-text-light mb-8 leading-relaxed text-sm">
              Whether you&apos;re a freshman or a senior, CSWN has something for you — from resume
              help to industry connections to a community that actually gets it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3 bg-primary text-bg font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm"
              >
                Get in Touch
              </Link>
              <a
                href="https://discord.gg/PLACEHOLDER"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 border border-border text-text-light font-medium rounded-lg hover:border-primary/50 hover:text-text transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
                </svg>
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partner with CSWN segue */}
      <section className="py-16 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-xs text-text-lighter uppercase tracking-widest mb-2">Industry</p>
              <h2 className="text-xl font-bold text-text mb-1">Partner with CSWN</h2>
              <p className="text-sm text-text-light max-w-lg">
                We work with companies for sponsorships, company visits, speaker slots, and recruitment events. Reach 100+ motivated CS students.
              </p>
            </div>
            <Link
              href="/sponsors"
              className="flex-shrink-0 inline-flex items-center justify-center px-6 py-2.5 border border-border text-text-light font-medium rounded-lg hover:border-primary/50 hover:text-text transition-colors text-sm whitespace-nowrap"
            >
              View Sponsorship Info →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
