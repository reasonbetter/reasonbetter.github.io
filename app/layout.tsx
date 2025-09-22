// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";
import { Instrument_Sans, EB_Garamond } from "next/font/google";

const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument" });
const garamond = EB_Garamond({ subsets: ["latin"], variable: "--font-garamond", weight: "400" });

export const metadata: Metadata = {
  title: "David Manley — Professor of Philosophy",
  description:
    "Reasoning and the philosophy of emerging technologies and global priorities.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 ${instrument.variable} ${garamond.variable}`}>
        <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex h-14 items-center justify-between">
              <Link href="/" className="font-bold tracking-tight text-lg hidden md:inline font-garamond">David Manley</Link>
              <div className="flex flex-1 items-center justify-end gap-6">
                <nav className="flex-1 flex justify-between items-center gap-6 text-base font-semibold text-slate-700 dark:text-slate-300 md:hidden">
                  <Link href="/#talks" className="hover:text-slate-900 dark:hover:text-slate-100">Talks</Link>
                  <Link href="/#books" className="hover:text-slate-900 dark:hover:text-slate-100">Books</Link>
                  <Link href="/#research" className="hover:text-slate-900 dark:hover:text-slate-100">Papers</Link>
                  <Link href="/#teaching" className="hover:text-slate-900 dark:hover:text-slate-100">Courses</Link>
                </nav>
                <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <Link href="/#about" className="hover:text-slate-900 dark:hover:text-slate-100">About</Link>
                  <Link href="/#talks" className="hover:text-slate-900 dark:hover:text-slate-100">Talks</Link>
                  <Link href="/#books" className="hover:text-slate-900 dark:hover:text-slate-100">Books</Link>
                  <Link href="/#research" className="hover:text-slate-900 dark:hover:text-slate-100">Papers</Link>
                  <Link href="/#teaching" className="hover:text-slate-900 dark:hover:text-slate-100">Courses</Link>
                </nav>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </header>

        {children}

      </body>
    </html>
  );
}
