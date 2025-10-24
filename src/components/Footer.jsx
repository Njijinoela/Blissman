import React from "react";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-3">
              <img src="/logo.png" alt="logo" className="h-8 w-auto"></img>
              <span className="ml-2 text-lg font-bold">BlissMan</span>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Your trusted partner for business tools and IT solutions since
              2019.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com/company/blissman-technologies-ltd/"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold mb-2">Services</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link to="/services/web-design" className="hover:text-white">
                  Website Design
                </Link>
              </li>
              <li>
                <Link to="/services/it-support" className="hover:text-white">
                  IT Support
                </Link>
              </li>
              <li>
                <Link to="/services/it-consulting" className="hover:text-white">
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link
                  to="/services/computer-repair"
                  className="hover:text-white"
                >
                  Computer Repair
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-base font-semibold mb-2">Products</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link to="/products" className="hover:text-white">
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-base font-semibold mb-2">Support</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link to="/about#contact" className="hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <a href="https://www.youtube.com/" className="hover:text-white">
                  Tutorials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold mb-2">Contact</h3>
            <div className="space-y-1 text-sm">
              <div className="flex items-center">
                <Phone size={14} className="text-blue-400 mr-2" />
                <span>+254 780 008352</span>
              </div>
              <div className="flex items-center">
                <Mail size={14} className="text-blue-400 mr-2" />
                <span>
                  <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
                    info@blissman.ke
                  </a>
                </span>
              </div>
              <div className="flex items-start">
                <MapPin size={14} className="text-blue-400 mr-2 mt-0.5" />
                <div>
                  <div>Plums Lane off Ojijo Rd IBC Center</div>
                  <div>Westlands, Nairobi</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <div>© 2025 BlissMan. All rights reserved.</div>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
