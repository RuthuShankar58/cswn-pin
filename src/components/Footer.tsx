import Link from "next/link";
import Image from "next/image";
import { SOCIALS, CONTACT_EMAIL } from "@/data/site";

const pageLinks = [
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/team", label: "Team" },
  { href: "/join", label: "Join CSWN" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-subtle">
      <div className="container-page py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Image src="/cswnlogo.png" alt="" width={32} height={32} className="rounded-md" />
              <span className="font-bold tracking-tight">CSWN</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              Computer Science Women&apos;s Network at Purdue University in
              Indianapolis. Community, mentorship, and professional growth for
              women and allies in computing.
            </p>
          </div>

          <div className="flex gap-14">
            <nav className="flex flex-col gap-2.5">
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                Explore
              </p>
              {pageLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-text-muted transition-colors hover:text-text"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <nav className="flex flex-col gap-2.5">
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                Connect
              </p>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-muted transition-colors hover:text-text"
                >
                  {s.label}
                </a>
              ))}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sm text-text-muted transition-colors hover:text-text"
              >
                Email
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-xs text-text-muted">
          {`© ${new Date().getFullYear()} Computer Science Women's Network · Purdue University in Indianapolis`}
        </div>
      </div>
    </footer>
  );
}
