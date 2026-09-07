import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarCheck, Compass, Eye, Handshake, Target } from "lucide-react";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import TrustSection from "@/components/TrustSection";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Over Ons — Visie & Werkwijze van WB Advies & Finance",
  description:
    "Leer WB Advies & Finance kennen: een modern boekhoudkantoor dat digitale efficiëntie combineert met persoonlijke aandacht. Ontdek onze missie, visie en waarden.",
  alternates: { canonical: "/over-ons" },
};

const VALUES = [
  {
    icon: Compass,
    title: "Helderheid",
    text: "Geen financieel jargon, maar taal die u begrijpt. Complex wordt simpel, zodat u met vertrouwen beslissingen neemt.",
  },
  {
    icon: Handshake,
    title: "Betrouwbaarheid",
    text: "We zeggen wat we doen en doen wat we zeggen. Uw administratie is bij ons vertrouwelijk, correct en altijd op tijd.",
  },
  {
    icon: Target,
    title: "Vooruitzien",
    text: "De btw-aangifte van vandaag is minder belangrijk dan de Liquiditeitsprognose van volgend kwartaal. Wij kijken vooruit.",
  },
];

export default function OverOnsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-wbDark-900 pt-[72px]" aria-labelledby="over-hero">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 60% at 20% 10%, rgb(110 158 147 / 0.25), transparent 70%)",
          }}
        />
        <div className="bg-grid-slate absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="container-wb relative py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <Reveal>
              <span className="eyebrow border-wbDark-600 bg-wbDark-800 text-wbTeal-300">
                Over WB Advies &amp; Finance
              </span>
              <h1
                id="over-hero"
                className="mt-6 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl"
              >
                Cijfers zijn ons vak.{" "}
                <span className="text-gradient">Uw rust is ons doel.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
                WB Advies &amp; Finance is opgericht met één overtuiging:
                ondernemers verdienen een financiële partner die meedenkt — niet
                alleen jaarlijks een map met cijfers achterlaat.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Missie & visie */}
      <section className="section bg-white" aria-labelledby="missie-heading">
        <div className="container-wb">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="card h-full p-8 sm:p-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-wbTeal-50 text-wbTeal-700">
                  <Eye className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2
                  id="missie-heading"
                  className="mt-6 font-display text-2xl font-extrabold"
                >
                  Onze visie
                </h2>
                <p className="mt-4 leading-relaxed text-wbDark-600">
                  Wij geloven dat elke ondernemer — van startende zzp'er tot
                  groeiende familieonderneming — recht heeft op realtime
                  financieel inzicht. De tijd dat boekhouden een jaarlijks
                  ritueel met papieren mappen was, is voorbij. Administratie
                  moet werken zoals moderne software: altijd actueel, overal
                  beschikbaar en een bron van inzicht in plaats van stress.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="card h-full bg-wbDark-900 p-8 text-white sm:p-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-wbDark-800 text-wbTeal-300">
                  <Target className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="mt-6 font-display text-2xl font-extrabold text-white">
                  Onze missie
                </h2>
                <p className="mt-4 leading-relaxed text-gray-300">
                  Elke ondernemer 5 uur per week en €1.500 per jaar teruggeven.
                  Dat doen we door administratie te automatiseren waar het kan
                  en te personaliseren waar het moet. Uw vaste specialist kent
                  uw onderneming, signaleert kansen vóór het fiscale jaar sluit
                  en pakt u op het moment dat het telt.
                </p>
                <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-wbDark-800 pt-6">
                  {[
                    { value: "250+", label: "Ondernemers" },
                    { value: "12", label: "Specialisten" },
                    { value: "9 jaar", label: "Ervaring" },
                  ].map((s) => (
                    <div key={s.label}>
                      <dd className="font-display text-2xl font-extrabold text-white">
                        {s.value}
                      </dd>
                      <dt className="mt-1 text-xs text-gray-400">{s.label}</dt>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-wbDark-50/60" aria-labelledby="waarden-heading">
        <div className="container-wb">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Onze waarden</span>
              <h2
                id="waarden-heading"
                className="mt-4 font-display text-3xl font-extrabold sm:text-4xl"
              >
                Waar wij voor staan
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="card card-hover h-full p-8">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-wb-gradient text-white shadow-glow">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 text-lg font-bold">{v.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-wbDark-500">
                      {v.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder quote */}
      <section className="section bg-white" aria-label="Woord van de oprichter">
        <div className="container-wb">
          <Reveal>
            <figure className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-wb-gradient p-8 text-white shadow-glow sm:p-14">
              <div className="bg-grid-slate absolute inset-0 opacity-20" aria-hidden="true" />
              <blockquote className="relative">
                <p className="font-display text-xl font-bold leading-relaxed sm:text-2xl">
                  “Wij zijn pas tevreden als u nooit meer omkijkt naar uw
                  administratie — en wel naar uw cijfers. Dat verschil is waarom
                  WB Advies &amp; Finance bestaat.”
                </p>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 font-display text-sm font-extrabold text-white ring-1 ring-white/30"
                  >
                    WB
                  </span>
                  <div>
                    <p className="font-bold">W. Bakker</p>
                    <p className="text-sm text-white/80">
                      Oprichter &amp; Directeur, {SITE.name}
                    </p>
                  </div>
                </figcaption>
              </blockquote>
            </figure>
          </Reveal>
        </div>
      </section>

      <TrustSection />

      <section className="section bg-white pt-0" aria-label="Contact call-to-action">
        <div className="container-wb">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-gray-100 bg-wbDark-50/60 p-8 sm:p-10 lg:flex-row">
              <div>
                <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
                  Kennismaken met onze werkwijze?
                </h2>
                <p className="mt-2 max-w-xl text-wbDark-500">
                  Plan een vrijblijvend gesprek en ervaar hoe persoonlijk
                  digitale boekhouding aanvoelt.
                </p>
              </div>
              <Link href="/contact" className="btn-primary w-full shrink-0 sm:w-auto">
                <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                Plan gratis kennismaking
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
