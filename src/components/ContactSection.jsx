import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin, Send } from "lucide-react";

const inputClass =
  "w-full px-4 py-3.5 border border-slate-200 rounded-xl text-sm text-slate-800 bg-[#F4F7FA] focus:outline-none focus:border-[#0B3D4E] focus:bg-white transition-all duration-200 placeholder:text-slate-400";

const ContactSection = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ firstName: "", lastName: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <section className="py-24 bg-[#F4F7FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-[3px] bg-[#E8620A] rounded-full" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#E8620A]">Get in Touch</span>
            <div className="w-8 h-[3px] bg-[#E8620A] rounded-full" />
          </div>
          <h2 className="text-[#0B3D4E] font-extrabold tracking-tight mb-4" style={{ fontSize: "clamp(2rem,3.5vw,2.9rem)", fontFamily: "'Syne',sans-serif" }}>
            Let's Talk About Your Requirements
          </h2>
          <p className="text-slate-500 text-[15px] mt-3 max-w-lg mx-auto leading-[1.8]">
            Whether it's a repair inquiry, a quote request, or a partnership opportunity — our team responds within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left – Info panel */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex flex-col gap-5">

            {/* Contact card */}
            <div className="bg-[#0B3D4E] rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-white/4 pointer-events-none" />
              <div className="absolute -left-4 -top-4 w-20 h-20 rounded-full bg-orange-500/8 pointer-events-none" />

              <p className="text-orange-400 text-[10px] font-bold tracking-widest uppercase mb-4 relative z-10">Contact Information</p>
              <h3 className="text-white font-bold text-lg mb-6 relative z-10" style={{ fontFamily: "'Syne',sans-serif" }}>
                We're Here to Help
              </h3>

              <div className="space-y-5 relative z-10">
                {[
                  { icon: Phone,  label: "Phone",         value: "+91 99999 99999",    href: "tel:+919999999999" },
                  { icon: Mail,   label: "Email",         value: "info@rapidengg.com", href: "mailto:info@rapidengg.com" },
                  { icon: MapPin, label: "Address",       value: "Delhi, India" },
                  { icon: Clock,  label: "Working Hours", value: "Mon–Sat, 9 AM – 6 PM" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={17} className="text-orange-400" />
                    </div>
                    <div>
                      <p className="text-white/45 text-[10px] font-semibold uppercase tracking-wider">{label}</p>
                      {href ? (
                        <a href={href} className="text-white text-sm font-medium hover:text-orange-400 transition-colors">{value}</a>
                      ) : (
                        <p className="text-white text-sm font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Socials */}
              <div className="mt-8 pt-6 border-t border-white/10 flex gap-2.5 relative z-10">
                {[
                  { icon: Facebook, href: "https://facebook.com/",  label: "Facebook" },
                  { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
                  { icon: Twitter,  href: "https://x.com/",         label: "Twitter" },
                  { icon: Linkedin, href: "https://linkedin.com/",   label: "LinkedIn" },
                ].map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white/50 hover:bg-[#E8620A] hover:text-white transition-all duration-200">
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

             
          </motion.div>
         

          {/* Right – Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-200/80">

            <h3 className="text-[#0B3D4E] font-bold text-xl mb-1.5" style={{ fontFamily: "'Syne',sans-serif" }}>Send Us Your Query</h3>
            <p className="text-slate-400 text-sm mb-7">Fill in the form and we'll get back to you promptly.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5">First Name *</label>
                  <input type="text" name="firstName" value={form.firstName} onChange={handleChange}
                    placeholder="John" required className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5">Last Name *</label>
                  <input type="text" name="lastName" value={form.lastName} onChange={handleChange}
                    placeholder="Doe" required className={inputClass} />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5">Email Address *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="john@company.com" required className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5">Phone Number</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                    placeholder="+91 99999 99999" className={inputClass} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5">Company Name</label>
                <input type="text" name="company" value={form.company} onChange={handleChange}
                  placeholder="Your Company Pvt. Ltd." className={inputClass} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5">Your Query *</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={5}
                  placeholder="Describe your hydraulic system issue, equipment type, and urgency..." required
                  className={`${inputClass} resize-none`} />
              </div>
              <button type="submit"
                className="w-full flex items-center justify-center gap-2.5 bg-[#E8620A] hover:bg-[#F47A2A] text-white py-4 rounded-xl font-semibold text-[15px] transition-all hover:-translate-y-0.5 shadow-lg shadow-orange-200">
                {sent ? (
                  <><span className="w-2 h-2 rounded-full bg-white animate-pulse" /> Message Sent! We'll respond within 24 hrs.</>
                ) : (
                  <><Send size={17} /> Submit Your Query</>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
