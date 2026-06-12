export interface Leader {
  id: string;
  name: string;
  position: string;
  major?: string;
  graduationYear?: string;
  linkedin?: string;
  bio?: string;
  image?: string;
}

export const leadership: Leader[] = [
  {
    id: "president",
    name: "President",
    position: "President",
    major: "Computer Science",
    bio: "Leading CSWN's mission to empower women in technology through professional development, community building, and industry connections.",
    image: "/images/leadership/placeholder.jpg",
  },
  {
    id: "vice-president",
    name: "Vice President",
    position: "Vice President",
    major: "Computer Science",
    bio: "Supporting organizational operations and ensuring CSWN delivers impactful programming for all members.",
    image: "/images/leadership/placeholder.jpg",
  },
  {
    id: "treasurer",
    name: "Treasurer",
    position: "Treasurer",
    major: "Computer Science",
    bio: "Managing CSWN's finances, sponsorships, and budget to support our growing programming and events.",
    image: "/images/leadership/placeholder.jpg",
  },
  {
    id: "secretary",
    name: "Secretary",
    position: "Secretary",
    major: "Computer Science",
    bio: "Maintaining organizational records, meeting minutes, and ensuring clear communication across all teams.",
    image: "/images/leadership/placeholder.jpg",
  },
  {
    id: "events-chair",
    name: "Events Chair",
    position: "Events Chair",
    major: "Computer Science",
    bio: "Planning and executing CSWN's diverse programming from speaker series to social events and competitions.",
    image: "/images/leadership/placeholder.jpg",
  },
  {
    id: "marketing-chair",
    name: "Marketing Chair",
    position: "Marketing Chair",
    major: "Computer Science",
    bio: "Driving CSWN's brand presence across social media, campus communications, and promotional materials.",
    image: "/images/leadership/placeholder.jpg",
  },
  {
    id: "outreach-chair",
    name: "Outreach Chair",
    position: "Outreach Chair",
    major: "Computer Science",
    bio: "Building partnerships with industry sponsors, university departments, and community organizations.",
    image: "/images/leadership/placeholder.jpg",
  },
  {
    id: "tech-chair",
    name: "Technology Chair",
    position: "Technology Chair",
    major: "Computer Science",
    bio: "Managing CSWN's technical infrastructure, website, and digital tools to support our community.",
    image: "/images/leadership/placeholder.jpg",
  },
];
