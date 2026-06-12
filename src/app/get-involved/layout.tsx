import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved | CSWN - Computer Science Women's Network",
  description: "Join CSWN at Purdue Indianapolis. Learn about membership benefits, volunteer opportunities, and how to get involved.",
};

export default function GetInvolvedLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
