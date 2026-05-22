import Link from "next/link";
import styles from "./page.module.css";
import ProductCard from "@/components/ProductCard";
import ImageWithFallback from "@/components/ImageWithFallback";
import { products } from "@/data/products";
import { ADDRESS_LINE_1, ADDRESS_LINE_2, PHONE_DISPLAY, PHONE_TEL, waLink, MAPS_DIRECTIONS } from "@/data/contact";

export default function Home() {
  const galleryImages = [
    "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800",
    "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800",
    "https://images.unsplash.com/photo-1444491741275-3747c53c99b4?w=800",
    "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=800",
    "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800",
    "https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=800",
  ];

  const brandLogos = [
    "https://bigboyfourways.co.za/wp-content/uploads/2023/06/Bigboy-logo-gry-300x168.png",
    "https://bigboyfourways.co.za/wp-content/uploads/2023/06/polaris-logo-gry-300x168.png",
    "https://bigboyfourways.co.za/wp-content/uploads/2023/06/Linhai-logo-gry-300x168.png",
    "https://bigboyfourways.co.za/wp-content/uploads/2023/06/Atul-logo-gry-300x169.png",
  ];

  const categories = [
    { name: "Scooters", slug: "scooters", image: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/D-LITE-125-2.jpg", price: "From R14,999" },
    { name: "Motorcycles", slug: "motorcycles", image: "https://bigboyfourways.co.za/wp-content/uploads/2024/09/Big%20Boy%20Velocity%20150%20Update.png", price: "From R16,799" },
    { name: "Commercial", slug: "commercial", image: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/VELOCITY-175-CARGO-1.jpg", price: "From R16,799" },
    { name: "Pit Bikes", slug: "pit-bikes", image: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/TSR-125-1.jpg", price: "From R12,999" },
    { name: "Quads", slug: "quads", image: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/Roamer-180-1.jpg", price: "From R13,499" },
    { name: "Utility", slug: "utility", image: "https://bigboyfourways.co.za/wp-content/uploads/2026/01/big-boy-Eco-Runner-2200W_result.png", price: "From R19,999" },
  ];

  const services = [
    { title: "Bike Service", icon: "🔧" },
    { title: "Repairs", icon: "🛠️" },
    { title: "Restoration", icon: "♻️" },
    { title: "Tuning", icon: "⚙️" },
    { title: "Exhaust Tuning", icon: "💨" },
    { title: "Performance", icon: "🚀" },
    { title: "Delivery Box Branding", icon: "📦" },
    { title: "Custom Stickers", icon: "🎨" },
  ];

  const featuredBikes = [
    products.find((p) => p.slug === "big-boy-velocity-150"),
    products.find((p) => p.slug === "big-boy-tsr-250"),
    products.find((p) => p.slug === "big-boy-mustang-250"),
  ].filter(Boolean) as NonNullable<typeof products[number]>[];

  const homeWhatsapp = waLink("Hi Big Boy Zambezi, I'd like more info please.");

  return (
    <>
      <section className={styles.hero}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.heroVideo}
          poster="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1600&q=80"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-motorcyclist-riding-on-a-road-at-sunset-26462-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>Get Going</span>
          <h1 className={styles.heroTitle}>
            EXPRESS<br />YOURSELF
          </h1>
          <p className={styles.heroSubtitle}>
            Big Boy Zambezi — an authorised Big Boy dealer in Sinoville, Pretoria. Sales, service, parts, tuning and custom work all under one roof.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/bikes" className={styles.heroBtnPrimary}>VIEW BIKES</Link>
            <a href={homeWhatsapp} target="_blank" rel="noopener noreferrer" className={styles.heroBtnGhost}>WHATSAPP US</a>
          </div>
        </div>
        <div className={styles.scrollArrow}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.565.933 3.176 1.403 4.805 1.405 5.352 0 9.706-4.354 9.709-9.707 0-2.593-1.009-5.031-2.84-6.862-1.831-1.83-4.27-2.839-6.863-2.839-5.353 0-9.707 4.354-9.71 9.708-.001 1.742.469 3.441 1.354 4.931l-1.011 3.693 3.786-.993zm11.722-6.709c-.302-.15-1.788-.882-2.064-.983-.277-.1-.478-.15-.679.15s-.779.982-.955 1.183-.352.226-.654.076c-.302-.15-1.274-.469-2.426-1.496-.897-.8-1.502-1.788-1.678-2.088-.176-.302-.019-.465.131-.615.136-.135.302-.352.453-.528.151-.176.201-.302.302-.503s.05-.377-.025-.528c-.075-.15-.679-1.635-.93-2.24-.244-.594-.491-.513-.679-.522-.176-.008-.377-.01-.578-.01s-.528.075-.804.377c-.276.302-1.056 1.031-1.056 2.515s1.081 2.917 1.232 3.118c.15.201 2.128 3.249 5.156 4.555.72.311 1.282.497 1.721.637.722.23 1.379.197 1.898.12.578-.085 1.788-.731 2.039-1.435.252-.704.252-1.308.176-1.435-.075-.126-.276-.201-.578-.351z" /></svg>
      </a>

      <section className={styles.socialProofStrip}>
        <div className="container">
          <div className={styles.proofGrid}>
            <div className={styles.proofItem}><span className={styles.proofIcon}>🏍️</span><span>Authorised Big Boy Dealer</span></div>
            <div className={styles.proofItem}><span className={styles.proofIcon}>✅</span><span>3yr / 20,000km Warranty</span></div>
            <div className={styles.proofItem}><span className={styles.proofIcon}>🛠️</span><span>Full Workshop On-Site</span></div>
            <div className={styles.proofItem}><span className={styles.proofIcon}>📍</span><span>Sinoville, Pretoria</span></div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Categories</h2>
          <div className={styles.categoriesGrid}>
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/bikes/${cat.slug}`} className={styles.categoryCard}>
                <div className={styles.categoryImage}>
                  <ImageWithFallback src={cat.image} alt={cat.name} fill style={{ objectFit: "cover" }} />
                </div>
                <div className={styles.categoryOverlay}>
                  <h3 className={styles.catTitle}>{cat.name}</h3>
                  <p className={styles.catPrice}>{cat.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.mustangBanner}>
        <div className="container">
          <div className={styles.mustangInner}>
            <div className={styles.mustangText}>
              <span className={styles.mustangEyebrow}>Cruiser Styling — 250cc</span>
              <h2 className={styles.mustangTitle}>BIG BOY <span>MUSTANG 250</span></h2>
              <p>
                Chrome-covered midnight black. 250cc 4-stroke. 110 km/h top speed. Backed by a 3 Year / 20,000km Factory SAM Warranty.
              </p>
              <p className={styles.mustangPrice}>R36,999.00</p>
              <div className={styles.mustangActions}>
                <Link href="/bikes/mustang-250" className={styles.mustangBtnPrimary}>VIEW MUSTANG 250</Link>
                <a href={waLink("Hi, I'd like more info on the Mustang 250.")} target="_blank" rel="noopener noreferrer" className={styles.mustangBtnGhost}>ENQUIRE ON WHATSAPP</a>
              </div>
            </div>
            <div className={styles.mustangImage}>
              <ImageWithFallback
                src="https://bigboyfourways.co.za/wp-content/uploads/2023/06/MUSTANG-250-1.jpg"
                alt="Big Boy Mustang 250"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionGrey}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Services & Workshop</h2>
          <p className={styles.sectionLead}>
            More than a showroom. A full workshop for service, repairs, restoration, tuning, branding and custom work.
          </p>
          <div className={styles.servicesGrid}>
            {services.map((s) => (
              <Link href="/services" key={s.title} className={styles.serviceTile}>
                <span className={styles.serviceIcon}>{s.icon}</span>
                <span className={styles.serviceLabel}>{s.title}</span>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/services" className="btn-primary">VIEW ALL SERVICES</Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Featured Bikes</h2>
          <div className="grid-cards">
            {featuredBikes.map((bike) => (
              <ProductCard
                key={bike.id}
                name={bike.name}
                category={bike.category}
                price={bike.price}
                imageSrc={bike.image}
                slug={bike.slug}
                isBestSeller={bike.slug === "big-boy-velocity-150"}
                href={bike.slug === "big-boy-mustang-250" ? "/bikes/mustang-250" : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className="container">
          <h2 className={styles.ctaTitle}>READY TO RIDE?</h2>
          <p className={styles.ctaSubtext}>
            Visit us at {ADDRESS_LINE_1}, {ADDRESS_LINE_2} or call {PHONE_DISPLAY}
          </p>
          <div className={styles.ctaActions}>
            <a href={MAPS_DIRECTIONS} target="_blank" rel="noopener noreferrer" className={`btn-primary ${styles.ctaBtn}`}>
              GET DIRECTIONS
            </a>
            <a href={`tel:${PHONE_TEL}`} className={styles.ctaBtnOutline}>CALL {PHONE_DISPLAY}</a>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionGrey}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Gallery</h2>
          <div className={styles.galleryGrid}>
            {galleryImages.map((imageSrc, idx) => (
              <div key={idx} className={styles.galleryImage}>
                <ImageWithFallback src={imageSrc} alt={`Gallery Image ${idx + 1}`} fill />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.brandsRow}>
        <div className="container" style={{ display: "flex", justifyContent: "center", gap: "4rem", flexWrap: "wrap" }}>
          {brandLogos.map((logoSrc, idx) => (
            <div key={idx} className={styles.brandLogo}>
              <ImageWithFallback src={logoSrc} alt="Brand Logo" fill style={{ objectFit: "contain" }} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
