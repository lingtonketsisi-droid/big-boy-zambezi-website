export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  eyebrow: string;
  tagline: string;
  icon: string;
  body: string[];
  whatYouGet: string[];
  pricing?: { label: string; price: string }[];
  faqs: ServiceFAQ[];
  related: string[]; // other service slugs
}

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "bike-service",
    title: "Bike Service",
    eyebrow: "Workshop · Routine Service",
    tagline: "Keep your bike running right with proper minor and major services.",
    icon: "🔧",
    body: [
      "Big Boy Zambezi runs full minor and major services on Big Boy bikes — plus most other scooter and motorcycle brands. We follow the manufacturer's service schedule so your warranty stays valid.",
      "Every service ends with a multi-point safety check and a short test ride. You get a clear hand-over of what was done, what was found, and what may need attention next time.",
    ],
    whatYouGet: [
      "Engine oil + filter change",
      "Spark plug check / replace",
      "Air filter clean / replace",
      "Brake pad & disc check",
      "Chain or drive belt tension",
      "Lights, indicators &  electrics",
      "Multi-point safety check",
      "Final test ride",
    ],
    pricing: [
      { label: "Minor Service", price: "From R650" },
      { label: "Major Service", price: "From R1,250" },
      { label: "Pre-Delivery Inspection (PDI)", price: "R350" },
    ],
    faqs: [
      { q: "How long does a service take?", a: "Most minor services are same-day. Major services are usually 1 working day, depending on parts availability." },
      { q: "Do I need a booking?", a: "Yes — we work on appointment. WhatsApp us and we'll give you the next available slot." },
      { q: "Do you service other brands?", a: "Yes. Most scooter and motorcycle brands are welcome. Send us a photo and your bike's model on WhatsApp first so we can confirm." },
      { q: "Will a service void my warranty?", a: "No — we follow manufacturer schedules and use genuine or approved parts so your warranty stays intact." },
    ],
    related: ["repairs", "tuning", "exhaust-performance"],
  },
  {
    slug: "repairs",
    title: "Repairs",
    eyebrow: "Workshop · Diagnostics & Repair",
    tagline: "From rough idle to crash damage — proper diagnostics, honest quotes.",
    icon: "🛠️",
    body: [
      "Whether it's a no-start, a rough idle, a dragging brake, an electrical gremlin or panel damage from a knock — we diagnose it first, then quote it. No guesswork, no surprises.",
      "We handle engine, electrical, brakes, carburettor, fuel system, suspension and accident-damage work. If we can't fix it on-site, we'll tell you honestly.",
    ],
    whatYouGet: [
      "Proper diagnostic before any quote",
      "Engine, electrical & fuel system repairs",
      "Carburettor cleans & rebuilds",
      "Brake overhauls",
      "Accident & cosmetic repair",
      "Tested before hand-over",
    ],
    pricing: [
      { label: "Workshop Diagnostic", price: "From R350" },
      { label: "Carb Clean & Rebuild", price: "From R650" },
      { label: "Brake Overhaul (front + rear)", price: "From R850" },
    ],
    faqs: [
      { q: "Do you give a quote before working on the bike?", a: "Yes. We diagnose first, then come back to you with a written quote before any work starts." },
      { q: "Can you collect my bike?", a: "Local pick-up can be arranged on request — WhatsApp us with your location." },
      { q: "Do you do insurance work?", a: "Yes. We can supply quotes and invoices in the format your insurer needs." },
    ],
    related: ["bike-service", "restoration", "tuning"],
  },
  {
    slug: "restoration",
    title: "Bike Revival & Restoration",
    eyebrow: "Workshop · Restoration",
    tagline: "Bring a parked-up or tired bike back to life — properly.",
    icon: "♻️",
    body: [
      "Got a bike that's been standing? Inherited a tired runner? We do full revivals and proper restorations: strip-down, mechanical rebuild, refurb parts, paint, and roadworthy prep.",
      "We&apos;ll quote stage-by-stage so you can decide how far to take it — a clean runner you can ride daily, or a full show-floor finish.",
    ],
    whatYouGet: [
      "Full strip-down & inspection",
      "Mechanical rebuild as required",
      "Paint & cosmetic refurb",
      "Wiring tidy / loom replace",
      "Roadworthy preparation",
      "Stage-by-stage quoting",
    ],
    faqs: [
      { q: "How much does a restoration cost?", a: "It depends entirely on the bike's condition. We always start with a strip-down inspection and a written stage-by-stage quote." },
      { q: "Can I do it in phases?", a: "Yes — many customers do mechanical first, cosmetic later. We&apos;ll plan it with you." },
      { q: "Do you source hard-to-find parts?", a: "Where possible, yes. We&apos;ll be upfront if a part isn&apos;t available and suggest alternatives." },
    ],
    related: ["repairs", "tuning", "stickers"],
  },
  {
    slug: "tuning",
    title: "Bike Tuning",
    eyebrow: "Workshop · Tuning",
    tagline: "Carb & engine tuning for smoother power and better fuel economy.",
    icon: "⚙️",
    body: [
      "A poorly tuned bike feels lazy, drinks fuel and fouls plugs. We dial in carburettors, jetting and timing for the conditions you actually ride in — Highveld altitude, daily commuting, or weekend trail work.",
      "Tuning pairs naturally with exhaust changes, big-bore kits and gearing changes. Ask us to bundle it with your next service for the best value.",
    ],
    whatYouGet: [
      "Carb clean + rebuild if needed",
      "Jetting set for altitude & use",
      "Idle & mixture set on-bike",
      "Plug + intake check",
      "Test ride & re-check",
    ],
    pricing: [
      { label: "Carb Tune (single carb)", price: "From R450" },
      { label: "Carb Rebuild + Tune", price: "From R850" },
    ],
    faqs: [
      { q: "Will tuning make my bike faster?", a: "Tuning makes a bike run as well as the hardware allows. For more power you also need exhaust, intake or capacity work." },
      { q: "Do I need premium fuel after tuning?", a: "No — we tune for the fuel you actually use. Just tell us what you put in the tank." },
    ],
    related: ["bike-service", "exhaust-performance", "performance"],
  },
  {
    slug: "exhaust-performance",
    title: "Exhaust Tuning",
    eyebrow: "Workshop · Exhaust & Performance",
    tagline: "Free-flow systems fitted &amp; tuned the right way.",
    icon: "💨",
    body: [
      "A new exhaust without re-jetting and tuning usually runs worse than stock. We sell, fit and tune free-flow systems so the bike actually picks up — not just sounds louder.",
      "We&apos;ll match a system to your bike, your riding style and what's legal on the road. Honest advice up front.",
    ],
    whatYouGet: [
      "System fitment & gasket replace",
      "Jetting re-checked & adjusted",
      "Carb re-tune after fitment",
      "Sound + dyno-feel road test",
    ],
    faqs: [
      { q: "Will an exhaust upgrade pass roadworthy?", a: "If we fit a road-legal system and tune it properly, yes. We&apos;ll tell you up front if a system is track-only." },
      { q: "How loud will it be?", a: "We&apos;ll let you hear our demo systems before you commit. Loud is a choice, not a default." },
    ],
    related: ["tuning", "performance", "bike-service"],
  },
  {
    slug: "performance",
    title: "Performance Upgrades",
    eyebrow: "Workshop · Performance",
    tagline: "Big-bore kits, cams, intake, jetting & gearing — done right.",
    icon: "🚀",
    body: [
      "Want more out of your bike? We&apos;ll tell you where the real gains are — not just sell you a parts list. Big-bore kits, camshafts, intake, gearing and a proper tune all play a role.",
      "Every performance build ends on the road with a real-world test. If it&apos;s not better, we&apos;re not finished.",
    ],
    whatYouGet: [
      "Honest pre-build advice",
      "Big-bore / cam / intake fitment",
      "Gearing changes",
      "Full re-tune after build",
      "Road test & sign-off",
    ],
    faqs: [
      { q: "Will I need a re-jet after a big-bore kit?", a: "Yes — almost always. We include the tune in the build quote." },
      { q: "How long do upgrades take?", a: "Most builds are 2–5 working days, depending on parts." },
    ],
    related: ["tuning", "exhaust-performance", "bike-service"],
  },
  {
    slug: "delivery-branding",
    title: "Delivery Box Branding",
    eyebrow: "Workshop · Branding",
    tagline: "Branded delivery boxes that promote your business on every trip.",
    icon: "📦",
    body: [
      "Your delivery bike is a moving billboard. We brand delivery boxes for restaurants, takeaways and courier riders with professional vinyl wraps and decals — bright, durable and weather-resistant.",
      "Bring us your logo or we&apos;ll work from a design brief. We&apos;ll mock it up before we print anything.",
    ],
    whatYouGet: [
      "Custom box wraps & decals",
      "Logo, contact info, menu QR — your call",
      "UV &amp; weather-resistant vinyl",
      "Single bike or full fleet",
      "Fitted on-site",
    ],
    pricing: [
      { label: "Box Branding (single)", price: "From R450" },
      { label: "Fleet Branding (per bike)", price: "Quote on request" },
    ],
    faqs: [
      { q: "I don't have artwork — can you make it?", a: "Yes. Send us your logo, colours and what you want to say. We&apos;ll mock it up before printing." },
      { q: "How long does it last?", a: "Our vinyl is rated for several years of daily SA weather. We&apos;ll touch up or re-do panels at a discount if they fade." },
    ],
    related: ["stickers"],
  },
  {
    slug: "stickers",
    title: "Personalised Stickers",
    eyebrow: "Workshop · Custom Graphics",
    tagline: "Custom decals, name plates &amp; full graphic kits.",
    icon: "🎨",
    body: [
      "Make your bike yours. We design, print and fit custom stickers, name plates and full graphic kits for road bikes, scooters, pit bikes and quads.",
      "Mix and match — race-style numbers, your name on the tank, sponsor logos, or a clean factory look. We&apos;ll show you a mock-up first.",
    ],
    whatYouGet: [
      "Custom decals & name plates",
      "Race-number kits",
      "Tank, panel & fender graphics",
      "Mock-up before printing",
      "Fitted in-store",
    ],
    pricing: [
      { label: "Custom Decal (single)", price: "From R120" },
      { label: "Full Graphic Kit", price: "From R850" },
    ],
    faqs: [
      { q: "Will it damage my paint?", a: "No — our vinyl is removable and won&apos;t damage factory paint when fitted and removed properly." },
      { q: "Can you match an existing colour?", a: "Most colours yes — bring the bike in and we&apos;ll match it." },
    ],
    related: ["delivery-branding", "restoration"],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICE_DETAILS.find((s) => s.slug === slug);
}
