import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { FinalCta } from "@/components/site/Sections";
import { gallery } from "@/data/site";

const title = "Project Gallery | Arbuckle Waterproofing Pittsburgh";
const description =
  "Browse completed basement waterproofing, foundation repair, french drain, and sump pump projects across the Pittsburgh area.";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

function GalleryPage() {
  return (
    <Layout>
      <PageHero
        title="See Our Work"
        subtitle="Completed waterproofing, foundation repair, and moisture control projects showing the quality and lasting results homeowners trust throughout the Pittsburgh area."
      />
      <section className="section-pad">
        <div className="shell grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {gallery.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Arbuckle Waterproofing completed project ${i + 1}`}
              loading="lazy"
              className="h-48 w-full rounded-md object-cover shadow-card md:h-56"
            />
          ))}
        </div>
      </section>
      <FinalCta />
    </Layout>
  );
}
