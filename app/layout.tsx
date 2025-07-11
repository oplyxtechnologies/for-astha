// app/layout.tsx or app/root-layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script } from "next/font/google"; // 👈 add

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* NEW: handwritten font */
const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aastha Notebook",
  description: "A little interactive notebook of love.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${dancingScript.variable}   /* 👈 inject the handwriting font */
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
