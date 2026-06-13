import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import aboutImg from "../assets/635dc1a2773b7a0b2bbbc5a993b06a59.jpg";

const capabilities = [
  "Hydraulic Pump Repair & Overhaul",
  "Motor Reconditioning",
  "Annual Maintenance Contracts",
  "Technical Training Programs",
  "On-Site Field Service",
  "Reconditioned Units Supply",
  "Emergency Breakdown Support",
  "Genuine OEM Parts Supply",
];

const highlights = [
  { num: "13+", label: "Years Experience" },
  { num: "500+", label: "Repairs Completed" },
  { num: "9+", label: "Industries Served" },
];

const AboutSection = () => (
  <section className="py-20 md:py-28 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">

      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-3 mb-16"
      >
        <div className="w-8 h-[3px] bg-[#E8620A] rounded-full" />
        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#E8620A]">
          About Rapid Engineering
        </span>
        <div className="w-8 h-[3px] bg-[#E8620A] rounded-full" />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2
            className="text-[#0B3D4E] font-extrabold leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(2rem,3.6vw,2.9rem)", fontFamily: "'Syne',sans-serif" }}
          >
            We'll keep your equipment running at{" "}
            <span className="text-[#E8620A]">peak performance</span>
          </h2>

          <p className="text-slate-500 leading-[1.85] mb-4 text-[15px]">
            Rapid Engineering Services delivers specialised knowledge and expertise to optimise every
            hydraulic system. We provide full-service repair and overhaul, combining technical
            excellence with cutting-edge diagnostic technology.
          </p>
          <p className="text-slate-500 leading-[1.85] mb-8 text-[15px]">
            Established in 2012, we've grown into a trusted partner across 9+ industries — from mobile
            hydraulics and mining to marine and defence — with a team of over 50 certified engineers.
          </p>

          {/* Capabilities */}
          <div className="grid grid-cols-2 gap-y-3 gap-x-6 mb-10">
            {capabilities.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2.5 text-[13.5px] text-[#0B3D4E] font-medium"
              >
                <CheckCircle2 size={14} className="text-[#E8620A] flex-shrink-0" />
                {c}
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-5 flex-wrap">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#E8620A] hover:bg-[#F47A2A] text-white
                         px-7 py-3.5 rounded-xl font-semibold text-[14.5px]
                         transition-all hover:-translate-y-0.5 shadow-md shadow-orange-200"
            >
              <Phone size={16} /> Get in Touch
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-[#0B3D4E] font-semibold text-sm
                         hover:text-[#E8620A] transition-colors group"
            >
              Learn Our Story
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={aboutImg}
              alt="Rapid Engineering team at work"
              className="w-full h-[440px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D4E]/55 via-transparent to-transparent" />
          </div>

          {/* Stats at bottom of image */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="grid grid-cols-3 gap-3">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="glass-card rounded-xl p-3 text-center"
                >
                  <p
                    className="text-white font-black text-xl leading-none"
                    style={{ fontFamily: "'Syne',sans-serif" }}
                  >
                    {h.num}
                  </p>
                  <p className="text-white/60 text-[10px] mt-1 leading-tight">{h.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Floating ISO badge */}
          

          {/* Decorative corner block */}
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#0B3D4E] rounded-xl -z-10 opacity-70" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
