export interface Leader {
  id: string;
  name: string;
  position: string;
  major?: string;
  graduationYear?: string;
  linkedin?: string;
  email?: string;
  bio?: string;
  image?: string;
}

export const leadership: Leader[] = [
  {
    id: "president",
    name: "Ruthu Shankar",
    position: "President",
    major: "Computer Science, Minor in Math & Management",
    graduationYear: "2027",
    bio: "Ruthu loves meeting new people and sparking conversations. She's especially passionate about outreach programs that inspire middle and high school girls to explore Computer Science.",
    email: "shanka61@purdue.edu",
    image: "/images/leadership/ruthu.jpg",
  },
  {
    id: "vice-president",
    name: "Ria Nimbkar",
    position: "Vice President",
    major: "Computer Science",
    graduationYear: "2027",
    bio: "A creative mind behind CSWN, Ria designs posters and fun projects to keep events engaging. She's dedicated to encouraging students to get involved in tech and campus life through CSWN.",
    email: "rnimbkar@purdue.edu",
    image: "/images/leadership/ria.jpg",
  },
  {
    id: "treasurer",
    name: "Abha Gupta",
    position: "Treasurer",
    major: "Computer Science, Minor in Math & Finance",
    graduationYear: "2027",
    bio: "Abha enjoys spending time with friends and believes in building strong communities. Through CSWN, she hopes to help bridge the gender gap in technology.",
    email: "gupt1107@purdue.edu",
    image: "/images/leadership/abha.jpg",
  },
];
