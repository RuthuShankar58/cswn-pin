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
  {
    title: "Professional Development",
    description: "Resume workshops, mock interviews, career panels, and industry networking events that prepare members for successful careers.",
    icon: "📈",
  },
  {
    title: "Technical Workshops",
    description: "Hands-on coding sessions, hackathons, AI challenges, and technical skill-building opportunities.",
    icon: "💻",
  },
  {
    title: "Networking",
    description: "Connections with industry professionals, alumni, faculty, and peers through events, panels, and mentorship.",
    icon: "🌐",
  },
  {
    title: "Outreach",
    description: "Community engagement initiatives that inspire the next generation of women in STEM.",
    icon: "📢",
  },
  {
    title: "Leadership Development",
    description: "Committee roles, project leadership, and executive board opportunities to build real-world leadership experience.",
    icon: "👑",
  },
  {
    title: "Mentorship",
    description: "Peer mentoring, industry mentor matching, and alumni guidance to support members at every stage.",
    icon: "🧭",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About CSWN"
        subtitle="Empowering women and allies in computing since our founding at Purdue University Indianapolis."
        badge="Our Story"
      />

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text mb-6">Our Story</h2>
              <div className="space-y-4 text-text-light leading-relaxed">
                <p>
                  The Computer Science Women&apos;s Network (CSWN) was founded at Purdue University 
                  Indianapolis with a clear mission: to create a supportive community where women 
                  and allies in computing can thrive, grow, and succeed together.
                </p>
                <p>
                  What began as a small group of passionate students has grown into one of the 
                  premier technology organizations on campus, hosting dozens of events each year 
                  and connecting members with industry leaders across the country.
                </p>
                <p>
                  Today, CSWN serves over 150 members through speaker series, professional 
                  development workshops, technical competitions, networking events, and community 
                  celebrations. Our members go on to intern and work at leading technology companies, 
                  pursue graduate research, and become leaders in their fields.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">🎓</span>
                </div>
                <p className="text-text-light text-sm">CSWN at Purdue Indianapolis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-text mb-4">Our Mission</h3>
              <p className="text-text-light leading-relaxed">
                Empowering women and allies in computing through professional development, 
                technical growth, mentorship, leadership, networking, outreach, and community 
                at Purdue University Indianapolis.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-2xl font-bold text-text mb-4">Our Vision</h3>
              <p className="text-text-light leading-relaxed">
                A world where women are equally represented, supported, and celebrated in 
                technology — and where every student at Purdue Indianapolis has the resources, 
                community, and confidence to pursue their dreams in computing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">Core Values</h2>
            <p className="text-text-light max-w-2xl mx-auto">
              The principles that guide everything we do at CSWN.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value) => (
              <div key={value.title} className="p-6 bg-bg-alt rounded-xl">
                <span className="text-3xl mb-3 block">{value.icon}</span>
                <h3 className="font-semibold text-text mb-2">{value.title}</h3>
                <p className="text-sm text-text-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">What We Do</h2>
            <p className="text-text-light max-w-2xl mx-auto">
              CSWN provides comprehensive programming to support members at every stage of their journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeDo.map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">{item.icon}</span>
                </div>
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
