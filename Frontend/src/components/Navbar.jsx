import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Monitor, ShoppingCart, Search, Palette, Database, Cpu, Globe, Bot, Mic, Workflow } from 'lucide-react';

const Navbar = () => {
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [storiesDropdown, setStoriesDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdown(false);
        setStoriesDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">

            <img
              src="/images/logo.jpeg"
              alt="Trinexora"
              className="h-16 object-contain"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8" ref={dropdownRef}>
            <Link
              to="/"
              className="text-blue-700 hover:text-blue-600 font-medium transition-colors"
              onClick={() => {
                setServicesDropdown(false);
                setStoriesDropdown(false);
              }}
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              onClick={() => {
                setServicesDropdown(false);
                setStoriesDropdown(false);
              }}
            >
              About
            </Link>

            <div className="relative">
              <button
                onClick={() => setServicesDropdown(!servicesDropdown)}
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Services
                {servicesDropdown ? (
                  <ChevronUp className="ml-1 h-4 w-4 transition-transform duration-300" />
                ) : (
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300" />
                )}
              </button>

              <div
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
                className={`absolute top-full left-0 mt-2 bg-white rounded-md shadow-lg z-50 transition-all duration-300 ease-in-out ${servicesDropdown
                  ? 'opacity-100 transform translate-y-0 visible'
                  : 'opacity-0 transform -translate-y-2 invisible'
                  }`}
              >
                <div className="grid grid-cols-2  p-2 w-130">
                  <Link
                    to="/services/web-design"
                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors duration-200 cursor-pointer"
                    onClick={() => setServicesDropdown(false)}
                  >
                    <Monitor className="mr-3 h-4 w-4 text-blue-500" />
                    Web Design/Development
                  </Link>
                  <Link
                    to="/services/e-commerce"
                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors duration-200 cursor-pointer"
                    onClick={() => setServicesDropdown(false)}
                  >
                    <ShoppingCart className="mr-3 h-4 w-4 text-green-500" />
                    E-commerce Website
                  </Link>
                  <Link
                    to="/services/seoservices"
                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors duration-200 cursor-pointer"
                    onClick={() => setServicesDropdown(false)}
                  >
                    <Search className="mr-3 h-4 w-4 text-orange-500" />
                    SEO Services
                  </Link>
                  <Link
                    to="/services/ui-ux"
                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors duration-200 cursor-pointer"
                    onClick={() => setServicesDropdown(false)}
                  >
                    <Palette className="mr-3 h-4 w-4 text-purple-500" />
                    UI/UX Design
                  </Link>
                  <Link
                    to="/services/erp-crm"
                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors duration-200 cursor-pointer"
                    onClick={() => setServicesDropdown(false)}
                  >
                    <Database className="mr-3 h-4 w-4 text-red-500" />
                    ERP/CRM Development
                  </Link>
                  <Link
                    to="/services/ai-automation"
                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors duration-200 cursor-pointer"
                    onClick={() => setServicesDropdown(false)}
                  >
                    <Cpu className="mr-3 h-4 w-4 text-indigo-500" />
                    AI Automation
                  </Link>
                  <Link
                    to="/services/wordpress"
                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors duration-200 cursor-pointer"
                    onClick={() => setServicesDropdown(false)}
                  >
                    <Globe className="mr-3 h-4 w-4 text-cyan-500" />
                    Wordpress Development
                  </Link>
                  <Link
                    to="/services/ai-agent"
                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors duration-200 cursor-pointer"
                    onClick={() => setServicesDropdown(false)}
                  >
                    <Bot className="mr-3 h-4 w-4 text-pink-500" />
                    AI Agent
                  </Link>
                  <Link
                    to="/services/voice-automation"
                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors duration-200 cursor-pointer"
                    onClick={() => setServicesDropdown(false)}
                  >
                    <Mic className="mr-3 h-4 w-4 text-teal-500" />
                    Voice Automation
                  </Link>
                  <Link
                    to="/services/nn-workflow"
                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors duration-200 cursor-pointer"
                    onClick={() => setServicesDropdown(false)}
                  >
                    <Workflow className="mr-3 h-4 w-4 text-amber-500" />
                    N8N Workflow
                  </Link>
                </div>
              </div>
            </div>

            <Link
              // to="/our-client"
              to="/Clients"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              onClick={() => {
                setServicesDropdown(false);
                setStoriesDropdown(false);
              }}
            >
              Our Clients
            </Link>
             <Link
              to="/project"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              onClick={() => {
                setServicesDropdown(false);
                setStoriesDropdown(false);
              }}
            >
              Projects
            </Link>

           

            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              onClick={() => {
                setServicesDropdown(false);
                setStoriesDropdown(false);
              }}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;