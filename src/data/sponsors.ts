export interface Sponsor {
  id: string;
  name: string;
  logo?: string;
  website?: string;
  tier: "platinum" | "gold" | "silver" | "bronze";
  description?: string;
}

export const sponsors: Sponsor[] = [
  {
    id: "brooksource",
    name: "Brooksource",
    tier: "gold",
    website: "https://www.brooksource.com",
    logo: "/images/sponsors/brooksource.png",
  },
  {
    id: "amway",
    name: "Amway",
    tier: "gold",
    website: "https://www.amway.com",
    logo: "/images/sponsors/amway.png",
  },
  {
    id: "eli-lilly",
    name: "Eli Lilly",
    tier: "platinum",
    website: "https://www.lilly.com",
    logo: "/images/sponsors/eli-lilly.png",
  },
  {
    id: "ciee",
    name: "CIEE",
    tier: "silver",
    website: "https://www.ciee.org",
    logo: "/images/sponsors/ciee.png",
  },
  {
    id: "purdue-cs",
    name: "Purdue CS Department",
    tier: "silver",
    logo: "/images/sponsors/purdue-cs.png",
  },
  {
    id: "purdue-faculty",
    name: "Purdue Faculty",
    tier: "bronze",
    logo: "/images/sponsors/purdue-faculty.png",
  },
];

export const sponsorshipTiers = [
  {
    name: "Platinum",
    price: "$5,000+",
    color: "#E5E4E2",
    benefits: [
      "Logo on all CSWN marketing materials",
      "Dedicated recruitment event with CSWN members",
      "Speaking slot at Women in Tech Panel",
      "Social media feature (4x per semester)",
      "Resume book access",
      "Priority event sponsorship",
      "Website homepage feature",
      "Newsletter spotlight",
    ],
  },
  {
    name: "Gold",
    price: "$2,500 - $4,999",
    color: "#FFD700",
    benefits: [
      "Logo on CSWN marketing materials",
      "Co-hosted networking event",
      "Social media feature (2x per semester)",
      "Resume book access",
      "Event sponsorship opportunity",
      "Website sponsor page listing",
      "Newsletter mention",
    ],
  },
  {
    name: "Silver",
    price: "$1,000 - $2,499",
    color: "#C0C0C0",
    benefits: [
      "Logo on select CSWN materials",
      "Social media feature (1x per semester)",
      "Event sponsorship opportunity",
      "Website sponsor page listing",
      "Career fair priority",
    ],
  },
  {
    name: "Bronze",
    price: "$500 - $999",
    color: "#CD7F32",
    benefits: [
      "Logo on CSWN website",
      "Social media mention",
      "Event attendance opportunity",
      "Newsletter mention",
    ],
  },
];
