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
            <span className="inline-block rounded-full bg-emerald-600 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              Bangladesh Archive
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              Documenting Child Labour in Bangladesh
            </h1>
            <p className="mt-5 max-w-2xl text-zinc-200 md:text-lg">
              A comprehensive visual and artistic archive preserving
              documentation of child labour across Bangladesh. These works serve
              as powerful testimony to advocate for children&apos;s rights and
              dignity.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/archive"
                className="rounded-lg bg-emerald-600 px-5 py-2 font-medium hover:bg-emerald-500"
              >
                Search Archive
              </Link>
              <Link
                href="/archive"
                className="rounded-lg border border-zinc-300 px-5 py-2 font-medium text-zinc-100 hover:border-white"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-zinc-800 bg-zinc-950/70">
          <div className="mx-auto grid w-full max-w-6xl gap-5 px-6 py-10 md:grid-cols-3">
            <article className="border-l-2 border-emerald-500 pl-4">
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <p className="mt-3 text-sm text-zinc-300">
                To document, preserve, and share the stories of working
                children through diverse artistic mediums that drive meaningful
                awareness.
              </p>
            </article>
            <article className="border-l-2 border-red-500 pl-4">
              <h2 className="text-2xl font-semibold">The Reality</h2>
              <p className="mt-3 text-sm text-zinc-300">
                Millions of children across Bangladesh still work in factories,
                fields, and households, denied their right to education and
                childhood.
              </p>
            </article>
            <article className="border-l-2 border-cyan-500 pl-4">
              <h2 className="text-2xl font-semibold">Our Impact</h2>
              <p className="mt-3 text-sm text-zinc-300">
                Through photography, paintings, and writing, this archive gives
                voice to the voiceless and supports informed social action.
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
