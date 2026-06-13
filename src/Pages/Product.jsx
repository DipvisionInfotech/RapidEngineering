import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Search } from "lucide-react";
import PageHero from "../components/PageHero";

const products = [
  { cat: "Pumps",  name: "Gear Pumps",                       desc: "External gear pumps in various displacements, mounting flanges and port options.",                       img: "https://img.freepik.com/free-photo/rusty-gear-assembly_1136-278.jpg",                         tag: "High Volume" },
  { cat: "Pumps",  name: "Vane Pumps",                       desc: "Known for quiet operation, efficiency and cost-effectiveness in industrial settings.",                     img: "https://img.freepik.com/free-photo/steel-pipelines-cables-plant_1359-302.jpg",                tag: "Low Noise" },
  { cat: "Pumps",  name: "Piston Pumps",                     desc: "Axial piston pumps for high pressure and high flow applications.",                                        img: "https://img.freepik.com/free-photo/engine-piston-cross-section_1232-2590.jpg",               tag: "High Pressure" },
  { cat: "Valves", name: "Directional Control Valves",        desc: "Change direction of flow — also called spool valves — for precision system control.",                    img: "https://img.freepik.com/free-photo/steel-pipelines-cables-plant_1359-131.jpg",                tag: "Precision" },
  { cat: "Motors", name: "Intermot Hydro Motor",             desc: "High torque radial piston design for heavy-duty mobile and industrial sectors.",                          img: "https://img.freepik.com/free-psd/time-machine-isolated_23-2151870819.jpg",                    tag: "High Torque" },
  { cat: "Motors", name: "Hydraulic Motors",                 desc: "Convert fluid power into rotational motion for conveyors, winches and machinery.",                       img: "https://img.freepik.com/free-photo/interior-view-steel-factory_1359-184.jpg",               tag: "Heavy Duty" },
  { cat: "Cylinders", name: "Hydraulic Cylinders",           desc: "Powerful linear actuators for lifting, pushing, pulling and pressing applications.",                     img: "https://img.freepik.com/free-photo/minimalist-construction-pvc-pipes-composition_23-2149106869.jpg", tag: "All Sizes" },
  { cat: "Valves", name: "Pressure Control Valves",          desc: "Regulate system pressure, protecting components from overpressure damage.",                              img: "https://img.freepik.com/free-photo/steel-pipelines-cables-plant_1359-139.jpg",                tag: "Safety" },
  { cat: "Valves", name: "Flow Control Valves",              desc: "Manage actuator speed with precise, repeatable flow rate control.",                                       img: "https://img.freepik.com/free-vector/realistic-steel-pipeline-system-seamless-pattern_1284-30897.jpg", tag: "Precision" },
  { cat: "OEM",    name: "Brueninghaus Hydromatik Pump",     desc: "Bosch Rexroth axial piston pumps for exceptional power density and efficiency.",                         img: "https://img.freepik.com/free-photo/deep-well-submersible-pump-isolated-white_627829-7501.jpg", tag: "Bosch Rexroth" },
  { cat: "OEM",    name: "TM Hydraulic Pump & Motor",        desc: "Cost-effective solutions for commercial vehicles like tippers and trailers.",                             img: "https://img.freepik.com/free-photo/spare-part-engine-water-pump-isolated-white_627829-7507.jpg", tag: "Mobile" },
  { cat: "OEM",    name: "Caterpillar Hydraulic Pump",       desc: "Engineered for extreme durability supporting heavy-duty construction machinery.",                        img: "https://img.freepik.com/free-photo/old-railwys_181624-32186.jpg",                            tag: "Caterpillar" },
];

const categories = ["All", ...Array.from(new Set(products.map((p) => p.cat)))];

const Product = () => {
  const [active, setActive]   = useState("All");
  const [query, setQuery]     = useState("");

  const filtered = products.filter((p) =>
    (active === "All" || p.cat === active) &&
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-white">
      <PageHero
       
        title="Complete Product Catalogue"
        subtitle="Explore our wide range of high-performance hydraulic pumps, motors & valves from world-leading OEM brands."
        bgImage="https://img.freepik.com/free-photo/closeup-view-cylindrical-grinder-industrial-concept_181624-17731.jpg"
        
      />

      <section className="py-16 max-w-7xl mx-auto px-6">

        {/* Filter bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  active === cat
                    ? "bg-[#0B3D4E] text-white shadow-md"
                    : "bg-[#F4F7FA] text-slate-600 hover:bg-slate-200 border border-slate-200"
                }`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input value={query} onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="pl-9 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-[#F4F7FA] focus:outline-none focus:border-[#0B3D4E] focus:bg-white transition-all w-56" />
          </div>
        </div>

        {/* Count */}
        <p className="text-slate-400 text-sm mb-6">
          Showing <span className="font-semibold text-[#0B3D4E]">{filtered.length}</span> products
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div key={p.name}
                layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }} transition={{ delay: i * 0.04, duration: 0.4 }}
                className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">

                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img src={p.img} alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.src = `https://placehold.co/400x300/0B3D4E/white?text=${encodeURIComponent(p.name)}`; }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D4E]/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[10px] font-bold text-[#0B3D4E] px-2.5 py-1 rounded-full">
                    {p.tag}
                  </span>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#E8620A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                    <ArrowUpRight size={14} className="text-white" />
                  </div>
                </div>

                {/* Text */}
                <div className="p-5">
                  <span className="text-[10px] font-bold text-[#E8620A] tracking-wider uppercase">{p.cat}</span>
                  <h3 className="text-[#0B3D4E] font-bold text-[14.5px] mt-1 mb-2 leading-snug">{p.name}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            <p className="text-lg font-semibold mb-2">No products found</p>
            <p className="text-sm">Try changing your filters or search query.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Product;
