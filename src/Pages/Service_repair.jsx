import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Wrench, Shield, Clock, Award, Users, Target, Zap, CheckCircle, Phone } from "lucide-react";
import PageHero from "../components/PageHero";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, delay, ease: "easeOut" },
});

const services = [
  {
    icon: Wrench,
    title: "Component Repair",
    desc: "Detailed component-level repairs using genuine or high-quality replacement parts.",
    items: ["Pumps & Motors", "Valves & Cylinders", "Power Units", "Control Systems"],
  },
  {
    icon: Shield,
    title: "Complete Overhaul",
    desc: "Full system overhauls to restore equipment to peak operating condition.",
    items: ["System Analysis", "Complete Rebuild", "Performance Testing", "Quality Certification"],
  },
  {
    icon: Clock,
    title: "Emergency Repair",
    desc: "24/7 emergency repair services to minimize critical downtime.",
    items: ["Rapid Response", "On-site Service", "Emergency Parts", "Priority Support"],
  },
  {
    icon: Award,
    title: "Preventive Maintenance",
    desc: "Comprehensive maintenance programs to prevent unexpected failures.",
    items: ["Scheduled Maintenance", "Condition Monitoring", "Predictive Analysis", "AMC Support"],
  },
];

const process = [
  { icon: Target, step: "01", title: "Diagnosis", desc: "Thorough holistic diagnosis to identify root causes and not just visible issues." },
  { icon: Wrench, step: "02", title: "Repair", desc: "Expert technicians carry out necessary repairs and component replacements." },
  { icon: Zap, step: "03", title: "Testing", desc: "Rigorous testing on advanced hydraulic test benches to ensure peak performance." },
  { icon: CheckCircle, step: "04", title: "Delivery", desc: "Quality certification and timely delivery of restored equipment." },
];

const Service_repair = () => {
  return (
    <div className="bg-white">
      <PageHero
        badge="Expert Repair & Overhaul Solutions"
        title="Repair & Overhaul Services"
        subtitle="At Rapid Engineering Services, we provide end-to-end hydraulic repair and overhaul services designed to restore equipment performance, minimize downtime, and extend machinery life."
        bgImage="https://img.freepik.com/free-photo/close-up-image-nut-key-mechanic-s-arm_613910-13714.jpg"
      />

      {/* Quick trust badges */}
      <section className="bg-[#f4f6f8] py-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Shield, label: "Quality Assured", sub: "Genuine parts & rigorous testing" },
            { icon: Clock, label: "Fast Turnaround", sub: "Minimize downtime" },
            { icon: Award, label: "Authorized Partner", sub: "Danfoss & Rexroth" },
            { icon: Users, label: "Expert Team", sub: "Certified technicians" },
          ].map(({ icon: Icon, label, sub }, i) => (
            <motion.div key={label} {...fadeUp(i * 0.08)} className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-slate-200">
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
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-50 text-orange-500 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-orange-200 mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl font-bold text-[#0B3D4E]">Our Repair &amp; Overhaul Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.title} {...fadeUp(i * 0.1)} className="group bg-[#f4f6f8] hover:bg-[#0B3D4E] rounded-2xl p-7 border border-slate-200 hover:border-[#0B3D4E] transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-white group-hover:bg-white/15 flex items-center justify-center mb-5 transition-colors">
                  <s.icon size={26} className="text-[#0B3D4E] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-[#0B3D4E] group-hover:text-white text-base mb-3 transition-colors">{s.title}</h3>
                <p className="text-slate-500 group-hover:text-white/70 text-sm leading-relaxed mb-4 transition-colors">{s.desc}</p>
                <ul className="space-y-1.5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-slate-600 group-hover:text-white/70 transition-colors">
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

      {/* Process */}
      <section className="py-20 bg-[#f4f6f8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-50 text-orange-500 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-orange-200 mb-4">
              Our Process
            </span>
            <h2 className="text-3xl font-bold text-[#0B3D4E]">Our Proven Process</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              Every repair begins with a thorough holistic diagnosis followed by expert repairs and rigorous testing.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <motion.div key={p.step} {...fadeUp(i * 0.1)} className="text-center relative">
                <div className="relative w-20 h-20 mx-auto mb-5">
                  <div className="w-full h-full rounded-full bg-white border-4 border-[#0B3D4E]/10 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#0B3D4E] flex items-center justify-center">
                      <p.icon size={22} className="text-white" />
                    </div>
                  </div>
                  <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#E8620A] text-white text-xs font-bold flex items-center justify-center">
                    {p.step}
                  </span>
                </div>
                <h3 className="font-bold text-[#0B3D4E] mb-2">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0B3D4E]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Restore Your Equipment?</h2>
          <p className="text-white/65 mb-8 leading-relaxed">
            Whether it's a one-time repair, an overhaul, or an AMC requirement — our team is ready to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#E8620A] hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-orange-900/40"
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
