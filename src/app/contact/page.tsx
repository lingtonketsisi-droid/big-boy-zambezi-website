import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  ADDRESS_LINE_3,
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL,
  HOURS,
  waLink,
} from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact Us | Big Boy Zambezi",
  description: "Get in touch with Big Boy Zambezi. Visit us in Sinoville, Pretoria, or send us a message.",
};

export default function ContactPage() {
  return (
    <div className="container" style={{ padding: "4rem 1.5rem" }}>
      <h1 style={{ fontFamily: "var(--font-racing)", fontStyle: "italic", fontWeight: 900, fontSize: "clamp(2.25rem, 5vw, 3.25rem)", color: "var(--accent-red)", textTransform: "uppercase", marginBottom: "1rem", lineHeight: 1 }}>
        Contact <span style={{ color: "#111" }}>Us</span>
      </h1>
      <p style={{ color: "#555", fontSize: "1.05rem", maxWidth: "720px", lineHeight: 1.6, marginBottom: "3rem" }}>
        Got a question about a bike, a service or a custom job? Send us a message — or just WhatsApp us, that&apos;s usually the fastest.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "3rem",
      }}>
        <div>
          <div style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "1.35rem", marginBottom: "1.25rem", textTransform: "uppercase" }}>Our Store</h2>
            <p style={{ color: "#222", lineHeight: 1.8, fontSize: "1rem" }}>
              <strong>Address:</strong><br />
              {ADDRESS_LINE_1}<br />
              {ADDRESS_LINE_2}<br />
              {ADDRESS_LINE_3}
            </p>
            <p style={{ color: "#222", lineHeight: 1.8, fontSize: "1rem", marginTop: "1rem" }}>
              <strong>Phone:</strong> <a href={`tel:${PHONE_TEL}`} style={{ color: "var(--accent-red)", fontWeight: 700 }}>{PHONE_DISPLAY}</a><br />
              <strong>WhatsApp:</strong> <a href={waLink()} target="_blank" rel="noopener noreferrer" style={{ color: "#25D366", fontWeight: 700 }}>{PHONE_DISPLAY}</a><br />
              <strong>Email:</strong> <a href={`mailto:${EMAIL}`} style={{ color: "var(--accent-red)", fontWeight: 700 }}>{EMAIL}</a>
            </p>
          </div>

          <div style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "1.35rem", marginBottom: "1.25rem", textTransform: "uppercase" }}>Store Hours</h2>
            <ul style={{ color: "#222", lineHeight: 2 }}>
              {HOURS.map((h) => (
                <li key={h.day} style={{ display: "flex", justifyContent: "space-between", maxWidth: "320px", borderBottom: "1px dashed #ddd", padding: "0.2rem 0" }}>
                  <span>{h.day}</span><span style={{ fontWeight: 700 }}>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{
            width: "100%",
            height: "320px",
            overflow: "hidden",
            border: "1px solid #ddd",
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.1557342677843!2d28.2327572!3d-25.6826667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9566378415d8f7%3A0x6d9f5a77c7f99999!2s114%20Sefako%20Makgatho%20Dr%2C%20Sinoville%2C%20Pretoria%2C%200129!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Big Boy Zambezi location"
            ></iframe>
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: "1.35rem", marginBottom: "1.25rem", textTransform: "uppercase" }}>Send a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
