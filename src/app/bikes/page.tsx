import Link from "next/link";
import styles from "./bikes.module.css";
import ImageWithFallback from "@/components/ImageWithFallback";
import { CATEGORY_IMAGES } from "@/data/images";
import { categoryStats } from "@/data/products";

export default function BikesPage() {
  const categories = [
    { name: "Scooters", slug: "scooters", image: CATEGORY_IMAGES.scooters, statsKey: "scooters" as const },
    { name: "Motorcycles", slug: "motorcycles", image: CATEGORY_IMAGES.motorcycles, statsKey: "motorcycles" as const },
    { name: "Commercial", slug: "commercial", image: CATEGORY_IMAGES.commercial, statsKey: "commercial" as const },
    { name: "Pit Bikes", slug: "pit-bikes", image: CATEGORY_IMAGES["pit-bikes"], statsKey: "pit-bikes" as const },
    { name: "Quads", slug: "quads", image: CATEGORY_IMAGES.quads, statsKey: "quads" as const },
    { name: "Utility", slug: "utility", image: CATEGORY_IMAGES.utility, statsKey: "utility" as const },
    { name: "Electric", slug: "electric", image: CATEGORY_IMAGES.electric, statsKey: "electric" as const },
  ];

  return (
    <div className="container" style={{ padding: "4rem 1.5rem" }}>
      <h1 className="section-title">Our <span>Bikes</span></h1>
      <div className={styles.grid}>
        {categories.map((cat) => {
          const stats = categoryStats(cat.statsKey);
          return (
            <Link key={cat.slug} href={`/bikes/${cat.slug}`} className={styles.card}>
              <div className={styles.imageWrapper}>
                <ImageWithFallback src={cat.image} alt={cat.name} fill style={{ objectFit: "cover" }} />
              </div>
              <div className={styles.content}>
                <h3>{cat.name}</h3>
                <p>
                  {stats.count > 0
                    ? `${stats.count} ${stats.count === 1 ? "Model" : "Models"} · From ${stats.fromPrice}`
                    : "Explore Range"}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
