export interface Photo {
  src: string;
  alt: string;
  w: number;
  h: number;
}

const p = (file: string, alt: string, w: number, h: number): Photo => ({
  src: `/photos/${file}.jpg`,
  alt,
  w,
  h,
});

// Every photo below is used EXACTLY ONCE across the site — see the
// per-page sets at the bottom. Don't reuse a key in two places.
export const PHOTOS = {
  // originals
  fairCloudy: p("event-01", "CSWN officers at the campus involvement fair", 1050, 1400),
  talk: p("event-02", "A speaker wrapping up a Day in the Life session", 1400, 1050),
  paintBoba: p("event-03", "Watercolor supplies and boba at a CSWN paint social", 1050, 1400),
  paintArt: p("event-04", "Members holding up a collaborative watercolor from paint night", 1050, 1400),
  calloutMeeting: p("event-05", "A CSWN callout meeting with a faculty guest", 1050, 1400),
  careerTrip: p("event-06", "CSWN members dressed up for a company visit", 1050, 1400),
  networking: p("event-07", "Students mingling over food at a CSWN networking event", 1050, 1400),
  webWorkshop: p("event-08", "An Intro to Web Development workshop in progress", 1050, 1400),
  recruitBoard: p("event-09", "CSWN's recruiting board with officer intros and event flyers", 1050, 1400),
  fairSunny: p("event-10", "Officers running the CSWN table at the involvement fair", 1050, 1400),
  socialFood: p("event-11", "Members catching up over pizza at a CSWN social", 1050, 1400),
  pieOfficer: p("event-12", "The pie-an-officer event at the CSWN Thanksgiving social", 1055, 1400),
  // new batch
  calloutTable: p("event-13", "Officers at the CSWN callout table with posters and flyers", 768, 1024),
  halloweenOfficers: p("event-14", "Officers hosting the Halloween 'pick your poison' social", 768, 1024),
  projectShowcase: p("event-15", "Members showing off hackathon-winning projects on their laptops", 768, 1024),
  websiteTalk: p("event-16", "A member presenting a personal website project to the room", 768, 1024),
  cateredDinner: p("event-17", "Members going through the buffet line at a CSWN dinner", 1024, 768),
  breakfastMidnight: p("event-18", "The Breakfast at Midnight dead-week social", 768, 1024),
  paintSip: p("event-19", "Members with the canvases they painted at a paint-and-sip social", 1050, 1400),
  halloweenMocktails: p("event-20", "The 'pick your poison' mocktail bar at the Halloween social", 1063, 1400),
  stickerMaking: p("event-21", "Members making their own stickers at a craft social", 1320, 1320),
  bouquets: p("event-22", "Members with the bouquets they built at a flower social", 1320, 1312),
  downtownGroup: p("event-23", "A big CSWN group downtown at the Soldiers & Sailors Monument", 1063, 1400),
} as const;

export const officerGraphic = {
  president: p("officer-president", "Ruthu Shankar — President", 540, 675),
  "vice-president": p("officer-vp", "Ria Nimbkar — Vice President", 540, 675),
  treasurer: p("officer-treasurer", "Abha Gupta — Treasurer", 540, 675),
} as const;

/* -------- per-page photo sets (no photo appears twice) -------- */

// Home hero cluster
export const heroPhotos = {
  main: PHOTOS.downtownGroup,
  inset: PHOTOS.paintArt,
};

// Home "A year in photos" montage
export const homeGallery: Photo[] = [
  PHOTOS.fairSunny,
  PHOTOS.halloweenOfficers,
  PHOTOS.breakfastMidnight,
  PHOTOS.pieOfficer,
  PHOTOS.cateredDinner,
  PHOTOS.calloutTable,
  PHOTOS.fairCloudy,
  PHOTOS.halloweenMocktails,
  PHOTOS.recruitBoard,
];

// About "what we focus on" cards, in order
export const aboutFocusPhotos: Photo[] = [
  PHOTOS.careerTrip, // Professional development
  PHOTOS.webWorkshop, // Technical growth
  PHOTOS.networking, // Mentorship
  PHOTOS.bouquets, // Community
];

// Events recurring-program cards, keyed by program id
export const programPhoto: Record<string, Photo> = {
  ditl: PHOTOS.talk,
  "women-in-tech-panel": PHOTOS.calloutMeeting,
  "coffee-chat": PHOTOS.socialFood,
  "career-workshops": PHOTOS.websiteTalk,
  "ai-build-challenge": PHOTOS.projectShowcase,
  socials: PHOTOS.paintBoba,
};

// Join "why join" pair
export const joinPhotos: Photo[] = [PHOTOS.paintSip, PHOTOS.stickerMaking];
