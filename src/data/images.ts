/**
 * Central image catalogue. Every image used on the site routes through here.
 *
 * All Unsplash/stock photography references have been audited and replaced
 * with official SA Motorcycles product page image assets.
 */

const BIGBOY = {
  velocity150: "https://bigboyfourways.co.za/wp-content/uploads/2024/09/Big%20Boy%20Velocity%20150%20Update.png",
  dLite125: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/D-LITE-125-2.jpg",
  ecoRunner: "https://bigboyfourways.co.za/wp-content/uploads/2026/01/big-boy-Eco-Runner-2200W_result.png",
  logoBigBoy: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/Bigboy-logo-gry-300x168.png",
  logoPolaris: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/polaris-logo-gry-300x168.png",
  logoLinhai: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/Linhai-logo-gry-300x168.png",
  logoAtul: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/Atul-logo-gry-300x169.png",
} as const;

// --- Product → image map (by slug) ---
// Keys must match Product.slug entries in src/data/products.ts
export const PRODUCT_IMAGES: Record<string, string> = {
  "big-boy-d-lite-125": "https://content.storefront7.co.za/stores/za.co.storefront7.samotorcycles/products/d-lite-125/pictures/d-lite125-2-jyr4_6dmo.webp",
  "big-boy-nexus-125": "https://content.storefront7.co.za/stores/za.co.storefront7.samotorcycles/products/nexus-125/pictures/nexus-11_l31d.jpg",
  "big-boy-crossover-150x": "https://content.storefront7.co.za/stores/za.co.storefront7.samotorcycles/products/crossover-150x/pictures/crossover150-2_qfjk.jpg",
  "big-boy-adventure-125rs": "https://content.storefront7.co.za/stores/za.co.storefront7.samotorcycles/products/adventure-125rs/pictures/adventure-rs-2_fv0e.jpg",
  "big-boy-adventure-150rs": "https://content.storefront7.co.za/stores/za.co.storefront7.samotorcycles/products/adventure-150rs/pictures/adventure-rs-8_8h0h.jpg",
  "big-boy-revival-125-150cc": "https://content.storefront7.co.za/stores/za.co.storefront7.samotorcycles/products/revival-150/pictures/1-revival-150_8a3g.webp",
  "big-boy-slingshot-125": "https://content.storefront7.co.za/stores/za.co.storefront7.samotorcycles/products/slingshot-125f/pictures/slingshot-125f-1-1_o9ox.webp",
  "big-boy-d-lite-e-3000w": "https://content.storefront7.co.za/stores/za.co.storefront7.samotorcycles/products/d-lite-e-3000w/pictures/d-lite-e-3000w-01_h4y5.jpg",
  "big-boy-velocity-150": "https://content.storefront7.co.za/stores/za.co.storefront7.samotorcycles/products/velocity-150/pictures/01_8p6j.jpg",
  "big-boy-velocity-175-cargo": "https://content.storefront7.co.za/stores/za.co.storefront7.samotorcycles/products/velocity-175-cargo/pictures/vel-175-cargo-05_gek3.jpg",
  "big-boy-velocity-200": "https://content.storefront7.co.za/stores/za.co.storefront7.samotorcycles/products/velocity-200/pictures/velocity-200-2_jqez.webp",
  "big-boy-superlight-125": "https://content.storefront7.co.za/stores/za.co.storefront7.samotorcycles/products/superlight-125/pictures/superlight-125-7_0297.webp",
  "big-boy-superlight-200": "https://content.storefront7.co.za/stores/za.co.storefront7.samotorcycles/products/superlight-200/pictures/superlight-250-8_0c9e.webp",
  "big-boy-pacer-200": "https://content.storefront7.co.za/stores/za.co.storefront7.samotorcycles/products/pacer-200/pictures/pacer-200-01_5yfl.jpg",
  "big-boy-tsr-125": "https://content.storefront7.co.za/stores/za.co.storefront7.samotorcycles/products/tsr125/pictures/tsr-125-3_ne2t.jpg",
  "big-boy-tsr-250": "https://content.storefront7.co.za/stores/za.co.storefront7.samotorcycles/products/tsr250/pictures/tsr-25-1_k7iu.jpg",
  "big-boy-mustang-250": "https://content.storefront7.co.za/stores/za.co.storefront7.samotorcycles/products/mustang-250/pictures/mustang-250-1_hcjw.webp",
  "big-boy-velocity-150cc-commercial": "https://content.storefront7.co.za/stores/za.co.storefront7.samotorcycles/products/velocity-150-commercial/pictures/01_4n99.jpg",
  "big-boy-velocity-150-cargo": "https://content.storefront7.co.za/stores/za.co.storefront7.samotorcycles/products/velocity-150-cargo/pictures/01-bb-velocity-150-cargo_luo.webp",
  "big-boy-commercial-200cc": "https://content.storefront7.co.za/stores/za.co.storefront7.samotorcycles/products/velocity-200-commercial/pictures/velocity-200-commercial-1b_wfvc.webp",
  "big-boy-zooka-jnr90": "https://content.storefront7.co.za/stores/za.co.storefront7.samotorcycles/products/jnr90/pictures/jnr90-1a.jpg",
  "big-boy-rfz125j": "https://content.storefront7.co.za/stores/za.co.storefront7.samotorcycles/products/rfz125j/pictures/rfz125j-6_w3tf.jpg",
  "big-boy-puma-110": "https://content.storefront7.co.za/stores/za.co.storefront7.samotorcycles/products/monster-puma-110/pictures/monster-puma-110-1.jpg",
  "big-boy-crx-110": "https://content.storefront7.co.za/stores/za.co.storefront7.samotorcycles/products/monster-crx110/pictures/monster-crx110-3.jpg",
  "big-boy-roamer-180": "https://content.storefront7.co.za/stores/za.co.storefront7.samotorcycles/products/monster-roamer-180f/pictures/new-monster-roamer-180f-01_uhgk.jpg",
  "linhai-rustler-m170": "",
  "big-boy-tracker-250-4x2": "https://content.storefront7.co.za/stores/za.co.storefront7.samotorcycles/products/tracker-250-4x2/pictures/tracker250-1_407j.jpg",
  "big-boy-elec-trike-800w": "https://content.storefront7.co.za/stores/za.co.storefront7.samotorcycles/products/elec-trike-800w-electric-utv/pictures/electrike-1_1dda.jpg",
  "gomoto-loader-200": "https://content.storefront7.co.za/stores/za.co.storefront7.samotorcycles/products/loader-200/pictures/01-loader-200-q5v2_4g52.webp",
  "big-boy-eco-runner-2200w": "https://content.storefront7.co.za/stores/za.co.storefront7.samotorcycles/products/eco-runner-2200w/pictures/02_wigp.jpg",
  "big-boy-d-lite-e-3000w-electric": "https://content.storefront7.co.za/stores/za.co.storefront7.samotorcycles/products/d-lite-e-3000w/pictures/d-lite-e-3000w-01_h4y5.jpg",
  "big-boy-cargo-e-trike-2200w-lithium": "https://content.storefront7.co.za/stores/za.co.storefront7.samotorcycles/products/monster-cargo-e-trike-2200w-lithium/pictures/02_2dwq.jpg",
};

