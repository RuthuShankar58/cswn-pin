"use client";

import PageHero from "@/components/PageHero";
import Link from "next/link";

const membershipBenefits = [
  { title: "Professional Development", description: "Resume workshops, mock interviews, and career coaching", icon: "📈" },
  { title: "Industry Connections", description: "Network with professionals at top tech companies", icon: "🤝" },
  { title: "Speaker Series Access", description: "Exclusive virtual sessions with industry leaders", icon: "🎤" },
  { title: "Technical Workshops", description: "Hands-on learning opportunities and competitions", icon: "💻" },
  { title: "Leadership Growth", description: "Committee and executive board opportunities", icon: "⭐" },
  { title: "Community", description: "A supportive network of women and allies in tech", icon: "💜" },
  { title: "Mentorship", description: "Peer and industry mentor matching programs", icon: "🧭" },
  { title: "Company Visits", description: "Behind-the-scenes tours of leading tech companies", icon: "🏢" },
];

const volunteerOpportunities = [
  { title: "Event Planning Committee", description: "Help plan and execute CSWN events, from speaker series to social gatherings.", commitment: "3–5 hrs/month" },
  { title: "Marketing & Social Media", description: "Create content, manage social accounts, and grow CSWN's digital presence.", commitment: "2–4 hrs/week" },
  { title: "Outreach & Partnerships", description: "Build relationships with sponsors, university departments, and community organizations.", commitment: "3–5 hrs/month" },
  { title: "Technical Projects", description: "Contribute to CSWN's website, tools, and technical infrastructure.", commitment: "Flexible" },
  { title: "Mentorship Program", description: "Guide newer members through their first year in CS and at Purdue.", commitment: "2–3 hrs/month" },
  { title: "Workshop Facilitation", description: "Lead or co-lead technical or professional development workshops.", commitment: "As scheduled" },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        title="Get Involved"
        subtitle="Whether you're looking to learn, lead, mentor, or connect — there's a place for you at CSWN."
        badge="Join Us"
      />

      {/* Membership Benefits */}
      <section className="py-20 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Free membership</p>
            <h2 className="text-2xl font-bold text-text">What you get</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {membershipBenefits.map((benefit) => (
              <div key={benefit.title} className="p-5 bg-bg-card border border-border rounded-xl">
                <span className="text-2xl mb-2 block">{benefit.icon}</span>
                <h3 className="font-semibold text-text text-sm mb-1">{benefit.title}</h3>
                <p className="text-xs text-text-light">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join */}
      <section className="py-20 bg-bg-alt border-y border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Sign Up</p>
            <h2 className="text-2xl font-bold text-text">Join CSWN</h2>
            <p className="text-text-light text-sm mt-2">Ready to join? Sign up through BoilerLink or reach out to us directly.</p>
          </div>

          <div className="bg-bg-card border border-border rounded-xl p-8">
            <div className="text-center mb-8">
              <a
                href="https://boilerlink.purdue.edu/organization/computersciencewomensnetworkindy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-bg font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm"
              >
                Join on BoilerLink
              </a>
              <p className="text-xs text-text-lighter mt-3">Official Purdue student organization registration</p>
            </div>

            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-bg-card px-4 text-xs text-text-lighter">or reach out directly</span>
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-medium text-text-light mb-1">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-2.5 bg-bg border border-border rounded-lg text-text text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors placeholder:text-text-lighter" placeholder="Your first name" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-medium text-text-light mb-1">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-2.5 bg-bg border border-border rounded-lg text-text text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors placeholder:text-text-lighter" placeholder="Your last name" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-text-light mb-1">Purdue Email</label>
                <input type="email" id="email" className="w-full px-4 py-2.5 bg-bg border border-border rounded-lg text-text text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors placeholder:text-text-lighter" placeholder="yourname@purdue.edu" />
              </div>
              <div>
                <label htmlFor="major" className="block text-xs font-medium text-text-light mb-1">Major</label>
                <input type="text" id="major" className="w-full px-4 py-2.5 bg-bg border border-border rounded-lg text-text text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors placeholder:text-text-lighter" placeholder="e.g. Computer Science" />
              </div>
              <div>
                <label htmlFor="year" className="block text-xs font-medium text-text-light mb-1">Year</label>
                <select id="year" className="w-full px-4 py-2.5 bg-bg border border-border rounded-lg text-text text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors">
                  <option value="">Select your year</option>
                  <option value="freshman">Freshman</option>
                  <option value="sophomore">Sophomore</option>
                  <option value="junior">Junior</option>
                  <option value="senior">Senior</option>
                  <option value="graduate">Graduate</option>
                </select>
              </div>
              <div>
                <label htmlFor="interests" className="block text-xs font-medium text-text-light mb-1">What interests you about CSWN?</label>
                <textarea id="interests" rows={3} className="w-full px-4 py-2.5 bg-bg border border-border rounded-lg text-text text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors resize-none placeholder:text-text-lighter" placeholder="Tell us what you're looking to gain from CSWN..." />
              </div>
              <button type="submit" className="w-full py-3 bg-primary text-bg font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm">
                Express Interest
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Committee Roles */}
      <section className="py-20 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Go deeper</p>
            <h2 className="text-2xl font-bold text-text">Committee opportunities</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {volunteerOpportunities.map((opp) => (
              <div key={opp.title} className="bg-bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold text-text mb-2">{opp.title}</h3>
                <p className="text-sm text-text-light mb-3">{opp.description}</p>
                <p className="text-xs text-primary font-medium">⏱ {opp.commitment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other ways */}
      <section className="py-20 bg-bg-alt border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text mb-8">Other ways to get involved</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { emoji: "🎤", title: "Become a Speaker", desc: "Share your story with our members through our Day in the Life Speaker Series.", link: "/speaker-series", linkLabel: "Learn More" },
              { emoji: "🧭", title: "Become a Mentor", desc: "Guide students through their tech journey. Alumni and industry professionals welcome.", link: "/contact", linkLabel: "Express Interest" },
              { emoji: "🏢", title: "Industry Partnerships", desc: "Partner with CSWN through sponsorship, events, and recruitment opportunities.", link: "/sponsors", linkLabel: "Partner With Us" },
            ].map((item) => (
              <div key={item.title} className="bg-bg-card border border-border rounded-xl p-6">
                <span className="text-2xl mb-3 block">{item.emoji}</span>
                <h3 className="font-semibold text-text mb-2">{item.title}</h3>
                <p className="text-sm text-text-light mb-4">{item.desc}</p>
                <Link href={item.link} className="text-sm text-primary hover:text-primary-dark transition-colors font-medium">
                  {item.linkLabel} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
