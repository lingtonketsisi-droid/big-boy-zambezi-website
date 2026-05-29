import { PRODUCT_IMAGES } from "./images";

export type ProductBadge =
  | "Best Seller"
  | "New Arrival"
  | "Fleet Ready"
  | "Workshop Favourite"
  | "Popular Commuter"
  | "Hot Deal"
  | "Limited";

export interface Product {
  id: string;
  name: string;
  price: string;
  priceNumeric: number;
  category:
    | "scooters"
    | "motorcycles"
    | "commercial"
    | "pit-bikes"
    | "quads"
    | "utility"
    | "electric";
  image: string;
  slug: string;
  description?: string;
  inStock: boolean;
  badges: ProductBadge[];
}

const img = (slug: string, fallback?: string) => PRODUCT_IMAGES[slug] ?? fallback ?? "";

export const products: Product[] = [
  // ─── Scooters ────────────────────────────────────────────────
  { id: "s1", name: "Big Boy D-Lite 125", price: "R18,999", priceNumeric: 18999, category: "scooters", image: img("big-boy-d-lite-125"), slug: "big-boy-d-lite-125", inStock: true, badges: ["Best Seller", "Popular Commuter"] },
  { id: "s2", name: "Big Boy Nexus 125", price: "R19,999", priceNumeric: 19999, category: "scooters", image: img("big-boy-nexus-125"), slug: "big-boy-nexus-125", inStock: true, badges: ["Popular Commuter"] },
  { id: "s3", name: "Big Boy CrossOver 150X", price: "R20,499", priceNumeric: 20499, category: "scooters", image: img("big-boy-crossover-150x"), slug: "big-boy-crossover-150x", inStock: true, badges: ["New Arrival"] },
  { id: "s4", name: "Big Boy Adventure 125RS", price: "R20,999", priceNumeric: 20999, category: "scooters", image: img("big-boy-adventure-125rs"), slug: "big-boy-adventure-125rs", inStock: true, badges: [] },
  { id: "s5", name: "Big Boy Adventure 150RS", price: "R20,999", priceNumeric: 20999, category: "scooters", image: img("big-boy-adventure-150rs"), slug: "big-boy-adventure-150rs", inStock: true, badges: [] },
  { id: "s6", name: "Big Boy Revival 125/150cc", price: "R22,499", priceNumeric: 22499, category: "scooters", image: img("big-boy-revival-125-150cc"), slug: "big-boy-revival-125-150cc", inStock: true, badges: ["Workshop Favourite"] },
  { id: "s7", name: "Big Boy Slingshot 125", price: "R22,999", priceNumeric: 22999, category: "scooters", image: img("big-boy-slingshot-125"), slug: "big-boy-slingshot-125", inStock: true, badges: [] },
  { id: "s8", name: "Big Boy D-Lite E 3000W", price: "R34,999", priceNumeric: 34999, category: "scooters", image: img("big-boy-d-lite-e-3000w"), slug: "big-boy-d-lite-e-3000w", inStock: true, badges: ["New Arrival"] },

  // ─── Motorcycles / Commuters ─────────────────────────────────
  { id: "m1", name: "Big Boy Velocity 150", price: "R16,799", priceNumeric: 16799, category: "motorcycles", image: img("big-boy-velocity-150"), slug: "big-boy-velocity-150", inStock: true, badges: ["Best Seller", "Popular Commuter", "Fleet Ready"] },
  { id: "m2", name: "Big Boy Velocity 175 Cargo", price: "R18,499", priceNumeric: 18499, category: "motorcycles", image: img("big-boy-velocity-175-cargo"), slug: "big-boy-velocity-175-cargo", inStock: true, badges: ["Fleet Ready"] },
  { id: "m3", name: "Big Boy Velocity 200", price: "R20,999", priceNumeric: 20999, category: "motorcycles", image: img("big-boy-velocity-200"), slug: "big-boy-velocity-200", inStock: true, badges: ["Popular Commuter"] },
  { id: "m4", name: "Big Boy Superlight 125", price: "R20,999", priceNumeric: 20999, category: "motorcycles", image: img("big-boy-superlight-125"), slug: "big-boy-superlight-125", inStock: true, badges: [] },
  { id: "m5", name: "Big Boy Superlight 200", price: "R22,999", priceNumeric: 22999, category: "motorcycles", image: img("big-boy-superlight-200"), slug: "big-boy-superlight-200", inStock: true, badges: ["Workshop Favourite"] },
  { id: "m6", name: "Big Boy Pacer 200", price: "R22,999", priceNumeric: 22999, category: "motorcycles", image: img("big-boy-pacer-200"), slug: "big-boy-pacer-200", inStock: true, badges: [] },
  { id: "m7", name: "Big Boy TSR 125", price: "R26,999", priceNumeric: 26999, category: "motorcycles", image: img("big-boy-tsr-125"), slug: "big-boy-tsr-125", inStock: true, badges: ["New Arrival"] },
  { id: "m8", name: "Big Boy TSR 250", price: "R29,999", priceNumeric: 29999, category: "motorcycles", image: img("big-boy-tsr-250"), slug: "big-boy-tsr-250", inStock: true, badges: ["Hot Deal"] },
  { id: "m9", name: "Big Boy Mustang 250", price: "R36,999", priceNumeric: 36999, category: "motorcycles", image: img("big-boy-mustang-250"), slug: "big-boy-mustang-250", inStock: true, badges: ["Workshop Favourite", "Best Seller"] },

  // ─── Commercial / Delivery ───────────────────────────────────
  { id: "c1", name: "Big Boy Velocity 150cc Commercial", price: "R16,799", priceNumeric: 16799, category: "commercial", image: img("big-boy-velocity-150cc-commercial"), slug: "big-boy-velocity-150cc-commercial", inStock: true, badges: ["Fleet Ready", "Best Seller"] },
  { id: "c2", name: "Big Boy Velocity 150 Cargo", price: "R17,299", priceNumeric: 17299, category: "commercial", image: img("big-boy-velocity-150-cargo"), slug: "big-boy-velocity-150-cargo", inStock: true, badges: ["Fleet Ready"] },
  { id: "c3", name: "Big Boy Commercial 200cc", price: "R20,999", priceNumeric: 20999, category: "commercial", image: img("big-boy-commercial-200cc"), slug: "big-boy-commercial-200cc", inStock: true, badges: ["Fleet Ready"] },

  // ─── Pit Bikes / On-Off Road ─────────────────────────────────
  { id: "p1", name: "Big Boy Zooka JNR90", price: "R12,999", priceNumeric: 12999, category: "pit-bikes", image: img("big-boy-zooka-jnr90"), slug: "big-boy-zooka-jnr90", inStock: true, badges: ["Popular Commuter"] },
  { id: "p2", name: "Big Boy RFZ125J", price: "R16,999", priceNumeric: 16999, category: "pit-bikes", image: img("big-boy-rfz125j"), slug: "big-boy-rfz125j", inStock: true, badges: ["New Arrival"] },

  // ─── Quads / ATVs ────────────────────────────────────────────
  { id: "q1", name: "Big Boy Puma 110", price: "R13,499", priceNumeric: 13499, category: "quads", image: img("big-boy-puma-110"), slug: "big-boy-puma-110", inStock: true, badges: ["Best Seller"] },
  { id: "q2", name: "Big Boy CRX 110", price: "R18,499", priceNumeric: 18499, category: "quads", image: img("big-boy-crx-110"), slug: "big-boy-crx-110", inStock: true, badges: [] },
  { id: "q3", name: "Big Boy Roamer 180", price: "R37,499", priceNumeric: 37499, category: "quads", image: img("big-boy-roamer-180"), slug: "big-boy-roamer-180", inStock: true, badges: ["Workshop Favourite"] },
  { id: "q4", name: "Linhai Rustler M170", price: "R43,950", priceNumeric: 43950, category: "quads", image: img("linhai-rustler-m170"), slug: "linhai-rustler-m170", inStock: true, badges: [] },
  { id: "q5", name: "Big Boy Tracker 250 4x2", price: "R49,999", priceNumeric: 49999, category: "quads", image: img("big-boy-tracker-250-4x2"), slug: "big-boy-tracker-250-4x2", inStock: true, badges: ["Limited"] },

  // ─── Utility ─────────────────────────────────────────────────
  { id: "u1", name: "Big Boy Elec-Trike 800W", price: "R19,999", priceNumeric: 19999, category: "utility", image: img("big-boy-elec-trike-800w"), slug: "big-boy-elec-trike-800w", inStock: true, badges: ["Fleet Ready"] },
  { id: "u2", name: "Gomoto Loader 200", price: "R42,999", priceNumeric: 42999, category: "utility", image: img("gomoto-loader-200"), slug: "gomoto-loader-200", inStock: true, badges: ["Fleet Ready"] },
  { id: "u3", name: "Big Boy Eco-Runner 2200W", price: "R99,999", priceNumeric: 99999, category: "utility", image: img("big-boy-eco-runner-2200w"), slug: "big-boy-eco-runner-2200w", inStock: true, badges: ["New Arrival", "Fleet Ready"] },

  // ─── Electric ────────────────────────────────────────────────
  { id: "e1", name: "Big Boy D-Lite E 3000W (Electric)", price: "R34,999", priceNumeric: 34999, category: "electric", image: img("big-boy-d-lite-e-3000w"), slug: "big-boy-d-lite-e-3000w-electric", inStock: true, badges: ["New Arrival"] },
  { id: "e2", name: "Big Boy Cargo E-Trike 2200W Lithium", price: "R52,999", priceNumeric: 52999, category: "electric", image: img("big-boy-cargo-e-trike-2200w-lithium"), slug: "big-boy-cargo-e-trike-2200w-lithium", inStock: true, badges: ["Fleet Ready", "New Arrival"] },
];

// ─── Helpers ─────────────────────────────────────────────────
export function productsByCategory(category: Product["category"]) {
  return products.filter((p) => p.category === category);
}

export function categoryStats(category: Product["category"]) {
  const list = productsByCategory(category);
  if (list.length === 0) return { count: 0, fromPrice: null as string | null };
  const min = Math.min(...list.map((p) => p.priceNumeric));
  const fromPrice = `R${min.toLocaleString("en-ZA")}`;
  return { count: list.length, fromPrice };
}
