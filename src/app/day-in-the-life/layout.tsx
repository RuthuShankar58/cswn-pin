import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Day in the Life Speaker Series | CSWN - Computer Science Women's Network",
  description:
    "Biweekly virtual sessions with industry professionals sharing what a day in their role looks like. CSWN's flagship speaker program at Purdue Indianapolis.",
};

export default function DayInTheLifeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
