// app/page.tsx
'use client';
import Link from "next/link";
import Image from "next/image";
import { publications, Publication } from "@/lib/publications";
import { talks, Talk } from "@/lib/talks";
import VimeoEmbed from "@/components/VimeoEmbed";
import LiteVimeo from "@/components/LiteVimeo";
import { Inter } from "next/font/google";
import { useState } from "react";

const titleFont = Inter({ subsets: ["latin"], weight: ["600", "700"], fallback: ["system-ui", "-apple-system", "Segoe UI", "Helvetica", "Arial", "sans-serif"] });

export default function Home() {
  const [copiedMobile, setCopiedMobile] = useState(false);
  const [copiedDesktop, setCopiedDesktop] = useState(false);
  const [copiedAbout, setCopiedAbout] = useState(false);

  const copyEmail = async (setCopied: (v: boolean) => void) => {
    try { await navigator.clipboard.writeText("dmanley@umich.edu"); } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 10000);
  };

  return (
    <main>
      {/* Hero */}
      <section className="border-b border-slate-200 dark:border-slate-800">
        {/* Mobile Hero */}
        <div className="mx-auto max-w-6xl px-4 pt-16 pb-8 md:py-16 md:hidden">
          <div className="space-y-6">
            <div>
              <h1 id="hero-title-mobile" className={`text-4xl font-bold leading-tight tracking-[-0.035em] ${titleFont.className}`}>David Manley</h1>
            </div>

            <div className="flex items-stretch gap-4">
              <div className="relative w-[38%] max-w-[160px] aspect-[2/3] flex-shrink-0">
                <Image src="/images/new.jpeg" alt="David Manley" fill sizes="(max-width: 768px) 38vw" className="rounded-lg object-cover shadow-sm" priority />
              </div>
              <div className="flex-1">
                <p className="text-lg text-slate-700 dark:text-slate-300 tracking-tighter-less">
                  Philosopher working on reasoning, emerging technology, and global priorities.
                </p>
                <div className="mt-3 flex flex-col gap-2 items-start">
                  <button
                    onClick={() => copyEmail(setCopiedMobile)}
                    className={`inline-flex items-center rounded-lg border px-4 py-2 text-sm font-medium shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 text-[var(--accent)] border-slate-300 dark:border-slate-700`}
                  >
                    {copiedMobile ? (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[var(--accent)]" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                        </svg>
                        Copied
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[var(--accent)]" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        Copy email
                      </>
                    )}
                  </button>
                  <a className="inline-flex items-center rounded-lg border border-slate-300 dark:border-slate-700 px-4 py-2 text-sm font-medium shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 text-[var(--accent)]"
                    href="https://calendar.app.google/huGbAtsbdEhxYGRh8" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[var(--accent)]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    Book a meeting
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Hero */}
        <div className="mx-auto max-w-5xl px-4 py-16 hidden md:flex items-center justify-between gap-8">
          <div className="flex-1">
            <h1 id="hero-title-desktop" className={`text-4xl md:text-5xl font-bold leading-tight tracking-[-0.035em] ${titleFont.className}`}>David Manley</h1>
            <p className="mt-3 max-w-xl text-lg md:text-xl text-slate-700 dark:text-slate-300 tracking-tighter-less">
              <span className="md:whitespace-nowrap">Philosopher working on reasoning, emerging technology, and global priorities.</span>
              <br className="hidden md:block" />
            </p>
            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <a className="inline-flex items-center rounded-md bg-white text-[var(--accent)] border border-slate-300 dark:border-slate-700 px-4 py-2 text-sm font-medium hover:bg-slate-50 dark:bg-slate-900 dark:text-[var(--accent)] dark:hover:bg-slate-800 shadow-sm"
                 href="/cv/david-manley-cv.pdf" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 003 3h10a2 2 0 003-3v-1M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open CV
              </a>
              <button
                onClick={() => copyEmail(setCopiedDesktop)}
                className="inline-flex items-center rounded-md bg-white text-[var(--accent)] border border-slate-300 dark:border-slate-700 px-4 py-2 text-sm font-medium hover:bg-slate-50 dark:bg-slate-900 dark:text-[var(--accent)] dark:hover:bg-slate-800 shadow-sm"
              >
                {copiedDesktop ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[var(--accent)]" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    Copied
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[var(--accent)]" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    Copy address
                  </>
                )}
              </button>
              <a className="inline-flex items-center rounded-md bg-white text-[var(--accent)] border border-slate-300 dark:border-slate-700 px-4 py-2 text-sm font-medium hover:bg-slate-50 dark:bg-slate-900 dark:text-[var(--accent)] dark:hover:bg-slate-800 shadow-sm"
                 href="https://calendar.app.google/huGbAtsbdEhxYGRh8" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[var(--accent)]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                Book a meeting
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 border-b border-slate-200 dark:border-slate-800 bg-[#F9FAFB] dark:bg-slate-900">
        <div className="mx-auto max-w-5xl px-4 py-8 md:py-20 grid md:grid-cols-12 gap-8">
           {/* Left image larger */}
           <div className="hidden md:block md:col-span-3 pt-0">
            <div className="relative h-full overflow-hidden">
              <Image src="/images/davidmanley.jpeg" alt="David Manley" fill className="object-contain object-left" />
             </div>
           </div>

           {/* Right content: text + external buttons */}
           <div className="md:col-span-9 text-[1.05rem] md:text-[1.07rem]">
             <h2 className={`mt-0 mb-2 text-[1.7rem] md:text-[2.05rem] font-semibold leading-snug tracking-[0em] ${titleFont.className}`}>About</h2>
             <div className="space-y-2">
               <p className="mt-3 leading-6 text-slate-700 dark:text-slate-300 tracking-tighter-less">
                 I'm a tenured associate professor of philosophy at the University of Michigan, Ann Arbor. 
               </p>
               <p className="mt-3 leading-6 text-slate-700 dark:text-slate-300 tracking-tighter-less">
                 Much of my past research was about semantics, ontology, and probability. I now work on philosophical issues connected to rationality, emerging technology, and global priorities.
                </p>
               <p className="mt-3 leading-6 text-slate-700 dark:text-slate-300 tracking-tighter-less">
                 I also promote rethinking the philosophical curriculum. To that end, I’ve created several new courses at UM (described below), as well as a critical thinking textbook called <em>Reason Better</em>. Instructors can request free access at the link below.
               </p>
             </div>

            {/* External buttons under text (desktop) */}
            <div className="mt-8 hidden md:flex flex-wrap gap-3">
              <a className="inline-flex items-center justify-between rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm font-medium text-[var(--accent)] dark:text-[var(--accent)]"
                 href="https://scholar.google.com/citations?user=M6rlA-YAAAAJ&hl=en" target="_blank" rel="noreferrer">
                Google Scholar
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 003-3v-1M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a className="inline-flex items-center justify-between rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm font-medium text-[var(--accent)] dark:text-[var(--accent)]"
                 href="https://philpeople.org/profiles/david-manley" target="_blank" rel="noreferrer">
                PhilPeople
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                href="https://tophat.com/catalog/humanities/philosophy/full-course/reason-better-an-interdisciplinary-guide-to-critical-thinking-david-manley/3425/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-between rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm font-medium text-[var(--accent)] dark:text-[var(--accent)]"
              >
                Reason Better
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Existing buttons for mobile stay as before */}
            <div className="mt-8 flex flex-wrap gap-3 md:hidden">
              <a className="inline-flex md:hidden items-center justify-between rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm font-medium text-[var(--accent)] dark:text-[var(--accent)]"
                 href="/cv/david-manley-cv.pdf" target="_blank" rel="noreferrer">
                Download CV
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
              <a className="inline-flex items-center justify-between rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm font-medium text-[var(--accent)] dark:text-[var(--accent)]"
                 href="https://scholar.google.com/citations?user=M6rlA-YAAAAJ&hl=en" target="_blank" rel="noreferrer">
                Google Scholar
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a className="inline-flex items-center justify-between rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm font-medium text-[var(--accent)] dark:text-[var(--accent)]"
                 href="https://philpeople.org/profiles/david-manley" target="_blank" rel="noreferrer">
                PhilPeople
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                href="https://tophat.com/catalog/humanities/philosophy/full-course/reason-better-an-interdisciplinary-guide-to-critical-thinking-david-manley/3425/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-between rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm font-medium text-[var(--accent)] dark:text-[var(--accent)]"
              >
                Reason Better
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <h2 className={`mt-0 mb-2 text-[1.7rem] md:text-[2.05rem] font-semibold leading-snug tracking-[0em] ${titleFont.className}`}>Recent Talks</h2>
              <ul className="mt-6 space-y-4">
                {talks.map((talk: Talk, idx: number) => (
                  <li key={idx}>
                    <h3 className="text-lg font-semibold leading-tight tracking-tight">{talk.title}</h3>
                    <p className="text-[0.95rem] text-slate-600 dark:text-slate-400">{talk.where}, {talk.date}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="md:hidden">
                <LiteVimeo id="1120516669" title="Recent talk" />
              </div>
              <div className="hidden md:block">
                <VimeoEmbed id="1120516669" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Books */}
      <section id="books" className="scroll-mt-24 border-b border-slate-200 dark:border-slate-800 bg-[#F9FAFB] dark:bg-slate-900">
        <div className="mx-auto max-w-5xl px-4 py-8 md:py-20">
          <h2 className={`mt-0 mb-2 text-[1.7rem] md:text-[2.05rem] font-semibold leading-snug tracking-[0em] ${titleFont.className}`}>Books</h2>
          <div className="mt-10 grid grid-cols-3 gap-1 md:gap-2 md:grid-cols-3 text-center">
            <div className="flex flex-col items-center">
              <a href="https://tophat.com/catalog/humanities/philosophy/full-course/reason-better-an-interdisciplinary-guide-to-critical-thinking-david-manley/3425/" target="_blank" rel="noreferrer" className="block relative w-full aspect-[2/3] md:w-[300px] md:h-[450px] md:aspect-auto overflow-hidden">
                <Image src="/images/reason-better-cover.jpg" alt="Reason Better book cover" fill className="object-cover object-left" />
                <span className="sr-only">Open Reason Better</span>
              </a>
              <a href="https://tophat.com/catalog/humanities/philosophy/full-course/reason-better-an-interdisciplinary-guide-to-critical-thinking-david-manley/3425/" target="_blank" rel="noreferrer" className="mt-2 md:mt-4 inline-flex items-center rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-2 py-1 text-xs md:text-sm md:px-4 md:py-2 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm text-[var(--accent)] dark:text-[var(--accent)]">
                Try the text
                <svg xmlns="http://www.w3.org/2000/svg" className="hidden md:inline h-4 w-4 ml-2 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="flex flex-col items-center">
              <a href="https://www.amazon.com/Reference-Book-John-Hawthorne/dp/019870304X/" target="_blank" rel="noreferrer" className="block relative w-full aspect-[2/3] md:w-[300px] md:h-[450px] md:aspect-auto overflow-hidden">
                <Image src="/images/reference-book.jpg" alt="Reference book cover" fill className="object-cover object-center" />
                <span className="sr-only">Open Reference Book</span>
              </a>
              <a href="https://www.amazon.com/Reference-Book-John-Hawthorne/dp/019870304X/" target="_blank" rel="noreferrer" className="mt-2 md:mt-4 inline-flex items-center rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-2 py-1 text-xs md:text-sm md:px-4 md:py-2 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm text-[var(--accent)] dark:text-[var(--accent)]">
                Get the book
                <svg xmlns="http://www.w3.org/2000/svg" className="hidden md:inline h-4 w-4 ml-2 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="flex flex-col items-center">
              <a href="https://www.amazon.com/Metametaphysics-New-Essays-Foundations-Ontology/dp/0199546002/" target="_blank" rel="noreferrer" className="block relative w-full aspect-[2/3] md:w-[300px] md:h-[450px] md:aspect-auto overflow-hidden">
                <Image src="/images/metametaphysics cover.png" alt="Metametaphysics book cover" fill className="object-cover object-center" />
                <span className="sr-only">Open Metametaphysics</span>
              </a>
              <a href="https://www.amazon.com/Metametaphysics-New-Essays-Foundations-Ontology/dp/0199546002/" target="_blank" rel="noreferrer" className="mt-2 md:mt-4 inline-flex items-center rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-2 py-1 text-xs md:text-sm md:px-4 md:py-2 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm text-[var(--accent)] dark:text-[var(--accent)]">
                Get the book
                <svg xmlns="http://www.w3.org/2000/svg" className="hidden md:inline h-4 w-4 ml-2 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <h2 className={`mt-0 mb-2 text-[1.7rem] md:text-[2.05rem] font-semibold leading-snug tracking-[0em] ${titleFont.className}`}>Papers</h2>
          <p className="mt-2 max-w-3xl text-slate-700 dark:text-slate-300">
            Selected entries;{" "}
            <a href="/cv/david-manley-cv.pdf" target="_blank" rel="noreferrer" className="underline text-[var(--accent)] hover:opacity-80">
              see the CV
            </a>{" "}
            for a full list.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {publications.map((p: Publication, idx: number) => (
              <article key={idx} className="rounded-lg border border-slate-200 dark:border-slate-800 p-5 md:p-6 shadow-sm transition-shadow hover:shadow-md flex flex-col">
                <h3 className="text-lg font-semibold leading-snug tracking-tight">{p.title}</h3>
                <p className="mt-1 text-[0.95rem] text-slate-600 dark:text-slate-400" dangerouslySetInnerHTML={{ __html: p.venue || "" }} />
                {p.note && <p className="mt-4 text-[0.95rem] text-slate-700 dark:text-slate-300">{p.note}</p>}
                <div className="mt-auto pt-4">
                  <div className="flex justify-between items-end gap-2">
                    {!!p.tags?.length && (
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((t: string) => (
                          <span key={t} className="bg-[#3D5A8014] dark:bg-[#B0C2D42E] text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-full text-sm font-medium">{t}</span>
                        ))}
                      </div>
                    )}
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-sm text-[var(--accent)] hover:opacity-80"
                      >
                        PDF
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1 text-[var(--accent)]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
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
          <h2 className={`mt-0 mb-2 text-[1.7rem] md:text-[2.05rem] font-semibold leading-snug tracking-[0em] ${titleFont.className}`}>Upcoming Courses</h2>
          <p className="mt-2 max-w-3xl text-slate-700 dark:text-slate-300">
            Course pages with longer descriptions and readings.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
              <h3 className="text-lg font-semibold tracking-tight">Phil 450: Philosophy of Emerging Technology</h3>
              <p className="mt-2 text-[0.95rem] text-slate-600 dark:text-slate-400">Upcoming / upper-level</p>
              <p className="mt-4 text-[0.95rem] text-slate-700 dark:text-slate-300">
                How to shape a better future in a world of AI, human enhancement, climate tech, and engineered viruses: well-being, agency, and risks
              </p>
              <div className="mt-5">
                <span className="inline-flex items-center rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-400 dark:text-slate-600">
                  Info & Readings
                </span>
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
              <h3 className="text-lg font-semibold tracking-tight">Phil 360: Global Priorities</h3>
              <p className="mt-2 text-[0.95rem] text-slate-600 dark:text-slate-400">Recurring</p>
              <p className="mt-4 text-[0.95rem] text-slate-700 dark:text-slate-300">
                An interdisciplinary course on the world’s most important problems and how to help: global health/poverty, animals/environment, emerging technologies.
              </p>
              <div className="mt-5">
                <span className="inline-flex items-center rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-400 dark:text-slate-600">
                  Info & Readings
                </span>
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
              <h3 className="text-lg font-semibold tracking-tight">Phil 183: Critical Reasoning</h3>
              <p className="mt-2 text-[0.95rem] text-slate-600 dark:text-slate-400">Recurring</p>
              <p className="mt-4 text-[0.95rem] text-slate-700 dark:text-slate-300">
                Practical reasoning tools from philosophy, cognitive psych, and behavioral econ: logic, probability, decision theory; biases, evidence, causation.
              </p>
              <div className="mt-5">
                <span className="inline-flex items-center rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-400 dark:text-slate-600">
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
              <h2 className={`mt-0 mb-2 text-[1.35rem] font-semibold leading-snug tracking-[0em] ${titleFont.className}`}>Elsewhere</h2>
              <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                <li><a href="https://tophat.com/catalog/humanities/philosophy/full-course/reason-better-an-interdisciplinary-guide-to-critical-thinking-david-manley/3425/" target="_blank" rel="noreferrer" className="text-[var(--accent)] hover:opacity-80">Reason Better</a></li>
                <li><a href="https://scholar.google.com/citations?user=M6rlA-YAAAAJ&hl=en" className="text-[var(--accent)] hover:opacity-80">Google Scholar</a></li>
                <li><a href="https://philpeople.org/profiles/david-manley" className="text-[var(--accent)] hover:opacity-80">PhilPeople</a></li>
              </ul>
            </div>
            <div>
              <h2 className={`mt-0 mb-2 text-[1.35rem] font-semibold leading-snug tracking-[0em] ${titleFont.className}`}>Get in touch</h2>
              <p className="mt-2 text-slate-700 dark:text-slate-300 leading-7">
                Email is best. For students: please include your course number in the subject line.
              </p>
              <div className="mt-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--accent)]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:dmanley@umich.edu" className="ml-3 text-sm font-medium text-[var(--accent)] hover:opacity-80">
                  dmanley@umich.edu
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--accent)] ml-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <a href="https://calendar.app.google/huGbAtsbdEhxYGRh8" target="_blank" rel="noreferrer" className="ml-3 text-sm font-medium text-[var(--accent)] hover:opacity-80">
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
