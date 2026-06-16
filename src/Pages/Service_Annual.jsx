import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { CalendarCheck, Settings, AlertTriangle, Package, MessageSquare, FileText, Phone, Check, X, Plus, Minus } from "lucide-react";
import PageHero from "../components/PageHero";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, delay, ease: "easeOut" },
});

const coverItems = [
  {
    icon: CalendarCheck,
    title: "Regular Check-ups",
    desc: "Scheduled site visits for diagnostics, inspection, and preventative maintenance of all hydraulic systems.",
  },
  {
    icon: Settings,
    title: "System Tune-ups",
    desc: "Optimization of system parameters to ensure maximum efficiency, energy savings, and operational smoothness.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Support",
    desc: "Priority access to our expert technicians for breakdown services, minimizing downtime and production loss.",
  },
  {
    icon: Package,
    title: "Parts & Spares",
    desc: "Guaranteed availability of essential spare parts, ensuring quick repairs without delays.",
  },
  {
    icon: MessageSquare,
    title: "Expert Consultation",
    desc: "Access to our experienced engineers for technical advice, system upgrades, and long-term planning.",
  },
  {
    icon: FileText,
    title: "Service Reports",
    desc: "Detailed documentation after each service visit, providing a clear history and recommendations for your equipment.",
  },
];

const timelineSteps = [
  { step: "01", title: "Initial System Audit", desc: "Complete physical inspection of all reservoirs, filtration circuits, and main manifold blocks to baseline your system health." },
  { step: "02", title: "Custom SLA Agreement", desc: "Design a tailored contract matching your specific production cycles, checking frequency, and emergency response time rules." },
  { step: "03", title: "Proactive Schedules", desc: "Executing monthly or quarterly visits focused on oil particle audits, accumulator checks, and pressure calibrations." },
  { step: "04", title: "Priority Dispatch", desc: "Immediate mobilization of service engineers in case of a critical breakdown, backed by your SLA guarantee." }
];

const tiers = [
  { name: "Silver SLA", price: "Entry", features: ["2 Preventive Visits/Year", "48-Hour Emergency Response", "Basic ISO Oil Analysis", "Extra charge for callouts", "Standard spare parts pricing"] },
  { name: "Gold SLA", price: "Popular", features: ["4 Preventive Visits/Year", "24-Hour Emergency Response", "Advanced Particle Analysis", "2 Free Emergency Callouts/Year", "10% Discount on Spares & Rebuilds"] },
  { name: "Platinum SLA", price: "Ultimate", features: ["12 Preventive Visits/Year (Monthly)", "8-Hour Emergency Response", "Real-Time Sensor Audits", "Unlimited Emergency Callouts", "20% Discount + Priority Workshop Slot"] }
];

const faqItems = [
  {
    q: "How is the AMC price calculated?",
    a: "Pricing is based on the total number of hydraulic systems, machine age, reservoir capacities, and the selected SLA response window (8hr vs 24hr vs 48hr)."
  },
  {
    q: "Does the contract include the cost of spare parts?",
    a: "Standard contracts exclude the cost of replacement parts but grant pre-negotiated discount rates. We also offer fully-inclusive contracts that cover all spare parts under a flat annual rate."
  },
  {
    q: "What happens if we experience an emergency at night?",
    a: "Our Platinum and Gold clients have access to our 24/7 priority hotline. Field engineers are mobilized immediately according to your contract's response time guarantee."
  },
  {
    q: "Do you provide ISO certification reports?",
    a: "Yes. After every check-up, we provide comprehensive laboratory oil cleanliness reports according to ISO 4406 standards, ideal for corporate QA audits."
  },
  {
    q: "Is there a setup fee or initial assessment cost?",
    a: "We charge a nominal fee for the initial system health assessment. However, 100% of this fee is credited back to your account when you sign the final AMC contract."
  }
];

