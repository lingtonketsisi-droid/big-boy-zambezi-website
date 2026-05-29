"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PHONE_DISPLAY, PHONE_TEL, waLink } from "@/data/contact";
import styles from "./Navbar.module.css";

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-2.21c0-.837.398-1.397 1.583-1.397h2.417v-4.414c-.418-.056-1.854-.189-3.526-.189-3.492 0-5.874 2.138-5.874 6.041v3.169z"/></svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.28-.059-1.688-.073-4.947-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44c-.795 0-1.439-.645-1.439-1.44s.644-1.44 1.439-1.44z"/></svg>
);

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.565.933 3.176 1.403 4.805 1.405 5.352 0 9.706-4.354 9.709-9.707 0-2.593-1.009-5.031-2.84-6.862-1.831-1.83-4.27-2.839-6.863-2.839-5.353 0-9.707 4.354-9.71 9.708-.001 1.742.469 3.441 1.354 4.931l-1.011 3.693 3.786-.993zm11.722-6.709c-.302-.15-1.788-.882-2.064-.983-.277-.1-.478-.15-.679.15s-.779.982-.955 1.183-.352.226-.654.076c-.302-.15-1.274-.469-2.426-1.496-.897-.8-1.502-1.788-1.678-2.088-.176-.302-.019-.465.131-.615.136-.135.302-.352.453-.528.151-.176.201-.302.302-.503s.05-.377-.025-.528c-.075-.15-.679-1.635-.93-2.24-.244-.594-.491-.513-.679-.522-.176-.008-.377-.01-.578-.01s-.528.075-.804.377c-.276.302-1.056 1.031-1.056 2.515s1.081 2.917 1.232 3.118c.15.201 2.128 3.249 5.156 4.555.72.311 1.282.497 1.721.637.722.23 1.379.197 1.898.12.578-.085 1.788-.731 2.039-1.435.252-.704.252-1.308.176-1.435-.075-.126-.276-.201-.578-.351z"/></svg>
);

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.18-1.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/bikes", label: "Bikes" },
  { href: "/services", label: "Services" },
  { href: "/delivery-solutions", label: "Delivery Solutions" },
  { href: "/parts", label: "Parts" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [trackedPath, setTrackedPath] = useState(pathname);

  if (pathname !== trackedPath) {
    setTrackedPath(pathname);
    if (isOpen) setIsOpen(false);
  }

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarContent}`}>
          <div className={styles.contactInfo}>
            <a href={`tel:${PHONE_TEL}`} className={styles.topLink}>
              <PhoneIcon /> {PHONE_DISPLAY}
            </a>
            <span className={styles.topDivider} aria-hidden="true">|</span>
            <span className={styles.topMuted}>Sinoville, Pretoria</span>
          </div>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" aria-label="Instagram"><InstagramIcon /></a>
          </div>
        </div>
      </div>

      <div className={`container ${styles.nav}`}>
        <Link href="/" className={styles.logo}>
          <div>
            <span className={styles.logoBig}>BIG</span>
            <span className={styles.logoBoy}>BOY</span>
          </div>
          <span className={styles.logoSubtitle}>ZAMBEZI</span>
        </Link>

        <nav className={`${styles.navLinks} ${isOpen ? styles.open : ""}`} aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={active ? styles.activeLink : ""}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={waLink("Hi Big Boy Zambezi, I'd like to enquire.")}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappCta}
          >
            <WhatsAppIcon /> WhatsApp Us
          </a>
        </nav>

        <button
          type="button"
          className={styles.mobileMenuBtn}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
