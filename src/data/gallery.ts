export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  album: string;
  date?: string;
}

export interface GalleryAlbum {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  imageCount: number;
  date?: string;
}

export const galleryAlbums: GalleryAlbum[] = [
  {
    id: "speaker-series",
    title: "Speaker Series",
    description: "Highlights from our Day in the Life virtual speaker sessions with industry professionals.",
    coverImage: "/images/gallery/speaker-series-cover.jpg",
    imageCount: 12,
  },
  {
    id: "networking-events",
    title: "Networking Events",
    description: "Coffee & Chat sessions, mixers, and community building moments.",
    coverImage: "/images/gallery/networking-cover.jpg",
    imageCount: 15,
  },
  {
    id: "workshops",
    title: "Workshops & Competitions",
    description: "AI Build Challenge, Bug Hunt, and hands-on technical workshops.",
    coverImage: "/images/gallery/workshops-cover.jpg",
    imageCount: 10,
  },
  {
    id: "social-events",
    title: "Social Events",
    description: "Tote bag painting, tree decorating, and community celebrations.",
    coverImage: "/images/gallery/social-cover.jpg",
    imageCount: 18,
  },
  {
    id: "company-visits",
    title: "Industry Visits",
    description: "Behind-the-scenes tours of tech companies and corporate offices.",
    coverImage: "/images/gallery/visits-cover.jpg",
    imageCount: 8,
  },
  {
    id: "general-meetings",
    title: "General Meetings",
    description: "CSWN general body meetings and community gatherings.",
    coverImage: "/images/gallery/meetings-cover.jpg",
    imageCount: 20,
  },
];
