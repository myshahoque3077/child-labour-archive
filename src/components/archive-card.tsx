 "use client";

import { useEffect, useState } from "react";
import type { ArchiveItem } from "@/lib/archive-data";
import { categoryLabel } from "@/lib/archive-data";
import Image from "next/image";

type Props = {
  item: ArchiveItem;
};

export default function ArchiveCard({ item }: Props) {
  const showPhotographArtistOnly = item.category === "photograph";
  const hasLocalImage = item.sourceUrl.startsWith("/images/");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    if (!isPreviewOpen) {
      return;
    }

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsPreviewOpen(false);
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [isPreviewOpen]);

  return (
    <article className="rounded-xl border border-zinc-800 bg-zinc-950 p-5 text-zinc-100">
      <p className="mb-2 text-xs uppercase tracking-wider text-emerald-400">
        {categoryLabel[item.category]}
      </p>
      {hasLocalImage ? (
        <div className="mb-4 flex w-full items-center justify-center rounded-lg border border-zinc-800 bg-black/40 p-2">
          <button
            type="button"
            onClick={() => setIsPreviewOpen(true)}
            className="w-full cursor-zoom-in"
            aria-label={`Open ${item.title} in fullscreen`}
          >
            <Image
              src={item.sourceUrl}
              alt={item.title}
              width={1200}
              height={800}
              className="h-auto max-h-[420px] w-full rounded object-contain"
            />
          </button>
        </div>
      ) : null}
      {showPhotographArtistOnly ? (
        <p className="mt-2 text-sm text-zinc-300">
          Artist: {item.artist ?? "Unknown"}
        </p>
      ) : (
        <>
          {item.artist ? (
            <p className="mt-2 text-sm text-zinc-300">By {item.artist}</p>
          ) : null}
          {item.description ? (
            <p className="mt-2 text-sm text-zinc-400">{item.description}</p>
          ) : null}
        </>
      )}

      {hasLocalImage && isPreviewOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsPreviewOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${item.title} fullscreen preview`}
        >
          <button
            type="button"
            onClick={() => setIsPreviewOpen(false)}
            className="absolute right-5 top-5 rounded border border-zinc-500 px-3 py-1 text-sm text-white hover:bg-white/10"
          >
            Close
          </button>
          <div
            className="relative h-[90vh] w-[95vw]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={item.sourceUrl}
              alt={item.title}
              fill
              className="object-contain"
              sizes="95vw"
              priority
            />
          </div>
        </div>
      ) : null}
    </article>
  );
}
