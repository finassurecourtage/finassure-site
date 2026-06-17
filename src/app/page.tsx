import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/icons";
import { BrandLogo } from "@/components/brand-logo";

const CRM_URL = "https://finassure.online";

const PRODUCTS = [
  {
    img: "/img/p-emprunteur.jpg",
    icon: Icon.shield,
    name: "Assurance emprunteur",
    desc: "Changez d'assurance de prêt (loi Lemoine) et économisez souvent plus de 10 000 € sur la durée, à garanties équivalentes.",
    featured: true,
  },
  {
    img: "/img/p-auto.jpg",
    icon: Icon.car,
    name: "Assurance auto",
    desc: "Une couverture adaptée à votre profil et à votre véhicule, au meilleur tarif du marché.",
  },
  {
    img: "/img/p-habitation.jpg",
    icon: Icon.home,
    name: "Multirisque habitation",
    desc: "Protégez votre logement et vos biens, que vous soyez propriétaire ou locataire.",
  },
  {
    img: "/img/p-sante.jpg",
    icon: Icon.heart,
    name: "Mutuelle santé",
    desc: "Une complémentaire santé sur mesure pour vous et toute votre famille.",
  },
  {
    img: "/img/p-rcpro.jpg",
    icon: Icon.briefcase,
    name: "RC Pro & Décennale",
    desc: "Sécurisez votre activité professionnelle avec les garanties adaptées à votre métier.",
  },
  {
    img: "/img/p-epargne.jpg",
    icon: Icon.trending,
    name: "Épargne & prévoyance",
    desc: "Préparez l'avenir et protégez vos proches en toute sérénité.",
  },
];

const ADVANTAGES = [
  { icon: Icon.euro, title: "Les meilleurs tarifs", desc: "Nous comparons les offres de nos assureurs partenaires pour vous garantir le meilleur rapport prix / garanties." },
  { icon: Icon.headset, title: "Un conseiller dédié", desc: "Un interlocuteur unique, joignable, qui connaît votre dossier et vous accompagne de A à Z." },
  { icon: Icon.zap, title: "Des démarches simplifiées", desc: "On s'occupe de tout : comparaison, devis, résiliation de l'ancien contrat et mise en place." },
  { icon: Icon.badge, title: "Indépendance & transparence", desc: "Mandataire en assurance immatriculé, nous vous conseillons en toute objectivité." },
];

const STEPS = [
  { n: "1", title: "Vous nous contactez", desc: "Par téléphone, email ou via le formulaire. Nous faisons le point sur votre besoin." },
  { n: "2", title: "Nous comparons pour vous", desc: "Notre conseiller analyse votre situation et sélectionne les meilleures offres." },
  { n: "3", title: "Vous économisez", desc: "Nous mettons en place votre nouveau contrat et gérons les formalités à votre place." },
];

