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
            <img src="/logo.png" alt="Blissman Logo" className="h-10 w-auto" />
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
                to="/products"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Products
              </Link>
              <HashLink
                smooth
                to="/about#contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Contact Us
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
      </nav>

      {/* Mobile Side Drawer Navigation */}
      {/* Overlay */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0  bg-opacity-50 z-40 md:hidden"
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-60 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col h-full py-6">
          <div className="flex-1 px-4 space-y-2">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800"
            >
              Home
            </Link>
            <Link
              to="/service"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800"
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800"
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800"
            >
              About
            </Link>
            <Link
              to="/products"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800"
            >
              Products
            </Link>
          </div>

          {/* Sticky footer link */}
          <div className="px-4 pb-6">
            <HashLink
              smooth
              to="/about#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              Contact Us
            </HashLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
