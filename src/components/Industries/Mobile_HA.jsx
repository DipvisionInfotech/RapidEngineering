import React from 'react';

// Reusable components for the page
// I'll create a single main App component to contain all sections.

// Inline SVG for the checkmark icon used in the "Why Choose Us" section
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 text-emerald-500 flex-shrink-0"
  >
    <path
      fillRule="evenodd"
      d="M19.916 4.626a.75.75 0 01.208 1.04l-9.5 13.5a.75.75 0 01-1.168.104l-5.5-5.5a.75.75 0 011.06-1.06l4.97 4.97L19.708 5.66a.75.75 0 011.04-.208z"
      clipRule="evenodd"
    />
  </svg>
);

const ExpertiseCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

// Main App component for the entire page
const Mobile_HA = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800">
      {/* Header/Hero Section */}
      {/* <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 px-6 sm:px-12 md:px-24">
        <div className="max-w-7xl mx-auto text-center py-16 sm:py-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Mobile Hydraulics & Automation
          </h1>
          <p className="text-lg sm:text-xl font-light max-w-3xl mx-auto opacity-90">
            A comprehensive range of mobile hydraulics & automation for all types of industrial machines.
          </p>
        </div>
      </header> */}
        <header
        className="bg-gradient-to-r from-blue-900/80 to-blue-700/80 text-white py-12 px-6 sm:px-12 md:px-24 bg-cover bg-center relative"
        style={{ backgroundImage: 'url(https://img.powermotiontech.com/files/base/ebm/hydraulicspneumatics/image/2024/07/66a931a3d711e6875c47483d-dreamstime_antonmatveev_80278754_promo.png?auto=format,compress&fit=crop&q=45&h=356&height=356&w=640&width=640)' }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
        <div className="max-w-7xl mx-auto text-center py-16 sm:py-24 relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Mobile Hydraulics & Automation
          </h1>
          <p className="text-lg sm:text-xl font-light max-w-3xl mx-auto opacity-90">
            A comprehensive range of mobile hydraulics & automation for all types of industrial machines.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <main>
        {/* About Section - Mobile Hydraulics & Automation */}
        <section className="py-16 sm:py-24 px-6 md:px-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              {/* Using a placeholder image to represent the content from the original site */}
              <img
                src="https://www.whitehouseproductsltd.com/getattachment/c11c235a-f64c-41a2-86b1-1512321542f7/yellow-wheel-loader-and-excavator-are-working.jpg"
                alt="Mobile Hydraulics and Automation equipment"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
                Mobile Hydraulics & Automation
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Mobile Hydraulics & Automation is the integration of mechanical and electronic systems for machines used in a variety of industries.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We have over 40 years of experience in the design, development, and manufacture of a wide range of mobile hydraulics & automation systems, with a focus on delivering the highest quality products and services.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Mobile_HA;
