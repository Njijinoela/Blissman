import React, { useState, useEffect } from "react";
import { ArrowRight, Shield, Zap, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { blissmanServices } from "../data/ServiceData";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % blissmanServices.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const current = blissmanServices[currentSlide];

  return (
    <section id="home" className="relative h-[60vh] w-full overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence>
          {blissmanServices.map(
            (service, index) =>
              index === currentSlide && (
                <motion.div
                  key={service.id}
                  className="absolute inset-0 bg-cover bg-center sm:bg-cover"
                  style={{ backgroundImage: `url(${service.image})` }}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 1.2 }}
                />
              )
          )}
        </AnimatePresence>

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-6 lg:px-8">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            {current.title}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-200 leading-relaxed">
            {current.description}
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0"
          >
            <Link to="/portfolio">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                View Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
            <Link to="/service">
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Learn More
              </button>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center space-x-6"
          >
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-green-400" />
              <span className="text-sm font-medium text-gray-200">
                SSL Secured
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-yellow-400" />
              <span className="text-sm font-medium text-gray-200">
                99.9% Uptime
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-blue-400" />
              <span className="text-sm font-medium text-gray-200">
                24/7 Support
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {blissmanServices.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full ${
                i === currentSlide ? "bg-white" : "bg-gray-500/60"
              } transition-all duration-300`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
