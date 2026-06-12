import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsors | CSWN - Computer Science Women's Network",
  description: "Partner with CSWN to connect with talented women in computer science. View sponsorship tiers and benefits.",
};

export default function SponsorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
