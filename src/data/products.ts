export interface Product {
  id: string;
  name: string;
  price: string;
  category: "scooters" | "motorcycles" | "commercial" | "pit-bikes" | "quads" | "utility" | "electric";
  image: string;
  slug: string;
  description?: string;
}

export const products: Product[] = [
  // Scooters
  {
    id: "s1",
    name: "Big Boy D-Lite 125",
    price: "R18,999",
    category: "scooters",
    image: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/D-LITE-125-2.jpg",
    slug: "big-boy-d-lite-125"
  },
  {
    id: "s2",
    name: "Big Boy Nexus 125",
    price: "R19,999",
    category: "scooters",
    image: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/NEXUS-125-1.jpg",
    slug: "big-boy-nexus-125"
  },
  {
    id: "s3",
    name: "Big Boy CrossOver 150X",
    price: "R20,499",
    category: "scooters",
    image: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/CROSSOVER-150X-1.jpg",
    slug: "big-boy-crossover-150x"
  },
  {
    id: "s4",
    name: "Big Boy Adventure 125RS",
    price: "R20,999",
    category: "scooters",
    image: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/ADVENTURE-125RS-1.jpg",
    slug: "big-boy-adventure-125rs"
  },
  {
    id: "s5",
    name: "Big Boy Adventure 150RS",
    price: "R20,999",
    category: "scooters",
    image: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/ADVENTURE-150RS-1.jpg",
    slug: "big-boy-adventure-150rs"
  },
  {
    id: "s6",
    name: "Big Boy Revival 125/150cc",
    price: "R22,499",
    category: "scooters",
    image: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/REVIVAL-125-1.jpg",
    slug: "big-boy-revival-125-150cc"
  },
  {
    id: "s7",
    name: "Big Boy Slingshot 125",
    price: "R22,999",
    category: "scooters",
    image: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/SLINGSHOT-125-1.jpg",
    slug: "big-boy-slingshot-125"
  },
  {
    id: "s8",
    name: "Big Boy D-Lite E 3000W",
    price: "R34,999",
    category: "scooters",
    image: "https://bigboyfourways.co.za/wp-content/uploads/2026/01/D-Lite-E-3000W.png",
    slug: "big-boy-d-lite-e-3000w"
  },

  // Motorcycles
  {
    id: "m1",
    name: "Big Boy Velocity 150",
    price: "R16,799",
    category: "motorcycles",
    image: "https://bigboyfourways.co.za/wp-content/uploads/2024/09/Big%20Boy%20Velocity%20150%20Update.png",
    slug: "big-boy-velocity-150"
  },
  {
    id: "m2",
    name: "Big Boy Velocity 175 Cargo",
    price: "R18,499",
    category: "motorcycles",
    image: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/VELOCITY-175-CARGO-1.jpg",
    slug: "big-boy-velocity-175-cargo"
  },
  {
    id: "m3",
    name: "Big Boy Velocity 200",
    price: "R20,999",
    category: "motorcycles",
    image: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/VELOCITY-200-1.jpg",
    slug: "big-boy-velocity-200"
  },
  {
    id: "m4",
    name: "Big Boy Superlight 125",
    price: "R20,999",
    category: "motorcycles",
    image: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/SUPERLIGHT-125-1.jpg",
    slug: "big-boy-superlight-125"
  },
  {
    id: "m5",
    name: "Big Boy Superlight 200",
    price: "R22,999",
    category: "motorcycles",
    image: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/SUPERLIGHT-200-1.jpg",
    slug: "big-boy-superlight-200"
  },
  {
    id: "m6",
    name: "Big Boy Pacer 200",
    price: "R22,999",
    category: "motorcycles",
    image: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/PACER-200-1.jpg",
    slug: "big-boy-pacer-200"
  },
  {
    id: "m7",
    name: "Big Boy TSR 125",
    price: "R26,999",
    category: "motorcycles",
    image: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/TSR-125-1.jpg",
    slug: "big-boy-tsr-125"
  },
  {
    id: "m8",
    name: "Big Boy TSR 250",
    price: "R29,999",
    category: "motorcycles",
    image: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/TSR-250-1.jpg",
    slug: "big-boy-tsr-250"
  },
  {
    id: "m9",
    name: "Big Boy Mustang 250",
    price: "R36,999",
    category: "motorcycles",
    image: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/MUSTANG-250-1.jpg",
    slug: "big-boy-mustang-250"
  },

  // Commercial
  {
    id: "c1",
    name: "Big Boy Velocity 150cc Commercial",
    price: "R16,799",
    category: "commercial",
    image: "https://bigboyfourways.co.za/wp-content/uploads/2024/09/Big%20Boy%20Velocity%20150%20Update.png",
    slug: "big-boy-velocity-150cc-commercial"
  },
  {
    id: "c2",
    name: "Big Boy Velocity 150 Cargo",
    price: "R17,299",
    category: "commercial",
    image: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/VELOCITY-175-CARGO-1.jpg",
    slug: "big-boy-velocity-150-cargo"
  },
  {
    id: "c3",
    name: "Big Boy Commercial 200cc",
    price: "R20,999",
    category: "commercial",
    image: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/VELOCITY-200-1.jpg",
    slug: "big-boy-commercial-200cc"
  },

  // Pit Bikes
  {
    id: "p1",
    name: "Big Boy Zooka JNR90",
    price: "R12,999",
    category: "pit-bikes",
    image: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/TSR-125-1.jpg",
    slug: "big-boy-zooka-jnr90"
  },
  {
    id: "p2",
    name: "Big Boy RFZ125J",
    price: "R16,999",
    category: "pit-bikes",
    image: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/TSR-125-1.jpg",
    slug: "big-boy-rfz125j"
  },

  // Quads
  {
    id: "q1",
    name: "Big Boy Puma 110",
    price: "R13,499",
    category: "quads",
    image: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/Roamer-180-1.jpg",
    slug: "big-boy-puma-110"
  },
  {
    id: "q2",
    name: "Big Boy CRX 110",
    price: "R18,499",
    category: "quads",
    image: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/Roamer-180-1.jpg",
    slug: "big-boy-crx-110"
  },
  {
    id: "q3",
    name: "Big Boy Roamer 180",
    price: "R37,499",
    category: "quads",
    image: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/Roamer-180-1.jpg",
    slug: "big-boy-roamer-180"
  },
  {
    id: "q4",
    name: "Linhai Rustler M170",
    price: "R43,950",
    category: "quads",
    image: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/Roamer-180-1.jpg",
    slug: "linhai-rustler-m170"
  },
  {
    id: "q5",
    name: "Big Boy Tracker 250 4x2",
    price: "R49,999",
    category: "quads",
    image: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/Roamer-180-1.jpg",
    slug: "big-boy-tracker-250-4x2"
  },

  // Utility
  {
    id: "u1",
    name: "Big Boy Elec-Trike 800W",
    price: "R19,999",
    category: "utility",
    image: "https://bigboyfourways.co.za/wp-content/uploads/2026/01/D-Lite-E-3000W.png",
    slug: "big-boy-elec-trike-800w"
  },
  {
    id: "u2",
    name: "Gomoto Loader 200",
    price: "R42,999",
    category: "utility",
    image: "https://bigboyfourways.co.za/wp-content/uploads/2023/06/VELOCITY-175-CARGO-1.jpg",
    slug: "gomoto-loader-200"
  },
  {
    id: "u3",
    name: "Big Boy Eco-Runner 2200W",
    price: "R99,999",
    category: "utility",
    image: "https://bigboyfourways.co.za/wp-content/uploads/2026/01/big-boy-Eco-Runner-2200W_result.png",
    slug: "big-boy-eco-runner-2200w"
  },

  // Electric
  {
    id: "e1",
    name: "Big Boy D-Lite E 3000W",
    price: "R34,999",
    category: "electric",
    image: "https://bigboyfourways.co.za/wp-content/uploads/2026/01/D-Lite-E-3000W.png",
    slug: "big-boy-d-lite-e-3000w"
  },
  {
    id: "e2",
    name: "Big Boy Cargo E-Trike 2200W Lithium",
    price: "R52,999",
    category: "electric",
    image: "https://bigboyfourways.co.za/wp-content/uploads/2026/01/D-Lite-E-3000W.png",
    slug: "big-boy-cargo-e-trike-2200w-lithium"
  }
];
