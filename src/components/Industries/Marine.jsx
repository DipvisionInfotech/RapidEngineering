import React from 'react';

// Inline SVG for a boat icon, to be used in the Expertise section
const BoatIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-12 h-12"
    >
        <path
            fillRule="evenodd"
            d="M2.25 2.25a.75.75 0 000 1.5H3.75v3.634c-.035.156-.051.316-.051.474v2.754a3 3 0 003 3h3.705a.75.75 0 01.442.206l1.583 1.584a.75.75 0 001.06 0l1.583-1.584a.75.75 0 01.442-.206h3.705a3 3 0 003-3V7.864c0-.158-.016-.318-.051-.474V3.75h1.5a.75.75 0 000-1.5H2.25zM15 12.75a.75.75 0 00-.75-.75h-2.25a.75.75 0 00-.75.75v4.5a.75.75 0 00.75.75h2.25a.75.75 0 00.75-.75v-4.5zM8.25 12.75a.75.75 0 00-.75-.75H5.25a.75.75 0 00-.75.75v4.5a.75.75 0 00.75.75h2.25a.75.75 0 00.75-.75v-4.5z"
            clipRule="evenodd"
        />
    </svg>
);

// Inline SVG for the checkmark icon, to be used in the "Why Choose Us" section
const CheckIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-green-500 flex-shrink-0"
    >
        <path
            fillRule="evenodd"
            d="M19.916 4.626a.75.75 0 01.208 1.04l-9.5 13.5a.75.75 0 01-1.168.104l-5.5-5.5a.75.75 0 011.06-1.06l4.97 4.97L19.708 5.66a.75.75 0 011.04-.208z"
            clipRule="evenodd"
        />
    </svg>
);

// Reusable component for the Expertise section cards
const ExpertiseCard = ({ title, items }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-full">
        <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
        <ul className="space-y-3 text-gray-600">
            {items.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                    <CheckIcon />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

// Main App component
export const Marine = () => {
    return (
        <div className="bg-gray-50 font-sans text-gray-800">
            <header
                className="bg-gradient-to-r from-blue-900/80 to-blue-700/80 text-white py-12 px-6 sm:px-12 md:px-24 bg-cover bg-center relative"
                style={{ backgroundImage: 'url(https://www.abs-group.com/content/inline-images/Markets_We_Serve/marine-and-offshore/OffshoreSolutions.png)' }}
            >
                <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
                <div className="max-w-7xl mx-auto text-center py-16 sm:py-24 relative z-10">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
                        Marine & Offshore
                    </h1>
                    <p className="text-lg sm:text-xl font-light max-w-3xl mx-auto opacity-90">
                        Reliable and high-performance hydraulic systems for the challenging marine & offshore environments.
                    </p>
                </div>
            </header>

            {/* Main Content Section */}
            <main>
                {/* About Section */}
                <section className="py-16 sm:py-24 px-6 md:px-24">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <div
                                className="flex items-center justify-center w-full h-80 bg-blue-100 rounded-xl shadow-2xl overflow-hidden"
                                style={{
                                    backgroundImage: 'url(https://www.bonfiglioli.com/Marine-%26-offshore.jpg)',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
                                Tailored Hydraulic Solutions for a Demanding Industry
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-4">
                                The marine and offshore sectors are defined by their harsh, corrosive environments and the critical need for absolute reliability. At PHE India, we understand that downtime is not an option. Our hydraulic systems are meticulously engineered to provide flawless performance in the toughest conditions.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We design and manufacture a wide range of components and integrated systems for ships, ports, and offshore platforms, ensuring safety, efficiency, and operational continuity.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Marine;
