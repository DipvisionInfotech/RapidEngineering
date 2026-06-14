import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Wrench, Shield, Clock, Award, Users, Target, Zap, CheckCircle, Phone, ChevronDown, Plus, Minus } from "lucide-react";
import CountUp from "react-countup";
import PageHero from "../components/PageHero";

// Import workshop images from assets
import workshopImg1 from "../assets/zYPLrkH3-0pbdigELCOdqOiumpY3lazHVUP6OWMk-Gi0taJUvCpEmviwIUV-80KKRleDwM5AL4uHMjwG_yE2Hv3g0uNg3BEnKJa-tOn_ywJthTn6pupUv4ecrJVgutl522_gEUhc-_VTpEwF1gzplnLeRzTcv685zhlVzOHNySJZI7QQMQn91A8X5p11cUYP.jpg";
import workshopImg2 from "../assets/FMxb3NbLh7WfavQu9eWPZlZ-uUfzp_3oQ-4agrxx26dq_HSwW5EDhUFdZbCwsJzMQZ9LEumwzcQQ5mkzPfuv3VD6CDVoG0VxEa2PJoFCkJL-EYphmbWcoeljBGKqXRs8lkKiQGKclw-M2PflOFpRWxyKMd-MRjutM2jN8YUugOGNQtw5oMpL3Kgr-W4NT5G4.jpg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, delay, ease: "easeOut" },
});

const services = [
  {
    icon: Wrench,
    title: "Component Repair",
    desc: "Detailed component-level repairs using genuine or high-quality replacement parts.",
    items: ["Pumps & Motors", "Valves & Cylinders", "Power Units", "Control Systems"],
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=150&q=80"
  },
  {
    icon: Shield,
    title: "Complete Overhaul",
    desc: "Full system overhauls to restore equipment to peak operating condition.",
    items: ["System Analysis", "Complete Rebuild", "Performance Testing", "Quality Certification"],
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=150&q=80"
  },
  {
    icon: Clock,
    title: "Emergency Repair",
    desc: "24/7 emergency repair services to minimize critical downtime.",
    items: ["Rapid Response", "On-site Service", "Emergency Parts", "Priority Support"],
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=150&q=80"
  },
  {
    icon: Award,
    title: "Preventive Maintenance",
    desc: "Comprehensive maintenance programs to prevent unexpected failures.",
    items: ["Scheduled Maintenance", "Condition Monitoring", "Predictive Analysis", "AMC Support"],
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=150&q=80"
  },
];

const process = [
  { icon: Target, step: "01", title: "Diagnosis", desc: "Thorough holistic diagnosis to identify root causes and not just visible issues." },
  { icon: Wrench, step: "02", title: "Repair", desc: "Expert technicians carry out necessary repairs and component replacements." },
  { icon: Zap, step: "03", title: "Testing", desc: "Rigorous testing on advanced hydraulic test benches to ensure peak performance." },
  { icon: CheckCircle, step: "04", title: "Delivery", desc: "Quality certification and timely delivery of restored equipment." },
];

const faqItems = [
  {
    q: "What is your typical repair turnaround time?",
    a: "Our standard repairs take 3 to 5 business days. For emergency cases, we offer a 24-hour response and rapid turnaround depending on components and seal availability."
  },
  {
    q: "Do you use genuine OEM replacement parts?",
    a: "Yes, we use 100% genuine parts from brands like Bosch Rexroth, Danfoss, Eaton, and Parker to ensure long-term reliability and complete factory compatibility."
  },
  {
    q: "What kind of testing do you perform after repair?",
    a: "We test every pump and motor under dynamic full load on our computerized digital dyno bench up to 450 bar, validating volumetric efficiency before dispatch."
  },
  {
    q: "Do you provide a warranty on your repairs?",
    a: "Absolutely. All major reconditioning and overhauls come with a comprehensive 6 to 12-month warranty covering materials and workmanship."
  },
  {
    q: "Can your team perform on-site troubleshooting?",
    a: "Yes, we have a mobile field service team equipped with portable diagnostic flowmeters, telemetry, and pressure sensors to perform on-site system troubleshooting across India."
  }
];

