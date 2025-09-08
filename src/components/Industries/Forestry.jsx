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
export const Forestry = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900/80 to-blue-700/80 text-white py-12 px-6 sm:px-12 md:px-24 bg-cover bg-center relative"
      style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/low-angle-shot-piled-logs-with-greenery-background_181624-17565.jpg?ga=GA1.1.1154289487.1757069524&semt=ais_hybrid&w=740&q=80)' }}
      >
        <div className="absolute inset-0 bg-green-900 opacity-60"></div>
                <div className="max-w-7xl mx-auto text-center py-16 sm:py-24 relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Forestry
          </h1>
          <p className="text-lg sm:text-xl font-light max-w-3xl mx-auto opacity-90">
           Heavy-duty forestry work relies on hydraulic power for both immense strength and precise control.
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
                src="https://img.freepik.com/free-photo/wood-processing-factory_1112-1217.jpg?ga=GA1.1.1154289487.1757069524&semt=ais_hybrid&w=740&q=80"
                alt="Forestry"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-6">
                Forestry
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Hydraulic power is the backbone of the modern forestry industry. It provides the immense force and precise control required for heavy machinery like feller bunchers, harvesters, and log loaders. Without reliable hydraulic systems, the tasks of felling trees, processing timber, and transporting logs would be incredibly difficult and inefficient.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our products and services ensure that your forestry equipment operates flawlessly in even the most demanding environments. From high-pressure pumps to durable hoses and fittings.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Forestry;
