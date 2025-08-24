import React from "react";
import { Link } from "react-router-dom";
import { useQuoteModal } from "../context/QuoteModalContext";

const CallToAction = () => {
  const { openModal } = useQuoteModal();

  return (
    <section className="bg-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8 text-blue-100">
          Partner with BlissMan for modern IT solutions, reliable support, and
          innovative strategies to keep your business ahead of the competition.
        </p>
        <h3 className="text-2xl sm:text-2xl font-bold mb-6">
          Get in touch: 0711 262396 / 0780 008352
        </h3>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/service"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
          >
            View Our Services
          </Link>

          <Link
            to="/products"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
          >
            View Our Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
