import React from "react";
import { Link } from "react-router-dom";
import { useQuoteModal } from "../context/QuoteModalContext";

const CallToAction = () => {
  const { openModal } = useQuoteModal();

  return (
    <section className="relative py-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/logo.png')",
        }}
      />
      <div className="absolute inset-0 bg-blue-900/70" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 drop-shadow-lg">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8 text-blue-100 leading-relaxed">
          Partner with BlissMan for modern IT solutions, reliable support, and
          innovative strategies to keep your business ahead of the competition.
        </p>

        <h3 className="text-2xl sm:text-3xl font-bold mb-10 text-yellow-300 drop-shadow">
          📞 Get in touch: 0780 008352
        </h3>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            to="/service"
            className="px-8 py-3 rounded-full font-semibold bg-white text-blue-700 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform"
          >
            View Our Services
          </Link>

          <Link
            to="/products"
            className="px-8 py-3 rounded-full font-semibold bg-yellow-400 text-blue-900 shadow-lg hover:bg-yellow-300 hover:scale-105 transition-transform"
          >
            View Our Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
