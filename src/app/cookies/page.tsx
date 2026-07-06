import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Politique cookies — FINASSURE Courtage",
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <LegalLayout title="Politique cookies" updated="juillet 2026">
      <p>
        Nous avons fait le choix d&apos;un site respectueux de votre vie privée :
        aucun cookie publicitaire ni traceur tiers n&apos;est déposé.
      </p>

      <LegalSection title="Mesure d'audience sans cookie">
        <p>
          Nous utilisons <strong>Vercel Web Analytics</strong>, une solution de
          mesure d&apos;audience <strong>anonyme et sans cookie</strong>. Elle ne
          permet pas de vous identifier personnellement et ne suit pas votre
          navigation sur d&apos;autres sites. À ce titre, aucun bandeau de
          consentement aux cookies n&apos;est nécessaire.
        </p>
      </LegalSection>

      <LegalSection title="Cookies techniques">
        <p>
          Seuls des cookies strictement nécessaires au bon fonctionnement du site
          peuvent être utilisés (par exemple pour la sécurité ou la répartition de
          charge de l&apos;hébergeur). Ils ne servent à aucune finalité publicitaire.
        </p>
      </LegalSection>

      <LegalSection title="Gestion">
        <p>
          Vous pouvez à tout moment configurer votre navigateur pour bloquer ou
          supprimer les cookies. Le site restant sans cookie de suivi, cela
          n&apos;affecte pas votre expérience.
        </p>
      </LegalSection>

      <p className="text-xs text-slate-400">
        Pour toute question :{" "}
        <a href="mailto:conseil@finassure.fr" className="text-brand-700 underline">
          conseil@finassure.fr
        </a>
        .
      </p>
    </LegalLayout>
  );
}
