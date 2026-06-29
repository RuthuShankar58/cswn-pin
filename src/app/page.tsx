import Link from "next/link";
import AnimatedCounter from "@/components/AnimatedCounter";
import EventCarousel from "@/components/EventCarousel";
import FlowerGarden from "@/components/FlowerGarden";

const featuredEvents = [
  {
    title: "Day in the Life Speaker Series",
    description:
      "Biweekly virtual sessions with industry professionals sharing their daily experiences in tech.",
    icon: "🎤",
    category: "Speaker Series",
  },
  {
    title: "Resume Roast Night",
    description:
      "Get honest, constructive feedback from HR professionals in a fun, supportive environment.",
    icon: "📝",
    category: "Professional Dev",
  },
  {
    title: "Coffee & Chat",
    description:
      "Casual networking with a coffee bar and conversation starters to spark meaningful connections.",
    icon: "☕",
    category: "Networking",
  },
  {
    title: "Women in Tech Panel",
    description:
      "Accomplished women in technology share their experiences, challenges, and triumphs.",
    icon: "👩‍💻",
    category: "Panel Discussion",
  },
  {
    title: "AI Build Challenge",
    description:
      "Teams build innovative AI-powered projects, developing technical skills and creativity.",
    icon: "🤖",
    category: "Competition",
  },
];

