import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, Phone, Mail, Clock,
  Facebook, Instagram, Twitter, Linkedin,
  Send, MessageSquare, ChevronDown, CheckCircle2,
} from "lucide-react";
import heroImg from "../assets/a4ae143d316ad5d9e5e7a9a1636a2769.jpg";
import PageHero from "../components/PageHero";

/* ─────────────────────────────────────────
   Floating Input
───────────────────────────────────────── */
const FloatingInput = ({ label, name, value, onChange, type = "text", required = false }) => {
  const [focused, setFocused] = useState(false);
  const lifted = focused || value !== "";
  return (
    <div className="relative w-full">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder=" "
        style={{
          width: "100%",
          padding: "22px 16px 8px",
          border: `1.5px solid ${focused ? "#E8620A" : "#E2E8F0"}`,
          borderRadius: "12px",
          fontSize: "14px",
          color: "#1E293B",
          background: focused ? "#fff" : "#F8FAFC",
          outline: "none",
          transition: "all 0.2s",
          boxShadow: focused ? "0 0 0 3px rgba(232,98,10,0.1)" : "none",
          boxSizing: "border-box",
        }}
      />
      <span style={{
        position: "absolute",
        left: "16px",
        top: lifted ? "7px" : "50%",
        transform: lifted ? "none" : "translateY(-50%)",
        fontSize: lifted ? "10px" : "14px",
        color: lifted ? "#E8620A" : "#94A3B8",
        fontWeight: 600,
        pointerEvents: "none",
        transition: "all 0.2s",
        letterSpacing: lifted ? "0.05em" : "normal",
      }}>
        {label}{required && <span style={{ color: "#E8620A" }}> *</span>}
      </span>
    </div>
  );
};

/* ─────────────────────────────────────────
   Floating Textarea
───────────────────────────────────────── */
const FloatingTextarea = ({ label, name, value, onChange, rows = 4, required = false }) => {
  const [focused, setFocused] = useState(false);
  const lifted = focused || value !== "";
  return (
    <div className="relative w-full">
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder=" "
        style={{
          width: "100%",
          padding: "22px 16px 8px",
          border: `1.5px solid ${focused ? "#E8620A" : "#E2E8F0"}`,
          borderRadius: "12px",
          fontSize: "14px",
          color: "#1E293B",
          background: focused ? "#fff" : "#F8FAFC",
          outline: "none",
          resize: "none",
          transition: "all 0.2s",
          boxShadow: focused ? "0 0 0 3px rgba(232,98,10,0.1)" : "none",
          boxSizing: "border-box",
          fontFamily: "inherit",
        }}
      />
      <span style={{
        position: "absolute",
        left: "16px",
        top: lifted ? "7px" : "18px",
        fontSize: lifted ? "10px" : "14px",
        color: lifted ? "#E8620A" : "#94A3B8",
        fontWeight: 600,
        pointerEvents: "none",
        transition: "all 0.2s",
        letterSpacing: lifted ? "0.05em" : "normal",
      }}>
        {label}{required && <span style={{ color: "#E8620A" }}> *</span>}
      </span>
    </div>
  );
};

/* ─────────────────────────────────────────
   Floating Select
───────────────────────────────────────── */
const FloatingSelect = ({ label, name, value, onChange, options, required = false }) => {
  const [focused, setFocused] = useState(false);
  const lifted = focused || value !== "";
  return (
    <div className="relative w-full">
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          padding: "22px 36px 8px 16px",
          border: `1.5px solid ${focused ? "#E8620A" : "#E2E8F0"}`,
          borderRadius: "12px",
          fontSize: "14px",
          color: value ? "#1E293B" : "transparent",
          background: focused ? "#fff" : "#F8FAFC",
          outline: "none",
          appearance: "none",
          cursor: "pointer",
          transition: "all 0.2s",
          boxShadow: focused ? "0 0 0 3px rgba(232,98,10,0.1)" : "none",
          boxSizing: "border-box",
        }}
      >
        <option value="" disabled hidden></option>
        {options.map((opt) => (
          <option key={opt} value={opt} style={{ color: "#1E293B" }}>{opt}</option>
        ))}
      </select>
      <span style={{
        position: "absolute",
        left: "16px",
        top: lifted ? "7px" : "50%",
        transform: lifted ? "none" : "translateY(-50%)",
        fontSize: lifted ? "10px" : "14px",
        color: lifted ? "#E8620A" : "#94A3B8",
        fontWeight: 600,
        pointerEvents: "none",
        transition: "all 0.2s",
        letterSpacing: lifted ? "0.05em" : "normal",
      }}>
        {label}{required && <span style={{ color: "#E8620A" }}> *</span>}
      </span>
      <ChevronDown size={14} style={{
        position: "absolute", right: "14px", top: "50%",
        transform: "translateY(-50%)", color: "#94A3B8", pointerEvents: "none",
      }} />
    </div>
  );
};