// --- Category cover images (used on home + bikes index) ---
export const CATEGORY_IMAGES = {
  commuters: PRODUCT_IMAGES["big-boy-velocity-150"],
  scooters: PRODUCT_IMAGES["big-boy-d-lite-125"],
  commercial: PRODUCT_IMAGES["big-boy-velocity-150-cargo"],
  electric: PRODUCT_IMAGES["big-boy-eco-runner-2200w"],
  "on-off-road": PRODUCT_IMAGES["big-boy-tsr-250"],
  atvs: PRODUCT_IMAGES["big-boy-roamer-180"],
  parts: "",
  workshop: "",
  motorcycles: PRODUCT_IMAGES["big-boy-velocity-150"],
  "pit-bikes": PRODUCT_IMAGES["big-boy-rfz125j"],
  quads: PRODUCT_IMAGES["big-boy-roamer-180"],
  utility: PRODUCT_IMAGES["big-boy-eco-runner-2200w"],
} as const;

// --- Lifestyle / hero / atmosphere ---
export const SITE_IMAGES = {
  heroPoster: PRODUCT_IMAGES["big-boy-tsr-250"],
  heroAlt: PRODUCT_IMAGES["big-boy-superlight-200"],
  workshop: "",
  deliveryRider: PRODUCT_IMAGES["big-boy-velocity-150-cargo"],
  partsCounter: "",
  groupRide: "",
  highway: "",
  desert: "",
  showroom: "",
  // brand strip
  brandBigBoy: BIGBOY.logoBigBoy,
  brandPolaris: BIGBOY.logoPolaris,
  brandLinhai: BIGBOY.logoLinhai,
  brandAtul: BIGBOY.logoAtul,
};

// Branded fallback (red panel with Big Boy mark) — replaces "Image Unavailable"
export const BRANDED_FALLBACK =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0a0a0a"/>
          <stop offset="60%" stop-color="#1a1a1a"/>
          <stop offset="100%" stop-color="#3d0c10"/>
        </linearGradient>
      </defs>
      <rect width="600" height="450" fill="url(#g)"/>
      <g transform="translate(300 215)" text-anchor="middle" font-family="Inter,Arial,sans-serif">
        <text y="-18" font-size="44" font-weight="900" font-style="italic" fill="#e31e24" letter-spacing="-1">BIG BOY</text>
        <text y="22" font-size="18" font-weight="700" letter-spacing="10" fill="#ffffff">ZAMBEZI</text>
        <text y="68" font-size="11" letter-spacing="4" fill="#888888">PHOTO COMING SOON</text>
      </g>
    </svg>`
  );
