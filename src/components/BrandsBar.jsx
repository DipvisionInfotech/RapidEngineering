import React from "react";

const brands = [
  "Bosch Rexroth","Caterpillar","Volvo CE","Kayaba (KYB)",
  "Denison","Atlas Copco","Schwing Stetter","IHI","Oilgear",
  "Brueninghaus","TM Hydraulics","Danfoss",
];

const BrandsBar = () => (
  <div className="bg-white border-y border-slate-100 py-5 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 mb-4 flex items-center gap-4">
      <div className="h-px flex-1 bg-slate-100" />
      
      <div className="h-px flex-1 bg-slate-100" />
    </div>

    {/* Infinite marquee with fade edges */}
    <div className="relative overflow-hidden">
      {/* Fade left */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      {/* Fade right */}
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="flex marquee-track gap-10 whitespace-nowrap px-4">
        {[...brands, ...brands].map((b, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2.5 text-slate-400 font-semibold text-sm
                       hover:text-[#0B3D4E] transition-colors cursor-default select-none flex-shrink-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-300 flex-shrink-0" />
            {b}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default BrandsBar;
