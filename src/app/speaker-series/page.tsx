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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text mb-6">About the Series</h2>
              <div className="space-y-4 text-text-light leading-relaxed">
                <p>
                  The &quot;Day in the Life&quot; Speaker Series is CSWN&apos;s flagship professional 
                  development program. Every two weeks, we invite accomplished women in technology 
                  to share their experiences through intimate, 30-minute virtual conversations.
                </p>
                <p>
                  Each session explores three key themes: what a typical day in their role looks 
                  like, what they love about being a woman in STEM, and what advice they would 
                  give young women to encourage them in the tech industry.
                </p>
                <p>
                  These candid conversations provide members with realistic insights into tech 
                  careers, role models to look up to, and actionable advice for their own journeys.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-bg-alt rounded-xl">
                  <p className="text-2xl font-bold text-primary">30</p>
                  <p className="text-xs text-text-light">Minutes</p>
                </div>
                <div className="text-center p-4 bg-bg-alt rounded-xl">
                  <p className="text-2xl font-bold text-primary">Bi-weekly</p>
                  <p className="text-xs text-text-light">Frequency</p>
                </div>
                <div className="text-center p-4 bg-bg-alt rounded-xl">
                  <p className="text-2xl font-bold text-primary">Virtual</p>
                  <p className="text-xs text-text-light">Format</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 flex items-center justify-center aspect-[4/3]">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">🎤</span>
                </div>
                <p className="text-text-light text-sm">Speaker Series Session</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">What You&apos;ll Learn</h2>
            <p className="text-text-light max-w-2xl mx-auto">
              Each session is structured around three powerful questions that give students 
              real insight into tech careers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="font-semibold text-text mb-3">A Day in Their Role</h3>
              <p className="text-sm text-text-light leading-relaxed">
                What does a typical day look like? Understanding daily responsibilities, 
                team dynamics, and work culture across different tech roles.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center">
              <div className="w-16 h-16 bg-secondary/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">💜</span>
              </div>
              <h3 className="font-semibold text-text mb-3">Being a Woman in STEM</h3>
              <p className="text-sm text-text-light leading-relaxed">
                What do they love about their experience? Hearing authentic stories about 
                the joys, challenges, and unique perspectives women bring to tech.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="font-semibold text-text mb-3">Advice for Young Women</h3>
              <p className="text-sm text-text-light leading-relaxed">
                What encouragement and guidance would they share? Practical tips, mindset 
                shifts, and career wisdom from those who&apos;ve been there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">Our Speakers</h2>
            <p className="text-text-light max-w-2xl mx-auto">
              Accomplished professionals from across the technology industry who share their 
              experiences and wisdom with our community.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {speakers.map((speaker) => (
              <div
                key={speaker.id}
                className="text-center group"
              >
                <div className="w-24 h-24 mx-auto mb-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                  <span className="text-2xl">👩‍💼</span>
                </div>
                <h3 className="font-semibold text-sm text-text">{speaker.name}</h3>
                {speaker.title && (
                  <p className="text-xs text-text-light mt-1">{speaker.title}</p>
                )}
                {speaker.company && (
                  <p className="text-xs text-primary mt-0.5">{speaker.company}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recordings */}
      <section className="py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">Past Recordings</h2>
            <p className="text-text-light max-w-2xl mx-auto">
              Missed a session? Catch up on past speaker conversations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm text-text">Speaker Session {i}</h3>
                  <p className="text-xs text-text-light mt-1">Recording coming soon</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaker Application */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-text mb-4">Interested in Speaking?</h2>
            <p className="text-text-light mb-6 max-w-xl mx-auto">
              We&apos;re always looking for inspiring women in tech to share their stories with our 
              community. If you&apos;d like to be a guest speaker, we&apos;d love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
            >
              Apply to Speak
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
