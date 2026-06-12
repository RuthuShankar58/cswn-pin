import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CSWN | Computer Science Women's Network - Purdue Indianapolis",
  description:
    "Empowering women and allies in computing through professional development, technical growth, mentorship, leadership, networking, outreach, and community at Purdue University Indianapolis.",
  keywords: [
    "CSWN",
    "Computer Science Women's Network",
    "Purdue Indianapolis",
    "women in tech",
    "women in computing",
    "computer science",
    "professional development",
    "mentorship",
  ],
  openGraph: {
    title: "CSWN | Computer Science Women's Network",
    description: "Empowering Women in Technology Through Community, Leadership, and Opportunity",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
