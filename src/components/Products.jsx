import React, { useState } from "react";
import { products } from "../data/product";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Truck, Phone } from "lucide-react";

const ProductsComponent = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
      minimumFractionDigits: 0,
    }).format(price);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setIsCartOpen(true);
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
            aria-label="Open cart"
          >
            <ShoppingCart className="h-6 w-6" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </button>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Shipping Card */}
          <div className="bg-white rounded-xl p-6 shadow-md flex items-start gap-4">
            <div className="bg-black text-white p-3 rounded-full">
              <Truck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Fast Same Day Shipping
              </h3>
              <p className="text-gray-600">
                Get Fast Same Day Shipping For Orders Placed Before 2PM On
                Weekdays.
              </p>
            </div>
          </div>

          {/* Call Card */}
          <div className="bg-white rounded-xl p-6 shadow-md flex items-start gap-4">
            <div className="bg-black text-white p-3 rounded-full">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Call 0711 262396 / 0780 008352
              </h3>
              <p className="text-gray-600">
                In Doubt, Give Us A Call To Speak To Our Highly Experienced &
                Knowledgeable Sales Team.
              </p>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              <div
                onClick={() => setSelectedProduct(product)}
                className="cursor-pointer flex-1"
              >
                <img
                  src={product.image}
                  alt={`${product.name} product image`}
                  className="h-48 w-full object-contain rounded-lg mb-4 bg-gray-50"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-lg font-bold text-blue-600 mt-3">
                  {formatPrice(product.price)}
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
              </div>
              {/* Quick Add Button */}
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
                  : "Quick Add"}
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
              role="dialog"
              aria-modal="true"
            >
              {/* Header */}
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800">
                  Your Cart
                </h2>
                <button
                  className="p-2 rounded-full hover:bg-gray-200 transition"
                  onClick={() => setIsCartOpen(false)}
                  aria-label="Close cart"
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
                        {formatPrice(item.price)}
                      </span>
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-gray-200 bg-white/60 backdrop-blur-sm">
                <p className="font-bold text-gray-900">
                  Total:{" "}
                  {formatPrice(cart.reduce((sum, item) => sum + item.price, 0))}
                </p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-3 hover:bg-blue-700 transition shadow-md">
                  Checkout
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Product Details Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-[90]"
              onClick={() => setSelectedProduct(null)}
            />

            {/* Modal */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="fixed bottom-0 left-0 right-0 max-h-[85%] bg-white rounded-t-2xl shadow-2xl z-[100] overflow-y-auto"
              role="dialog"
              aria-modal="true"
            >
              {/* Header */}
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800">
                  {selectedProduct.name}
                </h2>
                <button
                  className="p-2 rounded-full hover:bg-gray-200 transition"
                  onClick={() => setSelectedProduct(null)}
                  aria-label="Close product details"
                >
                  ✕
                </button>
              </div>

              {/* Content */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Image */}
                <img
                  src={selectedProduct.image}
                  alt={`${selectedProduct.name} detailed view`}
                  className="w-full h-80  object-contain rounded-lg bg-gray-50"
                />

                {/* Details */}
                <div>
                  <p className="text-gray-600 mb-4">
                    {selectedProduct.description}
                  </p>

                  {/* Specs */}
                  {selectedProduct.specs && (
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-800 mb-2">
                        Specifications:
                      </h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {Object.entries(selectedProduct.specs).map(
                          ([key, value]) => (
                            <li key={key}>
                              <span className="font-medium capitalize">
                                {key}:
                              </span>{" "}
                              {value}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                  {/* Features */}
                  {selectedProduct.features && (
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-800 mb-2">
                        Key Features:
                      </h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {selectedProduct.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Warranty */}
                  {selectedProduct.warranty && (
                    <p className="text-sm text-gray-700 mb-4">
                      <span className="font-semibold">Warranty:</span>{" "}
                      {selectedProduct.warranty}
                    </p>
                  )}

                  <p className="text-lg font-bold text-blue-600 mb-2">
                    {formatPrice(selectedProduct.price)}
                  </p>
                  <p
                    className={`text-sm mb-4 ${
                      selectedProduct.availability === "In Stock"
                        ? "text-green-600"
                        : selectedProduct.availability === "Limited Stock"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {selectedProduct.availability}
                  </p>
                  <button
                    disabled={selectedProduct.availability === "Out of Stock"}
                    onClick={() => addToCart(selectedProduct)}
                    className={`mt-4 w-full py-2 px-4 rounded-lg transition ${
                      selectedProduct.availability === "Out of Stock"
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    {selectedProduct.availability === "Out of Stock"
                      ? "Unavailable"
                      : "Add to Cart"}
                  </button>
                </div>
              </div>

              {/* Related Products */}
              <div className="p-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Related Products
                </h3>
                <div className="flex gap-4 overflow-x-auto pb-4">
                  {products
                    .filter(
                      (p) =>
                        p.category === selectedProduct.category &&
                        p.id !== selectedProduct.id
                    )
                    .slice(0, 4)
                    .map((related) => (
                      <div
                        key={related.id}
                        onClick={() => setSelectedProduct(related)}
                        className="min-w-[200px] bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer p-4 flex-shrink-0"
                      >
                        <img
                          src={related.image}
                          alt={`${related.name} related product`}
                          className="h-36 w-full object-contain rounded-md mb-2 bg-gray-50"
                        />
                        <h4 className="text-sm font-semibold text-gray-800">
                          {related.name}
                        </h4>
                        <p className="text-xs text-gray-600 mb-1 line-clamp-2">
                          {related.description}
                        </p>
                        <p className="text-sm font-bold text-blue-600">
                          {formatPrice(related.price)}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductsComponent;
