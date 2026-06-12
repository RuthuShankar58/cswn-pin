import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | CSWN - Computer Science Women's Network",
  description: "Explore CSWN's events including speaker series, workshops, competitions, networking events, and more at Purdue University Indianapolis.",
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
