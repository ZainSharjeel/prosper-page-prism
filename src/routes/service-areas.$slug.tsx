import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Layout, PageHero } from "@/components/site/Layout";
import { QuoteForm } from "@/components/site/QuoteForm";
import { FinalCta, TrustBar } from "@/components/site/Sections";
import { areas, business, services } from "@/data/site";

export const Route = createFileRoute("/service-areas/$slug")({
  loader: ({ params }) => {
    const area = areas.find((a) => a.slug === params.slug);
    if (!area) throw notFound();
    return { area };
  },
  head: ({ params, loaderData }) => {
    const name = loaderData?.area.name ?? "Pittsburgh";
    const title = `Basement Waterproofing in ${name}, PA | Arbuckle Waterproofing`;
    const description = `Basement waterproofing, foundation repair, french drains, and sump pump installation in ${name}, PA. 36+ years experience, lifetime guarantee, no travel fees.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/service-areas/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/service-areas/${params.slug}` }],
    };
  },
  component: AreaPage,
});

function AreaPage() {
  const { area } = Route.useLoaderData();

  return (
    <Layout>
      <PageHero
        title={`Waterproofing in ${area.name}, PA`}
        subtitle={`Arbuckle Waterproofing protects ${area.name} homes from water intrusion, foundation damage, and moisture problems — backed by over 36 years of experience and a lifetime guarantee.`}
      />
      <TrustBar />
      <section className="section-pad">
        <div className="shell grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="eyebrow">Local Experts</p>
            <h2 className="display-lg mt-3">Trusted By {area.name} Homeowners</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Older {area.name} homes were not built for the groundwater pressure they deal with
                today. We find where water is actually entering, then design a system that keeps it
                out for good — not a coating that hides the problem for a season.
              </p>
              <p>
                {area.name} sits inside our regular service area, so there are never travel fees.
                We're available Monday through Saturday, 6:00am to 7:00pm, and 24/7 for emergency
                calls when water is already coming in.
              </p>
            </div>

            <h3 className="mt-10 text-xl font-extrabold uppercase text-navy">
              Services in {area.name}
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="rounded-lg bg-surface p-5 shadow-card transition hover:-translate-y-1"
                >
                  <h4 className="text-base font-extrabold uppercase leading-tight text-navy">
                    {s.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                </Link>
              ))}
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
