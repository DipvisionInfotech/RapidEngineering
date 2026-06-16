import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const products = [
  { name: "Gear Pumps",               desc: "External & internal gear pumps in various displacements and port options.", img: "https://img.freepik.com/free-photo/rusty-gear-assembly_1136-278.jpg", tag: "High Volume" },
  { name: "Vane Pumps",               desc: "Quiet, efficient and cost-effective for industrial settings.", img: "https://img.freepik.com/free-photo/steel-pipelines-cables-plant_1359-302.jpg", tag: "Low Noise" },
  { name: "Piston Pumps",             desc: "Axial piston pumps for high pressure and high flow applications.", img: "https://img.freepik.com/free-photo/engine-piston-cross-section_1232-2590.jpg", tag: "High Pressure" },
  { name: "Hydraulic Motors",         desc: "Convert fluid power into rotational motion for machinery drive systems.", img: "https://img.freepik.com/free-photo/interior-view-steel-factory_1359-184.jpg", tag: "Heavy Duty" },
  { name: "Control Valves",           desc: "Directional, pressure & flow control valves for all system types.", img: "https://img.freepik.com/free-photo/steel-pipelines-cables-plant_1359-131.jpg", tag: "Precision" },
  { name: "Hydraulic Cylinders",      desc: "Linear actuators for construction, industrial presses and heavy lifting.", img: "https://img.freepik.com/free-photo/minimalist-construction-pvc-pipes-composition_23-2149106869.jpg", tag: "All Sizes" },
];

const ProductsPreview = () => (
  <section className="py-24 bg-[#F4F7FA] overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[3px] bg-[#E8620A] rounded-full" />
            <span className="text-[18px] font-bold tracking-[0.2em] uppercase text-[#E8620A]">Product Catalogue</span>
            <div className="w-8 h-[3px] bg-[#E8620A] rounded-full" />
          </div>
          <h2 className="text-[#0B3D4E] font-extrabold leading-tight tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem,3.5vw,2.9rem)", fontFamily: "'Syne',sans-serif" }}>
            Our Core Hydraulic Products
          </h2>
          <p className="text-slate-500 text-[15px] leading-[1.8] max-w-xl mx-auto mb-6">
            High-performance hydraulic components from world-leading OEMs, serviced and supplied for all industrial applications.
          </p>
          <Link to="/product"
            className="inline-flex items-center gap-2 bg-[#0B3D4E] hover:bg-[#0F5068] text-white px-7 py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 shadow-md">
            View All Products <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>

      {/* Product cards grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {products.map((p, i) => (
          <motion.div key={p.name}
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
            className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400">

            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img src={p.img} alt={p.name}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                onError={(e) => { e.target.src = `https://placehold.co/400x300/0B3D4E/white?text=${encodeURIComponent(p.name)}`; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D4E]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Tag */}
              <span className="absolute top-3 left-3 bg-white/90 text-[#0B3D4E] text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                {p.tag}
              </span>
              {/* Hover link icon */}
              <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#E8620A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                <ArrowUpRight size={16} className="text-white" />
              </div>
            </div>

            {/* Info */}
            <div className="p-5">
              <h3 className="text-[#0B3D4E] font-bold text-[15px] mb-2">{p.name}</h3>
              <p className="text-slate-500 text-[13px] leading-relaxed">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom banner */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#0B3D4E] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-white/4 pointer-events-none" />
        <div>
          <p className="text-orange-400 text-[11px] font-bold tracking-widest uppercase mb-2">Complete Catalogue</p>
          <h3 className="text-white font-bold text-xl" style={{ fontFamily: "'Syne',sans-serif" }}>
            18+ Product Categories Available
          </h3>
          <p className="text-white/55 text-sm mt-1.5">Bosch Rexroth • Caterpillar • Volvo • KYB • Denison • IHI • Oilgear • and more</p>
        </div>
        <Link to="/product"
          className="flex items-center gap-2 bg-[#E8620A] hover:bg-[#F47A2A] text-white px-7 py-4 rounded-xl font-semibold text-[14.5px] transition-all hover:-translate-y-0.5 whitespace-nowrap flex-shrink-0 shadow-lg shadow-orange-900/30">
          View Full Catalogue <ArrowRight size={16} />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default ProductsPreview;
