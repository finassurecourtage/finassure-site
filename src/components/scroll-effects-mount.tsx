"use client";

import dynamic from "next/dynamic";

/**
 * GSAP pèse ~44 Ko gzip : on le sort du bundle critique. Il arrive dans un
 * chunk séparé après l'hydratation, et si ce chunk n'arrive jamais la page
 * reste simplement statique — aucun contenu n'est masqué en attendant.
 */
const ScrollEffects = dynamic(
  () => import("./scroll-effects").then((m) => m.ScrollEffects),
  { ssr: false },
);

export function ScrollEffectsMount() {
  return <ScrollEffects />;
}