const Service_repair = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white overflow-hidden">
      <PageHero
        badge="Expert Repair & Overhaul Solutions"
        title="Repair & Overhaul Services"
        subtitle="At Rapid Engineering Services, we provide end-to-end hydraulic repair and overhaul services designed to restore equipment performance, minimize downtime, and extend machinery life."
        bgImage="https://img.freepik.com/free-photo/close-up-image-nut-key-mechanic-s-arm_613910-13714.jpg"
      />

      {/* Trust Badges */}
      <section className="bg-[#F4F7FA] py-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Shield, label: "Quality Assured", sub: "Genuine parts & rigorous testing" },
            { icon: Clock, label: "Fast Turnaround", sub: "Minimize downtime" },
            { icon: Award, label: "Authorized Partner", sub: "Danfoss & Rexroth" },
            { icon: Users, label: "Expert Team", sub: "Certified technicians" },
          ].map(({ icon: Icon, label, sub }, i) => (
            <motion.div key={label} {...fadeUp(i * 0.08)} className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-slate-200/80 hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-xl bg-[#0B3D4E]/8 flex items-center justify-center flex-shrink-0">
                <Icon size={20} className="text-[#0B3D4E]" />
              </div>
              <div>
                <p className="font-semibold text-[#0B3D4E] text-sm">{label}</p>
                <p className="text-slate-500 text-xs">{sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <span className="inline-block bg-orange-50 text-orange-500 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-orange-200 mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B3D4E]" style={{ fontFamily: "'Syne', sans-serif" }}>Our Repair &amp; Overhaul Services</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.title} {...fadeUp(i * 0.1)} className="group bg-white rounded-2xl p-7 border border-slate-200 hover:border-[#0B3D4E] hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5">
                <div className="w-12 h-12 rounded-xl overflow-hidden mb-5 border border-slate-100 flex-shrink-0">
                  <img src={s.img} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-bold text-[#0B3D4E] text-base mb-3 transition-colors">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 transition-colors">{s.desc}</p>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-slate-600 font-medium transition-colors">
                      <CheckCircle size={13} className="text-[#E8620A] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-[#F4F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <span className="inline-block bg-orange-50 text-orange-500 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-orange-200 mb-4">
              Our Process
            </span>
            <h2 className="text-3xl font-bold text-[#0B3D4E]" style={{ fontFamily: "'Syne', sans-serif" }}>Our Proven Process</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              Every repair begins with a thorough holistic diagnosis followed by expert repairs and rigorous testing.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <motion.div key={p.step} {...fadeUp(i * 0.1)} className="text-center relative bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative w-20 h-20 mx-auto mb-5">
                  <div className="w-full h-full rounded-full bg-white border-4 border-[#0B3D4E]/10 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#0B3D4E] flex items-center justify-center">
                      <p.icon size={22} className="text-white" />
                    </div>
                  </div>
                  <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#E8620A] text-white text-xs font-bold flex items-center justify-center shadow">
                    {p.step}
                  </span>
                </div>
                <h3 className="font-bold text-[#0B3D4E] mb-2 text-base">{p.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternating Workshop Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <span className="inline-block bg-orange-50 text-orange-500 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-orange-200 mb-4">
              Inside Our Facility
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B3D4E]" style={{ fontFamily: "'Syne', sans-serif" }}>Our Advanced Workshop</h2>
          </motion.div>

          <div className="space-y-16">
            {/* Block 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeUp(0)} className="order-2 lg:order-1">
                <h3 className="text-[#0B3D4E] font-bold text-2xl mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>State-of-the-Art Machining</h3>
                <p className="text-slate-500 text-sm leading-[1.8] mb-6">
                  Our facility is equipped with heavy-duty horizontal lathes, cylindrical grinding machines, and honing benches. This allows us to re-machine cylinder rods and hone barrels back to precise OEM tolerances. Our expert machinists can salvage obsolete housings that are otherwise unavailable on the market.
                </p>
                <div className="flex gap-4">
                  <div className="border-l-4 border-[#E8620A] pl-4">
                    <p className="text-sm font-bold text-[#0B3D4E]">Micron Precision</p>
                    <p className="text-slate-500 text-xs">Barrel honing and rod polishing up to mirror-like finishes.</p>
                  </div>
                </div>
              </motion.div>
              <motion.div {...fadeUp(0.1)} className="order-1 lg:order-2">
                <img 
                  src={workshopImg1} 
                  alt="Precision Machining Workshop" 
                  className="w-full h-[360px] object-cover rounded-2xl shadow-xl border border-slate-100" 
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"; }}
                />
              </motion.div>
            </div>

            {/* Block 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeUp(0.1)}>
                <img 
                  src={workshopImg2} 
                  alt="Computerized Testing Bench" 
                  className="w-full h-[360px] object-cover rounded-2xl shadow-xl border border-slate-100" 
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"; }}
                />
              </motion.div>
              <motion.div {...fadeUp(0)}>
                <h3 className="text-[#0B3D4E] font-bold text-2xl mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>Digital Dyno Testing</h3>
                <p className="text-slate-500 text-sm leading-[1.8] mb-6">
                  No rebuilt pump, motor, or cylinder leaves our facility without undergoing computerized dynamic load testing. Our testing bench simulates real-world operating pressures up to 450 Bar and monitors flow rate, temperature, and volumetric efficiency digitally to guarantee zero-leak performance.
                </p>
                <div className="flex gap-4">
                  <div className="border-l-4 border-[#E8620A] pl-4">
                    <p className="text-sm font-bold text-[#0B3D4E]">450 Bar Pressure</p>
                    <p className="text-slate-500 text-xs">Simulating extreme working cycles under real mechanical loads.</p>
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
              { value: 500, label: "Repairs Completed", suffix: "+" },
              { value: 13, label: "Years of Service", suffix: "+" },
              { value: 24, label: "Emergency Turnaround", suffix: "hr" },
              { value: 98, label: "Success Rate", suffix: "%" }
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
          <p className="text-orange-400 text-[10px] font-bold tracking-widest uppercase mb-4">Get in Touch</p>
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>Ready to Restore Your Equipment?</h2>
          <p className="text-white/65 mb-8 leading-relaxed text-[15.5px]">
            Whether it's a one-time repair, an overhaul, or an AMC requirement — our team is ready to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#E8620A] hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-xl shadow-orange-950/30"
          >
            <Phone size={17} />
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Service_repair;
