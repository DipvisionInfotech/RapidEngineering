import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, CheckCircle2 } from "lucide-react";
import PageHero from "../components/PageHero";
import aboutHero from "../assets/bafeb25e45d23025efdf555d67341348.jpg";

// Local image imports for Why Choose Us
import customizedImg from "../assets/41f5c68e06005373c8922f47aad22edc.jpg";
import qualityImg from "../assets/635dc1a2773b7a0b2bbbc5a993b06a59.jpg";
import expertiseImg from "../assets/LXm3SMYl21LN0OOGJyAn4lwFg_c2HIgf8REEPxUuGnmZbzvY14pZg9tlH1YUePdqoJDs7o9T1Ju8AGey5fLgw7wIls58Gf8Km-DO-Q9FbTmEcshPBvzHWrVMPZBCz7AXF14SCQDEW02EAhlEiy9TZp0i1CL08POUN_Ffs4aT5FL2yd5swIuuPlbv1Xx6bVEi.jpg";
import pricingImg from "../assets/7243a6b06f78c4fcae7eea862cca65e5.jpg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, delay, ease: "easeOut" },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, delay, ease: "easeOut" },
});

const whyItems = [
  {
    title: "Customized Solutions",
    desc: "We provide tailored solutions to meet the unique needs of your business, ensuring optimal performance and efficiency.",
    img: customizedImg,
    points: [
      "Bespoke hydraulic system design",
      "Tailored flow & pressure configurations",
      "Custom power pack manufacturing",
      "Adaptive retrofitting of old machinery",
    ],
  },
  {
    title: "Quality Assurance",
    desc: "Our commitment to quality is unwavering, with rigorous testing and inspection at every stage of the process to guarantee reliability.",
    img: qualityImg,
    points: [
      "100% test-bench validation on all overhauls",
      "ISO 9001:2015 quality standard compliance",
      "Rigorous pressure & leak testing",
      "Genuine OEM parts with full traceability",
    ],
  },
  {
    title: "Expertise",
    desc: "With decades of experience in the industry, our team of experts is equipped with the knowledge and skills to handle any challenge.",
    img: expertiseImg,
    points: [
      "Decades of industrial hydraulic experience",
      "Manufacturer-trained & certified engineers",
      "Deep domain knowledge across 9+ industries",
      "Prompt troubleshooting & diagnostics",
    ],
  },
  {
    title: "Competitive Pricing",
    desc: "We offer cost-effective solutions without compromising on quality, providing you with the best value for your investment.",
    img: pricingImg,
    points: [
      "Up to 50% savings compared to brand new units",
      "Transparent quotes with no hidden costs",
      "High-performance parts at competitive rates",
      "Long-term value with robust warranties",
    ],
  },
];

