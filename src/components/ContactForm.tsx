"use client";

import { useState } from "react";

const CONTACT_EMAIL = "contact@finassure.fr";

export function ContactForm() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [sujet, setSujet] = useState("Assurance emprunteur");
  const [message, setMessage] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const body = `Nom : ${nom}\nEmail : ${email}\nTéléphone : ${tel}\n\n${message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `[Site] ${sujet} — ${nom}`,
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
      <input
        required
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className={field}
      />
      <select value={sujet} onChange={(e) => setSujet(e.target.value)} className={field}>
        <option>Assurance emprunteur</option>
        <option>Assurance auto</option>
        <option>Assurance habitation</option>
        <option>Mutuelle santé</option>
        <option>Devenir partenaire (régie / agent)</option>
        <option>Autre</option>
      </select>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Votre message…"
        rows={4}
        className={field}
      />
      <button
        type="submit"
        className="w-full rounded-lg bg-gold-500 px-5 py-3 text-sm font-semibold text-brand-900 transition hover:bg-gold-400"
      >
        Envoyer ma demande
      </button>
      <p className="text-center text-xs text-slate-400">
        Ou écrivez-nous directement à {CONTACT_EMAIL}
      </p>
    </form>
  );
}
