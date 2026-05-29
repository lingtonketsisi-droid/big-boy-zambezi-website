import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, SERVICE_DETAILS } from "@/data/services";
import { PHONE_DISPLAY, PHONE_TEL, waLink } from "@/data/contact";
import CTASection from "@/components/CTASection";
import PDIBadge from "@/components/PDIBadge";
import styles from "./service-detail.module.css";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICE_DETAILS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return { title: "Service | Big Boy Zambezi" };
  }
  return {
    title: `${service.title} | Big Boy Zambezi`,
    description: service.tagline,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const whatsappLink = waLink(`Hi Big Boy Zambezi, I'd like to book or get a quote for ${service.title}.`);
  const related = service.related
    .map((s) => SERVICE_DETAILS.find((d) => d.slug === s))
    .filter(Boolean) as typeof SERVICE_DETAILS;

  return (
    <article>
      <section className={styles.hero}>
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/services">Services</Link>
            <span>/</span>
            <span className={styles.current}>{service.title}</span>
          </nav>

          <div className={styles.heroInner}>
            <div className={styles.heroIcon} aria-hidden="true">{service.icon}</div>
            <span className={styles.eyebrow}>{service.eyebrow}</span>
            <h1 className={styles.title}>{service.title}</h1>
            <p className={styles.tagline}>{service.tagline}</p>
            <div className={styles.heroActions}>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
                Book on WhatsApp
              </a>
              <a href={`tel:${PHONE_TEL}`} className={styles.callBtn}>Call {PHONE_DISPLAY}</a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`container ${styles.bodyGrid}`}>
          <div className={styles.bodyText}>
            {service.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <h2 className={styles.subtitle}>What&apos;s Included</h2>
            <ul className={styles.includesList}>
              {service.whatYouGet.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className={styles.sidebar}>
            {service.pricing && service.pricing.length > 0 && (
              <div className={styles.pricingCard}>
                <h3 className={styles.pricingTitle}>Indicative Pricing</h3>
                <dl className={styles.pricingList}>
                  {service.pricing.map((row) => (
                    <div key={row.label} className={styles.pricingRow}>
                      <dt>{row.label}</dt>
                      <dd>{row.price}</dd>
                    </div>
                  ))}
                </dl>
                <p className={styles.pricingDisclaimer}>
                  Prices are indicative and depend on bike model, condition and parts required. We always quote before starting work.
                </p>
              </div>
            )}

            <PDIBadge variant="card" href="/services" />
          </aside>
        </div>
      </section>

      <section className={styles.faqs}>
        <div className="container">
          <span className={styles.eyebrowLight}>Frequently Asked</span>
          <h2 className={styles.faqTitle}>FAQs</h2>
          <div className={styles.faqList}>
            {service.faqs.map((faq) => (
              <details key={faq.q} className={styles.faqItem}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className={styles.related}>
          <div className="container">
            <span className={styles.eyebrow}>Related Services</span>
            <h2 className={styles.relatedTitle}>Often Booked <span>Together</span></h2>
            <div className={styles.relatedGrid}>
              {related.map((r) => (
                <Link key={r.slug} href={`/services/${r.slug}`} className={styles.relatedCard}>
                  <span className={styles.relatedIcon} aria-hidden="true">{r.icon}</span>
                  <div>
                    <strong>{r.title}</strong>
                    <span>{r.tagline}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`READY TO BOOK ${service.title.toUpperCase()}?`}
        subtitle="Message us on WhatsApp — we'll come back with a price and an available slot."
        whatsappMessage={`Hi Big Boy Zambezi, I'd like to book or get a quote for ${service.title}.`}
        primaryHref="/contact"
        primaryLabel="Contact Big Boy Zambezi"
      />
    </article>
  );
}
