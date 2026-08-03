import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import {
  Hero,
  TrustBar,
  About,
  Services,
  Process,
  GalleryStrip,
  Reviews,
  FinalCta,
} from "@/components/site/Sections";

const title = "Basement Waterproofing & Foundation Repair | Arbuckle Waterproofing Pittsburgh";
const description =
  "Arbuckle Waterproofing protects Pittsburgh-area homes with basement waterproofing, foundation repair, french drains, and sump pumps. 36+ years, lifetime guarantee, no travel fees.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          name: "Arbuckle Waterproofing",
          telephone: "+1-412-265-7444",
          email: "arbucklewaterproofing@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Carnegie",
            addressRegion: "PA",
            addressCountry: "US",
          },
          areaServed: "Pittsburgh, PA",
          slogan: "Waterproofing Done Right: Making Home Water Tight",
          openingHours: "Mo-Sa 06:00-19:00",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <Layout>
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Process />
      <GalleryStrip />
      <Reviews />
      <FinalCta />
    </Layout>
  );
}
