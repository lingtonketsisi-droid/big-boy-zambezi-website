import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  ADDRESS_LINE_3,
  EMAIL,
  HOURS,
  PHONE_DISPLAY,
  PHONE_TEL,
  waLink,
} from "@/data/contact";
import styles from "./ContactBlock.module.css";

interface ContactBlockProps {
  whatsappMessage?: string;
  showHours?: boolean;
  variant?: "light" | "dark";
}

export default function ContactBlock({
  whatsappMessage,
  showHours = true,
  variant = "light",
}: ContactBlockProps) {
  return (
    <div className={`${styles.block} ${variant === "dark" ? styles.dark : ""}`}>
      <div className={styles.row}>
        <span className={styles.label}>Phone</span>
        <a href={`tel:${PHONE_TEL}`} className={styles.value}>{PHONE_DISPLAY}</a>
      </div>
      <div className={styles.row}>
        <span className={styles.label}>WhatsApp</span>
        <a
          href={waLink(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.value} ${styles.whatsapp}`}
        >
          {PHONE_DISPLAY}
        </a>
      </div>
      <div className={styles.row}>
        <span className={styles.label}>Email</span>
        <a href={`mailto:${EMAIL}`} className={styles.value}>{EMAIL}</a>
      </div>
      <div className={styles.row}>
        <span className={styles.label}>Address</span>
        <span className={styles.value}>
          {ADDRESS_LINE_1}<br />
          {ADDRESS_LINE_2}<br />
          {ADDRESS_LINE_3}
        </span>
      </div>
      {showHours && (
        <div className={styles.hours}>
          <span className={styles.label}>Hours</span>
          <ul>
            {HOURS.map((h) => (
              <li key={h.day}>
                <span>{h.day}</span>
                <span className={styles.hoursTime}>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
