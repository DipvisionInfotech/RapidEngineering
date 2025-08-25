import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter} from "lucide-react";
import logo from "../assets/react.svg";

export default function Footer() {
  return (

      <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="Company Logo" className="h-17 w-auto" />
              <div>
                <h3 className="text-xl font-bold">Rapid Engineering Services</h3>
              </div>
            </div>
            <br/>
            <br/>
            <br/>

            {/* Social media links added here */}
             <h1><b>FOLLOW US</b><br/>
             {/* Follow Rapid Engineering Services for Expert Tips, Latest Updates, and Behind-the-Scenes Action in the World of Hydraulics!           */}
             </h1><br/>
             <div className="grid grid-cols-4 gap-2">
                <a className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 p-3  hover:text-blue-400 transition-colors cursor-pointer" href="https://www.facebook.com/"><Facebook className="h-4 w-4"/></a>
                <a className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 p-3 hover:text-blue-400 transition-colors cursor-pointer" href="https://www.instagram.com/"><Instagram className="h-4 w-4"/></a>
                <a className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 p-3 hover:text-blue-400 transition-colors cursor-pointer" href="https://x.com/"><Twitter className="h-4 w-4"/></a>
                <a className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 p-3 hover:text-blue-400 transition-colors cursor-pointer"  href="https://www.linkedin.com/"><Linkedin className="h-4 w-4"/></a>
              </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="/service_repair" className="text-gray-400 hover:text-white transition-colors">
                  Repair & Overhaul
                </a>
              </li>
              <li>
                <a href="/technical_training" className="text-gray-400 hover:text-white transition-colors">
                  Technical Training
                </a>
              </li>
              <li>
                <a href="/units" className="text-gray-400 hover:text-white transition-colors">
                  Reconditioned Units
                </a>
              </li>
              <li>
                <a href="/annual_contracts" className="text-gray-400 hover:text-white transition-colors">
                  Annual Maintenance Contracts
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/about" className="hover:text-white transition-colors cursor-pointer">
                About
                </a>
              </li>
              {/* <li className="hover:text-white transition-colors cursor-pointer">
                Our Team
              </li> */}
              <li>
                <a href="/product" className="hover:text-white transition-colors cursor-pointer">
                Our Products
                </a>
              </li>
              {/* <li className="hover:text-white transition-colors cursor-pointer">
                Our Partners
              </li> */}
              <li>
                <a href="/contact" className="hover:text-white transition-colors cursor-pointer">
                Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center hover:text-white transition-colors">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-3"><path d="M22 16.92v3a2 2 0 0 1-2.18 2.02l-4.24-.85a2 2 0 0 1-1.82-1.52l-.8-.8c-1.31-1.3-2.62-2.61-3.92-3.91s-2.61-2.61-3.92-3.91l-.8-.8a2 2 0 0 1-1.52-1.82l-.85-4.24A2 2 0 0 1 3.08 2H6a2 2 0 0 1 2 2v3a2 2 0 0 1-1.15 1.83l-1.39.7a1 1 0 0 0-.46 1.13l.94 1.88a1 1 0 0 0 1.13.46l.7-1.39A2 2 0 0 1 12 11v3a2 2 0 0 1 1.83 1.15l.7 1.39a1 1 0 0 0 1.13.46l1.88-.94a1 1 0 0 0 1.13.46z"/></svg> */}
                <Phone className="w-4 h-4 mr-3" />
                <a href="tel:+919999999999">+91 9999999999</a>
              </div>
              <div className="flex items-center hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-3"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22 6 12 13 2 6"/></svg>
                <a href="mailto:info@rapidengg.com">info@rapidengg.com</a>
              </div>
              <div className="flex items-start hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-3 mt-1"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
                <span>
                  Delhi
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; 2025 Rapid Engineering Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};