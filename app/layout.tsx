// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: "Reasoning, decision-making under uncertainty, ethics of emerging technologies, and global priorities.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex h-14 items-center justify-between">
              <Link href="/" className="font-semibold tracking-tight">{site.name}</Link>
            <nav className="hidden md:flex gap-6 text-sm">
  <Link href="/#about">About</Link>
  <Link href="/#research">Research</Link>
  <Link href="/teaching">Teaching</Link>
  <a href="/cv/david-manley-cv.pdf" target="_blank" rel="noreferrer">CV</a>
</nav>

              <ThemeToggle />
            </div>
          </div>
        </header>
        {children}
        <footer className="py-10">
          <div className="mx-auto max-w-6xl px-4 text-xs text-slate-500">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
