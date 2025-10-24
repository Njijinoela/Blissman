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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Our Projects</h2>
          <p className="text-gray-600 mt-2">
            Explore a preview of our projects — tailored to your business needs.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end mb-4 space-x-3">
          <button className="custom-prev bg-blue-100 p-2 rounded-full hover:bg-blue-200 transition">
            <ChevronLeft className="h-5 w-5 text-blue-600" />
          </button>
          <button className="custom-next bg-blue-100 p-2 rounded-full hover:bg-blue-200 transition">
            <ChevronRight className="h-5 w-5 text-blue-600" />
          </button>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {portfolioItems.map((item) => (
            <SwiperSlide key={item.id}>
              <Link
                to={`/portfolio/${item.id}`}
                className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={item.images?.[0] || item.image_url}
                  alt={item.title}
                  className="h-40 w-full object-cover"
                />
                <div className="p-6">
                  {item.icon && (
                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <img
                        src={item.icon_url || item.icon}
                        alt=""
                        className="h-6 w-6 text-blue-600"
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Show More Button */}
        <div className="text-center mt-8">
          <Link
            to="/portfolio"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Show More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCarousel;
