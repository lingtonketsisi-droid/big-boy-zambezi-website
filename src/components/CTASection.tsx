import Link from "next/link";
import { waLink } from "@/data/contact";
import styles from "./CTASection.module.css";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  whatsappMessage?: string;
  primaryHref?: string;
  primaryLabel?: string;
  variant?: "red" | "dark";
}

export default function CTASection({
  title,
  subtitle,
  whatsappMessage,
  primaryHref = "/contact",
  primaryLabel = "Contact Big Boy Zambezi",
  variant = "red",
}: CTASectionProps) {
  const wa = waLink(whatsappMessage);

  return (
    <section className={`${styles.banner} ${variant === "dark" ? styles.dark : ""}`}>
      <div className="container">
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <div className={styles.actions}>
          <Link href={primaryHref} className={styles.primaryBtn}>{primaryLabel}</Link>
          <a href={wa} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
