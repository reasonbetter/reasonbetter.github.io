// components/ThemeToggle.tsx
"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("dm-theme");
    const isDark = saved === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    setDark(isDark);
  }, []);
  return (
    <button
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light" : "Dark"}
      className="rounded-md p-2 hover:bg-slate-200/60 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
      onClick={() => {
        const next = !dark;
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem("dm-theme", next ? "dark" : "light");
        setDark(next);
      }}
    >
      {dark ? (
        // Sun icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="h-5 w-5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3v2.25M12 18.75V21M4.219 4.219l1.591 1.591M18.19 18.19l1.591 1.591M3 12h2.25M18.75 12H21M4.219 19.781l1.591-1.591M18.19 5.81l1.591-1.591" />
          <circle cx="12" cy="12" r="3.75" />
        </svg>
      ) : (
        // Moon icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="h-5 w-5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1111.21 3a7.5 7.5 0 109.79 9.79z" />
        </svg>
      )}
    </button>
  );
}
