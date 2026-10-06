import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Apex Finance — Save, Withdraw & Invest",
  description:
    "Smart saving & investing made simple. Mobile-first fintech for Nigeria & Africa. Interactive UI/UX prototype, design system and developer handoff.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-slate-100 text-ink`}>
        {children}
      </body>
    </html>
  );
}