export default function Home() {
  return (
    <div className="bg-white text-slate-800">
      {/* ===== Header ===== */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" className="flex items-center gap-2">
            <BrandLogo />
          </a>
          <nav className="hidden items-center gap-9 md:flex">
            {[
              ["#produits", "Produits"],
              ["#pourquoi", "Pourquoi nous"],
              ["#contact", "Contact"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="relative text-[13px] font-medium uppercase tracking-[0.16em] text-brand-900/70 transition-colors duration-300 hover:text-brand-900 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={CRM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-brand-200 px-3.5 py-2 text-sm font-medium text-brand-700 transition hover:bg-brand-50"
            >
              Espace pro
            </a>
            <a
              href="#contact"
              className="hidden rounded-lg bg-brand-800 px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-brand-900 sm:block"
            >
              Devis gratuit
            </a>
          </div>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section id="top" className="relative overflow-hidden">
        {/* Vidéo de fond (skyline) + voile marine */}
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
          <div className="absolute inset-0 bg-gradient-to-br from-brand-950/95 via-brand-900/85 to-brand-800/70" />
        </div>
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-5 py-24 text-white lg:grid-cols-2 lg:py-32">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gold-200 ring-1 ring-white/20 backdrop-blur">
              Cabinet de courtage en assurance
            </span>
            <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
              Protéger aujourd&apos;hui,<br />
              <span className="text-gold-400">sécuriser demain.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-brand-100">
              FINASSURE compare pour vous les meilleures assurances et négocie les
              tarifs. Prêt immobilier, auto, habitation, santé… avec un
              accompagnement humain, de A à Z.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-6 py-3.5 text-sm font-semibold text-brand-950 shadow-lg shadow-gold-900/20 transition hover:bg-gold-400">
                Obtenir mon devis gratuit
                <Icon.arrow className="h-4 w-4" />
              </a>
              <a href="#produits" className="rounded-lg border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
                Découvrir nos offres
              </a>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-brand-100">
              {["Sans engagement", "Réponse sous 24h", "Conseiller dédié"].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <Icon.check className="h-4 w-4 text-gold-400" /> {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex animate-fade-up items-center justify-center [animation-delay:120ms]">
            <div className="w-full max-w-sm rounded-2xl border border-white/40 bg-white/95 p-6 text-slate-800 shadow-float backdrop-blur">
              <p className="text-sm font-semibold text-brand-800">Estimez votre économie</p>
              <p className="mt-1 text-xs text-slate-500">Assurance emprunteur — exemple</p>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2.5 text-sm">
                  <span className="text-slate-500">Votre contrat actuel</span>
                  <span className="font-semibold text-slate-700 line-through">96 €/mois</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gold-50 px-3 py-2.5 text-sm ring-1 ring-gold-200">
                  <span className="text-slate-500">Avec FINASSURE</span>
                  <span className="font-semibold text-brand-800">54 €/mois</span>
                </div>
                <div className="rounded-xl bg-brand-800 px-3 py-4 text-center text-white">
                  <p className="text-xs text-brand-100">Économie estimée</p>
                  <p className="font-serif text-3xl font-semibold text-gold-400">≈ 7 560 €</p>
                  <p className="text-[11px] text-brand-200">sur la durée restante du prêt</p>
                </div>
              </div>
              <a href="#contact" className="mt-4 block rounded-lg bg-brand-800 py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-900">
                Calculer mon économie
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Chiffres ===== */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-slate-100 px-5 py-10 text-center md:grid-cols-4">
          {[
            ["+10 000 €", "d'économie moyenne (emprunteur)"],
            ["24h", "pour une première réponse"],
            ["15+", "assureurs partenaires"],
            ["100%", "accompagnement humain"],
          ].map(([big, small]) => (
            <div key={small} className="px-2">
              <p className="font-serif text-3xl font-semibold text-brand-800">{big}</p>
              <p className="mt-1 text-xs text-slate-500">{small}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Produits ===== */}
      <section id="produits" className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">Nos solutions</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-brand-900 sm:text-4xl">
            Une assurance pour chaque besoin
          </h2>
          <p className="mt-4 text-slate-500">
            Nous vous accompagnons sur l&apos;ensemble de vos contrats, avec une
            spécialité reconnue : l&apos;assurance de prêt immobilier.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => {
            const Glyph = p.icon;
            return (
              <article
                key={p.name}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-float"
              >
                <div className="relative h-44 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.img}
                    alt={p.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-brand-950/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand-800 shadow-md">
                    <Glyph className="h-5 w-5" />
                  </div>
                  {p.featured && (
                    <span className="absolute right-3 top-3 rounded-full bg-gold-500 px-2.5 py-1 text-[11px] font-semibold text-brand-950 shadow">
                      Notre spécialité
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-brand-900">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.desc}</p>
                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition group-hover:gap-2.5 hover:text-brand-900"
                  >
                    En savoir plus <Icon.arrow className="h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ===== Pourquoi nous (split image / liste) ===== */}
      <section id="pourquoi" className="bg-brand-50/60 py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-float">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/handshake.jpg" alt="Un conseiller FINASSURE serre la main d'un client" className="h-[420px] w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-2 hidden rounded-2xl bg-brand-900 px-6 py-5 text-white shadow-float sm:block">
              <p className="font-serif text-3xl font-semibold text-gold-400">+10 000 €</p>
              <p className="text-xs text-brand-100">économisés en moyenne</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">Pourquoi FINASSURE</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-brand-900 sm:text-4xl">
              Le courtage, en mieux
            </h2>
            <p className="mt-4 text-slate-500">
              Notre métier : défendre vos intérêts face aux assureurs et vous faire
              gagner du temps comme de l&apos;argent.
            </p>
            <div className="mt-8 space-y-5">
              {ADVANTAGES.map((a) => {
                const Glyph = a.icon;
                return (
                  <div key={a.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-800 text-gold-400">
                      <Glyph className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-900">{a.title}</h3>
                      <p className="mt-1 text-sm text-slate-500">{a.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Étapes */}
        <div className="mx-auto mt-20 max-w-6xl px-5">
          <h3 className="text-center font-serif text-2xl font-semibold text-brand-900 sm:text-3xl">
            Comment ça marche ?
          </h3>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="relative rounded-2xl bg-white p-7 shadow-card">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500 font-serif text-lg font-bold text-brand-950">
                  {s.n}
                </div>
                <h4 className="mt-5 font-semibold text-brand-900">{s.title}</h4>
                <p className="mt-2 text-sm text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">Contact</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-brand-900 sm:text-4xl">
              Parlons de votre projet
            </h2>
            <p className="mt-4 text-slate-500">
              Un conseiller vous recontacte sous 24h, sans engagement. Demandez votre
              comparatif gratuit dès maintenant.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon.mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-slate-400">Email</p>
                  <p className="font-medium text-brand-900">contact@finassure.fr</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon.pin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-slate-400">Siège social</p>
                  <p className="font-medium text-brand-900">
                    144 avenue Charles de Gaulle, 92200 Neuilly-sur-Seine
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon.clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-slate-400">Horaires</p>
                  <p className="font-medium text-brand-900">Lun – Ven, 9h – 18h</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="border-t border-slate-200 bg-brand-950 text-brand-100">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <BrandLogo tone="dark" />
              <p className="mt-4 max-w-sm text-sm text-brand-200">
                FINASSURE Courtage — cabinet de courtage en assurance.
                Protéger aujourd&apos;hui, sécuriser demain.
              </p>
              <address className="mt-4 text-sm not-italic leading-relaxed text-brand-300">
                Société par actions simplifiée (SAS) au capital de 1 000 €<br />
                Siège social : 144 avenue Charles de Gaulle, 92200 Neuilly-sur-Seine
              </address>
              <p className="mt-4 text-sm text-brand-200">
                <a href="mailto:conseil@finassure.fr" className="font-medium text-white transition hover:text-gold-400">
                  conseil@finassure.fr
                </a>
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Produits</p>
              <ul className="mt-3 space-y-2 text-sm text-brand-200">
                <li><a href="#produits" className="transition hover:text-white">Assurance emprunteur</a></li>
                <li><a href="#produits" className="transition hover:text-white">Auto &amp; habitation</a></li>
                <li><a href="#produits" className="transition hover:text-white">Santé &amp; prévoyance</a></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Liens</p>
              <ul className="mt-3 space-y-2 text-sm text-brand-200">
                <li><a href="#contact" className="transition hover:text-white">Contact</a></li>
                <li><a href={CRM_URL} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">Espace pro (CRM)</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-white/10 pt-6 text-xs leading-relaxed text-brand-300">
            <p>
              © 2026 FINASSURE COURTAGE — SAS au capital de 1 000 €, siège social
              144 avenue Charles de Gaulle, 92200 Neuilly-sur-Seine. Mandataire en
              assurance — immatriculation ORIAS (à compléter). Les contrats sont
              souscrits auprès de nos compagnies partenaires. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
