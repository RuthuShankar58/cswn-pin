export interface Partner {
  id: string;
  name: string;
  website?: string;
}

// Partners & sponsors that have supported CSWN events. TODO: add logos to /public/partners/.
export const partners: Partner[] = [
  { id: "eli-lilly", name: "Eli Lilly", website: "https://www.lilly.com" },
  { id: "amway", name: "Amway", website: "https://www.amway.com" },
  { id: "brooksource", name: "Brooksource", website: "https://www.brooksource.com" },
  { id: "dell", name: "Dell Technologies", website: "https://www.dell.com" },
  { id: "ciee", name: "CIEE", website: "https://www.ciee.org" },
  { id: "purdue-cs", name: "Purdue CS Department" },
];
