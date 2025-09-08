import React from 'react';

// Inline SVG for the checkmark icon, to be used in lists
const CheckIcon = () => (
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

// Reusable card component for the process steps
export const ProcessStepCard = ({ number, title, description }) => (
  <div>
    {/* <div className="w-16 h-16 flex items-center justify-center text-3xl font-bold text-white bg-blue-600 rounded-full mb-4">
      {number}
    </div> */}
    <h3>{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

// Main App component
export const Reconditional = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800">
      {/* Header/Hero Section with Background Image */}
      <header
        className="bg-gradient-to-r from-blue-900/80 to-blue-700/80 text-white py-12 px-6 sm:px-12 md:px-24 bg-cover bg-center relative"
        style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/combine-machine-service-mechanic-repairing-motor-outdoors_146671-19074.jpg?ga=GA1.1.1967565485.1757329413&semt=ais_hybrid&w=740&q=80)' }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
        <div className="max-w-7xl mx-auto text-center py-16 sm:py-24 relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Reconditioned Units
          </h1>
          <p className="text-lg sm:text-xl font-light max-w-3xl mx-auto opacity-90">
            A cost-effective and reliable alternative to new hydraulic components without compromising on quality or performance.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <main>
        {/* About Reconditioned Units Section */}
        <section className="py-16 sm:py-24 px-6 md:px-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img
                src="https://img.freepik.com/free-photo/grunge-old-vintage-clock_1232-1721.jpg?ga=GA1.1.1967565485.1757329413&semt=ais_hybrid&w=740&q=80"
                alt="Reconditioned hydraulic units"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
                Sustainable and Economical Solutions
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                At Rapid Engineering Services, we provide meticulously reconditioned hydraulic components as a viable alternative to new equipment. Each unit undergoes a comprehensive process of inspection, cleaning, repair, and testing to meet or exceed original performance specifications.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our reconditioned units offer the perfect balance of quality, reliability, and cost-effectiveness, helping you reduce operational expenses while supporting a sustainable lifecycle for your machinery.
              </p>
            </div>
          </div>
        </section>

        {/* The Reconditioning Process Section */}
        {/* <section className="bg-gray-100 py-16 sm:py-24 px-6 md:px-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-12">
              Our Reconditioning Process
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <ProcessStepCard
                number="1"
                title="Initial Inspection"
                description="Each unit is thoroughly inspected for wear, damage, and existing faults to determine its reconditioning potential."
              />
              <ProcessStepCard
                number="2"
                title="Disassembly & Cleaning"
                description="Units are fully disassembled, and all parts are meticulously cleaned to remove contaminants and debris."
              />
              <ProcessStepCard
                number="3"
                title="Repair & Replacement"
                description="Worn or damaged parts are repaired or replaced with high-quality components, ensuring the unit's integrity."
              />
              <ProcessStepCard
                number="4"
                title="Assembly & Testing"
                description="The unit is reassembled and subjected to rigorous testing to verify its performance, pressure, and flow rates meet all standards."
              />
            </div>
          </div>
        </section> */}

        {/* Benefits Section */}
        <section className="py-16 sm:py-24 px-6 md:px-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-12">
              Key Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-md">
                <CheckIcon />
                <p className="text-lg text-gray-600">
                  <span className="font-bold text-blue-900">Cost-Effective:</span> Get high-quality, reliable hydraulic units at a fraction of the cost of brand-new components.
                </p>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-md">
                <CheckIcon />
                <p className="text-lg text-gray-600">
                  <span className="font-bold text-blue-900">Reduced Lead Times:</span> Reconditioned units are often available with shorter lead times than new parts, minimizing your downtime.
                </p>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-md">
                <CheckIcon />
                <p className="text-lg text-gray-600">
                  <span className="font-bold text-blue-900">Eco-Friendly:</span> Choosing reconditioned units helps reduce waste and the environmental impact of manufacturing new components.
                </p>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-md">
                <CheckIcon />
                <p className="text-lg text-gray-600">
                  <span className="font-bold text-blue-900">Guaranteed Quality:</span> Our rigorous reconditioning process ensures every unit performs to the highest standards, backed by a warranty.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
