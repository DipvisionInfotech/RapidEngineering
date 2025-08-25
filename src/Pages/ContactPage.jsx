import { useState } from "react";
import { MapPin, Phone, Mail, Facebook,Instagram,Twitter,Linkedin} from "lucide-react";
const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Get in touch with our team for quotes, questions, or partnership opportunities.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us your query</h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type your query here!</label>
                <textarea 
                  rows="4" 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              <button 
                onClick={handleSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-blue-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600 hover:text-black transition-colors">
                      Delhi
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a href="tel:+919999999999">
                    <p className="text-gray-600 hover:text-black transition-colors">+919999999999</p>
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a href="mailto:info@rapidengg.com">
                    <p className="text-gray-600 hover:text-black transition-colors">info@rapidengg.com</p>
                    </a>
                  </div>
                  </div>
              </div>
                  {/* Social media links added here */}
             <div className="grid grid-cols-4 gap-2">
                <a className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 p-3 hover:text-green-500 transition-colors"  href="https://www.facebook.com/"><Facebook className="h-4 w-4"/></a>
                <a className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 p-3 hover:text-green-500 transition-colors" href="https://www.instagram.com/"><Instagram className="h-4 w-4"/></a>
                <a className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 p-3 hover:text-green-500 transition-colors" href="https://x.com/"><Twitter className="h-4 w-4"/></a>
                <a className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 p-3 hover:text-green-500 transition-colors" href="https://www.linkedin.com/"><Linkedin className="h-4 w-4"/></a>
              </div>
            </div>
            
            {/* <div className="bg-blue-900 text-white rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;