import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Wrench, Factory, MapPin, Users } from "lucide-react";

const stats = [
  { icon: Wrench,   value: 500, suffix: "+", label: "Successful Repairs",  sub: "Across pumps, motors & cylinders" },
  { icon: Factory,  value: 9,   suffix: "+", label: "Industries Served",   sub: "From mining to marine" },
  { icon: MapPin,   value: 15,  suffix: "+", label: "States Covered",      sub: "Pan-India service network" },
  { icon: Users,    value: 50,  suffix: "+", label: "Expert Engineers",     sub: "Certified & experienced team" },
];

const StatsBar = () => (
  <section className="relative bg-[#0B3D4E] py-20 overflow-hidden">
    {/* Background texture */}
    <div className="absolute inset-0 stripe-bg opacity-40" />
    {/* Glow */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />

    <div className="relative max-w-7xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} className="text-center mb-14">
        <p className="text-orange-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-3">Our Track Record</p>
        <h2 className="text-white font-bold text-3xl md:text-4xl" style={{ fontFamily: "'Syne',sans-serif" }}>
          Numbers That Speak for Themselves
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((s, i) => (
          <motion.div key={s.label}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.55 }}
            className="group glass-card rounded-2xl p-7 text-center hover:bg-white/12 transition-all duration-300 hover:-translate-y-1">

            <div className="w-12 h-12 rounded-xl bg-orange-500/15 group-hover:bg-orange-500/25 flex items-center justify-center mx-auto mb-4 transition-colors">
              <s.icon size={22} className="text-orange-400" />
            </div>

            <div className="text-4xl font-black text-white mb-1.5" style={{ fontFamily: "'Syne',sans-serif" }}>
              <CountUp end={s.value} duration={2.5} enableScrollSpy scrollSpyOnce />
              <span className="text-orange-400">{s.suffix}</span>
            </div>

            <p className="text-white font-semibold text-sm mb-1">{s.label}</p>
            <p className="text-white/40 text-xs leading-tight">{s.sub}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBar;
