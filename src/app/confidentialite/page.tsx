import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Politique de confidentialité (RGPD) — FINASSURE Courtage",
  robots: { index: true, follow: true },
};

export default function ConfidentialitePage() {
  return (
    <LegalLayout title="Politique de confidentialité (RGPD)" updated="octobre 2026">
      <p>
        La présente politique décrit comment FINASSURE COURTAGE collecte et traite
        vos données personnelles, conformément au Règlement Général sur la
        Protection des Données (RGPD) et à la loi Informatique et Libertés.
      </p>

      <LegalSection title="Responsable du traitement">
        <p>
          FINASSURE COURTAGE — 144 avenue Charles de Gaulle, 92200
          Neuilly-sur-Seine. Contact :{" "}
          <a href="mailto:conseil@finassure.fr" className="text-brand-700 underline">
            conseil@finassure.fr
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Sources de collecte">
        <p>
          Vos données sont collectées via les formulaires de notre site et via les
          formulaires publicitaires que nous diffusons sur Facebook et Instagram
          (Meta). Dans ce second cas, Meta Platforms Ireland Ltd héberge le
          formulaire et nous transmet vos réponses.
        </p>
      </LegalSection>

      <LegalSection title="Données collectées">
        <p>
          Nom, prénom, téléphone, email, ainsi que les informations sur votre prêt
          que vous nous communiquez : montant restant, date de signature et
          assurance actuelle.
        </p>
      </LegalSection>

      <LegalSection title="Bases légales">
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Votre <strong>consentement</strong>, recueilli par une case à cocher,
            pour vous contacter par téléphone, SMS et email au sujet de votre
            assurance de prêt. Vous pouvez le retirer à tout moment.
          </li>
          <li>
            Les <strong>mesures précontractuelles</strong> prises à votre demande,
            pour réaliser votre étude et vous présenter des offres.
          </li>
          <li>
            Votre <strong>consentement</strong>, pour étudier les candidatures des
            professionnels souhaitant rejoindre notre réseau.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Destinataires">
        <p>
          FINASSURE Courtage et, si vous souhaitez souscrire, l&apos;assureur
          partenaire retenu. Vos données ne sont jamais vendues ni cédées à des
          tiers à des fins commerciales.
        </p>
      </LegalSection>

      <LegalSection title="Lieu de traitement">
        <p>
          Vos données peuvent être traitées depuis Israël, pays bénéficiant
          d&apos;une décision d&apos;adéquation de la Commission européenne.
        </p>
      </LegalSection>

      <LegalSection title="Durée de conservation">
        <p>
          <strong>3 ans</strong> à compter de notre dernier contact si vous ne
          devenez pas client. Les données liées à un contrat sont conservées selon
          les durées légales applicables au secteur de l&apos;assurance.
        </p>
      </LegalSection>

      <LegalSection title="Vos droits">
        <p>
          Vous pouvez accéder à vos données, les rectifier, les effacer, vous
          opposer à tout nouveau contact ou retirer votre consentement en écrivant
          à{" "}
          <a href="mailto:conseil@finassure.fr" className="text-brand-700 underline">
            conseil@finassure.fr
          </a>
          . Vous pouvez aussi vous inscrire gratuitement sur la liste
          d&apos;opposition{" "}
          <a href="https://www.bloctel.gouv.fr" target="_blank" rel="noreferrer" className="text-brand-700 underline">
            Bloctel
          </a>{" "}
          et adresser une réclamation à la CNIL (
          <a href="https://www.cnil.fr" target="_blank" rel="noreferrer" className="text-brand-700 underline">
            www.cnil.fr
          </a>
          ).
        </p>
      </LegalSection>

      <LegalSection title="Mesure d'audience">
        <p>
          Nous utilisons une mesure d&apos;audience <strong>anonyme et sans
          cookies</strong> (Vercel Web Analytics) pour comprendre la fréquentation du
          site. Aucun traceur publicitaire n&apos;est utilisé. Voir notre{" "}
          <a href="/cookies" className="text-brand-700 underline">
            politique cookies
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
