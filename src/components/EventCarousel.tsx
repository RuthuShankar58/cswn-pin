"use client";

import { useState, useEffect, useCallback } from "react";

interface CarouselEvent {
  title: string;
  description: string;
  icon: string;
  category: string;
}

interface EventCarouselProps {
  events: CarouselEvent[];
}

export default function EventCarousel({ events }: EventCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  }, [events.length]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  }, [events.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next]);

  // Show 3 cards at a time on desktop
  const getVisibleIndices = () => {
    const indices = [];
    for (let i = -1; i <= 1; i++) {
      indices.push((currentIndex + i + events.length) % events.length);
    }
    return indices;
  };

  const visibleIndices = getVisibleIndices();

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Carousel cards */}
      <div className="flex gap-6 justify-center items-stretch overflow-hidden px-4">
        {visibleIndices.map((idx, position) => {
          const event = events[idx];
          const isCenter = position === 1;

          return (
            <div
              key={`${idx}-${position}`}
              className={`flex-shrink-0 w-full md:w-80 transition-all duration-500 ${
                isCenter
                  ? "scale-100 opacity-100 z-10"
                  : "scale-90 opacity-50 hidden md:block"
              }`}
            >
              <div className={`h-full p-6 rounded-2xl border transition-all duration-300 ${
                isCenter
                  ? "glass-card border-primary/30 shadow-lg glow-blue"
                  : "glass-card border-white/20 dark:border-white/5"
              }`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">{event.icon}</span>
                  </div>
                  <span className="text-xs font-semibold text-accent dark:text-accent uppercase tracking-wider">
                    {event.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-text dark:text-text-dark mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-text-light dark:text-text-dark-light leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
          aria-label="Previous event"
        >
          <svg className="w-5 h-5 text-text dark:text-text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {events.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-6 bg-primary"
                  : "bg-text-lighter/40 dark:bg-text-dark-light/40 hover:bg-primary/50"
              }`}
              aria-label={`Go to event ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
          aria-label="Next event"
        >
          <svg className="w-5 h-5 text-text dark:text-text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
