import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | CSWN - Computer Science Women's Network",
  description: "Curated resources for resume building, interview prep, internships, scholarships, and career development for women in tech.",
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