const Service_Annual = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white overflow-hidden">
      <PageHero
        badge="Predictive & Preventative Care"
        title="Annual Maintenance Contracts"
        subtitle="Protect your investments, reduce unscheduled downtime by 85%, and optimize system efficiency with customized hydraulic AMC solutions."
        bgImage="https://img.freepik.com/free-photo/busy-professional-looking-businesspeople-writing_1150-1698.jpg"
      />

      {/* Why AMC */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp(0)}>
            <span className="inline-block bg-orange-50 text-orange-500 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-orange-200 mb-5">
              Maximize Operational Lifetime
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B3D4E] mb-5 leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
              Eliminate Hydraulic Failures Before They Happen
            </h2>
            <p className="text-slate-500 leading-relaxed mb-5 text-[15px]">
              Hydraulic system breakdown is one of the leading causes of unscheduled factory shutdowns. A structured Annual Maintenance Contract (AMC) with Rapid Engineering Services guarantees a proactive, engineering-first approach to machinery health.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8 text-[15px]">
              We perform regular fluid cleanliness audits, monitor operating temperatures, recalibrate proportional valves, and inspect seals to catch wear early. This systematic maintenance structure keeps your operations running efficiently with highly predictable annual maintenance costs.
            </p>
            
          </motion.div>
          <motion.div {...fadeUp(0.1)} className="grid grid-cols-2 gap-4">
            {[
              ["85% Downtime Reduction", "Proactive particle monitoring stops catastrophic pump failures."],
              ["Fixed Maintenance Budgets", "Plan your annual expenditure without unexpected breakdown costs."],
              ["Extended Component Life", "Proper seal and valve calibration doubles operational lifecycle."],
              ["24/7 Priority Emergency Callout", "Rapid response on-site troubleshooting included in standard SLAs."],
            ].map(([title, desc]) => (
              <div key={title} className="bg-[#f4f6f8] rounded-2xl p-5 border border-slate-200 hover:shadow-md transition-shadow">
                <strong className="block text-[#0B3D4E] font-bold text-sm mb-1.5">{title}</strong>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How AMC Works Timeline */}
      <section className="py-20 bg-[#F4F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <span className="inline-block bg-orange-50 text-orange-500 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-orange-200 mb-4">
              Step-by-step
            </span>
            <h2 className="text-3xl font-bold text-[#0B3D4E]" style={{ fontFamily: "'Syne', sans-serif" }}>How AMC Integration Works</h2>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-6 right-6 h-0.5 border-t border-dashed border-slate-300 -translate-y-1/2 -z-0" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {timelineSteps.map((step, i) => (
                <motion.div key={i} {...fadeUp(i * 0.1)} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all text-center">
                  <div className="w-12 h-12 rounded-full bg-[#E8620A] text-white flex items-center justify-center font-bold text-lg mx-auto mb-4 shadow-md">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-[#0B3D4E] text-base mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Scope Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <span className="inline-block bg-orange-50 text-orange-500 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-orange-200 mb-4">
              Under the Hood
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B3D4E]" style={{ fontFamily: "'Syne', sans-serif" }}>Preventative Operations</h2>
          </motion.div>

          <div className="space-y-16">
            {/* Block 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeUp(0)} className="order-2 lg:order-1">
                <h3 className="text-[#0B3D4E] font-bold text-2xl mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>Continuous Fluid Cleanliness Audits</h3>
                <p className="text-slate-500 text-sm leading-[1.8] mb-6">
                  90% of hydraulic component wear is caused by microscopic oil contamination. We use laser-diode particle counters during our site visits to measure ISO 4406 codes. If particle counts exceed safe limits, we connect our portable bypass filtration kidney loops to cleanse your reservoir without shutting down your line.
                </p>
                <div className="flex gap-4">
                  <div className="border-l-4 border-[#E8620A] pl-4">
                    <p className="text-sm font-bold text-[#0B3D4E]">ISO 4406 Auditing</p>
                    <p className="text-slate-500 text-xs">Verify oil particle contamination limits scientifically.</p>
                  </div>
                </div>
              </motion.div>
              <motion.div {...fadeUp(0.1)} className="order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80" 
                  alt="Fluid contamination checks" 
                  className="w-full h-[320px] object-cover rounded-2xl shadow-lg border border-slate-100" 
                />
              </motion.div>
            </div>

            {/* Block 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeUp(0.1)}>
                <img 
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80" 
                  alt="Manifold checkups" 
                  className="w-full h-[320px] object-cover rounded-2xl shadow-lg border border-slate-100" 
                />
              </motion.div>
              <motion.div {...fadeUp(0)}>
                <h3 className="text-[#0B3D4E] font-bold text-2xl mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>Proportional Solenoid &amp; Drift Adjustments</h3>
                <p className="text-slate-500 text-sm leading-[1.8] mb-6">
                  Over time, proportional valve solenoids slide off their null-point calibration due to thermal cycling. This results in jerking cylinders, erratic travel motor speed, and slow response times. Our engineers recalibrate input voltages and check cylinder drift indices to keep movement sub-millimeter precise.
                </p>
                <div className="flex gap-4">
                  <div className="border-l-4 border-[#E8620A] pl-4">
                    <p className="text-sm font-bold text-[#0B3D4E]">Valve Calibration</p>
                    <p className="text-slate-500 text-xs">Maintain exact control dynamics and mechanical speed profiles.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison SLA Cards */}
      <section className="py-20 bg-[#F4F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-50 text-orange-500 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-orange-200 mb-4">
              Contract Tiers
            </span>
            <h2 className="text-3xl font-bold text-[#0B3D4E]" style={{ fontFamily: "'Syne', sans-serif" }}>Select Your Service Level</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tiers.map((tier, i) => (
              <motion.div 
                key={i} 
                {...fadeUp(i * 0.1)}
                className={`bg-white rounded-2xl border p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${i === 1 ? "border-[#E8620A] ring-2 ring-[#E8620A]/20" : "border-slate-200"}`}
              >
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded mb-4 inline-block ${i === 1 ? "bg-[#E8620A] text-white" : "bg-[#0B3D4E]/10 text-[#0B3D4E]"}`}>
                    {tier.price}
                  </span>
                  <h3 className="font-bold text-[#0B3D4E] text-xl mb-6">{tier.name}</h3>
                  <ul className="space-y-4">
                    {tier.features.map((feat, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-slate-500 text-sm leading-relaxed font-medium">
                        <Check size={16} className="text-[#E8620A] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/contact" className="block text-center bg-[#0B3D4E] hover:bg-[#E8620A] text-white py-3.5 rounded-xl font-bold text-sm mt-8 transition-colors shadow-sm">
                  Request Info
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What AMC covers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-50 text-orange-500 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-orange-200 mb-4">
              Service Scope
            </span>
            <h2 className="text-3xl font-bold text-[#0B3D4E]" style={{ fontFamily: "'Syne', sans-serif" }}>What Our AMC Covers</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverItems.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp(i * 0.08)}
                className="group bg-[#F4F7FA] rounded-2xl p-7 border border-slate-200 hover:border-[#0B3D4E] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 group-hover:bg-[#0B3D4E] flex items-center justify-center mb-5 transition-colors shadow-sm">
                  <item.icon size={22} className="text-[#0B3D4E] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-[#0B3D4E] mb-2 text-base">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-[#F4F7FA]">
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
                className="bg-white rounded-2xl border border-slate-200/60 overflow-hidden"
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
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>Protect Your Plant Operations</h2>
          <p className="text-white/65 mb-8 max-w-xl mx-auto leading-relaxed text-[15.5px]">
            Contact us today to schedule a site audit. Our engineering team will review your machinery setup and design a bespoke maintenance schedule that keeps your systems performing reliably.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#E8620A] hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:-translate-y-0.5 shadow-xl shadow-orange-950/30"
          >
            <Phone size={17} /> Setup a Maintenance SLA
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Service_Annual;
