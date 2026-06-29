type Tone = "light" | "dark";

/**
 * Logo FINASSURE COURTAGE : écusson (logo-mark.png, fond transparent) + nom à
 * côté. `tone="dark"` (footer sombre) : écusson sur pastille blanche pour rester
 * lisible, texte en blanc.
 */
export function BrandLogo({
  tone = "light",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  const dark = tone === "dark";
  const word = dark ? "text-white" : "text-brand-900";

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-mark.png"
        alt="FINASSURE COURTAGE"
        className={`h-14 w-auto shrink-0 object-contain ${
          dark ? "rounded-lg bg-white p-1" : ""
        }`}
      />
      <span className="flex flex-col leading-none">
        <span className={`font-serif text-[22px] font-semibold tracking-[0.04em] ${word}`}>
          FIN<span className="text-gold-500">ASSURE</span>
        </span>
        <span className="mt-1.5 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.4em] text-gold-600">
          <span className="h-px w-4 bg-gold-400/70" />
          Courtage
          <span className="h-px w-4 bg-gold-400/70" />
        </span>
      </span>
    </span>
  );
}
