import React from 'react';

// Inline SVG for the checkmark icon
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

// Main App component to contain the entire page structure
export const Mining = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800">
        <header
        className="bg-gradient-to-r from-blue-900/80 to-blue-700/80 text-white py-12 px-6 sm:px-12 md:px-24 bg-cover bg-center relative"
        style={{ backgroundImage: 'url(https://www.beckersmcusa.com/sites/default/files/inline-images/mining%20underground.jpg)' }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
        <div className="max-w-7xl mx-auto text-center py-16 sm:py-24 relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Mining & Power Generation
          </h1>
          <p className="text-lg sm:text-xl font-light max-w-3xl mx-auto opacity-90">
            Advanced hydraulic systems and cylinders for the demanding environments of the mining & power generation industry.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <main>
        {/* About Section - Mining & Power Generation */}
        <section className="py-16 sm:py-24 px-6 md:px-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              {/* Placeholder image for the section's visual */}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC5nkxAeytJgC6-ZQCNVjh1nHYgWH8ZIRKAQ&s"
                alt="Mining and Power Generation equipment"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
                Mining & Power Generation
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Hydraulics for mining and power generation machinery needs to be robust and reliable to withstand the harsh environments and continuous operation required.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We have over 40 years of experience designing and manufacturing custom hydraulic solutions for these critical sectors. Our products are engineered for maximum uptime and safety.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Mining;
