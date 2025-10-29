import { useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import API_BASE_URL from "../config";
import { resolveMediaUrl } from "../config";

export default function PortfolioDetail() {
  const { id } = useParams(); // this will be the slug (e.g., "repairs")
  const [project, setProject] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
  const swiperRef = useRef(null);
  const videoRefs = useRef([]); // store video elements

  useEffect(() => {
    fetch(`${API_BASE_URL}/portfolio/${id}`)
      .then((res) => res.json())
      .then((data) => setProject(data))
      .catch((err) => console.error("Error loading project:", err));
  }, [id]);

  if (!project) {
    return <h2 className="text-center text-xl mt-10">Loading...</h2>;
  }

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSlideChange = (swiper) => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === swiper.activeIndex) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  };

  const handleVideoEnd = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  console.log("Loaded media:", project.media);

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Project Title */}
      <div className="flex items-center space-x-4 mb-6">
        <h1 className="text-3xl font-bold">{project.title}</h1>
      </div>

      {/* Media Carousel */}
      {project.media && project.media.length > 0 && (
        <div className="mb-8">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={handleSlideChange}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            {project.media.map((item, i) => (
              <SwiperSlide key={i} className="flex items-center justify-center">
                {item.type === "image" ? (
                  <img
                    src={resolveMediaUrl(item.url)}
                    alt={`${project.title} media ${i + 1}`}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                ) : (
                  <video
                    ref={(el) => (videoRefs.current[i] = el)}
                    muted
                    playsInline
                    onEnded={() => handleVideoEnd(i)}
                    className="w-full h-auto max-h-[70vh] object-contain rounded-xl"
                  >
                    <source src={resolveMediaUrl(item.url)} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                {item.caption && (
                  <div className="absolute bottom-1 left-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white text-lg p-3 text-center">
                    {item.caption}
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* Description */}
      <p className="text-lg text-gray-700 mb-6">{project.description}</p>

      {/* Extra / Technologies */}
      {project.extra && project.extra.length > 0 && (
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
