import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | CSWN - Computer Science Women's Network",
  description: "Learn about CSWN's mission, vision, core values, and programming at Purdue University Indianapolis.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
