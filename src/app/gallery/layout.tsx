import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | CSWN - Computer Science Women's Network",
  description: "Browse photos from CSWN events, workshops, speaker series, and community gatherings at Purdue University Indianapolis.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
