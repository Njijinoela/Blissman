import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import API_BASE_URL from "../config";

const ProductsCarousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/products/`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <section className="py-16 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Featured Products
          </h2>
          <p className="text-gray-600 mt-2">
            Explore our top tech products — performance and reliability
            guaranteed.
          </p>
        </div>

        {/* Product Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <Link to={`/products/${product.id}`}>
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                  <img
                    src={product.image_url || product.image}
                    alt={product.name || product.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {product.name || product.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      {product.price && (
                        <span className="text-blue-600 font-bold text-lg">
                          KSh {Number(product.price).toLocaleString()}
                        </span>
                      )}
                      {product.availability && (
                        <span
                          className={`text-sm font-medium ${
                            product.availability === "In Stock"
                              ? "text-green-600"
                              : product.availability === "Limited Stock"
                              ? "text-yellow-600"
                              : "text-red-600"
                          }`}
                        >
                          {product.availability}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Show More */}
        <div className="text-center mt-8">
          <Link
            to="/products"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Show More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsCarousel;
