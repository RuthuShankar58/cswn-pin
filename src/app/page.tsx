import Link from "next/link";
import AnimatedCounter from "@/components/AnimatedCounter";
import FlowerGarden from "@/components/FlowerGarden";

const DISCORD_LINK = "https://discord.gg/XWEfRD3ZYU";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        {/* Light mode background */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-200/60 via-white to-pink-200/50 dark:hidden" />
        <div className="absolute inset-0 bg-gradient-to-tl from-rose-100/40 via-transparent to-blue-100/50 dark:hidden" />

        {/* Dark mode background */}
        <div className="absolute inset-0 hidden dark:block bg-gradient-to-br from-[#06101f] via-[#0a0e1a] to-[#140a1e]" />
        <div className="absolute inset-0 hidden dark:block bg-gradient-to-tl from-blue-900/20 via-transparent to-purple-900/20" />

        {/* Radial glow blobs */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-sky-300/15 dark:bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-pink-300/15 dark:bg-secondary/15 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[40%] right-[5%] w-[350px] h-[350px] bg-violet-200/12 dark:bg-accent/15 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: "3s" }} />

        {/* Geometric accents */}
        <div className="absolute top-[22%] left-[12%] w-16 h-16 border border-primary/15 dark:border-primary/25 rounded-2xl rotate-12 animate-float-slow hidden lg:block" />
        <div className="absolute bottom-[28%] right-[10%] w-12 h-12 border border-secondary/15 dark:border-secondary/25 rounded-full animate-float hidden lg:block" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[55%] left-[6%] w-10 h-10 border border-accent/12 dark:border-accent/20 rounded-xl -rotate-12 animate-float hidden lg:block" style={{ animationDelay: "2s" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <div className="text-center max-w-5xl mx-auto animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-white/70 dark:bg-white/5 backdrop-blur-sm text-primary text-sm font-medium rounded-full mb-6 border border-primary/20 dark:border-primary/30 shadow-sm">
              <img src="/Purdue.png" alt="Purdue" className="w-5 h-5 object-contain" />
              Purdue University in Indianapolis
            </span>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] mb-6 tracking-tight">
              <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Computer Science
              </span>
              <span className="block mt-1 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent dark:drop-shadow-[0_0_30px_rgba(124,198,254,0.3)]">
                Women&apos;s Network
              </span>
            </h1>

            <p className="text-lg md:text-xl text-text-light dark:text-text-dark-light leading-relaxed mb-8 max-w-2xl mx-auto">
              Empowering women to shape the future of tech through professional development,
              mentorship, and community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={DISCORD_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-9 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-dark transition-all duration-300 shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 active:translate-y-0"
              >
                Join Us
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <Link
                href="/events"
                className="inline-flex items-center justify-center px-9 py-4 bg-white/70 dark:bg-white/5 backdrop-blur-sm border-2 border-primary/20 dark:border-primary/30 text-primary font-semibold rounded-2xl hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
              >
                View Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="relative py-8 overflow-hidden -mt-10">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/60 via-white to-white dark:from-[#0a1020] dark:via-[#0c1225] dark:to-[#0a0f1e]" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/4 via-transparent to-secondary/4 dark:from-primary/6 dark:to-secondary/6" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary/10 dark:shadow-primary/20 border border-primary/15 dark:border-primary/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
              <AnimatedCounter end={75} suffix="+" label="Members" />
              <AnimatedCounter end={50} suffix="+" label="Events Hosted" />
              <AnimatedCounter end={5} suffix="+" label="Industry Partners" />
              <AnimatedCounter end={10} suffix="+" label="Guest Speakers" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="relative py-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 via-white to-sky-50/50 dark:from-purple-950/20 dark:via-[#0a0f1e] dark:to-blue-950/20" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-secondary/8 dark:bg-secondary/10 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-primary rounded-full" />
              <span className="px-5 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 text-primary text-sm font-bold rounded-full uppercase tracking-widest border border-primary/20 dark:border-primary/30">
                Our Mission
              </span>
              <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-secondary rounded-full" />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Building Community, Breaking Barriers
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="glass-card rounded-3xl p-8 md:p-10 shadow-lg shadow-primary/5 dark:shadow-primary/10 border border-white/60 dark:border-white/10">
              <p className="text-lg text-text-light dark:text-text-dark-light leading-relaxed mb-5">
                The Computer Science Women&apos;s Network (CSWN) at Purdue University in
                Indianapolis is dedicated to empowering women and allies in computing through
                professional development, technical growth, mentorship, leadership opportunities,
                networking, outreach, and community.
              </p>
              <p className="text-lg text-text-light dark:text-text-dark-light leading-relaxed mb-6">
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

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Growth", desc: "Develop your skills", image: "/mission-growth.jpeg" },
                { label: "Innovation", desc: "Push boundaries", image: "/mission-innovation.jpeg" },
                { label: "Connection", desc: "Build your network", image: "/mission-connection.jpeg" },
                { label: "Opportunity", desc: "Launch your career", image: "/mission-opportunity.jpeg" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="aspect-square rounded-2xl overflow-hidden relative hover-lift border border-white/40 dark:border-white/10 shadow-md group"
                >
                  <img
                    src={item.image}
                    alt={item.label}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm font-bold">{item.label}</p>
                    <p className="text-xs opacity-80 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Combined Garden + CTA Section */}
      <section className="relative py-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/30 to-rose-50/40 dark:from-[#0a0f1e] dark:via-[#0a1510] dark:to-[#120a18]" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-pink-100/30 to-transparent dark:from-purple-950/15 dark:to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            {/* CTA content */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="glass-card rounded-3xl p-8 md:p-10 shadow-xl shadow-secondary/5 dark:shadow-secondary/10 border border-white/60 dark:border-white/10">
                <h2 className="text-3xl md:text-4xl font-extrabold text-text dark:text-white mb-4 tracking-tight">
                  Watch Our Community{" "}
                  <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                    Bloom
                  </span>
                </h2>
                <p className="text-text-light dark:text-text-dark-light leading-relaxed mb-4">
                  Every visitor plants a flower in our garden. Each bloom represents someone
                  who found their way here — community, growth, and mentorship taking root.
                </p>
                <p className="text-sm text-text-lighter dark:text-text-dark-light mb-8 italic">
                  Ready to grow with us?
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href={DISCORD_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                  >
                    Join CSWN Today
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <Link
                    href="/sponsors"
                    className="inline-flex items-center justify-center px-7 py-3.5 bg-white/60 dark:bg-white/5 backdrop-blur-sm text-text dark:text-text-dark font-semibold rounded-xl border border-gray-200/60 dark:border-white/10 hover:border-primary/30 transition-all hover:-translate-y-0.5"
                  >
                    Partner With Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Garden */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <FlowerGarden />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
