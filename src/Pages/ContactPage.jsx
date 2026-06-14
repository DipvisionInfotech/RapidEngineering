import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin, Send, MessageSquare } from "lucide-react";
import PageHero from "../components/PageHero";

// Floating Input Component
const FloatingInput = ({ label, name, value, onChange, type = "text", required = false }) => {
  const [focused, setFocused] = useState(false);
  const isFloating = focused || value !== "";

  return (
    <div className="relative group w-full">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder=" "
        className={`w-full px-4 pt-6 pb-2 border rounded-xl text-sm text-slate-800 bg-[#F8FAFC] transition-all duration-300 outline-none
          ${focused 
            ? "border-[#E8620A] bg-white ring-4 ring-[#E8620A]/10 shadow-[0_0_20px_rgba(232,98,10,0.05)]" 
            : "border-slate-200 hover:border-slate-300"
          }`}
      />
      <span
        className={`absolute left-4 transition-all duration-300 pointer-events-none font-semibold select-none
          ${isFloating
            ? "top-1.5 text-[10px] text-[#E8620A]"
            : "top-4 text-sm text-slate-400"
          }`}
      >
        {label} {required && <span className="text-[#E8620A]">*</span>}
      </span>
    </div>
  );
};

// Floating Textarea Component
const FloatingTextarea = ({ label, name, value, onChange, rows = 5, required = false }) => {
  const [focused, setFocused] = useState(false);
  const isFloating = focused || value !== "";

  return (
    <div className="relative group w-full">
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder=" "
        className={`w-full px-4 pt-6 pb-2 border rounded-xl text-sm text-slate-800 bg-[#F8FAFC] transition-all duration-300 outline-none resize-none
          ${focused 
            ? "border-[#E8620A] bg-white ring-4 ring-[#E8620A]/10 shadow-[0_0_20px_rgba(232,98,10,0.05)]" 
            : "border-slate-200 hover:border-slate-300"
          }`}
      />
      <span
        className={`absolute left-4 transition-all duration-300 pointer-events-none font-semibold select-none
          ${isFloating
            ? "top-1.5 text-[10px] text-[#E8620A]"
            : "top-4 text-sm text-slate-400"
          }`}
      >
        {label} {required && <span className="text-[#E8620A]">*</span>}
      </span>
    </div>
  );
};

