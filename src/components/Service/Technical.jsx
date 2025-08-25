import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, Mail, MapPin, Settings, GraduationCap, 
  Users, Star, Clock, Award, CheckCircle, ArrowRight, 
  BookOpen, Target, Wrench, Shield, Calendar, IndianRupee,
  Play, Pause, ChevronLeft, ChevronRight, Briefcase, ChevronDown
} from 'lucide-react';
import { useRef } from 'react';

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isVisible, end, duration]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
};


// Hero Section
export const HeroSection = () => {
  return (
    <section id="training" className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white py-20 pt-28 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-orange-400 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-400 rounded-full animate-pulse-slow delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInLeft">
            <div className="inline-flex items-center bg-blue-600/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <GraduationCap className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Hydraulic Repair & Maintenance Training</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Technical Training
            </h1>
            
            <p className="text-xl mb-8 text-gray-200 leading-relaxed">
              PHE Institute of Hydraulics, the training arm of PHE Industries, offers a comprehensive suite of hydraulics training programs tailored for individuals and organizations across sectors.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                View Courses <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Download Brochure
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="animate-fadeInUp">
                <div className="text-4xl font-bold text-orange-400">
                  <AnimatedCounter end={2000} suffix="+" />
                </div>
                <p className="text-sm text-gray-300">Students Trained</p>
              </div>
              <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                <div className="text-4xl font-bold text-orange-400">
                  <AnimatedCounter end={95} suffix="%" />
                </div>
                <p className="text-sm text-gray-300">Training NPS</p>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fadeInRight">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-600/20 backdrop-blur-sm rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300">
                  <BookOpen className="h-8 w-8 mx-auto mb-3 text-blue-400" />
                  <h4 className="font-semibold mb-2">Practical Curriculum</h4>
                  <p className="text-sm text-gray-300">Hands-on workshops</p>
                </div>
                <div className="bg-blue-600/20 backdrop-blur-sm rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300">
                  <Users className="h-8 w-8 mx-auto mb-3 text-green-400" />
                  <h4 className="font-semibold mb-2">Expert Faculty</h4>
                  <p className="text-sm text-gray-300">Industry professionals</p>
                </div>
                <div className="bg-blue-600/20 backdrop-blur-sm rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300">
                  <Wrench className="h-8 w-8 mx-auto mb-3 text-orange-400" />
                  <h4 className="font-semibold mb-2">Live Equipment</h4>
                  <p className="text-sm text-gray-300">Real training setups</p>
                </div>
                <div className="bg-blue-600/20 backdrop-blur-sm rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300">
                  <Award className="h-8 w-8 mx-auto mb-3 text-purple-400" />
                  <h4 className="font-semibold mb-2">Certification</h4>
                  <p className="text-sm text-gray-300">Industry recognized</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Training Gallery Section
export const TrainingGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    {
      src: "https://placehold.co/600x400/3B82F6/FFFFFF?text=Hands-on+Learning",
      alt: "Hands-on Learning",
      caption: "Students getting practical experience with hydraulic systems"
    },
    {
      src: "https://placehold.co/600x400/10B981/FFFFFF?text=Practical+Class",
      alt: "Practical Class", 
      caption: "Interactive classroom sessions with live equipment"
    },
    {
      src: "https://placehold.co/600x400/F59E0B/FFFFFF?text=Expert+Instruction",
      alt: "Pankaj Srivastava Taking A Lecture",
      caption: "Expert instructors sharing industry knowledge"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Expert-Led Hydraulics Training Programs</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            At PHE Industries, we offer industry-aligned hydraulics training programs designed to build practical skills and deep technical knowledge across various sectors. Whether you're a beginner, a technician, or an industry professional, our hands-on courses cover everything from the basics to advanced repair techniques.
          </p>
        </div>

        {/* Image Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={images[currentSlide].src} 
              alt={images[currentSlide].alt}
              className="w-full h-full object-cover transition-transform duration-500 animate-fade"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-lg font-medium">{images[currentSlide].caption}</p>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          {/* Slide indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fadeInUp">
          {[
            { icon: <BookOpen className="h-8 w-8" />, title: "Hands-On, Practical Curriculum", color: "blue" },
            { icon: <Users className="h-8 w-8" />, title: "Experienced Industry Instructors", color: "green" },
            { icon: <Wrench className="h-8 w-8" />, title: "State-of-the-Art Lab Facilities", color: "orange" },
            { icon: <Award className="h-8 w-8" />, title: "Industry Recognition & Partnerships", color: "purple" }
          ].map((feature, index) => (
            <div 
              key={index} 
              className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`bg-${feature.color}-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-colors group-hover:bg-${feature.color}-600`}>
                <div className={`text-${feature.color}-600 transition-colors group-hover:text-white`}>{feature.icon}</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Standard Courses Section
export const StandardCourses = () => {
  const courses = [
    {
      title: "3-Day Certified Training",
      price: "₹8k",
      duration: "3 Days",
      image: "https://placehold.co/400x250/3B82F6/FFFFFF?text=3+Day+Training",
      features: [
        "Industry-Relevant Curriculum",
        "Expert Faculty & Mentors", 
        "Training with Live Equipment",
        "Trusted by 1000+ Engineers"
      ],
      popular: false
    },
    {
      title: "5-Day Practical Training",
      price: "₹14k", 
      duration: "5 Days",
      image: "https://placehold.co/400x250/10B981/FFFFFF?text=5+Day+Training",
      features: [
        "Comprehensive Curriculum",
        "Skill Development Focus",
        "Hydraulic Schematics Mastery",
        "On-Site Support Option"
      ],
      popular: true
    },
    {
      title: "3-Month In-Depth Program",
      price: "₹42k",
      duration: "3 Months", 
      image: "https://placehold.co/400x250/F59E0B/FFFFFF?text=3+Month+Workshop",
      features: [
        "Dual Daily Sessions",
        "Job-Ready Skill Development",
        "Live Equipment Training",
        "Complete Technical Foundation"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Standard Courses</h2>
          <p className="text-xl text-gray-600">
            Choose from our comprehensive range of training programs designed for different skill levels and time commitments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-fadeInUp ${
                course.popular ? 'ring-2 ring-orange-500 scale-105' : ''
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {course.popular && (
                <div className="bg-orange-500 text-white text-center py-2 px-4">
                  <span className="text-sm font-bold">Most Popular</span>
                </div>
              )}
              
              <div className="relative">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-sm font-bold text-gray-900">{course.duration}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-orange-600 flex items-center">
                       <IndianRupee size={18} className="mr-1 mt-1"/>{course.price}
                    </div>
                    <div className="text-sm text-gray-500">+GST</div>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Specialized Courses Section
export const SpecializedCourses = () => {
  const specializedCourses = [
    {
      title: "Custom Training Programme",
      image: "https://placehold.co/400x250/8B5CF6/FFFFFF?text=Custom+Training+Programme",
      features: [
        "Fully Customizable Curriculum",
        "Balanced Theory and Practical Sessions",
        "Upskilling for All Experience Levels",
        "Best For Organizations",
        "Collaborative Program Design"
      ],
      cta: "Start Now",
      price: null
    },
    {
      title: "12-Month Career-Building Program",
      price: "₹1L",
      image: "https://placehold.co/400x250/EF4444/FFFFFF?text=1+Year+Apprenticeship",
      features: [
        "Practical, Workshop-Based Training",
        "Placement Support and Guidance", 
        "Exposure to Real Service Cases",
        "High Demand Skillset"
      ],
      cta: "Start Now"
    },
    {
      title: "Marine Hydraulics Training",
      image: "https://placehold.co/400x250/06B6D4/FFFFFF?text=Shipping+Training",
      features: [
        "Targeted Marine Curriculum",
        "Hydraulic Essentials",
        "Hands-On Fault Diagnosis",
        "Compliance-Driven Training",
        "Supports Preventive Maintenance"
      ],
      cta: "Start Now",
      price: null
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tailored Courses for Specialized Needs</h2>
          <p className="text-xl text-gray-600">
            Specialized training programs designed for specific industries and career development paths.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {specializedCourses.map((course, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-fadeInUp"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                {course.price && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <div className="text-lg font-bold text-gray-900 flex items-center">
                      <IndianRupee size={14} className="mr-1 mt-1" />{course.price}
                    </div>
                    <div className="text-xs text-gray-500 text-center">+GST</div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{course.title}</h3>
                
                <ul className="space-y-3 mb-6">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  {course.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-orange-400 rounded-full animate-bounce-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fadeInUp">
          <h2 className="text-4xl font-bold mb-6">Ready to Advance Your Hydraulics Career?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join over 2,000 engineers who have already enhanced their skills with PHE Institute of Hydraulics. 
            Get industry-recognized certification and hands-on experience with live equipment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Enroll Today <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Call: +91-XXXX-XXXXXX
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};