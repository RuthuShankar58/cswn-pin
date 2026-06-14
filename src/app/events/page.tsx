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

const pastEventHighlights = [
  {
    id: "halloween-crawl",
    title: "Halloween Crawl '25",
    description: "Hallway decorating competition between CoS and CoE, plus Halloween festivities across campus.",
    category: "social",
    image: null,
  },
  {
    id: "pie-an-officer",
    title: "Pie an Officer",
    description: "Members raised money and pied their favorite officers. A fan-favorite semester tradition.",
    category: "social",
    image: null,
  },
  {
    id: "breakfast-midnight",
    title: "Breakfast at Midnight",
    description: "Dead week survival with warm breakfast foods at midnight alongside CS Club members.",
    category: "social",
    image: null,
  },
  {
    id: "beyond-the-code",
    title: "Beyond the Code",
    description: "Prof. Smart talked CS careers beyond big tech — academia, research, ethics, and teaching.",
    category: "professional",
    image: null,
  },
  {
    id: "women-tech-panel",
    title: "Women in Tech Panel",
    description: "Professionals from Amway, Liberty Mutual, Eli Lilly, and more shared their paths into tech.",
    category: "professional",
    image: null,
  },
  {
    id: "b-involved-fair",
    title: "B-Involved Fair",
    description: "CSWN's booth at the university involvement fair — stickers, info tables, and new members.",
    category: "outreach",
    image: null,
  },
];

const collaborations = [
  { name: "CS Club", type: "Student Org" },
  { name: "CS CIEE", type: "Student Org" },
  { name: "Eli Lilly", type: "Industry" },
  { name: "Amway", type: "Industry" },
  { name: "Liberty Mutual", type: "Industry" },
  { name: "Brooksource", type: "Industry" },
  { name: "Purdue CS Dept.", type: "Academic" },
  { name: "Purdue Faculty", type: "Academic" },
];

const upcomingEvents = eventCalendar.filter((e) => !e.isPast);

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Events"
        subtitle="From speaker series to social nights — CSWN runs diverse programming every semester."
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

      {/* Past Event Highlights */}
      <section className="py-20 bg-bg-alt border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Past Events</p>
            <h2 className="text-2xl font-bold text-text">Highlights</h2>
            <p className="text-text-light text-sm mt-2">A look back at some of our favorite moments.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pastEventHighlights.map((event) => (
              <div
                key={event.id}
                className="bg-bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-colors group"
              >
                {/* Photo placeholder — swap src when photos are available */}
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center">
                  <span className="text-text-lighter text-xs">📷 Photo coming soon</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[event.category]}`}>
                      {event.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-text text-sm mb-1 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-xs text-text-light leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-sm text-text-light hover:text-primary transition-colors"
            >
              See full gallery
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="py-20 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Schedule</p>
            <h2 className="text-2xl font-bold text-text">Event calendar</h2>
          </div>

          <div className="max-w-3xl space-y-2">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map((event) => (
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
              ))
            ) : (
              <div className="bg-bg-card border border-border rounded-xl p-8 text-center">
                <p className="text-text-light text-sm">Upcoming events will be posted here. Follow us on Instagram for the latest.</p>
                <a
                  href="https://www.instagram.com/cswn.indy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-4 text-sm text-primary hover:text-primary-dark transition-colors font-medium"
                >
                  @cswn.indy ↗
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-16 bg-bg-alt border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Collaborations</p>
            <h2 className="text-2xl font-bold text-text">Who we&apos;ve worked with</h2>
            <p className="text-text-light text-sm mt-2">
              We&apos;ve partnered with companies, student orgs, and academic departments to bring our members bigger and better experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {collaborations.map((collab) => (
              <div key={collab.name} className="flex items-center gap-2 px-4 py-2 bg-bg-card border border-border rounded-lg hover:border-primary/30 transition-colors">
                <span className="text-sm font-medium text-text">{collab.name}</span>
                <span className="text-xs text-text-lighter">{collab.type}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-text-lighter mt-6">
            Interested in collaborating?{" "}
            <Link href="/contact" className="text-primary hover:text-primary-dark transition-colors">
              Get in touch →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
