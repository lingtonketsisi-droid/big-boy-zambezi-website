import Link from "next/link";
import styles from "./ServiceCard.module.css";

interface ServiceCardProps {
  title: string;
  icon: string;
  body: string;
  href?: string;
}

export default function ServiceCard({ title, icon, body, href }: ServiceCardProps) {
  const inner = (
    <>
      <div className={styles.icon} aria-hidden="true">{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.body}>{body}</p>
      {href && <span className={styles.cta}>Learn more →</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${styles.card} ${styles.linkCard}`}>
        {inner}
      </Link>
    );
  }

  return <article className={styles.card}>{inner}</article>;
}
