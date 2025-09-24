// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";
import { Mulish } from "next/font/google";

const mulish = Mulish({ subsets: ["latin"], variable: "--font-mulish", weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "David Manley — Professor of Philosophy",
  description:
    "Reasoning and the philosophy of emerging technologies and global priorities.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 ${mulish.variable} ${mulish.className}`}>
        <header className="sticky top-0 z-40 bg-[#F9FAFB] dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex h-14 items-center justify-between">
              {/* Site title removed intentionally */}
              <div className="flex flex-1 items-center justify-end gap-6">
                {/* Mobile nav (right-aligned) */}
                <nav className="flex items-center justify-end gap-4 text-[1.05rem] font-medium text-black dark:text-slate-100 md:hidden">
                  <Link href="/#talks" className="hover:text-black dark:hover:text-slate-100">Talks</Link>
                  <Link href="/#books" className="hover:text-black dark:hover:text-slate-100">Books</Link>
                  <Link href="/#research" className="hover:text-black dark:hover:text-slate-100">Papers</Link>
                  <Link href="/#teaching" className="hover:text-black dark:hover:text-slate-100">Courses</Link>
                </nav>

                {/* Desktop right nav */}
                <nav className="hidden md:flex gap-6 text-[0.95rem] font-medium text-slate-700 dark:text-slate-300">
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
