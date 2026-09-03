import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { openRoles } from "@/data/team";
import { PHOTOS } from "@/data/photos";

export const metadata: Metadata = {
  title: "Join CSWN",
  description:
    "How to get involved with CSWN — follow along, join the Discord, come to an event, and apply for an officer role.",
};

const steps = [
  {
    n: "1",
    title: "Register on BoilerLink",
    body: "Join the CSWN organization on BoilerLink so you're on the roster and get official updates.",
    cta: { label: "Open BoilerLink", href: "https://boilerlink.purdue.edu/organization/cswnindy" },
  },
  {
    n: "2",
    title: "Join the Discord",
    body: "This is where event reminders, resources, and day-to-day conversation happen.",
    cta: { label: "Join the Discord", href: "https://discord.gg/6kWvVBEzQ" },
  },
  {
    n: "3",
    title: "Follow @cswnindy",
    body: "Instagram has the flyers, dates, and locations for everything on the calendar.",
    cta: { label: "Follow on Instagram", href: "https://www.instagram.com/cswnindy/" },
  },
  {
    n: "4",
    title: "Show up to an event",
    body: "Coffee & Chat or a Day in the Life talk are easy first ones. No sign-up needed.",
    cta: { label: "See the calendar", href: "/events" },
  },
];

const reasons = [
  "Career workshops with HR pros and recruiters from partner companies",
  "A biweekly speaker series with women working in tech",
  "Internship and mentor connections through partners like Eli Lilly and Amway",
  "A friendly group to study, build projects, and survive finals with",
];

export default function JoinPage() {
  return (
    <>
      <PageHero
        badge="Get involved"
        title="Joining takes about five minutes"
        subtitle="There's no application to be a member — just get on the lists and come to something."
      />

      {/* Why */}
      <section className="section">
        <div className="container-page grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div data-reveal>
            <h2 className="text-2xl font-bold">Why join</h2>
            <p className="mt-3 text-text-muted">
              CSWN is most useful if you use it — here&apos;s what members get
              out of it.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="relative aspect-square overflow-hidden rounded-xl border border-border bg-bg-subtle">
                <Image
                  src={PHOTOS.networking.src}
                  alt={PHOTOS.networking.alt}
                  fill
                  sizes="(max-width: 768px) 45vw, 22vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl border border-border bg-bg-subtle">
                <Image
                  src={PHOTOS.paintBoba.src}
                  alt={PHOTOS.paintBoba.alt}
                  fill
                  sizes="(max-width: 768px) 45vw, 22vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <ul className="space-y-3" data-reveal>
            {reasons.map((r) => (
              <li key={r} className="flex gap-3 text-text-muted">
                <span className="mt-1 font-bold text-accent">→</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Steps */}
      <section className="section border-t border-border bg-bg-subtle">
        <div className="container-page">
          <div data-reveal>
            <p className="eyebrow mb-3">How to join</p>
            <h2 className="text-2xl font-bold md:text-3xl">Four steps</h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {steps.map((s, i) => {
              const external = s.cta.href.startsWith("http");
              return (
                <div
                  key={s.n}
                  className="card card-hover flex flex-col p-6"
                  data-reveal
                  style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-sm font-bold text-accent-contrast dark:text-[#12101a]">
                    {s.n}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                    {s.body}
                  </p>
                  {external ? (
                    <a
                      href={s.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline mt-5 self-start"
                    >
                      {s.cta.label}
                    </a>
                  ) : (
                    <Link href={s.cta.href} className="btn btn-outline mt-5 self-start">
                      {s.cta.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Officer roles */}
      <section className="section">
        <div className="container-page">
          <div data-reveal>
            <p className="eyebrow mb-3">Go further</p>
            <h2 className="text-2xl font-bold md:text-3xl">
              Apply for an officer role
            </h2>
            <p className="mt-3 max-w-2xl text-text-muted">
              We&apos;re filling several board positions right now. Each has its
              own application form.
            </p>
          </div>

          <div className="mt-8 divide-y divide-border overflow-hidden rounded-xl border border-border bg-bg-card" data-reveal>
            {openRoles.map((r) => (
              <div
                key={r.id}
                className="flex flex-col gap-3 p-5 transition-colors hover:bg-accent-soft/60 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-medium">{r.title}</p>
                  <p className="mt-0.5 text-sm text-text-muted">{r.blurb}</p>
                </div>
                <a
                  href={r.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary shrink-0 self-start sm:self-auto"
                >
                  Apply
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
