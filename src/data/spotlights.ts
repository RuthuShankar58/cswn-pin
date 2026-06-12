export interface Spotlight {
  id: string;
  name: string;
  type: "internship" | "research" | "scholarship" | "award" | "alumni" | "ta";
  title: string;
  description: string;
  image?: string;
  graduationYear?: string;
  company?: string;
  quote?: string;
}

export const spotlights: Spotlight[] = [
  {
    id: "spotlight-1",
    name: "Member Spotlight",
    type: "internship",
    title: "Software Engineering Internship",
    description: "Secured a competitive software engineering internship through skills developed at CSWN events and connections made at networking sessions.",
    image: "/images/spotlights/placeholder.jpg",
    quote: "CSWN gave me the confidence and connections to pursue my dream internship.",
  },
  {
    id: "spotlight-2",
    name: "Member Spotlight",
    type: "research",
    title: "Undergraduate Research Experience",
    description: "Conducted undergraduate research in machine learning, presenting findings at a national conference.",
    image: "/images/spotlights/placeholder.jpg",
    quote: "The mentorship I received through CSWN helped me find my passion for research.",
  },
  {
    id: "spotlight-3",
    name: "Member Spotlight",
    type: "scholarship",
    title: "Grace Hopper Celebration Scholar",
    description: "Selected as a Grace Hopper Celebration scholar, attending the world's largest gathering of women technologists.",
    image: "/images/spotlights/placeholder.jpg",
    quote: "CSWN's scholarship resources made it possible for me to attend GHC.",
  },
  {
    id: "spotlight-4",
    name: "Alumni Spotlight",
    type: "alumni",
    title: "Software Engineer at Fortune 500",
    description: "After graduating, leveraged CSWN's professional development programming to launch a successful career in enterprise software.",
    image: "/images/spotlights/placeholder.jpg",
    graduationYear: "2024",
    quote: "The leadership skills I built at CSWN set me apart in my career.",
  },
];
