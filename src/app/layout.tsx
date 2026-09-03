import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cswnindy.org"),
  title: {
    default: "CSWN — Computer Science Women's Network at Purdue Indianapolis",
    template: "%s | CSWN",
  },
  description:
    "The Computer Science Women's Network (CSWN) builds community, mentorship, and professional growth for women and allies in computing at Purdue University in Indianapolis.",
  keywords: [
    "CSWN",
    "Computer Science Women's Network",
    "Purdue Indianapolis",
    "women in tech",
    "women in computing",
    "Indianapolis tech",
  ],
  openGraph: {
    title: "CSWN — Computer Science Women's Network",
    description:
      "Community, mentorship, and professional growth for women and allies in computing at Purdue University in Indianapolis.",
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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark')}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen">
        <ScrollReveal />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
