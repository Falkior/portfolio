import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "William Couedon — Cybersecurity & IT Portfolio",
  description:
    "Cybersecurity student and IT engineer. Windows/Linux hardening, network segmentation, full-stack development. Seeking alternance M1-M2 2026-2028.",
  keywords: [
    "cybersecurity",
    "IT",
    "portfolio",
    "William Couedon",
    "alternance",
    "security",
    "developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
