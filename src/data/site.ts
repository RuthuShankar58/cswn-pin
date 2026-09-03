export const CONTACT_EMAIL = "cswn@purdue.edu";

export const SOCIALS = [
  {
    label: "Instagram",
    handle: "@cswnindy",
    href: "https://www.instagram.com/cswnindy/",
  },
  {
    label: "LinkedIn",
    handle: "Computer Science Women's Network",
    href: "https://www.linkedin.com/company/cswn/",
  },
  {
    label: "Discord",
    handle: "Join the server",
    href: "https://discord.gg/6kWvVBEzQ",
  },
  {
    label: "BoilerLink",
    handle: "cswnindy",
    href: "https://boilerlink.purdue.edu/organization/cswnindy",
  },
] as const;

// Homepage / About stats. TODO: update each semester.
export const STATS = [
  { value: 75, suffix: "+", label: "Active members" },
  { value: 30, suffix: "+", label: "Events a year" },
  { value: 15, suffix: "+", label: "Speakers hosted" },
  { value: 6, suffix: "+", label: "Industry partners" },
];