// Floating Select Component
const FloatingSelect = ({ label, name, value, onChange, options, required = false }) => {
  const [focused, setFocused] = useState(false);
  const isFloating = focused || value !== "";

  return (
    <div className="relative group w-full">
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full px-4 pt-6 pb-2 border rounded-xl text-sm text-slate-800 bg-[#F8FAFC] transition-all duration-300 outline-none appearance-none cursor-pointer
          ${focused 
            ? "border-[#E8620A] bg-white ring-4 ring-[#E8620A]/10 shadow-[0_0_20px_rgba(232,98,10,0.05)]" 
            : "border-slate-200 hover:border-slate-300"
          }`}
      >
        <option value="" disabled hidden></option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="text-slate-800 bg-white">
            {opt}
          </option>
        ))}
      </select>
      <span
        className={`absolute left-4 transition-all duration-300 pointer-events-none font-semibold select-none
          ${isFloating
            ? "top-1.5 text-[10px] text-[#E8620A]"
            : "top-4 text-sm text-slate-400"
          }`}
      >
        {label} {required && <span className="text-[#E8620A]">*</span>}
      </span>
      {/* Dropdown chevron */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover:text-slate-600 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", company: "", subject: "", message: "" });
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <div className="bg-white">
      <PageHero
        title="Contact Us"
        subtitle="Reach out for repair quotes, technical queries, training enquiries, or partnership opportunities."
        bgImage="https://img.freepik.com/free-photo/close-up-image-nut-key-mechanic-s-arm_613910-13714.jpg"
      />

      <section className="py-20 bg-[#F4F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[380px_1fr] gap-8 items-start">

            {/* Info Panel & FAQs */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring" }} 
              className="flex flex-col gap-6"
            >
              {/* Contact Card */}
              <div className="bg-[#0B3D4E] rounded-2xl p-7 relative overflow-hidden border border-[#0B3D4E]/30 shadow-xl flex flex-col justify-between min-h-[380px]">
                
                {/* Glowing Blobs */}
                <motion.div
                  animate={{
                    x: [0, 20, 0],
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-[#E8620A]/10 blur-3xl pointer-events-none"
                />
                <motion.div
                  animate={{
                    x: [0, -15, 0],
                    y: [0, 15, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -left-10 -top-10 w-32 h-32 rounded-full bg-[#E8620A]/15 blur-3xl pointer-events-none"
                />

                <div className="relative z-10">
                  <p className="text-orange-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Direct Contact</p>
                  
                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-5"
                  >
                    {[
                      { icon: Phone,  label: "Call Us",      value: "+91 99999 99999",    href: "tel:+919999999999" },
                      { icon: Mail,   label: "Email Us",     value: "info@rapidengg.com", href: "mailto:info@rapidengg.com" },
                      { icon: MapPin, label: "Visit Us",     value: "Delhi, India" },
                      { icon: Clock,  label: "Office Hours", value: "Mon–Sat, 9 AM – 6 PM" },
                    ].map(({ icon: Icon, label, value, href }) => (
                      <motion.div 
                        key={label} 
                        variants={itemVariants}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-4 group p-1 rounded-xl transition-all"
                      >
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E8620A]/20 group-hover:border-[#E8620A]/40 transition-all duration-300">
                          <Icon size={16} className="text-orange-400 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div>
                          <p className="text-white/40 text-[9px] font-bold uppercase tracking-wider mb-0.5">{label}</p>
                          {href ? (
                            <a href={href} className="text-white text-sm font-semibold hover:text-orange-400 transition-colors duration-200">
                              {value}
                            </a>
                          ) : (
                            <p className="text-white/90 text-sm font-semibold">{value}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Social links */}
                <div className="mt-8 pt-5 border-t border-white/10 flex gap-2.5 relative z-10">
                  {[
                    { icon: Facebook, href: "https://facebook.com/" },
                    { icon: Instagram, href: "https://instagram.com/" },
                    { icon: Twitter, href: "https://x.com/" },
                    { icon: Linkedin, href: "https://linkedin.com/" },
                  ].map(({ icon: Icon, href }) => (
                    <motion.a 
                      key={href} 
                      href={href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-[#E8620A] hover:text-white hover:border-[#E8620A]/40 transition-all duration-300"
                    >
                      <Icon size={15} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* FAQ-style interactive boxes */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                {[
                  { title: "Repair Enquiries", body: "Please include your equipment brand, model, and the issue you're experiencing." },
                  { title: "Training Programmes", body: "Let us know the number of participants and preferred training dates." },
                  { title: "Emergency Breakdown", body: "Call us directly on our hotline for fastest response. We prioritise critical failures." },
                ].map((faq) => (
                  <motion.div 
                    key={faq.title} 
                    variants={itemVariants}
                    whileHover={{ y: -4, borderLeftColor: "#E8620A" }}
                    className="bg-white rounded-xl p-5 border border-slate-200 border-l-4 border-l-slate-300 shadow-sm transition-all duration-300 group cursor-default"
                  >
                    <p className="font-bold text-[#0B3D4E] text-sm mb-1.5 transition-colors duration-350 group-hover:text-[#E8620A]">{faq.title}</p>
                    <p className="text-slate-500 text-xs leading-relaxed">{faq.body}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-200/80 flex flex-col justify-center min-h-[500px]"
            >
              <AnimatePresence mode="wait">
                {!sent ? (
                  <motion.div
                    key="page-contact-form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-[#E8620A]/10 flex items-center justify-center">
                        <MessageSquare size={19} className="text-[#E8620A]" />
                      </div>
                      <div>
                        <h2 className="text-[#0B3D4E] font-bold text-xl" style={{ fontFamily: "'Syne',sans-serif" }}>Send Us a Message</h2>
                        <p className="text-slate-400 text-xs font-medium">We respond within 24 business hours</p>
                      </div>
                    </div>
                    <div className="h-px bg-slate-100 my-6" />

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <FloatingInput label="First Name" name="firstName" value={form.firstName} onChange={handleChange} required />
                        <FloatingInput label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} required />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <FloatingInput label="Email Address" name="email" value={form.email} onChange={handleChange} type="email" required />
                        <FloatingInput label="Phone Number" name="phone" value={form.phone} onChange={handleChange} type="tel" />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <FloatingInput label="Company Name" name="company" value={form.company} onChange={handleChange} />
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
                            "Other"
                          ]} 
                        />
                      </div>
                      <FloatingTextarea label="Your Message" name="message" value={form.message} onChange={handleChange} required rows={5} />
                      
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2.5 bg-[#E8620A] hover:bg-[#F47A2A] text-white py-4 rounded-xl font-bold text-[15px] transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-orange-500/20 active:translate-y-0 disabled:opacity-80 disabled:cursor-not-allowed cursor-pointer group"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Sending Message...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="page-contact-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6 border border-emerald-100 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="w-10 h-10 text-emerald-500"
                      >
                        <motion.path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          d="M5 13l4 4L19 7"
                        />
                      </motion.svg>
                    </div>
                    <h3 className="text-[#0B3D4E] font-bold text-2xl mb-3" style={{ fontFamily: "'Syne',sans-serif" }}>
                      Message Sent!
                    </h3>
                    <p className="text-slate-500 text-sm max-w-sm leading-relaxed mb-8">
                      Thank you. Your message has been sent. Our team of experts will review your details and respond within 24 hours.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="px-6 py-3 bg-[#0B3D4E] hover:bg-[#0B3D4E]/90 text-white font-bold text-xs rounded-xl transition-all duration-300 shadow-md cursor-pointer"
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
