import Image from "next/image";
import type { Photo } from "@/data/photos";

interface GalleryProps {
  photos: Photo[];
  className?: string;
}

/** Responsive montage of event photos — 2 cols on mobile, 3 on desktop. */
export default function Gallery({ photos, className = "" }: GalleryProps) {
  return (
    <div className={`grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 ${className}`}>
      {photos.map((photo, i) => (
        <div
          key={photo.src}
          className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-bg-subtle"
          data-reveal
          style={{ "--reveal-delay": `${i * 50}ms` } as React.CSSProperties}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 768px) 45vw, 30vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}