const AboutPage = () => (
  <div className="bg-white">
    <PageHero
  
      title="About Rapid Engineering"
      subtitle="A team of passionate hydraulic engineers dedicated to keeping industrial India's machinery running at peak performance."
      bgImage={aboutHero}
      
    />

    {/* ── Main about ── */}
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        <motion.div {...fadeLeft(0)}>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[3px] bg-[#E8620A] rounded-full" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#E8620A]">Our Story</span>
          </div>
          <h2 className="text-[#0B3D4E] font-extrabold mb-5 leading-tight tracking-tight"
            style={{ fontSize: "clamp(2rem,3.5vw,2.9rem)", fontFamily: "'Syne',sans-serif" }}>
            Your Partner in Hydraulic Solutions
          </h2>
          <p className="text-slate-500 leading-[1.85] mb-4 text-[15px]">
            Established in 2012, Rapid Engineering has become one of India's most trusted names in hydraulic repair and maintenance.
            We specialise in the overhaul, service, and supply of hydraulic pumps, motors, and systems for industries across the country.
          </p>
          <p className="text-slate-500 leading-[1.85] mb-8 text-[15px]">
            Our goal is simple — minimise your downtime and maximise your productivity. With ISO certification, OEM authorisation,
            and a team of 50+ engineers, we deliver factory-quality results at competitive costs, nationwide.
          </p>
          
        </motion.div>

        <motion.div {...fadeRight(0.1)}>
          <img
            src="https://img.freepik.com/free-photo/engineer-examining-blueprint_23-2152006093.jpg"
            alt="Rapid Engineering team"
            className="w-full h-[420px] object-cover rounded-2xl shadow-xl"
            onError={(e) => { e.target.src = "https://placehold.co/600x400/0B3D4E/white?text=Rapid+Engineering"; }}
          />
        </motion.div>
      </div>
    </section>

    {/* ── Stats ── */}
    <section className="bg-[#0B3D4E] py-14">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {[["13+","Years Experience"],["500+","Projects Completed"],["9+","Industries Served"],["50+","Expert Engineers"]].map(([num,label],i) => (
          <motion.div key={label} {...fadeUp(i * 0.08)} className="text-center">
            <div className="text-4xl font-black text-orange-400 mb-2" style={{ fontFamily: "'Syne',sans-serif" }}>{num}</div>
            <p className="text-white/55 text-sm">{label}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* ── Mission & Vision ── */}
    <section className="py-20 bg-[#F4F7FA]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[3px] bg-[#E8620A] rounded-full" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#E8620A]">Purpose</span>
            <div className="w-8 h-[3px] bg-[#E8620A] rounded-full" />
          </div>
          <h2 className="text-[#0B3D4E] font-extrabold text-3xl tracking-tight" style={{ fontFamily: "'Syne',sans-serif" }}>
            Our Mission &amp; Vision
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Our Mission",
              points: [
                "Deliver world-class hydraulic repair and maintenance services across India",
                "Minimise client downtime through fast, accurate diagnosis and repair",
                "Use only genuine OEM-grade parts with full quality traceability",
                "Maintain the highest ethical standards in every client engagement",
              ],
            },
            {
              title: "Our Vision",
              points: [
                "Become India's #1 trusted hydraulic service partner by 2030",
                "Expand our authorised OEM partner network to 10+ global brands",
                "Build India's most comprehensive hydraulic technician training programme",
                "Set new benchmarks for speed, quality, and client satisfaction",
              ],
            },
          ].map((item, i) => (
            <motion.div key={item.title} {...fadeUp(i * 0.1)}
              className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-8 bg-[#E8620A] rounded-full" />
                <h3 className="text-xl font-bold text-[#0B3D4E]" style={{ fontFamily: "'Syne',sans-serif" }}>{item.title}</h3>
              </div>
              <ul className="space-y-3">
                {item.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-slate-500 text-[14px] leading-relaxed">
                    <CheckCircle2 size={15} className="text-[#E8620A] flex-shrink-0 mt-0.5" />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>    {/* ── Why Choose Us — compact image cards ── */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[3px] bg-[#E8620A] rounded-full" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#E8620A]">Why Us</span>
            <div className="w-8 h-[3px] bg-[#E8620A] rounded-full" />
          </div>
          <h2 className="text-[#0B3D4E] font-extrabold tracking-tight mb-3"
            style={{ fontSize: "clamp(2rem,3.5vw,2.9rem)", fontFamily: "'Syne',sans-serif" }}>
            Why Choose Rapid Engineering
          </h2>
          <p className="text-slate-500 text-[15px] leading-[1.8] max-w-lg mx-auto">
            Four pillars that make us India's most trusted hydraulic service partner.
          </p>
        </motion.div>

        {/* 2×2 grid — image on top, content below */}
        <div className="grid sm:grid-cols-2 gap-6">
          {whyItems.map((item, i) => (
            <motion.div key={item.title} {...fadeUp(i * 0.08)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-400">

              {/* Image on top — full width, fixed height */}
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.target.src = `https://placehold.co/600x200/0B3D4E/white?text=${encodeURIComponent(item.title)}`; }}
                />
                {/* Subtle gradient at the bottom of image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 text-white text-[11px] font-bold tracking-widest uppercase bg-[#E8620A] px-2.5 py-1 rounded-md">
                  {item.title}
                </span>
              </div>

              {/* Content below */}
              <div className="p-6">
                <p className="text-slate-500 text-[13.5px] leading-[1.8] mb-4">{item.desc}</p>
                <ul className="space-y-2">
                  {item.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-[13px] text-[#0B3D4E] font-medium">
                      <CheckCircle2 size={14} className="text-[#E8620A] flex-shrink-0 mt-0.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Timeline / Milestones ── */}
    <section className="py-20 bg-[#F4F7FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[3px] bg-[#E8620A] rounded-full" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#E8620A]">Our Journey</span>
            <div className="w-8 h-[3px] bg-[#E8620A] rounded-full" />
          </div>
          <h2 className="text-[#0B3D4E] font-extrabold text-3xl" style={{ fontFamily: "'Syne',sans-serif" }}>
            Milestones of Excellence
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-300 hidden md:block" />

          <div className="space-y-12">
            {[
              { year: "2012", title: "Company Foundation", desc: "Rapid Engineering was established in Pune with a small workshop dedicated to agricultural hydraulic repair." },
              { year: "2015", title: "Industrial Pivot", desc: "Began servicing heavy factory machinery and manufacturing our first custom hydraulic power packs." },
              { year: "2019", title: "ISO Certification & Expansion", desc: "Achieved ISO 9001:2015 accreditation, expanded operations to 15+ states, and launched mobile field services." },
              { year: "2022", title: "Advanced Dyno Test Center", desc: "Commissioned Pune's most advanced dynamic testing dyno bench and established authorized service partnerships." },
              { year: "Present", title: "Leading Fluid Power Partner", desc: "Providing zero-tolerance reconditioning and comprehensive AMC SLAs to 500+ premium B2B clients nationwide." }
            ].map((milestone, idx) => (
              <motion.div 
                key={milestone.year} 
                {...fadeUp(idx * 0.08)}
                className={`flex flex-col md:flex-row items-center justify-between ${idx % 2 === 0 ? "" : "md:flex-row-reverse"}`}
              >
                <div className="w-full md:w-[45%] text-left md:text-right px-4 mb-4 md:mb-0">
                  {idx % 2 === 0 ? (
                    <div>
                      <span className="inline-block bg-[#E8620A] text-white font-bold text-sm px-3 py-1 rounded-md mb-2">{milestone.year}</span>
                      <h3 className="text-[#0B3D4E] font-bold text-lg mb-1">{milestone.title}</h3>
                      <p className="text-slate-500 text-xs leading-relaxed">{milestone.desc}</p>
                    </div>
                  ) : null}
                </div>
                {/* Node */}
                <div className="w-8 h-8 rounded-full bg-[#0B3D4E] border-4 border-white shadow-md z-10 flex items-center justify-center text-white text-[10px] font-bold">
                  {milestone.year.substring(2)}
                </div>
                <div className="w-full md:w-[45%] text-left px-4 mt-4 md:mt-0">
                  {idx % 2 !== 0 ? (
                    <div>
                      <span className="inline-block bg-[#E8620A] text-white font-bold text-sm px-3 py-1 rounded-md mb-2">{milestone.year}</span>
                      <h3 className="text-[#0B3D4E] font-bold text-lg mb-1">{milestone.title}</h3>
                      <p className="text-slate-500 text-xs leading-relaxed">{milestone.desc}</p>
                    </div>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ── Team / Leadership ── */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[3px] bg-[#E8620A] rounded-full" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#E8620A]">Our Leadership</span>
            <div className="w-8 h-[3px] bg-[#E8620A] rounded-full" />
          </div>
          <h2 className="text-[#0B3D4E] font-extrabold text-3xl" style={{ fontFamily: "'Syne',sans-serif" }}>
            The Minds Behind the Motion
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Mr. Rajesh Sharma",
              role: "Founder & Managing Director",
              bio: "Over 25 years of hands-on fluid power design and B2B client relation management. Sets the company's strategic growth vision.",
              img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
            },
            {
              name: "Dr. Amit Verma",
              role: "Technical Director",
              bio: "Control systems expert specializing in electro-hydraulic proportional automation integration and high-cycle press tuning.",
              img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
            },
            {
              name: "Mr. Vikram Singh",
              role: "Head of Field Operations",
              bio: "Manages our on-site emergency troubleshooting, diagnostic telemetry fleets, and schedules all preventive AMC programs.",
              img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
            }
          ].map((leader, i) => (
            <motion.div 
              key={leader.name} 
              {...fadeUp(i * 0.08)}
              className="bg-[#F4F7FA] rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div className="h-64 overflow-hidden relative">
                <img src={leader.img} alt={leader.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[#0B3D4E] text-base mb-1">{leader.name}</h3>
                <span className="text-orange-500 text-xs font-bold uppercase tracking-wider block mb-4">{leader.role}</span>
                <p className="text-slate-500 text-xs leading-relaxed">{leader.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Certifications & Partners ── */}
    <section className="py-16 bg-[#0B3D4E] text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div {...fadeUp(0)} className="mb-10">
          <p className="text-orange-400 text-[10px] font-bold tracking-widest uppercase mb-3">Standards & Compliance</p>
          <h2 className="text-2xl font-bold" style={{ fontFamily: "'Syne',sans-serif" }}>Certifications &amp; Accreditations</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "ISO 9001:2015", desc: "Quality Management Certified" },
            { title: "TUV Accredited", desc: "Tolerances & Safety Compliant" },
            { title: "Rexroth Authorized", desc: "OEM-approved Rebuild Capability" },
            { title: "CEMILAC Approved", desc: "Defence-grade Engineering Standards" }
          ].map((cert, i) => (
            <motion.div 
              key={cert.title} 
              {...fadeUp(i * 0.08)}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <h3 className="text-orange-400 font-extrabold text-lg mb-2">{cert.title}</h3>
              <p className="text-white/60 text-xs">{cert.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
