import Link from "next/link";
import { ArrowRight, CalendarCheck } from "lucide-react";
import Reveal from "@/components/Reveal";

type CtaBandProps = {
  title?: string;
  description?: string;
};

export default function CtaBand({
  title = "Klaar voor een zorgeloze administratie?",
  description = "Plan een gratis kennismaking van 30 minuten. U ontvangt direct inzicht in wat u kunt besparen — vrijblijvend en zonder kleine lettertjes.",
}: CtaBandProps) {
  return (
    <section className="section" aria-labelledby="cta-heading">
      <div className="container-wb">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-wbDark-900 px-6 py-14 text-center sm:px-12 sm:py-16">
            {/* Teal glow accents */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full opacity-70 blur-3xl"
              style={{
                background:
                  "radial-gradient(ellipse, rgb(110 158 147 / 0.35), transparent 70%)",
              }}
            />
            <div className="bg-grid-slate absolute inset-0 opacity-40" aria-hidden="true" />

            <div className="relative mx-auto max-w-2xl">
              <h2
                id="cta-heading"
                className="font-display text-3xl font-extrabold text-white sm:text-4xl"
              >
                {title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-300 sm:text-lg">
                {description}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/contact" className="btn-primary w-full sm:w-auto">
                  <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                  Plan gratis kennismaking
                </Link>
                <a
                  href="tel:+31612345678"
                  className="btn-outline-dark w-full sm:w-auto"
                >
                  Bel direct
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
