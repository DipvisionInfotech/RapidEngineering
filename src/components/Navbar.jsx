import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Phone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const industries = [
  { to: "/mobile_hydraulics",        label: "Mobile Hydraulics & Automation" },
  { to: "/mining_power_generation",  label: "Mining & Power Generation" },
  { to: "/agriculture_machines",     label: "Agriculture Machines" },
  { to: "/defence_aviation",         label: "Defence & Aviation" },
  { to: "/marine_offshore",          label: "Marine & Off-Shore" },
  { to: "/forestry",                 label: "Forestry" },
  { to: "/tunnel",                   label: "Tunnel Boring Machines" },
  { to: "/manufacturing",            label: "Manufacturing Equipments" },
  { to: "/recycling",                label: "Recycling" },
];

const services = [
  { to: "/service_repair",     label: "Repair & Overhaul Services",      desc: "Full component repair & testing" },
  { to: "/technical_training", label: "Technical Training & Mentorship",  desc: "Hands-on hydraulics training" },
  { to: "/units",              label: "Reconditioned Units",              desc: "Cost-effective quality units" },
  { to: "/annual_contracts",   label: "Annual Maintenance Contracts",     desc: "Scheduled preventive care" },
];

const ServicesDropdown = () => (
  <div
    className="
      absolute
      top-[calc(100%+14px)]
      left-1/2
      -translate-x-1/2
      w-[340px]
      rounded-2xl
      bg-white
      border border-slate-100
      shadow-[0_24px_70px_rgba(0,0,0,0.12)]
      z-50
      px-8
      py-6
    "
  >
    <h3
      className="
        text-[12px]
        uppercase
        tracking-[0.22em]
        font-semibold
        text-[#E8620A]
        mb-5
      "
    >
      Services
    </h3>

    <div className="space-y-3">
      {services.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className="
            group
            flex
            items-center
            gap-4
            pl-2
            py-2
            text-[14px]
            font-medium
            text-slate-700
            hover:text-[#E8620A]
            transition-all
          "
        >
          <span
            className="
              w-[6px]
              h-[6px]
              rounded-full
              bg-[#E8620A]
              flex-shrink-0
              ml-2
              group-hover:scale-150
              transition
            "
          />
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  </div>
);

const IndustriesDropdown = () => (
  <div
    className="
      absolute
      top-[calc(100%+14px)]
      left-1/2
      -translate-x-1/2
      w-[340px]
      rounded-2xl
      bg-white
      border border-slate-100
      shadow-[0_24px_70px_rgba(0,0,0,0.12)]
      z-50
      px-8
      py-6
    "
  >
    <h3
      className="
        text-[12px]
        uppercase
        tracking-[0.22em]
        font-semibold
        text-[#E8620A]
        mb-5
      "
    >
      Industries
    </h3>

    <div className="space-y-3">
      {industries.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className="
            group
            flex
            items-center
            gap-4
            pl-2
            py-2
            text-[14px]
            font-medium
            text-slate-700
            hover:text-[#E8620A]
            transition-all
          "
        >
          <span
            className="
              w-[6px]
              h-[6px]
              rounded-full
              bg-[#E8620A]
              flex-shrink-0
              ml-2
              group-hover:scale-150
              transition
            "
          />
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  </div>
);


const Navbar = () => {
  const [mobileOpen, setMobileOpen]             = useState(false);
  const [scrolled, setScrolled]                 = useState(false);
  const [mobileServices, setMobileServices]     = useState(false);
  const [mobileIndustries, setMobileIndustries] = useState(false);
  const [isDesktop, setIsDesktop]               = useState(window.innerWidth >= 1024);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* ── Main nav ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          background: scrolled
            ? "rgba(11, 61, 78, 0.95)"
            : "transparent",
          boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.28)" : "none",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          transition: "background 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ height: "68px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "32px" }}>

            {/* Logo */}
            <Link to="/" style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0, textDecoration: "none" }}>
              <div style={{ lineHeight: 1 }}>
                <p style={{ color: "#fff", fontWeight: 700, fontSize: "17px", letterSpacing: "-0.3px", fontFamily: "'Syne',sans-serif" }}>
                  Rapid Engineering
                </p>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", marginTop: "3px" }}>
                  Services
                </p>
              </div>
            </Link>

            {/* Desktop links */}
            <ul
              style={{ display: isDesktop ? "flex" : "none", alignItems: "center", gap: "4px", flex: 1, justifyContent: "center", listStyle: "none", padding: 0, margin: 0 }}
            >
              <li>
                <Link to="/" style={{
                  padding: "8px 14px", borderRadius: "10px", fontSize: "13.5px", fontWeight: 500,
                  color: isActive("/") ? "#F47A2A" : "rgba(255,255,255,0.82)",
                  background: isActive("/") ? "rgba(255,255,255,0.08)" : "transparent",
                  textDecoration: "none", transition: "all 0.2s ease", display: "block",
                }}
                  onMouseEnter={(e) => { if (!isActive("/")) { e.target.style.color = "#fff"; e.target.style.background = "rgba(255,255,255,0.08)"; } }}
                  onMouseLeave={(e) => { if (!isActive("/")) { e.target.style.color = "rgba(255,255,255,0.82)"; e.target.style.background = "transparent"; } }}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" style={{
                  padding: "8px 14px", borderRadius: "10px", fontSize: "13.5px", fontWeight: 500,
                  color: isActive("/about") ? "#F47A2A" : "rgba(255,255,255,0.82)",
                  background: isActive("/about") ? "rgba(255,255,255,0.08)" : "transparent",
                  textDecoration: "none", transition: "all 0.2s ease", display: "block",
                }}
                  onMouseEnter={(e) => { if (!isActive("/about")) { e.target.style.color = "#fff"; e.target.style.background = "rgba(255,255,255,0.08)"; } }}
                  onMouseLeave={(e) => { if (!isActive("/about")) { e.target.style.color = "rgba(255,255,255,0.82)"; e.target.style.background = "transparent"; } }}
                >
                  About
                </Link>
              </li>

              <li style={{ position: "relative" }} className="group">
                <button className="flex items-center gap-1 text-white/82 hover:text-white hover:bg-white/8 transition-all"
                  style={{ padding: "8px 14px", borderRadius: "10px", fontSize: "13.5px", fontWeight: 500, border: "none", background: "transparent", cursor: "pointer", color: "rgba(255,255,255,0.82)" }}>
                  Services <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200 mt-px" />
                </button>
                <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 delay-75">
                  <ServicesDropdown />
                </div>
              </li>

              <li style={{ position: "relative" }} className="group">
                <button className="flex items-center gap-1 hover:text-white transition-all"
                  style={{ padding: "8px 14px", borderRadius: "10px", fontSize: "13.5px", fontWeight: 500, border: "none", background: "transparent", cursor: "pointer", color: "rgba(255,255,255,0.82)" }}>
                  Industries <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200 mt-px" />
                </button>
                <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 delay-75">
                  <IndustriesDropdown />
                </div>
              </li>

              <li>
                <Link to="/product" style={{
                  padding: "8px 14px", borderRadius: "10px", fontSize: "13.5px", fontWeight: 500,
                  color: isActive("/product") ? "#F47A2A" : "rgba(255,255,255,0.82)",
                  background: isActive("/product") ? "rgba(255,255,255,0.08)" : "transparent",
                  textDecoration: "none", transition: "all 0.2s ease", display: "block",
                }}
                  onMouseEnter={(e) => { if (!isActive("/product")) { e.target.style.color = "#fff"; e.target.style.background = "rgba(255,255,255,0.08)"; } }}
                  onMouseLeave={(e) => { if (!isActive("/product")) { e.target.style.color = "rgba(255,255,255,0.82)"; e.target.style.background = "transparent"; } }}
                >
                  Products
                </Link>
              </li>

              <li>
                <Link to="/contact" style={{
                  padding: "8px 14px", borderRadius: "10px", fontSize: "13.5px", fontWeight: 500,
                  color: isActive("/contact") ? "#F47A2A" : "rgba(255,255,255,0.82)",
                  background: isActive("/contact") ? "rgba(255,255,255,0.08)" : "transparent",
                  textDecoration: "none", transition: "all 0.2s ease", display: "block",
                }}
                  onMouseEnter={(e) => { if (!isActive("/contact")) { e.target.style.color = "#fff"; e.target.style.background = "rgba(255,255,255,0.08)"; } }}
                  onMouseLeave={(e) => { if (!isActive("/contact")) { e.target.style.color = "rgba(255,255,255,0.82)"; e.target.style.background = "transparent"; } }}
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Desktop CTA */}
            <div style={{ display: isDesktop ? "flex" : "none", alignItems: "center", gap: "12px" }}>
              <Link to="/contact" style={{
                display: "flex", alignItems: "center", gap: "8px",
                background: "#E8620A", color: "#fff", borderRadius: "12px",
                padding: "10px 20px", fontSize: "13.5px", fontWeight: 600,
                textDecoration: "none",
                boxShadow: "0 4px 16px rgba(232,98,10,0.35)",
                transition: "all 0.2s ease",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#F47A2A"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#E8620A"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Get a Quote
              </Link>
            </div>

            {/* ✅ Mobile hamburger — controlled by JS resize state, no Tailwind */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              style={{
                display: isDesktop ? "none" : "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                border: "1.5px solid rgba(255,255,255,0.35)",
                background: "rgba(255,255,255,0.12)",
                cursor: "pointer",
                flexShrink: 0,
                gap: "5px",
                padding: "0",
              }}
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.22 }}
                style={{ display: "block", width: "22px", height: "2.5px", borderRadius: "2px", background: "#fff", transformOrigin: "center" }}
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.18 }}
                style={{ display: "block", width: "22px", height: "2.5px", borderRadius: "2px", background: "#fff" }}
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.22 }}
                style={{ display: "block", width: "22px", height: "2.5px", borderRadius: "2px", background: "#fff", transformOrigin: "center" }}
              />
            </button>

          </div>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 10000, backdropFilter: "blur(4px)" }}
              onClick={() => setMobileOpen(false)} />

            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              style={{
                position: "fixed", right: 0, top: 0,
                height: "100dvh",
                width: "min(320px, 88vw)",
                background: "#fff", zIndex: 10001,
                boxShadow: "-8px 0 40px rgba(0,0,0,0.22)",
                display: "flex", flexDirection: "column",
                overflowY: "hidden",
              }}>

              {/* Drawer header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", background: "#0B3D4E" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ height: "32px", width: "32px", borderRadius: "10px", background: "#E8620A", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <span style={{ color: "#fff", fontWeight: 700, fontSize: "15px", fontFamily: "'Syne',sans-serif" }}>Rapid Engineering</span>
                </div>
                <button onClick={() => setMobileOpen(false)} style={{ color: "rgba(255,255,255,0.6)", border: "none", background: "transparent", cursor: "pointer", padding: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {/* Nav items */}
              <nav style={{ flex: 1, overflowY: "auto", padding: "20px 16px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>

                  <Link to="/" style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "12px 16px", borderRadius: "12px", fontWeight: 500, fontSize: "14px",
                    textDecoration: "none",
                    background: isActive("/") ? "#0B3D4E" : "transparent",
                    color: isActive("/") ? "#fff" : "#334155",
                    transition: "all 0.2s",
                  }}>
                    Home
                    <ArrowRight size={14} style={{ opacity: 0.4 }} />
                  </Link>

                  <Link to="/about" style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "12px 16px", borderRadius: "12px", fontWeight: 500, fontSize: "14px",
                    textDecoration: "none",
                    background: isActive("/about") ? "#0B3D4E" : "transparent",
                    color: isActive("/about") ? "#fff" : "#334155",
                    transition: "all 0.2s",
                  }}>
                    About
                    <ArrowRight size={14} style={{ opacity: 0.4 }} />
                  </Link>

                  {/* Services accordion */}
                  <div>
                    <button onClick={() => setMobileServices(!mobileServices)} style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      width: "100%", padding: "12px 16px", borderRadius: "12px",
                      fontSize: "14px", fontWeight: 500, color: "#334155",
                      border: "none", background: "transparent", cursor: "pointer",
                    }}>
                      Services
                      <ChevronDown size={14} style={{ transform: mobileServices ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
                    </button>
                    <AnimatePresence>
                      {mobileServices && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}
                          style={{ overflow: "hidden", paddingLeft: "12px" }}>
                          {services.map((s) => (
                            <Link key={s.to} to={s.to} style={{
                              display: "block", padding: "10px 16px", borderRadius: "10px",
                              fontSize: "13.5px", color: "#475569", textDecoration: "none",
                              transition: "all 0.2s",
                            }}
                              onMouseEnter={(e) => { e.currentTarget.style.color = "#E8620A"; e.currentTarget.style.background = "#F4F7FA"; }}
                              onMouseLeave={(e) => { e.currentTarget.style.color = "#475569"; e.currentTarget.style.background = "transparent"; }}
                            >
                              {s.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Industries accordion */}
                  <div>
                    <button onClick={() => setMobileIndustries(!mobileIndustries)} style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      width: "100%", padding: "12px 16px", borderRadius: "12px",
                      fontSize: "14px", fontWeight: 500, color: "#334155",
                      border: "none", background: "transparent", cursor: "pointer",
                    }}>
                      Industries
                      <ChevronDown size={14} style={{ transform: mobileIndustries ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
                    </button>
                    <AnimatePresence>
                      {mobileIndustries && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}
                          style={{ overflow: "hidden", paddingLeft: "12px" }}>
                          {industries.map((ind) => (
                            <Link key={ind.to} to={ind.to} style={{
                              display: "block", padding: "10px 16px", borderRadius: "10px",
                              fontSize: "13.5px", color: "#475569", textDecoration: "none",
                              transition: "all 0.2s",
                            }}
                              onMouseEnter={(e) => { e.currentTarget.style.color = "#E8620A"; e.currentTarget.style.background = "#F4F7FA"; }}
                              onMouseLeave={(e) => { e.currentTarget.style.color = "#475569"; e.currentTarget.style.background = "transparent"; }}
                            >
                              {ind.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link to="/product" style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "12px 16px", borderRadius: "12px", fontWeight: 500, fontSize: "14px",
                    textDecoration: "none",
                    background: isActive("/product") ? "#0B3D4E" : "transparent",
                    color: isActive("/product") ? "#fff" : "#334155",
                    transition: "all 0.2s",
                  }}>
                    Products
                    <ArrowRight size={14} style={{ opacity: 0.4 }} />
                  </Link>

                  <Link to="/contact" style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "12px 16px", borderRadius: "12px", fontWeight: 500, fontSize: "14px",
                    textDecoration: "none",
                    background: isActive("/contact") ? "#0B3D4E" : "transparent",
                    color: isActive("/contact") ? "#fff" : "#334155",
                    transition: "all 0.2s",
                  }}>
                    Contact
                    <ArrowRight size={14} style={{ opacity: 0.4 }} />
                  </Link>
                </div>
              </nav>

              {/* Drawer footer CTA */}
              <div style={{ padding: "20px", borderTop: "1px solid #E2E8F0", display: "flex", flexDirection: "column", gap: "12px" }}>
                <Link to="/contact" style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  background: "#E8620A", color: "#fff", padding: "14px",
                  borderRadius: "12px", fontWeight: 600, fontSize: "14px", textDecoration: "none",
                  boxShadow: "0 4px 16px rgba(232,98,10,0.3)",
                  transition: "all 0.2s",
                }}>
                  Request a Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;