const benefits = [
  {
    title: "Professional Development",
    description:
      "Resume workshops, mock interviews, and career coaching from industry professionals.",
    icon: "📈",
  },
  {
    title: "Technical Growth",
    description:
      "Hands-on workshops, coding challenges, and collaborative project opportunities.",
    icon: "💻",
  },
  {
    title: "Mentorship & Networking",
    description:
      "Connect with industry leaders, alumni, and peers who support your journey.",
    icon: "🤝",
  },
  {
    title: "Leadership Opportunities",
    description:
      "Develop leadership skills through committee roles and executive board positions.",
    icon: "⭐",
  },
  {
    title: "Community",
    description:
      "A welcoming space for women and allies to learn, grow, and celebrate together.",
    icon: "💜",
  },
  {
    title: "Industry Exposure",
    description:
      "Company visits, speaker series, and direct connections to top tech employers.",
    icon: "🏢",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden section-alt">
        {/* Animated background blobs */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-accent/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" style={{ animationDelay: "3s" }} />

        {/* Floating decorative elements */}
        <div className="absolute top-32 right-20 w-3 h-3 bg-secondary/40 rounded-full animate-float hidden lg:block" />
        <div className="absolute top-48 left-16 w-2 h-2 bg-primary/50 rounded-full animate-float-slow hidden lg:block" />
        <div className="absolute bottom-32 right-1/3 w-4 h-4 bg-accent/30 rounded-full animate-float hidden lg:block" style={{ animationDelay: "2s" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 dark:bg-primary/20 text-primary text-sm font-medium rounded-full mb-6 border border-primary/20">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Purdue University Indianapolis
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text dark:text-text-dark leading-tight mb-6">
                Empowering Women to{" "}
                <span className="gradient-text">Shape the Future</span>{" "}
                of Tech
              </h1>
              <p className="text-lg text-text-light dark:text-text-dark-light leading-relaxed mb-8 max-w-lg">
                Professional development, technical growth, mentorship, and community
                for students pursuing careers in computing. Founded in 2024.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/portal"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                >
                  Join Us
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/events"
                  className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-primary/30 dark:border-primary/40 text-primary font-semibold rounded-xl hover:bg-primary/5 dark:hover:bg-primary/10 transition-all hover:-translate-y-0.5"
                >
                  View Events
                </Link>
              </div>
            </div>

            {/* Hero visual */}
            <div className="hidden lg:block animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="relative">
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-2xl flex items-center justify-center border border-white/50 dark:border-white/10 shadow-xl overflow-hidden">
                  <div className="text-center p-8">
                    <div className="w-28 h-28 bg-primary/20 dark:bg-primary/30 rounded-full mx-auto mb-4 flex items-center justify-center animate-float-slow">
                      <span className="text-5xl">👩‍💻</span>
                    </div>
                    <p className="text-text-light dark:text-text-dark-light text-sm font-medium">
                      CSWN Community
                    </p>
                  </div>
                  {/* Decorative grid dots */}
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                </div>

                {/* Floating cards */}
                <div className="absolute -top-4 -right-4 glass-card p-4 rounded-xl shadow-lg animate-float">
                  <p className="text-sm font-bold text-text dark:text-text-dark">150+ Members</p>
                  <p className="text-xs text-text-light dark:text-text-dark-light">And growing 📈</p>
                </div>
                <div className="absolute -bottom-4 -left-4 glass-card p-4 rounded-xl shadow-lg animate-float-slow">
                  <p className="text-sm font-bold text-text dark:text-text-dark">14 Speakers</p>
                  <p className="text-xs text-text-light dark:text-text-dark-light">Industry leaders 🌟</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 section-light relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <AnimatedCounter end={100} suffix="+" label="Active Members" icon="👥" />
            <AnimatedCounter end={15} suffix="+" label="Events Per Semester" icon="🎉" />
            <AnimatedCounter end={5} suffix="+" label="Industry Partners" icon="🤝" />
            <AnimatedCounter end={14} suffix="" label="Guest Speakers" icon="🎤" />
          </div>
        </div>
      </section>

      {/* Featured Events Carousel */}
      <section className="py-20 section-alt relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 dark:bg-primary/20 text-primary text-sm font-medium rounded-full mb-4">
              Programming
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text dark:text-text-dark mb-4">
              Featured Events
            </h2>
            <p className="text-text-light dark:text-text-dark-light max-w-2xl mx-auto">
              From speaker series to hands-on competitions, CSWN offers diverse programming
              to support your professional and personal growth.
            </p>
          </div>

          <EventCarousel events={featuredEvents} />

          <div className="text-center mt-10">
            <Link
              href="/events"
              className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group"
            >
              View All Events
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About / Mission Preview */}
      <section className="py-20 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-secondary/20 dark:bg-secondary/30 text-secondary-dark dark:text-secondary text-sm font-medium rounded-full mb-4">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text dark:text-text-dark mb-6">
                Building Community,{" "}
                <span className="gradient-text">Breaking Barriers</span>
              </h2>
              <p className="text-text-light dark:text-text-dark-light leading-relaxed mb-6">
                Founded in 2024, the Computer Science Women&apos;s Network (CSWN) at Purdue University
                Indianapolis is dedicated to empowering women and allies in computing through
                professional development, technical growth, mentorship, leadership opportunities,
                networking, outreach, and community.
              </p>
              <p className="text-text-light dark:text-text-dark-light leading-relaxed mb-8">
                Whether you&apos;re a first-year student or a senior, CSWN provides the resources,
                connections, and support system to accelerate your career in technology.
              </p>
              <Link
                href="/members"
                className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group"
              >
                Meet Our Team
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Mission visual */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🌱", label: "Growth", color: "from-green-100 to-green-50 dark:from-green-900/30 dark:to-green-950/20" },
                { icon: "💡", label: "Innovation", color: "from-amber-100 to-amber-50 dark:from-amber-900/30 dark:to-amber-950/20" },
                { icon: "🤝", label: "Connection", color: "from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-950/20" },
                { icon: "🚀", label: "Opportunity", color: "from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-950/20" },
              ].map((item, idx) => (
                <div
                  key={item.label}
                  className={`aspect-square rounded-2xl bg-gradient-to-br ${item.color} flex flex-col items-center justify-center hover-lift border border-white/50 dark:border-white/10`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <span className="text-4xl mb-2">{item.icon}</span>
                  <p className="text-sm font-semibold text-text dark:text-text-dark">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-accent/10 dark:bg-accent/20 text-accent-dark dark:text-accent text-sm font-medium rounded-full mb-4">
              Membership
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text dark:text-text-dark mb-4">
              Why Join CSWN?
            </h2>
            <p className="text-text-light dark:text-text-dark-light max-w-2xl mx-auto">
              Whether you&apos;re a first-year student or a senior, CSWN provides the resources,
              connections, and community to accelerate your career in technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={benefit.title}
                className={`glass-card p-6 rounded-xl hover-lift group stagger-${idx + 1}`}
              >
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="font-semibold text-text dark:text-text-dark mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-text-light dark:text-text-dark-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flower Garden Interactive Section */}
      <section className="py-20 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-text dark:text-text-dark mb-4">
              Watch Our Community Bloom
            </h2>
            <p className="text-text-light dark:text-text-dark-light max-w-2xl mx-auto">
              Every visitor plants a flower. Watch the garden grow as our community thrives.
            </p>
          </div>

          <FlowerGarden />
        </div>
      </section>

      {/* Sponsors Preview */}
      <section className="py-16 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-2">
              Our Industry Partners
            </h2>
            <p className="text-text-light dark:text-text-dark-light text-sm">
              Partnering with leading companies to create opportunities for women in tech.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {["Salesforce", "OneAmerica", "Fifth Third Bank", "Merrill Lynch", "Faegre Drinker"].map(
              (sponsor) => (
                <div
                  key={sponsor}
                  className="px-6 py-3 glass-card rounded-xl text-text-light dark:text-text-dark-light font-medium text-sm hover-lift"
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
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 dark:from-primary/5 dark:via-secondary/5 dark:to-accent/5" />
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text dark:text-text-dark mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg text-text-light dark:text-text-dark-light mb-8 max-w-2xl mx-auto">
            Whether you&apos;re looking to build your resume, find mentors, develop technical skills,
            or simply connect with other women in tech — CSWN is here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/portal"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              Join CSWN Today
            </Link>
            <Link
              href="/sponsors"
              className="inline-flex items-center justify-center px-8 py-3.5 glass-card text-text dark:text-text-dark font-semibold rounded-xl hover:bg-white/80 dark:hover:bg-white/10 transition-all hover:-translate-y-0.5"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
