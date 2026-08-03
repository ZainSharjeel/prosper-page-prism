import { Link } from "@tanstack/react-router";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { business, services, areas } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-navy-foreground">
      <div className="shell grid gap-10 py-14 md:grid-cols-4">
        <div>
          <img src={logo} alt={business.name} width={1024} height={1024} loading="lazy" className="h-20 w-auto" />
          <p className="mt-4 text-sm italic text-navy-foreground/75">{business.tagline}</p>
        </div>

        <div>
          <h3 className="text-lg font-extrabold uppercase text-gold">Need Support?</h3>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/85">
            <li>
              <a href={business.phoneHref} className="flex items-center gap-2 hover:text-gold">
                <Phone className="h-4 w-4 text-gold" /> {business.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="flex items-center gap-2 hover:text-gold">
                <Mail className="h-4 w-4 text-gold" /> {business.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold" /> {business.hours}
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold" /> {business.city}, {business.state}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-extrabold uppercase text-gold">Solutions</h3>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/85">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-gold">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-extrabold uppercase text-gold">Service Areas</h3>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/85">
            {areas.slice(0, 6).map((a) => (
              <li key={a.slug}>
                <Link to="/service-areas/$slug" params={{ slug: a.slug }} className="hover:text-gold">
                  {a.name}, PA
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="hover:text-gold">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10 py-5 text-center text-xs text-navy-foreground/60">
        © {new Date().getFullYear()} {business.name}. All rights reserved.
      </div>
    </footer>
  );
}
