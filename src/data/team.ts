export interface Officer {
  id: string;
  name: string;
  role: string;
  major?: string;
  gradYear?: string;
  email?: string;
  bio?: string;
  image?: string;
}

export interface OpenRole {
  id: string;
  title: string;
  blurb: string;
  applyUrl: string;
}

export const officers: Officer[] = [
  {
    id: "president",
    name: "Ruthu Shankar",
    role: "President",
    major: "Computer Science · Minor in Math & Management",
    gradYear: "2027",
    email: "shanka61@purdue.edu",
    bio: "Ruthu loves meeting new people and starting conversations, and is especially passionate about outreach that gets middle- and high-school girls excited about computer science.",
  },
  {
    id: "vice-president",
    name: "Ria Nimbkar",
    role: "Vice President",
    major: "Computer Science",
    gradYear: "2027",
    email: "rnimbkar@purdue.edu",
    bio: "The creative behind CSWN's posters and projects, Ria focuses on keeping events engaging and getting more students involved in tech and campus life.",
  },
  {
    id: "treasurer",
    name: "Abha Gupta",
    role: "Treasurer",
    major: "Computer Science · Minor in Math & Finance",
    gradYear: "2027",
    email: "gupt1107@purdue.edu",
    bio: "Abha believes in building strong communities and joined CSWN to help bridge the gender gap in technology.",
  },
];

// Applications are open — each role has its own form.
export const openRoles: OpenRole[] = [
  {
    id: "secretary",
    title: "Secretary",
    blurb: "Keep the board organized — notes, scheduling, and member communication.",
    applyUrl: "https://forms.cloud.microsoft/r/TD8SGyggtK",
  },
  {
    id: "marketing-director",
    title: "Marketing Director",
    blurb: "Own CSWN's voice across Instagram, LinkedIn, and event promo.",
    applyUrl: "https://forms.cloud.microsoft/r/dvCZSs8Lgi",
  },
  {
    id: "outreach-coordinator",
    title: "Outreach Coordinator",
    blurb: "Run programs that bring more women into computing, on and off campus.",
    applyUrl: "https://forms.cloud.microsoft/r/9ttAh7KP9G",
  },
  {
    id: "understudy-treasurer",
    title: "Understudy Treasurer",
    blurb: "Learn the budget alongside the Treasurer and step up next year.",
    applyUrl: "https://forms.cloud.microsoft/r/U2YUgwfLdr",
  },
];
