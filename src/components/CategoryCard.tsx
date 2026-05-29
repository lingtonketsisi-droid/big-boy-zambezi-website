import Link from "next/link";
import ImageWithFallback from "./ImageWithFallback";
import styles from "./CategoryCard.module.css";

interface CategoryCardProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  ctaLabel?: string;
  count?: number;
  fromPrice?: string | null;
}

export default function CategoryCard({
  title,
  description,
  imageSrc,
  href,
  ctaLabel = "View Range",
  count,
  fromPrice,
}: CategoryCardProps) {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.imageWrap}>
        <ImageWithFallback src={imageSrc} alt={title} fill style={{ objectFit: "cover" }} />
        {typeof count === "number" && count > 0 && (
          <span className={styles.countBadge}>
            {count} {count === 1 ? "Model" : "Models"}
          </span>
        )}
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        {fromPrice && (
          <p className={styles.priceFrom}>
            <span>From</span> {fromPrice}
          </p>
        )}
        <span className={styles.cta}>{ctaLabel} →</span>
      </div>
    </Link>
  );
}
