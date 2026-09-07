import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section flex min-h-[60vh] items-center bg-white pt-[120px]">
      <div className="container-wb text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-wbTeal-50 text-wbTeal-600">
          <SearchX className="h-8 w-8" aria-hidden="true" />
        </span>
        <p className="mt-6 font-display text-6xl font-extrabold text-wbDark-100">
          404
        </p>
        <h1 className="mt-2 font-display text-2xl font-extrabold sm:text-3xl">
          Pagina niet gevonden
        </h1>
        <p className="mx-auto mt-3 max-w-md text-wbDark-500">
          De pagina die u zoekt bestaat niet of is verplaatst. Geen zorgen: uw
          cijfers kloppen nog gewoon.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary w-full sm:w-auto">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Terug naar home
          </Link>
          <Link href="/contact" className="btn-secondary w-full sm:w-auto">
            Naar contact
          </Link>
        </div>
      </div>
    </section>
  );
}
