"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Inter } from "next/font/google";

const interBold = Inter({ subsets: ["latin"], weight: ["700"] });

export default function Header() {
  const [showBrand, setShowBrand] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hiddenMobile, setHiddenMobile] = useState(false);
  const [lastY, setLastY] = useState(0);

  // Observe the hero H1 to decide when to show the compact brand in the header
  useEffect(() => {
    if (typeof window === "undefined") return;

    let observer: IntersectionObserver | null = null;
    let target: HTMLElement | null = null;

    const pickTarget = () => {
      const isDesktop = window.matchMedia("(min-width: 768px)").matches;
      const id = isDesktop ? "hero-title-desktop" : "hero-title-mobile";
      return document.getElementById(id);
    };

    const observe = () => {
      const el = pickTarget();
      if (!el) return;
      target = el;
      observer = new IntersectionObserver(
        ([entry]) => {
          setShowBrand(!entry.isIntersecting);
        },
        { root: null, threshold: 0.01 }
      );
      observer.observe(el);
    };

    observe();

    const onResize = () => {
      const newTarget = pickTarget();
      if (newTarget !== target) {
        if (observer && target) observer.unobserve(target);
        if (observer) observer.disconnect();
        observer = null;
        target = null;
        observe();
      }
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (observer) observer.disconnect();
    };
  }, []);

  // Hide on scroll down / show on scroll up (mobile only)
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      const goingDown = y > lastY + 4; // small hysteresis
      const goingUp = y < lastY - 4;
      const isMobile = window.innerWidth < 768;
      if (isMobile && !menuOpen) {
        if (goingDown && y > 48) setHiddenMobile(true);
        else if (goingUp) setHiddenMobile(false);
      } else if (!isMobile) {
        setHiddenMobile(false);
      }
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY, menuOpen]);

  return (
    <header
      className={
        `sticky top-0 z-40 bg-[#F9FAFB] dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-transform duration-300 ` +
        (hiddenMobile ? "-translate-y-full md:translate-y-0" : "translate-y-0")
      }
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Left: dynamic brand text on both mobile and desktop */}
          <div className="flex items-center">
            <Link
              href="/#top"
              className={`${interBold.className} truncate transition-opacity duration-500 ease-out ${showBrand ? "opacity-100" : "opacity-0"} pointer-events-${showBrand ? "auto" : "none"} text-slate-900 dark:text-slate-100 font-bold`}
            >
              David Manley
            </Link>
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3 md:gap-6">
            {/* Desktop nav */}
            <nav className="hidden md:flex gap-6 text-[0.95rem] font-medium text-slate-700 dark:text-slate-300">
              <Link href="/#about" className="hover:text-slate-900 dark:hover:text-slate-100">About</Link>
              <Link href="/#talks" className="hover:text-slate-900 dark:hover:text-slate-100">Talks</Link>
              <Link href="/#books" className="hover:text-slate-900 dark:hover:text-slate-100">Books</Link>
              <Link href="/#research" className="hover:text-slate-900 dark:hover:text-slate-100">Papers</Link>
              <Link href="/#teaching" className="hover:text-slate-900 dark:hover:text-slate-100">Courses</Link>
            </nav>

            <ThemeToggle />

            {/* Mobile hamburger */}
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="md:hidden rounded-md p-2 hover:bg-slate-200/60 dark:hover:bg-slate-800"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-[#F9FAFB] dark:bg-slate-900">
          <div className="mx-auto max-w-6xl px-4 py-3 flex gap-6 justify-end text-[1.05rem] font-medium text-black dark:text-slate-100">
            <Link href="/#about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/#talks" onClick={() => setMenuOpen(false)}>Talks</Link>
            <Link href="/#books" onClick={() => setMenuOpen(false)}>Books</Link>
            <Link href="/#research" onClick={() => setMenuOpen(false)}>Papers</Link>
            <Link href="/#teaching" onClick={() => setMenuOpen(false)}>Courses</Link>
          </div>
        </div>
      )}
    </header>
  );
}
