// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "David Manley — Professor of Philosophy",
  description:
    "Reasoning and the philosophy of emerging technologies and global priorities.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 ${inter.className}`}>
        <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex h-14 items-center justify-between">
              <Link href="/" className="font-bold tracking-tight text-lg">David Manley</Link>
              <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-700 dark:text-slate-300">
                <Link href="/#about" className="hover:text-slate-900 dark:hover:text-slate-100">About</Link>
                <Link href="/#research" className="hover:text-slate-900 dark:hover:text-slate-100">Research</Link>
                <Link href="/#download" className="hover:text-slate-900 dark:hover:text-slate-100">CV</Link>
                <Link href="/teaching" className="hover:text-slate-900 dark:hover:text-slate-100">Teaching</Link>
                <Link href="/#contact" className="hover:text-slate-900 dark:hover:text-slate-100">Contact</Link>
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </header>

        {children}

      </body>
    </html>
  );
}
