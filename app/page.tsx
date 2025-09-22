// app/page.tsx
'use client';
import Link from "next/link";
import Image from "next/image";
import { publications, Publication } from "@/lib/publications";
import { talks, Talk } from "@/lib/talks";
import VimeoEmbed from "@/components/VimeoEmbed";

export default function Home() {
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("dmanley@umich.edu");
    alert("Email address copied to clipboard!");
  };

  return (
    <main>
      {/* Hero */}
      <section className="border-b border-slate-200 dark:border-slate-800">
        {/* Mobile Hero */}
        <div className="mx-auto max-w-6xl px-4 pt-16 pb-8 md:py-16 md:hidden">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight font-garamond">David Manley</h1>
              <div className="mt-4 flex flex-wrap gap-3">
                <button onClick={copyEmailToClipboard} className="inline-flex items-center rounded-lg border border-slate-200 dark:border-slate-800 px-4 py-2 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Copy email
                </button>
                <a className="inline-flex items-center rounded-lg border border-slate-200 dark:border-slate-800 px-4 py-2 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm"
                   href="https://calendar.app.google/huGbAtsbdEhxYGRh8" target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  Book a meeting
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-1/2 max-w-[150px] flex-shrink-0">
                <Image src="/images/davidmanleyzoom.png" alt="David Manley" width={150} height={150} className="rounded-lg w-full h-auto shadow-sm" />
              </div>
              <p className="text-lg text-slate-700 dark:text-slate-300 tracking-tighter-less">
                I work on improving human reasoning, the philosophy of emerging technology, and global priorities.
              </p>
            </div>
            <div className="mt-4 dark:hidden">
              <Image src="/images/lsa-philosophy.jpg" alt="LSA Philosophy Department Logo" width={400} height={100} />
            </div>
          </div>
        </div>

        {/* Desktop Hero */}
        <div className="mx-auto max-w-5xl px-4 py-16 hidden md:flex items-center justify-between gap-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight font-garamond">David Manley</h1>
            <p className="mt-3 max-w-2xl text-lg text-slate-700 dark:text-slate-300 tracking-tighter-less">
              I work on improving human reasoning, the philosophy of future technology, and global priorities.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <a className="inline-flex items-center rounded-md bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
                 href="/cv/david-manley-cv.pdf" target="_blank" rel="noreferrer">
                Download CV
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-5">
            <h3 className="font-medium text-lg font-garamond">Contact</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <button onClick={copyEmailToClipboard} className="ml-3 text-sm text-slate-700 dark:text-slate-300 hover:underline">
                  Copy email
                </button>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <a href="https://calendar.app.google/huGbAtsbdEhxYGRh8" target="_blank" rel="noreferrer" className="ml-3 text-sm text-slate-700 dark:text-slate-300 hover:underline">
                  Book a meeting
                </a>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div className="ml-3 text-sm text-slate-700 dark:text-slate-300 whitespace-nowrap">
                  University of Michigan, Ann Arbor
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-5xl px-4 py-8 md:py-20 grid md:grid-cols-12 gap-8">
          <div className="hidden md:block md:col-span-3">
            <div className="relative h-full">
              <Image src="/images/davidmanley.png" alt="David Manley" layout="fill" objectFit="contain" className="rounded-lg" />
            </div>
          </div>
          <div className="md:col-span-9">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight font-garamond">About</h2>
            <div className="space-y-2">
              <p className="mt-4 leading-6 text-slate-700 dark:text-slate-300 tracking-tighter-less">
                I'm an associate professor of philosophy at the University of Michigan, Ann Arbor. 
              </p>
              <p className="mt-4 leading-6 text-slate-700 dark:text-slate-300 tracking-tighter-less">
                Much of my past research was about semantics, ontology, and probability. I now work on philosophical issues connected to rationality, emerging technology, and global priorities.
                </p>
              <p className="mt-4 leading-6 text-slate-700 dark:text-slate-300 tracking-tighter-less">
                I also promote rethinking the philosophical curriculum. I'm the author of <em>Reason Better</em>, a new kind of critical thinking textbook.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a className="inline-flex md:hidden items-center justify-between rounded-lg border border-slate-200 dark:border-slate-800 px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm font-medium"
                 href="/cv/david-manley-cv.pdf" target="_blank" rel="noreferrer">
                Download CV
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
              <a className="inline-flex items-center justify-between rounded-lg border border-slate-200 dark:border-slate-800 px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm font-medium"
                 href="https://scholar.google.com/citations?user=M6rlA-YAAAAJ&hl=en" target="_blank" rel="noreferrer">
                Google Scholar
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a className="inline-flex items-center justify-between rounded-lg border border-slate-200 dark:border-slate-800 px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm font-medium"
                 href="https://philpeople.org/profiles/david-manley" target="_blank" rel="noreferrer">
                PhilPeople
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                href="https://tophat.com/catalog/humanities/philosophy/full-course/reason-better-an-interdisciplinary-guide-to-critical-thinking-david-manley/3425/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-between rounded-lg border border-slate-200 dark:border-slate-800 px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm font-medium"
              >
                Reason Better
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Talks */}
      <section id="talks" className="scroll-mt-24 border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-5xl px-4 py-8 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight font-garamond">Recent Talks</h2>
              <ul className="mt-8 space-y-4">
                {talks.map((talk: Talk, idx: number) => (
                  <li key={idx}>
                    <h3 className="text-lg font-medium whitespace-pre-line leading-tight tracking-tight font-garamond">{talk.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{talk.where}, {talk.date}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <VimeoEmbed id="1120516669" />
            </div>
          </div>
        </div>
      </section>

      {/* Books */}
      <section id="books" className="scroll-mt-24 border-b border-slate-200 dark-border-slate-800">
        <div className="mx-auto max-w-5xl px-4 py-8 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight font-garamond">Books</h2>
          <div className="mt-10 grid gap-8 md:gap-2 md:grid-cols-3 text-center">
            <div className="flex flex-col items-center">
              <div className="relative w-[300px] h-[450px]">
                <Image src="/images/reason-better-cover.jpg" alt="Reason Better book cover" layout="fill" objectFit="cover" className="object-left" />
              </div>
              <a href="https://tophat.com/catalog/humanities/philosophy/full-course/reason-better-an-interdisciplinary-guide-to-critical-thinking-david-manley/3425/" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900">
                Try the text
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-[300px] h-[450px]">
                <Image src="/images/reference-book.jpg" alt="Reference book cover" layout="fill" objectFit="cover" className="object-bottom" />
              </div>
              <a href="https://www.amazon.com/Reference-Book-John-Hawthorne/dp/019870304X/" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900">
                Get the book
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-[300px] h-[450px]">
                <Image src="/images/metametaphysics cover.png" alt="Metametaphysics book cover" layout="fill" objectFit="cover" />
              </div>
              <a href="https://www.amazon.com/Metametaphysics-New-Essays-Foundations-Ontology/dp/0199546002/" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900">
                Get the book
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Publications — card layout */}
      <section id="research" className="scroll-mt-24 border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-5xl px-4 py-8 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight font-garamond">Papers</h2>
          <p className="mt-3 max-w-3xl text-slate-700 dark:text-slate-300">
            Selected entries;{" "}
            <a href="/cv/david-manley-cv.pdf" target="_blank" rel="noreferrer" className="underline hover:text-slate-900 dark:hover:text-slate-100">
              see the CV
            </a>{" "}
            for a full list.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {publications.map((p: Publication, idx: number) => (
              <article key={idx} className="rounded-lg border border-slate-200 dark:border-slate-800 p-6 shadow-sm transition-shadow hover:shadow-md flex flex-col">
                <h3 className="text-lg font-semibold leading-snug tracking-tight font-garamond">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400" dangerouslySetInnerHTML={{ __html: p.venue || "" }} />
                {p.note && <p className="mt-4 text-sm text-slate-700 dark:text-slate-300">{p.note}</p>}
                <div className="mt-auto pt-4">
                  <div className="flex justify-between items-end">
                    {!!p.tags?.length && (
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((t: string) => (
                          <span key={t} className="bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full text-xs font-medium">{t}</span>
                        ))}
                      </div>
                    )}
                    {p.link && (
                      <a className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900 flex-shrink-0"
                         href={p.link} target="_blank" rel="noreferrer">
                        Open
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Courses */}
      <section id="teaching" className="scroll-mt-24 border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-5xl px-4 py-8 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight font-garamond">Upcoming Courses</h2>
          <p className="mt-3 max-w-3xl text-slate-700 dark:text-slate-300">
            Course pages with longer descriptions and readings.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
              <h3 className="text-lg font-semibold tracking-tight font-garamond">Phil 450: Philosophy of Emerging Technology</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Upcoming / upper-level</p>
              <p className="mt-4 text-sm text-slate-700 dark:text-slate-300">
                How to shape a better future in a world of AI, human enhancement, climate tech, and engineered viruses: well-being, agency, and risks
              </p>
              <div className="mt-5">
                <span className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-400 dark:text-slate-600">
                  Info & Readings
                </span>
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
              <h3 className="text-lg font-semibold tracking-tight font-garamond">Phil 360: Global Priorities</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Recurring</p>
              <p className="mt-4 text-sm text-slate-700 dark:text-slate-300">
                An interdisciplinary course on the world’s most important problems and how to help: global health/poverty, animals/environment, emerging technologies.
              </p>
              <div className="mt-5">
                <span className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-400 dark:text-slate-600">
                  Info & Readings
                </span>
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
              <h3 className="text-lg font-semibold tracking-tight font-garamond">Phil 183: Critical Reasoning</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Recurring</p>
              <p className="mt-4 text-sm text-slate-700 dark:text-slate-300">
                Practical reasoning tools from philosophy, cognitive psych, and behavioral econ: logic, probability, decision theory; biases, evidence, causation.
              </p>
              <div className="mt-5">
                <span className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-400 dark:text-slate-600">
                  Info & Readings
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="scroll-mt-24 bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-5xl px-4 py-8 md:py-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold font-garamond">Elsewhere</h2>
              <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                <li><a href="https://tophat.com/catalog/humanities/philosophy/full-course/reason-better-an-interdisciplinary-guide-to-critical-thinking-david-manley/3425/" target="_blank" rel="noreferrer" className="hover:underline">Reason Better</a></li>
                <li><a href="https://scholar.google.com/citations?user=M6rlA-YAAAAJ&hl=en" className="hover:underline">Google Scholar</a></li>
                <li><a href="https://philpeople.org/profiles/david-manley" className="hover:underline">PhilPeople</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold font-garamond">Get in touch</h2>
              <p className="mt-3 text-slate-700 dark:text-slate-300 leading-7">
                Email is best. For students: please include your course number in the subject line.
              </p>
              <div className="mt-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:dmanley@umich.edu" className="ml-3 text-sm font-medium text-slate-800 dark:text-slate-200 hover:underline">
                  dmanley@umich.edu
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500 ml-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <a href="https://calendar.app.google/huGbAtsbdEhxYGRh8" target="_blank" rel="noreferrer" className="ml-3 text-sm font-medium text-slate-800 dark:text-slate-200 hover:underline">
                  Book a meeting
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 text-sm text-slate-500">
            © {new Date().getFullYear()} David Manley. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
