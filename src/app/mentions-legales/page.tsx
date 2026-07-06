import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Mentions légales — FINASSURE Courtage",
  robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <LegalLayout title="Mentions légales" updated="juillet 2026">
      <LegalSection title="Éditeur du site">
        <p>
          <strong>FINASSURE COURTAGE</strong> — Société par actions simplifiée (SAS)
          au capital de 1 000 €.
          <br />
          Siège social : 144 avenue Charles de Gaulle, 92200 Neuilly-sur-Seine.
          <br />
          RCS : <em>[à compléter]</em> — SIREN : <em>[à compléter]</em>.
          <br />
          Courtier / mandataire en assurance immatriculé à l&apos;ORIAS sous le
          numéro <strong>26009519</strong>, vérifiable sur{" "}
          <a href="https://www.orias.fr" target="_blank" rel="noreferrer" className="text-brand-700 underline">
            www.orias.fr
          </a>
          .
          <br />
          Directeur de la publication : <em>[à compléter]</em>.
          <br />
          Contact :{" "}
          <a href="mailto:conseil@finassure.fr" className="text-brand-700 underline">
            conseil@finassure.fr
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Autorité de contrôle">
        <p>
          En tant qu&apos;intermédiaire en assurance, FINASSURE COURTAGE est soumis
          au contrôle de l&apos;<strong>Autorité de Contrôle Prudentiel et de
          Résolution (ACPR)</strong> — 4 place de Budapest, CS 92459, 75436 Paris
          Cedex 09 (
          <a href="https://acpr.banque-france.fr" target="_blank" rel="noreferrer" className="text-brand-700 underline">
            acpr.banque-france.fr
          </a>
          ).
        </p>
      </LegalSection>

      <LegalSection title="Hébergement">
        <p>
          Le site est hébergé par <strong>Vercel Inc.</strong> — 340 S Lemon Ave
          #4133, Walnut, CA 91789, États-Unis (
          <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-brand-700 underline">
            vercel.com
          </a>
          ).
        </p>
      </LegalSection>

      <LegalSection title="Propriété intellectuelle">
        <p>
          L&apos;ensemble des éléments de ce site (textes, logo, visuels, mise en
          page) est la propriété de FINASSURE COURTAGE, sauf mention contraire.
          Toute reproduction ou utilisation sans autorisation préalable est
          interdite.
        </p>
      </LegalSection>

      <LegalSection title="Responsabilité">
        <p>
          Les informations présentées sur ce site sont fournies à titre indicatif
          et ne constituent pas un conseil personnalisé. FINASSURE COURTAGE
          s&apos;efforce d&apos;assurer l&apos;exactitude des informations mais ne
          saurait être tenu responsable des erreurs ou omissions.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
