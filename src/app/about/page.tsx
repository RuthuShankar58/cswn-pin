import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { partners } from "@/data/sponsors";

export const metadata: Metadata = {
  title: "About",
  description:
    "CSWN's mission, what we do, and who can join — a community for women and allies in computing at Purdue University in Indianapolis.",
};

const values = [
  {
    title: "Professional development",
    body: "Resume and LinkedIn workshops, mock interviews, personal-website sessions, and career-fair prep — often run with HR professionals and industry partners.",
  },
  {
    title: "Technical growth",
    body: "The AI Build Challenge, hackathon ideation with the CS Club, and workshops that give members something concrete to build and show.",
  },
  {
    title: "Mentorship",
    body: "The Day in the Life speaker series connects members with women already working in tech who talk openly about their roles and paths.",
  },
  {
    title: "Community",
    body: "Socials, collaborations with other student orgs, and a Discord where members trade advice, referrals, and moral support during finals.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About CSWN"
        title="A network for women in computing"
        subtitle="The Computer Science Women's Network is a student organization at Purdue University in Indianapolis."
      />

      <section className="section">
        <div className="container-page grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold">Our mission</h2>
            <div className="mt-4 space-y-4 text-text-muted leading-relaxed">
              <p>
                CSWN exists to make computing at Purdue Indianapolis a more
                welcoming, connected place for women and allies. The field is
                still far from balanced, and a degree is a lot harder to finish
                without people around you who get it.
              </p>
              <p>
                We do that through consistent programming — career workshops,
                a biweekly speaker series, technical challenges, and low-key
                socials — plus partnerships with companies like Eli Lilly,
                Amway, and Liberty Mutual that open doors to internships and
                mentors.
              </p>
              <p>
                Whether you&apos;re a first-year still deciding on a major or a
                senior lining up full-time offers, there&apos;s a place for you
                here.
              </p>
            </div>
          </div>

          <aside className="card h-fit p-6">
            <h3 className="font-semibold">Who can join</h3>
            <ul className="mt-3 space-y-2 text-sm text-text-muted">
              <li>· Any student at Purdue University in Indianapolis</li>
              <li>· All majors and class years welcome</li>
              <li>· Women and allies in computing</li>
              <li>· No application needed to attend events</li>
            </ul>
            <Link href="/join" className="btn btn-primary mt-5 w-full">
              How to get involved
            </Link>
          </aside>
        </div>
      </section>

      <section className="section border-t border-border bg-bg-subtle">
        <div className="container-page">
          <p className="eyebrow mb-3">What we focus on</p>
          <h2 className="text-2xl font-bold md:text-3xl">Four things, all year</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="card p-6">
                <h3 className="text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <p className="eyebrow mb-3">Partners &amp; sponsors</p>
          <h2 className="text-2xl font-bold md:text-3xl">
            Companies that support CSWN
          </h2>
          <p className="mt-3 max-w-2xl text-text-muted">
            These organizations have sponsored events, sent speakers, or hosted
            our members on site.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
            {partners.map((p) => (
              <div
                key={p.id}
                className="flex items-center justify-center bg-bg-card px-4 py-8 text-center text-sm font-medium text-text-muted"
              >
                {p.name}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-text-muted">
            Interested in partnering with CSWN?{" "}
            <Link href="/contact" className="font-semibold text-accent hover:underline">
              Get in touch
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
