export interface CSWNEvent {
  id: string;
  title: string;
  date: string;
  time?: string;
  location?: string;
  description: string;
  category: "meeting" | "speaker" | "social" | "professional" | "competition" | "outreach";
  image?: string;
  registrationLink?: string;
  isPast?: boolean;
}

export const recurringPrograms = [
  {
    id: "ditl",
    title: "Day in the Life Speaker Series",
    description:
      "Biweekly 30-minute virtual sessions where industry professionals share what a typical day in their role looks like, what they love about being a woman in STEM, and advice for young women entering the tech industry.",
    frequency: "Biweekly",
    format: "Virtual, 30 minutes",
    image: "/images/events/speaker-series.jpg",
    category: "speaker" as const,
  },
  {
    id: "resume-roast",
    title: "Resume Roast Night",
    description:
      "Get honest, constructive feedback on your resume from HR professionals and industry experts in a fun, supportive environment. Walk away with actionable improvements.",
    frequency: "Semester",
    format: "In-person",
    image: "/images/events/resume-roast.jpg",
    category: "professional" as const,
  },
  {
    id: "coffee-chat",
    title: "Coffee & Chat",
    description:
      "Casual networking event featuring a coffee bar and conversation starters. Grab a coffee, pick a chit from the bowl, and spark meaningful connections with fellow members.",
    frequency: "Monthly",
    format: "In-person",
    image: "/images/events/coffee-chat.jpg",
    category: "social" as const,
  },
  {
    id: "women-in-tech-panel",
    title: "Women in Tech Panel",
    description:
      "A flagship panel discussion bringing together accomplished women in technology to share their experiences, challenges, and triumphs in the industry.",
    frequency: "Annual (November)",
    format: "In-person",
    image: "/images/events/panel.jpg",
    category: "professional" as const,
  },
  {
    id: "ai-build-challenge",
    title: "AI Build Challenge",
    description:
      "A hands-on competition where teams build innovative AI-powered projects. Develop technical skills, collaborate with peers, and showcase your creativity.",
    frequency: "Annual",
    format: "In-person",
    image: "/images/events/ai-challenge.jpg",
    category: "competition" as const,
  },
  {
    id: "bug-hunt",
    title: "Bug Hunt Competition",
    description:
      "Put your debugging skills to the test in this exciting competition. Find and fix bugs in real code challenges while racing against the clock.",
    frequency: "Annual",
    format: "In-person",
    image: "/images/events/bug-hunt.jpg",
    category: "competition" as const,
  },
  {
    id: "tote-bag-painting",
    title: "Tote Bag Painting",
    description:
      "Express your creativity while bonding with fellow members. Design and paint custom tote bags in a relaxed, artistic setting.",
    frequency: "Annual",
    format: "In-person",
    image: "/images/events/tote-bag.jpg",
    category: "social" as const,
  },
  {
    id: "tree-decorating",
    title: "Holiday Ornament Making & Tree Decorating",
    description:
      "Celebrate the holiday season by crafting ornaments and decorating the ET corner tree together. A festive way to close out the semester.",
    frequency: "Annual (December)",
    format: "In-person, ET Corner",
    image: "/images/events/tree-decorating.jpg",
    category: "social" as const,
  },
  {
    id: "tech-company-visit",
    title: "Tech Company Visits",
    description:
      "Exclusive behind-the-scenes visits to leading technology companies. See how professionals work, tour offices, and network with engineers and leaders.",
    frequency: "Semester",
    format: "Off-campus",
    image: "/images/events/company-visit.jpg",
    category: "professional" as const,
  },
  {
    id: "tech-fashion-show",
    title: "Tech Meets Fashion Show",
    description:
      "A creative collaboration with the music club showcasing the intersection of technology and fashion at the IU Auditorium.",
    frequency: "Annual",
    format: "IU Auditorium",
    image: "/images/events/fashion-show.jpg",
    category: "social" as const,
  },
];

export const eventCalendar: CSWNEvent[] = [
  {
    id: "b-involved-fall",
    title: "B-Involved Fair",
    date: "August 26",
    description: "Meet CSWN at the university involvement fair. Learn about membership, upcoming events, and how to get involved.",
    category: "outreach",
    location: "Campus Center",
  },
  {
    id: "ditl-sep-1",
    title: "Day in the Life Speaker Series",
    date: "September 1",
    description: "Virtual speaker session featuring an industry professional sharing their daily experiences in tech.",
    category: "speaker",
    format: "Virtual",
  },
  {
    id: "cswn-sep-10",
    title: "CSWN General Meeting",
    date: "September 10",
    description: "General body meeting with updates, networking, and community building.",
    category: "meeting",
  },
  {
    id: "ditl-sep-16",
    title: "Day in the Life Speaker Series",
    date: "September 16",
    description: "Virtual speaker session featuring an industry professional sharing their daily experiences in tech.",
    category: "speaker",
  },
  {
    id: "cswn-sep-22",
    title: "CSWN General Meeting",
    date: "September 22",
    description: "General body meeting with updates, networking, and community building.",
    category: "meeting",
  },
  {
    id: "ditl-sep-28",
    title: "Day in the Life Speaker Series",
    date: "September 28",
    description: "Virtual speaker session featuring an industry professional sharing their daily experiences in tech.",
    category: "speaker",
  },
  {
    id: "cswn-oct-7",
    title: "CSWN General Meeting",
    date: "October 7",
    description: "General body meeting with updates, networking, and community building.",
    category: "meeting",
  },
  {
    id: "ditl-oct-15",
    title: "Day in the Life Speaker Series",
    date: "October 15",
    description: "Virtual speaker session featuring an industry professional sharing their daily experiences in tech.",
    category: "speaker",
  },
  {
    id: "cswn-oct-23",
    title: "CSWN General Meeting",
    date: "October 23",
    description: "General body meeting with updates, networking, and community building.",
    category: "meeting",
  },
  {
    id: "cswn-nov-12",
    title: "CSWN General Meeting",
    date: "November 12",
    description: "General body meeting with updates, networking, and community building.",
    category: "meeting",
  },
  {
    id: "ditl-nov-16",
    title: "Day in the Life Speaker Series",
    date: "November 16",
    description: "Virtual speaker session featuring an industry professional sharing their daily experiences in tech.",
    category: "speaker",
  },
  {
    id: "tree-dec-2",
    title: "Tree Decorating Event",
    date: "December 2",
    description: "End-of-semester holiday celebration with ornament making and tree decorating in the ET corner.",
    category: "social",
    location: "ET Corner",
  },
] as CSWNEvent[];
