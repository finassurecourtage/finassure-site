import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Politique de confidentialité (RGPD) — FINASSURE Courtage",
  robots: { index: true, follow: true },
};

export default function ConfidentialitePage() {
  return (
    <LegalLayout title="Politique de confidentialité (RGPD)" updated="juillet 2026">
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

      <LegalSection title="Données collectées">
        <p>
          Via nos formulaires (contact, demande de devis, candidature partenaire),
          nous collectons : nom, prénom, adresse email, numéro de téléphone, ville,
          et les informations que vous nous communiquez librement (message,
          situation).
        </p>
      </LegalSection>

      <LegalSection title="Finalités et base légale">
        <ul className="list-disc space-y-1 pl-5">
          <li>Répondre à vos demandes et vous recontacter (mesures précontractuelles / intérêt légitime).</li>
          <li>Étudier les candidatures pour rejoindre notre réseau (votre consentement).</li>
          <li>Gérer la relation commerciale et le suivi (exécution / intérêt légitime).</li>
        </ul>
      </LegalSection>

      <LegalSection title="Destinataires">
        <p>
          Vos données sont destinées aux équipes habilitées de FINASSURE COURTAGE et
          à nos sous-traitants techniques (hébergeur, outils d&apos;envoi
          d&apos;emails), qui n&apos;y accèdent que pour les besoins du service.
          Elles ne sont ni vendues ni cédées à des tiers à des fins commerciales.
        </p>
      </LegalSection>

      <LegalSection title="Durée de conservation">
        <p>
          Les données de prospection sont conservées <strong>3 ans</strong> à
          compter du dernier contact. Les données liées à un contrat sont conservées
          selon les durées légales applicables au secteur de l&apos;assurance.
        </p>
      </LegalSection>

      <LegalSection title="Vos droits">
        <p>
          Vous disposez d&apos;un droit d&apos;accès, de rectification,
          d&apos;effacement, de limitation, d&apos;opposition et de portabilité de
          vos données. Pour les exercer, écrivez à{" "}
          <a href="mailto:conseil@finassure.fr" className="text-brand-700 underline">
            conseil@finassure.fr
          </a>
          . Vous pouvez également introduire une réclamation auprès de la CNIL (
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
