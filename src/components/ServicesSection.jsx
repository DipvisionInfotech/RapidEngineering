import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Wrench, GraduationCap, RefreshCcw, FileText, ArrowRight } from "lucide-react";
import img1 from "../assets/7243a6b06f78c4fcae7eea862cca65e5.jpg";
import img2 from "../assets/47b0ff024ba28977fddf571df190ba66.jpg";
import img3 from "../assets/41f5c68e06005373c8922f47aad22edc.jpg";
import img4 from "../assets/8756c0eec59a01fa58dc5b07515b718f.jpg";



const services = [
{

image:img3,
title:"Repair & Overhaul Services",
desc:"Complete disassembly, inspection and reconditioning of hydraulic systems.",
points:[
"Component diagnosis",
"OEM spare parts",
"Bench testing",
"Certified quality"
],
link:"/service_repair",
accent:"#0B3D4E",
},

{

image:img2,
title:"Technical Training",
desc:"Hands-on training and mentorship for engineers and technicians.",
points:[
"Live practical sessions",
"Certification",
"Industry standards",
"On-site support"
],
link:"/technical_training",
accent:"#E8620A",
},

{

image:img1,
title:"Reconditioned Units",
desc:"Reliable refurbished hydraulic units with excellent performance.",
points:[
"Lower cost",
"Fast delivery",
"Warranty support",
"Eco friendly"
],
link:"/units",
accent:"#0f766e",
},

{

image:img4,
title:"Annual Maintenance Contracts",
desc:"Preventive maintenance to maximise uptime and productivity.",
points:[
"Site visits",
"Tune-ups",
"Priority support",
"Detailed reports"
],
link:"/annual_contracts",
accent:"#ea580c",
},
];

const ServicesSection = () => {
return (
<section className="py-24 bg-[#F4F7FA]">

<div className="max-w-7xl mx-auto px-6">

{/* Header */}

<motion.div
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
className="text-center mb-24"
>

<div className="flex justify-center items-center gap-3 mb-5">

<div className="w-12 h-[4px] bg-[#E8620A]" />

<span className="uppercase tracking-[0.25em] text-[#E8620A] font-bold">
What We Do
</span>

<div className="w-12 h-[4px] bg-[#E8620A]" />

</div>

<h2
className="text-[#0B3D4E] font-black mb-8"
style={{
fontSize:"clamp(2.4rem,4vw,3.5rem)",
fontFamily:"'Syne',sans-serif"
}}
>
Wide Variety of Engineering Services
</h2>

<p className="text-slate-500 max-w-2xl mx-auto text-lg leading-8">
From emergency repairs to structured annual contracts —
we optimise every hydraulic system.
</p>

</motion.div>

{/* Cards */}

<div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7">

{services.map((s,i)=>(

<motion.div
key={s.num}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:i*0.15}}
viewport={{once:true}}
className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 duration-300"
>

<div className="relative h-[240px] overflow-hidden">

<img
src={s.image}
alt={s.title}
className="w-full h-full object-cover group-hover:scale-105 transition"
/>

<div className="absolute inset-0 bg-black/25"/>



</div>

<div className="p-7">

<h3 className="text-[#0B3D4E] text-xl font-bold mb-4">
{s.title}
</h3>

<p className="text-slate-500 mb-5">
{s.desc}
</p>

<ul className="space-y-2 mb-6">

{s.points.map((p)=>(

<li
key={p}
className="text-sm text-slate-600"
>

• {p}

</li>

))}

</ul>

<Link
to={s.link}
style={{color:s.accent}}
className="inline-flex items-center gap-2 font-semibold"
>

Learn More

<ArrowRight size={16}/>

</Link>

</div>

</motion.div>

))}

</div>

</div>

</section>
);
};

export default ServicesSection;