import React from "react";
import IndustryPageTemplate from "../IndustryPageTemplate";

const Mining = () => (
  <IndustryPageTemplate
    badge="Extreme-Pressure Mining Operations"
    title="Mining & Power Generation"
    subtitle="Rugged hydraulic engineering built to endure high vibration, abrasive coal/ore dust, and non-stop work cycles."
    bgImage="https://img.freepik.com/free-photo/wide-angle-shot-excavation-machines-lookout-jackerath-garzweiler-skywalk-germany_181624-10184.jpg"
    aboutTitle="Rugged Fluid Power for Excavation & Power Plants"
    aboutText={[
      "Mining and power generation hydraulics operate under the most punishing conditions: abrasive coal dust, severe vibration, massive loads, and 24/7 operating schedules. Component failure in remote mines can halt entire operations, costing thousands of dollars per hour in lost productivity.",
      "Rapid Engineering Services has a proven track record of supporting mining and power operations across India. We rebuild heavy excavator main pumps, travel motors, steam turbine actuators, and coal handling cylinder rams—testing all components under full dynamic load to guarantee reliability."
    ]}
    aboutImage="https://img.freepik.com/free-photo/heavy-excavator-working-at-open-cast-coal-mine_146671-19077.jpg"
    features={["Heavy Excavator Pump Service", "Hydrostactic Motor Rebuilding", "Turbine Actuator Calibration", "Abrasive-Resistant Seals", "Dynamic Dyno Validation", "Accumulator Gas Safety Audits"]}
    highlights={[
      { title: "Computerized Dyno Validation", desc: "Every mining pump is run on our computerized dyno bench at full pressure (450 Bar) to verify volumetric efficiency." },
      { title: "Particulate Ingress Defense", desc: "Installing heavy-duty wiper rings and metallic scraper seals to prevent coal/ore dust from damaging cylinder bores." },
      { title: "Obsolete Parts Salvaging", desc: "Expert re-machining and alloy rebuilding of obsolete hydraulic valve blocks for older mining excavator fleets." }
    ]}
    equipmentList={["Hydraulic Mining Shovels", "Bucket Wheel Excavators", "Underground LHD Loaders", "Coal Pulverizer Cylinders", "Steam Turbine Governor Valves", "Heavy Dump Truck Hoists", "Rock Drills"]}
  />
);

export default Mining;
