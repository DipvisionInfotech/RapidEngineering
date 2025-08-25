import React from 'react'
import { CTASection, HeroSection, SpecializedCourses, StandardCourses, TrainingGallery } from '../components/Service/Technical';

const Service_TT = () => {
  return (
   <div className="font-sans antialiased text-gray-800">
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes pulse-slow {
            0%, 100% { transform: scale(1); opacity: 0.2; }
            50% { transform: scale(1.1); opacity: 0.4; }
          }
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(-5%); }
            50% { transform: translateY(5%); }
          }
          .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
          .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
          .animate-fadeInLeft { animation: fadeInLeft 0.8s ease-out forwards; }
          .animate-fadeInRight { animation: fadeInRight 0.8s ease-out forwards; }
          .animate-pulse-slow { animation: pulse-slow 5s ease-in-out infinite; }
          .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
        `}
      </style>
      <main>
        <HeroSection />
        <TrainingGallery />
        <StandardCourses />
        <SpecializedCourses />
        <CTASection />
      </main>
    </div>
  )
}
export default Service_TT;