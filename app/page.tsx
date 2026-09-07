import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Link2,
  Search,
} from "lucide-react";
import HeroVisual from "@/components/HeroVisual";
import SavingsCalculator from "@/components/SavingsCalculator";
import ServiceCard from "@/components/ServiceCard";
import TrustSection from "@/components/TrustSection";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { FAQ_ITEMS, SERVICES, VALUE_PROPS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Boekhouder & Financieel Advies voor Ondernemers",
  description:
    "WB Advies & Finance verzorgt uw geautomatiseerde boekhouding, belastingaangifte, salarisadministratie en financieel advies. Digitaal, persoonlijk, proactief. Bereken direct uw besparing.",
  alternates: { canonical: "/" },
};

const PROCESS_STEPS = [
  {
    icon: Search,
    title: "Kennismaking & analyse",
    text: "We brengen uw administratie, wensen en besparingskansen kosteloos in kaart.",
  },
  {
    icon: ClipboardList,
    title: "Voorstel op maat",
    text: "Binnen 3 werkdagen ontvangt u een vaste prijs per maand — helder en zonder verrassingen.",
  },
  {
    icon: Link2,
    title: "Koppelingen & onboarding",
    text: "Wij regelen bankkoppelingen en de overdracht van uw huidige kantoor. U doet niets.",
  },
  {
    icon: CheckCircle2,
    title: "Zorgeloos ondernemen",
    text: "Uw administratie draait, aangiften zijn geregeld en u krijgt proactief advies.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-wbDark-900 pt-[72px]" aria-labelledby="hero-heading">
        {/* Ambient background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 70% 20%, rgb(110 158 147 / 0.28), transparent 70%), radial-gradient(ellipse 40% 40% at 10% 90%, rgb(110 158 147 / 0.14), transparent 70%)",
          }}
        />
        <div className="bg-grid-slate absolute inset-0 opacity-60" aria-hidden="true" />

        <div className="container-wb relative">
          <div className="grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-2 lg:py-24">
            <div className="text-center lg:text-left">
              <Reveal>
                <span className="eyebrow border-wbDark-600 bg-wbDark-800 text-wbTeal-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-wbTeal-400" aria-hidden="true" />
                  Allround boekhoudkantoor
                </span>
              </Reveal>

              <Reveal delay={0.08}>
                <h1
                  id="hero-heading"
                  className="mt-6 font-display text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]"
                >
                  Uw Financiële Fundering,{" "}
                  <span className="text-gradient">Klaar voor de Toekomst</span>
                </h1>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg lg:mx-0">
                  Van geautomatiseerde boekhouding tot fiscaal advies: WB Advies
                  &amp; Finance geeft ondernemers rust en overzicht. Digitaal
                  waar het kan, persoonlijk waar het moet.
                </p>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
                  <Link href="/contact" className="btn-primary w-full sm:w-auto">
                    <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                    Gratis kennismaking
                  </Link>
                  <Link
                    href="#besparingscalculator"
                    className="btn-outline-dark w-full sm:w-auto"
                  >
                    Bereken uw besparing
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.32}>
                <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-wbDark-800 pt-8 text-center lg:text-left">
                  {[
                    { value: "250+", label: "Ondernemers" },
                    { value: "4,9/5", label: "Klantbeoordeling" },
                    { value: "24u", label: "Reactietijd" },
                  ].map((s) => (
                    <div key={s.label}>
                      <dt className="sr-only">{s.label}</dt>
                      <dd className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                        {s.value}
                      </dd>
                      <dd className="mt-1 text-xs font-medium text-gray-400 sm:text-sm">
                        {s.label}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            <Reveal delay={0.2} className="lg:pl-6">
              <HeroVisual />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ VALUE PROPS STRIP ============ */}
      <section className="border-b border-gray-100 bg-white" aria-label="Onze beloftes">
        <div className="container-wb grid gap-8 py-12 sm:grid-cols-3">
          {VALUE_PROPS.map((vp, i) => {
            const Icon = vp.icon;
            return (
              <Reveal key={vp.title} delay={i * 0.08}>
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-wbTeal-50 text-wbTeal-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="text-[15px] font-bold">{vp.title}</h2>
                    <p className="mt-1 text-sm leading-relaxed text-wbDark-500">
                      {vp.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ============ SAVINGS CALCULATOR ============ */}
      <section id="besparingscalculator" className="section bg-wbDark-50/60" aria-labelledby="calc-heading">
        <div className="container-wb">
          <Reveal>
            <SavingsCalculator />
          </Reveal>
        </div>
      </section>

      {/* ============ DIENSTEN ============ */}
      <section className="section bg-white" aria-labelledby="diensten-heading">
        <div className="container-wb">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Onze diensten</span>
              <h2
                id="diensten-heading"
                className="mt-4 font-display text-3xl font-extrabold sm:text-4xl"
              >
                Alles voor uw financiële huishouding
              </h2>
              <p className="mt-4 text-wbDark-500 sm:text-lg">
                Van starters tot gevestigde ondernemers: één vast team voor
                al uw cijfers, aangiften en advies.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.06}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
            {/* CTA tile to complete the grid */}
            <Reveal delay={0.3}>
              <Link
                href="/contact"
                className="group relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl bg-wb-gradient p-6 text-white shadow-glow transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7"
              >
                <div className="bg-grid-slate absolute inset-0 opacity-20" aria-hidden="true" />
                <div className="relative">
                  <h3 className="font-display text-lg font-bold text-white">
                    Niet gevonden wat u zocht?
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/85">
                    Wij denken graag met u mee over uw specifieke situatie.
                  </p>
                </div>
                <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5">
                  Neem contact op
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ WERKWIJZE ============ */}
      <section className="section bg-wbDark-50/60" aria-labelledby="werkwijze-heading">
        <div className="container-wb">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Zo werken wij</span>
              <h2
                id="werkwijze-heading"
                className="mt-4 font-display text-3xl font-extrabold sm:text-4xl"
              >
                Van kennismaking naar zorgeloos ondernemen
              </h2>
            </div>
          </Reveal>

          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={i * 0.08}>
                  <li className="card card-hover relative h-full p-7">
                    <span
                      aria-hidden="true"
                      className="absolute right-6 top-6 font-display text-4xl font-extrabold text-wbTeal-400/70"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-wbTeal-50 text-wbTeal-700">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-[15px] font-bold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-wbDark-500">
                      {step.text}
                    </p>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ============ TRUST + TESTIMONIALS ============ */}
      <TrustSection />

      {/* ============ FAQ ============ */}
      <section className="section bg-white" aria-labelledby="faq-heading">
        <div className="container-wb">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="eyebrow">Veelgestelde vragen</span>
                <h2
                  id="faq-heading"
                  className="mt-4 font-display text-3xl font-extrabold sm:text-4xl"
                >
                  Alles wat u wilt weten
                </h2>
                <p className="mt-4 text-wbDark-500 sm:text-lg">
                  Staat uw vraag er niet tussen? Bel ons of plan een gratis
                  kennismaking — we helpen u graag verder.
                </p>
                <Link href="/contact" className="btn-secondary mt-6">
                  Stel uw vraag
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <FaqAccordion items={FAQ_ITEMS} />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <CtaBand />
    </>
  );
}
