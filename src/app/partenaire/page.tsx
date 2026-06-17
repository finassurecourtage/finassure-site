import type { Metadata } from "next";
import { BrandLogo } from "@/components/brand-logo";
import { Icon } from "@/components/icons";
import { RecruitForm } from "@/components/recruit-form";

const CRM_URL = "https://finassure.online";

export const metadata: Metadata = {
  title: "Devenez partenaire FINASSURE — Lancez votre activité en assurance",
  description:
    "Rejoignez le réseau FINASSURE : CRM, téléphonie, leads, formation et accompagnement fournis. Travaillez d'où vous voulez, quand vous voulez, avec des revenus déplafonnés.",
  openGraph: {
    title: "Devenez partenaire FINASSURE",
    description:
      "Tous les outils pour réussir : CRM, téléphonie, leads, formation, suivi. Un business rentable, sans contrainte.",
    type: "website",
  },
};

const LIBERTES = [
  { icon: Icon.globe, title: "De partout", desc: "Chez vous, en déplacement, à l'étranger — tout passe par notre plateforme en ligne. Une connexion suffit." },
  { icon: Icon.clock, title: "Quand vous voulez", desc: "Vous fixez vos horaires et votre rythme. À temps plein ou en complément, c'est vous qui décidez." },
  { icon: Icon.trending, title: "Revenus déplafonnés", desc: "Vous êtes payé à la performance, sans limite. Plus vous développez, plus vous gagnez." },
  { icon: Icon.rocket, title: "Sans contrainte", desc: "Aucun investissement matériel, aucun local à louer. On vous fournit tout, vous vous lancez tout de suite." },
];

const OUTILS = [
  { icon: Icon.dashboard, title: "Un CRM professionnel", desc: "Pilotez vos prospects, vos ventes et votre équipe depuis un outil clé en main, simple et puissant." },
  { icon: Icon.phone, title: "Téléphonie intégrée", desc: "Votre ligne et votre softphone directement dans le CRM. Appelez vos clients en un clic." },
  { icon: Icon.users, title: "Des leads qualifiés", desc: "On vous fournit des contacts intéressés. Vous vous concentrez sur ce qui compte : la vente." },
  { icon: Icon.graduation, title: "Formation complète", desc: "Produits, techniques de vente, conformité : on vous forme de A à Z, même débutant." },
  { icon: Icon.headset, title: "Suivi & accompagnement", desc: "Un référent dédié, un back-office qui gère l'administratif, et du support en continu." },
  { icon: Icon.euro, title: "Commissions transparentes", desc: "Vos gains suivis en temps réel dans le CRM. Vous savez toujours où vous en êtes." },
];

const STEPS = [
  { n: "1", title: "Vous candidatez", desc: "Remplissez le formulaire en bas de page. On vous rappelle sous 24–48h pour faire connaissance." },
  { n: "2", title: "On vous équipe & on vous forme", desc: "Activation de votre CRM, votre ligne et vos accès. Formation aux produits et à la méthode." },
  { n: "3", title: "Vous lancez votre activité", desc: "Vous vendez, vous recrutez vos propres agents, et vous développez votre régie. On reste à vos côtés." },
];

const FAQ = [
  { q: "Faut-il un diplôme ou de l'expérience ?", a: "Non. On accepte les profils débutants motivés comme les commerciaux confirmés. La formation et l'accompagnement vous mettent à niveau." },
  { q: "Faut-il investir de l'argent ?", a: "Non. Aucun investissement matériel : le CRM, la téléphonie et les outils sont fournis. Vous n'avancez rien." },
  { q: "Puis-je travailler à temps partiel ?", a: "Oui. Vous gérez votre rythme. Beaucoup démarrent en complément avant de passer à temps plein." },
  { q: "Comment suis-je rémunéré ?", a: "À la commission sur vos ventes — et, en tant que régie, aussi sur les ventes de vos agents. Tout est suivi en temps réel et déplafonné." },
];

