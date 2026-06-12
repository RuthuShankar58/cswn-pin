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
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-text-light hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Albums Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAlbums.map((album) => (
              <button
                key={album.id}
                onClick={() => {
                  setSelectedAlbum(album.id);
                  setLightboxOpen(true);
                }}
                className="group text-left bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center relative">
                  <span className="text-text-lighter text-sm">{album.title}</span>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-text group-hover:text-primary transition-colors">
                    {album.title}
                  </h3>
                  <p className="text-sm text-text-light mt-1 line-clamp-2">{album.description}</p>
                  <p className="text-xs text-text-lighter mt-2">{album.imageCount} photos</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-primary transition-colors"
            aria-label="Close lightbox"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="max-w-4xl w-full">
            <div className="aspect-[16/9] bg-gray-800 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <p className="text-white/60 text-lg">
                  {galleryAlbums.find((a) => a.id === selectedAlbum)?.title}
                </p>
                <p className="text-white/40 text-sm mt-2">Photos coming soon</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Upload CTA */}
      <section className="py-16 bg-bg-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-text mb-4">Have Photos to Share?</h2>
          <p className="text-text-light mb-6">
            Attended a CSWN event and captured some great moments? We&apos;d love to feature them in our gallery.
          </p>
          <a
            href="mailto:cswn@purdue.edu"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            Submit Photos
          </a>
        </div>
      </section>
    </>
  );
}
