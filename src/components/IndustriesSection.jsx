import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    icon: "🚜", label: "Agriculture",         link: "/agriculture_machines",
    desc: "Tractors, harvesters, sprayers & precision farming machinery.",
    img: "https://img.freepik.com/free-photo/tractor-working-field_342744-535.jpg",
  },
  {
    icon: "🛡️", label: "Defence & Aviation",  link: "/defence_aviation",
    desc: "Mission-critical hydraulics for military & aerospace systems.",
    img: "https://img.freepik.com/free-photo/yellow-jets-maneuvering-sky-air-parade_181624-16775.jpg",
  },
  {
    icon: "🌲", label: "Forestry",            link: "/forestry",
    desc: "Feller bunchers, harvesters, forwarders & log handling equipment.",
    img: "https://img.freepik.com/free-photo/low-angle-shot-piled-logs-with-greenery-background_181624-17565.jpg",
  },
  {
    icon: "⚙️", label: "Manufacturing",       link: "/manufacturing",
    desc: "Presses, robotic arms, CNC machinery & assembly line systems.",
    img: "https://img.freepik.com/free-photo/machines-industrial-building_140725-7605.jpg",
  },
  {
    icon: "⚓", label: "Marine & Offshore",   link: "/marine_offshore",
    desc: "Ships, cranes, winches, deck machinery & offshore platforms.",
    img: "https://img.freepik.com/free-photo/cargo-ship-parked-harbor-sunny-day-sunset_181624-4056.jpg",
  },
  {
    icon: "⛏️", label: "Mining & Power",      link: "/mining_power_generation",
    desc: "Excavators, rock drills, haul trucks & power plant equipment.",
    img: "https://img.freepik.com/free-photo/wide-angle-shot-excavation-machines-lookout-jackerath-garzweiler-skywalk-germany_181624-10184.jpg",
  },
  {
    icon: "🚛", label: "Mobile Hydraulics",   link: "/mobile_hydraulics",
    desc: "Wheel loaders, crane trucks, tippers, telehandlers & more.",
    img: "https://img.freepik.com/free-photo/modern-automated-assembly-line-cars-latest-technological-neutral-technologies-production-cars-plant-assembly-shop-modern-cars_645730-531.jpg",
  },
  {
    icon: "♻️", label: "Recycling",           link: "/recycling",
    desc: "Balers, shredders, compactors & scrap handling machinery.",
    img: "https://img.freepik.com/free-photo/crane-grab-scrap_1112-1220.jpg",
  },
  {
    icon: "🚇", label: "Tunnel Boring",       link: "/tunnel",
    desc: "High-pressure TBM hydraulics for metro & infrastructure projects.",
    img: "https://img.freepik.com/free-photo/underground-tunnel-istanbul-turkey_1268-22513.jpg",
  },
];

const IndustriesSection = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-[3px] bg-[#E8620A] rounded-full" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#E8620A]">Industries</span>
            <div className="w-8 h-[3px] bg-[#E8620A] rounded-full" />
          </div>
          <h2 className="text-[#0B3D4E] font-black leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(2.1rem, 3.6vw, 3.1rem)", fontFamily: "'Syne',sans-serif" }}>
            Industries We Serve
          </h2>
          <p className="text-slate-500 text-[15.5px] leading-[1.8] max-w-xl mx-auto">
            From mobile hydraulics to marine and defence — our expertise spans 9+ industries across India.
          </p>
        </motion.div>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5">
        {industries.map((ind, i) => (
          <motion.div key={ind.label}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.5 }}>

            <Link to={ind.link}
              className="group flex items-start gap-4 p-5 rounded-2xl border border-slate-200/80 bg-[#F4F7FA] hover:bg-white hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">

              {/* BG image on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-8 transition-opacity duration-500">
                <img src={ind.img} alt="" className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; }} />
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#0B3D4E]/8 group-hover:bg-[#0B3D4E] flex items-center justify-center flex-shrink-0 transition-colors duration-300 text-xl relative z-10">
                <span>{ind.icon}</span>
              </div>

              {/* Text */}
              <div className="relative z-10 flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-[#0B3D4E] text-[14.5px] leading-tight">{ind.label}</h3>
                  <ArrowRight size={14} className="text-slate-300 group-hover:text-[#E8620A] group-hover:translate-x-1 transition-all flex-shrink-0 mt-0.5" />
                </div>
                <p className="text-slate-500 text-[12.5px] leading-relaxed mt-1.5">{ind.desc}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
