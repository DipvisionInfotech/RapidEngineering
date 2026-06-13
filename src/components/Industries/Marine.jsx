import React from "react";
import IndustryPageTemplate from "../IndustryPageTemplate";

const Marine = () => (
  <IndustryPageTemplate
    badge="Corrosion-Resistant Fluid Power"
    title="Marine & Offshore"
    subtitle="Engineered hydraulic systems built to withstand saltwater environments, high humidity, and continuous deck loads."
    bgImage="https://img.freepik.com/free-photo/cargo-ship-parked-harbor-sunny-day-sunset_181624-4056.jpg"
    aboutTitle="Maritime-Grade Engineering for Ocean Vessels & Rigs"
    aboutText={[
      "Maritime hydraulics face the ultimate test: constant exposure to corrosive saltwater, extreme humidity, and severe mechanical stress from ocean waves. Rudder steering gear, deck cranes, and mooring winches cannot afford to fail during deep-sea shipping or cargo handling operations.",
      "Rapid Engineering Services specializes in marine-certified hydraulic rebuilding, cargo winch motor calibration, and custom rod coating. We employ specialized chrome finishes, double-lip polyurethane marine seals, and multi-layer marine epoxies to guarantee component durability at sea."
    ]}
    aboutImage="https://img.freepik.com/free-photo/large-ship-crane-lifting-cargo-at-dock_146671-19062.jpg"
    features={["Corrosion-Resistant Coatings", "Cargo Winch Motor Repair", "Steering Gear Calibrations", "Marine Epoxy Finishing", "Anchor Windlass Service", "Offshore Stabilizer Rebuilding"]}
    highlights={[
      { title: "Anti-Corrosive Rod Finishing", desc: "Applying advanced multi-layer industrial chroming and ceramic sprays to prevent saltwater pitting." },
      { title: "Rudder Positioning Audits", desc: "Precise calibration of rudder steering actuators to comply with international maritime safety codes." },
      { title: "Offshore Heavy-Lifting Rebuilds", desc: "Full service and validation of jacking cylinders and stabilizers for deep-water oil rigs." }
    ]}
    equipmentList={["Cargo Deck Cranes", "Mooring Winch Drives", "Rudder Steering Actuators", "Anchor Windlasses", "Stabilizer Systems", "Offshore Jacking Cylinders", "Port Handling Cranes"]}
  />
);

export default Marine;
