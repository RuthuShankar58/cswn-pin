import PageHero from "@/components/PageHero";
import Link from "next/link";

const coreValues = [
  { title: "Empowerment", icon: "💜" },
  { title: "Community", icon: "🤝" },
  { title: "Growth", icon: "🌱" },
  { title: "Leadership", icon: "🔥" },
  { title: "Inclusivity", icon: "⭐" },
  { title: "Excellence", icon: "🎯" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About CSWN"
        subtitle="Empowering women and allies in computing at Purdue University Indianapolis."
        badge="Our Story"
      />

      {/* Story + Stats */}
      <section className="py-20 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-2xl font-bold text-text mb-5">Who we are</h2>
              <div className="space-y-4 text-text-light leading-relaxed text-sm">
                <p>
                  The Computer Science Women&apos;s Network (CSWN) was founded in 2024 to build a supportive
                  community for women in CS and tech at Purdue Indianapolis.
                </p>
                <p>
                  We run workshops, speaker series, social events, and industry partnerships — all designed
                  to help our members grow professionally and personally.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-bg font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm"
                >
                  Get Involved
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "100+", label: "Members" },
                { value: "15+", label: "Events/Semester" },
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
      <section className="py-16 bg-bg-alt border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border rounded-xl p-8">
              <h3 className="text-lg font-bold text-text mb-3">Our Mission</h3>
              <p className="text-text-light text-sm leading-relaxed">
                Empower women and allies in computing through professional development,
                technical growth, mentorship, and community at Purdue Indianapolis.
              </p>
            </div>
            <div className="bg-bg-card border border-border rounded-xl p-8">
              <h3 className="text-lg font-bold text-text mb-3">Our Vision</h3>
              <p className="text-text-light text-sm leading-relaxed">
                A campus where women are equally represented and celebrated in tech —
                where every student has the resources and community to thrive in computing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Values</p>
            <h2 className="text-2xl font-bold text-text">What we stand for</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {coreValues.map((value) => (
              <div key={value.title} className="flex items-center gap-2 px-4 py-2.5 bg-bg-card border border-border rounded-xl">
                <span className="text-base">{value.icon}</span>
                <span className="text-sm font-medium text-text">{value.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
