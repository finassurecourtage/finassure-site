"use client";

import { useEffect, useState } from "react";

type IdleWindow = Window & {
  requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
  cancelIdleCallback?: (handle: number) => void;
};

/**
 * La vidéo du hero pèse 3,5 Mo. On affiche d'abord sa vignette (177 Ko), puis
 * on ne charge la vidéo qu'une fois la page rendue, uniquement sur desktop et
 * jamais si le visiteur a demandé moins d'animations. Sur mobile on s'arrête
 * donc à l'image fixe.
 */
export function HeroVideo() {
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 768px)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!wide.matches || calm.matches) return;

    const w = window as IdleWindow;

    if (w.requestIdleCallback) {
      const handle = w.requestIdleCallback(() => setLoadVideo(true), { timeout: 2500 });
      return () => w.cancelIdleCallback?.(handle);
    }

    const timer = window.setTimeout(() => setLoadVideo(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  if (!loadVideo) {
    return (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        src="/video/hero-poster.jpg"
        alt=""
        aria-hidden="true"
        className="h-full w-full object-cover"
      />
    );
  }

  return (
    <video
      className="h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/video/hero-poster.jpg"
    >
      <source src="/video/hero.mp4" type="video/mp4" />
    </video>
  );
}
