import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

/**
 * PageHero — premium inner-page banner with parallax background
 * Props: badge, title, subtitle, bgImage, breadcrumbs [{label, to?}]
 */
const PageHero = ({ badge, title, subtitle, bgImage, breadcrumbs = [] }) => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.4]);

  return (
    <section 
      ref={containerRef}
      className="relative text-white overflow-hidden pt-0" 
      style={{ minHeight: "450px" }}
    >
      {/* BG Image — shows true colours with parallax scroll */}
      {bgImage && (
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{ y, opacity }}
        >
          <img
            src={bgImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
            onError={(e) => { e.target.style.display = "none"; }}
          />
        </motion.div>
      )}

      {/* Overlay — dark gradient only, no teal tint */}
      <div
        className="absolute inset-0"
        style={{
          background: bgImage
            ? "linear-gradient(120deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.58) 55%, rgba(0,0,0,0.35) 100%)"
            : "linear-gradient(135deg, #061620 0%, #0B3D4E 100%)",
        }}
      />

      {/* Subtle top vignette to blend with navbar */}
      <div
        className="absolute inset-x-0 top-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.45), transparent)" }}
      />

      {/* Orange accent glow — top right */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: "6s" }} />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-[140px] pb-24 md:pt-[175px] md:pb-32">
        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-1.5 text-white/45 text-xs mb-5"
          >
            {breadcrumbs.map((crumb, i) => (
              <React.Fragment key={i}>
                {i > 0 && <ChevronRight size={12} />}
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-orange-400 transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-white/75">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </motion.nav>
        )}

        {badge && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-orange-400/35 bg-orange-500/15 px-4 py-1.5 text-[12px] text-orange-300 mb-5 backdrop-blur-sm shadow-inner"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            {badge}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 25 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.15, duration: 0.65, ease: "easeOut" }}
          className="font-extrabold leading-tight mb-4 tracking-tight drop-shadow-lg"
          style={{ fontSize: "clamp(2.4rem, 4.8vw, 3.8rem)", fontFamily: "'Syne', sans-serif" }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3, duration: 0.65, ease: "easeOut" }}
            className="text-white/75 text-[16px] leading-[1.85] max-w-2xl drop-shadow-md"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
