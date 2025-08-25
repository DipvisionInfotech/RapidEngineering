import React, { useState } from 'react';
import { 
  Menu, X, Phone, Mail, MapPin, ChevronRight, Settings, Wrench, 
  Shield, Clock, Award, CheckCircle, ArrowRight, Star, Users, 
  Factory, Cog, TrendingUp, AlertTriangle, Zap, Target
} from 'lucide-react';

// Hero Section
export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-green-500 via-blue-400 to-gray-500 text-white py-20 pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-blue-600/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Settings className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Expert Repair & Overhaul Solutions</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Repair & Overhaul Services
            </h1>
            
            <p className="text-xl mb-8 text-gray-200 leading-relaxed">
              At Rapid Engineering Services, we provide end-to-end hydraulic repair and overhaul services designed to restore equipment performance, minimize downtime, and extend machinery life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg border border-white hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                Request Service <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Download Brochure
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-400">95%</div>
                <p className="text-sm text-gray-300">First-Time Fix Rate</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">32+</div>
                <p className="text-sm text-gray-300">Years Experience</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-600/20 backdrop-blur-sm rounded-xl p-6 text-center">
                  <Shield className="h-8 w-8 mx-auto mb-3 text-blue-400" />
                  <h4 className="font-semibold mb-2">Quality Assured</h4>
                  <p className="text-sm text-gray-300">Genuine parts & rigorous testing</p>
                </div>
                <div className="bg-blue-600/20 backdrop-blur-sm rounded-xl p-6 text-center">
                  <Clock className="h-8 w-8 mx-auto mb-3 text-green-400" />
                  <h4 className="font-semibold mb-2">Fast Turnaround</h4>
                  <p className="text-sm text-gray-300">Minimize downtime</p>
                </div>
                <div className="bg-blue-600/20 backdrop-blur-sm rounded-xl p-6 text-center">
                  <Award className="h-8 w-8 mx-auto mb-3 text-orange-400" />
                  <h4 className="font-semibold mb-2">Authorized Partner</h4>
                  <p className="text-sm text-gray-300">Danfoss & Rexroth</p>
                </div>
                <div className="bg-blue-600/20 backdrop-blur-sm rounded-xl p-6 text-center">
                  <Users className="h-8 w-8 mx-auto mb-3 text-purple-400" />
                  <h4 className="font-semibold mb-2">Expert Team</h4>
                  <p className="text-sm text-gray-300">Certified technicians</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Overview Section
