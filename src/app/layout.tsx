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
    "Empowering women in CS and tech at Purdue University Indianapolis through mentorship, workshops, speaker series, and community since 2024.",
  keywords: [
    "CSWN",
    "Computer Science Women's Network",
    "Purdue Indianapolis",
    "Purdue University Indianapolis",
    "CSWN Indy",
    "women in tech",
    "women in computing",
    "Indianapolis tech",
    "computer science",
    "professional development",
    "mentorship",
  ],
  openGraph: {
    title: "CSWN | Computer Science Women's Network",
    description: "Where Women in Tech Find Their Network — CSWN at Purdue University Indianapolis",
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
