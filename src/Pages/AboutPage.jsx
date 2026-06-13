import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, Phone, Award, Users, Factory, Globe } from "lucide-react";
import PageHero from "../components/Pagehero";
import aboutImg from "../assets/about.jpg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});



const whyItems = [
  { icon: Award,   title: "ISO Certified Quality",      desc: "Every repair validated on test bench to OEM standards." },
  { icon: Users,   title: "50+ Expert Engineers",       desc: "Certified, experienced, and continuously trained technicians." },
  { icon: Factory, title: "OEM Authorised Partner",     desc: "Bosch Rexroth, Danfoss, Caterpillar, Volvo CE and more." },
  { icon: Globe,   title: "Pan-India Coverage",         desc: "Field service and support across 15+ states." },
];

const AboutPage = () => (
  <div className="bg-white">
    <PageHero
      
      title="About Rapid Engineering"
      subtitle="A team of passionate hydraulic engineers dedicated to keeping industrial India's machinery running at peak performance."
      bgImage={aboutImg}
      
    />

    {/* Main about */}
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div {...fadeUp(0)}>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[3px] bg-[#E8620A] rounded-full" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#E8620A]">Our Story</span>
          </div>
          <h2 className="text-[#0B3D4E] font-extrabold mb-5 leading-tight tracking-tight"
            style={{ fontSize: "clamp(2rem,3.5vw,2.9rem)", fontFamily: "'Syne',sans-serif" }}>
            Your Partner in Hydraulic Solutions
          </h2>
          <p className="text-slate-500 leading-[1.85] mb-4 text-[15px]">
            Established in 2012, Rapid Engineering has quickly become a trusted name in the hydraulic industry.
            We specialise in the repair, service, and supply of a wide range of hydraulic pumps, motors, and systems.
            Our success is built on technical expertise, prompt service, and an unwavering commitment to customer satisfaction.
          </p>
          <p className="text-slate-500 leading-[1.85] mb-8 text-[15px]">
            We understand the critical role hydraulic systems play in various industries, and our goal is to minimise
            downtime and maximise productivity. Our engineers are trained to provide solutions that are not only effective
            but also cost-efficient, ensuring you get the best value for your investment.
          </p>
         
        </motion.div>

        <motion.div {...fadeUp(0.12)}>
          <img src="https://img.freepik.com/free-photo/engineer-examining-blueprint_23-2152006093.jpg"
            alt="Rapid Engineering team" className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
            onError={(e) => { e.target.src = "https://placehold.co/600x400/0B3D4E/white?text=Rapid+Engineering"; }} />
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-[#0B3D4E] py-14">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {[["13+","Years Experience"],["500+","Projects Completed"],["9+","Industries Served"],["50+","Expert Engineers"]].map(([num,label],i) => (
          <motion.div key={label} {...fadeUp(i*0.1)} className="text-center">
            <div className="text-4xl font-black text-orange-400 mb-2" style={{ fontFamily: "'Syne',sans-serif" }}>{num}</div>
            <p className="text-white/55 text-sm">{label}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 bg-[#F4F7FA]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[3px] bg-[#E8620A] rounded-full" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#E8620A]">Purpose</span>
            <div className="w-8 h-[3px] bg-[#E8620A] rounded-full" />
          </div>
          <h2 className="text-[#0B3D4E] font-bold text-3xl" style={{ fontFamily: "'Syne',sans-serif" }}>Our Mission &amp; Vision</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Our Mission", text: "To be the leading provider of hydraulic solutions by offering unparalleled service, innovative products, and expert technical support, ensuring our clients' systems operate at peak performance." },
            { title: "Our Vision",  text: "To drive industry standards by continuously improving our technical capabilities and expanding our service offerings, while maintaining our core values of integrity, quality, and a customer-first approach." },
          ].map((item, i) => (
            <motion.div key={item.title} {...fadeUp(i*0.1)}
              className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#E8620A]/10 flex items-center justify-center mb-4">
                <div className="w-4 h-4 rounded-full bg-[#E8620A]" />
              </div>
              <h3 className="text-xl font-bold text-[#0B3D4E] mb-4" style={{ fontFamily: "'Syne',sans-serif" }}>{item.title}</h3>
              <p className="text-slate-500 leading-relaxed text-[14.5px]">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>


    {/* Why choose us */}
    <section className="py-20 bg-[#F4F7FA]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[3px] bg-[#E8620A] rounded-full" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#E8620A]">Why Us</span>
            <div className="w-8 h-[3px] bg-[#E8620A] rounded-full" />
          </div>
          <h2 className="text-[#0B3D4E] font-bold text-3xl" style={{ fontFamily: "'Syne',sans-serif" }}>Why Choose Rapid Engineering</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyItems.map((item, i) => (
            <motion.div key={item.title} {...fadeUp(i*0.1)}
              className="group bg-white rounded-2xl p-7 border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#0B3D4E]/8 group-hover:bg-[#0B3D4E] flex items-center justify-center mx-auto mb-5 transition-colors duration-300">
                <item.icon size={24} className="text-[#0B3D4E] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-[#0B3D4E] text-[14.5px] mb-2">{item.title}</h3>
              <p className="text-slate-500 text-[13px] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
