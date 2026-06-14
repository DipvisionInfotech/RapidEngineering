import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Phone, Leaf, TrendingDown, Clock, ShieldCheck } from "lucide-react";
import PageHero from "../components/PageHero";
import recondHeroImg from "../assets/6442a85b2042a67c49e57c3a7874f4ca.jpg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
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

const Service_Reconditional = () => {
  return (
    <div className="bg-white">
      <PageHero
        badge="Zero-Tolerance Certified Reconditioning"
        title="Premium Reconditioned Units"
        subtitle="Access high-performance hydraulic pumps, motors, and control valves calibrated to original factory specs at up to 60% savings."
        bgImage={recondHeroImg}
      />

      {/* About section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp(0)}>
            <img
              src="https://img.freepik.com/free-photo/grunge-old-vintage-clock_1232-1721.jpg"
              alt="Reconditioned hydraulic units"
              className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              onError={(e) => { e.target.src = "https://placehold.co/600x400/0B3D4E/white?text=Reconditioned+Units"; }}
            />
          </motion.div>
          <motion.div {...fadeUp(0.1)}>
            <span className="inline-block bg-orange-50 text-orange-500 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-orange-200 mb-5">
              OEM Performance at Half the Cost
            </span>
            <h2 className="text-3xl font-bold text-[#0B3D4E] mb-5 leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
              Zero-Tolerance Engineering & Performance Certification
            </h2>
            <p className="text-slate-500 leading-relaxed mb-4 text-[14.5px]">
              At Rapid Engineering Services, we supply meticulously reconditioned hydraulic units from world-leading OEM brands (including Bosch Rexroth, Danfoss, Caterpillar, and Volvo). Every component is completely stripped, inspected to micron tolerances, and rebuilt with genuine seals and replacement parts.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8 text-[14.5px]">
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

      {/* Benefits */}
      <section className="py-24 bg-[#f4f6f8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-50 text-orange-500 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-orange-200 mb-4">
              Value Proposition
            </span>
            <h2 className="text-3xl font-bold text-[#0B3D4E]" style={{ fontFamily: "'Syne', sans-serif" }}>Why Buy Reconditioned Units?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((b, i) => (
              <motion.div key={b.title} {...fadeUp(i * 0.1)} className="flex items-start gap-5 bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:border-[#0B3D4E]/20 transition-all duration-300">
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

      {/* Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-50 text-orange-500 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-orange-200 mb-4">
              Quality Assurance Workflow
            </span>
            <h2 className="text-3xl font-bold text-[#0B3D4E]" style={{ fontFamily: "'Syne', sans-serif" }}>Our Reconditioning Standard</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Complete Tear-down", desc: "Units are fully disassembled. Every block, piston, shaft, and valve plate is cleaned to ISO 4406 standard." },
              { step: "02", title: "Dimensional Audit", desc: "Micrometer inspection of critical tolerances. Parts with wear exceeding OEM limits are scrapped." },
              { step: "03", title: "OEM Parts Rebuild", desc: "Reassembly using 100% genuine OEM replacement parts, sealing rings, and bearings." },
              { step: "04", title: "Dynamic Load Testing", desc: "Validated at full operating pressure (up to 450 Bar) and flow rates to generate certification reports." },
            ].map((p, i) => (
              <motion.div key={p.step} {...fadeUp(i * 0.1)} className="relative bg-[#f4f6f8] rounded-2xl p-7 border border-slate-200 hover:border-slate-300 transition-colors">
                <span className="block text-4xl font-bold text-[#E8620A]/15 mb-3">{p.step}</span>
                <h3 className="font-bold text-[#0B3D4E] text-base mb-2">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service_Reconditional;
