import React, { useState } from "react";
import { products } from "../data/product";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const ProductsComponent = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setIsCartOpen(true); // open cart when adding an item
  };

  return (
    <section id="products" className="py-20 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Cart Button */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Our Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Explore our high-quality IT products, accessories, and solutions.
            </p>
          </div>

          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition"
          >
            <ShoppingCart className="h-6 w-6" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 flex-1">{product.description}</p>
              <p className="text-lg font-bold text-blue-600 mt-3">
                ${product.price}
              </p>
              <p
                className={`text-sm mt-1 ${
                  product.availability === "In Stock"
                    ? "text-green-600"
                    : product.availability === "Limited Stock"
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                {product.availability}
              </p>
              <button
                disabled={product.availability === "Out of Stock"}
                onClick={() => addToCart(product)}
                className={`mt-4 py-2 px-4 rounded-lg transition ${
                  product.availability === "Out of Stock"
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {product.availability === "Out of Stock"
                  ? "Unavailable"
                  : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-[90]"
              onClick={() => setIsCartOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 w-80 h-full bg-white/70 backdrop-blur-md shadow-2xl z-[100] flex flex-col rounded-l-2xl"
            >
              {/* Header */}
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800">
                  Your Cart
                </h2>
                <button
                  className="p-2 rounded-full hover:bg-gray-200 transition"
                  onClick={() => setIsCartOpen(false)}
                >
                  ✕
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {cart.length === 0 ? (
                  <p className="text-gray-500">Your cart is empty.</p>
                ) : (
                  cart.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center bg-white/60 backdrop-blur-sm rounded-lg p-3 shadow-sm"
                    >
                      <span className="text-sm font-medium text-gray-800">
                        {item.name}
                      </span>
                      <span className="text-sm font-semibold text-blue-600">
                        ${item.price}
                      </span>
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-gray-200 bg-white/60 backdrop-blur-sm">
                <p className="font-bold text-gray-900">
                  Total: $
                  {cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
                </p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-3 hover:bg-blue-700 transition shadow-md">
                  Checkout
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductsComponent;
