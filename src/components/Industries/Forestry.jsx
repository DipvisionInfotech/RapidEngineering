import React from "react";
import IndustryPageTemplate from "../IndustryPageTemplate";

const Forestry = () => (
  <IndustryPageTemplate
    badge="Heavy-Duty Woodland Operations"
    title="Forestry Hydraulics"
    subtitle="High-impact fluid power solutions engineered to endure continuous vibration, side-loads, and harsh outdoor environments."
    bgImage="https://img.freepik.com/free-photo/low-angle-shot-piled-logs-with-greenery-background_181624-17565.jpg"
    aboutTitle="Endurance Engineering for Timber Harvesting"
    aboutText={[
      "Forestry machinery operates under grueling conditions, facing massive mechanical impacts, constant side-loading on boom cylinders, and extreme outdoor temperature changes. Hydrostatic drives and directional valves must remain perfectly calibrated to ensure operator safety and smooth control.",
      "Rapid Engineering Services offers expert repairs, heavy-duty rod chroming, and high-vibration seal packages for log harvesters and feller bunchers. We optimize control valve responsiveness, ensuring logging equipment operates with maximum speed and lifting power."
    ]}
    aboutImage="https://img.freepik.com/free-photo/close-up-grapple-loader-lifting-timber_146671-19080.jpg"
    features={["Grapple Cylinder Rebuilding", "Heavy-Duty Rod Chroming", "Hydrostatic System Calibration", "Vibration-Resistant Seals", "High-Flow Control Valves", "Travel Motor Repair"]}
    highlights={[
      { title: "Impact-Hardened Cylinders", desc: "Upgraded cylinder rods with high-tensile steel and double chroming to prevent structural bends." },
      { title: "Torque Output Calibration", desc: "Computerized load testing of travel and swing motors to ensure maximum traction torque." },
      { title: "Grapple Seals Reinforcement", desc: "Installing high-pressure polyurethane seal kits that resist rapid compression sets." }
    ]}
    equipmentList={["Feller Bunchers", "Timber Harvesters", "Grapple Skidders", "Log Loaders", "Wood Chippers", "Forwarders", "Delimbers"]}
  />
);

export default Forestry;
