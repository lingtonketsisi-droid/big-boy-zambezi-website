import { Metadata } from "next";
import Link from "next/link";
import { PHONE_DISPLAY, PHONE_TEL, waLink } from "@/data/contact";
import styles from "./parts.module.css";

export const metadata: Metadata = {
  title: "Parts & Accessories | Big Boy Zambezi",
  description:
    "Genuine and aftermarket motorcycle parts and accessories — exhausts, brakes, chains, tyres, electrics, body work and more — at Big Boy Zambezi, Sinoville, Pretoria.",
};

const categories = [
  { title: "Engine & Drivetrain", items: ["Pistons & rings", "Cams & gaskets", "Drive belts", "Clutch assemblies"] },
  { title: "Exhausts", items: ["Stock replacements", "Free-flow systems", "Slip-ons", "Heat shields"] },
  { title: "Brakes", items: ["Brake pads & shoes", "Discs", "Brake lines", "Master cylinders"] },
  { title: "Chains & Sprockets", items: ["Standard chains", "Heavy duty chains", "Front & rear sprockets", "Chain lube"] },
  { title: "Tyres & Tubes", items: ["Commuter tyres", "Off-road tyres", "Tubes", "Valve stems"] },
  { title: "Electrics", items: ["Batteries", "CDI units", "Coils & plugs", "Wiring looms"] },
  { title: "Body & Panels", items: ["Fairings", "Mudguards", "Mirrors", "Indicators & lights"] },
  { title: "Controls & Cables", items: ["Throttle & clutch cables", "Levers", "Grips", "Foot pegs"] },
  { title: "Accessories", items: ["Top boxes & delivery boxes", "Phone mounts", "Locks & security", "Riding gear"] },
];

export default function PartsPage() {
  const partsWa = waLink("Hi Big Boy Zambezi, I'm looking for the following part:");
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.heroLabel}>Spares & Accessories</span>
          <h1 className={styles.heroTitle}>MOTORCYCLE <span>PARTS</span></h1>
          <p className={styles.heroSubtitle}>
            Genuine Big Boy parts and quality aftermarket spares — for service, repair and performance builds. Don&apos;t know the part number? Just send us a photo on WhatsApp.
          </p>
          <div className={styles.heroActions}>
            <a href={partsWa} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
              WHATSAPP FOR A QUOTE
            </a>
            <a href={`tel:${PHONE_TEL}`} className={styles.callBtn}>CALL {PHONE_DISPLAY}</a>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>What We Stock</h2>
          <p className={styles.sectionLead}>
            We carry a wide range of fast-moving service items in store and can order in almost anything else within a few working days.
          </p>

          <div className={styles.grid}>
            {categories.map((cat) => (
              <div key={cat.title} className={styles.card}>
                <h3 className={styles.cardTitle}>{cat.title}</h3>
                <ul>
                  {cat.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.findPart}>
        <div className="container">
          <div className={styles.findPartInner}>
            <div>
              <h2 className={styles.sectionTitle}>Can&apos;t Find What You Need?</h2>
              <p className={styles.sectionLeadDark}>
                Send us a WhatsApp with a photo of the part (or your bike&apos;s reg / VIN). We&apos;ll source it, give you a price and let you know how long it&apos;ll take.
              </p>
              <div className={styles.heroActions}>
                <a href={partsWa} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
                  WHATSAPP US A PHOTO
                </a>
                <Link href="/contact" className={styles.outlineBtn}>USE CONTACT FORM</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
