import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, Phone, ArrowRight } from "lucide-react";
import PageHero from "./PageHero";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, delay, ease: "easeOut" },
});

const IndustryPageTemplate = ({
  badge, title, subtitle, bgImage,
  aboutTitle, aboutText = [], aboutImage,
  features = [], highlights = [], equipmentList = [],
}) => (
  <div className="bg-white">
    <PageHero
      badge={badge} title={title} subtitle={subtitle} bgImage={bgImage}
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Industries", to: "/" }, { label: title }]}
    />

    {/* About */}
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div {...fadeUp(0)}>
          <img src={aboutImage || "https://img.freepik.com/free-photo/industrial-engineer_23-2149372836.jpg"}
            alt={title} className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
            onError={(e) => { e.target.src = `https://placehold.co/600x400/0B3D4E/white?text=${encodeURIComponent(title)}`; }} />
        </motion.div>

        <motion.div {...fadeUp(0.1)}>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[3px] bg-[#E8620A] rounded-full" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#E8620A]">Industry Overview</span>
          </div>
          <h2 className="text-[#0B3D4E] font-bold mb-5 leading-tight"
            style={{ fontSize: "clamp(1.6rem,2.8vw,2.2rem)", fontFamily: "'Syne',sans-serif" }}>
            {aboutTitle || title}
          </h2>
          {aboutText.map((para, i) => (
            <p key={i} className="text-slate-500 leading-[1.85] mb-4 text-[14.5px]">{para}</p>
          ))}

          {features.length > 0 && (
            <div className="grid grid-cols-2 gap-2.5 mt-6 mb-8">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-[13px] text-[#0B3D4E] font-medium">
                  <CheckCircle2 size={14} className="text-[#E8620A] flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>
          )}

          <Link to="/contact"
            className="inline-flex items-center gap-2 bg-[#E8620A] hover:bg-[#F47A2A] text-white px-7 py-3.5 rounded-xl font-semibold text-[14.5px] transition-all hover:-translate-y-0.5 shadow-lg shadow-orange-200">
            <Phone size={16} /> Get Expert Support
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Highlights */}
    {highlights.length > 0 && (
      <section className="py-20 bg-[#F4F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[3px] bg-[#E8620A] rounded-full" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#E8620A]">What We Offer</span>
              <div className="w-8 h-[3px] bg-[#E8620A] rounded-full" />
            </div>
            <h2 className="text-[#0B3D4E] font-bold text-3xl" style={{ fontFamily: "'Syne',sans-serif" }}>
              Our Capabilities in {title}
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5">
            {highlights.map((h, i) => (
              <motion.div key={h.title} {...fadeUp(i * 0.08)}
                className="group bg-white rounded-2xl p-7 border border-slate-200 hover:border-[#0B3D4E] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl bg-[#E8620A]/10 group-hover:bg-[#E8620A] flex items-center justify-center mb-5 transition-colors">
                  <ArrowRight size={18} className="text-[#E8620A] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-[#0B3D4E] mb-2.5">{h.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )}

    {/* Equipment */}
    {equipmentList.length > 0 && (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[3px] bg-[#E8620A] rounded-full" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#E8620A]">Equipment We Service</span>
              <div className="w-8 h-[3px] bg-[#E8620A] rounded-full" />
            </div>
          </motion.div>
          <div className="flex flex-wrap gap-3 justify-center">
            {equipmentList.map((eq, i) => (
              <motion.span key={eq} initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="bg-[#F4F7FA] border border-slate-200 text-[#0B3D4E] text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#0B3D4E] hover:text-white hover:border-[#0B3D4E] transition-all cursor-default">
                {eq}
              </motion.span>
            ))}
          </div>
        </div>
      </section>
    )}

    {/* CTA */}
    <section className="py-16 bg-[#0B3D4E] relative overflow-hidden">
      <div className="absolute inset-0 stripe-bg opacity-30" />
      <div className="absolute right-0 top-0 w-72 h-72 bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <p className="text-orange-400 text-[10px] font-bold tracking-widest uppercase mb-4">Ready to Work Together?</p>
        <h2 className="text-white font-bold text-3xl mb-4" style={{ fontFamily: "'Syne',sans-serif" }}>
          Need Hydraulic Support for {title}?
        </h2>
        <p className="text-white/60 mb-8 leading-relaxed text-[15px]">
          Our experts provide repair, overhaul, and maintenance services tailored to your specific industry and equipment.
        </p>
        <Link to="/contact"
          className="inline-flex items-center gap-2 bg-[#E8620A] hover:bg-[#F47A2A] text-white px-9 py-4 rounded-xl font-semibold text-[15px] transition-all hover:-translate-y-0.5 shadow-xl shadow-orange-900/30">
          <Phone size={17} /> Request a Quote
        </Link>
      </div>
    </section>
  </div>
);

export default IndustryPageTemplate;
