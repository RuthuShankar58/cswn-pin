import Link from "next/link";
import Image from "next/image";
import AnimatedCounter from "@/components/AnimatedCounter";
import Gallery from "@/components/Gallery";
import { STATS } from "@/data/site";
import { partners } from "@/data/sponsors";
import { programs, upcomingEvents, categoryLabel } from "@/data/events";
import { PHOTOS, galleryPhotos } from "@/data/photos";

const pillars = [
  {
    title: "Professional growth",
    body: "Resume and LinkedIn workshops, mock interviews, career-fair prep, and a flagship Women in Tech Panel with industry partners.",
    photo: PHOTOS.careerTrip,
  },
  {
    title: "Mentorship & speakers",
    body: "Our biweekly Day in the Life series brings women in tech to talk candidly about their roles, paths, and advice.",
    photo: PHOTOS.talk,
  },
  {
    title: "Community",
    body: "Paint & boba nights, socials with the CS Club, and a Discord where members swap notes, referrals, and encouragement.",
    photo: PHOTOS.socialFood,
  },
];

export default function HomePage() {
  const nextThree = upcomingEvents.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="dotgrid relative overflow-hidden border-b border-border">
        <div className="glow glow-violet -left-32 -top-40 h-[26rem] w-[26rem]" />
        <div className="glow glow-pink right-0 top-10 h-80 w-80 md:right-40" />
        <div className="container-page grid items-center gap-12 py-20 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4 rise">Purdue University in Indianapolis</p>
            <h1 className="rise text-4xl font-bold leading-[1.05] md:text-6xl" style={{ animationDelay: "60ms" }}>
              Computer Science
              <br />
              <span className="gradient-text">Women&apos;s Network</span>
            </h1>
            <p
              className="rise mt-6 max-w-xl text-lg leading-relaxed text-text-muted"
              style={{ animationDelay: "120ms" }}
            >
              A community for women and allies in computing — mentorship, career
              workshops, speakers, and the people who make a CS degree a lot less
              lonely.
            </p>
            <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "180ms" }}>
              <Link href="/join" className="btn btn-primary">
                Join CSWN
              </Link>
              <Link href="/events" className="btn btn-outline">
                See upcoming events
              </Link>
            </div>
          </div>

          {/* Photo cluster */}
          <div className="rise relative hidden lg:block" style={{ animationDelay: "220ms" }}>
            <div className="relative aspect-[4/3] rotate-1 overflow-hidden rounded-2xl border border-border shadow-xl">
              <Image
                src={PHOTOS.talk.src}
                alt={PHOTOS.talk.alt}
                fill
                sizes="45vw"
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute -top-8 -left-8 aspect-square w-40 -rotate-3 overflow-hidden rounded-xl border-4 border-bg shadow-lg">
              <Image
                src={PHOTOS.paintGroup.src}
                alt={PHOTOS.paintGroup.alt}
                fill
                sizes="160px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-bg-subtle">
        <div
          className="container-page grid grid-cols-2 gap-8 py-14 md:grid-cols-4"
          data-reveal
        >
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
          <div data-reveal>
            <p className="eyebrow mb-3">What we do</p>
            <h2 className="max-w-2xl text-2xl font-bold md:text-3xl">
              Three things, done consistently
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="card card-hover overflow-hidden"
                data-reveal
                style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              >
                <div className="relative h-40 border-b border-border bg-bg-subtle">
                  <Image
                    src={p.photo.src}
                    alt={p.photo.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8" data-reveal>
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
          <div className="flex items-end justify-between gap-4" data-reveal>
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

          <ul
            className="mt-8 divide-y divide-border overflow-hidden rounded-xl border border-border bg-bg-card"
            data-reveal
          >
            {nextThree.map((e) => (
              <li
                key={e.id}
                className="flex items-center gap-5 p-5 transition-colors hover:bg-accent-soft/60"
              >
                <div className="flex w-14 shrink-0 flex-col items-center rounded-lg bg-gradient-to-br from-accent to-accent-2 py-2 text-accent-contrast dark:text-[#12101a]">
                  <span className="text-[11px] font-semibold uppercase opacity-80">
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
          <p className="eyebrow mb-3" data-reveal>
            Recurring programs
          </p>
          <div className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {programs.map((p, i) => (
              <div
                key={p.id}
                className="relative pl-4 before:absolute before:inset-y-1 before:left-0 before:w-[3px] before:rounded-full before:bg-gradient-to-b before:from-accent before:to-accent-2"
                data-reveal
                style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
              >
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-text-muted">{p.cadence}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSWN in action */}
      <section className="section border-t border-border">
        <div className="container-page">
          <div data-reveal>
            <p className="eyebrow mb-3">CSWN in action</p>
            <h2 className="text-2xl font-bold md:text-3xl">A year in photos</h2>
          </div>
          <Gallery photos={galleryPhotos} className="mt-10" />
        </div>
      </section>

      {/* Partners */}
      <section className="border-t border-border bg-bg-subtle py-14">
        <div className="container-page" data-reveal>
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
          <div
            className="dotgrid relative overflow-hidden rounded-2xl border border-accent/25 bg-accent-soft p-8 md:p-10"
            data-reveal
          >
            <div className="glow glow-pink -right-16 -top-16 h-56 w-56" />
            <div className="relative flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
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
        </div>
      </section>
    </>
  );
}
