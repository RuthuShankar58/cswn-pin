"use client";

import { useState, useEffect, useCallback } from "react";
import { recurringPrograms, eventCalendar } from "@/data/events";
import Link from "next/link";
import Image from "next/image";

const categoryColors: Record<string, string> = {
  meeting: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  speaker:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  social: "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300",
  professional:
    "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  competition:
    "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  outreach:
    "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
};

// Past event photos — add your images to /public/events/ and list them here
const pastEventPhotos = [
  { src: "/events/past-1.jpeg", alt: "CSWN past event" },
  { src: "/events/past-2.jpeg", alt: "CSWN past event" },
  { src: "/events/past-3.jpeg", alt: "CSWN past event" },
  { src: "/events/past-4.jpeg", alt: "CSWN past event" },
  { src: "/events/past-5.jpeg", alt: "CSWN past event" },
];

/* ─── Past Events Photo Carousel ─── */
function PastEventsCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % pastEventPhotos.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + pastEventPhotos.length) % pastEventPhotos.length
    );
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Main image */}
      <div className="relative w-full aspect-[16/9] max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 dark:shadow-primary/20 border border-white/40 dark:border-white/10">
        {pastEventPhotos.map((photo, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              idx === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1024px"
              priority={idx === 0}
            />
          </div>
        ))}

        {/* Soft gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/60 dark:hover:bg-white/20 transition-colors border border-white/30"
          aria-label="Previous photo"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/60 dark:hover:bg-white/20 transition-colors border border-white/30"
          aria-label="Next photo"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex gap-2 justify-center mt-5">
        {pastEventPhotos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === current
                ? "w-7 bg-primary shadow-md shadow-primary/30"
                : "bg-gray-300 dark:bg-white/20 hover:bg-primary/50"
            }`}
            aria-label={`View photo ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Main Events Page ─── */
export default function EventsPage() {
  return (
    <>
      {/* ─── Hero: Past Events Carousel ─── */}
      <section className="relative pt-20 md:pt-16 pb-20 overflow-hidden">
        {/* Background matching homepage style */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-200/60 via-white to-pink-200/50 dark:hidden" />
        <div className="absolute inset-0 bg-gradient-to-tl from-rose-100/40 via-transparent to-blue-100/50 dark:hidden" />
        <div className="absolute inset-0 hidden dark:block bg-gradient-to-br from-[#06101f] via-[#0a0e1a] to-[#140a1e]" />
        <div className="absolute inset-0 hidden dark:block bg-gradient-to-tl from-blue-900/20 via-transparent to-purple-900/20" />

        {/* Glow blobs */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-300/15 dark:bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-pink-300/15 dark:bg-secondary/15 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-10 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-primary rounded-full" />
              <span className="px-5 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 text-primary text-sm font-bold rounded-full uppercase tracking-widest border border-primary/20 dark:border-primary/30">
                Past Events
              </span>
              <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-secondary rounded-full" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Events
              </span>
            </h1>
            <p className="text-lg text-text-light dark:text-text-dark-light max-w-2xl mx-auto">
              A look back at our favorite CSWN moments — and what&apos;s coming next.
            </p>
          </div>

          {/* Carousel */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <PastEventsCarousel />
          </div>
        </div>
      </section>

      {/* ─── Upcoming Events ─── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 via-white to-sky-50/50 dark:from-purple-950/20 dark:via-[#0a0f1e] dark:to-blue-950/20" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/6 dark:bg-primary/10 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-primary rounded-full" />
              <span className="px-5 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 text-primary text-sm font-bold rounded-full uppercase tracking-widest border border-primary/20 dark:border-primary/30">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
                Coming Up
              </span>
              <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-secondary rounded-full" />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Upcoming Events
              </span>
            </h2>
          </div>

          {/* Timeline cards */}
          <div className="max-w-3xl mx-auto space-y-4">
            {eventCalendar.slice(0, 6).map((event) => (
              <div
                key={event.id}
                className="glass-card rounded-2xl p-5 hover-lift group flex items-start gap-4"
              >
                {/* Date block */}
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 border border-primary/15 dark:border-primary/25 flex flex-col items-center justify-center">
                  <span className="text-[10px] text-primary font-bold uppercase">
                    {event.date.split(" ")[0].slice(0, 3)}
                  </span>
                  <span className="text-xl font-extrabold text-text dark:text-text-dark">
                    {event.date.split(" ")[1]}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-semibold text-text dark:text-text-dark group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <span
                      className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${categoryColors[event.category]}`}
                    >
                      {event.category}
                    </span>
                  </div>
                  <p className="text-sm text-text-light dark:text-text-dark-light leading-relaxed">
                    {event.description}
                  </p>
                  {event.location && (
                    <p className="text-xs text-text-lighter dark:text-text-dark-light mt-1.5 flex items-center gap-1">
                      📍 {event.location}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Our Programs ─── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/30 to-rose-50/40 dark:from-[#0a0f1e] dark:via-[#0c1225] dark:to-[#120a18]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-primary rounded-full" />
              <span className="px-5 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 text-primary text-sm font-bold rounded-full uppercase tracking-widest border border-primary/20 dark:border-primary/30">
                Programs
              </span>
              <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-secondary rounded-full" />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                What We Do
              </span>
            </h2>
            <p className="text-text-light dark:text-text-dark-light max-w-2xl mx-auto mt-4">
              CSWN runs a diverse set of recurring programs throughout the academic year.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recurringPrograms.map((program) => (
              <div
                key={program.id}
                className="glass-card rounded-2xl overflow-hidden hover-lift group"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 dark:from-primary/20 dark:via-secondary/20 dark:to-accent/20 flex items-center justify-center">
                  <span className="text-text-lighter dark:text-text-dark-light text-xs">
                    Event Photo
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[program.category]}`}
                    >
                      {program.category}
                    </span>
                    <span className="text-xs text-text-lighter dark:text-text-dark-light">
                      {program.frequency}
                    </span>
                  </div>
                  <h3 className="font-semibold text-text dark:text-text-dark mb-2 group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-sm text-text-light dark:text-text-dark-light leading-relaxed line-clamp-3">
                    {program.description}
                  </p>
                  {program.format && (
                    <p className="text-xs text-text-lighter dark:text-text-dark-light mt-3">
                      📍 {program.format}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Don't Miss Out CTA ─── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-200/60 via-white to-pink-200/50 dark:hidden" />
        <div className="absolute inset-0 hidden dark:block bg-gradient-to-br from-[#06101f] via-[#0a0e1a] to-[#140a1e]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 dark:bg-primary/15 rounded-full blur-[120px] animate-pulse-glow" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Don&apos;t Miss Out
            </span>
          </h2>
          <p className="text-lg text-text-light dark:text-text-dark-light mb-10 max-w-xl mx-auto">
            Follow us on social media and join CSWN to stay in the loop on everything
            we&apos;re building together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/portal"
              className="group inline-flex items-center justify-center px-9 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-dark transition-all duration-300 shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 active:translate-y-0"
            >
              Join CSWN
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="https://www.instagram.com/cswn.indy/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-9 py-4 bg-white/70 dark:bg-white/5 backdrop-blur-sm border-2 border-primary/20 dark:border-primary/30 text-primary font-semibold rounded-2xl hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
