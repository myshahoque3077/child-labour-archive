import SiteHeader from "@/components/site-header";
import { archiveCategories, archiveItems, categoryLabel } from "@/lib/archive-data";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-6 py-12">
        <h1 className="text-3xl font-bold md:text-4xl">Resources</h1>
        <p className="mt-3 max-w-3xl text-zinc-300">
          All links are collected together on this single page.
        </p>
        <div className="mt-8 space-y-8">
          {archiveCategories.map((category) => {
            const categoryItems = archiveItems.filter(
              (item) => item.category === category,
            );

            return (
              <section key={category}>
                <h2 className="text-lg font-semibold text-zinc-200">
                  {categoryLabel[category]}
                </h2>
                {categoryItems.length > 0 ? (
                  <ul className="mt-3 space-y-3">
                    {categoryItems.map((item) => (
                      <li
                        key={item.id}
                        className="rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3"
                      >
                        <a
                          href={item.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-emerald-400 hover:text-emerald-300"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 rounded-lg border border-dashed border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-zinc-400">
                    There is nothing to show in this section yet.
                  </p>
                )}
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}
