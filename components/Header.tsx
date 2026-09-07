"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck, Menu, Phone, X } from "lucide-react";
import Logo from "@/components/Logo";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const onDark = false;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/95 shadow-card backdrop-blur-md"
    >
      <div className="container-wb flex h-[72px] items-center justify-between">
        <Logo variant="dark" priority />

        <nav aria-label="Hoofdnavigatie" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative inline-flex min-h-[44px] items-center rounded-full px-4 text-[15px] font-semibold transition-colors ${
                    isActive(link.href)
                      ? onDark
                        ? "text-white"
                        : "text-wbDark-900"
                      : onDark
                        ? "text-gray-300 hover:text-white"
                        : "text-wbDark-500 hover:text-wbDark-900"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-wb-gradient"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className={`inline-flex min-h-[44px] items-center gap-2 text-[15px] font-semibold transition-colors ${
              onDark
                ? "text-gray-300 hover:text-white"
                : "text-wbDark-600 hover:text-wbDark-900"
            }`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {SITE.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="btn-primary min-h-[42px] px-5 py-2 text-sm"
          >
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Gratis kennismaking
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-xl transition-colors lg:hidden ${
            onDark
              ? "text-white hover:bg-white/10"
              : "text-wbDark-800 hover:bg-wbDark-50"
          }`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 top-[72px] z-40 bg-gray-900/20 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="absolute inset-x-4 top-[88px] z-50 flex flex-col overflow-hidden rounded-2xl bg-white shadow-2xl lg:hidden"
            >
              <nav aria-label="Mobiele navigatie" className="flex-1 overflow-y-auto p-4">
                <ul className="space-y-1">
                  {NAV_LINKS.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={`flex min-h-[48px] items-center justify-between rounded-xl px-4 text-lg font-semibold transition-colors ${
                          isActive(link.href)
                            ? "bg-wbTeal-50/50 text-wbTeal-700"
                            : "text-wbDark-600 hover:bg-wbDark-50"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="space-y-3 bg-gray-50 px-5 py-6">
                <Link href="/contact" className="btn-primary w-full">
                  <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                  Gratis kennismaking
                </Link>
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="btn-secondary w-full"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {SITE.phoneDisplay}
                </a>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
