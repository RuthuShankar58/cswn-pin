"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { href: "/about", label: "About", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { href: "/events", label: "Events", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
  { href: "/members", label: "Members", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
  { href: "/sponsors", label: "Sponsors", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { href: "/resources", label: "Resources", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
  { href: "/contact", label: "Contact", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { href: "/portal", label: "Portal", icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Desktop vertical sidebar */}
      <nav className="hidden md:flex fixed top-0 left-0 bottom-0 z-50 w-[72px] flex-col items-center py-6 bg-white/80 dark:bg-bg-dark/80 backdrop-blur-xl border-r border-gray-200/60 dark:border-white/10 shadow-sm">
        {/* Logo */}
        <Link href="/" className="mb-8 group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Image
            src="/cswnlogo.png"
            alt="CSWN Logo"
            width={36}
            height={36}
            className="rounded-xl group-hover:scale-110 transition-transform"
          />
        </Link>

        {/* Nav links */}
        <div className="flex-1 flex flex-col items-center gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-200 group ${
                  isActive
                    ? "bg-primary/10 dark:bg-primary/20 text-primary shadow-sm"
                    : "text-text-light dark:text-text-dark-light hover:text-primary hover:bg-primary/5 dark:hover:bg-primary/10"
                }`}
                aria-label={link.label}
              >
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[2px] w-1 h-5 bg-primary rounded-full" />
                )}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={link.icon} />
                </svg>

                {/* Tooltip */}
                <span className="absolute left-full ml-3 px-2.5 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-lg">
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Theme toggle at bottom */}
        <div className="mt-auto">
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile top bar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-bg-dark/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-white/10 shadow-sm">
        <div className="flex items-center justify-between h-14 px-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/cswnlogo.png"
              alt="CSWN Logo"
              width={30}
              height={30}
              className="rounded-lg"
            />
            <span className="font-bold text-text dark:text-text-dark">CSWN</span>
          </Link>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-text-light dark:text-text-dark-light hover:text-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-3 space-y-1 border-t border-gray-200/50 dark:border-white/10 bg-white/95 dark:bg-bg-dark/95 backdrop-blur-xl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                  pathname === link.href
                    ? "text-primary bg-primary/10 dark:bg-primary/20"
                    : "text-text-light dark:text-text-dark-light hover:text-primary hover:bg-primary/5 dark:hover:bg-primary/10"
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={link.icon} />
                </svg>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
