import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

const certs = [
  { label: "ISO 9001:2015",        sub: "Quality Management System" },
  { label: "OEM Authorised",       sub: "Bosch Rexroth & Danfoss" },
  { label: "Trained Engineers",    sub: "Certified Hydraulic Technicians" },
  { label: "Test Bench Certified", sub: "In-house pressure & flow testing" },
];

const facts = [
  "All repairs pressure-tested on advanced hydraulic test benches",
  "Genuine OEM replacement parts used wherever applicable",
  "Full inspection report provided with every repaired unit",
  "Warranty on reconditioned units and repair work",
  "Strict traceability of parts and service records maintained",
];

const CertificationsSection = () => (
  <section className="py-20 bg-[#0B3D4E] overflow-hidden relative">
    <div className="absolute inset-0 stripe-bg opacity-30" />
    <div className="absolute right-0 top-0 w-80 h-80 bg-orange-500/6 rounded-full blur-3xl pointer-events-none" />

    <div className="relative max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.65 }}>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[3px] bg-[#E8620A] rounded-full" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-orange-400">Quality Assurance</span>
          </div>
          <h2 className="text-white font-extrabold mb-5 tracking-tight" style={{ fontSize: "clamp(2rem,3.5vw,2.9rem)", fontFamily: "'Syne',sans-serif" }}>
            Certified Quality at Every Step
          </h2>
          <p className="text-white/60 text-[15px] leading-[1.85] mb-8">
            Quality is not a department at Rapid Engineering — it's a culture.
            Every component we touch goes through a rigorous process before it's returned to you.
          </p>

          {/* Cert badges */}
          <div className="grid grid-cols-2 gap-3">
            {certs.map((c, i) => (
              <motion.div key={c.label}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass-card rounded-xl p-4 flex items-start gap-3">
                <ShieldCheck size={18} className="text-orange-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold text-sm">{c.label}</p>
                  <p className="text-white/45 text-xs mt-0.5">{c.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.65 }}>
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-white font-bold text-lg mb-6" style={{ fontFamily: "'Syne',sans-serif" }}>
              Our Quality Promise
            </h3>
            <ul className="space-y-4">
              {facts.map((f, i) => (
                <motion.li key={f}
                  initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 text-white/75 text-sm leading-relaxed">
                  <CheckCircle2 size={16} className="text-orange-400 flex-shrink-0 mt-0.5" />
                  {f}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CertificationsSection;
