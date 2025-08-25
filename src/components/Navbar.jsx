import React, { useState } from "react";
import { ChevronDown, Menu, X, Plus, Minus, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Logosection from "./Logosection";
import logo from "../assets/react.svg";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const [openSubCategory, setOpenSubCategory] = useState(null); // NEW: For inner accordions

const industries = [
    { to: "mobile_hydraulics/", label: "Mobile Hydraulics & Automation" },
    { to: "mining_power_generation/", label: "Mining & Power Generation" },
    { to: "agriculture_machines/", label: "Agriculture Machines" },
    { to: "defence_aviation/", label: "Defence & Avaiation" },
    { to: "marine_offshore/", label: "Marine & Off-Shore" },
  ];
 
  const services = [
    { to: "service_repair/", label: "Repair & Overhaul Services" },
    { to: "technical_training/", label: "Technical Training & Mentorship" },
    { to: "/units", label: "Reconditioned Units" },
    { to: "/annual_contracts", label: "Annual Maintenance Contracts" },
  ];
  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-1">
        <Logosection />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 items-center">
          <li>
            <Link to="/" className="text-gray-700 hover:text-blue-900">
              Home
            </Link>
          </li>
          <li>
            <Link to="about" className="text-gray-700 hover:text-blue-900">
              About
            </Link>
          </li>
          <li className="relative group">
            <button className="flex items-center text-gray-700 hover:text-blue-900">
              Services <ChevronDown className="w-4 h-4 ml-1 mt-1" />
            </button>
           <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-[250px]">
              <ul className="py-2">
                {services.map((service, idx) => (
                  <li key={idx}>
                    <Link
                      to={service.to}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="relative group">
            <button className="flex items-center text-gray-700 hover:text-blue-900">
              Industries <ChevronDown className="w-4 h-4 ml-1 mt-1" />
            </button>
             <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-[250px]">
              <ul className="py-2">
                {industries.map((service, idx) => (
                  <li key={idx}>
                    <Link
                      to={service.to}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li>
            <Link to="product" className="text-gray-700 hover:text-blue-900">
              Products
            </Link>
          </li>
          <li>
            <Link to="contact" className="text-gray-700 hover:text-blue-900">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* WhatsApp Button (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="flex items-center space-x-1 bg-gradient-to-r from-blue-400 to-indigo-500 text-white px-3 py-3 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
            {/* <img src={logo} alt="WhatsApp Logo" className="w-6 h-6" /> */}
             <Phone className="w-4 h-4 mr-3" />
             <a href="tel:+919999999999">Call Now</a>
            {/* <span className="font-medium">+91 9999999999</span> */}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-gray-700 hover:text-blue-900"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

     {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="px-4 py-2 space-y-2">
            <li>
              <Link to="/" className="block py-2" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <span className="block py-2 font-semibold">Services</span>
              <div className="pl-4 space-y-1">
                {services.map((service, idx) => (
                  <Link
                    key={idx}
                    to={service.to}
                    className="block py-1 text-gray-700 hover:text-blue-900"
                    onClick={() => setMobileOpen(false)}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </li>
            <li>
              <Link to="/about" className="block py-2" onClick={() => setMobileOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/product" className="block py-2" onClick={() => setMobileOpen(false)}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2" onClick={() => setMobileOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )
}
    </nav>
  );
};

const CategoryAccordion = ({ category, isOpen, onToggle, closeMenu }) => {
  return (
    <div>
      <button onClick={onToggle} className="flex justify-between w-full py-2">
        {category.name} {isOpen ? <Minus /> : <Plus />}
      </button>
      {isOpen && category.sub.length > 0 && (
        <div className="pl-4">
          {category.sub.map((sub, idx) => (
            <Link
              to={sub.to}
              key={idx}
              className="block py-1"
              onClick={closeMenu}
            >
              {sub.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
