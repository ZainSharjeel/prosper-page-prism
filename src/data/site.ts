export const business = {
  name: "Arbuckle Waterproofing",
  tagline: "Waterproofing Done Right: Making Home Water Tight",
  phone: "(412) 265-7444",
  phoneHref: "tel:+14122657444",
  email: "arbucklewaterproofing@gmail.com",
  city: "Carnegie",
  state: "PA",
  region: "Pittsburgh",
  hours: "Monday to Saturday · 6:00am – 7:00pm",
  years: "36+",
  intro:
    "Arbuckle Waterproofing specializes in basement waterproofing, foundation repair, interior french drains, and sump pump installation. Built on over 36 years of hands-on experience, we protect Pittsburgh-area homes from moisture intrusion, foundation issues, and water damage — every job backed by fair pricing and a lifetime guarantee.",
};

export const badges = [
  "100% local",
  "family business",
  "36+ years experience",
  "insured",
  "lifetime guarantee",
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  body: string[];
  bullets: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "basement-waterproofing",
    title: "Basement Waterproofing",
    short:
      "Keep your basement dry and protected with customized waterproofing systems designed to prevent leaks, flooding, and long-term moisture damage.",
    body: [
      "A wet basement is rarely a one-off event — it is a drainage problem that gets worse every season. We design a waterproofing system around your home's specific water path, not a one-size-fits-all kit.",
      "Every system we install is backed by a lifetime guarantee, and we never charge travel fees anywhere in our Pittsburgh service area.",
    ],
    bullets: [
      "Interior and exterior waterproofing systems",
      "Wall crack sealing and vapor barriers",
      "Drainage tied into a dependable discharge point",
      "Lifetime guarantee on installed systems",
    ],
    image:
      "https://img77.uenicdn.com/image/upload/v1699892277/business/e91ec2a6f0db4008874411c445d2659f.jpg",
  },
  {
    slug: "foundation-repair",
    title: "Foundation Repair",
    short:
      "Address foundation cracks, settlement issues, and structural concerns before they become costly problems that affect your home's stability.",
    body: [
      "Cracks, bowing walls, and settlement all point to pressure your foundation was never built to hold. We diagnose the cause first, then repair the structure so the problem does not return.",
      "With over 36 years in Pittsburgh-area soil conditions, we know how these homes move — and how to stabilize them properly.",
    ],
    bullets: [
      "Foundation crack repair and sealing",
      "Bowing and leaning wall stabilization",
      "Settlement and structural assessment",
      "Honest pricing with no surprise add-ons",
    ],
    image:
      "https://img77.uenicdn.com/image/upload/v1699892297/business/5e58b65048eb4e00917acd43c36ff409.jpg",
  },
  {
    slug: "interior-french-drains",
    title: "Interior French Drains",
    short:
      "Channel groundwater away from your basement floor and walls with a properly pitched interior drainage system built to last.",
    body: [
      "An interior french drain captures water at the footer before it reaches your floor, then carries it to a sump basin and out of the house. Done right, it is the most reliable long-term fix for a chronically wet basement.",
      "We install to proper pitch, use full-size drainage stone, and finish the concrete cleanly so your basement looks better than when we started.",
    ],
    bullets: [
      "Perimeter drain tile at the footer",
      "Proper pitch and clean concrete finish",
      "Tied directly into sump discharge",
      "Handles both seepage and hydrostatic pressure",
    ],
    image:
      "https://img77.uenicdn.com/image/upload/v1699892316/business/431c0aeba6e647a1bd63384bb0709aac.jpg",
  },
  {
    slug: "sump-pump-installation",
    title: "Sump Pump Installation",
    short:
      "Stay prepared for heavy rainfall with dependable sump pump systems that help remove water quickly and protect your property.",
    body: [
      "A sump pump is the last line of defense during a heavy Pittsburgh downpour. We install dependable pumps sized to your home, with sealed basins and clean discharge routing.",
      "We also service and replace failing pumps — and we are available 24/7 for emergency calls when water is already coming in.",
    ],
    bullets: [
      "Correctly sized primary pumps",
      "Sealed basins and check valves",
      "Battery backup options available",
      "24/7 emergency availability",
    ],
    image:
      "https://img77.uenicdn.com/image/upload/v1699892351/business/acd9e697b0ae4cd18da8ba04b75575a6.jpg",
  },
];

