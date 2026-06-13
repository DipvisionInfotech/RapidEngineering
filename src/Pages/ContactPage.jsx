import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin, Send, MessageSquare } from "lucide-react";
import PageHero from "../components/PageHero";

const inputClass =
  "w-full px-4 py-3.5 border border-slate-200 rounded-xl text-sm text-slate-800 bg-[#F4F7FA] focus:outline-none focus:border-[#0B3D4E] focus:bg-white transition-all duration-200 placeholder:text-slate-400";

const ContactPage = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", company: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ firstName: "", lastName: "", email: "", phone: "", company: "", subject: "", message: "" });
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
          <div className="grid lg:grid-cols-[360px_1fr] gap-8">

            {/* Info */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }} className="flex flex-col gap-5">

              {/* Contact card */}
              <div className="bg-[#0B3D4E] rounded-2xl p-7 relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-white/4" />
                <div className="absolute -left-4 -top-4 w-20 h-20 rounded-full bg-orange-500/8" />

                <p className="text-orange-400 text-[10px] font-bold tracking-widest uppercase mb-4 relative z-10">Direct Contact</p>
                <div className="space-y-5 relative z-10">
                  {[
                    { icon: Phone,  label: "Call Us",      value: "+91 99999 99999",    href: "tel:+919999999999" },
                    { icon: Mail,   label: "Email Us",     value: "info@rapidengg.com", href: "mailto:info@rapidengg.com" },
                    { icon: MapPin, label: "Visit Us",     value: "Delhi, India" },
                    { icon: Clock,  label: "Office Hours", value: "Mon–Sat, 9 AM – 6 PM" },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={16} className="text-orange-400" />
                      </div>
                      <div>
                        <p className="text-white/40 text-[10px] font-semibold uppercase tracking-wider">{label}</p>
                        {href ? (
                          <a href={href} className="text-white text-sm font-medium hover:text-orange-400 transition-colors">{value}</a>
                        ) : (
                          <p className="text-white text-sm font-medium">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 pt-5 border-t border-white/10 flex gap-2.5 relative z-10">
                  {[
                    { icon: Facebook, href: "https://facebook.com/" },
                    { icon: Instagram, href: "https://instagram.com/" },
                    { icon: Twitter, href: "https://x.com/" },
                    { icon: Linkedin, href: "https://linkedin.com/" },
                  ].map(({ icon: Icon, href }) => (
                    <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white/50 hover:bg-[#E8620A] hover:text-white transition-all">
                      <Icon size={15} />
                    </a>
                  ))}
                </div>
              </div>

              {/* FAQ-style boxes */}
              {[
                { title: "Repair Enquiries", body: "Please include your equipment brand, model, and the issue you're experiencing." },
                { title: "Training Programmes", body: "Let us know the number of participants and preferred training dates." },
                { title: "Emergency Breakdown", body: "Call us directly on our hotline for fastest response. We prioritise critical failures." },
              ].map((faq) => (
                <div key={faq.title} className="bg-white rounded-xl p-5 border border-slate-200">
                  <p className="font-bold text-[#0B3D4E] text-sm mb-1.5">{faq.title}</p>
                  <p className="text-slate-500 text-xs leading-relaxed">{faq.body}</p>
                </div>
              ))}
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-200/80">

              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#E8620A]/10 flex items-center justify-center">
                  <MessageSquare size={19} className="text-[#E8620A]" />
                </div>
                <div>
                  <h2 className="text-[#0B3D4E] font-bold text-xl" style={{ fontFamily: "'Syne',sans-serif" }}>Send Us a Message</h2>
                  <p className="text-slate-400 text-xs">We respond within 24 business hours</p>
                </div>
              </div>
              <div className="h-px bg-slate-100 my-6" />

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
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">Company Name</label>
                    <input type="text" name="company" value={form.company} onChange={handleChange}
                      placeholder="Your Company" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">Subject</label>
                    <select name="subject" value={form.subject} onChange={handleChange} className={inputClass}>
                      <option value="">Select a subject</option>
                      <option>Repair & Overhaul Enquiry</option>
                      <option>Technical Training Enquiry</option>
                      <option>Reconditioned Units</option>
                      <option>Annual Maintenance Contract</option>
                      <option>Product / Parts Enquiry</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5">Your Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={6}
                    placeholder="Please describe your hydraulic system issue, equipment type, brand, and urgency level..."
                    required className={`${inputClass} resize-none`} />
                </div>
                <button type="submit"
                  className="w-full flex items-center justify-center gap-2.5 bg-[#E8620A] hover:bg-[#F47A2A] text-white py-4 rounded-xl font-semibold text-[15px] transition-all hover:-translate-y-0.5 shadow-lg shadow-orange-200">
                  {sent ? (
                    <><span className="w-2 h-2 rounded-full bg-white animate-pulse" /> Thank you! We'll be in touch soon.</>
                  ) : (
                    <><Send size={17} /> Send Message</>
                  )}
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
