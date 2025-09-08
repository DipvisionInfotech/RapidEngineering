// import React, { useState } from 'react';
// import { Menu, X, Phone, Mail, MapPin, ChevronRight, Factory, Cog, Users, Award, ArrowRight, CheckCircle, CheckIcon } from 'lucide-react';
// const AboutPage = () => {
//   return (
//     <div className="pt-24 pb-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
//           <div>
//             <h1 className="text-4xl font-bold text-gray-900 mb-6">Rapid Engineering Services</h1>
//             <p className="text-lg text-gray-600 mb-6">
//               Established in 2002, Rapid Engineering Services has grown to become a leading ISO 9001:2008 certified company 
//               with a strong presence in the automotive and precision manufacturing sectors.
//             </p>
//             <p className="text-lg text-gray-600 mb-6">
//               We specialize in manufacturing precision CNC machined components with near-zero PPM defect rates, 
//               serving clients across various industries with our comprehensive manufacturing capabilities.
//             </p>
//             <div className="grid grid-cols-2 gap-6">
//               <div>
//                 <h3 className="text-2xl font-bold text-blue-600">20+</h3>
//                 <p className="text-gray-700">Years of Experience</p>
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold text-blue-600">500+</h3>
//                 <p className="text-gray-700">Projects Completed</p>
//               </div>
//             </div>
//           </div>
//           <div className="bg-gray-100 rounded-2xl p-8">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Capabilities</h3>
//             <div className="space-y-4">
//               <div className="flex items-center">
//                 <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
//                 <span>Precision CNC Machining</span>
//               </div>
//               <div className="flex items-center">
//                 <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
//                 <span>Vertical Machining Centers (VMC)</span>
//               </div>
//               <div className="flex items-center">
//                 <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
//                 <span>Heat Treatment Services</span>
//               </div>
//               <div className="flex items-center">
//                 <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
//                 <span>Surface Plating & Coating</span>
//               </div>
//               <div className="flex items-center">
//                 <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
//                 <span>Quality Assurance & Testing</span>
//               </div>
//             </div>
//           </div>
//         </div>
//               {/* Our Expertise Section */}
//         {/* <section className="bg-blue-50 py-16 sm:py-24 px-6 md:px-24">
//           <div className="max-w-7xl mx-auto">
//             <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-12">
//               Our Expertise
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//               <ExpertiseCard
//                 icon={
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//                   </svg>
//                 }
//                 title="Proportional Control Valves"
//                 description="We have a wide range of proportional control valves for a variety of applications, including industrial automation, mobile hydraulics, and more."
//               />
//               <ExpertiseCard
//                 icon={
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
//                     <path d="M17 2v5"></path>
//                     <path d="M7 2v5"></path>
//                     <path d="M6 12h12"></path>
//                     <path d="M10 16h4"></path>
//                   </svg>
//                 }
//                 title="Special Mobile & Automation Cylinders"
//                 description="We offer a variety of special mobile and automation cylinders that are designed to meet the specific needs of your application."
//               />
//               <ExpertiseCard
//                 icon={
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M12 20h9"></path>
//                     <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"></path>
//                   </svg>
//                 }
//                 title="Directional Control Valves"
//                 description="Our directional control valves are designed to control the direction of hydraulic fluid flow in a variety of applications."
//               />
//               <ExpertiseCard
//                 icon={
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <circle cx="12" cy="12" r="10"></circle>
//                     <path d="M12 6v6l4 2"></path>
//                   </svg>
//                 }
//                 title="Pressure Control Valves"
//                 description="We offer a wide range of pressure control valves that are designed to control the pressure in a hydraulic system."
//               />
//               <ExpertiseCard
//                 icon={
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"></path>
//                     <path d="M12 6v6l4 2"></path>
//                   </svg>
//                 }
//                 title="Check Valves"
//                 description="Our check valves are designed to prevent the backflow of hydraulic fluid in a variety of applications."
//               />
//               <ExpertiseCard
//                 icon={
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path>
//                     <path d="M14 2l6 6"></path>
//                   </svg>
//                 }
//                 title="Hydraulic Power Packs"
//                 description="We offer a wide range of hydraulic power packs that are designed to provide the power you need for your hydraulic system."
//               />
//             </div>
//           </div>
//         </section> */}
        
