import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import Logo from "@/components/Logo";
import { SERVICES } from "@/lib/content";
import { NAV_LINKS, SITE, telHref, whatsappHref } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-wbDark-900 text-gray-300">
      {/* Soft brand atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-wbTeal-900/25 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-16 h-56 w-56 rounded-full bg-wbTeal-500/10 blur-3xl"
      />

      <div className="container-wb relative py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Brand lockup */}
          <div className="lg:col-span-4">
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-wbDark-800/90 via-wbDark-900 to-wbDark-950 p-5 sm:p-6">
              <div
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-1 bg-wb-gradient"
              />
              <Logo variant="light" size="footer" />
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
                Moderne boekhouding, fiscaliteit en financieel advies voor
                ondernemers die vooruit willen. Digitaal waar het kan, persoonlijk
                waar het moet.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-wbTeal-300">
                  <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  Digitaal · Persoonlijk
                </span>
              </div>
              <dl className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/[0.06] pt-4 text-xs text-gray-500">
                <div className="flex gap-1.5">
                  <dt className="font-semibold text-gray-400">KVK</dt>
                  <dd>{SITE.kvk}</dd>
                </div>
                <div className="flex gap-1.5">
                  <dt className="font-semibold text-gray-400">BTW</dt>
                  <dd>{SITE.btw}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Diensten" className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Diensten
            </h3>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/diensten#${s.slug}`}
                    className="inline-flex min-h-[32px] items-center text-sm text-gray-400 transition-colors hover:text-wbTeal-300"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sitemap */}
          <nav aria-label="Navigatie" className="lg:col-span-2">
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Navigatie
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-[32px] items-center text-sm text-gray-400 transition-colors hover:text-wbTeal-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={telHref()}
                  className="flex min-h-[44px] items-center gap-3 text-gray-400 transition-colors hover:text-wbTeal-300"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-wbDark-800">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref(`Hallo ${SITE.name}, ik heb een vraag.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[44px] items-center gap-3 text-gray-400 transition-colors hover:text-wbTeal-300"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-wbDark-800">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  </span>
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex min-h-[44px] items-center gap-3 text-gray-400 transition-colors hover:text-wbTeal-300"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-wbDark-800">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {SITE.email}
                </a>
              </li>
              <li className="flex gap-3 text-gray-400">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-wbDark-800">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="pt-2 leading-relaxed">
                  {SITE.address.street}
                  <br />
                  {SITE.address.postalCode} {SITE.address.city}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-wbDark-800 pt-8 sm:flex-row">
          <p className="text-xs text-gray-500">
            © {year} {SITE.legalName}. Alle rechten voorbehouden.
          </p>
          <p className="text-xs text-gray-500">
            Ontwikkeld door{" "}
            <a
              href="https://webnestiq.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-wbTeal-300 transition-colors hover:text-wbTeal-200"
            >
              webnestiQ
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