export const ServicesOverview = () => {
  const services = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: 'Component Repair',
      description: 'Detailed component-level repairs using genuine or high-quality replacement parts.',
      features: ['Pumps & Motors', 'Valves & Cylinders', 'Power Units', 'Control Systems']
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: 'Complete Overhaul',
      description: 'Full system overhauls to restore equipment to peak operating condition.',
      features: ['System Analysis', 'Complete Rebuild', 'Performance Testing', 'Quality Certification']
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: 'Emergency Repair',
      description: '24/7 emergency repair services to minimize critical downtime.',
      features: ['Rapid Response', 'On-site Service', 'Emergency Parts', 'Priority Support']
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Preventive Maintenance',
      description: 'Comprehensive maintenance programs to prevent unexpected failures.',
      features: ['Scheduled Maintenance', 'Condition Monitoring', 'Predictive Analysis', 'AMC Support']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Repair & Overhaul Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From detailed system diagnostics to component-level repairs and full overhauls, our expert team ensures every unit is restored to peak condition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Process Section
export const ProcessSection = () => {
  const steps = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Diagnosis',
      description: 'Thorough holistic diagnosis to identify root causes and not just visible issues.',
      step: '01'
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: 'Repair',
      description: 'Expert technicians carry out necessary repairs and component replacements.',
      step: '02'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Testing',
      description: 'Rigorous testing on advanced hydraulic test benches to ensure peak performance.',
      step: '03'
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: 'Delivery',
      description: 'Quality certification and timely delivery of restored equipment.',
      step: '04'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Proven Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We take pride in being among the best in the business. Every repair begins with a thorough holistic diagnosis followed by expert repairs and rigorous testing.
          </p>
        </div>

        <div className="relative">
          {/* Process Timeline */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-white border-4 border-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 relative z-10">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded z-20">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Industries Section
// export const IndustriesSection = () => {
//   const industries = [
//     { name: 'Construction', icon: <Factory className="h-8 w-8" /> },
//     { name: 'Manufacturing', icon: <Cog className="h-8 w-8" /> },
//     { name: 'Mining', icon: <Settings className="h-8 w-8" /> },
//     { name: 'Marine', icon: <Wrench className="h-8 w-8" /> },
//     // { name: 'Agriculture', icon: <Tool className="h-8 w-8" /> },
//     { name: 'Oil & Gas', icon: <Zap className="h-8 w-8" /> }
//   ];

//   return (
//     <section className="py-20 bg-blue-900 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
//           <p className="text-xl text-blue-200 max-w-3xl mx-auto">
//             Backed by over 32 years of industry expertise, we serve a wide range of sectors with trusted repair and overhaul solutions.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
//           {industries.map((industry, index) => (
//             <div key={index} className="text-center group">
//               <div className="bg-blue-800 hover:bg-orange-500 transition-colors rounded-2xl p-6 mb-4 group-hover:scale-110 transform">
//                 <div className="text-blue-200 group-hover:text-white">
//                   {industry.icon}
//                 </div>
//               </div>
//               <h3 className="font-semibold text-blue-100 group-hover:text-white transition-colors">
//                 {industry.name}
//               </h3>
//             </div>
//           ))}
//         </div>

//         <div className="mt-16 text-center">
//           <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
//             <div>
//               <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
//               <p className="text-blue-200">Equipment Repaired</p>
//             </div>
//             <div>
//               <div className="text-3xl font-bold text-orange-400 mb-2">95%</div>
//               <p className="text-blue-200">Resolved Without Rework</p>
//             </div>
//             <div>
//               <div className="text-3xl font-bold text-orange-400 mb-2">20+</div>
//               <p className="text-blue-200">Core Industrial Sectors</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// Testimonials Section
// export const TestimonialsSection = () => {
//   const testimonials = [
//     {
//       name: "Rajesh Kumar",
//       position: "Maintenance Manager",
//       company: "ABC Construction Ltd.",
//       content: "PHE Industries has been our go-to partner for hydraulic repairs. Their quick turnaround time and quality workmanship have saved us countless hours of downtime.",
//       rating: 5
//     },
//     {
//       name: "Priya Sharma",
//       position: "Operations Director",
//       company: "XYZ Manufacturing",
//       content: "The expertise and professionalism of PHE Industries team is outstanding. They diagnosed and fixed issues that other service providers couldn't identify.",
//       rating: 5
//     },
//     {
//       name: "Amit Singh",
//       position: "Plant Manager",
//       company: "Industrial Solutions Inc.",
//       content: "We've been working with PHE Industries for over 5 years. Their preventive maintenance program has significantly improved our equipment reliability.",
//       rating: 5
//     }
//   ];

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
//           <p className="text-xl text-gray-600">
//             Trusted by clients across India for fast turnarounds, reliable workmanship, and long-term support.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
//               <div className="flex mb-4">
//                 {[...Array(testimonial.rating)].map((_, i) => (
//                   <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
//                 ))}
//               </div>
//               <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
//               <div>
//                 <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
//                 <p className="text-sm text-gray-600">{testimonial.position}</p>
//                 <p className="text-sm text-blue-600">{testimonial.company}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // CTA Section
// export const CTASection = () => {
//   return (
//     <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <h2 className="text-4xl font-bold mb-6">Ready to Restore Your Equipment?</h2>
//         <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto">
//           Whether it's a one-time repair, an overhaul, or an AMC requirement — our team is ready to help your machines perform at their best.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center">
//             Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
//           </button>
//           <button className="border border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center">
//             <Phone className="mr-2 h-5 w-5" />
//             Call Now: +91-XXXX-XXXXXX
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };