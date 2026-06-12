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
    id: "salesforce",
    name: "Salesforce",
    tier: "gold",
    website: "https://www.salesforce.com",
    logo: "/images/sponsors/salesforce.png",
  },
  {
    id: "one-america",
    name: "OneAmerica",
    tier: "silver",
    website: "https://www.oneamerica.com",
    logo: "/images/sponsors/oneamerica.png",
  },
  {
    id: "fifth-third-bank",
    name: "Fifth Third Bank",
    tier: "silver",
    website: "https://www.53.com",
    logo: "/images/sponsors/fifth-third.png",
  },
  {
    id: "merrill-lynch",
    name: "Merrill Lynch",
    tier: "gold",
    website: "https://www.ml.com",
    logo: "/images/sponsors/merrill-lynch.png",
  },
  {
    id: "faegre-drinker",
    name: "Faegre Drinker",
    tier: "silver",
    website: "https://www.faegredrinker.com",
    logo: "/images/sponsors/faegre-drinker.png",
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
