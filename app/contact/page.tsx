import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageSquareText, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Plan een Gratis Kennismaking",
  description:
    "Neem contact op met WB Advies & Finance voor een gratis kennismaking. Bel, mail of stuur een bericht — u ontvangt binnen één werkdag antwoord van een vaste specialist.",
  alternates: { canonical: "/contact" },
};

const CONTACT_CARDS = [
  {
    icon: Phone,
    title: "Bel ons",
    lines: [SITE.phoneDisplay, "ma t/m vr, 09:00 – 17:30"],
    href: `tel:${SITE.phone.replace(/\s/g, "")}`,
    linkLabel: SITE.phoneDisplay,
  },
  {
    icon: Mail,
    title: "Mail ons",
    lines: [SITE.email, "reactie binnen 1 werkdag"],
    href: `mailto:${SITE.email}`,
    linkLabel: SITE.email,
  },
  {
    icon: MapPin,
    title: "Bezoek ons",
    lines: [SITE.address.street, `${SITE.address.postalCode} ${SITE.address.city}`],
    href: `https://maps.google.com/?q=${encodeURIComponent(
      `${SITE.address.street}, ${SITE.address.city}`
    )}`,
    linkLabel: "Route plannen",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-wbDark-900 pt-[72px]" aria-labelledby="contact-hero">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 60% at 75% 15%, rgb(110 158 147 / 0.25), transparent 70%)",
          }}
        />
        <div className="bg-grid-slate absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="container-wb relative py-16 sm:py-20">
          <div className="max-w-3xl">
            <Reveal>
              <span className="eyebrow border-wbDark-600 bg-wbDark-800 text-wbTeal-300">
                Contact
              </span>
              <h1
                id="contact-hero"
                className="mt-6 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl"
              >
                Laten we kennis<span className="text-gradient">maken</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
                Vragen over uw administratie, een tweede mening of direct
                overstappen? Stuur een bericht — u krijgt altijd een persoonlijk
                antwoord, geen verkooppraatje.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Form + contact cards */}
      <section className="section bg-white" aria-label="Contactformulier en gegevens">
        <div className="container-wb">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Form */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="mb-6">
                  <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
                    Stuur ons een bericht
                  </h2>
                  <p className="mt-2 text-wbDark-500">
                    Velden met <span className="text-wbTeal-600">*</span> zijn verplicht.
                  </p>
                </div>
                <ContactForm />
              </Reveal>
            </div>

            {/* Contact info */}
            <div className="space-y-5 lg:col-span-5">
              <Reveal delay={0.08}>
                <div className="space-y-5">
                  {CONTACT_CARDS.map((card) => {
                    const Icon = card.icon;
                    return (
                      <a
                        key={card.title}
                        href={card.href}
                        target={card.href.startsWith("http") ? "_blank" : undefined}
                        rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="card card-hover group flex items-start gap-4 p-6"
                      >
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-wbTeal-50 text-wbTeal-700 transition-colors group-hover:bg-wb-gradient group-hover:text-white">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <div>
                          <h3 className="font-display text-base font-bold">{card.title}</h3>
                          <p className="mt-1 text-sm font-semibold text-wbDark-700">
                            {card.lines[0]}
                          </p>
                          <p className="text-sm text-wbDark-400">{card.lines[1]}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="card bg-wbDark-900 p-6 text-white">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-wbTeal-300" aria-hidden="true" />
                    <h3 className="font-display text-base font-bold text-white">
                      Openingstijden
                    </h3>
                  </div>
                  <dl className="mt-4 space-y-2 text-sm">
                    {[
                      { day: "Maandag – Vrijdag", hours: "09:00 – 17:30" },
                      { day: "Zaterdag", hours: "Op afspraak" },
                      { day: "Zondag", hours: "Gesloten" },
                    ].map((row) => (
                      <div
                        key={row.day}
                        className="flex items-center justify-between border-b border-wbDark-800 pb-2 last:border-0 last:pb-0"
                      >
                        <dt className="text-gray-400">{row.day}</dt>
                        <dd className="font-semibold text-white">{row.hours}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-5 flex items-start gap-3 rounded-xl bg-wbDark-800/70 p-4">
                    <MessageSquareText
                      className="mt-0.5 h-5 w-5 shrink-0 text-wbTeal-300"
                      aria-hidden="true"
                    />
                    <p className="text-sm leading-relaxed text-gray-300">
                      Liever direct antwoord? Tijdens openingstijden neemt u
                      binnen drie minuten iemand op — geen keuzemenu.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
