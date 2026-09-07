"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck, Menu, Phone, X } from "lucide-react";
import Logo from "@/components/Logo";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const menuId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll + close on Escape while the mobile menu is open
  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" || pathname === "";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const close = () => setOpen(false);

  const mobileMenu =
    mounted &&
    createPortal(
      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Menu sluiten"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={close}
              className="fixed inset-0 z-[100] bg-wbDark-950/50 backdrop-blur-[2px] lg:hidden"
            />

            <motion.aside
              id={menuId}
              role="dialog"
              aria-modal="true"
              aria-label="Mobiel menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 360, damping: 36 }}
              className="fixed inset-y-0 right-0 z-[110] flex w-[min(100vw-3rem,22rem)] max-w-full flex-col bg-white shadow-2xl lg:hidden"
            >
              <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-gray-100 px-5">
                <p className="font-display text-sm font-bold uppercase tracking-widest text-wbDark-400">
                  Menu
                </p>
                <button
                  type="button"
                  onClick={close}
                  aria-label="Menu sluiten"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-wbDark-800 hover:bg-wbDark-50"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav
                aria-label="Mobiele navigatie"
                className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4"
              >
                <ul className="space-y-1">
                  {NAV_LINKS.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 + i * 0.04 }}
                    >
                      <Link
                        href={link.href}
                        onClick={close}
                        className={`flex min-h-[52px] items-center justify-between rounded-xl px-4 text-base font-semibold transition-colors active:scale-[0.99] ${
                          isActive(link.href)
                            ? "bg-wbTeal-50 text-wbTeal-800"
                            : "text-wbDark-700 hover:bg-wbDark-50"
                        }`}
                      >
                        {link.label}
                        <span
                          aria-hidden="true"
                          className={
                            isActive(link.href)
                              ? "text-wbTeal-500"
                              : "text-wbDark-300"
                          }
                        >
                          →
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="shrink-0 space-y-3 border-t border-gray-100 bg-wbDark-50/70 px-5 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
                <Link
                  href="/contact"
                  onClick={close}
                  className="btn-primary w-full"
                >
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
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>,
      document.body,
    );

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/95 shadow-card backdrop-blur-md">
        <div className="container-wb flex h-[72px] items-center justify-between gap-3">
          <Logo variant="dark" priority />

          <nav aria-label="Hoofdnavigatie" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative inline-flex min-h-[44px] items-center rounded-xl px-4 text-[15px] font-semibold transition-colors ${
                      isActive(link.href)
                        ? "text-wbDark-900"
                        : "text-wbDark-500 hover:text-wbDark-900"
                    }`}
                  >
                    {link.label}
                    {isActive(link.href) ? (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-wb-gradient"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
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
              className="inline-flex min-h-[44px] items-center gap-2 text-[15px] font-semibold text-wbDark-600 transition-colors hover:text-wbDark-900"
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
            aria-controls={menuId}
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-wbDark-800 transition-colors hover:bg-wbDark-50 lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {mobileMenu}
    </>
  );
}
