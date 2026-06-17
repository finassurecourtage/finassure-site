"use client";

import { useState } from "react";

const CONTACT_EMAIL = "contact@finassure.fr";

export function RecruitForm() {
  const [nom, setNom] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [ville, setVille] = useState("");
  const [profil, setProfil] = useState("Déjà dans l'assurance");
  const [message, setMessage] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const body =
      `Candidature partenaire / régie\n\n` +
      `Nom : ${nom}\n` +
      `Téléphone : ${tel}\n` +
      `Email : ${email}\n` +
      `Ville / région : ${ville}\n` +
      `Profil : ${profil}\n\n` +
      `${message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `[Devenir partenaire] ${nom}`,
    )}&body=${encodeURIComponent(body)}`;
  }

  const field =
    "w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100";

  return (
    <form onSubmit={submit} className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          required
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          placeholder="Nom et prénom"
          className={field}
        />
        <input
          required
          type="tel"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          placeholder="Téléphone"
          className={field}
        />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className={field}
        />
        <input
          value={ville}
          onChange={(e) => setVille(e.target.value)}
          placeholder="Ville / région"
          className={field}
        />
      </div>
      <select value={profil} onChange={(e) => setProfil(e.target.value)} className={field}>
        <option>Déjà dans l&apos;assurance</option>
        <option>Commercial / téléprospection</option>
        <option>En reconversion</option>
        <option>Je veux monter mon équipe (régie)</option>
        <option>Autre</option>
      </select>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Parlez-nous de votre projet (facultatif)…"
        rows={3}
        className={field}
      />
      <button
        type="submit"
        className="w-full rounded-lg bg-gold-500 px-5 py-3 text-sm font-semibold text-brand-950 transition hover:bg-gold-400"
      >
        Je veux rejoindre FINASSURE
      </button>
      <p className="text-center text-xs text-slate-400">
        Réponse sous 24–48h · Sans engagement · contact@finassure.fr
      </p>
    </form>
  );
}
