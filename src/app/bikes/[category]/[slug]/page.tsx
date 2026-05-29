import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { products } from "@/data/products";
import ImageWithFallback from "@/components/ImageWithFallback";
import ProductCard from "@/components/ProductCard";
import { PHONE_DISPLAY, PHONE_TEL, waLink } from "@/data/contact";
import styles from "./product.module.css";

interface ProductPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} | Big Boy Zambezi`,
    description: `Buy the ${product.name} for ${product.price} at Big Boy Zambezi. Quality motorcycles and scooters in Pretoria.`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  // Redirect Mustang 250 to its rich, dedicated page
  if (slug === "big-boy-mustang-250") {
    redirect("/bikes/mustang-250");
  }

  const product = products.find(p => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const enquiryLink = `/contact?bike=${encodeURIComponent(product.name)}`;
  const whatsappLink = waLink(`Hi Big Boy Zambezi, I'd like more info on the ${product.name} (${product.price}).`);

  return (
    <div className="container" style={{ padding: "4rem 1.5rem" }}>
      <div className={styles.productLayout}>
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              fill
              style={{ objectFit: "contain" }}
              fetchPriority="high"
            />
          </div>
        </div>

        <div className={styles.infoSection}>
          <nav className={styles.breadcrumb}>
            <Link href="/">Home</Link> /
            <Link href={`/bikes/${product.category}`}> {product.category.toUpperCase()} </Link> /
            <span>{product.name}</span>
          </nav>

          <h1 className={styles.title}>{product.name}</h1>
          <p className={styles.price}>{product.price}</p>

          {product.badges.length > 0 && (
            <div className={styles.badgeRow}>
              {product.badges.map((b) => (
                <span key={b} className={styles.badge}>{b}</span>
              ))}
            </div>
          )}

          {product.inStock && (
            <p className={styles.stockLine}><span /> In Stock — viewing available now</p>
          )}

          <p className={styles.disclaimer}>
            Prices exclude on-the-road costs (registration, licensing, delivery &amp; admin fees) and Pre-Delivery Inspection (R350).
          </p>

          <div className={styles.actions}>
            <Link href={enquiryLink} className={styles.enquireBtn}>ENQUIRE NOW</Link>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.callBtn}>WHATSAPP US</a>
            <a href={`tel:${PHONE_TEL}`} className={styles.callBtn}>CALL: {PHONE_DISPLAY}</a>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <section className={styles.related}>
          <h2 className={styles.relatedTitle}>Related Bikes</h2>
          <div className={styles.relatedGrid}>
            {relatedProducts.map((p) => (
              <ProductCard
                key={p.id}
                name={p.name}
                category={p.category}
                price={p.price}
                imageSrc={p.image}
                slug={p.slug}
                badges={p.badges}
                inStock={p.inStock}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
