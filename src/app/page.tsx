import Link from "next/link";

const impactStats = [
  { label: "Members", value: "100+" },
  { label: "Events/Semester", value: "15+" },
  { label: "Industry Partners", value: "6" },
  { label: "Founded", value: "2024" },
];

const programs = [
  {
    title: "Day in the Life Speaker Series",
    description: "Biweekly 30-min virtual sessions with industry professionals sharing their real-world experiences in tech.",
    category: "Speaker Series",
  },
  {
    title: "Resume Roast Night",
    description: "Honest, constructive resume feedback from HR professionals in a fun, supportive environment.",
    category: "Professional Dev",
  },
  {
    title: "AI Build Challenge",
    description: "Teams build innovative AI-powered projects — developing technical skills and creativity under pressure.",
    category: "Competition",
  },
  {
    title: "Coffee & Chat",
    description: "Casual networking with conversation starters to spark meaningful connections over coffee.",
    category: "Networking",
  },
  {
    title: "Women in Tech Panel",
    description: "Accomplished women in technology share their experiences, challenges, and path forward.",
    category: "Panel",
  },
  {
    title: "Tech Company Visits",
    description: "Exclusive behind-the-scenes tours of leading tech companies with networking opportunities.",
    category: "Industry",
  },
];

const sponsors = ["Brooksource", "Amway", "Eli Lilly", "CIEE", "Purdue CS Dept.", "Purdue Faculty"];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg">
        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium tracking-wide mb-8">
            Purdue University Indianapolis
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-text leading-[1.05] tracking-tight mb-6">
            Where Women in Tech{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              Find Their Network
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-text-light max-w-2xl mx-auto mb-10 leading-relaxed">
            CSWN at Purdue University Indianapolis empowers women in CS and tech through mentorship, workshops, speaker series, and community.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-involved"
              className="px-8 py-3.5 bg-primary text-bg font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm"
            >
              Join CSWN
            </Link>
            <Link
              href="/events"
              className="px-8 py-3.5 border border-border text-text-light font-medium rounded-lg hover:border-primary/50 hover:text-text transition-colors text-sm"
            >
              See Events
            </Link>
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

      {/* Programs */}
      <section className="py-24 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Programming</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text">What we do</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {programs.map((p) => (
              <div
                key={p.title}
                className="p-6 rounded-xl bg-bg-card border border-border hover:border-primary/40 transition-colors group"
              >
                <span className="text-xs font-medium text-primary/80 tracking-wide uppercase">
                  {p.category}
                </span>
                <h3 className="mt-2 mb-2 font-semibold text-text group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-text-light leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-sm text-text-light hover:text-primary transition-colors"
            >
              View all events
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
            <p className="text-text-light mb-8 leading-relaxed">
              Whether you&apos;re a freshman or a senior, CSWN has something for you — from resume
              help to industry connections to a community that actually gets it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-involved"
                className="inline-flex items-center justify-center px-7 py-3 bg-primary text-bg font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm"
              >
                Join CSWN
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3 border border-border text-text-light font-medium rounded-lg hover:border-primary/50 hover:text-text transition-colors text-sm"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-16 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-text-lighter uppercase tracking-widest mb-8">
            Supported by industry partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {sponsors.map((name) => (
              <span
                key={name}
                className="px-5 py-2 rounded-lg border border-border text-text-lighter text-sm font-medium hover:border-primary/30 hover:text-text-light transition-colors"
              >
                {name}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/sponsors" className="text-xs text-text-lighter hover:text-primary transition-colors">
              Become a sponsor →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
