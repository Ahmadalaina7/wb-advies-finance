import { Quote, Star } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { TESTIMONIALS, TRUST_ITEMS } from "@/lib/content";

export default function TrustSection() {
  return (
    <section className="section bg-wbDark-50/60" aria-labelledby="trust-heading">
      <div className="container-wb">
        <SectionHeading
          eyebrow="Waarom WB Advies & Finance"
          title="Digitaal sterk, persoonlijk in contact"
          description="Wij combineren moderne technologie met de aandacht van een vaste specialist. Dat levert tijd, geld en rust op."
        />

        {/* USP stats */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TRUST_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="card card-hover h-full p-7">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-wb-gradient text-white shadow-glow">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="text-right">
                      <p className="font-display text-2xl font-extrabold text-wbDark-900">
                        {item.stat}
                      </p>
                      <p className="text-xs font-medium text-wbTeal-700">
                        {item.statLabel}
                      </p>
                    </div>
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-wbDark-500">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <Reveal>
            <div className="flex items-center justify-center gap-2">
              <span className="flex" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </span>
              <p className="text-sm font-semibold text-wbDark-600">
                4,9/5 op basis van 120+ klantbeoordelingen
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="card card-hover flex h-full flex-col p-7">
                  <Quote
                    className="h-7 w-7 text-wbTeal-300"
                    aria-hidden="true"
                  />
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-wbDark-600">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-wb-gradient font-display text-xs font-extrabold text-white"
                    >
                      {t.initials}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-wbDark-800">{t.name}</p>
                      <p className="text-xs text-wbDark-400">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
