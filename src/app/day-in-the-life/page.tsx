import PageHero from "@/components/PageHero";
import { speakers } from "@/data/speakers";
import Link from "next/link";

export default function DayInTheLifePage() {
  return (
    <>
      <PageHero
        title="Day in the Life"
        subtitle="Biweekly virtual sessions with industry professionals sharing real stories about life in tech."
        badge="Speaker Series"
      />

      {/* About the Series */}
      <section className="py-20 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">About the series</p>
              <h2 className="text-2xl font-bold text-text mb-4">How it works</h2>
              <div className="space-y-4 text-text-light text-sm leading-relaxed">
                <p>
                  Every two weeks, we invite accomplished women in technology to share their experiences through intimate 30-minute virtual conversations.
                </p>
                <p>
                  Each session covers three themes: what a typical workday looks like, what they love about being a woman in STEM, and advice for students entering tech.
                </p>
                <p>
                  It&apos;s honest, informal, and one of our members&apos; favorite recurring programs.
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
                { icon: "💡", title: "Advice for Students", desc: "Practical tips, mindset shifts, and career wisdom from people who've been there." },
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
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Our Speakers</p>
            <h2 className="text-2xl font-bold text-text">14 voices, 14 stories</h2>
            <p className="text-text-light text-sm mt-2">Accomplished professionals who&apos;ve shared their journeys with our community.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {speakers.map((speaker) => (
              <div key={speaker.id} className="bg-bg-card border border-border rounded-xl p-4 text-center hover:border-primary/40 transition-colors group">
                <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center">
                  {/* Replace with <Image> when speaker photos are added */}
                  <span className="text-lg">👩‍💼</span>
                </div>
                <h3 className="font-medium text-text text-xs leading-snug">{speaker.name}</h3>
                {speaker.company && <p className="text-xs text-primary mt-0.5">{speaker.company}</p>}
                {speaker.title && <p className="text-xs text-text-lighter mt-0.5">{speaker.title}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery — placeholder for event photos */}
      <section className="py-20 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Moments</p>
            <h2 className="text-2xl font-bold text-text">From past sessions</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-video bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-xl flex items-center justify-center"
              >
                <span className="text-text-lighter text-xs">📷 Session photo {i}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-text-lighter mt-6">
            Add photos by placing them in <code className="bg-bg-card px-1.5 py-0.5 rounded text-primary">/public/images/ditl/</code> and updating the gallery data.
          </p>
        </div>
      </section>

      {/* Apply to Speak */}
      <section className="py-16 bg-bg-alt border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-xl font-bold text-text mb-2">Want to be a speaker?</h2>
            <p className="text-text-light text-sm mb-6 leading-relaxed">
              We&apos;re always looking for inspiring women in tech to share their stories. If you&apos;re interested in joining a future session, reach out.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-bg font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm"
            >
              Apply to Speak
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
