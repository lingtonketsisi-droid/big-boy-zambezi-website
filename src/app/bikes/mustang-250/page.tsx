import { Metadata } from "next";
import Link from "next/link";
import ImageWithFallback from "@/components/ImageWithFallback";
import PDIBadge from "@/components/PDIBadge";
import { mustang250 } from "@/data/mustang250";
import { PHONE_DISPLAY, PHONE_TEL, waLink } from "@/data/contact";
import styles from "./mustang.module.css";

export const metadata: Metadata = {
  title: `${mustang250.brand} ${mustang250.name} | Big Boy Zambezi`,
  description: `${mustang250.brand} ${mustang250.name} — ${mustang250.price}. ${mustang250.tagline} Available at Big Boy Zambezi in Sinoville, Pretoria.`,
};

export default function Mustang250Page() {
  const enquiryLink = `/contact?bike=${encodeURIComponent(`${mustang250.brand} ${mustang250.name}`)}`;
  const whatsappLink = waLink(
    `Hi Big Boy Zambezi, I'd like more info on the ${mustang250.brand} ${mustang250.name} (${mustang250.price}).`
  );

  return (
    <article>
      <div className={styles.heroBg}>
        <div className="container">
          <nav className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/bikes/motorcycles">Motorcycles</Link>
            <span>/</span>
            <span className={styles.current}>{mustang250.name}</span>
          </nav>

          <div className={styles.productLayout}>
            <div className={styles.imageSection}>
              <div className={styles.imageWrapper}>
                <ImageWithFallback
                  src={mustang250.image}
                  alt={`${mustang250.brand} ${mustang250.name}`}
                  fill
                  style={{ objectFit: "contain" }}
                  fetchPriority="high"
                />
              </div>
            </div>

            <div className={styles.infoSection}>
              <span className={styles.brandLabel}>{mustang250.brand}</span>
              <h1 className={styles.title}>{mustang250.name}</h1>
              <span className={styles.categoryLabel}>{mustang250.category}</span>

              <div className={styles.priceRow}>
                <span className={styles.price}>{mustang250.price}</span>
                {mustang250.inStock && <span className={styles.stockBadge}>In Stock</span>}
              </div>

              <p className={styles.tagline}>{mustang250.tagline}</p>

              <ul className={styles.highlights}>
                {mustang250.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>

              <div className={styles.actions}>
                <Link href={enquiryLink} className={styles.primaryBtn}>ENQUIRE NOW</Link>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
                  WHATSAPP US
                </a>
                <a href={`tel:${PHONE_TEL}`} className={styles.callBtn}>
                  CALL {PHONE_DISPLAY}
                </a>
              </div>

              <p className={styles.disclaimer}>
                Prices exclude on-the-road costs (registration, licensing, delivery &amp; admin fees) and PDI (R350).
              </p>

              <div className={styles.pdiInline}>
                <PDIBadge />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Overview</h2>
          <div className={styles.descriptionGrid}>
            <div className={styles.descriptionText}>
              {mustang250.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <aside className={styles.ataGlance}>
              <h3>At a Glance</h3>
              <dl>
                <div><dt>Brand</dt><dd>{mustang250.brand}</dd></div>
                <div><dt>Category</dt><dd>{mustang250.category}</dd></div>
                <div><dt>Licence</dt><dd>{mustang250.serviceInfo.licenceRequired}</dd></div>
                <div><dt>Max Rider Weight</dt><dd>{mustang250.serviceInfo.maxRiderWeight}</dd></div>
                <div><dt>Warranty</dt><dd>{mustang250.serviceInfo.warranty}</dd></div>
                <div><dt>Run-in Service</dt><dd>{mustang250.serviceInfo.runInService}</dd></div>
                <div><dt>Service Intervals</dt><dd>{mustang250.serviceInfo.intervals}</dd></div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Full Specifications</h2>
          <div className={styles.specsGrid}>
            {Object.entries(mustang250.specs).map(([key, value]) => (
              <div key={key} className={styles.specRow}>
                <span className={styles.specKey}>{key}</span>
                <span className={styles.specValue}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.pdiBanner}>
        <div className="container">
          <PDIBadge variant="banner" />
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className="container">
          <h2 className={styles.ctaTitle}>READY TO RIDE THE MUSTANG 250?</h2>
          <p className={styles.ctaSubtext}>
            Visit our showroom at 114 Sefako Makgatho Drive, Sinoville — or get in touch now.
          </p>
          <div className={styles.ctaActions}>
            <Link href={enquiryLink} className={styles.primaryBtn}>ENQUIRE NOW</Link>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
              WHATSAPP US
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
