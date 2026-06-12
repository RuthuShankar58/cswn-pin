import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership | CSWN - Computer Science Women's Network",
  description: "Meet the executive board driving CSWN's mission to empower women in technology at Purdue University Indianapolis.",
};

export default function LeadershipLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
