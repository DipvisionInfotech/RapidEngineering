import React from 'react';

// Inline SVG for the checkmark icon, to be used in benefit lists
export const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 text-blue-500 flex-shrink-0"
  >
    <path
      fillRule="evenodd"
      d="M19.916 4.626a.75.75 0 01.208 1.04l-9.5 13.5a.75.75 0 01-1.168.104l-5.5-5.5a.75.75 0 011.06-1.06l4.97 4.97L19.708 5.66a.75.75 0 011.04-.208z"
      clipRule="evenodd"
    />
  </svg>
);

// Reusable card component for the "What We Offer" section
export const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-2 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
    {/* <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
      {icon}
    </div> */}
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

// Main App component
export const Annual_Contracts = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800">
      {/* Header/Hero Section with Background Image */}
      <header
        className="bg-gradient-to-r from-blue-900/80 to-blue-700/80 text-white bg-cover bg-center relative"
        style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/busy-professional-looking-businesspeople-writing_1150-1698.jpg)' }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
        <div className="max-w-7xl mx-auto text-center py-16 sm:py-24 relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Annual Maintenance Contracts
          </h1>
          <p className="text-lg sm:text-xl font-light max-w-3xl mx-auto opacity-90">
            Ensure the longevity and peak performance of your hydraulic systems with our comprehensive AMC services.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <main>
        {/* About AMC Section */}
        <section className="py-16 sm:py-24 px-6 md:px-24">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
              Why an Annual Contract?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Regular maintenance is critical for preventing costly failures and extending the lifespan of your hydraulic equipment. Our Annual Maintenance Contracts (AMC) provide a proactive approach to equipment care, ensuring your operations remain safe, efficient, and uninterrupted.
            </p>
          </div>
        </section>

        {/* What We Cover Section */}
        <section className="bg-gray-100 py-16 sm:py-24 px-6 md:px-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-12">
              What Our AMC Covers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 21.5a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-.5.5z"></path>
                    <path d="M12 12a4 4 0 100-8 4 4 0 000 8z"></path>
                    <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" fill="white"></path>
                    <path d="M12 16a4 4 0 100-8 4 4 0 000 8z"></path>
                    <path d="M12 16a4 4 0 100-8 4 4 0 000 8z" fill="white"></path>
                    <path d="M12 20a4 4 0 100-8 4 4 0 000 8z"></path>
                    <path d="M12 20a4 4 0 100-8 4 4 0 000 8z" fill="white"></path>
                    <path d="M22 12l-4.5 4.5L12 22l-4.5-4.5L2 12l4.5-4.5L12 2l4.5 4.5L22 12z"></path>
                  </svg>
                }
                title="Regular Check-ups"
                description="Scheduled site visits for diagnostics, inspection, and preventative maintenance of all hydraulic systems."
              />
              <ServiceCard
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20a8 8 0 100-16 8 8 0 000 16z"></path>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                }
                title="System Tune-ups"
                description="Optimization of system parameters to ensure maximum efficiency, energy savings, and operational smoothness."
              />
              <ServiceCard
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"></path>
                    <path d="M12 6v6l4 2"></path>
                    <path d="M12 12a10 10 0 100 20 10 10 0 000-20z"></path>
                  </svg>
                }
                title="Emergency Support"
                description="Priority access to our expert technicians for breakdown services, minimizing downtime and production loss."
              />
              <ServiceCard
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 12a4 4 0 100-8 4 4 0 000 8z"></path>
                    <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" fill="white"></path>
                    <path d="M12 20a4 4 0 100-8 4 4 0 000 8z"></path>
                    <path d="M12 20a4 4 0 100-8 4 4 0 000 8z" fill="white"></path>
                    <path d="M22 12l-4.5 4.5L12 22l-4.5-4.5L2 12l4.5-4.5L12 2l4.5 4.5L22 12z"></path>
                  </svg>
                }
                title="Parts & Spares"
                description="Guaranteed availability of essential spare parts, ensuring quick repairs without delays."
              />
              <ServiceCard
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"></path>
                    <path d="M12 6v6l4 2"></path>
                    <path d="M12 12a10 10 0 100 20 10 10 0 000-20z" fill="white"></path>
                    <path d="M12 12a10 10 0 100 20 10 10 0 000-20z"></path>
                    <path d="M12 12a10 10 0 100 20 10 10 0 000-20z" fill="white"></path>
                    <path d="M22 12l-4.5 4.5L12 22l-4.5-4.5L2 12l4.5-4.5L12 2l4.5 4.5L22 12z"></path>
                  </svg>
                }
                title="Expert Consultation"
                description="Access to our experienced engineers for technical advice, system upgrades, and long-term planning."
              />
              <ServiceCard
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"></path>
                    <path d="M12 6v6l4 2"></path>
                    <path d="M12 12a10 10 0 100 20 10 10 0 000-20z" fill="white"></path>
                    <path d="M12 12a10 10 0 100 20 10 10 0 000-20z"></path>
                    <path d="M12 12a10 10 0 100 20 10 10 0 000-20z" fill="white"></path>
                    <path d="M22 12l-4.5 4.5L12 22l-4.5-4.5L2 12l4.5-4.5L12 2l4.5 4.5L22 12z"></path>
                  </svg>
                }
                title="Service Reports"
                description="Detailed documentation after each service visit, providing a clear history and recommendations for your equipment."
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

