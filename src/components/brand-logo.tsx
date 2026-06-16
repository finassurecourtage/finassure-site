type Tone = "light" | "dark";

/**
 * Logo horizontal FINASSURE COURTAGE — emblème écusson + nom serif + sous-titre doré.
 * `tone="light"` : pour fond clair (header). `tone="dark"` : pour fond foncé (footer).
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
  const badgeBg = dark ? "#243663" : "#1a2748";

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      {/* Emblème écusson */}
      <svg viewBox="0 0 40 44" className="h-11 w-auto shrink-0" aria-hidden="true">
        <defs>
          <linearGradient id="fa-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#e0c068" />
            <stop offset="1" stopColor="#a9853a" />
          </linearGradient>
        </defs>
        {/* corps de l'écusson */}
        <path
          d="M20 1.5 L37 7.5 V21 C37 32 29.2 39.6 20 42.5 C10.8 39.6 3 32 3 21 V7.5 Z"
          fill={badgeBg}
          stroke="url(#fa-gold)"
          strokeWidth="1.6"
        />
        {/* liseré intérieur doré */}
        <path
          d="M20 5 L33.5 9.7 V21 C33.5 29.8 27.4 36.2 20 38.8 C12.6 36.2 6.5 29.8 6.5 21 V9.7 Z"
          fill="none"
          stroke="url(#fa-gold)"
          strokeWidth="0.7"
          opacity="0.5"
        />
        {/* swoosh doré */}
        <path
          d="M9 30 Q19 27 30 12"
          fill="none"
          stroke="url(#fa-gold)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        {/* F serif */}
        <text
          x="19.5"
          y="28.5"
          textAnchor="middle"
          className="font-serif"
          fontSize="21"
          fontWeight="700"
          fill="#f5ecd2"
        >
          F
        </text>
      </svg>

      {/* Nom + sous-titre */}
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
