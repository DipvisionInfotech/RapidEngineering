import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, Wrench, Award, Headphones, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "ISO Certified Quality",
    desc: "Every repair meets strict ISO quality management standards. We use only genuine OEM parts and perform rigorous test-bench validation before delivery.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround Times",
    desc: "We understand that downtime costs money. Our streamlined workshop process delivers rapid repairs without compromising on precision or quality.",
  },
  {
    icon: Wrench,
    title: "OEM Authorised Service",
    desc: "Authorised service partner for Bosch Rexroth, Danfoss, Caterpillar, Volvo CE and more — giving you factory-level expertise at your doorstep.",
  },
  {
    icon: Award,
    title: "13+ Years of Expertise",
    desc: "Over a decade of specialised hydraulic engineering experience across 9+ industries — from agriculture and mining to defence and marine.",
  },
  {
    icon: Headphones,
    title: "Dedicated After-Sales Support",
    desc: "Our engineers remain available post-repair for technical guidance, scheduled check-ups, and emergency response through our AMC programmes.",
  },
  {
    icon: TrendingUp,
    title: "Nationwide Service Network",
    desc: "With coverage across 15+ states, we bring expert hydraulic service directly to your facility — anywhere in India.",
  },
];

const WhyUsSection = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">

      <div className="grid lg:grid-cols-[400px_1fr] gap-16 items-start">

        {/* Left – sticky title */}
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.65 }}
          className="lg:sticky lg:top-28">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[3px] bg-[#E8620A] rounded-full" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#E8620A]">Why Choose Us</span>
          </div>
          <h2 className="text-[#0B3D4E] font-extrabold leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(2rem,3.5vw,2.9rem)", fontFamily: "'Syne',sans-serif" }}>
            The Rapid Engineering Difference
          </h2>
          <p className="text-slate-500 text-[15px] leading-[1.85] mb-8">
            Choosing the right hydraulic service partner is critical.
            Here's what sets Rapid Engineering apart from the rest.
          </p>

          {/* Big teal block */}
          <div className="rounded-2xl bg-[#0B3D4E] p-7 text-white relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-white/5" />
            <p className="text-orange-400 text-[10px] font-bold tracking-widest uppercase mb-3">Our Promise</p>
            <blockquote className="text-white/85 text-[15px] leading-[1.8] italic">
              "We treat every hydraulic unit like it's going back into a mission-critical machine — because it usually is."
            </blockquote>
            <p className="text-white/40 text-xs mt-4">— Rapid Engineering Team</p>
          </div>
        </motion.div>

        {/* Right – reasons grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {reasons.map((r, i) => (
            <motion.div key={r.title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.55 }}
              className="group flex gap-4 p-6 rounded-2xl border border-slate-200 bg-[#F4F7FA] hover:bg-white hover:shadow-lg hover:border-slate-300 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-[#0B3D4E]/8 group-hover:bg-[#E8620A] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                <r.icon size={20} className="text-[#0B3D4E] group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-bold text-[#0B3D4E] text-sm mb-2">{r.title}</h3>
                <p className="text-slate-500 text-[13px] leading-[1.75]">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  </section>
);

export default WhyUsSection;
