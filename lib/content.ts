import {
  BookOpenCheck,
  Calculator,
  FileText,
  LineChart,
  PiggyBank,
  Receipt,
  Rocket,
  Scale,
  Users,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  intro: string;
  bullets: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "boekhouding",
    title: "Boekhouding",
    short: "Volledig geautomatiseerde en actuele boekhouding, zonder gedoe.",
    icon: BookOpenCheck,
    intro:
      "Uw boekhouding is de fundering van elk financieel besluit. Wij koppelen uw bank, betaalsystemen en verkoopkanalen aan slimme boekhoudsoftware, zodat transacties automatisch worden gecategoriseerd en uw administratie altijd actueel is. Geen stapels bonnen meer, maar realtime inzicht.",
    bullets: [
      "Automatische bankkoppelingen en factuurverwerking (OCR)",
      "Realtime dashboard met liquiditeit en resultaat",
      "Maandelijks afgeronde administratie, klaar voor fiscaliteit",
      "Digitale dossiers: al uw documenten veilig in de cloud",
    ],
  },
  {
    slug: "belastingaangifte",
    title: "Belastingaangifte",
    short: "Omzetbelasting, inkomstenbelasting en vennootschapsbelasting — altijd op tijd.",
    icon: Receipt,
    intro:
      "Fiscaliteit is meer dan formulieren invullen. Wij controleren actief op aangiften die u misschien ontgaan zijn, passen beschikkingen toe en zorgen dat u nooit te veel belasting betaalt. U krijgt een vast ritme: geen verrassingen, geen boetes, wel rust.",
    bullets: [
      "Omzetbelasting (BTW): maandelijks of per kwartaal",
      "Inkomstenbelasting en vennootschapsbelasting",
      "Voorlopige aanslagen en beschikkingen correct aangevraagd",
      "Proactieve fiscale signalering en controle op aftrekposten",
    ],
  },
  {
    slug: "salarisadministratie",
    title: "Salarisadministratie",
    short: "Correcte, tijdige loonstroken voor u en uw team — inclusief alle regels.",
    icon: Users,
    intro:
      "Van één directeur-grootaandeelhouder tot een compleet team: wij verzorgen de volledige salarisadministratie. Loonheffingen, pensioenpremies, invordering en jaaropgaven worden volautomatisch verwerkt en persoonlijk gecontroleerd door onze specialisten.",
    bullets: [
      "Maandelijkse loonstroken en digitale loonstrokenomgeving",
      "Loonheffingsaangifte en jaaropgaven volledig geregeld",
      "Advies over DGA-salaris, pensioen en reiskosten",
      "Direct antwoord bij vragen over contracten of premies",
    ],
  },
  {
    slug: "financieel-advies",
    title: "Financieel Advies",
    short: "Van cijfers naar beslissingen: sturen op toekomst en winst.",
    icon: LineChart,
    intro:
      "Wij vertalen uw cijfers naar heldere adviezen. Met liquiditeitsprognoses, scenario-analyses en businesscases weet u precies welke stap u kunt nemen — of dat nu investeren, inhuren of uitbreiden is. Wij zijn de sparringpartner naast de ondernemer.",
    bullets: [
      "Liquiditeitsbegroting en meerjarige prognoses",
      "Scenario-analyses en businesscases",
      "Begeleiding bij financieringsaanvragen en bankcontact",
      "Jaarlijks financieel kwaliteitsgesprek met actieplan",
    ],
  },
  {
    slug: "startersbegeleiding",
    title: "Startersbegeleiding",
    short: "Sterk van start met de juiste rechtsvorm, administratie en fiscaal plan.",
    icon: Rocket,
    intro:
      "Een goede start bepaalt het einde. Wij begeleiden starters van het allereerste idee tot een vliegende administratie: rechtsvormkeuze, BTW-regimes, ondernemersfaciliteiten en het opzetten van een administratie die met u meegroeit. U richt zich op ondernemen, wij regelen de rest.",
    bullets: [
      "Keuzehulp rechtsvorm: zzp, VOF of BV",
      "Aanmelding KVK, Belastingdienst en BTW-id",
      "Ondernemersfaciliteiten en startersaftrek maximaal benut",
      "Kostenloze kennismaking en starterspakket",
    ],
  },
];

