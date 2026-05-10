import SiteHeader from "@/components/site-header";

export default function ContactPage() {
  const formUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL?.trim();
  const hasForm = Boolean(formUrl);
  const embeddedUrl =
    hasForm && formUrl
      ? `${formUrl}${formUrl.includes("?") ? "&" : "?"}embedded=true`
      : "";

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-6 py-12">
        <h1 className="text-3xl font-bold md:text-4xl">Contact & Submissions</h1>
        <p className="mt-3 max-w-3xl text-zinc-300">
          Use this form to submit paintings, photography, sculpture, digital art,
          or article links related to child labour documentation. Our team reviews
          every submission and publishes selected entries to the archive.
        </p>

        <section className="mt-8 rounded-xl border border-zinc-800 bg-zinc-950 p-5">
          <h2 className="text-xl font-semibold">What you can submit</h2>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            <li>Paintings and digital artwork</li>
            <li>Photography and sculpture images</li>
            <li>Article links and references</li>
          </ul>
          <p className="mt-4 text-sm text-zinc-400">
            Note: submitting does not auto-publish. We verify each submission
            before adding it to the public archive.
          </p>
        </section>

        <section className="mt-8 rounded-xl border border-zinc-800 bg-zinc-950 p-5">
          <h2 className="text-xl font-semibold">Submission Form</h2>

          {hasForm && formUrl ? (
            <div className="mt-4 space-y-4">
              <iframe
                src={embeddedUrl}
                title="Archive submission form"
                className="h-[900px] w-full rounded-lg border border-zinc-700 bg-black"
              >
                Loading...
              </iframe>
              <a
                href={formUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-lg border border-emerald-500 px-4 py-2 text-sm text-emerald-400 hover:bg-emerald-500/10"
              >
                Open form in new tab
              </a>
            </div>
          ) : (
            <div className="mt-4 rounded-lg border border-dashed border-zinc-700 bg-black/40 p-4 text-sm text-zinc-300">
              <p>
                Google Form link not configured yet.
              </p>
              <p className="mt-2 text-zinc-400">
                Add <code>NEXT_PUBLIC_GOOGLE_FORM_URL</code> in your{" "}
                <code>.env.local</code> file, then restart the dev server.
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
