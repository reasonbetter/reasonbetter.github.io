// app/page.tsx
import Link from "next/link";
import { publications } from "../lib/publications";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">Professor of Philosophy</h1>
          <p className="mt-3 max-w-2xl text-lg text-slate-700 dark:text-slate-300">
            I work on reasoning, decision-making under uncertainty, and the ethics of emerging technologies and global priorities.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/#research" className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-900">
              See publications
            </Link>
            <Link href="/#teaching" className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-900">
              View courses
            </Link>
            <a
              href="https://tophat.com/marketplace/social-science/philosophy/product/685660910"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-900"
            >
              Reason Better
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-20 grid md:grid-cols-12 gap-8">
          <div className="md:col-span-7">
            <h2 className="text-2xl md:text-3xl font-semibold">About</h2>
            <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">
              I’m a tenured professor at the University of Michigan, Ann Arbor. My recent work focuses on how people can
              reason better in complex, high-stakes environments, including the evaluation of future technologies and
              longtermist considerations.
            </p>
            <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">
              I co-authored <em>Reason Better</em>, an accessible introduction to critical thinking and effective argumentation.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a className="inline-flex items-center rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50 dark:hover:bg-slate-900"
                 href="https://scholar.google.com/" target="_blank" rel="noreferrer">Google Scholar</a>
              <a className="inline-flex items-center rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50 dark:hover:bg-slate-900"
                 href="https://philpeople.org/" target="_blank" rel="noreferrer">PhilPeople</a>
            </div>
          </div>

          {/* Contact card (no mailing list, just an email button) */}
          <div className="md:col-span-5">
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-5">
              <h3 className="font-medium">Contact</h3>
              <div className="mt-3 text-sm space-y-2">
                <div>University of Michigan, Ann Arbor</div>
                <div><a className="underline" href="mailto:david.manley@umich.edu">david.manley@umich.edu</a></div>
                <a
                  href="mailto:david.manley@umich.edu?subject=Inquiry"
                  className="mt-4 inline-flex items-center rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50 dark:hover:bg-slate-900"
                >
                  Email me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Publications — card layout */}
      <section id="research" className="scroll-mt-24 border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold">Research &amp; Publications</h2>
          <p className="mt-3 max-w-3xl text-slate-700 dark:text-slate-300">
            Selected entries; see the CV for a full list.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {publications.map((p, idx) => (
              <article key={idx} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 hover:shadow transition-shadow">
                <h3 className="text-base md:text-lg font-medium leading-snug">{p.title}</h3>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                  {p.venue}{p.year ? `, ${p.year}` : ""}
                </p>
                {p.note && <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">{p.note}</p>}
                {!!p.tags?.length && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full text-xs">{t}</span>
                    ))}
                  </div>
                )}
                {p.link && (
                  <div className="mt-4">
                    <a className="inline-flex items-center rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50 dark:hover:bg-slate-900"
                       href={p.link} target="_blank" rel="noreferrer">
                      Open
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CV section with download button */}
      <section id="cv" className="scroll-mt-24 border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold">Curriculum Vitae</h2>
          <p className="mt-3 text-slate-700 dark:text-slate-300">Short bio and downloadable CV.</p>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 rounded-xl border border-slate-200 dark:border-slate-800 p-5">
              <h3 className="font-medium">Bio (short)</h3>
              <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">
                David Manley is a professor of philosophy at the University of Michigan. His research centers on reasoning,
                decision-making under uncertainty, and evaluating long-run impacts of emerging technologies.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-5">
              <h3 className="font-medium">Download</h3>
              <a
                href="/cv/david-manley-cv.pdf"
                className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-slate-300 px-3 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-900"
              >
                Download CV (PDF)
              </a>
              <p className="mt-2 text-xs text-slate-500">Place your file at <code>/public/cv/david-manley-cv.pdf</code>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching (buttons link to course pages) */}
      <section id="teaching" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold">Teaching</h2>
          <p className="mt-3 max-w-3xl text-slate-700 dark:text-slate-300">Course pages with longer descriptions and readings.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/teaching/phil-450" className="inline-flex items-center rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50 dark:hover:bg-slate-900">Phil 450 — Emerging Technology</Link>
            <Link href="/teaching/phil-360" className="inline-flex items-center rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50 dark:hover:bg-slate-900">Phil 360 — Global Priorities</Link>
            <Link href="/teaching/phil-183" className="inline-flex items-center rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50 dark:hover:bg-slate-900">Phil 183 — Critical Reasoning</Link>
            <Link href="/teaching" className="inline-flex items-center rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50 dark:hover:bg-slate-900">Teaching index →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
