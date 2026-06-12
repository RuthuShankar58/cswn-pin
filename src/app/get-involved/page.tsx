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
  {
    title: "Event Planning Committee",
    description: "Help plan and execute CSWN events, from speaker series to social gatherings.",
    commitment: "3-5 hours/month",
  },
  {
    title: "Marketing & Social Media",
    description: "Create content, manage social accounts, and grow CSWN's digital presence.",
    commitment: "2-4 hours/week",
  },
  {
    title: "Outreach & Partnerships",
    description: "Build relationships with sponsors, university departments, and community organizations.",
    commitment: "3-5 hours/month",
  },
  {
    title: "Technical Projects",
    description: "Contribute to CSWN's website, tools, and technical infrastructure.",
    commitment: "Flexible",
  },
  {
    title: "Mentorship Program",
    description: "Guide newer members through their first year in CS and at Purdue.",
    commitment: "2-3 hours/month",
  },
  {
    title: "Workshop Facilitation",
    description: "Lead or co-lead technical or professional development workshops.",
    commitment: "As scheduled",
  },
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">Membership Benefits</h2>
            <p className="text-text-light max-w-2xl mx-auto">
              CSWN membership is free and open to all Purdue Indianapolis students who support 
              women in computing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {membershipBenefits.map((benefit) => (
              <div key={benefit.title} className="p-5 bg-bg-alt rounded-xl">
                <span className="text-2xl mb-2 block">{benefit.icon}</span>
                <h3 className="font-semibold text-text text-sm mb-1">{benefit.title}</h3>
                <p className="text-xs text-text-light">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Form */}
      <section className="py-20 bg-bg-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">Join CSWN</h2>
            <p className="text-text-light max-w-xl mx-auto">
              Ready to join? Sign up through BoilerLink or reach out to us directly.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-8">
            <div className="text-center mb-8">
              <a
                href="https://boilerlink.purdue.edu/organization/computersciencewomensnetworkindy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25 text-lg"
              >
                Join on BoilerLink
              </a>
              <p className="text-sm text-text-light mt-3">Official Purdue student organization registration</p>
            </div>

            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-sm text-text-lighter">or contact us directly</span>
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-text mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-text mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text mb-1">
                  Purdue Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors"
                  placeholder="yourname@purdue.edu"
                />
              </div>
              <div>
                <label htmlFor="major" className="block text-sm font-medium text-text mb-1">
                  Major
                </label>
                <input
                  type="text"
                  id="major"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors"
                  placeholder="e.g. Computer Science"
                />
              </div>
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-text mb-1">
                  Year
                </label>
                <select
                  id="year"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors"
                >
                  <option value="">Select your year</option>
                  <option value="freshman">Freshman</option>
                  <option value="sophomore">Sophomore</option>
                  <option value="junior">Junior</option>
                  <option value="senior">Senior</option>
                  <option value="graduate">Graduate</option>
                </select>
              </div>
              <div>
                <label htmlFor="interests" className="block text-sm font-medium text-text mb-1">
                  What interests you about CSWN?
                </label>
                <textarea
                  id="interests"
                  rows={3}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors resize-none"
                  placeholder="Tell us what you're looking to gain from CSWN..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                Express Interest
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">Volunteer & Committee Opportunities</h2>
            <p className="text-text-light max-w-2xl mx-auto">
              Take your involvement to the next level. Join a committee and help shape CSWN&apos;s impact.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerOpportunities.map((opp) => (
              <div key={opp.title} className="bg-bg-alt p-6 rounded-xl">
                <h3 className="font-semibold text-text mb-2">{opp.title}</h3>
                <p className="text-sm text-text-light mb-3">{opp.description}</p>
                <p className="text-xs text-primary font-medium">⏱ {opp.commitment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways */}
      <section className="py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">Other Ways to Get Involved</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-text mb-2">🎤 Become a Speaker</h3>
              <p className="text-sm text-text-light">
                Are you a professional in tech? Share your story with our members through 
                our Day in the Life Speaker Series.
              </p>
              <Link href="/speaker-series" className="text-sm text-primary font-medium mt-3 inline-block hover:text-primary-dark">
                Learn More →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-text mb-2">🧭 Become a Mentor</h3>
              <p className="text-sm text-text-light">
                Guide students through their tech journey. Alumni and industry professionals 
                welcome to join our mentorship program.
              </p>
              <Link href="/contact" className="text-sm text-primary font-medium mt-3 inline-block hover:text-primary-dark">
                Express Interest →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-text mb-2">🏢 Industry Partnerships</h3>
              <p className="text-sm text-text-light">
                Companies can partner with CSWN through sponsorship, events, and recruitment 
                opportunities.
              </p>
              <Link href="/sponsors" className="text-sm text-primary font-medium mt-3 inline-block hover:text-primary-dark">
                Partner With Us →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
