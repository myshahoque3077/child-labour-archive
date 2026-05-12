"use client";

import { useMemo, useState } from "react";
import ArchiveCard from "@/components/archive-card";
import {
  archiveCategories,
  categoryLabel,
  type ArchiveCategory,
  type ArchiveItem,
} from "@/lib/archive-data";

type Props = {
  items: ArchiveItem[];
};

export default function ArchiveBrowser({ items }: Props) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<ArchiveCategory | "all">(
    "all",
  );

  const filteredItems = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return items.filter((item) => {
      const categoryMatch =
        activeCategory === "all" ? true : item.category === activeCategory;
      const text = `${item.title} ${item.artist ?? ""} ${item.description ?? ""}`
        .trim()
        .toLowerCase();
      const queryMatch = normalized.length === 0 ? true : text.includes(normalized);
      return categoryMatch && queryMatch;
    });
  }, [activeCategory, items, query]);

  return (
    <section className="mt-8 space-y-5">
      <div className="space-y-4 rounded-xl border border-zinc-800 bg-zinc-950 p-4">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search archive by title, artist, or keyword"
          className="w-full rounded-lg border border-zinc-700 bg-black px-4 py-2 text-sm text-zinc-100 outline-none ring-emerald-500 focus:ring-1"
        />
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`rounded-full px-3 py-1 text-sm ${
              activeCategory === "all"
                ? "bg-emerald-600 text-white"
                : "bg-zinc-900 text-zinc-300"
            }`}
          >
            All
          </button>
          {archiveCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-3 py-1 text-sm ${
                activeCategory === category
                  ? "bg-emerald-600 text-white"
                  : "bg-zinc-900 text-zinc-300"
              }`}
            >
              {categoryLabel[category]}
            </button>
          ))}
        </div>
      </div>

      <p className="text-sm text-zinc-400">
        Showing {filteredItems.length} of {items.length} records
      </p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => <ArchiveCard key={item.id} item={item} />)
        ) : (
          <div className="md:col-span-2 lg:col-span-3 rounded-xl border border-dashed border-zinc-700 bg-zinc-950 p-8 text-center text-zinc-400">
            There is nothing to show in this section yet.
          </div>
        )}
      </div>
    </section>
  );
}
