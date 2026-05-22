import type { Metadata } from "next";
import { Inter, Exo_2 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const exo2 = Exo_2({ 
  subsets: ["latin"], 
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-exo2"
});

export const metadata: Metadata = {
  title: "Big Boy Zambezi | Motorcycle Dealership Pretoria",
  description: "Big Boy Zambezi offers a wide range of motorcycles, scooters, quads, and commercial bikes. Visit us at 114 Sefako Makgatho Drive, Sinoville, Montana, Pretoria.",
  openGraph: {
    title: "Big Boy Zambezi",
    description: "Your local Big Boy motorcycle dealership in Pretoria.",
    type: "website",
    locale: "en_ZA",
    url: "https://bigboyzambezi.co.za",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${exo2.variable}`} suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Navbar />
        <main style={{ minHeight: "calc(100vh - 80px)" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
