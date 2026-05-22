import Link from "next/link";
import styles from "./ProductCard.module.css";
import ImageWithFallback from "./ImageWithFallback";

interface ProductCardProps {
  name: string;
  category: string;
  price?: string;
  imageSrc: string;
  slug?: string;
  href?: string;
  isBestSeller?: boolean;
}

export default function ProductCard({ 
  name, 
  category, 
  price, 
  imageSrc, 
  slug,
  href,
  isBestSeller = false 
}: ProductCardProps) {
  // Priority: explicit href -> dynamic bikes link -> default bikes overview
  const finalHref = href || (slug ? `/bikes/${category.toLowerCase().replace(" ", "-")}/${slug}` : "/bikes");

  return (
    <Link href={finalHref} className={styles.card}>
      {isBestSeller && <div className={styles.badge}>BEST SELLER</div>}
      <div className={styles.imageWrapper}>
        <ImageWithFallback
          src={imageSrc}
          alt={name}
          fill
          className={styles.image}
        />
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
