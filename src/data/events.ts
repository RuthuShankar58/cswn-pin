export type EventCategory =
  | "meeting"
  | "speaker"
  | "social"
  | "professional"
  | "competition"
  | "outreach";

export interface UpcomingEvent {
  id: string;
  month: string; // e.g. "SEP"
  day: string; // e.g. "16"
  title: string;
  category: EventCategory;
  note?: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  cadence: string;
  category: EventCategory;
}

export interface PastTerm {
  term: string;
  highlights: string[];
}

export const categoryLabel: Record<EventCategory, string> = {
  meeting: "Meeting",
  speaker: "Speaker",
  social: "Social",
  professional: "Professional",
  competition: "Competition",
  outreach: "Outreach",
};

/* ------------------------------------------------------------------ */
/*  Recurring programs — "what we run"                                */
/* ------------------------------------------------------------------ */
export const programs: Program[] = [
  {
    id: "ditl",
    title: "Day in the Life Speaker Series",
    description:
      "A biweekly 30-minute virtual session where a guest speaker walks through a typical day in her role, what she loves about being a woman in tech, and her advice for students entering the industry.",
    cadence: "Biweekly · virtual",
    category: "speaker",
  },
  {
    id: "women-in-tech-panel",
    title: "Women in Tech Panel",
    description:
      "Our flagship panel bringing together accomplished women in technology from partners like Amway, Liberty Mutual, and Eli Lilly to share their experiences and answer questions.",
    cadence: "Once a semester",
    category: "professional",
  },
  {
    id: "coffee-chat",
    title: "Coffee & Chat",
    description:
      "A casual networking hour with a coffee bar and conversation prompts — an easy first event if you're new to CSWN.",
    cadence: "Monthly",
    category: "social",
  },
  {
    id: "career-workshops",
    title: "Career Workshops",
    description:
      "Hands-on sessions on resumes, LinkedIn, personal websites, and career-fair prep, often run with HR professionals and industry partners.",
    cadence: "Several per semester",
    category: "professional",
  },
  {
    id: "ai-build-challenge",
    title: "AI Build Challenge",
    description:
      "A team competition to design and build an AI-powered project in a day — collaborate with peers and ship something real.",
    cadence: "Annual",
    category: "competition",
  },
  {
    id: "socials",
    title: "Community Socials",
    description:
      "Paint & boba, sticker making, pumpkin carving, tote-bag painting, tree decorating, and more — low-key events to meet other members.",
    cadence: "Throughout the year",
    category: "social",
  },
];

/* ------------------------------------------------------------------ */
/*  This semester. TODO: update dates/speakers each term.             */
/* ------------------------------------------------------------------ */
export const upcomingEvents: UpcomingEvent[] = [
  { id: "b-involved", month: "AUG", day: "26", title: "B-Involved Fair", category: "outreach", note: "Find our table + sticker decorating" },
  { id: "callout", month: "AUG", day: "28", title: "Callout Event", category: "meeting", note: "Food, meet the officers, semester preview" },
  { id: "ditl-cano", month: "SEP", day: "1", title: "Day in the Life: Amanda Cano", category: "speaker" },
  { id: "coffee-chat-sep", month: "SEP", day: "10", title: "Coffee & Chat", category: "social" },
  { id: "ditl-bag", month: "SEP", day: "16", title: "Day in the Life: Anushree Bag", category: "speaker" },
  { id: "ai-build", month: "SEP", day: "25", title: "AI Build Challenge", category: "competition" },
  { id: "ditl-sep", month: "SEP", day: "28", title: "Day in the Life", category: "speaker" },
  { id: "movie-night", month: "OCT", day: "7", title: "Movie Night", category: "social", note: "With PSUB" },
  { id: "ditl-lm", month: "OCT", day: "15", title: "Day in the Life: Liberty Mutual", category: "speaker" },
  { id: "panel", month: "OCT", day: "23", title: "Women in Tech Panel", category: "professional", note: "Amanda Cano · Anushree Bag · Rupal Thanawala · Tori Clifford" },
  { id: "tote-boba", month: "NOV", day: "12", title: "Tote Bag Painting + Boba", category: "social" },
  { id: "ditl-clifford", month: "NOV", day: "16", title: "Day in the Life: Tori Clifford", category: "speaker" },
  { id: "tree", month: "DEC", day: "2", title: "Tree Decorating", category: "social" },
];

/* ------------------------------------------------------------------ */
/*  Past terms — condensed highlights                                 */
/* ------------------------------------------------------------------ */
export const pastTerms: PastTerm[] = [
  {
    term: "Fall 2025",
    highlights: [
      "Women in Tech Panel",
      "LinkedIn & resume workshop",
      "Career goal roadmap",
      "Personal website workshop",
      "Paint & sip (boba)",
      "Pumpkin carving",
      "Glow stick party",
      "Shark Tank: 30-minute startup",
      "Breakfast at Midnight",
    ],
  },
  {
    term: "Spring 2025",
    highlights: [
      "Make your own sticker & hot chocolate",
      "Bouquet making with CS Club",
      "Beyond the Code with Prof. Smart",
      "Chai-deas hackathon ideation",
      "Career-fair prep with Amway",
      "Eli Lilly headquarters tour",
    ],
  },
  {
    term: "Fall 2024",
    highlights: [
      "Callout & B-Involved Fair",
      "Paint and boba social",
      "Career roadmap with CS Club",
      "Halloween lab crawl",
      "Women in Tech Panel",
      "Thanksgiving social: pie an officer",
      "Breakfast at Midnight",
    ],
  },
];
