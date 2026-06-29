type Tone = "light" | "dark";

/**
 * Logo FINASSURE COURTAGE — affiche le vrai logo (public/logo.png), identique
 * à celui du CRM. `tone="dark"` (footer sombre) : posé sur une pastille blanche
 * pour rester lisible.
 */
export function BrandLogo({
  tone = "light",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <span className={`inline-flex items-center ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="FINASSURE COURTAGE"
        className={`h-12 w-auto object-contain ${dark ? "rounded-lg bg-white p-1.5" : ""}`}
      />
    </span>
  );
}
