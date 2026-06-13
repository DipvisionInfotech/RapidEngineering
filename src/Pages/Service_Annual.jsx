import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CalendarCheck, Settings, AlertTriangle, Package, MessageSquare, FileText, Phone } from "lucide-react";
import PageHero from "../components/PageHero";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, delay, ease: "easeOut" },
});

const coverItems = [
  {
    icon: CalendarCheck,
    title: "Regular Check-ups",
    desc: "Scheduled site visits for diagnostics, inspection, and preventative maintenance of all hydraulic systems.",
  },
  {
    icon: Settings,
    title: "System Tune-ups",
    desc: "Optimization of system parameters to ensure maximum efficiency, energy savings, and operational smoothness.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Support",
    desc: "Priority access to our expert technicians for breakdown services, minimizing downtime and production loss.",
  },
  {
    icon: Package,
    title: "Parts & Spares",
    desc: "Guaranteed availability of essential spare parts, ensuring quick repairs without delays.",
  },
  {
    icon: MessageSquare,
    title: "Expert Consultation",
    desc: "Access to our experienced engineers for technical advice, system upgrades, and long-term planning.",
  },
  {
    icon: FileText,
    title: "Service Reports",
    desc: "Detailed documentation after each service visit, providing a clear history and recommendations for your equipment.",
  },
];

const Service_Annual = () => {
  return (
    <div className="bg-white">
      <PageHero
        badge="Predictive & Preventative Care"
        title="Annual Maintenance Contracts"
        subtitle="Protect your investments, reduce unscheduled downtime by 85%, and optimize system efficiency with customized hydraulic AMC solutions."
        bgImage="https://img.freepik.com/free-photo/busy-professional-looking-businesspeople-writing_1150-1698.jpg"
      />

      {/* Why AMC */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp(0)}>
            <span className="inline-block bg-orange-50 text-orange-500 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-orange-200 mb-5">
              Maximize Operational Lifetime
            </span>
            <h2 className="text-3xl font-bold text-[#0B3D4E] mb-5 leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
              Eliminate Hydraulic Failures Before They Happen
            </h2>
            <p className="text-slate-500 leading-relaxed mb-5 text-[14.5px]">
              Hydraulic system breakdown is one of the leading causes of unscheduled factory shutdowns. A structured Annual Maintenance Contract (AMC) with Rapid Engineering Services guarantees a proactive, engineering-first approach to machinery health.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8 text-[14.5px]">
              We perform regular fluid cleanliness audits, monitor operating temperatures, recalibrate proportional valves, and inspect seals to catch wear early. This systematic maintenance structure keeps your operations running efficiently with highly predictable annual maintenance costs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#E8620A] hover:bg-orange-500 text-white px-7 py-3.5 rounded-xl font-semibold transition-all hover:-translate-y-0.5 shadow-lg shadow-orange-200"
            >
              <Phone size={16} />
              Request a Custom SLA Quote
            </Link>
          </motion.div>
          <motion.div {...fadeUp(0.1)} className="grid grid-cols-2 gap-4">
            {[
              ["85% Downtime Reduction", "Proactive particle monitoring stops catastrophic pump failures."],
              ["Fixed Maintenance Budgets", "Plan your annual expenditure without unexpected breakdown costs."],
              ["Extended Component Life", "Proper seal and valve calibration doubles operational lifecycle."],
              ["24/7 Priority Emergency Callout", "Rapid response on-site troubleshooting included in standard SLAs."],
            ].map(([title, desc]) => (
              <div key={title} className="bg-[#f4f6f8] rounded-2xl p-5 border border-slate-200 hover:shadow-md transition-shadow">
                <strong className="block text-[#0B3D4E] font-bold text-sm mb-1.5">{title}</strong>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What AMC covers */}
      <section className="py-24 bg-[#f4f6f8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-50 text-orange-500 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-orange-200 mb-4">
              Service Scope
            </span>
            <h2 className="text-3xl font-bold text-[#0B3D4E]" style={{ fontFamily: "'Syne', sans-serif" }}>What Our AMC Covers</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              We provide complete turnkey diagnostics, fluid management, and mechanical adjustments under standard contracts.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverItems.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp(i * 0.08)}
                className="group bg-white rounded-2xl p-7 border border-slate-200 hover:border-[#0B3D4E] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0B3D4E]/8 group-hover:bg-[#0B3D4E] flex items-center justify-center mb-5 transition-colors">
                  <item.icon size={22} className="text-[#0B3D4E] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-[#0B3D4E] mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0B3D4E]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>Protect Your Plant Operations</h2>
          <p className="text-white/65 mb-8 max-w-xl mx-auto leading-relaxed text-sm">
            Contact us today to schedule a site audit. Our engineering team will review your machinery setup and design a bespoke maintenance schedule that keeps your systems performing reliably.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#E8620A] hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:-translate-y-0.5 shadow-lg shadow-orange-900/30"
          >
            <Phone size={17} />
            Setup a Maintenance SLA
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Service_Annual;
