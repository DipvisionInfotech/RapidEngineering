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
export const Manufacturing = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800">
      {/* Header/Hero Section */}
      <header   className="bg-gradient-to-r from-blue-900/80 to-blue-700/80 text-white py-12 px-6 sm:px-12 md:px-24 bg-cover bg-center relative"
                style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/3d-rendering-hydraulic-elements_23-2149333332.jpg?ga=GA1.1.1154289487.1757069524&semt=ais_hybrid&w=740&q=80)' }}
            >
       <div className="absolute inset-0 bg-gray-700 opacity-80"></div>
                <div className="max-w-7xl mx-auto text-center py-16 sm:py-24 relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
           Manufacturing Equipments
          </h1>
          <p className="text-lg sm:text-xl font-light max-w-3xl mx-auto opacity-90">
                Our hydraulic solutions power the precision and automation of modern manufacturing equipment.          
            </p>
        </div>
      </header>

      {/* Main Content Section */}
      <main>
        {/* About Section - Defence & Aviation */}
        <section className="py-16 sm:py-24 px-6 md:px-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              {/* Placeholder image for the section's visual */}
              <img
                src="https://img.freepik.com/free-photo/machines-industrial-building_140725-7605.jpg?ga=GA1.1.1154289487.1757069524&semt=ais_hybrid&w=740&q=80"
                alt="Defence and Aviation equipment"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Manufacturing Equipments
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Hydraulic systems are integral to modern manufacturing, providing the powerful and precise control required for heavy-duty machinery. Our solutions enhance the performance of presses, robotics, and assembly line equipment, ensuring operational efficiency and reliability.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Manufacturing;
