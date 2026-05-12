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
          This collection brings together paintings, photographs, articles, and
          related documentation that engage with child labor and how childhood is
          represented and remembered. The materials are offered for study,
          teaching, and public conversation. Photographic works are listed with
          the photographer named as the primary credit on each entry.
        </p>
        <ArchiveBrowser items={archiveItems} />
      </main>
    </div>
  );
}
