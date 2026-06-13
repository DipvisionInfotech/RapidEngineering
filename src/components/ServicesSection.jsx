import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Wrench, GraduationCap, RefreshCcw, FileText, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Wrench,
    num: "01",
    title: "Repair & Overhaul Services",
    desc: "Complete disassembly, inspection, and reconditioning of hydraulic pumps, motors, and cylinders using OEM parts.",
    points: ["Component-level diagnosis", "Genuine OEM parts", "Test bench validation", "Quality certification"],
    link: "/service_repair",
    accent: "#0B3D4E",
    gradient: "from-[#0B3D4E] to-[#0d4f65]",
  },
  {
    icon: GraduationCap,
    num: "02",
    title: "Technical Training & Mentorship",
    desc: "Hands-on hydraulic training programs for engineers and technicians at all skill levels.",
    points: ["3-day to 3-month courses", "Live equipment training", "Industry-recognised certs", "On-site options"],
    link: "/technical_training",
    accent: "#E8620A",
    gradient: "from-[#E8620A] to-[#c44e05]",
  },
  {
    icon: RefreshCcw,
    num: "03",
    title: "Reconditioned Units",
    desc: "A cost-effective and reliable alternative to new hydraulic components without compromising on quality.",
    points: ["Fraction of new-part cost", "Shorter lead times", "Eco-friendly choice", "Backed by warranty"],
    link: "/units",
    accent: "#0f766e",
    gradient: "from-[#0f766e] to-[#115e59]",
  },
  {
    icon: FileText,
    num: "04",
    title: "Annual Maintenance Contracts",
    desc: "Scheduled preventive maintenance to maximise uptime and reduce unexpected equipment failures.",
    points: ["Scheduled site visits", "System tune-ups", "Emergency priority", "Detailed service reports"],
    link: "/annual_contracts",
    accent: "#ea580c",
    gradient: "from-[#ea580c] to-[#c2410c]",
  },
];

const ServicesSection = () => (
  <section className="py-20 md:py-24 bg-[#F4F7FA]">
    <div className="max-w-7xl mx-auto px-6">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 text-center max-w-3xl mx-auto"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-[3px] bg-[#E8620A] rounded-full" />
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#E8620A]">What We Do</span>
          <div className="w-8 h-[3px] bg-[#E8620A] rounded-full" />
        </div>
        <h2
          className="text-[#0B3D4E] font-extrabold leading-tight tracking-tight mb-6"
          style={{ fontSize: "clamp(2rem, 3.5vw, 2.9rem)", fontFamily: "'Syne',sans-serif" }}
        >
          Wide Variety of Engineering Services
        </h2>
        <p className="text-slate-500 text-[15px] leading-[1.8] max-w-xl mx-auto">
          From emergency repairs to structured annual contracts — we optimise every hydraulic system.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: i * 0.1, duration: 0.55 }}
            className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden
                       hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
          >
            {/* Gradient icon area */}
            <div className={`relative h-44 bg-gradient-to-br ${s.gradient} flex items-center justify-center overflow-hidden flex-shrink-0`}>
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-white/6" />
              <div className="absolute -left-3 -bottom-3 w-16 h-16 rounded-full bg-white/4" />
              <s.icon size={56} className="text-white/20 relative z-10" strokeWidth={1.2} />
              <span className="absolute top-3 left-3 bg-[#E8620A] text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider">
                {s.num}
              </span>
              <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6">
              <h3 className="text-[#0B3D4E] font-bold text-[15px] leading-snug mb-3">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{s.desc}</p>

              <ul className="space-y-1.5 mb-5">
                {s.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-[12.5px] text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.accent }} />
                    {pt}
                  </li>
                ))}
              </ul>

              <Link
                to={s.link}
                className="inline-flex items-center gap-1.5 text-sm font-semibold
                           group-hover:gap-3 transition-all duration-200"
                style={{ color: s.accent }}
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
