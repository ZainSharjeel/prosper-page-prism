import { Phone } from "lucide-react";
import { business } from "@/data/site";

export function StickyCall() {
  return (
    <a
      href={business.phoneHref}
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-2 bg-gold py-4 text-base font-extrabold uppercase tracking-wide text-gold-foreground md:hidden"
    >
      <Phone className="h-5 w-5" /> Call Us Now {business.phone}
    </a>
  );
}
