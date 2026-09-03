import PageHero from "@/components/PageHero";
import { recurringPrograms, eventCalendar } from "@/data/events";
import Link from "next/link";

const categoryColors: Record<string, string> = {
  meeting: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  speaker: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  social: "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300",
  professional: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  competition: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  outreach: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Events"
        subtitle="From speaker series to hackathons, CSWN offers diverse programming to support your professional and personal growth."
        badge="Programming"
      />

      {/* Recurring Programs */}
      <section className="py-20 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text dark:text-text-dark mb-4">Our Programs</h2>
            <p className="text-text-light dark:text-text-dark-light max-w-2xl mx-auto">
              CSWN runs a diverse set of recurring programs throughout the academic year.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recurringPrograms.map((program) => (
              <div
                key={program.id}
                className="glass-card rounded-xl overflow-hidden hover-lift group"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 dark:from-primary/20 dark:via-secondary/20 dark:to-accent/20 flex items-center justify-center">
                  <span className="text-text-lighter dark:text-text-dark-light text-xs">Event Photo</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[program.category]}`}>
                      {program.category}
                    </span>
                    <span className="text-xs text-text-lighter dark:text-text-dark-light">{program.frequency}</span>
                  </div>
                  <h3 className="font-semibold text-text dark:text-text-dark mb-2 group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-sm text-text-light dark:text-text-dark-light leading-relaxed line-clamp-3">
                    {program.description}
                  </p>
                  {program.format && (
                    <p className="text-xs text-text-lighter dark:text-text-dark-light mt-3">
                      📍 {program.format}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="py-20 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text dark:text-text-dark mb-4">Event Calendar</h2>
            <p className="text-text-light dark:text-text-dark-light max-w-2xl mx-auto">
              Stay up to date with all upcoming CSWN events and activities.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-3">
              {eventCalendar.map((event) => (
                <div
                  key={event.id}
                  className="glass-card p-5 rounded-xl hover-lift flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-16 text-center">
                    <p className="text-xs text-text-lighter dark:text-text-dark-light font-medium uppercase">
                      {event.date.split(" ")[0]}
                    </p>
                    <p className="text-2xl font-bold text-primary">
                      {event.date.split(" ")[1]}
                    </p>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-text dark:text-text-dark text-sm">{event.title}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${categoryColors[event.category]}`}>
                        {event.category}
                      </span>
                    </div>
                    <p className="text-sm text-text-light dark:text-text-dark-light">{event.description}</p>
                    {event.location && (
                      <p className="text-xs text-text-lighter dark:text-text-dark-light mt-1">📍 {event.location}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Event Gallery Preview */}
      <section className="py-20 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text dark:text-text-dark mb-4">Event Highlights</h2>
            <p className="text-text-light dark:text-text-dark-light max-w-2xl mx-auto">
              Moments captured from past CSWN events.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 dark:from-primary/20 dark:via-secondary/20 dark:to-accent/20 rounded-xl flex items-center justify-center hover-lift border border-white/50 dark:border-white/10"
              >
                <span className="text-text-lighter dark:text-text-dark-light text-xs">Photo {i}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/portal"
              className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group"
            >
              View Full Gallery
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 dark:from-primary/5 dark:via-secondary/5 dark:to-accent/5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-4">Don&apos;t Miss Out</h2>
          <p className="text-text-light dark:text-text-dark-light mb-6">
            Follow us on social media and join CSWN to stay updated on all upcoming events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/portal"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 hover:-translate-y-0.5"
            >
              Join CSWN
            </Link>
            <a
              href="https://www.instagram.com/cswn.indy/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 glass-card text-text dark:text-text-dark font-semibold rounded-xl hover:bg-white/80 dark:hover:bg-white/10 transition-all hover:-translate-y-0.5"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
