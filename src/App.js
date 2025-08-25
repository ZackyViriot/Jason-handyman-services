import React, { useState } from 'react';
import './App.css';

// Import images
import logo from './logo.png';
import businessCard from './card.png';
import image1 from './183762697_551561309173009_8634858488190756729_n.jpg';
import image2 from './183820486_551561492506324_1177301985450536728_n.jpg';
import image3 from './184117141_551561389173001_2180639427104406153_n.jpg';
import image4 from './184179635_551561702506303_8231086426355168501_n.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const services = [
    {
      title: "Power Washing",
      description: "Professional power washing services for residential and commercial properties",
      icon: "🚿"
    },
    {
      title: "General Contracting",
      description: "Complete construction and renovation services for any project size",
      icon: "🏗️"
    },
    {
      title: "Property Management",
      description: "Comprehensive property maintenance and management solutions",
      icon: "🏠"
    },
    {
      title: "Handyman Services",
      description: "Reliable repairs and maintenance for homes and businesses",
      icon: "🔧"
    }
  ];

  const galleryImages = [
    { src: businessCard, alt: "Business card" },
    { src: image1, alt: "Power washing service" },
    { src: image2, alt: "Commercial cleaning" },
    { src: image3, alt: "Residential service" },
    { src: image4, alt: "Professional cleaning" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={logo} alt="Jason Handyman Services" className="h-12 w-12 mr-3" />
              <span className="text-xl font-bold text-primary">Jason Handyman Services</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                <a href="#services" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
                <a href="#gallery" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Gallery</a>
                <a href="#about" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                <a href="#contact" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-primary focus:outline-none focus:text-primary"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Services</a>
              <a href="#gallery" className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Gallery</a>
              <a href="#about" className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-primary to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <img src={logo} alt="Jason Handyman Services" className="h-32 w-32 mx-auto lg:mx-0 mb-8" />
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Professional Handyman Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Specializing in Power Washing, General Contracting & Property Management
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="bg-secondary hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 transform hover:scale-105"
                >
                  Get Free Quote
                </a>
                <a
                  href="#services"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300"
                >
                  Our Services
                </a>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6">About Jason Handyman Services</h2>
              <p className="text-blue-100 mb-4">
                With years of experience in the industry, we've built a reputation for quality work, reliability, and exceptional customer service.
              </p>
              <p className="text-blue-100 mb-6">
                Our team of skilled professionals is committed to delivering outstanding results on every project, from residential maintenance to commercial renovations.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">100%</div>
                  <div className="text-blue-200">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">24/7</div>
                  <div className="text-blue-200">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From power washing to complete renovations, we provide comprehensive handyman services for residential and commercial properties.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Work Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent projects and the quality of work we deliver.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full transition-transform duration-300 group-hover:scale-110 ${
                    index === 0 ? 'h-48 object-contain bg-white' : 'h-64 object-cover'
                  }`}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <p className="font-semibold">{image.alt}</p>
                    <p className="text-sm mt-1">Click to view</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Jason Handyman Services
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With years of experience in the industry, Jason Handyman Services has built a reputation for quality work, reliability, and exceptional customer service.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We specialize in power washing services and offer comprehensive handyman solutions for both residential and commercial properties. Our team of skilled professionals is committed to delivering outstanding results on every project.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-gray-600">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Licensed & Insured</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Free Estimates</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Quality Guaranteed</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Emergency Services</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Competitive Pricing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your project? Contact us today for a free estimate and professional service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-primary p-3 rounded-full mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-300">817-320-5838</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-primary p-3 rounded-full mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-300">jasonnoack@outlook.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-primary p-3 rounded-full mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Service Area</p>
                    <p className="text-gray-300">Residential & Commercial</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <textarea
                    rows="4"
                    placeholder="Your Message"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-secondary hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Jason Handyman Services. All rights reserved.</p>
          <p className="text-gray-400 mt-2">Professional Handyman Services • Power Washing • General Contracting</p>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl font-bold z-10"
            >
              ×
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-4 left-4 right-4 text-white text-center bg-black bg-opacity-50 rounded p-2">
              <p className="font-semibold">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
