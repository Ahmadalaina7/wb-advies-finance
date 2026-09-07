"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Euro, PiggyBank, TrendingUp } from "lucide-react";

const eur = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

/** Model (afgeleid van gemiddelde praktijkcijfers):
 * - Uurwaarde ondernemer: €75/uur; ~30% van die tijd is anders billable
 * - Zelf administratie: 3 uur basis + 1,2 uur per €10.000 omzet per maand
 * - Eigen kosten: software, fouten en kassaldo-vertraging ~2% van omzet
 * - Uitbesteding: ~2,5% van omzet (vast pakket), minimaal €1.400 per jaar
 */
const HOURLY_RATE = 75;
const OPPORTUNITY_WEIGHT = 0.3;
const SELF_BASE_HOURS = 3;
const SELF_HOURS_PER_10K = 1.2;
const SELF_TOOLING_PCT = 0.02;
const OUTSOURCED_COST_PCT = 0.025;
const OUTSOURCED_MIN = 1400;

export default function SavingsCalculator() {
  const [revenue, setRevenue] = useState(120000);

  const results = useMemo(() => {
    const selfHours =
      SELF_BASE_HOURS + (revenue / 10000) * SELF_HOURS_PER_10K;
    const selfHoursYear = selfHours * 12;
    const selfCost =
      selfHoursYear * HOURLY_RATE * OPPORTUNITY_WEIGHT +
      revenue * SELF_TOOLING_PCT;
    const outsourceCost = Math.max(revenue * OUTSOURCED_COST_PCT, OUTSOURCED_MIN);
    const moneySaved = Math.max(selfCost - outsourceCost, 0);
    const timeSavedPerMonth = selfHours * 0.8;
    const returnFactor = outsourceCost > 0 ? moneySaved / outsourceCost : 0;

    return {
      selfHours: Math.round(selfHours),
      timeSaved: Math.round(timeSavedPerMonth),
      moneySaved: Math.round(moneySaved / 10) * 10,
      returnFactor: Math.max(1, Math.min(4, returnFactor)),
    };
  }, [revenue]);

  const sliderPercent = ((revenue - 25000) / (500000 - 25000)) * 100;

  return (
    <div className="card overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Input side */}
        <div className="p-6 sm:p-10">
          <span className="eyebrow">De X-Factor</span>
          <h3 className="mt-4 font-display text-2xl font-extrabold sm:text-3xl">
            Hoeveel bespaart <span className="text-gradient">uitbesteden</span> u?
          </h3>
          <p className="mt-3 text-wbDark-500">
            Sleep de slider naar uw jaaromzet en zie direct wat u terugverdient
            aan tijd en geld.
          </p>

          <div className="mt-8">
            <div className="flex items-end justify-between gap-4">
              <label
                htmlFor="revenue-slider"
                className="text-sm font-semibold text-wbDark-600"
              >
                Uw jaaromzet
              </label>
              <output
                htmlFor="revenue-slider"
                className="font-display text-2xl font-extrabold text-wbDark-900"
              >
                {eur.format(revenue)}
              </output>
            </div>

            <input
              id="revenue-slider"
              type="range"
              min={25000}
              max={500000}
              step={5000}
              value={revenue}
              onChange={(e) => setRevenue(Number(e.target.value))}
              className="mt-4 h-3 w-full cursor-pointer appearance-none rounded-full bg-gray-100 accent-wbTeal-500
                [&::-webkit-slider-thumb]:h-7 [&::-webkit-slider-thumb]:w-7 [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-white
                [&::-webkit-slider-thumb]:bg-wbTeal-500 [&::-webkit-slider-thumb]:shadow-lg
                [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:rounded-full
                [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:bg-wbTeal-500"
              style={{
                background: `linear-gradient(to right, #6E9E93 0%, #416C62 ${sliderPercent}%, #EEF0F2 ${sliderPercent}%, #EEF0F2 100%)`,
              }}
            />
            <div className="mt-2 flex justify-between text-xs font-medium text-wbDark-300">
              <span>€ 25.000</span>
              <span>€ 500.000</span>
            </div>

            {/* Quick presets */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[50000, 100000, 250000].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setRevenue(preset)}
                  className={`min-h-[40px] rounded-lg px-4 text-sm font-semibold transition-all ${
                    revenue === preset
                      ? "bg-wbTeal-600 text-white shadow-sm"
                      : "border border-wbDark-200 bg-white text-wbDark-600 hover:border-wbTeal-400 hover:bg-wbTeal-50"
                  }`}
                >
                  {eur.format(preset)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results side */}
        <div className="relative bg-wbDark-900 p-6 text-white sm:p-10">
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(ellipse at top right, rgb(110 158 147 / 0.25), transparent 60%)",
            }}
          />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-widest text-wbTeal-300">
              Uw geschatte besparing
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <motion.div
                key={`time-${revenue}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl bg-wbDark-800/80 p-5"
              >
                <Clock className="h-6 w-6 text-wbTeal-300" />
                <p className="mt-3 font-display text-3xl font-extrabold">
                  {results.timeSaved} u
                </p>
                <p className="mt-1 text-xs text-gray-400">per maand terug</p>
              </motion.div>

              <motion.div
                key={`money-${revenue}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.05 }}
                className="rounded-2xl bg-wbDark-800/80 p-5"
              >
                <Euro className="h-6 w-6 text-wbTeal-300" />
                <p className="mt-3 font-display text-3xl font-extrabold">
                  {eur.format(results.moneySaved)}
                </p>
                <p className="mt-1 text-xs text-gray-400">per jaar geld</p>
              </motion.div>
            </div>

            <div className="mt-4 space-y-3 rounded-2xl bg-wbDark-800/80 p-5">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-gray-300">
                  <TrendingUp className="h-4 w-4 text-wbTeal-300" />
                  Terugverdienfactor
                </span>
                <span className="font-display font-extrabold text-white">
                  {results.returnFactor.toFixed(1)}×
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-wbDark-700">
                <motion.div
                  className="h-full rounded-full bg-wb-gradient"
                  animate={{ width: `${(results.returnFactor / 4) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-gray-300">
                  <PiggyBank className="h-4 w-4 text-wbTeal-300" />
                  Uren zelfadministratie nu
                </span>
                <span className="font-display font-extrabold text-white">
                  {results.selfHours} u/mnd
                </span>
              </div>
            </div>

            <Link href="/contact" className="btn-primary mt-6 w-full">
              Ontvang uw persoonlijke berekening
            </Link>
            <p className="mt-3 text-center text-[11px] leading-relaxed text-gray-500">
              Indicatieve berekening op basis van gemiddelde praktijkcijfers. Uw
              situatie kan afwijken. Vraag een gratis rapport op maat aan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
