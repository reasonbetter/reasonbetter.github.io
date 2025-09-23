"use client";
import { useState, useCallback } from "react";
import Image from "next/image";

export default function LiteVimeo({ id, title, posterSrc, className }: { id: string; title?: string; posterSrc: string; className?: string }) {
  const [active, setActive] = useState(false);
  const onPlay = useCallback(() => setActive(true), []);

  return (
    <div className={`relative w-full overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800 ${className || ""}`}>
      <div className="aspect-video">
        {active ? (
          <iframe
            src={`https://player.vimeo.com/video/${id}?autoplay=1&muted=1&title=0&byline=0&portrait=0`}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={title || "Vimeo video player"}
            className="h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={onPlay}
            aria-label={title ? `Play ${title}` : "Play video"}
            className="group relative block h-full w-full"
          >
            <Image
              src={posterSrc}
              alt={title || "Video thumbnail"}
              fill
              sizes="100vw"
              className="object-cover"
              priority={false}
            />
            <span className="absolute inset-0 bg-black/20 group-hover:bg-black/25 transition-colors" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-white/95 text-slate-900 shadow-md group-hover:scale-105 transition-transform" style={{ width: 56, height: 56 }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
