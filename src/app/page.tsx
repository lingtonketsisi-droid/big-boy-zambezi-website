import Link from "next/link";
import styles from "./page.module.css";
import CategoryCard from "@/components/CategoryCard";
import ServiceCard from "@/components/ServiceCard";
import ProductCard from "@/components/ProductCard";
import ImageWithFallback from "@/components/ImageWithFallback";
import CTASection from "@/components/CTASection";
import PDIBadge from "@/components/PDIBadge";
import { products, categoryStats } from "@/data/products";
import { waLink } from "@/data/contact";
import { CATEGORY_IMAGES, PRODUCT_IMAGES, SITE_IMAGES } from "@/data/images";

const CATEGORIES = [
  {
    title: "Commuters",
    description: "Daily commuter motorcycles built for South African roads.",
    imageSrc: CATEGORY_IMAGES.commuters,
    href: "/bikes/motorcycles",
    ctaLabel: "Browse Commuters",
    statsKey: "motorcycles" as const,
  },
  {
    title: "Scooters",
    description: "Affordable, fuel-friendly scooters from 125cc upwards.",
    imageSrc: CATEGORY_IMAGES.scooters,
    href: "/bikes/scooters",
    ctaLabel: "Browse Scooters",
    statsKey: "scooters" as const,
  },
  {
    title: "Commercial / Delivery Bikes",
    description: "Cargo and delivery-ready bikes for restaurants and couriers.",
    imageSrc: CATEGORY_IMAGES.commercial,
    href: "/bikes/commercial",
    ctaLabel: "View Delivery Bikes",
    statsKey: "commercial" as const,
  },
  {
    title: "On-Off Road",
    description: "Pit bikes and quads for trail, farm and off-road use.",
    imageSrc: CATEGORY_IMAGES["on-off-road"],
    href: "/bikes/pit-bikes",
    ctaLabel: "View Off-Road",
    statsKey: "pit-bikes" as const,
  },
  {
    title: "Parts & Accessories",
    description: "Genuine and aftermarket spares, exhausts, tyres and gear.",
    imageSrc: CATEGORY_IMAGES.parts,
    href: "/parts",
    ctaLabel: "Browse Parts",
    statsKey: null,
  },
  {
    title: "Workshop Services",
    description: "Servicing, repairs, tuning and full restorations on-site.",
    imageSrc: CATEGORY_IMAGES.workshop,
    href: "/services",
    ctaLabel: "View Services",
    statsKey: null,
  },
];

const SERVICES = [
  { title: "Bike Service", icon: "🔧", body: "Full and minor services on Big Boy and most scooter / motorcycle brands." },
  { title: "Repairs", icon: "🛠️", body: "Engine, electrical, brakes, carb cleans, accident repair and full diagnostics." },
  { title: "Revive / Restoration", icon: "♻️", body: "Strip-down, paint, refurb and full mechanical rebuilds. Bring tired bikes back to life." },
  { title: "Tuning", icon: "⚙️", body: "Carb and engine tuning for smoother power and better fuel economy." },
  { title: "Exhaust & Performance", icon: "💨", body: "Free-flow exhausts, big-bore kits, jetting and gearing — done right." },
  { title: "Delivery Box Branding", icon: "📦", body: "Branded delivery boxes that promote your business on every trip." },
  { title: "Personalised Stickers", icon: "🎨", body: "Custom decals, name plates and full graphic kits for your bike." },
  { title: "Parts Sales", icon: "🧰", body: "Service and performance parts in store — or sourced on request." },
];

const FEATURED_PARTS = [
  { title: "Service Kits", body: "Oil, filter, plugs and gaskets bundled for routine services.", icon: "🛢️" },
  { title: "Exhaust Systems", body: "Stock replacements and free-flow systems for most Big Boy bikes.", icon: "💨" },
  { title: "Chains & Sprockets", body: "Standard and heavy-duty kits with lube and replacement bolts.", icon: "🔗" },
  { title: "Tyres & Tubes", body: "Commuter and off-road tyres fitted and balanced in store.", icon: "🛞" },
];

