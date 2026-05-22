import { Metadata } from "next";
import Link from "next/link";
import { ADDRESS_LINE_1, ADDRESS_LINE_2, ADDRESS_LINE_3, PHONE_DISPLAY, PHONE_TEL, EMAIL, HOURS, waLink } from "@/data/contact";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Big Boy Zambezi | Motorcycle Dealership Pretoria",
  description:
    "Big Boy Zambezi is an authorised Big Boy dealer in Sinoville, Pretoria. New bikes, service, repairs, parts, tuning and custom work.",
};

export default function AboutPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.heroLabel}>About Us</span>
          <h1 className={styles.heroTitle}>BIG BOY <span>ZAMBEZI</span></h1>
          <p className={styles.heroSubtitle}>
            An authorised Big Boy motorcycle dealer in Sinoville, Pretoria — serving riders, commuters and delivery businesses across the city.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.intro}>
            <div>
              <h2 className={styles.sectionTitle}>Who We Are</h2>
              <p>
                Big Boy Zambezi is a franchise-style Big Boy dealership and workshop based on Sefako Makgatho Drive, Sinoville. We sell, service and customise Big Boy motorcycles, scooters and commercial bikes — and we work on most other commuter brands too.
              </p>
              <p>
                Our team rides what we sell. That means honest advice, no upsell waffle, and proper workshop time on every bike that comes through the door.
              </p>
            </div>
            <div>
              <h2 className={styles.sectionTitle}>What We Do</h2>
              <ul className={styles.list}>
                <li>New Big Boy scooters, motorcycles, commercial bikes and quads</li>
                <li>Full and minor servicing on Big Boy and most other brands</li>
                <li>Repairs, diagnostics and accident damage work</li>
                <li>Bike revival and full restorations</li>
                <li>Tuning, exhaust tuning and performance upgrades</li>
                <li>Branding of delivery boxes and personalised stickers</li>
                <li>Genuine and aftermarket parts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className="container">
          <h2 className={styles.sectionTitleLight}>How We Work</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <span className={styles.valueNumber}>01</span>
              <h3>Honest Pricing</h3>
              <p>You get a quote before we start. No surprises on the bill.</p>
            </div>
            <div className={styles.valueCard}>
              <span className={styles.valueNumber}>02</span>
              <h3>Proper Workshop Time</h3>
              <p>Bikes leave running right. We test, check and re-check before they go out the door.</p>
            </div>
            <div className={styles.valueCard}>
              <span className={styles.valueNumber}>03</span>
              <h3>Warranty Backed</h3>
              <p>New Big Boy bikes come with a 3 Year / 20,000km Factory SAM Warranty.</p>
            </div>
            <div className={styles.valueCard}>
              <span className={styles.valueNumber}>04</span>
              <h3>Local & Reachable</h3>
              <p>WhatsApp us directly — same number that answers the phone. Real humans, every time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.visit}>
            <div>
              <h2 className={styles.sectionTitle}>Come and Visit</h2>
              <p className={styles.lead}>
                Pop into our showroom — see the bikes, talk to the team, take one for a test sit.
              </p>
              <dl className={styles.contactList}>
                <div>
                  <dt>Address</dt>
                  <dd>{ADDRESS_LINE_1}<br />{ADDRESS_LINE_2}<br />{ADDRESS_LINE_3}</dd>
                </div>
                <div>
                  <dt>Phone</dt>
                  <dd><a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a></dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd>
                </div>
                <div>
                  <dt>Hours</dt>
                  <dd>
                    {HOURS.map((h) => (
                      <span key={h.day}>{h.day}: {h.time}<br /></span>
                    ))}
                  </dd>
                </div>
              </dl>

              <div className={styles.actions}>
                <a href={waLink("Hi Big Boy Zambezi, I'd like to come in for a visit / test sit.")} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
                  WHATSAPP US
                </a>
                <Link href="/contact" className={styles.outlineBtn}>CONTACT US</Link>
              </div>
            </div>
            <div className={styles.mapWrap}>
              <iframe
                title="Map to Big Boy Zambezi"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.1557342677843!2d28.2327572!3d-25.6826667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9566378415d8f7%3A0x6d9f5a77c7f99999!2s114%20Sefako%20Makgatho%20Dr%2C%20Sinoville%2C%20Pretoria%2C%200129!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
