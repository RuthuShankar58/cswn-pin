import PageHero from "@/components/PageHero";
import { speakers } from "@/data/speakers";
import Link from "next/link";

export default function SpeakerSeriesPage() {
  return (
    <>
      <PageHero
        title="Day in the Life Speaker Series"
        subtitle="Our flagship program connecting students with industry professionals through intimate, virtual conversations about life in tech."
        badge="Flagship Program"
      />

      {/* Program Overview */}
      <section className="py-20 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">About the series</p>
              <h2 className="text-2xl font-bold text-text mb-4">How it works</h2>
              <div className="space-y-4 text-text-light text-sm leading-relaxed">
                <p>
                  Every two weeks, we invite accomplished women in technology to share their experiences through intimate, 30-minute virtual conversations.
                </p>
                <p>
                  Each session explores three themes: what a typical day looks like, what they love about being a woman in STEM, and what advice they&apos;d give to young women entering tech.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-8">
                {[
                  { value: "30 min", label: "Per session" },
                  { value: "Biweekly", label: "Frequency" },
                  { value: "Virtual", label: "Format" },
                ].map((s) => (
                  <div key={s.label} className="bg-bg-card border border-border rounded-xl p-4 text-center">
                    <p className="font-bold text-primary text-sm">{s.value}</p>
                    <p className="text-xs text-text-lighter mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {[
                { icon: "🏢", title: "A Day in Their Role", desc: "Daily responsibilities, team dynamics, and work culture across different tech roles." },
                { icon: "💜", title: "Being a Woman in STEM", desc: "Authentic stories about the joys, challenges, and unique perspectives women bring to tech." },
                { icon: "💡", title: "Advice for Young Women", desc: "Practical tips, mindset shifts, and career wisdom from those who've been there." },
              ].map((item) => (
                <div key={item.title} className="bg-bg-card border border-border rounded-xl p-5 flex gap-4">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-text text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-text-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="py-20 bg-bg-alt border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Speakers</p>
            <h2 className="text-2xl font-bold text-text">Our speakers</h2>
            <p className="text-text-light text-sm mt-2">14 accomplished professionals who've shared their stories with our community.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {speakers.map((speaker) => (
              <div key={speaker.id} className="bg-bg-card border border-border rounded-xl p-4 text-center hover:border-primary/40 transition-colors group">
                <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-lg">👩‍💼</span>
                </div>
                <h3 className="font-medium text-text text-xs leading-snug">{speaker.name}</h3>
                {speaker.company && <p className="text-xs text-primary mt-0.5">{speaker.company}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interested in speaking */}
      <section className="py-16 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-text mb-2">Interested in speaking?</h2>
          <p className="text-text-light text-sm mb-6 max-w-lg">
            We&apos;re always looking for inspiring women in tech to share their stories. If you&apos;d like to be a guest speaker, we&apos;d love to hear from you.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-bg font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm">
            Apply to Speak
          </Link>
        </div>
      </section>
    </>
  );
}
