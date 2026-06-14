import PageHero from "@/components/PageHero";

const coreValues = [
  { title: "Empowerment", description: "We uplift women and allies to reach their full potential in technology.", icon: "💪" },
  { title: "Community", description: "We foster a welcoming, inclusive space where everyone belongs.", icon: "🤝" },
  { title: "Excellence", description: "We pursue the highest standards in everything we do.", icon: "⭐" },
  { title: "Growth", description: "We champion continuous learning and professional development.", icon: "🌱" },
  { title: "Leadership", description: "We develop confident leaders who drive change in the industry.", icon: "🔥" },
  { title: "Inclusivity", description: "We welcome all students who support women in computing.", icon: "💜" },
];

const whatWeDo = [
  { title: "Professional Development", description: "Resume workshops, mock interviews, career panels, and industry networking that prepare members for successful careers.", icon: "📈" },
  { title: "Technical Workshops", description: "Hands-on coding sessions, hackathons, AI challenges, and technical skill-building opportunities.", icon: "💻" },
  { title: "Networking", description: "Connections with industry professionals, alumni, faculty, and peers through events, panels, and mentorship.", icon: "🌐" },
  { title: "Outreach", description: "Community engagement initiatives that inspire the next generation of women in STEM.", icon: "📢" },
  { title: "Leadership Development", description: "Committee roles, project leadership, and executive board opportunities to build real-world leadership experience.", icon: "👑" },
  { title: "Mentorship", description: "Peer mentoring, industry mentor matching, and alumni guidance to support members at every stage.", icon: "🧭" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About CSWN"
        subtitle="Empowering women and allies in computing at Purdue University Indianapolis."
        badge="Our Story"
      />

      {/* Our Story */}
      <section className="py-20 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl font-bold text-text mb-6">Our Story</h2>
              <div className="space-y-4 text-text-light leading-relaxed text-sm">
                <p>
                  The Computer Science Women&apos;s Network (CSWN) at Purdue University Indianapolis was founded in 2024 with a clear mission: to extend the support and opportunities of CSWN to women in CS and tech in the Indianapolis area.
                </p>
                <p>
                  What started as a vision to bridge the gap between campuses has grown into an active community organizing workshops, speaker series, hackathons, and social events that connect students with industry leaders and peers.
                </p>
                <p>
                  Today, CSWN Indy serves 100+ members through professional development, technical growth, mentorship, and community — all tailored to the unique needs of students at Purdue Indianapolis.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "100+", label: "Members" },
                { value: "15+", label: "Events/semester" },
                { value: "6", label: "Partners" },
                { value: "2024", label: "Founded" },
              ].map((s) => (
                <div key={s.label} className="bg-bg-card border border-border rounded-xl p-6 text-center">
                  <p className="text-3xl font-bold text-primary mb-1">{s.value}</p>
                  <p className="text-xs text-text-light">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-bg-alt border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border rounded-xl p-8">
              <span className="text-2xl mb-4 block">🎯</span>
              <h3 className="text-xl font-bold text-text mb-3">Our Mission</h3>
              <p className="text-text-light text-sm leading-relaxed">
                Empowering women and allies in computing through professional development,
                technical growth, mentorship, leadership, networking, outreach, and community
                at Purdue University Indianapolis.
              </p>
            </div>
            <div className="bg-bg-card border border-border rounded-xl p-8">
              <span className="text-2xl mb-4 block">🌟</span>
              <h3 className="text-xl font-bold text-text mb-3">Our Vision</h3>
              <p className="text-text-light text-sm leading-relaxed">
                A world where women are equally represented, supported, and celebrated in
                technology — and where every student at Purdue Indianapolis has the resources,
                community, and confidence to pursue their dreams in computing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Values</p>
            <h2 className="text-2xl font-bold text-text">What we stand for</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreValues.map((value) => (
              <div key={value.title} className="p-6 bg-bg-card border border-border rounded-xl">
                <span className="text-2xl mb-3 block">{value.icon}</span>
                <h3 className="font-semibold text-text mb-1">{value.title}</h3>
                <p className="text-sm text-text-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-bg-alt border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Programming</p>
            <h2 className="text-2xl font-bold text-text">What we do</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whatWeDo.map((item) => (
              <div key={item.title} className="bg-bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors">
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <h3 className="font-semibold text-text mb-2">{item.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
