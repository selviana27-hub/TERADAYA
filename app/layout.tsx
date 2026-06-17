import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import GSButton from "@/components/GSButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tera Daya Indonesia",
  description:
    "Website Resmi Tera Daya Indonesia - Pemberdayaan Masyarakat dan Generasi Muda Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">

        {/* Floating Button GS */}
        <GSButton />

        {/* Seluruh Halaman Website */}
        {children}

      </body>
    </html>
  );
}