import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Check, Phone } from "lucide-react";
import { Layout, PageHero } from "@/components/site/Layout";
import { QuoteForm } from "@/components/site/QuoteForm";
import { FinalCta } from "@/components/site/Sections";
import { business, services } from "@/data/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    const name = loaderData?.service.title ?? "Services";
    const title = `${name} in Pittsburgh, PA | Arbuckle Waterproofing`;
    const description =
      loaderData?.service.short ??
      "Professional waterproofing and foundation services in the Pittsburgh area.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/services/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();

  return (
    <Layout>
      <PageHero title={service.title} subtitle={service.short} />
      <section className="section-pad">
        <div className="shell grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              className="h-72 w-full rounded-lg object-cover shadow-panel"
            />
            <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground">
              {service.body.map((p: string) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.bullets.map((b: string) => (
                <li key={b} className="flex items-start gap-3 rounded-md bg-surface p-4 shadow-card">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm font-semibold text-navy">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <h2 className="display-lg">Other Solutions</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {services
                  .filter((s) => s.slug !== service.slug)
                  .map((s) => (
                    <Link
                      key={s.slug}
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="rounded-md border-2 border-navy/15 px-4 py-3 text-sm font-extrabold uppercase text-navy transition hover:border-gold hover:text-gold"
                    >
                      {s.title}
                    </Link>
                  ))}
              </div>
            </div>

            <a
              href={business.phoneHref}
              className="mt-10 inline-flex items-center gap-2 rounded-md bg-navy px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-navy-foreground transition hover:bg-navy-deep"
            >
              <Phone className="h-4 w-4" /> Call {business.phone}
            </a>
          </div>
          <div>
            <QuoteForm compact />
          </div>
        </div>
      </section>
      <FinalCta />
    </Layout>
  );
}
