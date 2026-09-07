export const SITE = {
  name: "WB Advies & Finance",
  legalName: "WB Advies & Finance",
  owner: "Walid Bobouh",
  url: "https://wbadvies-finance.webnestiq.nl",
  email: "info@wbadviesfinance.nl",
  /** E.164 without spaces, for tel: and wa.me links */
  phone: "+31620984255",
  phoneDisplay: "06 209 842 55",
  phoneDisplayIntl: "+31 (0) 6 209 84255",
  /** Digits only, country code included, for WhatsApp */
  whatsapp: "31620984255",
  address: {
    street: "Poproute 99",
    postalCode: "4337 PX",
    city: "Middelburg",
    country: "NL",
  },
  kvk: "89867092",
  btw: "NL004767461B98",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Diensten", href: "/diensten" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Contact", href: "/contact" },
] as const;

export function telHref(phone: string = SITE.phone) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function whatsappHref(message?: string) {
  const base = `https://wa.me/${SITE.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function mapsHref() {
  return `https://maps.google.com/?q=${encodeURIComponent(
    `${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city}`
  )}`;
}
