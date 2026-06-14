"use client";

import PageHero from "@/components/PageHero";
import Link from "next/link";

const partnershipTypes = [
  {
    icon: "🏢",
    title: "Company Visits",
    description: "Bring our members to your office for an inside look at your culture, team, and tech stack.",
  },
  {
    icon: "🎤",
    title: "Speaker Slots",
    description: "Join our Day in the Life series or host a panel to connect with the next generation of CS talent.",
  },
  {
    icon: "🤝",
    title: "Sponsorships",
    description: "Support our programming and get visibility at events, social channels, and campus materials.",
  },
  {
    icon: "🎯",
    title: "Recruitment Events",
    description: "Host a dedicated recruiting session or career panel — meet 100+ motivated CS students directly.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="Whether you're a student, company, or industry professional — we'd love to hear from you."
        badge="Contact"
      />

      {/* Contact + Form */}
      <section className="py-20 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-lg font-bold text-text mb-4">Reach us</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-text text-sm">Email</p>
                      <a href="mailto:cswn@purdue.edu" className="text-sm text-primary hover:text-primary-dark transition-colors">
                        cswn@purdue.edu
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-text text-sm">Campus</p>
                      <p className="text-sm text-text-light">Purdue University Indianapolis</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 mt-5">
                  <a
                    href="https://www.instagram.com/cswn.indy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-bg-card border border-border rounded-lg flex items-center justify-center text-text-light hover:text-primary hover:border-primary/40 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/105267243/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-bg-card border border-border rounded-lg flex items-center justify-center text-text-light hover:text-primary hover:border-primary/40 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-xl font-bold text-text mb-6">Send a Message</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contactName" className="block text-xs font-medium text-text-light mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      required
                      className="w-full px-4 py-2.5 bg-bg border border-border rounded-lg text-text text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors placeholder:text-text-lighter"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactEmail" className="block text-xs font-medium text-text-light mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="contactEmail"
                      required
                      className="w-full px-4 py-2.5 bg-bg border border-border rounded-lg text-text text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors placeholder:text-text-lighter"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contactOrg" className="block text-xs font-medium text-text-light mb-1">
                    Organization / Company
                  </label>
                  <input
                    type="text"
                    id="contactOrg"
                    className="w-full px-4 py-2.5 bg-bg border border-border rounded-lg text-text text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors placeholder:text-text-lighter"
                    placeholder="Optional"
                  />
                </div>
                <div>
                  <label htmlFor="contactSubject" className="block text-xs font-medium text-text-light mb-1">
                    Subject *
                  </label>
                  <select
                    id="contactSubject"
                    required
                    className="w-full px-4 py-2.5 bg-bg border border-border rounded-lg text-text text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors"
                  >
                    <option value="">Select a topic</option>
                    <option value="membership">Membership / Joining CSWN</option>
                    <option value="sponsorship">Sponsorship Inquiry</option>
                    <option value="speaking">Speaker Application</option>
                    <option value="company-visit">Company Visit / Partnership</option>
                    <option value="collaboration">Student Org Collaboration</option>
                    <option value="recruitment">Recruiting / Career Events</option>
                    <option value="general">General Question</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contactMessage" className="block text-xs font-medium text-text-light mb-1">
                    Message *
                  </label>
                  <textarea
                    id="contactMessage"
                    required
                    rows={6}
                    className="w-full px-4 py-2.5 bg-bg border border-border rounded-lg text-text text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors resize-none placeholder:text-text-lighter"
                    placeholder="Tell us how we can work together..."
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-3 bg-primary text-bg font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* For Companies */}
      <section className="py-20 bg-bg-alt border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">For Companies</p>
            <h2 className="text-2xl font-bold text-text mb-2">Work with CSWN</h2>
            <p className="text-text-light text-sm max-w-xl leading-relaxed">
              We actively partner with companies to create meaningful opportunities for 100+ motivated CS students.
              Whether you want to recruit, share your story, or invest in the next generation of women in tech — we&apos;d love to talk.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {partnershipTypes.map((item) => (
              <div
                key={item.title}
                className="bg-bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">{item.icon}</span>
                  <h3 className="font-semibold text-text text-sm">{item.title}</h3>
                </div>
                <p className="text-xs text-text-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <Link
            href="/sponsors"
            className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary-dark font-medium transition-colors"
          >
            View sponsorship tiers and packet →
          </Link>
        </div>
      </section>
    </>
  );
}
