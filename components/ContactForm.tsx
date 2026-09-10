"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { contactSchema, type ContactFormValues } from "@/lib/validation";
import { SITE } from "@/lib/site";

type ContactFormProps = {
  defaultSubject?: string;
};

export default function ContactForm({ defaultSubject }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: defaultSubject ?? "",
      message: "",
    },
  });

  const messageLength = watch("message")?.length ?? 0;

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitError(null);

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${SITE.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            phone: values.phone || "Niet opgegeven",
            subject: values.subject || "Contactformulier",
            message: values.message,
            _replyto: values.email,
            _subject: `Nieuw contactbericht: ${values.subject || "Algemeen"}`,
            _template: "table",
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Versturen mislukt");
      }

      setSubmitted(true);
      reset();
    } catch {
      setSubmitError(
        "Het bericht kon niet worden verstuurd. Probeer het opnieuw of mail ons direct."
      );
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        className="card flex min-h-[420px] flex-col items-center justify-center p-8 text-center sm:p-12"
      >
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 260, damping: 18 }}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-wb-gradient text-white shadow-glow"
        >
          <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
        </motion.span>
        <h3 className="mt-6 font-display text-2xl font-extrabold">
          Bedankt voor uw bericht!
        </h3>
        <p className="mt-3 max-w-md text-wbDark-500">
          We hebben uw aanvraag ontvangen. U ontvangt binnen één werkdag een
          reactie van een van onze specialisten.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="btn-secondary mt-8"
        >
          Nog een bericht versturen
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Naam */}
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-wbDark-700">
            Naam <span className="text-wbTeal-600" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Uw naam"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`input-field ${errors.name ? "input-error" : ""}`}
            {...register("name")}
          />
          {errors.name ? (
            <p id="name-error" role="alert" className="mt-1.5 text-sm font-medium text-red-500">
              {errors.name.message}
            </p>
          ) : null}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-wbDark-700">
            E-mailadres <span className="text-wbTeal-600" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="naam@bedrijf.nl"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`input-field ${errors.email ? "input-error" : ""}`}
            {...register("email")}
          />
          {errors.email ? (
            <p id="email-error" role="alert" className="mt-1.5 text-sm font-medium text-red-500">
              {errors.email.message}
            </p>
          ) : null}
        </div>

        {/* Telefoon */}
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-wbDark-700">
            Telefoonnummer
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="06 209 842 55 (optioneel)"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={`input-field ${errors.phone ? "input-error" : ""}`}
            {...register("phone")}
          />
          {errors.phone ? (
            <p id="phone-error" role="alert" className="mt-1.5 text-sm font-medium text-red-500">
              {errors.phone.message}
            </p>
          ) : null}
        </div>

        {/* Onderwerp */}
        <div>
          <label htmlFor="subject" className="mb-1.5 block text-sm font-semibold text-wbDark-700">
            Onderwerp
          </label>
          <select id="subject" className="input-field" {...register("subject")}>
            <option value="">Kies een onderwerp (optioneel)</option>
            <option value="Boekhouding">Boekhouding</option>
            <option value="Belastingaangifte">Belastingaangifte</option>
            <option value="Salarisadministratie">Salarisadministratie</option>
            <option value="Financieel Advies">Financieel Advies</option>
            <option value="Startersbegeleiding">Startersbegeleiding</option>
            <option value="Overstappen">Overstappen van accountant</option>
          </select>
        </div>

        {/* Bericht */}
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-wbDark-700">
            Uw bericht <span className="text-wbTeal-600" aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            rows={6}
            placeholder="Vertel kort over uw onderneming en waar we u mee kunnen helpen…"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : "message-counter"}
            className={`input-field resize-y ${errors.message ? "input-error" : ""}`}
            {...register("message")}
          />
          <div className="mt-1.5 flex items-start justify-between gap-4">
            {errors.message ? (
              <p id="message-error" role="alert" className="text-sm font-medium text-red-500">
                {errors.message.message}
              </p>
            ) : (
              <span />
            )}
            <span id="message-counter" className="text-xs text-wbDark-300">
              {messageLength}/2000
            </span>
          </div>
        </div>
      </div>

      {/* Privacy */}
      <div className="mt-5">
        <label htmlFor="privacy" className="flex min-h-[44px] cursor-pointer items-start gap-3">
          <input
            id="privacy"
            type="checkbox"
            className="mt-0.5 h-5 w-5 shrink-0 rounded border-gray-300 text-wbTeal-600 focus:ring-wbTeal-400"
            aria-invalid={!!errors.privacy}
            aria-describedby={errors.privacy ? "privacy-error" : undefined}
            {...register("privacy")}
          />
          <span className="text-sm leading-relaxed text-wbDark-500">
            Ik ga akkoord met het privacybeleid en geef toestemming om mijn
            gegevens te gebruiken om te reageren op mijn aanvraag.
          </span>
        </label>
        {errors.privacy ? (
          <p id="privacy-error" role="alert" className="mt-1.5 text-sm font-medium text-red-500">
            {errors.privacy.message}
          </p>
        ) : null}
      </div>

      {submitError ? (
        <p role="alert" className="mt-5 text-sm font-medium text-red-500">
          {submitError}{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="underline underline-offset-2 hover:text-red-600"
          >
            {SITE.email}
          </a>
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary mt-7 w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Versturen…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            Verstuur bericht
          </>
        )}
      </button>
    </form>
  );
}