export const areas = [
  { slug: "carnegie-pa", name: "Carnegie" },
  { slug: "pittsburgh-pa", name: "Pittsburgh" },
  { slug: "mount-lebanon-pa", name: "Mount Lebanon" },
  { slug: "bethel-park-pa", name: "Bethel Park" },
  { slug: "robinson-township-pa", name: "Robinson Township" },
  { slug: "bridgeville-pa", name: "Bridgeville" },
  { slug: "moon-township-pa", name: "Moon Township" },
  { slug: "upper-st-clair-pa", name: "Upper St. Clair" },
  { slug: "sewickley-pa", name: "Sewickley" },
  { slug: "monroeville-pa", name: "Monroeville" },
];

export const process = [
  {
    step: "01",
    title: "Call or request a quote",
    text: "Tell us what you're seeing — water on the floor, a crack, a musty smell. We listen first.",
  },
  {
    step: "02",
    title: "Free on-site inspection",
    text: "We come out, trace where the water is actually getting in, and explain it in plain language.",
  },
  {
    step: "03",
    title: "Honest, fixed estimate",
    text: "Fair pricing, written up clearly. No travel fees, no pressure, no surprise add-ons.",
  },
  {
    step: "04",
    title: "Installed and guaranteed",
    text: "Our crew does the work clean, then backs it with a lifetime guarantee.",
  },
];

export const gallery = [
  "https://img77.uenicdn.com/image/upload/v1780940211/business/0639fc18ebdc473ebd7dd29188902378.jpg",
  "https://img77.uenicdn.com/image/upload/v1780940211/business/0f314e988b3c47f3900e468bebf5cd11.jpg",
  "https://img77.uenicdn.com/image/upload/v1780940211/business/23d430887c174024900715eea5a0e47c.jpg",
  "https://img77.uenicdn.com/image/upload/v1780940211/business/78896fd8ad7f4d319cb37f19fc863800.jpg",
  "https://img77.uenicdn.com/image/upload/v1780940229/business/9f54355644f64a1ca1168fea777e549e.jpg",
  "https://img77.uenicdn.com/image/upload/v1780940234/business/5314763b3f2149788ec76d5410ab8166.jpg",
  "https://img77.uenicdn.com/image/upload/v1699385372/business/5f168484-9687-4ec1-bf5d-9b6263591dbd/IMG-1150jpeg.jpg",
  "https://img77.uenicdn.com/image/upload/v1699385376/business/5f168484-9687-4ec1-bf5d-9b6263591dbd/IMG-0642jpeg.jpg",
  "https://img77.uenicdn.com/image/upload/v1699892369/business/7494c66a40c841998f8c1a1b3b7e7452.jpg",
  "https://img77.uenicdn.com/image/upload/v1699892435/business/377d82825cfe464380eb7d7de15dcd6f.jpg",
  "https://img77.uenicdn.com/image/upload/v1699892483/business/f5523366ac774806aa0463407652f880.jpg",
  "https://img77.uenicdn.com/image/upload/v1699894080/business/b96684e71eda4b2998885b42cc377656.jpg",
];

// NOTE: swap these for the real Google reviews from the client's GBP listing.
export const reviews = [
  {
    name: "Dave M.",
    text: "Our basement took on water every spring. Arbuckle put in a french drain and sump system and we have been bone dry through two heavy seasons. Straight answers and fair price.",
  },
  {
    name: "Karen S.",
    text: "They found the actual source of the leak after two other companies just wanted to sell us a coating. Honest people, clean work, and they cleaned up completely.",
  },
  {
    name: "Tom R.",
    text: "Foundation crack was getting worse. They explained exactly what was happening and fixed it properly. No pressure, no upsell, and the lifetime guarantee sealed it.",
  },
  {
    name: "Michelle B.",
    text: "Called on a Saturday morning with water coming in. They walked me through what to do and were out same week. Very responsive and respectful of the house.",
  },
  {
    name: "Greg A.",
    text: "36 years of experience shows. The crew knew these old Pittsburgh basements inside and out. Quote matched the final bill to the dollar.",
  },
  {
    name: "Lisa P.",
    text: "Sump pump replacement done in a morning. Fair pricing, no travel fee, and they tested everything before leaving. Would absolutely recommend.",
  },
];
