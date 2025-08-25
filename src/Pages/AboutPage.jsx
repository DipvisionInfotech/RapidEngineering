import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Factory, Cog, Users, Award, ArrowRight, CheckCircle, CheckIcon } from 'lucide-react';
const AboutPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Rapid Engineering Services</h1>
            <p className="text-lg text-gray-600 mb-6">
              Established in 2002, Rapid Engineering Services has grown to become a leading ISO 9001:2008 certified company 
              with a strong presence in the automotive and precision manufacturing sectors.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We specialize in manufacturing precision CNC machined components with near-zero PPM defect rates, 
              serving clients across various industries with our comprehensive manufacturing capabilities.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-bold text-blue-600">20+</h3>
                <p className="text-gray-700">Years of Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-600">500+</h3>
                <p className="text-gray-700">Projects Completed</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Capabilities</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span>Precision CNC Machining</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span>Vertical Machining Centers (VMC)</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span>Heat Treatment Services</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span>Surface Plating & Coating</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span>Quality Assurance & Testing</span>
              </div>
            </div>
          </div>
        </div>
              {/* Our Expertise Section */}
        {/* <section className="bg-blue-50 py-16 sm:py-24 px-6 md:px-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-12">
              Our Expertise
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <ExpertiseCard
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                }
                title="Proportional Control Valves"
                description="We have a wide range of proportional control valves for a variety of applications, including industrial automation, mobile hydraulics, and more."
              />
              <ExpertiseCard
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                    <path d="M17 2v5"></path>
                    <path d="M7 2v5"></path>
                    <path d="M6 12h12"></path>
                    <path d="M10 16h4"></path>
                  </svg>
                }
                title="Special Mobile & Automation Cylinders"
                description="We offer a variety of special mobile and automation cylinders that are designed to meet the specific needs of your application."
              />
              <ExpertiseCard
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                }
                title="Directional Control Valves"
                description="Our directional control valves are designed to control the direction of hydraulic fluid flow in a variety of applications."
              />
              <ExpertiseCard
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                }
                title="Pressure Control Valves"
                description="We offer a wide range of pressure control valves that are designed to control the pressure in a hydraulic system."
              />
              <ExpertiseCard
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"></path>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                }
                title="Check Valves"
                description="Our check valves are designed to prevent the backflow of hydraulic fluid in a variety of applications."
              />
              <ExpertiseCard
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path>
                    <path d="M14 2l6 6"></path>
                  </svg>
                }
                title="Hydraulic Power Packs"
                description="We offer a wide range of hydraulic power packs that are designed to provide the power you need for your hydraulic system."
              />
            </div>
          </div>
        </section> */}
        
        {/* Why Choose Us Section */}
        <section className="py-16 sm:py-24 px-6 md:px-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-12">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-md">
                <CheckIcon />
                <p className="text-lg text-gray-600">
                  <span className="font-bold text-blue-900">Customized Solutions:</span> We provide tailored solutions to meet the unique needs of your business, ensuring optimal performance and efficiency.
                </p>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-md">
                <CheckIcon />
                <p className="text-lg text-gray-600">
                  <span className="font-bold text-blue-900">Quality Assurance:</span> Our commitment to quality is unwavering, with rigorous testing and inspection at every stage of the process to guarantee reliability.
                </p>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-md">
                <CheckIcon />
                <p className="text-lg text-gray-600">
                  <span className="font-bold text-blue-900">Expertise:</span> With decades of experience in the industry, our team of experts is equipped with the knowledge and skills to handle any challenge.
                </p>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-md">
                <CheckIcon />
                <p className="text-lg text-gray-600">
                  <span className="font-bold text-blue-900">Competitive Pricing:</span> We offer cost-effective solutions without compromising on quality, providing you with the best value for your investment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    
  );
};
export default AboutPage;