export type TrustItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
};

export const TRUST_ITEMS: TrustItem[] = [
  {
    icon: Calculator,
    title: "Digitaal",
    description:
      "Volledig digitale administratie met bankkoppelingen, OCR-factuurherkenning en een live dashboard. U kijkt altijd mee in de cijfers.",
    stat: "100%",
    statLabel: "digitale administratie",
  },
  {
    icon: Users,
    title: "Persoonlijk",
    description:
      "Eén vaste specialist die uw onderneming kent. Geen ticket-systemen, maar direct contact met iemand die uw situatie kent.",
    stat: "24u",
    statLabel: "maximale reactietijd",
  },
  {
    icon: LineChart,
    title: "Proactief",
    description:
      "Wij wachten niet op uw vraag. Signalen over besparingen, aftrekposten en risico's komen van ons — vóór het fiscale jaar sluit.",
    stat: "€1.500",
    statLabel: "gemiddelde besparing p/j",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Sinds ik de boekhouding uitbesteed aan WB Advies & Finance ben ik twee dagen per maand kwijt aan administratie minder. De besparingscalculator bleek geen loze belofte.",
    name: "Sanne de Vries",
    role: "Eigenaar, Studio Noord",
    initials: "SV",
  },
  {
    quote:
      "Eindelijk een kantoor dat zelf met ideeën komt. Dankzij hun signalering over mijn pensioenopbouw bespaarde ik afgelopen jaar ruim €2.000 aan belasting.",
    name: "Mark Janssen",
    role: "DGA, Janssen Techniek B.V.",
    initials: "MJ",
  },
  {
    quote:
      "Als starter had ik geen idee waar te beginnen. Binnen twee weken stond mijn administratie, was mijn BTW geregeld en wist ik precies wat ik maandelijks moest reserveren.",
    name: "Ayla Demir",
    role: "Oprichter, Demir Interiors",
    initials: "AD",
  },
];

export type FaqItem = { question: string; answer: string };

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Wat kost uitbesteding van mijn boekhouding?",
    answer:
      "Onze pakketten starten bij €95 per maand voor zzp'ers. De prijs hangt af van het aantal transacties, loonstroken en gewenste advies. Na een korte kennismaking ontvangt u een vaste prijs per maand — zonder verrassingen achteraf.",
  },
  {
    question: "Kan ik overstappen van mijn huidige accountant?",
    answer:
      "Ja, en dat is eenvoudiger dan u denkt. Wij vragen uw dossier bij het huidige kantoor op, regelen de overdracht en houden uw cijfers doorlopend. U hoeft zelf niets te regelen behalve een handtekening.",
  },
  {
    question: "Hoe snel kan ik binnenstromen?",
    answer:
      "In de meeste gevallen staat uw administratie binnen vijf werkdagen live. Na de kennismaking ontvangt u een onboarding-plan en maken we alle koppelingen voor u.",
  },
  {
    question: "Werk ik met een vast aanspreekpunt?",
    answer:
      "Altijd. U krijgt één vaste specialist die uw dossier kent. Bij vakantie of ziekte neemt een collega die volledig is bijgebleven het over — u merkt daar niets van.",
  },
  {
    question: "Neem je ook de aangifte omzetbelasting voor zzp'ers op?",
    answer:
      "Ja, het inklaren van omzetbelasting en inkomstenbelasting zit standaard in elk boekhoudpakket, inclusief de signalering van mogelijke aftrekposten.",
  },
];

export const VALUE_PROPS = [
  {
    icon: Scale,
    title: "Vaste prijs, geen verrassingen",
    text: "U betaalt een helder maandbedrag waarin alle aangiften en kort advies zijn inbegrepen. Nacalculatie en per-uurtje factureren kent u van ons niet.",
  },
  {
    icon: PiggyBank,
    title: "Gemiddeld €1.500 besparing per jaar",
    text: "Door proactieve signalering van aftrekposten en beschikkingen verdient uitbesteding zichzelf vrijwel altijd terug.",
  },
  {
    icon: FileText,
    title: "Overstappen in 5 werkdagen",
    text: "Wij regelen de volledige overdracht met uw huidige kantoor. U tekent één keer; wij doen de rest.",
  },
] as const;
