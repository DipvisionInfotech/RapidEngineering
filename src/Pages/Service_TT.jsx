import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, Users, Wrench, Award, CheckCircle, Phone, IndianRupee, ChevronLeft, ChevronRight } from "lucide-react";
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
  { src: "https://placehold.co/800x450/0B3D4E/white?text=Hands-on+Learning", caption: "Students getting practical experience with hydraulic systems" },
  { src: "https://placehold.co/800x450/E8620A/white?text=Practical+Class", caption: "Interactive classroom sessions with live equipment" },
  { src: "https://placehold.co/800x450/185FA5/white?text=Expert+Instruction", caption: "Expert instructors sharing industry knowledge" },
];

const Service_TT = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((p) => (p + 1) % galleryImages.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-white">
      <PageHero
        badge="Advanced Industrial Fluid Power Training"
        title="Technical Training & Mentorship"
        subtitle="Bridging the gap between academic theory and complex field operations. Practical hands-on training on live test stands for engineers, technicians, and plant operators."
        bgImage={trainingHeroImg}
      />

      {/* Why Train with Us */}
      <section className="py-16 bg-[#f4f6f8]">
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

      {/* Gallery + intro */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-orange-50 text-orange-500 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-orange-200 mb-4">
            Hands-on Professional Mentorship
          </span>
          <h2 className="text-3xl font-bold text-[#0B3D4E] mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>Vocation-focused Technical Empowerment</h2>
          <p className="text-slate-500 max-w-3xl mx-auto leading-relaxed text-[14.5px]">
            At Rapid Engineering Services, we don't just teach theory; we build operational capability. Our specialized training center is equipped with active hydraulic test stands, proportional control rigs, and electronic feedback loops. Participants learn to isolate failures, read complex industrial blueprints, rebuild valves, and optimize flow curves under the guidance of veteran service engineers.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-xl">
          <img
            src={galleryImages[slide].src}
            alt={galleryImages[slide].caption}
            className="w-full h-80 object-cover transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <p className="absolute bottom-5 left-6 text-white font-medium text-sm">{galleryImages[slide].caption}</p>
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

      {/* Standard courses */}
      <section className="py-20 bg-[#f4f6f8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-50 text-orange-500 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-orange-200 mb-4">
              Standard Programs
            </span>
            <h2 className="text-3xl font-bold text-[#0B3D4E]">Our Standard Courses</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {standardCourses.map((c, i) => (
              <motion.div
                key={c.title}
                {...fadeUp(i * 0.1)}
                className={`bg-white rounded-2xl border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${c.popular ? "border-[#E8620A] ring-2 ring-[#E8620A]/20" : "border-slate-200"}`}
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
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle size={14} className="text-[#E8620A] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="tel:+919999999999" className="block text-center bg-[#0B3D4E] hover:bg-[#0F5068] text-white py-3 rounded-xl font-semibold text-sm transition-all">
                    Enroll Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized courses */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-50 text-orange-500 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-orange-200 mb-4">
              Specialized
            </span>
            <h2 className="text-3xl font-bold text-[#0B3D4E]">Tailored Courses for Specialized Needs</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {specializedCourses.map((c, i) => (
              <motion.div key={c.title} {...fadeUp(i * 0.1)} className="bg-[#f4f6f8] rounded-2xl p-7 border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
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

      {/* CTA */}
      <section className="py-16 bg-[#0B3D4E]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Advance Your Hydraulics Career?</h2>
          <p className="text-white/65 mb-8 max-w-xl mx-auto leading-relaxed">
            Get industry-recognized certification and hands-on experience with live equipment.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#E8620A] hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:-translate-y-0.5 shadow-lg shadow-orange-900/30">
            <Phone size={17} />
            Enquire Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Service_TT;
