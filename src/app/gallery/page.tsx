"use client";

import PageHero from "@/components/PageHero";
import { galleryAlbums } from "@/data/gallery";
import { useState } from "react";

const filters = ["All", "Speaker Series", "Networking Events", "Workshops", "Social Events", "Industry Visits", "General Meetings"];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);

  const filteredAlbums = activeFilter === "All"
    ? galleryAlbums
    : galleryAlbums.filter((album) => album.title === activeFilter);

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Capturing moments of growth, connection, and achievement across our events and programs."
        badge="Photo Gallery"
      />

      {/* Filters */}
      <section className="py-5 bg-bg border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeFilter === filter
                    ? "bg-primary text-bg"
                    : "bg-bg-card border border-border text-text-light hover:border-primary/50 hover:text-text"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Albums Grid */}
      <section className="py-16 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredAlbums.map((album) => (
              <button
                key={album.id}
                onClick={() => { setSelectedAlbum(album.id); setLightboxOpen(true); }}
                className="group text-left bg-bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-all"
              >
                <div className="aspect-[4/3] bg-bg-alt flex items-center justify-center relative">
                  <span className="text-text-lighter text-xs">{album.title}</span>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors flex items-center justify-center">
                    <div className="w-10 h-10 bg-bg/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-text text-sm group-hover:text-primary transition-colors">{album.title}</h3>
                  <p className="text-xs text-text-light mt-1 line-clamp-2">{album.description}</p>
                  <p className="text-xs text-text-lighter mt-2">{album.imageCount} photos</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-white/60 hover:text-primary transition-colors"
            aria-label="Close lightbox"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="max-w-4xl w-full">
            <div className="aspect-[16/9] bg-bg-card border border-border rounded-xl flex items-center justify-center">
              <div className="text-center">
                <p className="text-text/60">{galleryAlbums.find((a) => a.id === selectedAlbum)?.title}</p>
                <p className="text-text-lighter text-sm mt-2">Photos coming soon</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Upload CTA */}
      <section className="py-16 bg-bg-alt border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-text mb-2">Have photos to share?</h2>
          <p className="text-text-light text-sm mb-6">
            Attended a CSWN event and captured some great moments? We&apos;d love to feature them.
          </p>
          <a href="mailto:cswn@purdue.edu" className="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-bg font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm">
            Submit Photos
          </a>
        </div>
      </section>
    </>
  );
}
