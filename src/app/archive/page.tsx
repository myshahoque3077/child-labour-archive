import ArchiveBrowser from "@/components/archive-browser";
import SiteHeader from "@/components/site-header";
import { archiveItems } from "@/lib/archive-data";

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-6 py-12">
        <h1 className="text-3xl font-bold md:text-4xl">Archive</h1>
        <p className="mt-3 max-w-3xl leading-relaxed text-zinc-300">
          This digital archive curates visual representations of child labor
          through paintings, graffiti, and photography from Bangladesh and beyond.
          The collection explores how visual culture shapes the visibility,
          memory, and understanding of childhood under conditions of labor.
        </p>
        <ArchiveBrowser items={archiveItems} />
      </main>
    </div>
  );
}
