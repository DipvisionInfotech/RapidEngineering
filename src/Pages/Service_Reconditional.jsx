import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Phone, Leaf, TrendingDown, Clock, ShieldCheck, Plus, Minus, ArrowRight } from "lucide-react";
import CountUp from "react-countup";
import PageHero from "../components/PageHero";
import recondHeroImg from "../assets/6442a85b2042a67c49e57c3a7874f4ca.jpg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, delay, ease: "easeOut" },
});

const benefits = [
  {
    icon: TrendingDown,
    title: "Cost-Effective",
    desc: "Get high-quality, reliable hydraulic units at a fraction of the cost of brand-new components.",
  },
  {
    icon: Clock,
    title: "Reduced Lead Times",
    desc: "Reconditioned units are often available with shorter lead times than new parts, minimizing your downtime.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    desc: "Choosing reconditioned units helps reduce waste and the environmental impact of manufacturing new components.",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed Quality",
    desc: "Our rigorous reconditioning process ensures every unit performs to the highest standards, backed by a warranty.",
  },
];

const beforeAfterData = [
  {
    title: "Before Reconditioning",
    desc: "Worn cylinder block ports, scored swashplates, degraded nitrile seals, and heavy oil particulate contamination causing massive pressure drops.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80",
    badge: "Worn & Faulty"
  },
  {
    title: "After Reconditioning",
    desc: "Mirror-polished rotary groups, brand-new Viton/OEM seal kits, zero-tolerance valve plate alignment, and computerized calibration reports.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
    badge: "Certified Rebuilt"
  }
];

const faqItems = [
  {
    q: "What is the difference between repaired and reconditioned?",
    a: "A standard repair only replaces the single broken component to make it operational. Reconditioning involves completely dismantling the unit, cleaning it to ISO 4406 standards, auditing all dimensions against OEM blueprints, replacing all seals and wear components, and testing it to certify a 12-month warranty."
  },
  {
    q: "How much can I save compared to buying new?",
    a: "Our certified reconditioned hydraulic units cost between 50% and 60% less than buying brand-new units from the original manufacturer, while matching the original operating lifecycle."
  },
  {
    q: "What brands of hydraulic units do you recondition?",
    a: "We regularly recondition pumps, motors, and valve blocks from premium global brands such as Bosch Rexroth, Danfoss, Eaton, Parker, Kawasaki, Komatsu, and Caterpillar."
  },
  {
    q: "Do you have ready stock available for immediate swap?",
    a: "Yes. We maintain an exchange stock program for common industrial pump sizes (e.g. Rexroth A10VSO, Danfoss H1P series) to allow immediate swap and zero-downtime shipping."
  },
  {
    q: "How do you guarantee the quality?",
    a: "Every unit undergoes a full-cycle dynamic load run on our computerized digital dyno test bench. We monitor flow rate vs pressure, temperature rise, and response time, generating a certified test report that accompanies your unit."
  }
];

