import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";

import Service_repair from "./Pages/Service_repair";
import Service_TT from "./Pages/Service_TT";
import Service_Reconditional from "./Pages/Service_Reconditional";
import Service_Annual from "./Pages/Service_Annual";

import Industries_Mobile from "./Pages/Industries_Mobile";
import Industries_Mining from "./Pages/Industries_Mining";
import Industries_Agriculture from "./Pages/Industries_Agriculture";
import Industries_Defence from "./Pages/Industries_Defence";
import Industries_Marine from "./Pages/Industries_Marine";
import Industries_Forest from "./Pages/Industries_Forest";
import Industries_Tunnel from "./Pages/Industries_Tunnel";
import Industries_Manufacturing from "./Pages/Industries_Manfacturing";
import Industries_Recycling from "./Pages/Industries_Recycling";

import Product from "./Pages/Product";

/* Scroll to top on every route change */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />

      {/* Navbar is always fixed at top — always visible */}
      <Navbar />

      <Routes>
        <Route path="/"                       element={<HomePage />} />
        <Route path="/about"                  element={<AboutPage />} />
        <Route path="/contact"                element={<ContactPage />} />

        <Route path="/service_repair"         element={<Service_repair />} />
        <Route path="/technical_training"     element={<Service_TT />} />
        <Route path="/units"                  element={<Service_Reconditional />} />
        <Route path="/annual_contracts"       element={<Service_Annual />} />

        <Route path="/mobile_hydraulics"      element={<Industries_Mobile />} />
        <Route path="/mining_power_generation" element={<Industries_Mining />} />
        <Route path="/agriculture_machines"   element={<Industries_Agriculture />} />
        <Route path="/defence_aviation"       element={<Industries_Defence />} />
        <Route path="/marine_offshore"        element={<Industries_Marine />} />
        <Route path="/forestry"               element={<Industries_Forest />} />
        <Route path="/tunnel"                 element={<Industries_Tunnel />} />
        <Route path="/manufacturing"          element={<Industries_Manufacturing />} />
        <Route path="/recycling"              element={<Industries_Recycling />} />

        <Route path="/product"                element={<Product />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;