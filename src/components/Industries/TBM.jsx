import React from "react";
import IndustryPageTemplate from "../IndustryPageTemplate";

const TBM = () => (
  <IndustryPageTemplate
    badge="Infrastructure & Metro Rail Hydraulics"
    title="Tunnel Boring Machines"
    subtitle="High-pressure thrust cylinders and cutterhead drive motor restorations for massive underground tunneling projects."
    bgImage="https://img.freepik.com/free-photo/underground-tunnel-istanbul-turkey_1268-22513.jpg"
    aboutTitle="High-Tonnage Thrust & Cutterhead Propulsion Systems"
    aboutText={[
      "Tunnel Boring Machines (TBMs) operate deep underground under massive geological pressure. Main cutterhead drive motors, articulation systems, and thrust cylinders must withstand continuous high load. A single hydraulic component failure can halt a metro rail project, resulting in massive delays.",
      "Rapid Engineering Services offers expert repairs, sealing upgrades, and hydrostatic motor calibration for TBM operations across India. We rebuild high-torque radial piston motors, service heavy thrust cylinders, and tune high-precision proportional manifolds to ensure smooth steering and propulsion."
    ]}
    aboutImage="https://img.freepik.com/free-photo/underground-construction-metro-tunnel-boring-machine_146671-19058.jpg"
    features={["Thrust Cylinder Restoration", "Radial Piston Motor Repair", "Segment Erector Hydraulics", "Proportional Steering Valves", "Underground Field Assistance", "Dynamic Flow Re-Balancing"]}
    highlights={[
      { title: "Long-Stroke Thrust Rebuilding", desc: "Full reconditioning, bore polishing, and high-pressure seal upgrades for long-stroke TBM thrust rams." },
      { title: "Cutterhead Torque Matching", desc: "Testing and calibrating multiple cutterhead drive motors to ensure equal torque distribution and rotational speed." },
      { title: "Erector Ring Response Tuning", desc: "Calibrating proportional directional control valves on segment erector arms to ensure precise concrete segment placement." }
    ]}
    equipmentList={["Thrust Propulsion Cylinders", "Cutterhead Drive Motors", "Articulation Steering Rams", "Segment Erector Drives", "Grout Pump Hydraulics", "Belt Conveyor Motors", "Belt Tensioner Cylinders"]}
  />
);

export default TBM;
