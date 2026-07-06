import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";

/** Gabarit commun des pages légales : en-tête logo + contenu + pied de page. */
export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-sm">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-3">
          <Link href="/" className="flex items-center gap-2">
            <BrandLogo />
          </Link>
          <Link href="/" className="text-sm font-medium text-brand-700 hover:underline">
            ← Retour au site
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-12">
        <h1 className="font-serif text-3xl font-semibold text-brand-900">{title}</h1>
        {updated && (
          <p className="mt-1 text-xs text-slate-400">Dernière mise à jour : {updated}</p>
        )}
        <div className="legal mt-8 space-y-6 text-sm leading-relaxed text-slate-600">
          {children}
        </div>
      </main>

      <footer className="border-t border-slate-100 py-8 text-center text-xs text-slate-400">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-4 px-5">
          <Link href="/mentions-legales" className="hover:text-slate-700">Mentions légales</Link>
          <Link href="/confidentialite" className="hover:text-slate-700">Confidentialité (RGPD)</Link>
          <Link href="/cookies" className="hover:text-slate-700">Cookies</Link>
          <Link href="/" className="hover:text-slate-700">Accueil</Link>
        </div>
        <p className="mt-3">© 2026 FINASSURE COURTAGE — ORIAS n° 26009519</p>
      </footer>
    </div>
  );
}

/** Titre de section réutilisable. */
export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-2 text-base font-semibold text-brand-900">{title}</h2>
      <div className="space-y-2">{children}</div>
    </section>
  );
}
