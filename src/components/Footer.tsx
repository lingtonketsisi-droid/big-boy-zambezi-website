import Link from "next/link";
import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  ADDRESS_LINE_3,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  waLink,
} from "@/data/contact";
import styles from "./Footer.module.css";

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-2.21c0-.837.398-1.397 1.583-1.397h2.417v-4.414c-.418-.056-1.854-.189-3.526-.189-3.492 0-5.874 2.138-5.874 6.041v3.169z"/></svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.28-.059-1.688-.073-4.947-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44c-.795 0-1.439-.645-1.439-1.44s.644-1.44 1.439-1.44z"/></svg>
);

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.565.933 3.176 1.403 4.805 1.405 5.352 0 9.706-4.354 9.709-9.707 0-2.593-1.009-5.031-2.84-6.862-1.831-1.83-4.27-2.839-6.863-2.839-5.353 0-9.707 4.354-9.71 9.708-.001 1.742.469 3.441 1.354 4.931l-1.011 3.693 3.786-.993zm11.722-6.709c-.302-.15-1.788-.882-2.064-.983-.277-.1-.478-.15-.679.15s-.779.982-.955 1.183-.352.226-.654.076c-.302-.15-1.274-.469-2.426-1.496-.897-.8-1.502-1.788-1.678-2.088-.176-.302-.019-.465.131-.615.136-.135.302-.352.453-.528.151-.176.201-.302.302-.503s.05-.377-.025-.528c-.075-.15-.679-1.635-.93-2.24-.244-.594-.491-.513-.679-.522-.176-.008-.377-.01-.578-.01s-.528.075-.804.377c-.276.302-1.056 1.031-1.056 2.515s1.081 2.917 1.232 3.118c.15.201 2.128 3.249 5.156 4.555.72.311 1.282.497 1.721.637.722.23 1.379.197 1.898.12.578-.085 1.788-.731 2.039-1.435.252-.704.252-1.308.176-1.435-.075-.126-.276-.201-.578-.351z"/></svg>
);

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.col}>
          <div className={styles.logo}>
            <span className={styles.logoBig}>BIG BOY</span>
            <span className={styles.logoSmall}>ZAMBEZI</span>
          </div>
          <p className={styles.intro}>
            Motorcycle sales, repairs, servicing, parts and delivery bike solutions — based in Sinoville, Pretoria.
          </p>
          <div className={styles.socials}>
            <a href="#" className={styles.socialIcon} aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" className={styles.socialIcon} aria-label="Instagram"><InstagramIcon /></a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="WhatsApp"><WhatsAppIcon /></a>
          </div>
        </div>

        <div className={styles.col}>
          <h3>Bikes</h3>
          <Link href="/bikes">All Bikes</Link>
          <Link href="/bikes/motorcycles">Commuters</Link>
          <Link href="/bikes/scooters">Scooters</Link>
          <Link href="/bikes/commercial">Commercial / Delivery</Link>
          <Link href="/bikes/pit-bikes">On-Off Road</Link>
          <Link href="/bikes/mustang-250">Mustang 250</Link>
        </div>

        <div className={styles.col}>
          <h3>Workshop &amp; Business</h3>
          <Link href="/services">Workshop Services</Link>
          <Link href="/delivery-solutions">Delivery Solutions</Link>
          <Link href="/parts">Parts &amp; Accessories</Link>
          <Link href="/about">About Big Boy Zambezi</Link>
          <Link href="/contact">Contact Us</Link>
        </div>

        <div className={styles.col}>
          <h3>Get In Touch</h3>
          <p>
            <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
          </p>
          <p>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
          <p className={styles.address}>
            <strong>{ADDRESS_LINE_1}</strong><br />
            {ADDRESS_LINE_2}, {ADDRESS_LINE_3}
          </p>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className={styles.waBtn}>
            <WhatsAppIcon /> WhatsApp Us
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>&copy; 2026 Big Boy Zambezi. All rights reserved.</p>
          <p className={styles.bottomMuted}>
            Big Boy Zambezi brings trusted Big Boy motorcycle support to the Zambezi area.
          </p>
        </div>
      </div>
    </footer>
  );
}
