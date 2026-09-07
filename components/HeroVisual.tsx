import { ArrowDownRight, ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";

export default function HeroVisual() {
  const bars = [38, 52, 44, 66, 58, 78, 72, 90];

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden="true">
      {/* Ambient glow */}
      <div className="absolute -inset-8 bg-radial-teal-glow blur-2xl" />

      {/* Main dashboard card */}
      <div className="card relative z-10 p-6 sm:p-8">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-wbDark-400">
              Resultaat 2026
            </p>
            <p className="mt-2 font-display text-3xl font-extrabold text-wbDark-900">
              € 48.250
            </p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-wbTeal-50 px-3 py-1 text-xs font-bold text-wbTeal-700">
            <ArrowUpRight className="h-3.5 w-3.5" />
            18,4%
          </span>
        </div>

        {/* Bar chart */}
        <div className="mt-8 flex h-36 items-end gap-2 sm:gap-3">
          {bars.map((height, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-2">
              <div
                className={`w-full rounded-t-md ${
                  i === bars.length - 1
                    ? "bg-wb-gradient"
                    : i % 2 === 0
                      ? "bg-wbTeal-200"
                      : "bg-wbDark-100"
                }`}
                style={{ height: `${height}%` }}
              />
              <span className="text-[10px] font-medium text-wbDark-300">
                {["J", "F", "M", "A", "M", "J", "J", "A"][i]}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom stats row */}
        <div className="mt-8 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-wbDark-50 p-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-wbTeal-600" />
              <p className="text-xs font-semibold text-wbDark-500">Aangiften op tijd</p>
            </div>
            <p className="mt-1 font-display text-xl font-extrabold text-wbDark-900">100%</p>
          </div>
          <div className="rounded-xl bg-wbDark-50 p-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-wbTeal-600" />
              <p className="text-xs font-semibold text-wbDark-500">Bespaard dit jaar</p>
            </div>
            <p className="mt-1 font-display text-xl font-extrabold text-wbDark-900">€ 2.140</p>
          </div>
        </div>
      </div>

      {/* Floating card: growth */}
      <div className="absolute -left-4 top-16 z-20 animate-float sm:-left-8">
        <div className="card flex items-center gap-3 p-4 pr-5 shadow-card-hover">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-wb-gradient text-white">
            <ArrowUpRight className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-medium text-wbDark-400">Omzetgroei</p>
            <p className="font-display text-sm font-extrabold text-wbDark-900">+ € 7.480</p>
          </div>
        </div>
      </div>

      {/* Floating card: cost */}
      <div
        className="absolute -right-3 bottom-16 z-20 animate-float sm:-right-6"
        style={{ animationDelay: "1.4s" }}
      >
        <div className="card flex items-center gap-3 p-4 pr-5 shadow-card-hover">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-wbDark-800 text-white">
            <ArrowDownRight className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-medium text-wbDark-400">Administratiekosten</p>
            <p className="font-display text-sm font-extrabold text-wbDark-900">− 32%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
