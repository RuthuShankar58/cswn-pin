import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speaker Series | CSWN - Computer Science Women's Network",
  description: "Day in the Life Speaker Series - CSWN's flagship program connecting students with industry professionals through virtual conversations.",
};

export default function SpeakerSeriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
