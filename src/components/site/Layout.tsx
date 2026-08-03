import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { StickyCall } from "./StickyCall";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background pb-14 md:pb-0">
      <Header />
      <main>{children}</main>
      <Footer />
      <StickyCall />
    </div>
  );
}

export function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="bg-navy-deep pb-14 pt-36 md:pt-44">
      <div className="shell text-center">
        <h1 className="display-lg text-navy-foreground">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-navy-foreground/80">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
