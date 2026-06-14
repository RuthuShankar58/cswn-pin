import PageHero from "@/components/PageHero";
import { recurringPrograms, eventCalendar } from "@/data/events";
import Link from "next/link";

const categoryColors: Record<string, string> = {
  meeting: "text-blue-400 bg-blue-400/10",
  speaker: "text-purple-400 bg-purple-400/10",
  social: "text-pink-400 bg-pink-400/10",
  professional: "text-green-400 bg-green-400/10",
  competition: "text-orange-400 bg-orange-400/10",
  outreach: "text-teal-400 bg-teal-400/10",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Events"
        subtitle="From speaker series to hackathons — CSWN offers diverse programming to support your growth."
        badge="Programming"
      />

      {/* Recurring Programs */}
      <section className="py-20 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Recurring</p>
            <h2 className="text-2xl font-bold text-text">Our programs</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recurringPrograms.map((program) => (
              <div
                key={program.id}
                className="bg-bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors group"
              >
                <div className="flex items-center gap-2 mb-3">
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
                  <p className="text-xs text-text-lighter mt-3">📍 {program.format}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="py-20 bg-bg-alt border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Schedule</p>
            <h2 className="text-2xl font-bold text-text">Event calendar</h2>
          </div>

          <div className="max-w-3xl space-y-2">
            {eventCalendar.map((event) => (
              <div
                key={event.id}
                className="bg-bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition-colors flex items-start gap-5"
              >
                <div className="flex-shrink-0 w-14 text-center">
                  <p className="text-xs text-text-lighter font-medium uppercase">
                    {event.date.split(" ")[0]}
                  </p>
                  <p className="text-2xl font-bold text-primary leading-tight">
                    {event.date.split(" ")[1]}
                  </p>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
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
      </section>

      {/* CTA */}
      <section className="py-16 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-text-light mb-4 text-sm">Stay updated on all upcoming events.</p>
          <div className="flex gap-4">
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-bg font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm"
            >
              Join CSWN
            </Link>
            <a
              href="https://www.instagram.com/cswn.indy/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 border border-border text-text-light font-medium rounded-lg hover:border-primary/50 hover:text-text transition-colors text-sm"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