//         {/* Why Choose Us Section */}
//         <section className="py-16 sm:py-24 px-6 md:px-24">
//           <div className="max-w-7xl mx-auto">
//             <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-12">
//               Why Choose Us
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
//               <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-md">
//                 <CheckIcon />
//                 <p className="text-lg text-gray-600">
//                   <span className="font-bold text-blue-900">Customized Solutions:</span> We provide tailored solutions to meet the unique needs of your business, ensuring optimal performance and efficiency.
//                 </p>
//               </div>
//               <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-md">
//                 <CheckIcon />
//                 <p className="text-lg text-gray-600">
//                   <span className="font-bold text-blue-900">Quality Assurance:</span> Our commitment to quality is unwavering, with rigorous testing and inspection at every stage of the process to guarantee reliability.
//                 </p>
//               </div>
//               <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-md">
//                 <CheckIcon />
//                 <p className="text-lg text-gray-600">
//                   <span className="font-bold text-blue-900">Expertise:</span> With decades of experience in the industry, our team of experts is equipped with the knowledge and skills to handle any challenge.
//                 </p>
//               </div>
//               <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-md">
//                 <CheckIcon />
//                 <p className="text-lg text-gray-600">
//                   <span className="font-bold text-blue-900">Competitive Pricing:</span> We offer cost-effective solutions without compromising on quality, providing you with the best value for your investment.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
    
//   );
// };
// export default AboutPage;

import React from 'react';
import { CheckIcon } from 'lucide-react';
import about from '../assets/about.jpg'

// Main App component that contains all sections of the website.
export default function AboutPage() {
  return (
    <div className="font-sans antialiased bg-gray-100 text-gray-800">
      {/* <Header /> */}
      <main>
        <HeroSection />
        <AboutSection />
        <MissionVisionSection />
        <ChooseUsSection/>
        {/* <ContactCTA /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

// Header component with a logo and navigation.
// const Header = () => {
//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <div className="flex items-center space-x-2">
//           <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M12 21.35l-1.5-1.5c-4.66-4.67-7.5-7.5-7.5-10.35a5.5 5.5 0 0111 0c0 2.85-2.84 5.68-7.5 10.35z"></path>
//           </svg>
//           <span className="text-xl font-bold text-gray-900">Rapid Engineering</span>
//         </div>
//         <nav className="hidden md:flex space-x-6 text-gray-600">
//           <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
//           <a href="#" className="hover:text-blue-600 transition-colors">About Us</a>
//           <a href="#" className="hover:text-blue-600 transition-colors">Services</a>
//           <a href="#" className="hover:text-blue-600 transition-colors">Products</a>
//           <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
//         </nav>
//         <div className="md:hidden">
//           {/* Mobile menu icon */}
//           <button className="text-gray-600 focus:outline-none">
//             <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// Hero Section component for the main banner.
const HeroSection = () => {
  return (
    <section 
      className="relative text-white text-center py-15 px-4"
      style={{ backgroundImage: `url(${about})` }}
       >
      <div className="absolute inset-0 bg-blue-700 opacity-70"></div>
      <div className="relative container mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          About Us
        </h1>
        <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
          Rapid Engineering is a team of young, dynamic, and experienced hydraulic engineers.
        </p>
      </div>
    </section>
  );
};

// Main about section with detailed company information.
const AboutSection = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
        <div className="md:flex md:space-x-8">
          <div className="md:w-1/2 flex items-center justify-center mb-6 md:mb-0">
            <img
              src="https://img.freepik.com/free-photo/engineer-examining-blueprint_23-2152006093.jpg?ga=GA1.1.1674121280.1756620927&semt=ais_hybrid&w=740&q=80"
              alt="Hydraulic machinery"
              className="rounded-lg shadow-md w-300 h-100 object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/e0e0e0/000000?text=Image+Not+Found" }}
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Your Partner in Hydraulic Solutions
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Established in 2012, Rapid Engineering has quickly become a trusted name in the hydraulic industry. We specialize in the repair, service, and supply of a wide range of hydraulic pumps, motors, and systems. Our success is built on a foundation of technical expertise, prompt service, and an unwavering commitment to customer satisfaction.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We understand the critical role that hydraulic systems play in various industries, and our goal is to minimize downtime and maximize productivity for our clients. Our engineers are trained to provide solutions that are not only effective but also cost-efficient, ensuring you get the best value for your investment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Section for mission and vision statements.
const MissionVisionSection = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission & Vision</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-gray-50 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the leading provider of hydraulic solutions by offering unparalleled service, innovative products, and expert technical support to our clients, ensuring their systems operate at peak performance.
            </p>
          </div>
          <div className="p-8 bg-gray-50 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To drive industry standards by continuously improving our technical capabilities and expanding our service offerings, while maintaining our core values of integrity, quality, and customer-first approach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
 {/* Why Choose Us Section */}
 const ChooseUsSection = () => {
  return(
        <section className="py-16 sm:py-24 px-6 md:px-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-12">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-md">
                <CheckIcon />
                <p className="text-lg text-gray-600">
                  <span className="font-bold text-blue-900">Customized Solutions:</span> We provide tailored solutions to meet the unique needs of your business, ensuring optimal performance and efficiency.
                </p>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-md">
                <CheckIcon />
                <p className="text-lg text-gray-600">
                  <span className="font-bold text-blue-900">Quality Assurance:</span> Our commitment to quality is unwavering, with rigorous testing and inspection at every stage of the process to guarantee reliability.
                </p>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-md">
                <CheckIcon />
                <p className="text-lg text-gray-600">
                  <span className="font-bold text-blue-900">Expertise:</span> With decades of experience in the industry, our team of experts is equipped with the knowledge and skills to handle any challenge.
                </p>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-md">
                <CheckIcon />
                <p className="text-lg text-gray-600">
                  <span className="font-bold text-blue-900">Competitive Pricing:</span> We offer cost-effective solutions without compromising on quality, providing you with the best value for your investment.
                </p>
              </div>
            </div>
          </div>
        </section>
  );
};

