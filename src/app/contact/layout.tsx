import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | CSWN - Computer Science Women's Network",
  description: "Get in touch with CSWN at Purdue University Indianapolis. Contact us for membership, sponsorship, speaking, or general inquiries.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
