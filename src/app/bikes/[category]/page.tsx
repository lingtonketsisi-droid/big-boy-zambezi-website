import { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import styles from "./category.module.css";

const VALID_CATEGORIES = ["scooters", "motorcycles", "commercial", "pit-bikes", "quads", "utility", "electric"];

const CATEGORY_TITLES: Record<string, string> = {
  "scooters": "Scooters",
  "motorcycles": "Motorcycles",
  "commercial": "Commercial",
  "pit-bikes": "Pit Bikes",
  "quads": "Quads",
  "utility": "Utility",
  "electric": "Electric",
};

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryName = CATEGORY_TITLES[category.toLowerCase()] || category;
  return {
    title: `${categoryName} | Big Boy Zambezi`,
    description: `Browse our range of Big Boy ${categoryName}. Quality motorcycles and scooters in Sinoville, Pretoria.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categorySlug = category.toLowerCase();

  if (!VALID_CATEGORIES.includes(categorySlug)) {
    notFound();
  }

  const filteredProducts = products.filter(p => p.category === categorySlug);
  const categoryTitle = CATEGORY_TITLES[categorySlug] || categorySlug;

  return (
    <div className="container" style={{ padding: "4rem 1.5rem" }}>
      <header style={{ marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "900", textTransform: "uppercase", marginBottom: "1rem", fontFamily: "var(--font-racing)", fontStyle: "italic" }}>
          {categoryTitle}
        </h1>
        <p style={{ color: "#666", fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "780px" }}>
          Prices shown exclude on-the-road costs, including registration, licensing, delivery, and administration fees.
        </p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #eee", paddingBottom: "1rem" }}>
          <span style={{ fontWeight: 600 }}>Showing {filteredProducts.length} {filteredProducts.length === 1 ? "result" : "results"}</span>
        </div>
      </header>

      <div className={styles.grid}>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
            imageSrc={product.image}
            slug={product.slug}
            badges={product.badges}
            inStock={product.inStock}
            href={product.slug === "big-boy-mustang-250" ? "/bikes/mustang-250" : undefined}
          />
        ))}
        {filteredProducts.length === 0 && (
          <p style={{ textAlign: "center", gridColumn: "1 / -1", padding: "4rem", fontSize: "1.2rem", color: "#999" }}>
            No products found in this category yet. Please check back soon!
          </p>
        )}
      </div>
    </div>
  );
}
