import Link from "next/link";
import styles from "./ProductCard.module.css";
import ImageWithFallback from "./ImageWithFallback";
import type { ProductBadge } from "@/data/products";

interface ProductCardProps {
  name: string;
  category: string;
  price?: string;
  imageSrc: string;
  slug?: string;
  href?: string;
  badges?: ProductBadge[];
  inStock?: boolean;
  isBestSeller?: boolean;
}

const badgeStyle: Record<ProductBadge, string> = {
  "Best Seller": styles.badgeRed,
  "New Arrival": styles.badgeBlue,
  "Fleet Ready": styles.badgeAmber,
  "Workshop Favourite": styles.badgeSlate,
  "Popular Commuter": styles.badgeSlate,
  "Hot Deal": styles.badgeRed,
  "Limited": styles.badgeBlack,
};

export default function ProductCard({
  name,
  category,
  price,
  imageSrc,
  slug,
  href,
  badges = [],
  inStock = true,
  isBestSeller = false,
}: ProductCardProps) {
  const finalHref =
    href || (slug ? `/bikes/${category.toLowerCase().replace(" ", "-")}/${slug}` : "/bikes");

  const allBadges: ProductBadge[] =
    isBestSeller && !badges.includes("Best Seller") ? ["Best Seller", ...badges] : badges;

  return (
    <Link href={finalHref} className={styles.card}>
      {allBadges.length > 0 && (
        <div className={styles.badgeRow}>
          {allBadges.slice(0, 2).map((b) => (
            <span key={b} className={`${styles.badge} ${badgeStyle[b] ?? ""}`}>
              {b}
            </span>
          ))}
        </div>
      )}

      <div className={styles.stockPill} data-instock={inStock ? "1" : "0"}>
        <span className={styles.stockDot} />
        {inStock ? "In Stock" : "Order"}
      </div>

      <div className={styles.imageWrapper}>
        <ImageWithFallback src={imageSrc} alt={name} fill className={styles.image} />
      </div>
      <div className={styles.content}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.title}>{name}</h3>
        {price && <p className={styles.price}>{price}</p>}
        <div className={styles.viewButton}>VIEW BIKE</div>
      </div>
    </Link>
  );
}
