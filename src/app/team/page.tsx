import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import { officers, openRoles } from "@/data/team";
import { PHOTOS } from "@/data/photos";

const teamGallery = [
  PHOTOS.paintGroup,
  PHOTOS.callout,
  PHOTOS.networking,
  PHOTOS.webWorkshop,
  PHOTOS.pieOfficer,
  PHOTOS.socialFood,
  PHOTOS.calloutBoard,
  PHOTOS.fairTable,
];

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the CSWN executive board and see the officer positions currently open for applications.",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

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

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {officers.map((o, i) => (
              <div
                key={o.id}
                className="card card-hover flex flex-col p-6"
                data-reveal
                style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              >
                <div className="flex items-center gap-4">
                  {o.image ? (
                    <Image
                      src={o.image}
                      alt={o.name}
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-full object-cover"
                    />
                  ) : (
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-sm font-bold text-accent-contrast dark:text-[#12101a]">
                      {initials(o.name)}
                    </span>
                  )}
                  <div>
                    <p className="font-semibold">{o.name}</p>
                    <p className="text-sm text-accent">{o.role}</p>
                  </div>
                </div>

                {o.bio && (
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-text-muted">
                    {o.bio}
                  </p>
                )}

                <dl className="mt-4 space-y-1 text-xs text-text-muted">
                  {o.major && (
                    <div>
                      <dt className="sr-only">Major</dt>
                      <dd>{o.major}</dd>
                    </div>
                  )}
                  {o.gradYear && (
                    <div>
                      <dt className="sr-only">Graduation year</dt>
                      <dd>Class of {o.gradYear}</dd>
                    </div>
                  )}
                </dl>

                {o.email && (
                  <a
                    href={`mailto:${o.email}`}
                    className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
                  >
                    {o.email}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at CSWN */}
      <section className="section border-t border-border bg-bg-subtle">
        <div className="container-page">
          <div data-reveal>
            <p className="eyebrow mb-3">Life at CSWN</p>
            <h2 className="text-2xl font-bold md:text-3xl">
              What we get up to
            </h2>
          </div>
          <Gallery photos={teamGallery} className="mt-10" />
        </div>
      </section>

      {/* Open roles */}
      <section className="section border-t border-border">
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
