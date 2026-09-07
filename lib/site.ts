export const SITE = {
  name: "WB Advies & Finance",
  legalName: "WB Advies & Finance B.V.",
  url: "https://wbadvies-finance.webnestiq.nl",
  email: "info@wbadviesfinance.nl",
  phone: "+31 6 12345678",
  phoneDisplay: "06 - 12 34 56 78",
  whatsapp: "+31612345678",
  address: {
    street: "Dorpsstraat 123",
    postalCode: "1234 AB",
    city: "Amsterdam",
    country: "NL",
  },
  kvk: "87654321",
  btw: "NL864209431B01",
  iban: "NL00 INGB 0000 0000 00",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Diensten", href: "/diensten" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Contact", href: "/contact" },
] as const;
