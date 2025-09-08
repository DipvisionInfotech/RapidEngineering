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

// Main App component to contain the page content
export const TBM = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900/80 to-blue-700/80 text-white py-12 px-6 sm:px-12 md:px-24 bg-cover bg-center relative"
        style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/underground-tunnel-istanbul-turkey_1268-22513.jpg?ga=GA1.1.1154289487.1757069524&semt=ais_hybrid&w=740&q=80)' }}
      >
        <div className="max-w-7xl mx-auto text-center py-16 sm:py-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Tunnel Boring Machines
          </h1>
          <p className="text-lg sm:text-xl font-light max-w-3xl mx-auto opacity-90">
           TBMs rely on high-pressure hydraulics to bore tunnels with precision and power, minimizing downtime.
          </p>
        </div>
      </section>

      <main>
        {/* About Section */}
        <section className="py-16 sm:py-24 px-6 md:px-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              {/* Placeholder image for the section's visual */}
              <img
                src="https://img.freepik.com/free-photo/vacation-rope-tree-ski-winter_1232-4134.jpg?ga=GA1.1.1154289487.1757069524&semt=ais_hybrid&w=740&q=80"
                alt="TBM"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-black-900 mb-6">
                TBM - Powering Modern Infrastructure
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
               Tunnel Boring Machines are essential for modern infrastructure, excavating tunnels for metro systems and highways with precision. Hydraulics are the heart of a TBM. They power the massive cutter head and the thrust cylinders, providing the force needed to bore through rock and soil.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our high-pressure hydraulic systems, along with our repair and maintenance services, ensure TBMs operate reliably, minimizing project delays and downtime.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TBM;
