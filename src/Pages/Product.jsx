import React from 'react';

// Main App component that contains all sections of the website.
export default function Product() {
  return (
    <div className="font-sans antialiased bg-gray-100 text-gray-800">
      {/* <Header /> */}
      <main>
        <HeroSection />
        <ProductsGrid />
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
      className="relative text-white text-center py-20 px-4"
      style={{
        backgroundImage: 'url(https://img.freepik.com/free-photo/closeup-view-cylindrical-grinder-industrial-concept_181624-17731.jpg?ga=GA1.1.1674121280.1756620927&semt=ais_hybrid&w=740&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
       <div className="absolute inset-0 bg-gray-500 opacity-70"></div>
      <div className="relative container mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Our Product Catalog
        </h1>
        <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
          Explore our wide range of high-performance hydraulic pumps & motors designed for various industrial and mobile applications.
        </p>
      </div>
    </section>
  );
};

// Main product grid component.
const ProductsGrid = () => {
  // Product data array.
  const products = [
    {
      name: "Gear Pumps",
      description: "External gear pumps, available in a variety of displacements, mounting flanges and port options.",
      image: "https://img.freepik.com/free-photo/rusty-gear-assembly_1136-278.jpg?ga=GA1.1.1674121280.1756620927&semt=ais_hybrid&w=740&q=80"
    },
    {
      name: "Vane Pumps",
      description: "Vane pumps are known for their quiet operation, efficiency and cost-effectiveness.",
      image: "https://img.freepik.com/free-photo/steel-pipelines-cables-plant_1359-302.jpg?ga=GA1.1.1674121280.1756620927&semt=ais_hybrid&w=740&q=80"
    },
    {
      name: "Piston Pumps",
      description: "Axial piston pumps and motors are a popular choice for high pressure and high flow applications.",
      image: "https://img.freepik.com/free-photo/engine-piston-cross-section_1232-2590.jpg?ga=GA1.1.1674121280.1756620927&semt=ais_hybrid&w=740&q=80"
    },
    {
      name: "Directional Control Valves",
      description: "Directional Control Valves change the direction of flow and is also called a spool valve.",
      image: "https://img.freepik.com/free-photo/steel-pipelines-cables-plant_1359-131.jpg?ga=GA1.1.1674121280.1756620927&semt=ais_hybrid&w=740&q=80"
    },
    {
      name: "Intermot Hydro Motor",
      description: "Our Intermot hydro motors are known for their high torque and radial piston design, providing a reliable and efficient solution for a variety of applications. They are especially suited for heavy-duty tasks in mobile and industrial sectors.",
      image: "https://img.freepik.com/free-psd/time-machine-isolated_23-2151870819.jpg?ga=GA1.1.1154289487.1757069524&semt=ais_hybrid&w=740&q=80"
    },
    {
      name: "Hydraulic Motors",
      description: "Our hydraulic motors convert fluid power into rotational motion. They are essential for driving conveyors, winches, and other machinery that requires constant torque. We offer a wide range of motors to suit various applications, known for their durability and high power output.",
      image: "https://img.freepik.com/free-photo/interior-view-steel-factory_1359-184.jpg?ga=GA1.1.1674121280.1756620927&semt=ais_hybrid&w=740&q=80"
    },
    {
      name: "Hydraulic Cylinders",
      description: "Hydraulic cylinders are mechanical actuators that use pressurized fluid to create a powerful, linear motion. They are the workhorses of hydraulic systems, used for lifting, pushing, pulling, and pressing in everything from construction equipment to industrial presses. ",
      image: "https://img.freepik.com/free-photo/minimalist-construction-pvc-pipes-composition_23-2149106869.jpg?ga=GA1.1.1674121280.1756620927&semt=ais_hybrid&w=740&q=80"
    },
    {
      name: "Pressure Control Valves",
      description: "These valves are crucial for regulating pressure within a hydraulic system. They protect components from damage caused by overpressure and maintain system stability. They highly reliable and offer precise pressure adjustment to meet the specific requirements of any application.",
      image: "https://img.freepik.com/free-photo/steel-pipelines-cables-plant_1359-139.jpg?ga=GA1.1.1674121280.1756620927&semt=ais_hybrid&w=740&q=80"
    },
    {
      name: "Flow Control Valves",
      description: "Flow control valves are essential for managing the speed of actuators, such as hydraulic cylinders and motors. By precisely regulating the flow rate of fluid, these valves ensure machines operate at the correct speed for the task at hand. They offer precise and repeatable performance, which is crucial for applications requiring exact movements.",
      image: "https://img.freepik.com/free-vector/realistic-steel-pipeline-system-seamless-pattern_1284-30897.jpg?ga=GA1.1.1674121280.1756620927&semt=ais_hybrid&w=740&q=80"
    },
    {
      name: "Brueninghaus Hydromatik Hydraulic Pump",
      description: "We specialize in Brueninghaus Hydromatik hydraulic pumps, now a key part of the Bosch Rexroth family. These pumps are renowned for their high-performance axial piston design, offering exceptional power density and efficiency for a wide range of mobile and industrial applications.",
      image: "https://img.freepik.com/free-photo/deep-well-submersible-pump-isolated-white_627829-7501.jpg?ga=GA1.1.1154289487.1757069524&semt=ais_hybrid&w=740&q=80"
    },
    
    {
      name: "TM Hydraulic Pump and Motor",
      description: "Our TM hydraulic pumps and motors are a popular choice in the mobile hydraulics sector. They are known for providing cost-effective and dependable solutions, particularly for commercial vehicles like tippers and trailers.",
      image: "https://img.freepik.com/free-photo/spare-part-engine-water-pump-isolated-white_627829-7507.jpg?ga=GA1.1.1154289487.1757069524&semt=ais_hybrid&w=740&q=80"
    },
    {
      name: "Caterpillar Hydraulic Pump",
      description: "Caterpillar, a giant in construction and mining equipment, designs and manufactures its own hydraulic pumps. These pumps are engineered for extreme durability and high performance to support the heavy-duty lifting, digging, and moving functions of their large machinery.",
      image: "https://img.freepik.com/free-photo/old-railwys_181624-32186.jpg?ga=GA1.1.1154289487.1757069524&semt=ais_hybrid&w=740&q=80"
    },
    {
      name: "Schwing Stetter Hydraulic Pump",
      description: "Our Schwing Stetter hydraulic pumps are specifically designed to handle the high pressures and abrasive conditions required for pumping concrete. These pumps are crucial for the efficient and reliable operation of concrete boom pumps and mixers.",
      image: "https://media.istockphoto.com/id/1289962245/photo/industrial-pumping-equipment-powerful-red-pump-with-a-pulley.webp?a=1&b=1&s=612x612&w=0&k=20&c=z8HR8qhTvOtYcObeU2x92W99ce16KUGaZwtwdWkH1vc="
    },
     {
      name: "Volvo Hydraulic Pump",
      description: "We supply genuine Volvo hydraulic pumps engineered for durability and peak performance. These pumps are critical for the demanding work of Volvo construction and mining equipment, offering seamless power and control.",
      image: "https://placehold.co/400x300/e0e0e0/000000?text=Volvo"
    },
     {
      name: "Kayaba Hydraulic Pump & Motor",
      description: "Our Kayaba (KYB) hydraulic pumps and motors provide excellent power density and a long service life. As a trusted brand in mobile hydraulics, these components are ideal for construction machinery, offering both high efficiency and reliable operation.",
      image: "https://placehold.co/400x300/e0e0e0/000000?text=KYB"
    },
     {
      name: "IHI Hydraulic Motor & Pump",
      description: "Our IHI hydraulic motors and pumps are a testament to quality Japanese engineering. Known for their compact size and high efficiency, these components are perfect for mini excavators and other small to medium-sized machinery.",
      image: "https://media.istockphoto.com/id/2208998924/photo/power-fittings-hoses-and-tubes-on-hydraulic-piston-of-lifting-machine.webp?a=1&b=1&s=612x612&w=0&k=20&c=tPrt-z1h-3mLckj02ib5UqKi0s2tw4alkPv7qN-Ra64="
    },
     {
      name: "Oilgear Hydraulic Motor & Pump ",
      description: "Our Oilgear hydraulic motors and pumps are synonymous with durability and closed-loop control. They are a preferred choice for applications where precise control of speed and direction is paramount, such as in industrial presses and machine tools.",
      image: "https://placehold.co/400x300/e0e0e0/000000?text=Oilger"
    },
    {
      name: "Atlas Copco Hydraulic Pump",
      description: "Atlas Copco often uses powerful hydraulic pumps in its machinery, such as rock drills and demolition tools. Their pumps are designed to withstand extreme conditions and deliver reliable performance in demanding environments.",
      image: "https://placehold.co/400x300/e0e0e0/000000?text=Atlas Pump"
    },
    {
      name: "Denison Gold Cup Series Hydraulic Pump",
      description: "The Denison Gold Cup Series pumps are a gold standard in the industry, renowned for their exceptional power, high speed, and reliability. They are a top choice for applications that require a robust and high-performance hydrostatic transmission.",
      image: "https://placehold.co/400x300/e0e0e0/000000?text=Dension Gold"
    },




  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

// Product Card component for displaying a single product.
const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/e0e0e0/000000?text=Image+Not+Found" }}
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        {/* <button className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
          More Info
        </button> */}
      </div>
    </div>
  );
};

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
