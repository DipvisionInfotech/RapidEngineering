import React, { useState, useEffect } from 'react';
import res from "../assets/res.jpg";

// Main App component that combines all sections
const App = () => {
  return (
    <div className="font-sans antialiased text-gray-900 bg-gray-50">
      <HeroSection />
      <IndustriesCarousel />
      <ProductsGrid/>
      <ServicesCarousel />
      </div>
  );
};

// Reusable Button components from the hero section
const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    // <section className="bg-gradient-to-r from-green-700 to-blue-500 text-white py-20">
    <section className="bg-gradient-to-r from-blue-900/80 to-blue-700/80 text-black py-10 px-4 sm:px-10 md:px-24 bg-cover bg-center relative"
    style={{ backgroundImage: `url(${res})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Precision Manufacturing for the Future
            </h2> */}
            <p className="text-xl mb-2 text-black-100 pt-20">
              Leading the industry with innovative pumps & motors, automation solutions, and quality manufacturing since 2012.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Get Quote
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="ml-2 h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Button>
              <Button className="border border-white text-white hover:bg-white hover:text-blue-900">
                Learn More
              </Button> */}
            </div>
          </div>
          <br></br><br></br><br></br><br></br>
          <div className="flex justify-end"></div>
          <div className="relative pt-30">
            <div className="bg-black/10 backdrop-blur-sm rounded-xl p-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-blue-500 rounded-lg p-4 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-8 w-8 mx-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.75c.504-.504 1.154-.756 1.802-.756s1.298.252 1.802.756l.399.398m-.609 4.21c1.479-1.478 2.37-2.381 3.287-3.299A3.352 3.352 0 0117 8.25c0 .762-.35 1.503-.997 2.057-2.734 2.379-4.102 3.56-4.102 3.56S10.231 16.7 9 17.5c-1.4 1.4-2.522 1.942-3.69 1.942H3.75v-.058c1.868 0 3.659-.964 5.25-2.091" />
                    </svg>
                  </div>
                  <h4 className="font-semibold">13+ Years</h4>
                  <p className="text-sm text-black-100">Experience</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-500 rounded-lg p-4 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-8 w-8 mx-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15M5.25 12h15m-15 3.75h15A2.25 2.25 0 0022.5 15v-1.5a2.25 2.25 0 00-2.25-2.25H5.25a2.25 2.25 0 00-2.25 2.25V15a2.25 2.25 0 002.25 2.25m0-1.5h.008v.008H5.25v-.008zm.008-.008a.008.008 0 01.007-.007h.008v.008h-.008a.008.008 0 01-.007-.008z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold">ISO Certified</h4>
                  <p className="text-sm text-black-100">Quality Assured</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-500 rounded-lg p-4 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-8 w-8 mx-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4.5A2.25 2.25 0 017.25 9h9.5A2.25 2.25 0 0019 6.75V3" />
                    </svg>
                  </div>
                  <h4 className="font-semibold">100+</h4>
                  <p className="text-sm text-black-100">Projects Completed</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-500 rounded-lg p-4 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-8 w-8 mx-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v2m0 0V8m0 0v-2" />
                    </svg>
                  </div>
                  <h4 className="font-semibold">50+</h4>
                  <p className="text-sm text-black-100">Team Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Carousel component for the industries
const IndustriesCarousel = () => {
  const industries = [
    { name: 'Mobile Hydraulics & Automation', image: 'https://img.freepik.com/free-photo/3d-rendering-hydraulic-elements_23-2149333335.jpg?ga=GA1.1.1154289487.1757069524&semt=ais_hybrid&w=740&q=80', description: 'Powering heavy machinery and precise control systems for mobile applications.' },
    { name: 'Mining & Power Generation', image: 'https://img.freepik.com/free-photo/aerial-shot-two-power-plant-sunset-vilnius_181624-15104.jpg?ga=GA1.1.1154289487.1757069524&semt=ais_hybrid&w=740&q=80', description: 'Providing robust components for the demanding environments of mining and energy production.' },
    { name: 'Agriculture Machines', image: 'https://img.freepik.com/free-photo/close-up-seeder-attached-tractor-field_146671-19087.jpg?ga=GA1.1.1154289487.1757069524&semt=ais_hybrid&w=740&q=80', description: 'Ensuring efficiency and reliability for modern agricultural equipment.' },
    { name: 'Defence & Aviation', image: 'https://img.freepik.com/free-photo/low-angle-shot-b-17-bomber-plane-from-wwii-captured-airbase-sunny-day_181624-26344.jpg?ga=GA1.1.1154289487.1757069524&semt=ais_hybrid&w=740&q=80', description: 'Supplying critical components for aerospace and defense systems.' },
    { name: 'Marine & Off-Shore', image: 'https://img.freepik.com/free-photo/cargo-ship-parked-harbor-sunny-day-sunset_181624-4056.jpg?ga=GA1.1.1154289487.1757069524&semt=ais_hybrid&w=740&q=80', description: 'Building resilient solutions for challenging marine and offshore operations.' },
    { name: 'Forestry', image: 'https://img.freepik.com/free-photo/low-angle-shot-piled-logs-with-greenery-background_181624-17565.jpg?ga=GA1.1.1154289487.1757069524&semt=ais_hybrid&w=740&q=80', description: 'Heavy-duty forestry work relies on hydraulic power for both immense strength and precise control.' },
    { name: 'Tunnel Boring Machine', image: 'https://img.freepik.com/free-photo/vacation-rope-tree-ski-winter_1232-4134.jpg?ga=GA1.1.1154289487.1757069524&semt=ais_hybrid&w=740&q=80', description: 'TBM -The Powering Modern Infrastructure' },
    { name: 'Manufacturing Equipments', image: 'https://img.freepik.com/free-photo/machines-industrial-building_140725-7605.jpg?ga=GA1.1.1154289487.1757069524&semt=ais_hybrid&w=740&q=80', description: 'Our hydraulic solutions power the precision and automation of modern manufacturing equipment.' },
    { name: 'Recycling', image: 'https://img.freepik.com/free-photo/crane-grab-scrap_1112-1220.jpg?ga=GA1.1.1154289487.1757069524&semt=ais_hybrid&w=740&q=80', description: 'Our components are vital for the powerful and efficient operation of recycling machinery, from compactors to shredders.' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % industries.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + industries.length) % industries.length);
  };

  // Manual swipe handlers for touch devices
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    const swipeThreshold = 50; // Minimum pixel distance for a swipe

    if (diff > swipeThreshold) {
      nextSlide();
    } else if (diff < -swipeThreshold) {
      prevSlide();
    }
    setTouchStart(null);
  };

  return (
    <div className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Industries We Serve</h2>
        <div 
          className="relative overflow-hidden rounded-lg shadow-xl"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {industries.map((industry, index) => (
              <div key={index} className="w-full flex-shrink-0 relative">
                <div className="relative">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-80 sm:h-96 object-cover"
                    onError={(e) => {
                      e.target.src = 'https://placehold.co/1920x1080/4F46E5/FFFFFF?text=Image+Missing';
                    }}
                  />
                  <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white text-center">
                    <h3 className="text-3xl font-bold mb-2">{industry.name}</h3>
                    <p className="max-w-md">{industry.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-30 p-2 rounded-full text-white hover:bg-opacity-50 transition-colors focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="arrow" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12 15.75 4.5" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-30 p-2 rounded-full text-white hover:bg-opacity-50 transition-colors focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="arrow" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
  
          {/* Dots for navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {industries.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-white' : 'bg-gray-400 bg-opacity-50 hover:bg-opacity-70'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
const ProductsGrid = () => {
  // Product data array.
  const products = [
    {
      name: "Gear Pumps",
      image: "https://img.freepik.com/free-photo/rusty-gear-assembly_1136-278.jpg?ga=GA1.1.1674121280.1756620927&semt=ais_hybrid&w=740&q=80"
    },
    {
      name: "Vane Pumps",
      image: "https://img.freepik.com/free-photo/steel-pipelines-cables-plant_1359-302.jpg?ga=GA1.1.1674121280.1756620927&semt=ais_hybrid&w=740&q=80"
    },
    {
      name: "Piston Pumps",
      image: "https://img.freepik.com/free-photo/engine-piston-cross-section_1232-2590.jpg?ga=GA1.1.1674121280.1756620927&semt=ais_hybrid&w=740&q=80"
    },
     {
      name: "Intermot Hydro Motor",
      image: "https://img.freepik.com/free-psd/time-machine-isolated_23-2151870819.jpg?ga=GA1.1.1154289487.1757069524&semt=ais_hybrid&w=740&q=80"
    },
    {
      name: "Caterpillar Hydraulic Pump",
      image: "https://img.freepik.com/free-photo/old-railwys_181624-32186.jpg?ga=GA1.1.1154289487.1757069524&semt=ais_hybrid&w=740&q=80"
    },
    {
      name: "TM Hydraulic Pump and Motor",
      image: "https://img.freepik.com/free-photo/spare-part-engine-water-pump-isolated-white_627829-7507.jpg?ga=GA1.1.1154289487.1757069524&semt=ais_hybrid&w=740&q=80"
    },
    {
      name: "Flow Control Valves",
      image: "https://img.freepik.com/free-vector/realistic-steel-pipeline-system-seamless-pattern_1284-30897.jpg?ga=GA1.1.1674121280.1756620927&semt=ais_hybrid&w=740&q=80"
    },
  ];
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

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
        </div>
    </div>
  );
};

// Services Carousel Component
const ServicesCarousel = () => {
  const services = [
    { title: 'Repair & Overhaul Services', description: 'Delivering precision-machined components with complex geometries and tight tolerances.' },
    { title: 'Training', description: 'Designing, manufacturing, and servicing high-performance hydraulic systems.' },
    { title: 'Reconditional Units', description: 'Integrating smart automation to optimize production and reduce operational costs.' },
    { title: 'Annual Maintenance', description: 'Offering expert welding and custom metal fabrication services for various applications.' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  return (
    <div className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {services.map((service, index) => (
              <div key={index} className="w-full flex-shrink-0 p-4">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  {/* <img src={service.icon} alt={service.title} className="h-16 w-16 mx-auto mb-4" /> */}
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
  
          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-300 bg-opacity-50 p-2 rounded-full text-gray-800 hover:bg-opacity-70 transition-colors focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12 15.75 4.5" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-300 bg-opacity-50 p-2 rounded-full text-gray-800 hover:bg-opacity-70 transition-colors focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
        <div className="flex justify-center mt-6 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-indigo-600' : 'bg-gray-400'
                }`}
              ></button>
            ))}
          </div>
      </div>
    </div>
  );
};

export default App;
