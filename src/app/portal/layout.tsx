import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portal | CSWN - Computer Science Women's Network",
  description: "Access resources, get involved, view the gallery, and more — your CSWN member portal.",
};

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
