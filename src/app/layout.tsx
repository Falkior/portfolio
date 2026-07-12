import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "William Couedon — Cybersecurity & IT Portfolio",
  description:
    "Cybersecurity student with an offensive & defensive profile. CTF, pentesting, Windows/Linux hardening, network segmentation, full-stack development. Seeking alternance M1-M2 2026-2028.",
  keywords: [
    "cybersecurity",
    "IT",
    "portfolio",
    "William Couedon",
    "alternance",
    "security",
    "pentest",
    "CTF",
    "developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${jetbrainsMono.variable} ${fraunces.variable}`}
    >
      <body className="min-h-screen bg-bg font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
