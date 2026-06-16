import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import img1 from "../assets/a0f714b2a38a814eb885ee7f1b68912f.jpg";
import img2 from "../assets/250cb8d5e651f2c520e6d268aced0171.jpg";
import img3 from "../assets/3551dd69473ff383b4a5ec677d59033c.jpg";
import img4 from "../assets/85b3f02c3dea37912ab3a14881574a23.jpg";
import img5 from "../assets/b1b44ca4d490c9cf45754a5b091cd66f.jpg";
import img6 from "../assets/31dfdcf95d427d4970ba29f42a10a30e.jpg";
import img7 from "../assets/5cd5aca483e764da1e686c74ed22791c.jpg";
import img8 from "../assets/707d006f742e5190edab406c73c96e9a.jpg";
import img9 from "../assets/b911760e50e42accaa5c1f76680fe8b5.jpg";

const industries = [
{
label:"Agriculture",
link:"/agriculture_machines",
desc:"Tractors, harvesters, sprayers & precision farming machinery.",
iconImg:img1,
},

{
label:"Defence & Aviation",
link:"/defence_aviation",
desc:"Mission-critical hydraulics for military & aerospace systems.",
iconImg:img2,
},

{
label:"Forestry",
link:"/forestry",
desc:"Feller bunchers, harvesters, forwarders & log handling equipment.",
iconImg:img3,
},

{
label:"Manufacturing",
link:"/manufacturing",
desc:"Presses, robotic arms, CNC machinery & assembly line systems.",
iconImg:img4,
},

{
label:"Marine & Offshore",
link:"/marine_offshore",
desc:"Ships, cranes, winches & offshore platforms.",
iconImg:img5,
},

{
label:"Mining & Power",
link:"/mining_power_generation",
desc:"Excavators, haul trucks & power equipment.",
iconImg:img6,
},

{
label:"Mobile Hydraulics",
link:"/mobile_hydraulics",
desc:"Wheel loaders, crane trucks & telehandlers.",
iconImg:img7,
},

{
label:"Recycling",
link:"/recycling",
desc:"Balers, shredders & compactors.",
iconImg:img8,
},

{
label:"Tunnel Boring",
link:"/tunnel",
desc:"High-pressure TBM hydraulic systems.",
iconImg:img9,
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
            <span className="text-[20px] font-bold tracking-[0.2em] uppercase text-[#E8620A]">Industries</span>
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
              <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
  <img
    src={ind.iconImg}
    alt={ind.label}
    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
  />
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
