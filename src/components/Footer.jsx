import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  ["/service_repair", "Repair & Overhaul"],
  ["/technical_training", "Technical Training"],
  ["/units", "Reconditioned Units"],
  ["/annual_contracts", "Annual Contracts"],
];

const industries = [
  ["/mobile_hydraulics", "Mobile Hydraulics"],
  ["/mining_power_generation", "Mining & Power"],
  ["/defence_aviation", "Defence & Aviation"],
  ["/marine_offshore", "Marine & Offshore"],
  ["/agriculture_machines", "Agriculture"],
];

const quickLinks = [
  ["/", "Home"],
  ["/about", "About Us"],
  ["/product", "Products"],
  ["/contact", "Contact"],
];

const FooterCol = ({
  title,
  children,
  delay = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.55,
      delay,
    }}
  >
    <h4 className="text-white font-semibold text-sm mb-6 pb-3 border-b border-white/10">
      {title}
    </h4>

    {children}
  </motion.div>
);

export default function Footer() {
  return (
    <footer className="bg-[#071a24] text-white overflow-hidden">

      {/* CTA */}
      <div className="bg-[#0B3D4E] border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-8 lg:px-10 py-10 lg:py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

          <div>
            <h3
              className="text-[26px] font-bold"
              style={{
                fontFamily:
                  "'Syne', sans-serif",
              }}
            >
              Ready to optimise your hydraulic systems?
            </h3>

            <p className="text-white/55 mt-2 text-sm">
              Contact us today for a free consultation and quote.
            </p>
          </div>

          <Link
            to="/contact"
            className="
            flex items-center gap-2
            bg-[#E8620A]
            hover:bg-[#F47A2A]
            px-8 py-4
            rounded-xl
            font-semibold
            transition
            hover:-translate-y-1
            shadow-xl
            "
          >
            Get a Free Quote
            <ArrowRight size={16} />
          </Link>

        </div>
      </div>

      {/* MAIN */}
      <div
  className="
  max-w-[1280px]
  mx-auto
  px-8
  lg:px-10
  pt-24
  pb-16
"
>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1.2fr] gap-12">

          {/* Brand */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <div className="flex items-center gap-3 mb-6">

              <div className="w-11 h-11 rounded-xl bg-[#E8620A] flex items-center justify-center">

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>

              </div>

              <div>
                <div className="font-bold text-lg">
                  Rapid Engineering
                </div>

                <div className="text-[11px] uppercase tracking-[0.25em] text-white/35">
                  Industrial Solutions
                </div>
              </div>

            </div>

            <p className="text-white/50 leading-8 text-sm max-w-[280px]">
              Leading hydraulic repair,
              overhaul and industrial
              services across India
              since 2012.
            </p>

            
          </motion.div>

          {/* SERVICES */}
          <FooterCol title="Services" delay={0.1}>
            <ul className="space-y-4">
              {services.map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-white/45 hover:text-orange-400 transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterCol>

          {/* INDUSTRIES */}
          <FooterCol title="Industries" delay={0.15}>
            <ul className="space-y-4">
              {industries.map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-white/45 hover:text-orange-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterCol>

          {/* LINKS */}
          <FooterCol title="Quick Links" delay={0.2}>
            <ul className="space-y-4">
              {quickLinks.map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-white/45 hover:text-orange-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterCol>

          {/* CONTACT */}
          <FooterCol title="Contact Us" delay={0.25}>

            <div className="space-y-5">

              <a
                href="tel:+919999999999"
                className="flex gap-3 text-white/50 hover:text-orange-400"
              >
                <Phone
                  size={16}
                  className="text-[#E8620A]"
                />
                +91 99999 99999
              </a>

              <a
                href="mailto:info@rapidengg.com"
                className="flex gap-3 text-white/50 hover:text-orange-400"
              >
                <Mail
                  size={16}
                  className="text-[#E8620A]"
                />
                info@rapidengg.com
              </a>

              <div className="flex gap-3 text-white/50">
                <MapPin
                  size={16}
                  className="text-[#E8620A]"
                />
                Delhi, India
              </div>

            </div>

          </FooterCol>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
  <div className="max-w-7xl mx-auto px-10 py-5 flex justify-center items-center">
    <p className="text-white/30 text-xs text-center">
      © 2026 Rapid Engineering Services. All rights reserved.
    </p>
  


         

        </div>

      </div>

    </footer>
  );
}