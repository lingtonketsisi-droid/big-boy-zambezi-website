import Link from "next/link";
import styles from "./bikes.module.css";
import ImageWithFallback from "@/components/ImageWithFallback";

export default function BikesPage() {
  const categories = [
    { name: "Scooters", slug: "scooters", image: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/D-LITE-125-2.jpg" },
    { name: "Motorcycles", slug: "motorcycles", image: "https://bigboyfourways.co.za/wp-content/uploads/2024/09/Big%20Boy%20Velocity%20150%20Update.png" },
    { name: "Commercial", slug: "commercial", image: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/VELOCITY-175-CARGO-1.jpg" },
    { name: "Pit Bikes", slug: "pit-bikes", image: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/TSR-125-1.jpg" },
    { name: "Quads", slug: "quads", image: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/Roamer-180-1.jpg" },
    { name: "Utility", slug: "utility", image: "https://bigboyfourways.co.za/wp-content/uploads/2026/01/big-boy-Eco-Runner-2200W_result.png" },
    { name: "Electric", slug: "electric", image: "https://bigboyfourways.co.za/wp-content/uploads/2026/01/D-Lite-E-3000W.png" }
  ];

  return (
    <div className="container" style={{ padding: "4rem 1.5rem" }}>
      <h1 className="section-title">Our <span>Bikes</span></h1>
      <div className={styles.grid}>
        {categories.map((cat, idx) => (
          <Link key={idx} href={`/bikes/${cat.slug}`} className={styles.card}>
            <div className={styles.imageWrapper}>
              <ImageWithFallback src={cat.image} alt={cat.name} fill style={{ objectFit: "cover" }} />
            </div>
            <div className={styles.content}>
              <h3>{cat.name}</h3>
              <p>Explore Range</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
