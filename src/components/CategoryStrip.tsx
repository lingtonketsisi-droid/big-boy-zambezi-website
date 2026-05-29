import Link from "next/link";
import { categoryStats } from "@/data/products";
import styles from "./CategoryStrip.module.css";

const STRIP = [
  { label: "Commuters", href: "/bikes/motorcycles", category: "motorcycles" as const },
  { label: "Scooters", href: "/bikes/scooters", category: "scooters" as const },
  { label: "Commercial", href: "/bikes/commercial", category: "commercial" as const },
  { label: "Electric", href: "/bikes/electric", category: "electric" as const },
  { label: "On-Off Road", href: "/bikes/pit-bikes", category: "pit-bikes" as const },
  { label: "ATVs", href: "/bikes/quads", category: "quads" as const },
  { label: "Parts", href: "/parts", category: null },
  { label: "Workshop", href: "/services", category: null },
];

export default function CategoryStrip() {
  return (
    <div className={styles.strip}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.label}>In Stock Now</span>
        <ul className={styles.list}>
          {STRIP.map((item) => {
            const stats = item.category ? categoryStats(item.category) : null;
            return (
              <li key={item.label}>
                <Link href={item.href} className={styles.link}>
                  <span className={styles.linkLabel}>{item.label}</span>
                  {stats && stats.count > 0 ? (
                    <span className={styles.count}>{stats.count}</span>
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
