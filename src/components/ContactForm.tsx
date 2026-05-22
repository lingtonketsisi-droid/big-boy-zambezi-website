"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./ContactForm.module.css";

function buildInitialMessage(bikeName: string | null): string {
  if (!bikeName) return "";
  return `I am interested in the ${bikeName}. Please provide more information.`;
}

function ContactFormInner() {
  const searchParams = useSearchParams();
  const bikeName = searchParams.get("bike");

  const [trackedBike, setTrackedBike] = useState(bikeName);
  const [formData, setFormData] = useState(() => ({
    name: "",
    phone: "",
    email: "",
    message: buildInitialMessage(bikeName),
  }));
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (bikeName !== trackedBike) {
    setTrackedBike(bikeName);
    setFormData((prev) => ({
      ...prev,
      message: buildInitialMessage(bikeName) || prev.message,
    }));
  }

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  return (
    <form
      className={styles.form}
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        if (validate()) {
          setSubmitted(true);
          setFormData({ name: "", phone: "", email: "", message: "" });
          window.setTimeout(() => setSubmitted(false), 5000);
        }
      }}
    >
      {submitted && (
        <div className={styles.successMessage}>
          Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
        </div>
      )}

      <div className="form-group">
        <label className="form-label" htmlFor="name">Full Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          className={`form-control ${errors.name ? "error" : ""}`}
          placeholder="e.g. John Doe"
          value={formData.name}
          onChange={handleChange}
          autoComplete="name"
        />
        {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="form-control"
          placeholder="e.g. 012 345 6789"
          value={formData.phone}
          onChange={handleChange}
          autoComplete="tel"
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="email">Email Address *</label>
        <input
          type="email"
          id="email"
          name="email"
          className={`form-control ${errors.email ? "error" : ""}`}
          placeholder="e.g. john@example.com"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
        />
        {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          className={`form-control ${errors.message ? "error" : ""}`}
          placeholder="How can we help you?"
          value={formData.message}
          onChange={handleChange}
          rows={5}
        ></textarea>
        {errors.message && <p className={styles.errorMessage}>{errors.message}</p>}
      </div>

      <button type="submit" className="btn-primary" style={{ width: "100%", padding: "1rem" }}>
        Send Message
      </button>
    </form>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div>Loading form...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}
