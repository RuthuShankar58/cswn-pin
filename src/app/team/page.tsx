import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { officers, openRoles } from "@/data/team";
import { officerGraphic } from "@/data/photos";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the CSWN executive board and see the officer positions currently open for applications.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        badge="Team"
        title="The people running CSWN"
        subtitle="A small executive board, plus open positions we're actively hiring for."
      />

      {/* Executive board */}
      <section className="section">
        <div className="container-page">
          <div data-reveal>
            <p className="eyebrow mb-3">Executive board</p>
            <h2 className="text-2xl font-bold md:text-3xl">2025–26 officers</h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {officers.map((o, i) => {
              const graphic =
                officerGraphic[o.id as keyof typeof officerGraphic];
              return (
                <div
                  key={o.id}
                  className="card card-hover overflow-hidden"
                  data-reveal
                  style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
                >
                  {graphic && (
                    <Image
                      src={graphic.src}
                      alt={graphic.alt}
                      width={graphic.w}
                      height={graphic.h}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="h-auto w-full border-b border-border"
                    />
                  )}
                  <div className="p-5">
                    <p className="font-semibold">{o.name}</p>
                    <p className="text-sm text-accent">{o.role}</p>
                    {o.email && (
                      <a
                        href={`mailto:${o.email}`}
                        className="mt-2 inline-block text-sm font-medium text-text-muted hover:text-text"
                      >
                        {o.email}
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="section border-t border-border bg-bg-subtle">
        <div className="container-page">
          <div data-reveal>
            <p className="eyebrow mb-3">We&apos;re hiring</p>
            <h2 className="text-2xl font-bold md:text-3xl">Open positions</h2>
            <p className="mt-3 max-w-2xl text-text-muted">
              Applications are open now. Each role has its own short form — first-
              and second-years are encouraged to apply.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {openRoles.map((r, i) => (
              <div
                key={r.id}
                className="card card-hover flex flex-col p-6"
                data-reveal
                style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
              >
                <h3 className="text-lg font-semibold">{r.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                  {r.blurb}
                </p>
                <a
                  href={r.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-5 self-start"
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
