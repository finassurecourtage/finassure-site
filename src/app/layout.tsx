import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

// Polices hébergées en local (RGPD : aucun appel à Google Fonts côté visiteur)
const inter = localFont({
  src: "./fonts/inter.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});
const playfair = localFont({
  src: "./fonts/playfair.woff2",
  variable: "--font-serif",
  weight: "400 900",
  display: "swap",
});

const DESCRIPTION =
  "FINASSURE Courtage, cabinet de courtage en assurance : assurance emprunteur, auto, habitation, santé. Économisez sur vos contrats avec un accompagnement humain.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.finassure.fr"),
  title: "FINASSURE Courtage — Protéger aujourd'hui, sécuriser demain",
  description: DESCRIPTION,
  openGraph: {
    title: "FINASSURE Courtage — Protéger aujourd'hui, sécuriser demain",
    description: DESCRIPTION,
    type: "website",
    url: "https://www.finassure.fr",
    siteName: "FINASSURE Courtage",
    locale: "fr_FR",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "FINASSURE Courtage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FINASSURE Courtage",
    description: DESCRIPTION,
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
