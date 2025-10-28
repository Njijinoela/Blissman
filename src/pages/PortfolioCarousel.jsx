import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import API_BASE_URL from "../config";

const PortfolioCarousel = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/portfolio/`)
      .then((res) => res.json())
      .then((data) => setPortfolioItems(data))
      .catch((err) => console.error("Error fetching portfolio:", err));
  }, []);

  return (
    <section className="py-12 bg-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Our Projects</h2>
          <p className="text-gray-600 mt-2">
            Explore a preview of our projects — tailored to your business needs.
          </p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {portfolioItems.map((item) => {
            // Handle multiple image formats safely
            const imageSrc =
              item.image_url ||
              item.images?.[0] ||
              item.thumbnail ||
              "/placeholder-image.jpg"; // fallback

            return (
              <SwiperSlide key={item.id}>
                <Link
                  to={`/portfolio/${item.id}`}
                  className="block bg-gray-300 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
                >
                  {/* Image */}
                  <div className="relative w-full h-56 bg-gray-200 flex items-center justify-center">
                    <img
                      src={imageSrc}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = "/placeholder-image.jpg"; // fallback if broken
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {item.icon && (
                      <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                        <img
                          src={item.icon_url || item.icon}
                          alt=""
                          className="h-6 w-6 object-contain text-blue-600"
                        />
                      </div>
                    )}
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Show More Button */}
        <div className="text-center mt-6">
          <Link
            to="/portfolio"
            className="bg-blue-600 text-white px-5 py-2.5 rounded-md text-sm hover:bg-blue-700 transition"
          >
            Show More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCarousel;
