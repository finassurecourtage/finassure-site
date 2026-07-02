"use client";

import { useState } from "react";
import { Icon } from "@/components/icons";

// Clé Web3Forms liée à la boîte mail qui reçoit les demandes (finassurecourtage@gmail.com).
// → À obtenir sur https://web3forms.com (gratuit) et coller ici.
const ACCESS_KEY = "9f1cb129-61ad-473c-b7e2-e1cb8861867c";

type Status = "idle" | "sending" | "ok" | "error";

export function RecruitForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setErrorMsg("");

    // Enregistre aussi la candidature dans le CRM via notre API interne
    // (même domaine → aucun blocage CORS/navigateur ; le relai serveur transmet
    // au CRM). Non bloquant.
    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).catch(() => undefined);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `[Devenir partenaire] ${data.nom || "Nouveau candidat"}`,
          from_name: "Landing recrutement FINASSURE",
          ...data,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(json.message || "Une erreur est survenue. Réessayez.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Connexion impossible. Vérifiez votre réseau et réessayez.");
    }
  }

  const field =
    "w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100";

  if (status === "ok") {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-100 text-gold-600">
          <Icon.check className="h-7 w-7" />
        </span>
        <h3 className="mt-4 font-serif text-xl font-semibold text-brand-900">
          Merci, c&apos;est noté !
        </h3>
        <p className="mt-2 max-w-xs text-sm text-slate-500">
          Un responsable FINASSURE vous rappelle sous 24–48h pour vous présenter le concept.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      {/* anti-spam (caché) */}
      <input type="checkbox" name="botcheck" tabIndex={-1} className="hidden" aria-hidden="true" />

      <div className="grid gap-3 sm:grid-cols-2">
        <input required name="nom" placeholder="Nom et prénom" className={field} />
        <input required type="tel" name="telephone" placeholder="Téléphone" className={field} />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <input required type="email" name="email" placeholder="Email" className={field} />
        <input name="ville" placeholder="Ville / région" className={field} />
      </div>
      <select name="profil" defaultValue="Déjà dans l'assurance" className={field}>
        <option>Déjà dans l&apos;assurance</option>
        <option>Commercial / téléprospection</option>
        <option>En reconversion</option>
        <option>Je veux monter mon équipe (régie)</option>
        <option>Autre</option>
      </select>
      <textarea
        name="message"
        placeholder="Parlez-nous de votre projet (facultatif)…"
        rows={3}
        className={field}
      />

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-gold-500 px-5 py-3 text-sm font-semibold text-brand-950 transition hover:bg-gold-400 disabled:opacity-60"
      >
        {status === "sending" ? "Envoi…" : "Je veux être rappelé(e)"}
      </button>
      <p className="text-center text-xs text-slate-400">
        Réponse sous 24–48h · Sans engagement · Vos données restent confidentielles
      </p>
    </form>
  );
}
