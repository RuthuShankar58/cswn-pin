import Link from "next/link";

const impactStats = [
  { label: "Members Served", value: "150+" },
  { label: "Events Hosted", value: "40+" },
  { label: "Industry Speakers", value: "14" },
  { label: "Corporate Partners", value: "5+" },
];

const featuredEvents = [
  {
    title: "Day in the Life Speaker Series",
    description: "Biweekly virtual sessions with industry professionals sharing their daily experiences in tech.",
    icon: "🎤",
    category: "Speaker Series",
  },
  {
    title: "Resume Roast Night",
    description: "Get honest, constructive feedback from HR professionals in a fun, supportive environment.",
    icon: "📝",
    category: "Professional Development",
  },
  {
    title: "Coffee & Chat",
    description: "Casual networking with a coffee bar and conversation starters to spark meaningful connections.",
    icon: "☕",
    category: "Networking",
  },
  {
    title: "Women in Tech Panel",
    description: "Accomplished women in technology share their experiences, challenges, and triumphs.",
    icon: "👩‍💻",
    category: "Panel Discussion",
  },
  {
    title: "AI Build Challenge",
    description: "Teams build innovative AI-powered projects, developing technical skills and creativity.",
    icon: "🤖",
    category: "Competition",
  },
];

const benefits = [
  {
    title: "Professional Development",
    description: "Resume workshops, mock interviews, and career coaching from industry professionals.",
    icon: "📈",
  },
  {
    title: "Technical Growth",
    description: "Hands-on workshops, coding challenges, and collaborative project opportunities.",
    icon: "💻",
  },
  {
    title: "Mentorship & Networking",
    description: "Connect with industry leaders, alumni, and peers who support your journey.",
    icon: "🤝",
  },
  {
    title: "Leadership Opportunities",
    description: "Develop leadership skills through committee roles and executive board positions.",
    icon: "⭐",
  },
  {
    title: "Community",
    description: "A welcoming space for women and allies to learn, grow, and celebrate together.",
    icon: "💜",
  },
  {
    title: "Industry Exposure",
    description: "Company visits, speaker series, and direct connections to top tech employers.",
    icon: "🏢",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-bg-alt overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-accent/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
                Purdue University Indianapolis
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight mb-6">
                Building the Next Generation of{" "}
                <span className="text-primary">Women in Technology</span>
              </h1>
              <p className="text-lg text-text-light leading-relaxed mb-8 max-w-lg">
                Professional development, technical growth, mentorship, leadership opportunities, 
                and community for students pursuing careers in computing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/get-involved"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
                >
                  Join CSWN
                </Link>
                <Link
                  href="/events"
                  className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors"
                >
                  Explore Events
                </Link>
              </div>
            </div>

            {/* Hero image placeholder */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl">👩‍💻</span>
                    </div>
                    <p className="text-text-light text-sm">CSWN Community</p>
                  </div>
                </div>
                {/* Floating cards */}
                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                  <p className="text-sm font-semibold text-text">150+ Members</p>
                  <p className="text-xs text-text-light">And growing</p>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                  <p className="text-sm font-semibold text-text">14 Speakers</p>
                  <p className="text-xs text-text-light">Industry leaders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-text-light font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Programming
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Featured Events</h2>
            <p className="text-text-light max-w-2xl mx-auto">
              From speaker series to hands-on competitions, CSWN offers diverse programming 
              to support your professional and personal growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEvents.map((event) => (
              <div
                key={event.title}
                className="bg-white p-6 rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl">{event.icon}</span>
                </div>
                <span className="text-xs font-medium text-accent uppercase tracking-wider">
                  {event.category}
                </span>
                <h3 className="text-lg font-semibold text-text mt-1 mb-2">{event.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/events"
              className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              View All Events
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-secondary/30 text-accent-dark text-sm font-medium rounded-full mb-4">
              Membership
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Why Join CSWN?</h2>
            <p className="text-text-light max-w-2xl mx-auto">
              Whether you&apos;re a first-year student or a senior, CSWN provides the resources, 
              connections, and community to accelerate your career in technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-bg-alt rounded-lg flex items-center justify-center">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-1">{benefit.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Highlights */}
      <section className="py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Our Community in Action</h2>
            <p className="text-text-light max-w-2xl mx-auto">
              Capturing moments of growth, connection, and achievement across our events and programs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-xl flex items-center justify-center"
              >
                <span className="text-text-lighter text-sm">Event Photo {i}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/gallery"
              className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              View Full Gallery
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-text mb-2">Our Industry Partners</h2>
            <p className="text-text-light text-sm">
              Partnering with leading companies to create opportunities for women in tech.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-12">
            {["Salesforce", "OneAmerica", "Fifth Third Bank", "Merrill Lynch", "Faegre Drinker"].map(
              (sponsor) => (
                <div
                  key={sponsor}
                  className="px-6 py-3 bg-gray-50 rounded-lg text-text-light font-medium text-sm"
                >
                  {sponsor}
                </div>
              )
            )}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/sponsors"
              className="text-sm text-primary font-medium hover:text-primary-dark transition-colors"
            >
              Become a Sponsor →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg text-text-light mb-8 max-w-2xl mx-auto">
            Whether you&apos;re looking to build your resume, find mentors, develop technical skills, 
            or simply connect with other women in tech — CSWN is here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
            >
              Join CSWN Today
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-text font-semibold rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
