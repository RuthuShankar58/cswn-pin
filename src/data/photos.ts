export interface Photo {
  src: string;
  alt: string;
  w: number;
  h: number;
}

const p = (file: string, alt: string, w = 1050, h = 1400): Photo => ({
  src: `/photos/${file}.jpg`,
  alt,
  w,
  h,
});

export const PHOTOS = {
  talk: p("event-02", "A speaker wrapping up a Day in the Life session", 1400, 1050),
  paintBoba: p("event-03", "Members painting and sharing boba at a CSWN social"),
  paintGroup: p("event-04", "Members showing off a collaborative watercolor from paint night"),
  callout: p("event-05", "A CSWN callout meeting with faculty and officers"),
  careerTrip: p("event-06", "CSWN members dressed up for a company visit"),
  networking: p("event-07", "Students mingling over food at a CSWN networking event"),
  webWorkshop: p("event-08", "An Intro to Web Development workshop in progress"),
  calloutBoard: p("event-09", "CSWN's recruiting board with officer intros and event flyers"),
  fairOfficers: p("event-10", "Officers running the CSWN table at the involvement fair"),
  socialFood: p("event-11", "Members catching up over pizza at a CSWN social"),
  pieOfficer: p("event-12", "The pie-an-officer event at the CSWN Thanksgiving social", 1055, 1400),
  fairTable: p("event-01", "CSWN officers at the campus involvement fair"),
} as const;

// Montage used on the home and team pages.
export const galleryPhotos: Photo[] = [
  PHOTOS.talk,
  PHOTOS.paintBoba,
  PHOTOS.webWorkshop,
  PHOTOS.networking,
  PHOTOS.careerTrip,
  PHOTOS.paintGroup,
  PHOTOS.socialFood,
  PHOTOS.fairOfficers,
];
