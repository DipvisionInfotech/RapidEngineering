import React from "react";
import IndustryPageTemplate from "../IndustryPageTemplate";

const Manufacturing = () => (
  <IndustryPageTemplate
    badge="Factory Automation & Production Systems"
    title="Manufacturing Hydraulics"
    subtitle="Precision proportional controls and high-cycle power packs keeping production lines running with zero unscheduled downtime."
    bgImage="https://img.freepik.com/free-photo/machines-industrial-building_140725-7605.jpg"
    aboutTitle="High-Cycle Precision for Modern Production Lines"
    aboutText={[
      "In industrial manufacturing, cycle time and pressure consistency are key. High-capacity forging presses, injection molding machines, and stamping lines require rapid, repeatable movement and sub-millisecond proportional valve response. A drop in system pressure or a valve failure can halt an entire factory.",
      "Rapid Engineering Services provides turnkey maintenance, servo pump rebuilding, and proportional control calibration for manufacturing plants. We specialize in retrofitting energy-efficient pumps and servicing high-tonnage clamp cylinders to ensure maximum process repeatability."
    ]}
    aboutImage="https://img.freepik.com/free-photo/industrial-machinery-modern-factory-floor_146671-19069.jpg"
    features={["Proportional Valve Rebuilding", "Stamping Press Overhaul", "Servo Pump Calibration", "Accumulator Gas Charging", "System Pressure Balancing", "Proactive Contamination Audits"]}
    highlights={[
      { title: "Sub-Millisecond Tuning", desc: "Digital calibration of electronic proportional and servo valves to ensure maximum positioning accuracy." },
      { title: "Press Lifecycle Upgrades", desc: "Complete cylinder and manifold rebuilds for high-tonnage stamping and forging presses." },
      { title: "Energy-Efficiency retrofits", desc: "Replacing fixed-displacement systems with variable-frequency servo pump solutions to cut power bills." }
    ]}
    equipmentList={["Hydraulic Press Machines", "Injection Molding Rigs", "Metal Forging Presses", "CNC Sheet Metal Benders", "Hydraulic Power Packs", "Industrial Accumulators", "Assembly Manipulators"]}
  />
);

export default Manufacturing;
