import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Members | CSWN - Computer Science Women's Network",
  description: "Meet CSWN's leadership team, member spotlights, and community at Purdue University Indianapolis.",
};

export default function MembersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
