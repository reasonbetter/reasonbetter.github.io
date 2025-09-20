// app/page.tsx
import { site } from "@/lib/site";
import VimeoEmbed from "@/components/VimeoEmbed";
import Link from "next/link";

const VIMEO_ID = process.env.NEXT_PUBLIC_VIMEO_ID || "YOUR_VIMEO_ID";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">{site.name}</h1>
          <p className="mt-3 text-lg text-slate-700 dark:text-slate-300">{site.role}</p>
          <p className="mt-3 max-w-2xl text-slate-700 dark:text-slate-300">
            I work on reasoning, decision-making under uncertainty, and the ethics of emerging technologies and global priorities.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="rounded-md border border-slate-300 px-4 py-2" href="/research">Research</Link>
            <Link className="rounded-md border border-slate-300 px-4 py-2" href="/teaching">Teaching</Link>
            <a className="rounded-md border border-slate-300 px-4 py-2" href={site.links.cv} target="_blank" rel="noreferrer">CV (PDF)</a>
          </div>
        </div>
      </section>

      {/* Featured talk */}
      <section className="border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <h2 className="text-2xl font-semibold">Featured Talk</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Embedded from Vimeo (replace <code>YOUR_VIMEO_ID</code> or set <code>NEXT_PUBLIC_VIMEO_ID</code>).</p>
          <div className="mt-4">
            <VIMEO_ID_PLACEHOLDER />
          </div>
        </div>
      </section>

      {/* Image gallery (your assets) */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <figure className="rounded-lg overflow-hidden border">
            <img src="/images/manley.jpeg" alt="David Manley lecturing" />
            <figcaption className="px-2 py-1 text-xs text-slate-500">Lecture photo.</figcaption>
          </figure>
          <figure className="rounded-lg overflow-hidden border">
            <img src="/images/lsa-philosophy.jpg" alt="LSA Philosophy logo, University of Michigan" />
            <figcaption className="px-2 py-1 text-xs text-slate-500">U‑M LSA Philosophy. </figcaption>
          </figure>
          <figure className="rounded-lg overflow-hidden border">
            <img src="/images/reason-better-cover.jpg" alt="Reason Better cover" />
            <figcaption className="px-2 py-1 text-xs text-slate-500"><a className="underline" href="https://tophat.com/marketplace/social-science/philosophy/product/685660910" target="_blank" rel="noreferrer">Reason Better</a>.</figcaption>
          </figure>
          <figure className="rounded-lg overflow-hidden border">
            <img src="/images/reference-book.jpg" alt="The Reference Book cover" />
            <figcaption className="px-2 py-1 text-xs text-slate-500">Oxford University Press.</figcaption>
          </figure>
          <figure className="rounded-lg overflow-hidden border sm:col-span-2 md:col-span-3">
            <img src="/images/angell-hall.jpg" alt="Angell Hall at night, University of Michigan" />
            <figcaption className="px-2 py-1 text-xs text-slate-500">Angell Hall.</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

// Tiny wrapper to avoid a reference error if no ID set (delete once you set the ID)
function VIMEO_ID_PLACEHOLDER() {
  if (VIMEO_ID === "YOUR_VIMEO_ID") {
    return (
      <div className="rounded-md border p-4 text-sm text-slate-600 dark:text-slate-300">
        Set <code>NEXT_PUBLIC_VIMEO_ID</code> in .env (e.g. <code>NEXT_PUBLIC_VIMEO_ID=123456789</code>) or replace in code.
      </div>
    );
  }
  const VimeoEmbed = require("@/components/VimeoEmbed").default;
  return <VimeoEmbed id={VIMEO_ID} title="Featured Talk" />;
}
