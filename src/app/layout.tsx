import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LatihCPNS — Simulasi CAT BKN & Bank Soal SKD (TWK, TIU, TKP)",
  description:
    "Platform latihan soal dan tryout CAT SKD CPNS gratis meliputi TWK, TIU, dan TKP/TKD lengkap dengan pembahasan dan evaluasi passing grade.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 py-6 text-center text-xs text-slate-500 dark:text-slate-400">
          <div className="mx-auto max-w-6xl px-4">
            LatihCPNS • Simulasi CAT SKD (TWK, TIU, TKP) • Passing Grade Formasi Umum: TWK 65 · TIU 80 · TKP 166
          </div>
        </footer>
      </body>
    </html>
  );
}
