import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarCheck,
  Handshake,
  MessageCircle,
} from "lucide-react";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Over Mij | Walid Bobouh",
  description:
    "Maak kennis met Walid Bobouh, oprichter van WB Advies & Finance. Persoonlijk, betrouwbaar en helder financieel advies voor ondernemers.",
  alternates: { canonical: "/over-mij" },
};

const HIGHLIGHTS = [
  {
    icon: BriefcaseBusiness,
    title: "Finance & Control",
    text: "Een stevige achtergrond in finance, aangevuld met praktijkervaring in accountancy en financiële dienstverlening.",
  },
  {
    icon: Handshake,
    title: "Persoonlijk contact",
    text: "U werkt rechtstreeks met mij samen. Geen callcenter, maar een vaste sparringpartner die uw onderneming kent.",
  },
  {
    icon: MessageCircle,
    title: "Helder advies",
    text: "Geen onnodig jargon. Wel een praktische aanpak, zodat u weet waar u aan toe bent en gerust verder kunt ondernemen.",
  },
];

export default function OverMijPage() {
  return (
    <>
      <section
        className="relative overflow-hidden bg-wbDark-900 pt-[72px]"
        aria-labelledby="over-mij-hero"
      >
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
                Over mij
              </span>
              <h1
                id="over-mij-hero"
                className="mt-6 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl"
              >
                {SITE.owner}
                <span className="mt-2 block text-gradient text-[0.55em] font-bold tracking-normal sm:mt-3">
                  Oprichter van {SITE.name}
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
                Grip op uw boekhouding en financiën, zonder gedoe. Dat is waar
                ik ondernemers dagelijks bij help.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-white" aria-labelledby="intro-heading">
        <div className="container-wb">
          <Reveal>
            <div className="mx-auto max-w-3xl">
              <span className="eyebrow">Kennismaking</span>
              <h2
                id="intro-heading"
                className="mt-4 font-display text-3xl font-extrabold sm:text-4xl"
              >
                Wie ik ben
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-wbDark-600 sm:text-lg">
                <p>
                  Mijn naam is Walid Bobouh, oprichter van WB Advies &amp;
                  Finance. Met een achtergrond in Finance &amp; Control en
                  jarenlange ervaring binnen de accountancy en financiële
                  dienstverlening help ik ondernemers om grip en overzicht te
                  krijgen op hun boekhouding en financiën.
                </p>
                <p>
                  Persoonlijk contact, betrouwbaarheid en duidelijkheid staan
                  bij mij centraal. Geen ingewikkelde financiële taal, maar een
                  praktische aanpak en helder advies. Zo kunt u zich volledig
                  richten op het ondernemen, terwijl ik ervoor zorg dat uw
                  financiële zaken goed geregeld zijn.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                  Plan een kennismaking
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-wbDark-50/60" aria-labelledby="aanpak-heading">
        <div className="container-wb">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Mijn aanpak</span>
              <h2
                id="aanpak-heading"
                className="mt-4 font-display text-3xl font-extrabold sm:text-4xl"
              >
                Waar u op kunt rekenen
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {HIGHLIGHTS.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <div className="card card-hover h-full p-8">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-wb-gradient text-white shadow-glow">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 text-lg font-bold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-wbDark-500">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand
        title="Klaar om kennis te maken?"
        description="Vertel kort waar u tegenaan loopt. U krijgt een persoonlijk en helder antwoord, zonder verplichtingen."
      />
    </>
  );
}
