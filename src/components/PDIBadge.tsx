import Link from "next/link";
import styles from "./PDIBadge.module.css";

interface PDIBadgeProps {
  variant?: "inline" | "card" | "banner";
  href?: string;
}

export default function PDIBadge({ variant = "inline", href = "/services" }: PDIBadgeProps) {
  if (variant === "card") {
    return (
      <Link href={href} className={`${styles.root} ${styles.card}`}>
        <div className={styles.cardHeader}>
          <span className={styles.checkMark} aria-hidden>✓</span>
          <span className={styles.cardLabel}>Pre-Delivery Inspection</span>
        </div>
        <div className={styles.cardPrice}>R350</div>
        <p className={styles.cardCopy}>
          Every bike inspected by our workshop before it leaves the floor — safety, torque, fluids,
          lights, brakes &amp; final tune.
        </p>
        <span className={styles.cardCta}>Learn more →</span>
      </Link>
    );
  }

  if (variant === "banner") {
    return (
      <div className={`${styles.root} ${styles.banner}`}>
        <span className={styles.bannerEyebrow}>Included on every new bike</span>
        <span className={styles.bannerTitle}>Pre-Delivery Inspection — R350</span>
        <span className={styles.bannerCopy}>
          Workshop-checked, road-ready, signed off before you ride away.
        </span>
        <Link href={href} className={styles.bannerCta}>
          What we check →
        </Link>
      </div>
    );
  }

  return (
    <span className={`${styles.root} ${styles.inline}`}>
      <span className={styles.inlineDot} />
      <span>
        <strong>PDI R350</strong> · Workshop inspection on every bike
      </span>
    </span>
  );
}
