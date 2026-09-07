import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Vul uw volledige naam in (minimaal 2 tekens).")
    .max(100, "Uw naam mag maximaal 100 tekens bevatten."),
  email: z
    .string()
    .min(1, "Een e-mailadres is verplicht.")
    .email("Vul een geldig e-mailadres in, bijvoorbeeld naam@bedrijf.nl."),
  phone: z
    .string()
    .regex(
      /^(\+?[0-9\s-]{8,15})?$/,
      "Vul een geldig telefoonnummer in of laat het veld leeg."
    ),
  subject: z.string().optional(),
  message: z
    .string()
    .min(10, "Vertel ons kort waar we u mee kunnen helpen (minimaal 10 tekens).")
    .max(2000, "Uw bericht mag maximaal 2000 tekens bevatten."),
  privacy: z.literal(true, {
    errorMap: () => ({ message: "U moet akkoord gaan met het privacybeleid." }),
  }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