const Service_Reconditional = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white overflow-hidden">
      <PageHero
        badge="Zero-Tolerance Certified Reconditioning"
        title="Premium Reconditioned Units"
        subtitle="Access high-performance hydraulic pumps, motors, and control valves calibrated to original factory specs at up to 60% savings."
        bgImage={recondHeroImg}
      />

      {/* About section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp(0)}>
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
              alt="Reconditioned hydraulic units"
              className="w-full h-[400px] object-cover rounded-2xl shadow-xl border border-slate-100"
              onError={(e) => { e.target.src = "https://placehold.co/600x400/0B3D4E/white?text=Reconditioned+Units"; }}
            />
          </motion.div>
          <motion.div {...fadeUp(0.1)}>
            <span className="inline-block bg-orange-50 text-orange-500 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-orange-200 mb-5">
              OEM Performance at Half the Cost
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B3D4E] mb-5 leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
              Zero-Tolerance Engineering & Performance Certification
            </h2>
            <p className="text-slate-500 leading-relaxed mb-4 text-[15px]">
              At Rapid Engineering Services, we supply meticulously reconditioned hydraulic units from world-leading OEM brands (including Bosch Rexroth, Danfoss, Caterpillar, and Volvo). Every component is completely stripped, inspected to micron tolerances, and rebuilt with genuine seals and replacement parts.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8 text-[15px]">
              Before dispatch, each reconditioned unit undergoes dynamic load testing on our computerized hydraulic test benches. We certify pressure, flow, and efficiency curves, backed by our **12-month performance warranty**—ensuring absolute reliability.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#E8620A] hover:bg-orange-500 text-white px-7 py-3.5 rounded-xl font-semibold transition-all hover:-translate-y-0.5 shadow-lg shadow-orange-200"
            >
              <Phone size={16} />
              Enquire About Stock Units
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 bg-[#F4F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <span className="inline-block bg-orange-50 text-orange-500 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-orange-200 mb-4">
              Visual Comparison
            </span>
            <h2 className="text-3xl font-bold text-[#0B3D4E]" style={{ fontFamily: "'Syne', sans-serif" }}>Before &amp; After Reconditioning</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {beforeAfterData.map((data, i) => (
              <motion.div 
                key={i} 
                {...fadeUp(i * 0.1)}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="h-56 relative overflow-hidden">
                  <img src={data.img} alt={data.title} className="w-full h-full object-cover" />
                  <span className={`absolute top-4 left-4 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded ${i === 0 ? "bg-red-500" : "bg-green-500"}`}>
                    {data.badge}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#0B3D4E] text-lg mb-3">{data.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{data.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternating Process details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <span className="inline-block bg-orange-50 text-orange-500 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-orange-200 mb-4">
              Precision Workflows
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B3D4E]" style={{ fontFamily: "'Syne', sans-serif" }}>Our Reconditioning Standard</h2>
          </motion.div>

          <div className="space-y-16">
            {/* Block 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeUp(0)} className="order-2 lg:order-1">
                <h3 className="text-[#0B3D4E] font-bold text-2xl mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>Tolerance Inspection &amp; Part NDT</h3>
                <p className="text-slate-500 text-sm leading-[1.8] mb-6">
                  Every dismantled pump is subjected to non-destructive testing (NDT) to identify internal structural micro-fractures in pistons and housings. Using precision coordinates measurement systems (CMS), we audit clearances to down to a single micron tolerance to ensure zero-bypass volumetric efficiency.
                </p>
                <div className="flex gap-4">
                  <div className="border-l-4 border-[#E8620A] pl-4">
                    <p className="text-sm font-bold text-[#0B3D4E]">Micron Checking</p>
                    <p className="text-slate-500 text-xs">Audited dimensions compared line-by-line with OEM blueprint standards.</p>
                  </div>
                </div>
              </motion.div>
              <motion.div {...fadeUp(0.1)} className="order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" 
                  alt="Precision CMS Inspection" 
                  className="w-full h-[320px] object-cover rounded-2xl shadow-lg border border-slate-100" 
                />
              </motion.div>
            </div>

            {/* Block 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeUp(0.1)}>
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80" 
                  alt="Certified Rebuilt Pump" 
                  className="w-full h-[320px] object-cover rounded-2xl shadow-lg border border-slate-100" 
                />
              </motion.div>
              <motion.div {...fadeUp(0)}>
                <h3 className="text-[#0B3D4E] font-bold text-2xl mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>Full Dynamic Load Dyno Run</h3>
                <p className="text-slate-500 text-sm leading-[1.8] mb-6">
                  Reconditioned assemblies are loaded onto our hydraulic test stand. We simulate real machine operation cycles up to 450 Bar. A digital report containing flow rate curves, pressure response, leakage indices, and efficiency coefficients is generated and signed off by our QA lead.
                </p>
                <div className="flex gap-4">
                  <div className="border-l-4 border-[#E8620A] pl-4">
                    <p className="text-sm font-bold text-[#0B3D4E]">QA Approved</p>
                    <p className="text-slate-500 text-xs">Each unit leaves our facility with a customized dynamic validation certificate.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-[#0B3D4E] relative overflow-hidden text-white">
        <div className="absolute inset-0 stripe-bg opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: 1200, label: "Units Reconditioned", suffix: "+" },
              { value: 60, label: "Average Cost Savings", suffix: "%" },
              { value: 100, label: "Volumetric Checked", suffix: "%" },
              { value: 12, label: "Performance Warranty", suffix: " Mon" }
            ].map((s, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)}>
                <div className="text-4xl md:text-5xl font-black text-orange-400 mb-2 font-mono">
                  <CountUp end={s.value} duration={2.5} enableScrollSpy scrollSpyOnce />
                  {s.suffix}
                </div>
                <p className="text-white/70 text-xs font-semibold uppercase tracking-wider">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-50 text-orange-500 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-orange-200 mb-4">
              Value Proposition
            </span>
            <h2 className="text-3xl font-bold text-[#0B3D4E]" style={{ fontFamily: "'Syne', sans-serif" }}>Why Buy Reconditioned Units?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((b, i) => (
              <motion.div key={b.title} {...fadeUp(i * 0.1)} className="flex items-start gap-5 bg-[#F4F7FA] p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:border-[#0B3D4E]/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#0B3D4E]/8 flex items-center justify-center flex-shrink-0">
                  <b.icon size={22} className="text-[#0B3D4E]" />
                </div>
                <div>
                  <strong className="block text-[#0B3D4E] font-bold text-base mb-2">{b.title}</strong>
                  <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Process */}
      <section className="py-20 bg-[#F4F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-50 text-orange-500 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-orange-200 mb-4">
              Quality Assurance Workflow
            </span>
            <h2 className="text-3xl font-bold text-[#0B3D4E]" style={{ fontFamily: "'Syne', sans-serif" }}>Our Reconditioning Workflow</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Complete Tear-down", desc: "Units are fully disassembled. Every block, piston, shaft, and valve plate is cleaned to ISO 4406 standard." },
              { step: "02", title: "Dimensional Audit", desc: "Micrometer inspection of critical tolerances. Parts with wear exceeding OEM limits are scrapped." },
              { step: "03", title: "OEM Parts Rebuild", desc: "Reassembly using 100% genuine OEM replacement parts, sealing rings, and bearings." },
              { step: "04", title: "Dynamic Load Testing", desc: "Validated at full operating pressure (up to 450 Bar) and flow rates to generate certification reports." },
            ].map((p, i) => (
              <motion.div key={p.step} {...fadeUp(i * 0.1)} className="relative bg-white rounded-2xl p-7 border border-slate-200 hover:border-[#0B3D4E]/25 shadow-sm hover:shadow-md transition-all">
                <span className="block text-4xl font-bold text-[#E8620A]/15 mb-3">{p.step}</span>
                <h3 className="font-bold text-[#0B3D4E] text-base mb-2">{p.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <span className="inline-block bg-orange-50 text-orange-500 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-orange-200 mb-4">
              FAQs
            </span>
            <h2 className="text-3xl font-bold text-[#0B3D4E]" style={{ fontFamily: "'Syne', sans-serif" }}>Common Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <motion.div 
                key={i} 
                {...fadeUp(i * 0.05)}
                className="bg-[#F4F7FA] rounded-2xl border border-slate-200/60 overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-[#0B3D4E] text-[15px] hover:text-[#E8620A] transition-colors"
                  onClick={() => toggleFaq(i)}
                >
                  <span>{item.q}</span>
                  {openFaq === i ? <Minus size={16} className="text-[#E8620A]" /> : <Plus size={16} />}
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-slate-500 text-sm leading-relaxed border-t border-slate-200/30">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
          <p className="text-orange-400 text-[10px] font-bold tracking-widest uppercase mb-4">Stock Inquiries</p>
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>Ready to Experience Premium Performance?</h2>
          <p className="text-white/65 mb-8 leading-relaxed text-[15.5px]">
            Enquire today to verify pricing and stock availability of reconditioned pumps and motors for your operations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#E8620A] hover:bg-[#F47A2A] text-white px-8 py-4 rounded-xl font-semibold transition-all hover:-translate-y-0.5 shadow-xl shadow-orange-950/30"
          >
            <Phone size={17} /> Contact Our Sales Team
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Service_Reconditional;
