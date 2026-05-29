import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ContactBlock from "@/components/ContactBlock";
import CTASection from "@/components/CTASection";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact Us | Big Boy Zambezi",
  description:
    "Contact Big Boy Zambezi — motorcycle sales, service, parts and delivery bike solutions in Sinoville, Pretoria. WhatsApp, call or visit our showroom.",
};

export default function ContactPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.heroEyebrow}>Get In Touch</span>
          <h1 className={styles.heroTitle}>CONTACT <span>BIG BOY ZAMBEZI</span></h1>
          <p className={styles.heroSubtitle}>
            Need help with your bike? Looking for parts? Want to brand your delivery fleet? Send us a message and we&apos;ll come right back to you.
          </p>
        </div>
      </section>

      <section className={styles.body}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.infoCol}>
              <h2 className={styles.subTitle}>Showroom &amp; Workshop</h2>
              <ContactBlock whatsappMessage="Hi Big Boy Zambezi, I'd like to enquire." />

              <div className={styles.mapWrap}>
                <iframe
                  title="Big Boy Zambezi location map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.1557342677843!2d28.2327572!3d-25.6826667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9566378415d8f7%3A0x6d9f5a77c7f99999!2s114%20Sefako%20Makgatho%20Dr%2C%20Sinoville%2C%20Pretoria%2C%200129!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className={styles.formCol}>
              <h2 className={styles.subTitle}>Send An Enquiry</h2>
              <p className={styles.formIntro}>
                Tell us what you need — sales, service, repairs, parts, branding or a delivery-bike quote.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="NEED HELP WITH YOUR BIKE?"
        subtitle="Contact Big Boy Zambezi today — we'll come back to you on WhatsApp."
        whatsappMessage="Hi Big Boy Zambezi, I'd like to enquire."
        primaryHref="/services"
        primaryLabel="View Services"
      />
    </>
  );
}
