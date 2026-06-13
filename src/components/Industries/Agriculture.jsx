import React from "react";
import IndustryPageTemplate from "../IndustryPageTemplate";

const Agriculture = () => (
  <IndustryPageTemplate
    badge="Agriculture Machinery Solutions"
    title="Agricultural Hydraulics"
    subtitle="Engineered fluid power solutions designed to withstand extreme contamination and demanding seasonal harvest workloads."
    bgImage="https://img.freepik.com/free-photo/close-up-seeder-attached-tractor-field_146671-19087.jpg"
    aboutTitle="High-Efficiency Hydraulics for Precision Farming"
    aboutText={[
      "Agricultural hydraulics operate in punishing, high-dust, and high-moisture environments. Systems demand flawless sealing integrity, precise flow control, and durable mechanical tolerances to prevent fluid degradation and pressure loss.",
      "At Rapid Engineering, we provide factory-level rebuilding, diagnostic calibration, and component supply for major agricultural brands. We focus on enhancing pump pressure and proportional valve response to ensure your machinery performs at maximum efficiency when the harvest window opens."
    ]}
    aboutImage="https://img.freepik.com/free-photo/tractor-working-field_342744-535.jpg"
    features={["Proportional Valve Tuning", "High-Durability Sealing", "Steering Control Calibration", "PTO Drive Rebuilding", "Implement Lift Cylinder Service", "Fluid Contamination Control"]}
    highlights={[
      { title: "Seasonal Readiness Audits", desc: "Comprehensive pre-harvest pressure testing and oil analysis to eliminate mid-season breakdowns." },
      { title: "Field Diagnostics & Repair", desc: "Rapid deployment of on-site service vehicles to remote farms for instant troubleshooting." },
      { title: "OEM Component Integrity", desc: "All pump and motor rebuilds utilize original components from Danfoss, Rexroth, and Eaton." }
    ]}
    equipmentList={["Combine Harvesters", "Heavy-Duty Tractors", "Sugarcane Harvesters", "Large Balers", "Self-Propelled Sprayers", "Precision Planters", "Irrigation Power Units"]}
  />
);

export default Agriculture;
