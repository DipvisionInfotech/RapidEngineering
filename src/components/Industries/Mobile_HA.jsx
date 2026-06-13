import React from "react";
import IndustryPageTemplate from "../IndustryPageTemplate";

const Mobile_HA = () => (
  <IndustryPageTemplate
    badge="Mobile Hydraulics & Automation"
    title="Mobile Hydraulics"
    subtitle="High-power-density hydrostatic drives and electro-hydraulic steering systems for modern construction machinery."
    bgImage="https://img.freepik.com/free-photo/modern-automated-assembly-line-cars-latest-technological-neutral-technologies-production-cars-plant-assembly-shop-modern-cars_645730-531.jpg"
    aboutTitle="Precision Hydrostatic Drives & On-Board Automation"
    aboutText={[
      "Mobile hydraulics require high power density, lightweight components, and perfect integration with electrical control networks (CAN-bus). Construction equipment like excavators, crawler cranes, and telehandlers rely on closed-loop hydrostatic drives for traction, and proportional valve blocks for fluid steering.",
      "Rapid Engineering Services offers state-of-the-art diagnostic calibration, sensor integration, and pump rebuilding for mobile machinery. We align joystick proportional controls, test swing motor drift, and rebuild travel drives to return machines to their peak digging and lifting speeds."
    ]}
    aboutImage="https://img.freepik.com/free-photo/heavy-duty-wheel-loader-working-at-construction-site_146671-19075.jpg"
    features={["Travel Motor Rebuilding", "Swing Drive Reconditioning", "CAN-bus Valve Tuning", "Joystick Proportionals Calibration", "Hydrostatic Pump Service", "Compact Manifold Rebuilding"]}
    highlights={[
      { title: "Closed-Loop Hydrostatic Service", desc: "Expert rebuild and torque-matching of closed-loop travel pumps and motors to resolve machine tracking drift." },
      { title: "Joystick Responsiveness Tuning", desc: "Aligning solenoid proportional valve coils to eliminate joystick dead zones and jerky machine movements." },
      { title: "Swing Drift Diagnostics", desc: "Rebuilding swing brake discs and pressure relief valves to prevent accidental excavator boom drift." }
    ]}
    equipmentList={["Crawler Excavators", "Wheel Loaders", "All-Terrain Mobile Cranes", "Backhoes", "Telehandlers", "Skid Steers", "Concrete Pumping Trucks"]}
  />
);

export default Mobile_HA;