export default function Home() {
  const featuredBikes = [
    products.find((p) => p.slug === "big-boy-velocity-150"),
    products.find((p) => p.slug === "big-boy-tsr-250"),
    products.find((p) => p.slug === "big-boy-mustang-250"),
  ].filter(Boolean) as NonNullable<typeof products[number]>[];

  const newArrivals = products.filter((p) => p.badges.includes("New Arrival")).slice(0, 4);
  const fleetReady = products.filter((p) => p.badges.includes("Fleet Ready")).slice(0, 4);

  const homeWhatsapp = waLink("Hi Big Boy Zambezi, I'd like more info please.");
  const servicesWhatsapp = waLink("Hi Big Boy Zambezi, I'd like to book a service.");
  const quoteWhatsapp = (item: string) => waLink(`Hi Big Boy Zambezi, I'd like a quote on the ${item}.`);

  return (
    <>
      <section className={styles.hero}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.heroVideo}
          poster={SITE_IMAGES.heroPoster}
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-motorcyclist-riding-on-a-road-at-sunset-26462-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroEyebrow}>Pretoria · Sinoville</span>
          <h1 className={styles.heroTitle}>BIG BOY <span>ZAMBEZI</span></h1>
          <p className={styles.heroSubtitle}>
            Motorcycle Sales, Repairs, Servicing, Parts &amp; Delivery Bike Solutions.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/services" className={styles.heroBtnPrimary}>View Services</Link>
            <a
              href={homeWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroBtnWhatsapp}
            >
              WhatsApp Us
            </a>
          </div>
          <div className={styles.heroPdi}>
            <PDIBadge />
          </div>
        </div>
        <div className={styles.scrollArrow} aria-hidden="true">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </section>

      <a
        href={homeWhatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappFloating}
        aria-label="Contact us on WhatsApp"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.565.933 3.176 1.403 4.805 1.405 5.352 0 9.706-4.354 9.709-9.707 0-2.593-1.009-5.031-2.84-6.862-1.831-1.83-4.27-2.839-6.863-2.839-5.353 0-9.707 4.354-9.71 9.708-.001 1.742.469 3.441 1.354 4.931l-1.011 3.693 3.786-.993zm11.722-6.709c-.302-.15-1.788-.882-2.064-.983-.277-.1-.478-.15-.679.15s-.779.982-.955 1.183-.352.226-.654.076c-.302-.15-1.274-.469-2.426-1.496-.897-.8-1.502-1.788-1.678-2.088-.176-.302-.019-.465.131-.615.136-.135.302-.352.453-.528.151-.176.201-.302.302-.503s.05-.377-.025-.528c-.075-.15-.679-1.635-.93-2.24-.244-.594-.491-.513-.679-.522-.176-.008-.377-.01-.578-.01s-.528.075-.804.377c-.276.302-1.056 1.031-1.056 2.515s1.081 2.917 1.232 3.118c.15.201 2.128 3.249 5.156 4.555.72.311 1.282.497 1.721.637.722.23 1.379.197 1.898.12.578-.085 1.788-.731 2.039-1.435.252-.704.252-1.308.176-1.435-.075-.126-.276-.201-.578-.351z"/></svg>
      </a>

      <section className={styles.trustStrip}>
        <div className="container">
          <ul className={styles.trustList}>
            <li>Bike Servicing</li>
            <li>Repairs</li>
            <li>Parts Sales</li>
            <li>Delivery Box Branding</li>
            <li>Performance Tuning</li>
          </ul>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className="container">
          <span className={styles.sectionEyebrow}>What We Sell &amp; Service</span>
          <h2 className={styles.sectionTitle}>Browse The <span>Range</span></h2>
          <p className={styles.sectionLead}>
            Big Boy Zambezi brings trusted Big Boy motorcycle support, servicing, parts, and delivery-bike solutions to the Zambezi area.
          </p>
          <div className={styles.categoriesGrid}>
            {CATEGORIES.map((cat) => {
              const stats = cat.statsKey ? categoryStats(cat.statsKey) : null;
              return (
                <CategoryCard
                  key={cat.title}
                  title={cat.title}
                  description={cat.description}
                  imageSrc={cat.imageSrc}
                  href={cat.href}
                  ctaLabel={cat.ctaLabel}
                  count={stats?.count}
                  fromPrice={stats?.fromPrice ?? null}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.sectionEyebrow}>Latest Arrivals</span>
              <h2 className={styles.sectionTitle}>Fresh Off <span>The Floor</span></h2>
            </div>
            <Link href="/bikes" className={styles.btnGhostDark}>View All Bikes</Link>
          </div>
          <div className="grid-cards">
            {newArrivals.map((bike) => (
              <ProductCard
                key={bike.id}
                name={bike.name}
                category={bike.category}
                price={bike.price}
                imageSrc={bike.image}
                slug={bike.slug}
                badges={bike.badges}
                inStock={bike.inStock}
                href={bike.slug === "big-boy-mustang-250" ? "/bikes/mustang-250" : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.mustangBanner}>
        <div className="container">
          <div className={styles.mustangInner}>
            <div className={styles.mustangText}>
              <span className={styles.mustangEyebrow}>Cruiser Styling · 250cc</span>
              <h2 className={styles.mustangTitle}>BIG BOY <span>MUSTANG 250</span></h2>
              <p>
                Chrome-covered midnight black. 250cc 4-stroke single. 110 km/h top speed. Backed by a 3 Year / 20,000km Factory SAM Warranty.
              </p>
              <p className={styles.mustangPrice}>R36,999.00</p>
              <div className={styles.mustangActions}>
                <Link href="/bikes/mustang-250" className={styles.mustangBtnPrimary}>View Mustang 250</Link>
                <a
                  href={quoteWhatsapp("Mustang 250")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mustangBtnGhost}
                >
                  Request a Quote
                </a>
              </div>
            </div>
            <div className={styles.mustangImage}>
              <ImageWithFallback
                src={PRODUCT_IMAGES["big-boy-mustang-250"]}
                alt="Big Boy Mustang 250"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.pdiSection}>
        <div className={`container ${styles.pdiInner}`}>
          <div className={styles.pdiCardWrap}>
            <PDIBadge variant="card" href="/services" />
          </div>
          <div className={styles.pdiCopy}>
            <span className={styles.sectionEyebrow}>Workshop-Backed Confidence</span>
            <h2 className={styles.sectionTitle}>Every Bike <span>Inspected</span></h2>
            <p>
              Every new bike leaving Big Boy Zambezi gets a Pre-Delivery Inspection by our workshop team. Brakes, fluids, torque, electrics, drive train, lights and a final road-readiness check — for a flat <strong>R350</strong>.
            </p>
            <ul className={styles.pdiList}>
              <li>Brakes torqued &amp; bled</li>
              <li>Fluids, filters &amp; oils checked</li>
              <li>Electrics, lights &amp; controls verified</li>
              <li>Chain / belt tension &amp; final tune</li>
              <li>Road-ready hand-over checklist</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionGrey}`}>
        <div className="container">
          <span className={styles.sectionEyebrow}>Workshop &amp; Custom Work</span>
          <h2 className={styles.sectionTitle}>Services <span>On-Site</span></h2>
          <p className={styles.sectionLead}>
            More than a showroom — a full workshop for servicing, repairs, restoration, tuning, branding and custom work.
          </p>
          <div className={styles.servicesGrid}>
            {SERVICES.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
          <div className={styles.sectionFooter}>
            <Link href="/services" className={styles.btnSolidRed}>View All Services</Link>
            <a
              href={servicesWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnSolidGreen}
            >
              Book on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.sectionEyebrow}>In The Showroom</span>
              <h2 className={styles.sectionTitle}>Featured <span>Bikes</span></h2>
            </div>
            <Link href="/bikes" className={styles.btnGhostDark}>View All Bikes</Link>
          </div>
          <div className="grid-cards">
            {featuredBikes.map((bike) => (
              <ProductCard
                key={bike.id}
                name={bike.name}
                category={bike.category}
                price={bike.price}
                imageSrc={bike.image}
                slug={bike.slug}
                badges={bike.badges}
                inStock={bike.inStock}
                isBestSeller={bike.slug === "big-boy-velocity-150"}
                href={bike.slug === "big-boy-mustang-250" ? "/bikes/mustang-250" : undefined}
              />
            ))}
          </div>
          <p className={styles.helperLine}>
            Prices exclude on-the-road costs &amp; PDI (R350). Ask us on WhatsApp for availability and current promos.
          </p>
        </div>
      </section>

      {fleetReady.length > 0 && (
        <section className={`${styles.section} ${styles.sectionGrey}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <div>
                <span className={styles.sectionEyebrow}>Built For Business</span>
                <h2 className={styles.sectionTitle}>Fleet <span>Ready</span></h2>
              </div>
              <Link href="/delivery-solutions" className={styles.btnGhostDark}>Delivery Solutions</Link>
            </div>
            <p className={styles.sectionLead}>
              Workhorse bikes already kitted for delivery operations — durable engines, easy serviceability and parts backup.
            </p>
            <div className="grid-cards">
              {fleetReady.map((bike) => (
                <ProductCard
                  key={bike.id}
                  name={bike.name}
                  category={bike.category}
                  price={bike.price}
                  imageSrc={bike.image}
                  slug={bike.slug}
                  badges={bike.badges}
                  inStock={bike.inStock}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={styles.deliveryBanner}>
        <div className="container">
          <div className={styles.deliveryInner}>
            <div className={styles.deliveryText}>
              <span className={styles.deliveryEyebrow}>Run A Delivery Business?</span>
              <h2 className={styles.deliveryTitle}>Delivery <span>Bike Solutions</span></h2>
              <p>
                We supply, brand and maintain delivery bikes for restaurants, takeaways and courier operators. Reliable bikes, branded boxes, parts backup and workshop support — one phone number.
              </p>
              <div className={styles.deliveryActions}>
                <Link href="/delivery-solutions" className={styles.btnSolidWhite}>Delivery Solutions</Link>
                <a
                  href={waLink("Hi Big Boy Zambezi, I run a delivery business and would like a quote.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnSolidGreen}
                >
                  Request a Fleet Quote
                </a>
              </div>
            </div>
            <ul className={styles.deliveryPoints}>
              <li><strong>Delivery bikes</strong> — Velocity Cargo, Commercial 200cc and more.</li>
              <li><strong>Branded boxes</strong> — your logo on every trip.</li>
              <li><strong>Service plans</strong> — keep the fleet on the road.</li>
              <li><strong>Parts backup</strong> — fast-moving spares in stock.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className="container">
          <span className={styles.sectionEyebrow}>Counter &amp; Workshop</span>
          <h2 className={styles.sectionTitle}>Featured <span>Parts</span></h2>
          <p className={styles.sectionLead}>
            Fast-moving service and performance items in store. Can&apos;t see what you need? Send us a photo on WhatsApp and we&apos;ll source it.
          </p>
          <div className={styles.partsGrid}>
            {FEATURED_PARTS.map((part) => (
              <article key={part.title} className={styles.partCard}>
                <span className={styles.partIcon} aria-hidden="true">{part.icon}</span>
                <h3 className={styles.partTitle}>{part.title}</h3>
                <p className={styles.partBody}>{part.body}</p>
                <a
                  href={quoteWhatsapp(part.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.partCta}
                >
                  Ask for Availability →
                </a>
              </article>
            ))}
          </div>
          <div className={styles.sectionFooter}>
            <Link href="/parts" className={styles.btnSolidRed}>Browse All Parts</Link>
          </div>
        </div>
      </section>

      <section className={styles.credibility}>
        <div className="container">
          <span className={styles.credEyebrow}>Why Big Boy Zambezi</span>
          <h2 className={styles.credTitle}>Trusted <span>Support, On Your Doorstep</span></h2>
          <div className={styles.credGrid}>
            <div className={styles.credCard}>
              <span className={styles.credNumber}>01</span>
              <h3>Big Boy Specialists</h3>
              <p>We know these bikes inside-out — from the D-Lite scooter to the Mustang 250 cruiser.</p>
            </div>
            <div className={styles.credCard}>
              <span className={styles.credNumber}>02</span>
              <h3>Reliable Workshop</h3>
              <p>Proper diagnostics, honest quotes and bikes that leave running right.</p>
            </div>
            <div className={styles.credCard}>
              <span className={styles.credNumber}>03</span>
              <h3>Delivery Bike Solutions</h3>
              <p>Bike supply, branded boxes, maintenance and parts — all from one place.</p>
            </div>
            <div className={styles.credCard}>
              <span className={styles.credNumber}>04</span>
              <h3>Affordable Transport</h3>
              <p>Commuter bikes and scooters from R14,999 — finance-friendly options on request.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="NEED HELP WITH YOUR BIKE?"
        subtitle="Sales, service, repairs, parts or a custom job — message us on WhatsApp and we'll come back to you fast."
        whatsappMessage="Hi Big Boy Zambezi, I need help with my bike."
        primaryHref="/contact"
        primaryLabel="Contact Big Boy Zambezi"
      />
    </>
  );
}
