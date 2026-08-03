import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Phone, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import { business, services, areas } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="shell flex items-center justify-between gap-4 py-3">
        <Link to="/" className="flex shrink-0 items-center" aria-label={business.name}>
          <img src={logo} alt={`${business.name} logo`} width={1024} height={1024} className="h-14 w-auto md:h-16" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          <Link to="/" className="text-sm font-bold uppercase tracking-wide text-navy-foreground hover:text-gold">
            Home
          </Link>
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-bold uppercase tracking-wide text-navy-foreground hover:text-gold">
              Services <ChevronDown className="h-4 w-4" />
            </button>
            <div className="invisible absolute left-0 top-full w-64 rounded-md bg-navy p-2 opacity-0 shadow-panel transition group-hover:visible group-hover:opacity-100">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="block rounded px-3 py-2 text-sm font-semibold text-navy-foreground hover:bg-gold hover:text-gold-foreground"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/gallery" className="text-sm font-bold uppercase tracking-wide text-navy-foreground hover:text-gold">
            Gallery
          </Link>
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-bold uppercase tracking-wide text-navy-foreground hover:text-gold">
              Service Areas <ChevronDown className="h-4 w-4" />
            </button>
            <div className="invisible absolute left-0 top-full grid w-64 grid-cols-1 rounded-md bg-navy p-2 opacity-0 shadow-panel transition group-hover:visible group-hover:opacity-100">
              {areas.map((a) => (
                <Link
                  key={a.slug}
                  to="/service-areas/$slug"
                  params={{ slug: a.slug }}
                  className="block rounded px-3 py-2 text-sm font-semibold text-navy-foreground hover:bg-gold hover:text-gold-foreground"
                >
                  {a.name}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/contact" className="text-sm font-bold uppercase tracking-wide text-navy-foreground hover:text-gold">
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/contact"
            className="rounded-md bg-gold px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-gold-foreground transition hover:brightness-95"
          >
            Get Free Quote
          </Link>
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 rounded-md bg-background px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-navy transition hover:bg-surface"
          >
            <Phone className="h-4 w-4" /> {business.phone}
          </a>
        </div>

        <button
          className="rounded-md bg-navy/70 p-2 text-navy-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden">
          <div className="shell pb-4">
            <div className="rounded-lg bg-navy p-4 shadow-panel">
              <Link to="/" onClick={() => setOpen(false)} className="block py-2 font-bold uppercase text-navy-foreground">
                Home
              </Link>
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm font-semibold text-navy-foreground/85"
                >
                  {s.title}
                </Link>
              ))}
              <Link to="/gallery" onClick={() => setOpen(false)} className="block py-2 font-bold uppercase text-navy-foreground">
                Gallery
              </Link>
              <Link to="/contact" onClick={() => setOpen(false)} className="block py-2 font-bold uppercase text-navy-foreground">
                Contact
              </Link>
              <a
                href={business.phoneHref}
                className="mt-3 block rounded-md bg-gold px-4 py-3 text-center font-extrabold uppercase text-gold-foreground"
              >
                Call {business.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
