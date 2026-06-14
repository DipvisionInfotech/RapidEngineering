import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, ChevronRight } from "lucide-react";

import hero1 from "../assets/zYPLrkH3-0pbdigELCOdqOiumpY3lazHVUP6OWMk-Gi0taJUvCpEmviwIUV-80KKRleDwM5AL4uHMjwG_yE2Hv3g0uNg3BEnKJa-tOn_ywJthTn6pupUv4ecrJVgutl522_gEUhc-_VTpEwF1gzplnLeRzTcv685zhlVzOHNySJZI7QQMQn91A8X5p11cUYP.jpg";
import hero2 from "../assets/FMxb3NbLh7WfavQu9eWPZlZ-uUfzp_3oQ-4agrxx26dq_HSwW5EDhUFdZbCwsJzMQZ9LEumwzcQQ5mkzPfuv3VD6CDVoG0VxEa2PJoFCkJL-EYphmbWcoeljBGKqXRs8lkKiQGKclw-M2PflOFpRWxyKMd-MRjutM2jN8YUugOGNQtw5oMpL3Kgr-W4NT5G4.jpg";
import hero4 from "../assets/LXm3SMYl21LN0OOGJyAn4lwFg_c2HIgf8REEPxUuGnmZbzvY14pZg9tlH1YUePdqoJDs7o9T1Ju8AGey5fLgw7wIls58Gf8Km-DO-Q9FbTmEcshPBvzHWrVMPZBCz7AXF14SCQDEW02EAhlEiy9TZp0i1CL08POUN_Ffs4aT5FL2yd5swIuuPlbv1Xx6bVEi.jpg";
import hero5 from "../assets/250cb8d5e651f2c520e6d268aced0171.jpg";

/* ── 5 local industrial background images ── */
const slides = [
  { url: hero1, tag: "Hydraulic Systems" },
  { url: hero2, tag: "Industrial Engineering" },
  { url: hero4, tag: "Expert Technicians" },
  { url: hero5, tag: "Aerospace & Defence" },
];
  const stats = [ { label: "Years Experience", num: 13, suffix: "+" }, 
  { label: "Repairs Completed", num: 500, suffix: "+" },
  { label: "Industries Served", num: 9, suffix: "+" }, 
  { label: "Expert Engineers", num: 50, suffix: "+" }, ];


const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length);
    }, 4500);

    return () => clearInterval(id);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background Slider */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              src={slides[current].url}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,.55) 0%, rgba(0,0,0,.35) 45%, rgba(0,0,0,.15) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1280px",
          margin: "0 auto",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "120px 32px",
        }}
      >
        <div style={{ maxWidth: "650px" }}>

          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 18px",
              borderRadius: "999px",
              background: "rgba(255,255,255,.12)",
              color: "#fff",
              marginBottom: "30px",
              backdropFilter: "blur(12px)",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#E8620A",
              }}
            />

            Rapid Engineering Services — Since 2012
          </div>

          {/* Title */}
          <h1
            style={{
              color: "#fff",
              fontSize: "clamp(3rem,7vw,5.2rem)",
              lineHeight: 1.05,
              fontWeight: 800,
              marginBottom: "28px",
              fontFamily: "'Syne',sans-serif",
            }}
          >
            RAPID
            <br />

            <span style={{ color: "#E8620A" }}>
              ENGINEERING
            </span>

            <br />

            SERVICES
          </h1>

          {/* Description */}
          <p
            style={{
              color: "rgba(255,255,255,.85)",
              fontSize: "17px",
              lineHeight: 1.9,
              maxWidth: "620px",
              marginBottom: "42px",
            }}
          >
            Innovative hydraulic pumps, motors,
            automation systems and precision engineering
            services powering industries across India.
            Rapid Engineering Services Since 2012
          </p>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",

                minWidth: "190px",
                height: "58px",

                background: "#E8620A",
                color: "#fff",

                borderRadius: "14px",

                textDecoration: "none",

                fontWeight: 600,
                fontSize: "15px",

                boxShadow:
                  "0 12px 28px rgba(232,98,10,.32)",

                transition: ".25s",
              }}
            >
              Contact Us
            </Link>

            <Link
              to="/product"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",

                minWidth: "190px",
                height: "58px",

                color: "#fff",

                borderRadius: "14px",

                textDecoration: "none",

                border:
                  "1px solid rgba(255,255,255,.28)",

                background:
                  "rgba(255,255,255,.08)",

                backdropFilter: "blur(14px)",

                fontWeight: 600,
                fontSize: "15px",
              }}
            >
              View Products
            </Link>
          </div>

        </div>
      </div>

    </section>
  );
};

export default HeroSection;
