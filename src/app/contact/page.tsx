import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { SOCIALS, CONTACT_EMAIL } from "@/data/site";
import { officers } from "@/data/team";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach the Computer Science Women's Network — email, social channels, and officer contacts.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Contact"
        title="Get in touch"
        subtitle="Questions about membership, events, sponsorship, or collaborating? Any of these reach us."
      />

      <section className="section">
        <div className="container-page grid gap-12 md:grid-cols-[1fr_1fr]">
          {/* Email + note */}
          <div>
            <h2 className="text-2xl font-bold">Email</h2>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-3 inline-block text-lg font-medium text-accent hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              Best for sponsorship inquiries, collaboration requests from other
              student organizations, and anything that needs a written reply.
            </p>

            <div className="card mt-8 p-5">
              <h3 className="text-sm font-semibold">No standing meeting time</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                CSWN doesn&apos;t hold a weekly general meeting — programming is
                event-by-event. Follow{" "}
                <a
                  href="https://www.instagram.com/cswnindy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent hover:underline"
                >
                  @cswnindy
                </a>{" "}
                or check BoilerLink for dates and locations.
              </p>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h2 className="text-2xl font-bold">Find us online</h2>
            <div className="mt-3 divide-y divide-border overflow-hidden rounded-xl border border-border bg-bg-card">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 transition-colors hover:bg-bg-subtle"
                >
                  <span>
                    <span className="font-medium">{s.label}</span>
                    <span className="ml-2 text-sm text-text-muted">
                      {s.handle}
                    </span>
                  </span>
                  <span className="text-text-muted">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-border bg-bg-subtle">
        <div className="container-page">
          <p className="eyebrow mb-3">Officers</p>
          <h2 className="text-2xl font-bold md:text-3xl">Reach a board member</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {officers.map((o) => (
              <div key={o.id} className="card p-5">
                <p className="font-semibold">{o.name}</p>
                <p className="text-sm text-accent">{o.role}</p>
                {o.email && (
                  <a
                    href={`mailto:${o.email}`}
                    className="mt-3 inline-block text-sm text-text-muted hover:text-text"
                  >
                    {o.email}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
