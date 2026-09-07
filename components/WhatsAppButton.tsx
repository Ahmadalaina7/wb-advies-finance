"use client";

import { MessageCircle } from "lucide-react";
import { SITE, whatsappHref } from "@/lib/site";

type WhatsAppButtonProps = {
  className?: string;
  label?: string;
  message?: string;
  variant?: "float" | "inline";
};

export default function WhatsAppButton({
  className = "",
  label = "App ons",
  message = `Hallo ${SITE.name}, ik heb een vraag.`,
  variant = "inline",
}: WhatsAppButtonProps) {
  if (variant === "float") {
    return (
      <a
        href={whatsappHref(message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`WhatsApp: ${label}`}
        className={`fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_-6px_rgb(37_211_102_/_0.65)] transition-transform hover:scale-105 hover:brightness-105 active:scale-95 sm:bottom-6 sm:right-6 ${className}`}
      >
        <MessageCircle className="h-7 w-7" aria-hidden="true" fill="currentColor" />
      </a>
    );
  }

  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      {label}
    </a>
  );
}
