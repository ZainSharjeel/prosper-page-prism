import { Link } from "@tanstack/react-router";
import { ArrowRight, Star, ShieldCheck, BadgeCheck, Wallet, Phone } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import { QuoteForm } from "./QuoteForm";
import { business, badges, services, process, gallery, reviews } from "@/data/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep">
      <img
        src={heroImg}
        alt="Brick Pittsburgh home with exterior foundation waterproofing membrane installed"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/60 to-navy-deep/40" />
      <div className="shell relative grid items-center gap-10 pb-16 pt-36 md:pt-40 lg:grid-cols-2 lg:pb-24">
        <div>
          <h1 className="display-xl text-navy-foreground">
            Basement Waterproofing &amp; Foundation Repair in Pittsburgh
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/85 md:text-lg">
            {business.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={business.phoneHref}
              className="flex items-center gap-2 rounded-md bg-gold px-6 py-4 text-sm font-extrabold uppercase tracking-wide text-gold-foreground transition hover:brightness-95"
            >
              <Phone className="h-4 w-4" /> Call {business.phone}
            </a>
            <Link
              to="/gallery"
              className="rounded-md border-2 border-navy-foreground/40 px-6 py-4 text-sm font-extrabold uppercase tracking-wide text-navy-foreground transition hover:border-gold hover:text-gold"
            >
              See Our Work
            </Link>
          </div>
        </div>
        <div className="lg:pl-6">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}

export function TrustBar() {
  return (
    <div className="bg-gold">
      <div className="shell flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5">
        {badges.map((b) => (
          <span
            key={b}
            className="text-sm font-extrabold uppercase tracking-widest text-gold-foreground"
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}

export function About() {
  return (
    <section className="section-pad bg-background">
      <div className="shell grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">About Us</p>
          <h2 className="display-lg mt-3">Your Neighborhood Specialists</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              <strong className="text-foreground">{business.name}</strong> helps homeowners
              throughout <strong className="text-foreground">Carnegie, Pittsburgh</strong>, and
              surrounding communities defend their properties against water intrusion and
              moisture-related damage.
            </p>
            <p>
              Built on professionalism, integrity, and dependable workmanship, we have helped
              generations of homeowners safeguard their properties. With over{" "}
              <strong className="text-foreground">36 years of experience</strong>, we deliver
              practical solutions tailored to your home's needs — from basement waterproofing and
              foundation repair to interior french drains and sump pump installation.
            </p>
            <p>
              We proudly serve homeowners within a 35–40 mile radius of our Pittsburgh location, and
              we never charge travel fees. Every job is backed by a lifetime guarantee.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { icon: BadgeCheck, label: "36+ Years Experience" },
              { icon: Wallet, label: "Fair & Honest Pricing" },
              { icon: ShieldCheck, label: "Lifetime Guarantee" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="rounded-lg bg-surface p-4 shadow-card">
                <Icon className="h-7 w-7 text-navy" />
                <p className="mt-3 text-sm font-extrabold uppercase leading-tight text-navy">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <img
          src={aboutImg}
          alt="Dry finished basement with newly installed interior french drain and sump pump"
          width={1200}
          height={912}
          loading="lazy"
          className="w-full rounded-lg object-cover shadow-panel"
        />
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="section-pad bg-navy">
      <div className="shell">
        <div className="text-center">
          <p className="eyebrow">What We Are Best At</p>
          <h2 className="display-lg mt-3 text-navy-foreground">Our Services</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group flex flex-col overflow-hidden rounded-lg bg-background shadow-card transition hover:-translate-y-1"
            >
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                className="h-44 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-extrabold uppercase leading-tight text-navy">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.short}
                </p>
                <span className="mt-5 flex items-center gap-2 text-sm font-extrabold uppercase text-navy group-hover:text-gold">
                  Explore More <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="section-pad bg-surface">
      <div className="shell">
        <div className="text-center">
          <p className="eyebrow">How It Works</p>
          <h2 className="display-lg mt-3">Our Process</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Our process is simple and only contains a few straightforward steps.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p) => (
            <div key={p.step} className="rounded-lg bg-background p-6 shadow-card">
              <span className="text-4xl font-extrabold text-gold">{p.step}</span>
              <h3 className="mt-3 text-base font-extrabold uppercase leading-tight text-navy">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GalleryStrip() {
  return (
    <section className="section-pad bg-background">
      <div className="shell">
        <div className="text-center">
          <p className="eyebrow">See Why Our Customers Love Us</p>
          <h2 className="display-lg mt-3">See Our Work</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
          {gallery.slice(0, 10).map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Completed waterproofing project ${i + 1}`}
              loading="lazy"
              className="h-40 w-full rounded-md object-cover shadow-card md:h-48"
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/gallery"
            className="inline-block rounded-md bg-navy px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-navy-foreground transition hover:bg-navy-deep"
          >
            See All Photos
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section className="section-pad bg-navy-deep">
      <div className="shell">
        <div className="text-center">
          <p className="eyebrow">Discover What Our Customers Have To Say</p>
          <h2 className="display-lg mt-3 text-navy-foreground">Reviews</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="rounded-lg bg-background p-6 shadow-card">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-4 text-sm font-extrabold uppercase text-navy">
                {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-block rounded-md bg-gold px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-gold-foreground transition hover:brightness-95"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="bg-gold">
      <div className="shell flex flex-col items-center gap-6 py-14 text-center">
        <h2 className="display-lg text-gold-foreground">Ready To Protect Your Home?</h2>
        <p className="max-w-2xl text-base font-semibold text-gold-foreground/85">
          Whether you're dealing with a wet basement or planning preventative waterproofing, our
          team is here to help with trusted solutions and honest service. We're available 24/7 for
          emergency calls.
        </p>
        <a
          href={business.phoneHref}
          className="flex items-center gap-2 rounded-md bg-navy px-8 py-4 text-base font-extrabold uppercase tracking-wide text-navy-foreground transition hover:bg-navy-deep"
        >
          <Phone className="h-5 w-5" /> Call {business.phone}
        </a>
      </div>
    </section>
  );
}
