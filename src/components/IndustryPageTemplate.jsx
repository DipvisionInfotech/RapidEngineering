import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, Phone, ArrowRight } from "lucide-react";
import CountUp from "react-countup";
import PageHero from "./PageHero";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, delay, ease: "easeOut" },
});

// Fallback high-quality images for icons if highlights don't define them
const fallbackIconImages = [
  "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=80&q=80",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=80&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=80&q=80",
];

const IndustryPageTemplate = ({
  badge, title, subtitle, bgImage,
  aboutTitle, aboutText = [], aboutImage,
  features = [], highlights = [], equipmentList = [],
  process = [], stats = [], whyReasons = []
}) => {

  // Fallback defaults for new sections
  const displayProcess = process.length > 0 ? process : [
    { title: "Rigorous Diagnostics", desc: "We perform complete pressure testing, flow analysis, and sensor diagnostics." },
    { title: "Precision Engineering", desc: "Components are machined and assembled to tight tolerance specifications." },
    { title: "Dynamic Load Testing", desc: "Verified under simulated operating pressure on our digital test bench." },
    { title: "Certified Deployment", desc: "Commissioned on-site with a certified performance guarantee." }
  ];

  const displayStats = stats.length > 0 ? stats : [
    { value: 99.2, label: "System Volumetric Efficiency Verified", suffix: "%" },
    { value: 12, label: "Years of Engineering Expertise", suffix: "+" },
    { value: 500, label: "Heavy Hydraulic Units Reconditioned", suffix: "+" },
    { value: 24, label: "Response & Troubleshooting Turnaround", suffix: "hr" }
  ];

  const displayWhyReasons = whyReasons.length > 0 ? whyReasons : [
    { 
      title: "Customized Solutions", 
      desc: "We provide tailored hydraulic designs to meet the unique pressure and flow demands of your business.",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=150&q=80"
    },
    { 
      title: "Unwavering Quality", 
      desc: "Rigorous testing and inspection at every stage of the process to guarantee absolute reliability.",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=150&q=80"
    },
    { 
      title: "Competitive Pricing", 
      desc: "We offer cost-effective reconditioning and maintenance solutions without compromising on performance.",
      img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      <PageHero
        badge={badge} title={title} subtitle={subtitle} bgImage={bgImage}
      />

      {/* About */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp(0)}>
            <img src={aboutImage || "https://img.freepik.com/free-photo/industrial-engineer_23-2149372836.jpg"}
              alt={title} className="w-full h-[400px] object-cover rounded-2xl shadow-xl border border-slate-100"
              onError={(e) => { e.target.src = `https://placehold.co/600x400/0B3D4E/white?text=${encodeURIComponent(title)}`; }} />
          </motion.div>

          <motion.div {...fadeUp(0.1)}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[3px] bg-[#E8620A] rounded-full" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#E8620A]">Industry Overview</span>
            </div>
            <h2 className="text-[#0B3D4E] font-bold mb-5 leading-tight text-3xl md:text-4xl"
              style={{ fontFamily: "'Syne',sans-serif" }}>
              {aboutTitle || title}
            </h2>
            {aboutText.map((para, i) => (
              <p key={i} className="text-slate-500 leading-[1.85] mb-4 text-[15px]">{para}</p>
            ))}

            {features.length > 0 && (
              <div className="grid grid-cols-2 gap-3 mt-6 mb-8">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-[13.5px] text-[#0B3D4E] font-semibold">
                    <CheckCircle2 size={15} className="text-[#E8620A] flex-shrink-0" />
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
            <div className="grid md:grid-cols-3 gap-6">
              {highlights.map((h, i) => (
                <motion.div key={h.title} {...fadeUp(i * 0.08)}
                  className="group bg-white rounded-2xl p-7 border border-slate-200 hover:border-[#0B3D4E] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  
                  {/* Image as Icon */}
                  <div className="w-12 h-12 rounded-xl overflow-hidden mb-5 border border-slate-100 flex-shrink-0">
                    <img 
                      src={h.img || fallbackIconImages[i % fallbackIconImages.length]} 
                      alt="" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <h3 className="font-bold text-[#0B3D4E] mb-2.5 text-base">{h.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{h.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process/How We Work Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[3px] bg-[#E8620A] rounded-full" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#E8620A]">How We Work</span>
              <div className="w-8 h-[3px] bg-[#E8620A] rounded-full" />
            </div>
            <h2 className="text-[#0B3D4E] font-bold text-3xl" style={{ fontFamily: "'Syne',sans-serif" }}>
              Our Engineering Process
            </h2>
            <p className="text-slate-500 text-sm mt-3 max-w-xl mx-auto">
              From analysis to final dynamic load testing, we follow a strict zero-tolerance reconditioning pipeline.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting Dotted Line (Desktop only) */}
            <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 border-t-2 border-dashed border-slate-200 -translate-y-1/2 -z-0" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {displayProcess.map((step, i) => (
                <motion.div 
                  key={i} 
                  {...fadeUp(i * 0.1)}
                  className="bg-white border border-slate-200/80 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-full bg-[#0B3D4E] text-white flex items-center justify-center mx-auto mb-5 font-bold text-xl group-hover:bg-[#E8620A] transition-colors shadow-lg">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-[#0B3D4E] text-base mb-2.5">{step.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics Bar */}
      <section className="py-16 bg-[#0B3D4E] relative overflow-hidden">
        <div className="absolute inset-0 stripe-bg opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {displayStats.map((s, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-4"
              >
                <div className="text-4xl md:text-5xl font-black text-orange-400 mb-2 font-mono">
                  <CountUp end={s.value} duration={2.5} decimals={s.value % 1 !== 0 ? 1 : 0} enableScrollSpy scrollSpyOnce />
                  {s.suffix || ""}
                </div>
                <p className="text-white/70 text-xs font-semibold uppercase tracking-wider">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Why Choose Us */}
      <section className="py-20 bg-[#F4F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[3px] bg-[#E8620A] rounded-full" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#E8620A]">Why Choose Us</span>
              <div className="w-8 h-[3px] bg-[#E8620A] rounded-full" />
            </div>
            <h2 className="text-[#0B3D4E] font-bold text-3xl" style={{ fontFamily: "'Syne',sans-serif" }}>
              Our Competitive Edge
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {displayWhyReasons.map((reason, i) => (
              <motion.div 
                key={i} 
                {...fadeUp(i * 0.1)}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {reason.img && (
                  <div className="h-44 w-full overflow-hidden">
                    <img src={reason.img} alt={reason.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-bold text-[#0B3D4E] text-lg mb-2">{reason.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
};

export default IndustryPageTemplate;
