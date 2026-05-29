import { Metadata } from "next";
import Link from "next/link";
import { PHONE_DISPLAY, PHONE_TEL, waLink } from "@/data/contact";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import PDIBadge from "@/components/PDIBadge";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services | Big Boy Zambezi",
  description:
    "Bike servicing, repairs, revival, tuning, exhaust tuning, performance upgrades, branding & personalised stickers at Big Boy Zambezi in Sinoville, Pretoria.",
};

const SERVICES = [
  { title: "Bike Service", icon: "🔧", slug: "bike-service", body: "Full and minor services on Big Boy and most scooter / motorcycle brands. Oils, filters, plugs, brakes, chain, drive belts and a multi-point safety check." },
  { title: "Repairs", icon: "🛠️", slug: "repairs", body: "From rough idle to crash damage. Engine work, electrical faults, carb cleans, brake overhauls and full diagnostics — done properly the first time." },
  { title: "Bike Revival & Restoration", icon: "♻️", slug: "restoration", body: "Don't scrap it — revive it. We bring tired and parked-up bikes back to life: full strip-down, paint, refurb, mechanical rebuild and roadworthy prep." },
  { title: "Bike Tuning", icon: "⚙️", slug: "tuning", body: "Carburettor and engine tuning for smoother power, better response and improved fuel economy. Dialled in for South African conditions." },
  { title: "Exhaust Tuning", icon: "💨", slug: "exhaust-performance", body: "Free-flow systems, fitment and tuning for the right sound and the right power curve — without making the bike unrideable." },
  { title: "Performance Upgrades", icon: "🚀", slug: "performance", body: "Big-bore kits, cams, intake, jetting and gearing. Honest advice on what will actually make a difference to your specific bike." },
  { title: "Delivery Box Branding", icon: "📦", slug: "delivery-branding", body: "Branded delivery boxes for restaurants, takeaways and courier riders. Professional finish that promotes your business on every trip." },
  { title: "Personalised Stickers", icon: "🎨", slug: "stickers", body: "Custom decals, name stickers, number plates and full graphic kits. Make your bike yours." },
];

const PROCESS = [
  { num: "01", title: "Get in Touch", body: "WhatsApp or call us with a quick description of what you need. We'll come back with an indicative price and a booking slot." },
  { num: "02", title: "Drop the Bike Off", body: "Bring the bike in at your booked time. We inspect it with you, confirm the work and the cost before we start." },
  { num: "03", title: "We Do the Work", body: "Workshop time, parts, tuning, sticker work — done properly. We keep you posted if anything else needs your sign-off." },
  { num: "04", title: "Ride Away Happy", body: "Final QC, test ride if needed, hand-over. Any questions afterwards, we're a WhatsApp away." },
];

export default function ServicesPage() {
  const whatsappLink = waLink("Hi Big Boy Zambezi, I'd like to book a service / get a quote.");

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.heroLabel}>What We Do</span>
          <h1 className={styles.heroTitle}>WORKSHOP <span>SERVICES</span></h1>
          <p className={styles.heroSubtitle}>
            Service, repairs, restoration, tuning, performance and branding — all under one roof in Sinoville, Pretoria.
          </p>
          <div className={styles.heroActions}>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
              Book A Service On WhatsApp
            </a>
            <a href={`tel:${PHONE_TEL}`} className={styles.callBtn}>Call {PHONE_DISPLAY}</a>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <span className={styles.eyebrow}>Workshop Services</span>
          <h2 className={styles.sectionTitle}>Everything <span>On-Site</span></h2>
          <p className={styles.sectionLead}>
            Whether you ride a Big Boy, another scooter, a commuter or a delivery bike — our team has the tools and the knowledge to keep it running properly.
          </p>

          <div className={styles.grid}>
            {SERVICES.map((s) => (
              <ServiceCard
                key={s.title}
                title={s.title}
                icon={s.icon}
                body={s.body}
                href={`/services/${s.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.pdiSection}>
        <div className={`container ${styles.pdiInner}`}>
          <div>
            <span className={styles.eyebrow}>Workshop Standard</span>
            <h2 className={styles.sectionTitle}>Pre-Delivery <span>Inspection</span></h2>
            <p className={styles.pdiCopy}>
              Every new bike Big Boy Zambezi delivers goes through our workshop&apos;s Pre-Delivery Inspection — a <strong>R350</strong> flat-fee, signed-off process. Safety, torque, fluids, electrics and final tune, all checked before the keys leave the counter.
            </p>
            <ul className={styles.pdiBullets}>
              <li>Multi-point safety &amp; torque check</li>
              <li>Fluids, oils &amp; filters verified</li>
              <li>Brakes, lights &amp; electrics tested</li>
              <li>Final tune &amp; road-ready hand-over</li>
            </ul>
          </div>
          <PDIBadge variant="card" href="/contact" />
        </div>
      </section>

      <section className={styles.dealsSection}>
        <div className="container">
          <span className={styles.eyebrow}>While You&apos;re Here</span>
          <h2 className={styles.sectionTitle}>Common <span>Add-Ons</span></h2>
          <div className={styles.dealsGrid}>
            <Link href="/services/exhaust-performance" className={styles.dealCard}>
              <strong>Exhaust Upgrade</strong>
              <span>Free-flow systems fitted &amp; tuned in one workshop visit.</span>
            </Link>
            <Link href="/services/restoration" className={styles.dealCard}>
              <strong>Bike Revival</strong>
              <span>Bring a tired bike back to life — strip, rebuild, paint, road-ready.</span>
            </Link>
            <Link href="/services/delivery-branding" className={styles.dealCard}>
              <strong>Delivery Branding</strong>
              <span>Branded boxes that promote your business on every trip.</span>
            </Link>
            <Link href="/services/stickers" className={styles.dealCard}>
              <strong>Custom Stickers</strong>
              <span>Decals, name plates and full graphic kits — make your bike yours.</span>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className="container">
          <span className={styles.eyebrowLight}>The Process</span>
          <h2 className={styles.sectionTitleLight}>How It <span>Works</span></h2>
          <div className={styles.steps}>
            {PROCESS.map((step) => (
              <div key={step.num} className={styles.step}>
                <span className={styles.stepNumber}>{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="NEED A SERVICE OR A QUOTE?"
        subtitle="Send us a message on WhatsApp — we'll come back with a price and a booking time."
        whatsappMessage="Hi Big Boy Zambezi, I'd like to book a service / get a quote."
        primaryHref="/contact"
        primaryLabel="Contact Big Boy Zambezi"
      />
    </>
  );
}
