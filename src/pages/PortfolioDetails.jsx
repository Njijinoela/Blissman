import { useParams } from "react-router-dom";
import { useState } from "react";
import { portfolioItems } from "../data/PortfolioData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PortfolioDetail() {
  const { id } = useParams();
  const project = portfolioItems.find((p) => p.id === id);

  const [openIndex, setOpenIndex] = useState(null);

  if (!project) {
    return (
      <h2 className="text-center text-xl mt-10">Portfolio item not found</h2>
    );
  }

  const Icon = project.icon ? project.icon : null;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
                  className="w-full h-full object-cover"
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
      {/* FAQ Section */}
      {project.faqs && project.faqs.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {project.faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-4 text-left"
                >
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <span className="text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
