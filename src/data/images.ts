/**
 * Central image catalogue. Every image used on the site routes through here.
 *
 * NOTE: Many product photos from Big Boy's CDN have been removed upstream.
 * For models without a working product photo we use category-appropriate
 * licensed stock photography. Replace with real product shots when supplied.
 */

const UNSPLASH = (id: string, w = 900) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

// --- Stock photography pool (Unsplash) ---
const STOCK = {
  motorcycleLifestyle: UNSPLASH("1558981806-ec527fa84c39", 1600),
  motorcycleStudio: UNSPLASH("1568772585407-9361f9bf3a87"),
  motorcycleCommuter: UNSPLASH("1591637333184-19aa84b3e01f"),
  motorcycleNight: UNSPLASH("1558981359-219d6364c9c8"),
  motorcycleCruiser: UNSPLASH("1558981403-c5f9899a28bc"),
  motorcycleAction: UNSPLASH("1571068316344-75bc76f77890"),
  motorcycleSport: UNSPLASH("1605236453806-6ff36851218e"),
  motorcycleHelmet: UNSPLASH("1547549082-6bc09f2049ae"),
  scooterUrban: UNSPLASH("1517649763962-0c623066013b"),
  motorcycleDesert: UNSPLASH("1503376780353-7e6692767b70"),
  motorcycleMountains: UNSPLASH("1542315192-1f61a1792f33"),
  motorcycleGarage: UNSPLASH("1581244277943-fe4a9c777189"),
  motorcycleStreet: UNSPLASH("1622185135505-2d795003994a"),
  motorcycleHero: UNSPLASH("1591768793355-74d04bb6608f", 1600),
  motorcycleDistance: UNSPLASH("1469854523086-cc02fe5d8800", 1600),
  motorcycleParts: UNSPLASH("1564135624576-c5c88640f235"),
  motorcycleGroup: UNSPLASH("1444491741275-3747c53c99b4"),
} as const;

// --- Working Big Boy CDN images (a handful survived) ---
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
  // Scooters
  "big-boy-d-lite-125": BIGBOY.dLite125,
  "big-boy-nexus-125": BIGBOY.dLite125,
  "big-boy-crossover-150x": STOCK.scooterUrban,
  "big-boy-adventure-125rs": STOCK.scooterUrban,
  "big-boy-adventure-150rs": STOCK.scooterUrban,
  "big-boy-revival-125-150cc": STOCK.scooterUrban,
  "big-boy-slingshot-125": STOCK.scooterUrban,
  "big-boy-d-lite-e-3000w": STOCK.motorcycleHelmet,

  // Motorcycles
  "big-boy-velocity-150": BIGBOY.velocity150,
  "big-boy-velocity-175-cargo": STOCK.motorcycleCommuter,
  "big-boy-velocity-200": BIGBOY.velocity150,
  "big-boy-superlight-125": STOCK.motorcycleCommuter,
  "big-boy-superlight-200": STOCK.motorcycleCommuter,
  "big-boy-pacer-200": STOCK.motorcycleAction,
  "big-boy-tsr-125": STOCK.motorcycleSport,
  "big-boy-tsr-250": STOCK.motorcycleSport,
  "big-boy-mustang-250": STOCK.motorcycleCruiser,

  // Commercial
  "big-boy-velocity-150cc-commercial": BIGBOY.velocity150,
  "big-boy-velocity-150-cargo": STOCK.motorcycleCommuter,
  "big-boy-commercial-200cc": BIGBOY.velocity150,

  // Pit Bikes
  "big-boy-zooka-jnr90": STOCK.motorcycleDesert,
  "big-boy-rfz125j": STOCK.motorcycleDesert,

  // Quads
  "big-boy-puma-110": STOCK.motorcycleMountains,
  "big-boy-crx-110": STOCK.motorcycleMountains,
  "big-boy-roamer-180": STOCK.motorcycleMountains,
  "linhai-rustler-m170": STOCK.motorcycleMountains,
  "big-boy-tracker-250-4x2": STOCK.motorcycleMountains,

  // Utility
  "big-boy-elec-trike-800w": BIGBOY.ecoRunner,
  "gomoto-loader-200": STOCK.motorcycleStreet,
  "big-boy-eco-runner-2200w": BIGBOY.ecoRunner,

  // Electric
  "big-boy-cargo-e-trike-2200w-lithium": BIGBOY.ecoRunner,
};

// --- Category cover images (used on home + bikes index) ---
export const CATEGORY_IMAGES = {
  commuters: STOCK.motorcycleCommuter,
  scooters: BIGBOY.dLite125,
  commercial: STOCK.motorcycleStreet,
  electric: BIGBOY.ecoRunner,
  "on-off-road": STOCK.motorcycleDesert,
  atvs: STOCK.motorcycleMountains,
  parts: STOCK.motorcycleParts,
  workshop: STOCK.motorcycleGarage,
  motorcycles: STOCK.motorcycleCommuter,
  "pit-bikes": STOCK.motorcycleDesert,
  quads: STOCK.motorcycleMountains,
  utility: BIGBOY.ecoRunner,
} as const;

// --- Lifestyle / hero / atmosphere ---
export const SITE_IMAGES = {
  heroPoster: STOCK.motorcycleLifestyle,
  heroAlt: STOCK.motorcycleHero,
  workshop: STOCK.motorcycleGarage,
  deliveryRider: STOCK.motorcycleStreet,
  partsCounter: STOCK.motorcycleParts,
  groupRide: STOCK.motorcycleGroup,
  highway: STOCK.motorcycleDistance,
  desert: STOCK.motorcycleDesert,
  showroom: STOCK.motorcycleNight,
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