// Call-to-action section.
// const ContactCTA = () => {
//   return (
//     <section className="bg-blue-600 text-white py-16 px-4 text-center">
//       <div className="container mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started?</h2>
//         <p className="text-lg mb-6 max-w-2xl mx-auto">
//           Whether you need a repair, a new unit, or technical advice, our team is ready to assist you.
//         </p>
//         <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition-colors">
//           Contact Us
//         </button>
//       </div>
//     </section>
//   );
// };

// Footer component with contact and copyright information.
// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-12">
//       <div className="container mx-auto px-6">
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Company Info and Social Links */}
//           <div>
//             <div className="flex items-center space-x-3 mb-4">
//               <svg className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M12 21.35l-1.5-1.5c-4.66-4.67-7.5-7.5-7.5-10.35a5.5 5.5 0 0111 0c0 2.85-2.84 5.68-7.5 10.35z"></path>
//               </svg>
//               <h3 className="text-xl font-bold">Rapid Engineering</h3>
//             </div>
//             <p className="text-gray-400 mb-4">Leading the industry with innovative solutions and quality manufacturing.</p>
//             <div className="flex space-x-4">
//               <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
//               </a>
//               <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-2.1 2.3-4.1 3.2c-.6.2-1.3-.2-1.5-.8-.1-.4-.2-.8-.2-1.2 0-1.8 1.4-3.2 3.2-3.2h.5l-.2-.5h-.5C18.6 1.7 17.1 2.5 16 3.7c-1.3-1.3-3.1-2.2-5.1-2.2-3.8 0-7 3.2-7 7 0 .5.1 1 .2 1.4-3.8-1.9-6.9-5.7-7-9 0-.1 0-.3 0-.4 0-.4.3-.8.8-.8.2 0 .4.1.5.3 1.1 1.4 2.5 2.6 4.1 3.5 1.5.9 3.2 1.3 5 1.3 3.8 0 7-3.2 7-7 0-.5-.1-1-.2-1.4 3.8 1.9 6.9 5.7 7 9 0 .1 0 .3 0 .4 0 .4-.3.8-.8.8-.2 0-.4-.1-.5-.3z"/></svg>
//               </a>
//               <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 0-6 6v7h4v-7a2 2 0 1 1 4 0v7h4v-7a6 6 0 0 0-6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
//               </a>
//             </div>
//           </div>
//           {/* Services Links */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Services</h4>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Repair & Overhaul</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Technical Training</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Reconditioned Units</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Annual Maintenance Contracts</a></li>
//             </ul>
//           </div>
//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Team</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Products</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Partners</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
//             </ul>
//           </div>
//           {/* Contact Info */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
//             <div className="space-y-3 text-gray-400">
//               <div className="flex items-center">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-3"><path d="M22 16.92v3a2 2 0 0 1-2.18 2.02l-4.24-.85a2 2 0 0 1-1.82-1.52l-.8-.8c-1.31-1.3-2.62-2.61-3.92-3.91s-2.61-2.61-3.92-3.91l-.8-.8a2 2 0 0 1-1.52-1.82l-.85-4.24A2 2 0 0 1 3.08 2H6a2 2 0 0 1 2 2v3a2 2 0 0 1-1.15 1.83l-1.39.7a1 1 0 0 0-.46 1.13l.94 1.88a1 1 0 0 0 1.13.46l.7-1.39A2 2 0 0 1 12 11v3a2 2 0 0 1 1.83 1.15l.7 1.39a1 1 0 0 0 1.13.46l1.88-.94a1 1 0 0 0 1.13.46z"/></svg>
//                 <span>+91 9999999999</span>
//               </div>
//               <div className="flex items-center">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-3"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22 6 12 13 2 6"/></svg>
//                 <span>info@rapidengg.com</span>
//               </div>
//               <div className="flex items-start">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-3 mt-1"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
//                 <span>Delhi</span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
//           <p>&copy; 2025 Rapid Engineering Services. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };
