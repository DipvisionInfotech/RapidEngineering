import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

/**
 * PageHero — premium inner-page banner
 * Props: badge, title, subtitle, bgImage, breadcrumbs [{label, to?}]
 */
const PageHero = ({ badge, title, subtitle, bgImage, breadcrumbs = [] }) => (
  <section className="relative text-white overflow-hidden pt-0" style={{ minHeight: "340px" }}>
    {/* BG */}
    {bgImage && (
      <img src={bgImage} alt="" className="absolute inset-0 w-full h-full object-cover object-center"
        onError={(e) => { e.target.style.display = "none"; }} />
    )}
    <div className={`absolute inset-0 ${bgImage ? "bg-[#0B3D4E]/82" : "bg-gradient-to-br from-[#061620] to-[#0B3D4E]"}`} />
    <div className="absolute inset-0 stripe-bg opacity-25" />
    <div className="absolute right-0 top-0 w-64 h-64 bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />

    <div className="relative max-w-7xl mx-auto px-6 pt-[110px] pb-16 md:pt-[130px] md:pb-20">
      {/* Breadcrumb */}
      {breadcrumbs.length > 0 && (
        <nav className="flex items-center gap-1.5 text-white/40 text-xs mb-5">
          {breadcrumbs.map((crumb, i) => (
            <React.Fragment key={i}>
              {i > 0 && <ChevronRight size={12} />}
              {crumb.to ? (
                <Link to={crumb.to} className="hover:text-orange-400 transition-colors">{crumb.label}</Link>
              ) : (
                <span className="text-white/70">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      )}

      {badge && (
        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/12 px-4 py-1.5 text-[12px] text-orange-300 mb-5 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
          {badge}
        </motion.div>
      )}

      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
        className="font-bold leading-tight mb-4"
        style={{ fontSize: "clamp(2rem,4vw,3.2rem)", fontFamily: "'Syne', sans-serif" }}>
        {title}
      </motion.h1>

      {subtitle && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.6 }}
          className="text-white/65 text-[15px] leading-[1.8] max-w-2xl">
          {subtitle}
        </motion.p>
      )}
    </div>
  </section>
);

export default PageHero;
