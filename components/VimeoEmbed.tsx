// components/VimeoEmbed.tsx
"use client";
export default function VimeoEmbed({ id, title }: { id: string; title?: string }) {
  return (
    <div className="relative w-full overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="aspect-video -mb-1">
        <iframe
          src={`https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0`}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={title || "Vimeo video player"}
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
