import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import API_BASE_URL from "../config";

import {
  Palette,
  ShieldCheck,
  Network,
  FileText,
  Laptop,
  Wrench,
  Globe,
} from "lucide-react";

const iconMap = {
  Palette,
  ShieldCheck,
  Network,
  FileText,
  Laptop,
  Wrench,
  Globe,
};

const ServicesCarousel = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/services/`)
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error fetching services:", err));
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="text-gray-600 mt-2">
            Explore a preview of our services — tailored to your business needs.
          </p>
        </div>

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
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <SwiperSlide key={service.id}>
                <Link to={`/services/${service.id}`}>
                  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                    <img
                      src={service.image_url}
                      alt={service.title}
                      className="h-40 w-full object-cover"
                    />
                    <div className="p-6">
                      <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="text-center mt-8">
          <Link
            to="/service"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Show More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
