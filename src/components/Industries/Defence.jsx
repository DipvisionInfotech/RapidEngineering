import React from "react";
import IndustryPageTemplate from "../IndustryPageTemplate";

const Defence = () => (
  <IndustryPageTemplate
    badge="Tactical & Military Specifications"
    title="Defence & Aerospace"
    subtitle="Zero-failure fluid power engineering meeting strict military standards for combat systems, support gear, and naval platforms."
    bgImage="https://img.freepik.com/free-photo/yellow-jets-maneuvering-sky-air-parade_181624-16775.jpg"
    aboutTitle="Mission-Critical Reliability Under Extreme Conditions"
    aboutText={[
      "Military, naval, and aerospace hydraulics demand absolute reliability under extreme shock loads, rapid thermal cycles, and high pressure. Components must operate flawlessly to ensure the safety of tactical personnel and success of critical missions.",
      "Rapid Engineering Services is an ISO 9001:2015 certified facility providing specialized diagnostics, component reverse engineering, and military-grade cylinder rebuilding. We utilize non-destructive testing (NDT) and hold complete material traceability records for every defence sector contract."
    ]}
    aboutImage="https://img.freepik.com/free-photo/low-angle-shot-b-17-bomber-plane-from-wwii-captured-airbase-sunny-day_181624-26344.jpg"
    features={["MIL-Spec Valve Calibration", "Obsolete Component Engineering", "Non-Destructive Testing", "Material Traceability Logs", "Shock-Resistant Seals", "High-Pressure System Audits"]}
    highlights={[
      { title: "Rigorous Load Simulation", desc: "Every rebuilt tactical valve is tested under simulated combat pressure and thermal stress." },
      { title: "Legacy Platform Support", desc: "Expert reverse engineering of discontinued hydraulic parts for legacy defence equipment." },
      { title: "Strict Quality Control", desc: "Every component is logged, tracked, and certified with strict compliance documentation." }
    ]}
    equipmentList={["Armored Combat Vehicles", "Naval Weapon Actuators", "Missile Launcher Hydraulics", "Aircraft Ground Support Units", "Radar Positioning Drives", "Tactical Support Vehicles"]}
  />
);

export default Defence;
