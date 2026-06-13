import React, { useState, useEffect } from "react"; 
import { motion, AnimatePresence } from "framer-motion"; 
import CountUp from "react-countup";
 import { Link } from "react-router-dom"; 
 import { ArrowRight, Phone, ChevronRight } from "lucide-react";
 
 
 /* ── 5 high-quality industrial background images ── */ 


 const slides = [ 
  
  { url: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1600&q=80",tag: "Hydraulic Systems", },
 { url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80", tag: "Industrial Manufacturing", }, 
  { url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80", tag: "Precision Engineering", }, 
  
  



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
