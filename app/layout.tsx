// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/Header";
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
        <Header />
        {children}
      </body>
    </html>
  );
}
