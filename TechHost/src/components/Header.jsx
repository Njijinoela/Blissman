import React, { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-blue-600 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+254 711 262396 / +254 780 008352</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>Blissmantech@gmail.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>24/7 Technical Support Available</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.jpeg" alt="Blissman Logo" className="h-10 w-auto" />
            <span className="ml-2 text-xl font-bold text-gray-900">
              BlissMan
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/service"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </Link>
              <Link
                to="/portfolio"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Portfolio
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </Link>
              <HashLink
                smooth
                to="/#pricing"
                className="w-full block text-left bg-blue-600 text-white px-3 py-2 text-base font-medium hover:bg-blue-700 transition-colors mt-4"
              >
                Get Started
              </HashLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50"
              >
                Home
              </Link>
              <Link
                to="/ service"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                Services
              </Link>
              <Link
                to="/portfolio"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                Portfolio
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                Contact
              </Link>
              <HashLink
                smooth
                to="/#pricing"
                className="w-full block text-left bg-blue-600 text-white px-3 py-2 text-base font-medium hover:bg-blue-700 transition-colors mt-4"
              >
                Get Started
              </HashLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
