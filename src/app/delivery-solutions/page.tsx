import { Metadata } from "next";
import Link from "next/link";
import ImageWithFallback from "@/components/ImageWithFallback";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { products } from "@/data/products";
import { PHONE_DISPLAY, PHONE_TEL, waLink } from "@/data/contact";
import { CATEGORY_IMAGES, SITE_IMAGES } from "@/data/images";
import styles from "./delivery.module.css";

export const metadata: Metadata = {
  title: "Delivery Bike Solutions | Big Boy Zambezi",
  description:
    "Delivery bike supply, branded boxes, service plans and parts backup for restaurants, takeaways and courier operators in Pretoria.",
};

const PILLARS = [
  {
    title: "Delivery Bike Supply",
    icon: "🛵",
    body: "Velocity Cargo, Commercial 200cc and other proven Big Boy delivery models — in stock or sourced for fleet orders.",
  },
  {
    title: "Branded Delivery Boxes",
    icon: "📦",
    body: "Custom branded boxes that promote your business on every trip. Vinyl wraps, full colour print, or simple decals.",
  },
  {
    title: "Service Plans",
    icon: "🔧",
    body: "Scheduled servicing for delivery fleets. Keep downtime low and riders earning on the road.",
  },
  {
    title: "Parts Backup",
    icon: "🧰",
    body: "Fast-moving service items in stock — tyres, brakes, chains, plugs and oil — for quick turnaround.",
  },
  {
    title: "Custom Stickers & Decals",
    icon: "🎨",
    body: "Rider names, number plates, full graphic kits and identity work for your fleet.",
  },
  {
    title: "Tuning & Reliability Tweaks",
    icon: "⚙️",
    body: "Carb tuning, sprocket ratios and small upgrades that make the bike last longer under heavy use.",
  },
];

export default function DeliverySolutionsPage() {
  const fleetWa = waLink("Hi Big Boy Zambezi, I'd like a fleet quote for delivery bikes.");
  const brandingWa = waLink("Hi Big Boy Zambezi, I'd like to brand my delivery boxes.");

  const deliveryBikes = [
    products.find((p) => p.slug === "big-boy-velocity-150cc-commercial"),
    products.find((p) => p.slug === "big-boy-velocity-150-cargo"),
    products.find((p) => p.slug === "big-boy-velocity-175-cargo"),
    products.find((p) => p.slug === "big-boy-commercial-200cc"),
  ].filter(Boolean) as NonNullable<typeof products[number]>[];

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <ImageWithFallback
          src={SITE_IMAGES.deliveryRider}
          alt="Big Boy delivery bikes"
          fill
          style={{ objectFit: "cover" }}
          className={styles.heroImage}
        />
        <div className={`container ${styles.heroInner}`}>
          <span className={styles.heroEyebrow}>For Restaurants &amp; Couriers</span>
          <h1 className={styles.heroTitle}>DELIVERY BIKE <span>SOLUTIONS</span></h1>
          <p className={styles.heroSubtitle}>
            Bike supply, branded boxes, service plans and parts backup — everything your delivery operation needs from one workshop in Sinoville.
          </p>
          <div className={styles.heroActions}>
            <a href={fleetWa} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
              Request a Fleet Quote
            </a>
            <a href={`tel:${PHONE_TEL}`} className={styles.btnGhost}>
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <span className={styles.eyebrow}>What We Offer</span>
          <h2 className={styles.sectionTitle}>One Partner For <span>Your Delivery Fleet</span></h2>
          <p className={styles.lead}>
            Whether you run two bikes or twenty, we keep your delivery operation moving — bikes, branding, service and spares from a single point of contact.
          </p>
          <div className={styles.pillarsGrid}>
            {PILLARS.map((p) => (
              <ServiceCard key={p.title} title={p.title} icon={p.icon} body={p.body} />
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className="container">
          <div className={styles.splitHeader}>
            <div>
              <span className={styles.eyebrowLight}>Bikes For The Job</span>
              <h2 className={styles.sectionTitleLight}>Delivery Bikes <span>In Stock</span></h2>
            </div>
            <Link href="/bikes/commercial" className={styles.btnOutlineWhite}>View All Commercial Bikes</Link>
          </div>

          <div className={styles.bikesGrid}>
            {deliveryBikes.map((bike) => {
              const wa = waLink(`Hi Big Boy Zambezi, I'd like a quote on the ${bike.name} for delivery use.`);
              return (
                <article key={bike.id} className={styles.bikeCard}>
                  <div className={styles.bikeImage}>
                    <ImageWithFallback src={bike.image} alt={bike.name} fill style={{ objectFit: "contain" }} />
                  </div>
                  <div className={styles.bikeBody}>
                    <span className={styles.bikeCategory}>{bike.category.replace("-", " ")}</span>
                    <h3 className={styles.bikeTitle}>{bike.name}</h3>
                    <p className={styles.bikePrice}>{bike.price}</p>
                    <div className={styles.bikeActions}>
                      <Link href={`/bikes/${bike.category}/${bike.slug}`} className={styles.btnSmallRed}>View Details</Link>
                      <a href={wa} target="_blank" rel="noopener noreferrer" className={styles.btnSmallGreen}>Ask For Availability</a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.brandingPanel}>
            <div className={styles.brandingText}>
              <span className={styles.eyebrow}>Brand Your Fleet</span>
              <h2 className={styles.sectionTitle}>Delivery Box <span>Branding</span></h2>
              <p>
                Your logo on every bike. We brand delivery boxes and bike panels with durable vinyl wraps, printed decals and custom rider stickers.
              </p>
              <ul className={styles.brandingList}>
                <li>Box wraps for restaurant and courier brands</li>
                <li>Helmet, panel and number plate stickers</li>
                <li>Full-fleet identity rollouts</li>
                <li>Replacement decals when bikes get damaged</li>
              </ul>
              <div className={styles.brandingActions}>
                <a href={brandingWa} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                  WhatsApp Us A Brief
                </a>
                <Link href="/contact" className={styles.btnGhostDark}>Send Enquiry</Link>
              </div>
            </div>
            <div className={styles.brandingImage}>
              <ImageWithFallback
                src={CATEGORY_IMAGES.commercial}
                alt="Branded delivery bike"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionGrey}`}>
        <div className="container">
          <span className={styles.eyebrow}>Why Operators Choose Us</span>
          <h2 className={styles.sectionTitle}>Built For <span>Real-World Use</span></h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefit}>
              <span className={styles.benefitNumber}>01</span>
              <h3>Workshop Backup</h3>
              <p>Service, repairs and parts from the same team that sold you the bike.</p>
            </div>
            <div className={styles.benefit}>
              <span className={styles.benefitNumber}>02</span>
              <h3>Fast Turnaround</h3>
              <p>Fast-moving service items in stock so bikes get back on the road quickly.</p>
            </div>
            <div className={styles.benefit}>
              <span className={styles.benefitNumber}>03</span>
              <h3>Honest Quotes</h3>
              <p>You see the price before we start. No surprises on the bill at hand-over.</p>
            </div>
            <div className={styles.benefit}>
              <span className={styles.benefitNumber}>04</span>
              <h3>One WhatsApp Away</h3>
              <p>Same number that answers the phone — real people, every time.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="READY TO POWER YOUR DELIVERY FLEET?"
        subtitle="Bikes, boxes, branding and backup — get a quote tailored to your operation."
        whatsappMessage="Hi Big Boy Zambezi, I'd like to chat about delivery bike solutions."
        primaryHref="/contact"
        primaryLabel="Send An Enquiry"
      />
    </>
  );
}