export default function PartenairePage() {
  return (
    <div className="bg-white text-slate-800">
      {/* ===== Header ===== */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="https://finassure.fr" className="flex items-center gap-2">
            <BrandLogo />
          </a>
          <div className="flex items-center gap-2">
            <a
              href={CRM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-lg border border-brand-200 px-3.5 py-2 text-sm font-medium text-brand-700 transition hover:bg-brand-50 sm:block"
            >
              Espace pro
            </a>
            <a
              href="#candidater"
              className="rounded-lg bg-brand-800 px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-brand-900"
            >
              Je candidate
            </a>
          </div>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-brand-950">
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
          <div className="absolute inset-0 bg-gradient-to-br from-brand-950/95 via-brand-900/88 to-brand-800/75" />
        </div>
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 text-white lg:grid-cols-2 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gold-200 ring-1 ring-white/20">
              Réseau de distribution FINASSURE · Recrutement
            </span>
            <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
              Lancez votre business en assurance.<br />
              <span className="text-gold-400">Sans plafond, sans contrainte.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-brand-100">
              Rejoignez FINASSURE et bâtissez une activité rentable depuis n&apos;importe où.
              On vous donne <strong className="text-white">tous les outils</strong> — CRM,
              téléphonie, leads, formation, accompagnement. Vous, vous encaissez.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#candidater" className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-6 py-3.5 text-sm font-semibold text-brand-950 shadow-lg shadow-gold-900/20 transition hover:bg-gold-400">
                Devenir partenaire
                <Icon.arrow className="h-4 w-4" />
              </a>
              <a href="#concept" className="rounded-lg border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
                Découvrir le concept
              </a>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-brand-100">
              {["Aucun investissement", "Travaillez d'où vous voulez", "Formation incluse"].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <Icon.check className="h-4 w-4 text-gold-400" /> {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-sm rounded-2xl border border-white/40 bg-white/95 p-6 text-slate-800 shadow-float">
              <p className="text-sm font-semibold text-brand-800">Votre potentiel</p>
              <p className="mt-1 text-xs text-slate-500">Une rémunération qui dépend de vous</p>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2.5 text-sm">
                  <span className="text-slate-500">Commissions sur vos ventes</span>
                  <Icon.check className="h-4 w-4 text-gold-600" />
                </div>
                <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2.5 text-sm">
                  <span className="text-slate-500">+ sur les ventes de vos agents</span>
                  <Icon.check className="h-4 w-4 text-gold-600" />
                </div>
                <div className="rounded-xl bg-brand-800 px-3 py-4 text-center text-white">
                  <p className="text-xs text-brand-100">Plafond de revenus</p>
                  <p className="font-serif text-3xl font-semibold text-gold-400">Aucun</p>
                  <p className="text-[11px] text-brand-200">vous décidez de votre rythme</p>
                </div>
              </div>
              <a href="#candidater" className="mt-4 block rounded-lg bg-brand-800 py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-900">
                Je veux en savoir plus
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Liberté / concept ===== */}
      <section id="concept" className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">Le concept</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-brand-900 sm:text-4xl">
            Votre activité, vos règles
          </h2>
          <p className="mt-4 text-slate-500">
            FINASSURE vous donne le cadre, les outils et les clients. Vous gardez la liberté
            d&apos;un indépendant, sans en avoir les contraintes.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LIBERTES.map((l) => {
            const Glyph = l.icon;
            return (
              <div key={l.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-float">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-800 text-gold-400">
                  <Glyph className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-brand-900">{l.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{l.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== Tout est fourni ===== */}
      <section className="bg-brand-50/60 py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">Tout est fourni</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-brand-900 sm:text-4xl">
              Vous n&apos;avancez rien. On s&apos;occupe du reste.
            </h2>
            <p className="mt-4 text-slate-500">
              Pas de matériel à acheter, pas de logiciel à développer. Vous arrivez, tout est prêt.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {OUTILS.map((o) => {
              const Glyph = o.icon;
              return (
                <div key={o.title} className="rounded-2xl bg-white p-6 shadow-card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500 text-brand-950">
                    <Glyph className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-brand-900">{o.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{o.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Combien gagner (bandeau) ===== */}
      <section className="relative overflow-hidden bg-brand-900 py-20 text-white lg:py-24">
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle at 15% 20%, #fff 1px, transparent 1px)", backgroundSize: "26px 26px" }} />
        <div className="relative mx-auto max-w-4xl px-5 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">Votre rémunération</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
            Deux sources de revenus, zéro plafond
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-8">
              <Icon.euro className="mx-auto h-9 w-9 text-gold-400" />
              <h3 className="mt-4 font-serif text-xl font-semibold">Vos ventes</h3>
              <p className="mt-2 text-sm text-brand-100">
                Une commission attractive sur chaque contrat que vous signez.
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-8">
              <Icon.users className="mx-auto h-9 w-9 text-gold-400" />
              <h3 className="mt-4 font-serif text-xl font-semibold">Votre équipe</h3>
              <p className="mt-2 text-sm text-brand-100">
                Recrutez vos propres agents et touchez une part sur leurs ventes. C&apos;est ça, une régie.
              </p>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-xl text-sm text-brand-200">
            Votre rémunération dépend de votre activité et de celle de votre équipe — elle n&apos;est
            pas plafonnée. Plus vous développez, plus vous gagnez.
          </p>
          <a href="#candidater" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gold-500 px-7 py-3.5 text-sm font-semibold text-brand-950 transition hover:bg-gold-400">
            Je veux me lancer <Icon.arrow className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* ===== Comment démarrer ===== */}
      <section className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">Comment démarrer</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-brand-900 sm:text-4xl">
            Opérationnel en quelques jours
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-slate-200 bg-white p-7 shadow-card">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500 font-serif text-lg font-bold text-brand-950">
                {s.n}
              </div>
              <h3 className="mt-5 font-semibold text-brand-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Candidater (form) ===== */}
      <section id="candidater" className="bg-brand-50/60 py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">Candidature</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-brand-900 sm:text-4xl">
              Prêt à construire quelque chose de grand ?
            </h2>
            <p className="mt-4 text-slate-500">
              Laissez-nous vos coordonnées : un responsable vous rappelle sous 24–48h pour
              vous présenter le concept et répondre à vos questions. Sans engagement.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-slate-700">
              {[
                "Aucun investissement de départ",
                "Outils et formation fournis",
                "Accompagnement par un référent dédié",
                "Revenus déplafonnés, à votre rythme",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-800 text-gold-400">
                    <Icon.check className="h-4 w-4" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
            <RecruitForm />
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="mx-auto max-w-3xl px-5 py-20">
        <h2 className="text-center font-serif text-3xl font-semibold text-brand-900">
          Questions fréquentes
        </h2>
        <div className="mt-10 space-y-3">
          {FAQ.map((f) => (
            <details key={f.q} className="group rounded-xl border border-slate-200 bg-white p-5 shadow-card">
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-brand-900">
                {f.q}
                <span className="ml-4 text-gold-500 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="#candidater" className="inline-flex items-center gap-2 rounded-lg bg-brand-800 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-900">
            Devenir partenaire FINASSURE <Icon.arrow className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="border-t border-slate-200 bg-brand-950 text-brand-100">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10 text-center">
          <BrandLogo tone="dark" />
          <p className="max-w-md text-sm text-brand-200">
            FINASSURE Courtage — cabinet de courtage en assurance. Rejoignez un réseau qui
            vous donne les moyens de réussir.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <a href="https://finassure.fr" className="transition hover:text-white">Site principal</a>
            <a href={CRM_URL} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">Espace pro (CRM)</a>
            <a href="#candidater" className="transition hover:text-white">Candidater</a>
          </div>
          <p className="mt-2 text-xs text-brand-300">
            © 2026 FINASSURE COURTAGE — SAS au capital de 1 000 €, 144 avenue Charles de Gaulle, 92200 Neuilly-sur-Seine.
            Mandataire en assurance (ORIAS à compléter).
          </p>
        </div>
      </footer>
    </div>
  );
}
