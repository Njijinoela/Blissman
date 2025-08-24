// src/pages/PortfolioDetail.jsx
import { useParams } from "react-router-dom";
import { portfolioItems } from "../data/PortfolioData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PortfolioDetail() {
  const { id } = useParams();
  const project = portfolioItems.find((p) => p.id === id);

  if (!project) {
    return (
      <h2 className="text-center text-xl mt-10">Portfolio item not found</h2>
    );
  }

  const Icon = project.icon ? project.icon : null;

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Project Title + Icon */}
      <div className="flex items-center space-x-4 mb-6">
        {Icon && <Icon className="h-10 w-10 text-blue-600" />}
        <h1 className="text-3xl font-bold">{project.title}</h1>
      </div>

      {/* Image Carousel */}
      {project.images && project.images.length > 0 && (
        <div className="mb-8">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            {project.images.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="w-full h-80 object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* Description */}
      <p className="text-lg text-gray-700 mb-6">{project.description}</p>

      {/* Extra / Technologies */}
      {project.extra && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Technologies / Tools</h2>
          <ul className="list-disc list-inside text-gray-600">
            {project.extra.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
