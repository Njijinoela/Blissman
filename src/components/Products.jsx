import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Truck, Phone, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../config";

const ProductsComponent = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/products/`);
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const availabilityColor = (status) => {
    switch (status) {
      case "In Stock":
        return "text-green-600";
      case "Limited Stock":
        return "text-yellow-600";
      case "Out of Stock":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <section id="products" className="py-20 bg-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Cart Button */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Our Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Explore our high-quality IT products, accessories, and solutions.
            </p>
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
            aria-label="Open cart"
          >
            <ShoppingCart className="h-6 w-6" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </button>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Shipping Card */}
          <div className="bg-gray-300 rounded-xl p-6 shadow-md flex items-start gap-4">
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
          <div className="bg-gray-300 rounded-xl p-6 shadow-md flex items-start gap-4">
            <div className="bg-black text-white p-3 rounded-full">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Call 0780 008352
              </h3>
              <p className="text-gray-600">
                In Doubt, Give Us A Call To Speak To Our Highly Experienced &
                Knowledgeable Sales Team.
              </p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <p>Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-blue rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
              >
                <div
                  onClick={() => setSelectedProduct(product)}
                  className="cursor-pointer flex-1"
                >
                  <img
                    src={product.image_url || "/placeholder.png"}
                    alt={product.name}
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
                    className={`text-sm mt-1 ${availabilityColor(
                      product.availability
                    )}`}
                  >
                    {product.availability}
                  </p>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-4 py-2 px-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
                  disabled={product.availability === "Out of Stock"}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black z-[90]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
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
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-xl font-bold">Your Cart</h2>
                <button onClick={() => setIsCartOpen(false)}>
                  <X className="h-6 w-6 text-gray-600" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {cart.length === 0 ? (
                  <p className="text-gray-500">Your cart is empty.</p>
                ) : (
                  cart.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center mb-4 bg-white/60 backdrop-blur-sm rounded-lg p-3 shadow-sm"
                    >
                      <div>
                        <span className="text-sm font-medium text-gray-800">
                          {item.name}
                        </span>
                        <span className="text-sm font-semibold text-blue-600">
                          {formatPrice(item.price)}
                        </span>
                      </div>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="text-red-600 hover:text-red-800 ml-2"
                        aria-label="Remove item"
                      >
                        x
                      </button>
                    </div>
                  ))
                )}
              </div>
              {cart.length > 0 && (
                <div className="p-4 border-t border-gray-200 bg-white/60 backdrop-blur-sm">
                  <p className="font-bold text-gray-900">
                    Total:{" "}
                    {formatPrice(
                      cart.reduce((sum, item) => sum + item.price, 0)
                    )}
                  </p>
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      navigate("/checkout", {
                        state: {
                          cart,
                          total: cart.reduce(
                            (sum, item) => sum + item.price,
                            0
                          ),
                        },
                      });
                    }}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg mt-3 hover:bg-blue-700 transition shadow-md"
                  >
                    Checkout
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <>
            <motion.div
              className="fixed inset-0 bg-black z-[90]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProduct(null)}
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="fixed bottom-0 left-0 right-0 max-h-[85%] bg-white rounded-t-2xl shadow-2xl z-[100] overflow-y-auto"
              role="dialog"
              aria-modal="true"
            >
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
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <img
                  src={selectedProduct.image_url || "/placeholder.png"}
                  alt={selectedProduct.name}
                  className="w-full h-80 object-contain bg-gray-50 rounded-lg"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-lg font-semibold text-blue-600 mb-2">
                    {formatPrice(selectedProduct.price)}
                  </p>
                  <p
                    className={`mb-2 font-semibold ${availabilityColor(
                      selectedProduct.availability
                    )}`}
                  >
                    {selectedProduct.availability}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {selectedProduct.description}
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    Warranty: {selectedProduct.warranty}
                  </p>
                  {selectedProduct.specs && (
                    <div className="mb-4">
                      <h4 className="font-semibold">Specifications:</h4>
                      <ul className="list-disc pl-5 text-gray-600 text-sm">
                        {Object.entries(selectedProduct.specs).map(
                          ([key, value], i) => (
                            <li key={i}>
                              {key}: {value}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}
                  {selectedProduct.features && (
                    <div>
                      <h4 className="font-semibold">Features:</h4>
                      <ul className="list-disc pl-5 text-gray-600 text-sm">
                        {selectedProduct.features.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Related Products */}
              <div className="p-6 border-t border-gray-200">
                <h4 className="text-lg font-semibold mb-4">Related Products</h4>
                <div className="flex gap-4 overflow-x-auto pb-4">
                  {products
                    .filter(
                      (p) =>
                        p.category === selectedProduct.category &&
                        p.id !== selectedProduct.id
                    )
                    .slice(0, 3)
                    .map((related) => (
                      <div
                        key={related.id}
                        className="min-w-[200px] bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer p-4 flex-shrink-0"
                        onClick={() => setSelectedProduct(related)}
                      >
                        <img
                          src={related.image_url || "/placeholder.png"}
                          alt={related.name}
                          className="h-36 w-full object-contain rounded-md mb-2 bg-gray-50"
                        />
                        <p className="text-sm font-semibold text-gray-800">
                          {related.name}
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
