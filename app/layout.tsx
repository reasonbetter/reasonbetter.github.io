// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";

export const metadata: Metadata = {
  title: "David Manley — Professor of Philosophy",
  description:
    "Reasoning, decision-making under uncertainty, and the ethics of emerging technologies and global priorities.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex h-14 items-center justify-between">
              <Link href="/" className="font-semibold tracking-tight">David Manley</Link>
              <nav className="hidden md:flex gap-6 text-sm">
                <Link href="/#about">About</Link>
                <Link href="/#research">Research</Link>
                <Link href="/#cv">CV</Link>
                <Link href="/teaching">Teaching</Link>
                <Link href="/#contact">Contact</Link>
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </header>

        {children}

        {/* Footer with “Get in touch / Elsewhere” + #contact anchor */}
        <footer id="contact" className="py-12 border-t border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold">Get in touch</h3>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300 max-w-prose">
                  Email is best. For students: include your course number in the subject line.
                </p>
                <div className="mt-3 text-sm">
                  <a className="underline" href="mailto:david.manley@umich.edu">david.manley@umich.edu</a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Elsewhere</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li><a className="underline" href="https://tophat.com/marketplace/social-science/philosophy/product/685660910" target="_blank" rel="noreferrer">Reason Better</a></li>
                  <li><a className="underline" href="https://scholar.google.com/" target="_blank" rel="noreferrer">Google Scholar</a></li>
                  <li><a className="underline" href="https://philpeople.org/" target="_blank" rel="noreferrer">PhilPeople</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} David Manley. All rights reserved.</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
