import Link from "next/link";
import AnimatedCounter from "@/components/AnimatedCounter";
import { STATS } from "@/data/site";
import { partners } from "@/data/sponsors";
import { programs, upcomingEvents, categoryLabel } from "@/data/events";

const pillars = [
  {
    title: "Professional growth",
    body: "Resume and LinkedIn workshops, mock interviews, career-fair prep, and a flagship Women in Tech Panel with industry partners.",
  },
  {
    title: "Mentorship & speakers",
    body: "Our biweekly Day in the Life series brings women in tech to talk candidly about their roles, paths, and advice.",
  },
  {
    title: "Community",
    body: "Paint & boba nights, socials with the CS Club, and a Discord where members swap notes, referrals, and encouragement.",
  },
];

export default function HomePage() {
  const nextThree = upcomingEvents.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="container-page py-20 md:py-28">
          <div className="max-w-3xl rise">
            <p className="eyebrow mb-4">Purdue University in Indianapolis</p>
            <h1 className="text-4xl font-bold leading-[1.05] md:text-6xl">
              Computer Science
              <br />
              Women&apos;s Network
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted">
              A community for women and allies in computing — mentorship, career
              workshops, speakers, and the people who make a CS degree a lot less
              lonely.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/join" className="btn btn-primary">
                Join CSWN
              </Link>
              <Link href="/events" className="btn btn-outline">
                See upcoming events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-bg-subtle">
        <div className="container-page grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          {STATS.map((s) => (
            <AnimatedCounter
              key={s.label}
              end={s.value}
              suffix={s.suffix}
              label={s.label}
            />
          ))}
        </div>
      </section>

      {/* What we do */}
      <section className="section">
        <div className="container-page">
          <p className="eyebrow mb-3">What we do</p>
          <h2 className="max-w-2xl text-2xl font-bold md:text-3xl">
            Three things, done consistently
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="card p-6">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/about"
              className="text-sm font-semibold text-accent hover:underline"
            >
              More about CSWN →
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming */}
      <section className="section border-t border-border bg-bg-subtle">
        <div className="container-page">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow mb-3">Coming up</p>
              <h2 className="text-2xl font-bold md:text-3xl">Next few events</h2>
            </div>
            <Link
              href="/events"
              className="shrink-0 text-sm font-semibold text-accent hover:underline"
            >
              Full calendar →
            </Link>
          </div>

          <ul className="mt-8 divide-y divide-border overflow-hidden rounded-xl border border-border bg-bg-card">
            {nextThree.map((e) => (
              <li key={e.id} className="flex items-center gap-5 p-5">
                <div className="flex w-14 shrink-0 flex-col items-center rounded-lg bg-bg-subtle py-2">
                  <span className="text-[11px] font-semibold uppercase text-text-muted">
                    {e.month}
                  </span>
                  <span className="text-lg font-bold leading-none">{e.day}</span>
                </div>
                <div className="min-w-0">
                  <p className="truncate font-medium">{e.title}</p>
                  <p className="mt-0.5 text-xs text-text-muted">
                    {categoryLabel[e.category]}
                    {e.note ? ` · ${e.note}` : ""}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Programs quick list */}
      <section className="section">
        <div className="container-page">
          <p className="eyebrow mb-3">Recurring programs</p>
          <div className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {programs.map((p) => (
              <div key={p.id} className="border-l-2 border-border pl-4">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-text-muted">{p.cadence}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="border-t border-border bg-bg-subtle py-12">
        <div className="container-page">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-text-muted">
            Partners &amp; sponsors of CSWN events
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {partners.map((p) => (
              <span key={p.id} className="text-sm font-medium text-text-muted">
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-page">
          <div className="card flex flex-col items-start gap-4 p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-bold md:text-2xl">
                Come to one event. That&apos;s it.
              </h2>
              <p className="mt-2 text-sm text-text-muted">
                No application, no pressure. Join the Discord and show up when
                something looks good.
              </p>
            </div>
            <Link href="/join" className="btn btn-primary shrink-0">
              How to join
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
