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
  // Fall 2024
  {
    id: "b-involved-fall",
    title: "B-Involved Fair",
    date: "August 27",
    description: "Meet CSWN at the university involvement fair alongside sticker decorating. Learn about membership, upcoming events, and how to get involved.",
    category: "outreach",
    location: "Campus Center",
    time: "3:00–6:00 PM",
  },
  {
    id: "callout-sep",
    title: "Callout Event",
    date: "September 4",
    description: "Food, introductions to officers, and a first look at the semester's events. The perfect way to get to know CSWN.",
    category: "meeting",
    time: "6:00–8:00 PM",
  },
  {
    id: "paint-boba",
    title: "Paint and Boba Social",
    date: "September 23",
    description: "A relaxed social event featuring painting and boba — a great way to meet fellow members and unwind.",
    category: "social",
    time: "6:00–8:00 PM",
  },
  {
    id: "career-roadmap",
    title: "Career Roadmap with CS Club",
    date: "October 7",
    description: "A collaborative event with the CS Club exploring career pathways in tech — from internships to full-time roles.",
    category: "professional",
    time: "6:00–8:00 PM",
  },
  {
    id: "halloween-social",
    title: "Halloween Social",
    date: "October 28",
    description: "Hallway decorating competition between College of Science and College of Engineering, plus Halloween festivities.",
    category: "social",
    time: "6:00–8:00 PM",
  },
  {
    id: "women-in-tech-panel-fall",
    title: "Women in Tech Panel",
    date: "November 11",
    description: "Our flagship panel bringing together accomplished women in technology to share their experiences and advice.",
    category: "professional",
    time: "3:30–5:30 PM",
  },
  {
    id: "thanksgiving-social",
    title: "Thanksgiving Social with CS Club",
    date: "November 18",
    description: "Collaborative event with the CS Club — pie your favorite officer, enjoy fall snacks and drinks.",
    category: "social",
    time: "6:00–8:00 PM",
  },
  {
    id: "dead-week-breakfast",
    title: "Breakfast at Midnight with CS Club",
    date: "December 9",
    description: "Dead week survival event: warm breakfast foods at midnight to fuel finals studying alongside fellow classmates.",
    category: "social",
    time: "12:00–2:00 AM",
  },

  // Spring 2025
  {
    id: "sticker-hot-choc",
    title: "Make Your Own Sticker & Hot Chocolate",
    date: "January 27",
    description: "Kick off the spring semester with sticker-making and hot chocolate. A cozy, creative social to start the year.",
    category: "social",
    location: "SL 239",
    time: "12:30–2:30 PM",
  },
  {
    id: "bouquet-cs-club",
    title: "Make Your Own Bouquet with CS Club",
    date: "February 13",
    description: "A Valentine's Day collaboration with the CS Club — make your own flower bouquet.",
    category: "social",
    location: "SL 112",
    time: "12:30–2:00 PM",
  },
  {
    id: "beyond-the-code",
    title: "Beyond the Code — with Prof. Smart",
    date: "February 27",
    description: "How privacy, ethics, and human behavior intersect with CS — and career paths beyond traditional big tech, including academia, research, and teaching-focused faculty roles.",
    category: "professional",
    location: "ET 202",
    time: "5:00–6:30 PM",
  },
  {
    id: "chai-deas",
    title: "Chai-deas Social",
    date: "March 10",
    description: "Project ideation for the CS Club hackathon over chai and samosas. Bring your ideas and your appetite.",
    category: "social",
    time: "5:00–6:30 PM",
  },
  {
    id: "women-in-tech-panel-spring",
    title: "Women in Tech Panel",
    date: "April 15",
    description: "Our spring Women in Tech Panel featuring professionals from Amway, Liberty Mutual, Eli Lilly, and more.",
    category: "professional",
    location: "ET 202 / Campus Center",
    time: "4:00–6:00 PM",
  },
];
