import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarCheck, CheckCircle2 } from "lucide-react";
import CtaBand from "@/components/CtaBand";
import FaqAccordion from "@/components/FaqAccordion";
import Reveal from "@/components/Reveal";
import { FAQ_ITEMS, SERVICES, VALUE_PROPS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Diensten — Boekhouding, Belastingen, Salaris & Advies",
  description:
    "Ontdek de diensten van WB Advies & Finance: geautomatiseerde boekhouding, belastingaangifte, salarisadministratie, financieel advies en startersbegeleiding. Vaste prijzen, persoonlijke aandacht.",
  alternates: { canonical: "/diensten" },
};

export default function DienstenPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-wbDark-900 pt-[72px]" aria-labelledby="diensten-hero">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 60% at 80% 10%, rgb(110 158 147 / 0.25), transparent 70%)",
          }}
        />
        <div className="bg-grid-slate absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="container-wb relative py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <Reveal>
              <span className="eyebrow border-wbDark-600 bg-wbDark-800 text-wbTeal-300">
                Onze diensten
              </span>
              <h1
                id="diensten-hero"
                className="mt-6 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl"
              >
                Financieel maatwerk voor{" "}
                <span className="text-gradient">elke ondernemer</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
                Van geautomatiseerde boekhouding tot strategisch financieel
                advies. U kiest de diensten die u nodig heeft — wij zorgen dat
                alles naadloos samenwerkt.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="btn-primary w-full sm:w-auto">
                  <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                  Vraag een voorstel aan
                </Link>
                <a
                  href="#diensten-overzicht"
                  className="btn-outline-dark w-full sm:w-auto"
                >
                  Naar de diensten
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services in depth */}
      <section id="diensten-overzicht" className="section bg-white" aria-label="Diensten in het detail">
        <div className="container-wb space-y-8">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            const reversed = i % 2 === 1;
            return (
              <Reveal key={service.slug} delay={0.05}>
                <article
                  id={service.slug}
                  className="card scroll-mt-24 overflow-hidden"
                >
                  <div className={`grid lg:grid-cols-2 ${reversed ? "lg:[direction:rtl]" : ""}`}>
                    {/* Text side */}
                    <div className={`p-7 sm:p-10 ${reversed ? "lg:[direction:ltr]" : ""}`}>
                      <div className="flex items-center gap-4">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-wb-gradient text-white shadow-glow">
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </span>
                        <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
                          {service.title}
                        </h2>
                      </div>
                      <p className="mt-5 leading-relaxed text-wbDark-600">
                        {service.intro}
                      </p>
                      <ul className="mt-6 space-y-3">
                        {service.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3">
                            <CheckCircle2
                              className="mt-0.5 h-5 w-5 shrink-0 text-wbTeal-500"
                              aria-hidden="true"
                            />
                            <span className="text-sm leading-relaxed text-wbDark-600">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`/contact?onderwerp=${encodeURIComponent(service.title)}`}
                        className="btn-primary mt-8"
                      >
                        Vraag over {service.title.toLowerCase()}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>

                    {/* Decorative side */}
                    <div
                      className={`relative hidden min-h-[320px] items-center justify-center overflow-hidden bg-wbDark-900 p-10 lg:flex ${
                        reversed ? "lg:[direction:ltr]" : ""
                      }`}
                    >
                      <div
                        aria-hidden="true"
                        className="absolute inset-0"
                        style={{
                          background:
                            "radial-gradient(ellipse 70% 60% at 30% 30%, rgb(110 158 147 / 0.3), transparent 70%)",
                        }}
                      />
                      <div className="bg-grid-slate absolute inset-0 opacity-40" aria-hidden="true" />
                      <span
                        aria-hidden="true"
                        className="relative flex h-32 w-32 items-center justify-center rounded-3xl bg-wbDark-800/70 shadow-glow"
                      >
                        <Icon className="h-16 w-16 text-wbTeal-300" />
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Value props */}
      <section className="border-y border-gray-100 bg-wbDark-50/60" aria-label="Waarom uitbesteden">
        <div className="container-wb grid gap-8 py-14 sm:grid-cols-3">
          {VALUE_PROPS.map((vp, i) => {
            const Icon = vp.icon;
            return (
              <Reveal key={vp.title} delay={i * 0.08}>
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-wbTeal-700 shadow-card">
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

      {/* FAQ */}
      <section className="section bg-white" aria-labelledby="faq-heading">
        <div className="container-wb">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="text-center">
                <span className="eyebrow">Veelgestelde vragen</span>
                <h2
                  id="faq-heading"
                  className="mt-4 font-display text-3xl font-extrabold sm:text-4xl"
                >
                  Antwoord op uw vragen
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="mt-10">
              <FaqAccordion items={FAQ_ITEMS} />
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Welk pakket past bij uw onderneming?"
        description="Vertel ons kort over uw situatie en ontvang binnen 3 werkdagen een helder voorstel met vaste prijs per maand."
      />
    </>
  );
}
