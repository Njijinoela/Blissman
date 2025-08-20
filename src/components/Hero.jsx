import React from "react";
import { ArrowRight, Shield, Zap, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 pb-20 sm:pt-24 sm:pb-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Reliable <span className="text-blue-600">Web Hosting</span> &
              <span className="text-blue-600"> IT Support Services</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
              Power your business with lightning-fast hosting and expert IT
              support. 99.9% uptime guarantee with 24/7 technical assistance
              from certified professionals.
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center lg:justify-start"
            >
              <Link to="/portfolio">
                <button
                  aria-label="View portfolio"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  View Portfolio
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </button>
              </Link>
              <Link to="/service">
                <button
                  aria-label="View our services"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  View Our Services
                </button>
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 flex flex-wrap justify-center lg:justify-start items-center space-x-8"
            >
              <div className="flex items-center space-x-2 text-gray-700">
                <Shield className="h-5 w-5 text-green-500" aria-hidden="true" />
                <span className="text-sm font-medium">SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Zap className="h-5 w-5 text-yellow-500" aria-hidden="true" />
                <span className="text-sm font-medium">99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Clock className="h-5 w-5 text-blue-500" aria-hidden="true" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="mt-12 lg:mt-0"
          >
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-4 bg-gray-200 rounded w-24"></div>
                      <div className="h-4 bg-green-400 rounded w-16"></div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded w-full">
                      <div className="h-2 bg-blue-500 rounded w-4/5"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg"></div>
                      <div className="h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg"></div>
                    </div>
                    <div className="h-8 bg-gray-50 rounded w-3/4"></div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg"
              >
                99.9% Uptime
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-4 -left-4 bg-green-400 text-green-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg"
              >
                24/7 Support
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
