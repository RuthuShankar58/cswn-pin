import PageHero from "@/components/PageHero";
import { recurringPrograms, eventCalendar } from "@/data/events";
import Link from "next/link";

const categoryColors: Record<string, string> = {
  meeting: "bg-blue-100 text-blue-700",
  speaker: "bg-purple-100 text-purple-700",
  social: "bg-pink-100 text-pink-700",
  professional: "bg-green-100 text-green-700",
  competition: "bg-orange-100 text-orange-700",
  outreach: "bg-teal-100 text-teal-700",
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">Our Programs</h2>
            <p className="text-text-light max-w-2xl mx-auto">
              CSWN runs a diverse set of recurring programs throughout the academic year.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recurringPrograms.map((program) => (
              <div
                key={program.id}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all group"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center">
                  <span className="text-text-lighter text-xs">Event Photo</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[program.category]}`}>
                      {program.category}
                    </span>
                    <span className="text-xs text-text-lighter">{program.frequency}</span>
                  </div>
                  <h3 className="font-semibold text-text mb-2 group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-sm text-text-light leading-relaxed line-clamp-3">
                    {program.description}
                  </p>
                  {program.format && (
                    <p className="text-xs text-text-lighter mt-3">
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
      <section className="py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">Event Calendar</h2>
            <p className="text-text-light max-w-2xl mx-auto">
              Stay up to date with all upcoming CSWN events and activities.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-3">
              {eventCalendar.map((event) => (
                <div
                  key={event.id}
                  className="bg-white p-5 rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-sm transition-all flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-16 text-center">
                    <p className="text-xs text-text-lighter font-medium uppercase">
                      {event.date.split(" ")[0]}
                    </p>
                    <p className="text-2xl font-bold text-primary">
                      {event.date.split(" ")[1]}
                    </p>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-text text-sm">{event.title}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${categoryColors[event.category]}`}>
                        {event.category}
                      </span>
                    </div>
                    <p className="text-sm text-text-light">{event.description}</p>
                    {event.location && (
                      <p className="text-xs text-text-lighter mt-1">📍 {event.location}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Event Gallery Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">Event Highlights</h2>
            <p className="text-text-light max-w-2xl mx-auto">
              Moments captured from past CSWN events.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-xl flex items-center justify-center"
              >
                <span className="text-text-lighter text-xs">Photo {i}</span>
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

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-text mb-4">Don&apos;t Miss Out</h2>
          <p className="text-text-light mb-6">
            Follow us on social media and join CSWN to stay updated on all upcoming events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
            >
              Join CSWN
            </Link>
            <a
              href="https://www.instagram.com/cswn.indy/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-text font-semibold rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
