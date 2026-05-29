import Link from "next/link";
import { waLink } from "@/data/contact";

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 70%, #4a0d10 100%)",
        color: "#fff",
        padding: "4rem 1.5rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "640px" }}>
        <p
          style={{
            color: "var(--accent-red)",
            fontFamily: "var(--font-racing)",
            fontStyle: "italic",
            fontWeight: 700,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            fontSize: "0.85rem",
            marginBottom: "0.75rem",
          }}
        >
          Off The Road
        </p>
        <h1
          style={{
            fontFamily: "var(--font-racing)",
            fontStyle: "italic",
            fontWeight: 900,
            fontSize: "clamp(3rem, 8vw, 5rem)",
            lineHeight: 0.95,
            textTransform: "uppercase",
            color: "#fff",
            marginBottom: "1rem",
          }}
        >
          404 — PAGE NOT FOUND
        </h1>
        <p style={{ color: "#ddd", lineHeight: 1.65, marginBottom: "2rem" }}>
          Looks like that page took a different route. Head back to the showroom or get in touch on WhatsApp and we&apos;ll point you the right way.
        </p>
        <div style={{ display: "flex", gap: "0.85rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/"
            style={{
              display: "inline-block",
              padding: "0.95rem 1.7rem",
              fontFamily: "var(--font-racing)",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "0.95rem",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              background: "var(--accent-red)",
              color: "#fff",
              border: "2px solid var(--accent-red)",
            }}
          >
            Back to Home
          </Link>
          <a
            href={waLink("Hi Big Boy Zambezi, I couldn't find what I was looking for on the site.")}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "0.95rem 1.7rem",
              fontFamily: "var(--font-racing)",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "0.95rem",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              background: "#25D366",
              color: "#fff",
              border: "2px solid #25D366",
            }}
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
