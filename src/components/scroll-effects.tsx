"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Formate 10000 en "10 000" avec des espaces simples (pas d'insécables). */
function formatFr(value: number) {
  return new Intl.NumberFormat("fr-FR")
    .format(value)
    .replace(/[  ]/g, " ");
}

/**
 * Effets liés au défilement, appliqués par attributs pour laisser les pages en
 * composants serveur :
 *   data-reveal    → apparition en fondu montant (data-reveal-group pour cascader)
 *   data-counter   → incrémentation du nombre contenu dans le texte
 *   data-parallax  → translation verticale pendant le défilement
 *
 * Rien n'est masqué par le CSS : c'est ce composant qui pose l'état initial, et
 * seulement sur les éléments encore sous la ligne de flottaison. Un élément déjà
 * visible au chargement le reste, même si le script arrive en retard.
 */
export function ScrollEffects() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const belowFold = (el: Element) =>
      el.getBoundingClientRect().top > window.innerHeight * 0.82;

    const ctx = gsap.context(() => {
      // --- Révélations -----------------------------------------------------
      gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
        const items = gsap.utils.toArray<HTMLElement>("[data-reveal]", group);
        if (!items.length || !belowFold(group)) return;

        gsap.set(items, { opacity: 0, y: 18 });
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.09,
          scrollTrigger: { trigger: group, start: "top 82%", once: true },
        });
      });

      gsap.utils
        .toArray<HTMLElement>("[data-reveal]")
        .filter((el) => !el.closest("[data-reveal-group]"))
        .forEach((el) => {
          if (!belowFold(el)) return;

          gsap.set(el, { opacity: 0, y: 18 });
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          });
        });

      // --- Compteurs -------------------------------------------------------
      gsap.utils.toArray<HTMLElement>("[data-counter]").forEach((el) => {
        const raw = el.textContent ?? "";
        const isDigit = (ch: string) => ch >= "0" && ch <= "9";

        let first = -1;
        for (let i = 0; i < raw.length; i++) {
          if (isDigit(raw[i])) {
            first = i;
            break;
          }
        }
        if (first === -1) return;

        let last = raw.length - 1;
        while (last > first && !isDigit(raw[last])) last--;

        // On conserve tel quel ce qui entoure le nombre (« + », « € », « % »…)
        // pour ne perdre aucun espace pendant l'incrémentation.
        const prefix = raw.slice(0, first);
        const suffix = raw.slice(last + 1);

        let digits = "";
        for (let i = first; i <= last; i++) {
          if (isDigit(raw[i])) digits += raw[i];
        }

        const target = parseInt(digits, 10);
        if (!Number.isFinite(target)) return;

        // Un compteur déjà à l'écran garde sa valeur finale : pas de retour à
        // zéro sous les yeux du visiteur.
        if (!belowFold(el)) return;

        const state = { value: 0 };
        el.textContent = `${prefix}0${suffix}`;

        gsap.to(state, {
          value: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
          onUpdate: () => {
            el.textContent = `${prefix}${formatFr(Math.round(state.value))}${suffix}`;
          },
          onComplete: () => {
            el.textContent = raw;
          },
        });
      });

      // --- Parallaxe -------------------------------------------------------
      // L'élément doit dépasser son cadre d'au moins `amount` pixels vers le
      // bas : on le translate de -amount à 0, jamais dans le positif, sinon
      // son bord haut décolle et découvre le fond du cadre.
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const amount = Number(el.dataset.parallax) || 60;
        gsap.fromTo(
          el,
          { y: -amount },
          {
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
