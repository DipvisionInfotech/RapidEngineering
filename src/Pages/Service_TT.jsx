import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, Users, Wrench, Award, CheckCircle, Phone, IndianRupee, ChevronLeft, ChevronRight, Plus, Minus } from "lucide-react";
import PageHero from "../components/PageHero";
import trainingHeroImg from "../assets/0df0f80b5d38beb5dd1a172517b86c92.jpg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, delay, ease: "easeOut" },
});

const standardCourses = [
  {
    title: "3-Day Certified Training",
    price: "8k",
    duration: "3 Days",
    popular: false,
    features: ["Industry-Relevant Curriculum", "Expert Faculty & Mentors", "Training with Live Equipment", "Trusted by 1000+ Engineers"],
  },
  {
    title: "5-Day Practical Training",
    price: "14k",
    duration: "5 Days",
    popular: true,
    features: ["Comprehensive Curriculum", "Skill Development Focus", "Hydraulic Schematics Mastery", "On-Site Support Option"],
  },
  {
    title: "3-Month In-Depth Program",
    price: "42k",
    duration: "3 Months",
    popular: false,
    features: ["Dual Daily Sessions", "Job-Ready Skill Development", "Live Equipment Training", "Complete Technical Foundation"],
  },
];

const specializedCourses = [
  {
    title: "Custom Training Programme",
    price: null,
    features: ["Fully Customizable Curriculum", "Balanced Theory and Practical Sessions", "Upskilling for All Experience Levels", "Best For Organizations", "Collaborative Program Design"],
  },
  {
    title: "12-Month Career-Building Program",
    price: "1L",
    features: ["Practical, Workshop-Based Training", "Placement Support and Guidance", "Exposure to Real Service Cases", "High Demand Skillset"],
  },
  {
    title: "Marine Hydraulics Training",
    price: null,
    features: ["Targeted Marine Curriculum", "Hydraulic Essentials", "Hands-On Fault Diagnosis", "Compliance-Driven Training", "Supports Preventive Maintenance"],
  },
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80", caption: "Students getting practical experience with hydraulic systems" },
  { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80", caption: "Interactive classroom sessions with live equipment" },
  { src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80", caption: "Expert instructors sharing industry knowledge" },
];

const instructors = [
  {
    name: "Mr. Rajesh Sharma",
    role: "Chief Hydraulics Mentor",
    exp: "20+ Years Field Experience",
    bio: "Ex-Rexroth Senior Commissioning Engineer. Specialized in heavy industrial proportional valves and closed-loop pump logic.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Dr. Amit Verma",
    role: "Electro-Hydraulics Specialist",
    exp: "Ph.D. in Control Systems",
    bio: "Expert in CAN-bus networks, PLC logic integration, and hydraulic telemetry sensors. Passionate about machine automation.",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Mr. Vikram Singh",
    role: "Heavy Mobile Troubleshooting Expert",
    exp: "15+ Years Field Engineering",
    bio: "Lead diagnostic engineer for massive mining and tunnel boring systems. Specialist in high-pressure troubleshooting.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
  }
];

const faqItems = [
  {
    q: "Who is this training suitable for?",
    a: "Our programs are designed for engineering graduates, maintenance technicians, field mechanics, and plant utility managers looking to transition from theoretical understanding to hands-on diagnostic capability."
  },
  {
    q: "Do we get hands-on experience with live machinery?",
    a: "Absolutely. Over 60% of our course duration is spent working directly on live hydraulic simulator test stands, rebuilding pump groups, and wiring up proportional control loops."
  },
  {
    q: "Is the training certification recognized?",
    a: "Yes, Rapid Engineering Services issues an ISO 9001:2015 accredited professional training completion certificate, highly respected by major manufacturing and mining organizations across India."
  },
  {
    q: "Can you customize training for corporate teams?",
    a: "Yes. We offer customized corporate on-site training packages tailored directly to the specific hydraulic brands (Danfoss, Rexroth, Parker) and machine designs operating at your plant."
  },
  {
    q: "What is the maximum batch size?",
    a: "To ensure safety and quality personal mentoring, our maximum batch size is restricted to 12 participants per session."
  }
];

const Service_TT = () => {
  const [slide, setSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const t = setInterval(() => setSlide((p) => (p + 1) % galleryImages.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-white overflow-hidden">
      <PageHero
        badge="Advanced Industrial Fluid Power Training"
        title="Technical Training & Mentorship"
        subtitle="Bridging the gap between academic theory and complex field operations. Practical hands-on training on live test stands for engineers, technicians, and plant operators."
        bgImage={trainingHeroImg}
      />

      {/* Why Train with Us */}
      <section className="py-16 bg-[#F4F7FA]">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: BookOpen, label: "Schematic Interpretation", sub: "Master ISO symbol analysis" },
            { icon: Users, label: "Expert Field Mentors", sub: "15+ years of active field practice" },
            { icon: Wrench, label: "Live Diagnostic Rigs", sub: "Troubleshoot active faults" },
            { icon: Award, label: "Industry Recognition", sub: "ISO-accredited certification" },
          ].map(({ icon: Icon, label, sub }, i) => (
            <motion.div key={label} {...fadeUp(i * 0.08)} className="bg-white rounded-2xl p-6 border border-slate-200 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#0B3D4E]/8 flex items-center justify-center flex-shrink-0">
                <Icon size={22} className="text-[#0B3D4E]" />
              </div>
              <div>
                <p className="font-semibold text-[#0B3D4E] text-sm">{label}</p>
                <p className="text-slate-500 text-xs">{sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Introduction and Gallery */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-orange-50 text-orange-500 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-orange-200 mb-4">
            Hands-on Professional Mentorship
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B3D4E] mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>Vocation-focused Technical Empowerment</h2>
          <p className="text-slate-500 max-w-3xl mx-auto leading-relaxed text-[15px]">
            At Rapid Engineering Services, we don't just teach theory; we build operational capability. Our specialized training center is equipped with active hydraulic test stands, proportional control rigs, and electronic feedback loops. Participants learn to isolate failures, read complex industrial blueprints, rebuild valves, and optimize flow curves under the guidance of veteran service engineers.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-xl border border-slate-100">
          <img
            src={galleryImages[slide].src}
            alt={galleryImages[slide].caption}
            className="w-full h-80 md:h-[450px] object-cover transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <p className="absolute bottom-5 left-6 text-white font-medium text-sm md:text-base">{galleryImages[slide].caption}</p>
          <button onClick={() => setSlide((p) => (p - 1 + galleryImages.length) % galleryImages.length)} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition">
            <ChevronLeft size={22} />
          </button>
          <button onClick={() => setSlide((p) => (p + 1) % galleryImages.length)} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition">
            <ChevronRight size={22} />
          </button>
          <div className="absolute bottom-4 right-6 flex gap-1.5">
            {galleryImages.map((_, i) => (
              <button key={i} onClick={() => setSlide(i)} className={`w-2 h-2 rounded-full transition-all ${i === slide ? "bg-white scale-125" : "bg-white/50"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Alternating Learning Section */}
      <section className="py-20 bg-[#F4F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <span className="inline-block bg-orange-50 text-orange-500 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-orange-200 mb-4">
              Curriculum Insights
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B3D4E]" style={{ fontFamily: "'Syne', sans-serif" }}>What You'll Learn</h2>
          </motion.div>

          <div className="space-y-16">
            {/* Block 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeUp(0)} className="order-2 lg:order-1">
                <h3 className="text-[#0B3D4E] font-bold text-2xl mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>ISO Symbols &amp; Circuit Diagnostics</h3>
                <p className="text-slate-500 text-sm leading-[1.8] mb-6">
                  Learn to read and draw industrial schematic circuits using standard ISO symbols. We teach how to trace flow logic, analyze pressure control points, and identify target areas for troubleshooting during active system malfunctions. Understanding schematics saves hours of physical test time.
                </p>
                <ul className="space-y-2">
                  {["Trace proportional valves", "Analyze accumulator safety setups", "Understand feedback control systems"].map(item => (
                    <li key={item} className="flex items-center gap-2.5 text-xs text-slate-600 font-semibold">
                      <CheckCircle size={14} className="text-[#E8620A]" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div {...fadeUp(0.1)} className="order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" 
                  alt="Reading schematics" 
                  className="w-full h-[320px] object-cover rounded-2xl shadow-lg border border-slate-200" 
                />
              </motion.div>
            </div>

            {/* Block 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeUp(0.1)}>
                <img 
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80" 
                  alt="Practical lab training" 
                  className="w-full h-[320px] object-cover rounded-2xl shadow-lg border border-slate-200" 
                />
              </motion.div>
              <motion.div {...fadeUp(0)}>
                <h3 className="text-[#0B3D4E] font-bold text-2xl mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>Practical Pump Rebuilding</h3>
                <p className="text-slate-500 text-sm leading-[1.8] mb-6">
                  Get hands-on in our workshop dismantling and rebuilding piston, vane, and gear pumps. Master the measurement of axial play, inspection of swash plates, replacement of wear brass plates, and dynamic torque adjustment of pressure regulators.
                </p>
                <ul className="space-y-2">
                  {["Inspect cylinder block clearances", "Calibrate swashplate angles", "Align pilot pressure relief modules"].map(item => (
                    <li key={item} className="flex items-center gap-2.5 text-xs text-slate-600 font-semibold">
                      <CheckCircle size={14} className="text-[#E8620A]" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Standard courses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-50 text-orange-500 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-orange-200 mb-4">
              Standard Programs
            </span>
            <h2 className="text-3xl font-bold text-[#0B3D4E]" style={{ fontFamily: "'Syne', sans-serif" }}>Our Standard Courses</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {standardCourses.map((c, i) => (
              <motion.div
                key={c.title}
                {...fadeUp(i * 0.1)}
                className={`bg-[#F4F7FA] rounded-2xl border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 ${c.popular ? "border-[#E8620A] ring-2 ring-[#E8620A]/20 bg-white" : "border-slate-200"}`}
              >
                {c.popular && (
                  <div className="bg-[#E8620A] text-white text-center py-2 text-xs font-bold tracking-wide">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-7">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h3 className="font-bold text-[#0B3D4E] text-base">{c.title}</h3>
                      <span className="text-xs text-slate-400">{c.duration}</span>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-[#E8620A] font-bold text-xl">
                        <IndianRupee size={16} />{c.price}
                      </div>
                      <span className="text-xs text-slate-400">+GST</span>
                    </div>
                  </div>
                  <ul className="space-y-2.5 mb-7">
                    {c.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                        <CheckCircle size={14} className="text-[#E8620A] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="tel:+919999999999" className="block text-center bg-[#0B3D4E] hover:bg-[#0F5068] text-white py-3 rounded-xl font-semibold text-sm transition-all shadow-md">
                    Enroll Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized courses */}
      <section className="py-20 bg-[#F4F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-50 text-orange-500 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-orange-200 mb-4">
              Specialized
            </span>
            <h2 className="text-3xl font-bold text-[#0B3D4E]" style={{ fontFamily: "'Syne', sans-serif" }}>Tailored Courses for Specialized Needs</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {specializedCourses.map((c, i) => (
              <motion.div key={c.title} {...fadeUp(i * 0.1)} className="bg-white rounded-2xl p-7 border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-5">
                  <h3 className="font-bold text-[#0B3D4E] text-base">{c.title}</h3>
                  {c.price && (
                    <div className="flex items-center text-[#E8620A] font-bold text-lg whitespace-nowrap ml-2">
                      <IndianRupee size={15} />{c.price}
                    </div>
                  )}
                </div>
                <ul className="space-y-2.5">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                      <CheckCircle size={14} className="text-[#E8620A] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Profiles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <span className="inline-block bg-orange-50 text-orange-500 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-orange-200 mb-4">
              Faculty
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B3D4E]" style={{ fontFamily: "'Syne', sans-serif" }}>Our Expert Mentors</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {instructors.map((ins, i) => (
              <motion.div 
                key={i} 
                {...fadeUp(i * 0.08)}
                className="bg-[#F4F7FA] rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={ins.img} alt={ins.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#0B3D4E] text-lg mb-1">{ins.name}</h3>
                  <p className="text-orange-500 text-xs font-bold uppercase tracking-wider mb-2">{ins.role}</p>
                  <p className="text-slate-400 text-xs font-semibold mb-4">{ins.exp}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{ins.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-[#F4F7FA]">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <span className="inline-block bg-orange-50 text-orange-500 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-orange-200 mb-4">
              FAQs
            </span>
            <h2 className="text-3xl font-bold text-[#0B3D4E]" style={{ fontFamily: "'Syne', sans-serif" }}>Common Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <motion.div 
                key={i} 
                {...fadeUp(i * 0.05)}
                className="bg-white rounded-2xl border border-slate-200/60 overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-[#0B3D4E] text-[15px] hover:text-[#E8620A] transition-colors"
                  onClick={() => toggleFaq(i)}
                >
                  <span>{item.q}</span>
                  {openFaq === i ? <Minus size={16} className="text-[#E8620A]" /> : <Plus size={16} />}
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-slate-500 text-sm leading-relaxed border-t border-slate-200/30">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0B3D4E] relative overflow-hidden">
        <div className="absolute inset-0 stripe-bg opacity-30" />
        <div className="absolute right-0 top-0 w-72 h-72 bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>Ready to Advance Your Hydraulics Career?</h2>
          <p className="text-white/65 mb-8 max-w-xl mx-auto leading-relaxed text-[15.5px]">
            Get industry-recognized certification and hands-on experience with live equipment.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#E8620A] hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:-translate-y-0.5 shadow-xl shadow-orange-950/30">
            <Phone size={17} />
            Enquire Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Service_TT;
