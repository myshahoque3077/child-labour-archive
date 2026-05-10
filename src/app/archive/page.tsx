import ArchiveBrowser from "@/components/archive-browser";
import SiteHeader from "@/components/site-header";
import { archiveItems } from "@/lib/archive-data";

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-6 py-12">
        <h1 className="text-3xl font-bold md:text-4xl">Archive</h1>
        <p className="mt-3 max-w-3xl text-zinc-300">
          Main archive collection of paintings, photographs, articles, and
          supporting records. In photograph entries, only the artist name is
          shown as requested.
        </p>
        <ArchiveBrowser items={archiveItems} />
      </main>
    </div>
  );
}
