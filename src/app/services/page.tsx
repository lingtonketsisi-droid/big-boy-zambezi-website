import { Metadata } from "next";
import Link from "next/link";
import { PHONE_DISPLAY, PHONE_TEL, waLink } from "@/data/contact";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services | Big Boy Zambezi",
  description:
    "Bike servicing, repairs, revival, tuning, exhaust tuning, performance upgrades, branding & personalised stickers at Big Boy Zambezi in Sinoville, Pretoria.",
};

const services = [
  {
    title: "Bike Service",
    icon: "🔧",
    body:
      "Full and minor services on Big Boy and most scooter / motorcycle brands. Oils, filters, plugs, brakes, chain, drive belts and a multi-point safety check.",
  },
  {
    title: "Repairs",
    icon: "🛠️",
    body:
      "From rough idle to crash damage. Engine work, electrical faults, carb cleans, brake overhauls and full diagnostics — done properly the first time.",
  },
  {
    title: "Bike Revival & Restoration",
    icon: "♻️",
    body:
      "Don't scrap it — revive it. We bring tired and parked-up bikes back to life: full strip-down, paint, refurb, mechanical rebuild and roadworthy prep.",
  },
  {
    title: "Bike Tuning",
    icon: "⚙️",
    body:
      "Carburettor and engine tuning for smoother power, better response and improved fuel economy. Dialled in for South African conditions.",
  },
  {
    title: "Exhaust Tuning",
    icon: "💨",
    body:
      "Free-flow systems, fitment and tuning for the right sound and the right power curve — without making the bike unrideable.",
  },
  {
    title: "Performance Upgrades",
    icon: "🚀",
    body:
      "Big-bore kits, cams, intake, jetting and gearing. Honest advice on what will actually make a difference to your specific bike.",
  },
  {
    title: "Delivery Box Branding",
    icon: "📦",
    body:
      "Branded delivery boxes for restaurants, takeaways and courier riders. Professional finish that promotes your business on every trip.",
  },
  {
    title: "Personalised Stickers",
    icon: "🎨",
    body:
      "Custom decals, name stickers, number plates and full graphic kits. Make your bike yours.",
  },
];

export default function ServicesPage() {
  const whatsappLink = waLink("Hi Big Boy Zambezi, I'd like to book a service / get a quote.");

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.heroLabel}>What We Do</span>
          <h1 className={styles.heroTitle}>BIG BOY <span>SERVICES</span></h1>
          <p className={styles.heroSubtitle}>
            Service, repairs, restoration, tuning, performance and branding — all under one roof in Sinoville, Pretoria.
          </p>
          <div className={styles.heroActions}>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
              BOOK A SERVICE ON WHATSAPP
            </a>
            <a href={`tel:${PHONE_TEL}`} className={styles.callBtn}>CALL {PHONE_DISPLAY}</a>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Workshop Services</h2>
          <p className={styles.sectionLead}>
            Whether you ride a Big Boy, another scooter, a commuter or a delivery bike — our team has the tools and the knowledge to keep it running properly.
          </p>

          <div className={styles.grid}>
            {services.map((s) => (
              <div key={s.title} className={styles.card}>
                <div className={styles.cardIcon}>{s.icon}</div>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardBody}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className="container">
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepNumber}>01</span>
              <h3>Get in Touch</h3>
              <p>WhatsApp or call us with a quick description of what you need. We&apos;ll come back with an indicative price and a booking slot.</p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>02</span>
              <h3>Drop the Bike Off</h3>
              <p>Bring the bike in at your booked time. We inspect it with you, confirm the work and the cost before we start.</p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>03</span>
              <h3>We Do the Work</h3>
              <p>Workshop time, parts, tuning, sticker work — done properly. We keep you posted if anything else needs your sign-off.</p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>04</span>
              <h3>Ride Away Happy</h3>
              <p>Final QC, test ride if needed, hand-over. Any questions afterwards, we&apos;re a WhatsApp away.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className="container">
          <h2 className={styles.ctaTitle}>NEED A SERVICE OR A QUOTE?</h2>
          <p className={styles.ctaSubtext}>
            Send us a message on WhatsApp — we&apos;ll come back with a price and a booking time.
          </p>
          <div className={styles.ctaActions}>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
              WHATSAPP US
            </a>
            <Link href="/contact" className={styles.outlineBtn}>CONTACT FORM</Link>
          </div>
        </div>
      </section>
    </>
  );
}
