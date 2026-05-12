import Link from "next/link";
import SiteHeader from "@/components/site-header";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/home/home-hero.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/65" />
          <div className="relative mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
            <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              Childhood in Labor
            </h1>
            <p className="mt-4 max-w-3xl text-xl font-medium text-zinc-200 md:text-2xl">
              Bangladesh Visual Archive
            </p>
            <p className="mt-5 max-w-3xl text-zinc-200 md:text-lg">
              A curated digital archive of paintings, sculptures, and photographs
              exploring how child labor reshapes childhood across Bangladesh and
              beyond through visual representation and collective memory.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/archive"
                className="rounded-lg bg-emerald-600 px-5 py-2 font-medium hover:bg-emerald-500"
              >
                Search Archive
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-zinc-300 px-5 py-2 font-medium text-zinc-100 hover:border-white"
              >
                Contribute
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-zinc-800 bg-zinc-950/70">
          <div className="mx-auto grid w-full max-w-6xl divide-y divide-zinc-800 px-6 py-10 md:grid-cols-3 md:divide-x md:divide-y-0">
            <article className="border-l-2 border-emerald-500 py-8 pl-4 md:py-0 md:pr-6">
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <p className="mt-3 text-sm text-zinc-300">
                To curate and preserve visual representations of child labor that
                challenge normalized perceptions of childhood, labor, and social
                inequality through digital archival practice.
              </p>
            </article>
            <article className="border-l-2 border-red-500 py-8 pl-4 md:px-6 md:py-0">
              <h2 className="text-2xl font-semibold">Our Vision</h2>
              <p className="mt-3 text-sm text-zinc-300">
                To create a critical visual space where art, documentation, and
                digital media encourage deeper reflection on the global realities
                of child labor and its impact on childhood.
              </p>
            </article>
            <article className="border-l-2 border-cyan-500 py-8 pl-4 md:py-0 md:pl-6">
              <h2 className="text-2xl font-semibold">Our Impact</h2>
              <p className="mt-3 text-sm text-zinc-300">
                By bringing together diverse visual materials, the archive seeks
                to make hidden labor visible, encourage critical engagement, and
                reshape how audiences interpret childhood under conditions of
                work.
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
