import React from "react";
import IndustryPageTemplate from "../IndustryPageTemplate";

const Recycling = () => (
  <IndustryPageTemplate
    badge="High-Tonnage Scrap & Waste Processing"
    title="Recycling Hydraulics"
    subtitle="Heavy-duty high-pressure cylinder rebuilds and logic manifold servicing for scrap balers, shearers, and compactors."
    bgImage="https://img.freepik.com/free-photo/crane-grab-scrap_1112-1220.jpg"
    aboutTitle="Endurance Engineering for Waste Compaction & Shearing"
    aboutText={[
      "Recycling and waste management equipment operates under continuous, high-pressure cycles in incredibly dirty environments. Scrap metal balers, vehicle crushers, and heavy shearers require massive tonnage, robust cylinder seals, and high-flow manifold logic to compress materials without structural failure.",
      "Rapid Engineering Services specializes in reconditioning large-bore scrap baler cylinders, cartridge logic manifolds, and high-pressure piston/vane pumps. We install upgraded polyurethane composite seals that resist tearing from fine metallic particles and ensure leak-free operation."
    ]}
    aboutImage="https://img.freepik.com/free-photo/metal-scrap-being-crushed-in-recycling-plant_146671-19066.jpg"
    features={["Baler Cylinder Rebuilding", "High-Flow Logic Manifolds", "Polyurethane Composite Seals", "Vane & Piston Pump Repair", "Shearer Blade Actuators", "Nitrogen Accumulator Charging"]}
    highlights={[
      { title: "Contamination-Resistant Sealing", desc: "Upgrading cylinders to extreme-wear polyurethane seals that prevent fine metal dust from scoring cylinder rods." },
      { title: "Cartridge Logic Calibration", desc: "Servicing and pressure-balancing logic element cartridges inside main manifolds to restore cycle speeds." },
      { title: "Accumulator Safety Audits", desc: "Nitrogen gas pressure checks and bladder replacements to ensure smooth cushioning on heavy compression cycles." }
    ]}
    equipmentList={["Scrap Metal Balers", "Industrial Shredders", "Heavy Duty Shearers", "Car Crushers", "Waste Compactors", "Refuse Collector Trucks", "Material Handlers"]}
  />
);

export default Recycling;
