import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alumni & Member Spotlights | CSWN - Computer Science Women's Network",
  description: "Celebrating achievements and career journeys of CSWN members and alumni at Purdue University Indianapolis.",
};

export default function SpotlightsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