/* ─────────────────────────────────────────
   Main Page
───────────────────────────────────────── */
const ContactPage = () => {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "",
    phone: "", company: "", subject: "", message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSent(true);
      setForm({ firstName: "", lastName: "", email: "", phone: "", company: "", subject: "", message: "" });
    }, 1200);
  };

  const contactItems = [
    { icon: Phone,  label: "Call Us",       value: "+91 99999 99999",    href: "tel:+919999999999" },
    { icon: Mail,   label: "Email Us",      value: "info@rapidengg.com", href: "mailto:info@rapidengg.com" },
    { icon: MapPin, label: "Visit Us",      value: "Delhi, India" },
    { icon: Clock,  label: "Office Hours",  value: "Mon–Sat, 9 AM – 6 PM" },
  ];

  const faqs = [
    { title: "Repair Enquiries",      body: "Include your equipment brand, model, and issue description for faster support." },
    { title: "Training Programmes",   body: "Let us know participant count and preferred training dates." },
    { title: "Emergency Breakdown",   body: "Call our hotline directly — we prioritise critical failures around the clock." },
  ];

  const socials = [
    { icon: Facebook,  href: "https://facebook.com/" },
    { icon: Instagram, href: "https://instagram.com/" },
    { icon: Twitter,   href: "https://x.com/" },
    { icon: Linkedin,  href: "https://linkedin.com/" },
  ];

  return (
    <div style={{ background: "#fff" }}>
      <PageHero
        title="Contact Us"
        subtitle="Reach out for repair quotes, technical queries, training enquiries, or partnership opportunities."
        bgImage={heroImg}
      />

      <section style={{ padding: "72px 0", background: "#F4F7FA" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>

          {/* ── Section header ── */}
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <span style={{
              display: "inline-block",
              fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "#E8620A",
              background: "rgba(232,98,10,0.08)", borderRadius: "100px",
              padding: "4px 14px", marginBottom: "14px",
            }}>
              Get in Touch
            </span>
            <h2 style={{
              fontSize: "clamp(26px, 5vw, 36px)", fontWeight: 700,
              color: "#0B3D4E", margin: "0 0 12px",
              fontFamily: "'Syne', sans-serif", lineHeight: 1.2,
            }}>
              We're here to help
            </h2>
            <p style={{ color: "#64748B", fontSize: "15px", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
              Our engineers respond within 24 business hours. For emergencies, call us directly.
            </p>
          </div>

          {/* ── Two-col grid ── */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            alignItems: "stretch",
          }}>

            {/* ── LEFT: Info panel ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ display: "flex", flexDirection: "column", gap: "16px", height: "100%" }}
            >
              {/* Contact card */}
              <div style={{
                background: "#0B3D4E",
                borderRadius: "20px",
                padding: "32px 28px",
                position: "relative",
                overflow: "hidden",
                flex: 1,
              }}>
                {/* Decorative circle */}
                <div style={{
                  position: "absolute", right: "-40px", bottom: "-40px",
                  width: "180px", height: "180px", borderRadius: "50%",
                  background: "rgba(232,98,10,0.12)",
                  pointerEvents: "none",
                }} />

                <p style={{
                  fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em",
                  textTransform: "uppercase", color: "#E8620A", marginBottom: "24px",
                }}>
                  Direct Contact
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  {contactItems.map(({ icon: Icon, label, value, href }) => (
                    <motion.div
                      key={label}
                      whileHover={{ x: 4 }}
                      style={{ display: "flex", alignItems: "center", gap: "14px" }}
                    >
                      <div style={{
                        width: "40px", height: "40px", borderRadius: "10px",
                        background: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                      }}>
                        <Icon size={16} style={{ color: "#F47A2A" }} />
                      </div>
                      <div>
                        <p style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "2px" }}>
                          {label}
                        </p>
                        {href ? (
                          <a href={href} style={{ fontSize: "13.5px", fontWeight: 600, color: "#fff", textDecoration: "none" }}>
                            {value}
                          </a>
                        ) : (
                          <p style={{ fontSize: "13.5px", fontWeight: 600, color: "rgba(255,255,255,0.88)", margin: 0 }}>
                            {value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social icons */}
                <div style={{
                  marginTop: "28px", paddingTop: "20px",
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  display: "flex", gap: "10px",
                }}>
                  {socials.map(({ icon: Icon, href }) => (
                    <motion.a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        width: "36px", height: "36px", borderRadius: "10px",
                        background: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "rgba(255,255,255,0.5)", textDecoration: "none",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "#E8620A"; e.currentTarget.style.color = "#fff"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
                    >
                      <Icon size={15} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* FAQ cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {faqs.map((faq, i) => (
                  <motion.div
                    key={faq.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.07 }}
                    whileHover={{ y: -3 }}
                    style={{
                      background: "#fff",
                      borderRadius: "14px",
                      padding: "16px 18px",
                      border: "1.5px solid #E8E8EE",
                      borderLeft: "4px solid #E8620A",
                      cursor: "default",
                      transition: "box-shadow 0.2s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.07)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
                  >
                    <p style={{ fontWeight: 700, color: "#0B3D4E", fontSize: "13px", marginBottom: "4px" }}>{faq.title}</p>
                    <p style={{ color: "#64748B", fontSize: "12px", lineHeight: 1.6, margin: 0 }}>{faq.body}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── RIGHT: Form ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "36px 32px",
                border: "1.5px solid #E8E8EE",
                height: "100%",
                boxSizing: "border-box",
              }}
            >
              <AnimatePresence mode="wait">
                {!sent ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Form header */}
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
                      <div style={{
                        width: "42px", height: "42px", borderRadius: "12px",
                        background: "rgba(232,98,10,0.08)",
                        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      }}>
                        <MessageSquare size={18} style={{ color: "#E8620A" }} />
                      </div>
                      <div>
                        <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#0B3D4E", margin: 0, fontFamily: "'Syne',sans-serif" }}>
                          Send Us a Message
                        </h2>
                        <p style={{ fontSize: "12px", color: "#94A3B8", margin: 0, fontWeight: 500 }}>
                          Respond within 24 business hours
                        </p>
                      </div>
                    </div>

                    <div style={{ height: "1px", background: "#F1F5F9", margin: "20px 0" }} />

                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

                      {/* Row 1 */}
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                        <FloatingInput label="First Name" name="firstName" value={form.firstName} onChange={handleChange} required />
                        <FloatingInput label="Last Name"  name="lastName"  value={form.lastName}  onChange={handleChange} required />
                      </div>

                      {/* Row 2 */}
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                        <FloatingInput label="Email" name="email" value={form.email} onChange={handleChange} type="email" required />
                        <FloatingInput label="Phone" name="phone" value={form.phone} onChange={handleChange} type="tel" />
                      </div>

                      {/* Row 3 */}
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                        <FloatingInput label="Company" name="company" value={form.company} onChange={handleChange} />
                        <FloatingSelect
                          label="Subject"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          options={[
                            "Repair & Overhaul Enquiry",
                            "Technical Training Enquiry",
                            "Reconditioned Units",
                            "Annual Maintenance Contract",
                            "Product / Parts Enquiry",
                            "Other",
                          ]}
                        />
                      </div>

                      {/* Message */}
                      <FloatingTextarea label="Your Message" name="message" value={form.message} onChange={handleChange} required rows={5} />

                      {/* Submit */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={!isSubmitting ? { y: -2 } : {}}
                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                        style={{
                          width: "100%",
                          display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                          background: isSubmitting ? "#F47A2A" : "#E8620A",
                          color: "#fff",
                          border: "none",
                          borderRadius: "12px",
                          padding: "15px",
                          fontSize: "14px", fontWeight: 700,
                          cursor: isSubmitting ? "not-allowed" : "pointer",
                          boxShadow: "0 4px 20px rgba(232,98,10,0.28)",
                          transition: "all 0.2s",
                          marginTop: "4px",
                        }}
                      >
                        {isSubmitting ? (
                          <>
                            <div style={{
                              width: "18px", height: "18px",
                              border: "2.5px solid rgba(255,255,255,0.3)",
                              borderTopColor: "#fff",
                              borderRadius: "50%",
                              animation: "spin 0.7s linear infinite",
                            }} />
                            Sending…
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send size={15} />
                          </>
                        )}
                      </motion.button>

                      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 120, damping: 16 }}
                    style={{
                      display: "flex", flexDirection: "column",
                      alignItems: "center", justifyContent: "center",
                      padding: "48px 16px", textAlign: "center",
                    }}
                  >
                    <div style={{
                      width: "72px", height: "72px", borderRadius: "50%",
                      background: "#ECFDF5",
                      border: "1.5px solid #A7F3D0",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: "24px",
                    }}>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                      >
                        <CheckCircle2 size={32} style={{ color: "#10B981" }} />
                      </motion.div>
                    </div>

                    <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#0B3D4E", marginBottom: "10px", fontFamily: "'Syne',sans-serif" }}>
                      Message Sent!
                    </h3>
                    <p style={{ color: "#64748B", fontSize: "14px", lineHeight: 1.7, maxWidth: "320px", marginBottom: "32px" }}>
                      Thank you. Our team will review your details and respond within 24 business hours.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      style={{
                        padding: "11px 28px",
                        background: "#0B3D4E",
                        color: "#fff",
                        border: "none",
                        borderRadius: "10px",
                        fontSize: "13px", fontWeight: 700,
                        cursor: "pointer",
                        transition: "background 0.2s",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "#0D4E63"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "#0B3D4E"; }}
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;