import React, { useState, useEffect } from 'react';

// Main App component that combines all sections
const App = () => {
  return (
    <div className="font-sans antialiased text-gray-900 bg-gray-50">
      <HeroSection />
      <IndustriesCarousel />
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
    <section className="bg-gradient-to-r from-green-700 to-blue-500 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Precision Manufacturing for the Future
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Leading the industry with innovative CNC machining, automation solutions, and quality manufacturing since 2002.
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
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-blue-500 rounded-lg p-4 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-8 w-8 mx-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.75c.504-.504 1.154-.756 1.802-.756s1.298.252 1.802.756l.399.398m-.609 4.21c1.479-1.478 2.37-2.381 3.287-3.299A3.352 3.352 0 0117 8.25c0 .762-.35 1.503-.997 2.057-2.734 2.379-4.102 3.56-4.102 3.56S10.231 16.7 9 17.5c-1.4 1.4-2.522 1.942-3.69 1.942H3.75v-.058c1.868 0 3.659-.964 5.25-2.091" />
                    </svg>
                  </div>
                  <h4 className="font-semibold">20+ Years</h4>
                  <p className="text-sm text-blue-100">Experience</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-500 rounded-lg p-4 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-8 w-8 mx-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15M5.25 12h15m-15 3.75h15A2.25 2.25 0 0022.5 15v-1.5a2.25 2.25 0 00-2.25-2.25H5.25a2.25 2.25 0 00-2.25 2.25V15a2.25 2.25 0 002.25 2.25m0-1.5h.008v.008H5.25v-.008zm.008-.008a.008.008 0 01.007-.007h.008v.008h-.008a.008.008 0 01-.007-.008z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold">ISO Certified</h4>
                  <p className="text-sm text-blue-100">Quality Assured</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-500 rounded-lg p-4 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-8 w-8 mx-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4.5A2.25 2.25 0 017.25 9h9.5A2.25 2.25 0 0019 6.75V3" />
                    </svg>
                  </div>
                  <h4 className="font-semibold">500+</h4>
                  <p className="text-sm text-blue-100">Projects Completed</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-500 rounded-lg p-4 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-8 w-8 mx-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v2m0 0V8m0 0v-2" />
                    </svg>
                  </div>
                  <h4 className="font-semibold">50+</h4>
                  <p className="text-sm text-blue-100">Team Members</p>
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
    { name: 'Mobile Hydraulics & Automation', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRru109T0-_LgMlKXHalpK0qGzxFrBgIIM6sw&s', description: 'Powering heavy machinery and precise control systems for mobile applications.' },
    { name: 'Mining & Power Generation', image: 'https://images.unsplash.com/photo-1517439366557-b43e6a4b11f2?q=80&w=2670&auto=format&fit=crop', description: 'Providing robust components for the demanding environments of mining and energy production.' },
    { name: 'Agriculture Machines', image: 'https://images.unsplash.com/photo-1473255140889-1389659c25f3?q=80&w=2670&auto=format&fit=crop', description: 'Ensuring efficiency and reliability for modern agricultural equipment.' },
    { name: 'Defence & Aviation', image: 'https://images.unsplash.com/photo-1515579930-1b7774136615?q=80&w=2670&auto=format&fit=crop', description: 'Supplying critical components for aerospace and defense systems.' },
    { name: 'Marine & Off-Shore', image: 'https://images.unsplash.com/photo-1558230538-348e3a242f38?q=80&w=2670&auto=format&fit=crop', description: 'Building resilient solutions for challenging marine and offshore operations.' },
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
    <div className="py-20 bg-white">
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

// Services Carousel Component
const ServicesCarousel = () => {
  const services = [
    { title: 'Repair & Overhaul Services',icon: 'https://placehold.co/64x64/3B82F6/FFFFFF?text=Repair', description: 'Delivering precision-machined components with complex geometries and tight tolerances.' },
    { title: 'Training', icon: 'https://placehold.co/64x64/3B82F6/FFFFFF?text=Training', description: 'Designing, manufacturing, and servicing high-performance hydraulic systems.' },
    { title: 'Reconditional Units', icon: 'https://placehold.co/64x64/3B82F6/FFFFFF?text=Units', description: 'Integrating smart automation to optimize production and reduce operational costs.' },
    { title: 'Annual Maintenance', icon: 'https://placehold.co/64x64/3B82F6/FFFFFF?text=Maintenance', description: 'Offering expert welding and custom metal fabrication services for various applications.' },
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
                  <img src={service.icon} alt={service.title} className="h-16 w-16 mx-auto mb-4" />
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
