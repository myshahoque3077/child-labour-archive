import SiteHeader from "@/components/site-header";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-6 py-12">
        <h1 className="text-3xl font-bold md:text-4xl">About</h1>
        <p className="mt-6 text-zinc-400">
          Under construction. This page will be updated later.
        </p>
      </main>
    </div>
  );
}
