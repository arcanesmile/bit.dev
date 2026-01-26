"use client";

import { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("CONTACT FORM ERROR:", err);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);

      // Clear status message after 3 seconds
      setTimeout(() => setStatus(""), 3000);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      {/* Name */}
      <div className="form-group">
        <label className="form-label">Name</label>
        <input
          className="form-input"
          required
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          placeholder="Enter your name"
        />
      </div>

      {/* Email */}
      <div className="form-group">
        <label className="form-label">Email</label>
        <input
          className="form-input"
          type="email"
          required
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          placeholder="Enter your email"
        />
      </div>

      {/* Message */}
      <div className="form-group">
        <label className="form-label">Message</label>
        <textarea
          className="form-textarea"
          required
          rows={5}
          value={form.message}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
          placeholder="Enter your message here..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="submit-btn"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {/* Status Message */}
      {status && (
        <p
          className={`form-status ${
            status.includes("successfully")
              ? "success"
              : status.includes("Sending")
              ? "sending"
              : "error"
          }`}
        >
          {status}
        </p>
      )}
    </form>
  );
}
