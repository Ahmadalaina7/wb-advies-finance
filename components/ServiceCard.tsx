import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/content";

type ServiceCardProps = {
  service: Service;
  href?: string;
};

export default function ServiceCard({ service, href }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Link
      href={href ?? `/diensten#${service.slug}`}
      className="card card-hover group flex h-full flex-col p-6 sm:p-7"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-wbTeal-50 text-wbTeal-600 transition-colors duration-300 group-hover:bg-wb-gradient group-hover:text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-lg font-bold">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-wbDark-500">
        {service.short}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-wbTeal-700 transition-all group-hover:gap-2.5">
        Meer informatie
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </Link>
  );
}
