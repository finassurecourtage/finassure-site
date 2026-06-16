import type { Metadata } from "next";
import localFont from "next/font/local";
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

export const metadata: Metadata = {
  title: "FINASSURE Courtage — Protéger aujourd'hui, sécuriser demain",
  description:
    "FINASSURE Courtage, cabinet de courtage en assurance : assurance emprunteur, auto, habitation, santé. Économisez sur vos contrats avec un accompagnement humain.",
  openGraph: {
    title: "FINASSURE Courtage",
    description: "Protéger aujourd'hui, sécuriser demain.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
