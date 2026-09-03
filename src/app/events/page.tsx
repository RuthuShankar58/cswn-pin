import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import {
  programs,
  upcomingEvents,
  pastTerms,
  categoryLabel,
} from "@/data/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "CSWN's recurring programs, this semester's schedule, and highlights from past terms.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        badge="Events"
        title="What's happening at CSWN"
        subtitle="Biweekly speakers, career workshops, technical challenges, and socials. Follow @cswnindy on Instagram for the latest details and locations."
      />

      {/* This semester */}
      <section className="section">
        <div className="container-page">
          <p className="eyebrow mb-3">This semester</p>
          <h2 className="text-2xl font-bold md:text-3xl">Schedule</h2>

          <ul className="mt-8 divide-y divide-border overflow-hidden rounded-xl border border-border bg-bg-card">
            {upcomingEvents.map((e) => (
              <li key={e.id} className="flex items-center gap-5 p-5">
                <div className="flex w-14 shrink-0 flex-col items-center rounded-lg bg-bg-subtle py-2">
                  <span className="text-[11px] font-semibold uppercase text-text-muted">
                    {e.month}
                  </span>
                  <span className="text-lg font-bold leading-none">{e.day}</span>
                </div>
                <div className="min-w-0">
                  <p className="font-medium">{e.title}</p>
                  <p className="mt-0.5 text-xs text-text-muted">
                    <span className="text-accent">
                      {categoryLabel[e.category]}
                    </span>
                    {e.note ? ` · ${e.note}` : ""}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-text-muted">
            Dates and speakers can shift — check Instagram or BoilerLink to
            confirm.
          </p>
        </div>
      </section>

      {/* Recurring programs */}
      <section className="section border-t border-border bg-bg-subtle">
        <div className="container-page">
          <p className="eyebrow mb-3">Recurring programs</p>
          <h2 className="text-2xl font-bold md:text-3xl">
            The things we run every year
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {programs.map((p) => (
              <div key={p.id} className="card p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <span className="shrink-0 rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-semibold text-accent">
                    {categoryLabel[p.category]}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {p.description}
                </p>
                <p className="mt-3 text-xs font-medium text-text-muted">
                  {p.cadence}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past terms */}
      <section className="section">
        <div className="container-page">
          <p className="eyebrow mb-3">Previously</p>
          <h2 className="text-2xl font-bold md:text-3xl">Past terms</h2>
          <div className="mt-10 space-y-10">
            {pastTerms.map((t) => (
              <div
                key={t.term}
                className="grid gap-4 md:grid-cols-[160px_1fr]"
              >
                <h3 className="text-lg font-semibold">{t.term}</h3>
                <div className="flex flex-wrap gap-2">
                  {t.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full border border-border px-3 py-1 text-sm text-text-muted"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
