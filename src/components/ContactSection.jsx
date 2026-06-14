import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin, Send } from "lucide-react";

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
const FloatingTextarea = ({ label, name, value, onChange, rows = 4, required = false }) => {
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

const ContactSection = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", company: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSent(true);
      setForm({ firstName: "", lastName: "", email: "", phone: "", company: "", message: "" });
    }, 1200);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section className="py-24 bg-[#F4F7FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-[3px] bg-[#E8620A] rounded-full" 
            />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#E8620A]">Get in Touch</span>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-[3px] bg-[#E8620A] rounded-full" 
            />
          </div>
          <h2 className="text-[#0B3D4E] font-extrabold tracking-tight mb-4 animate-fade-in" style={{ fontSize: "clamp(2rem,3.5vw,2.9rem)", fontFamily: "'Syne',sans-serif" }}>
            Let's Talk About Your Requirements
          </h2>
          <p className="text-slate-500 text-[15px] mt-3 max-w-lg mx-auto leading-[1.8]">
            Whether it's a repair inquiry, a quote request, or a partnership opportunity — our team responds within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[400px_1fr] gap-10 items-stretch">

          {/* Left – Info panel */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }} 
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} 
            transition={{ duration: 0.7, type: "spring" }}
            className="flex"
          >
            <div className="bg-gradient-to-b from-[#0B3D4E] to-[#06212B] rounded-3xl p-8 md:p-10 relative overflow-hidden border border-[#0B3D4E]/30 shadow-2xl flex flex-col justify-between w-full min-h-[500px]">
              
              {/* Glowing Background Blobs */}
              <motion.div
                animate={{
                  x: [0, 25, 0],
                  y: [0, -25, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-[#E8620A]/10 blur-3xl pointer-events-none"
              />
              <motion.div
                animate={{
                  x: [0, -15, 0],
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-12 -top-12 w-40 h-40 rounded-full bg-[#E8620A]/15 blur-3xl pointer-events-none"
              />

              <div className="relative z-10">
                <p className="text-orange-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Contact Information</p>
                <h3 className="text-white font-bold text-2xl mb-8 leading-tight" style={{ fontFamily: "'Syne',sans-serif" }}>
                  We're Here to Help
                </h3>

                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  {[
                    { icon: Phone,  label: "Phone",         value: "+91 99999 99999",    href: "tel:+919999999999" },
                    { icon: Mail,   label: "Email",         value: "info@rapidengg.com", href: "mailto:info@rapidengg.com" },
                    { icon: MapPin, label: "Address",       value: "Delhi, India" },
                    { icon: Clock,  label: "Working Hours", value: "Mon–Sat, 9 AM – 6 PM" },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <motion.div 
                      key={label} 
                      variants={itemVariants}
                      whileHover={{ x: 6 }}
                      className="flex items-center gap-4 group p-1.5 rounded-xl transition-all"
                    >
                      <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E8620A]/20 group-hover:border-[#E8620A]/40 transition-all duration-300">
                        <Icon size={18} className="text-orange-400 group-hover:scale-110 transition-transform duration-300" />
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

              {/* Socials */}
              <div className="mt-12 pt-6 border-t border-white/10 flex items-center gap-3 relative z-10">
                {[
                  { icon: Facebook, href: "https://facebook.com/",  label: "Facebook" },
                  { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
                  { icon: Twitter,  href: "https://x.com/",         label: "Twitter" },
                  { icon: Linkedin, href: "https://linkedin.com/",   label: "LinkedIn" },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a 
                    key={label} 
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={label}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-[#E8620A] hover:text-white hover:border-[#E8620A]/40 transition-all duration-300"
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right – Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }} 
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} 
            transition={{ duration: 0.7, type: "spring" }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_15px_50px_-15px_rgba(11,61,78,0.08)] border border-slate-200/60 flex flex-col justify-center min-h-[500px]"
          >
            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.div
                  key="contact-form-key"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-[#0B3D4E] font-bold text-2xl mb-1.5" style={{ fontFamily: "'Syne',sans-serif" }}>Send Us Your Query</h3>
                  <p className="text-slate-400 text-sm mb-8">Fill in the form and we'll get back to you promptly.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <FloatingInput label="First Name" name="firstName" value={form.firstName} onChange={handleChange} required />
                      <FloatingInput label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} required />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <FloatingInput label="Email Address" name="email" value={form.email} onChange={handleChange} type="email" required />
                      <FloatingInput label="Phone Number" name="phone" value={form.phone} onChange={handleChange} type="tel" />
                    </div>
                    <FloatingInput label="Company Name" name="company" value={form.company} onChange={handleChange} />
                    <FloatingTextarea label="Your Query" name="message" value={form.message} onChange={handleChange} required rows={4} />
                    
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2.5 bg-[#E8620A] hover:bg-[#F47A2A] text-white py-4 rounded-xl font-bold text-[15px] transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-orange-500/20 active:translate-y-0 disabled:opacity-80 disabled:cursor-not-allowed cursor-pointer group"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Your Query</span>
                          <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="contact-success-key"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  className="flex flex-col items-center justify-center py-10 text-center"
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
                    Thank you. We have received your query and one of our hydraulic engineers will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="px-6 py-3 bg-[#0B3D4E] hover:bg-[#0B3D4E]/90 text-white font-bold text-xs rounded-xl transition-all duration-300 shadow-md cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
