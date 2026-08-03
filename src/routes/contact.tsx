import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { Layout, PageHero } from "@/components/site/Layout";
import { QuoteForm } from "@/components/site/QuoteForm";
import { business } from "@/data/site";

const title = "Contact Arbuckle Waterproofing | Free Estimate in Pittsburgh";
const description =
  "Call (412) 265-7444 or request a free estimate. Wet basement, foundation concerns, or moisture problems — Arbuckle Waterproofing serves the Pittsburgh area 24/7 for emergencies.";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const hours = [
  ["Sunday", "Closed"],
  ["Monday", "6:00 AM – 7:00 PM"],
  ["Tuesday", "6:00 AM – 7:00 PM"],
  ["Wednesday", "6:00 AM – 7:00 PM"],
  ["Thursday", "6:00 AM – 7:00 PM"],
  ["Friday", "6:00 AM – 7:00 PM"],
  ["Saturday", "6:00 AM – 7:00 PM"],
];

function ContactPage() {
  return (
    <Layout>
      <PageHero
        title="Let's Find The Right Solution For Your Home"
        subtitle="Whether you have a wet basement, foundation concerns, or moisture problems, our experienced team is ready to help. Reach out today to discuss your project and schedule a consultation."
      />
      <section className="section-pad">
        <div className="shell grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Get In Touch</p>
            <h2 className="display-lg mt-3">We Are Available 24/7 For Emergency Calls</h2>
            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href={business.phoneHref}
                  className="flex items-center gap-3 text-lg font-extrabold text-navy hover:text-gold"
                >
                  <Phone className="h-5 w-5 text-gold" /> {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-3 font-semibold text-navy hover:text-gold"
                >
                  <Mail className="h-5 w-5 text-gold" /> {business.email}
                </a>
              </li>
              <li className="flex items-center gap-3 font-semibold text-navy">
                <MapPin className="h-5 w-5 text-gold" /> {business.city}, {business.state} — serving a
                35–40 mile radius with no travel fees
              </li>
            </ul>

            <div className="mt-10 rounded-lg bg-surface p-6 shadow-card">
              <h3 className="flex items-center gap-2 text-lg font-extrabold uppercase text-navy">
                <Clock className="h-5 w-5 text-gold" /> Business Hours
              </h3>
              <dl className="mt-4 divide-y divide-border">
                {hours.map(([day, time]) => (
                  <div key={day} className="flex justify-between py-2 text-sm">
                    <dt className="font-bold text-navy">{day}</dt>
                    <dd className="text-muted-foreground">{time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <QuoteForm compact />
        </div>
      </section>
    </Layout>
  );
}
