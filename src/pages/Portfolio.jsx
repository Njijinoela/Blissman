import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import API_BASE_URL from "../config";
import { resolveMediaUrl } from "../config";

const Portfolio = () => {
  const [items, setItems] = useState([]);
  const [flipped, setFlipped] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/portfolio/`)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error fetching portfolio:", err));
  }, []);

  const handleFlip = (id) => {
    setFlipped((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">
          BLISSMAN PORTFOLIO
        </h1>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item) => {
            const Icon = Icons[item.icon] || null;
            const isFlipped = flipped === item.id;

            return (
              <div
                key={item.id}
                className="group perspective cursor-pointer"
                onClick={() => handleFlip(item.id)}
              >
                <div
                  className={`relative w-full h-80 transition-transform duration-700 transform-style-preserve-3d ${
                    isFlipped ? "rotate-y-180" : ""
                  } group-hover:rotate-y-180`}
                >
                  {/* FRONT - IMAGE SIDE */}
                  <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={resolveMediaUrl(item.images?.[0] || item.image_url)}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <h2 className="text-white text-2xl font-semibold px-4 text-center">
                        {item.title}
                      </h2>
                    </div>
                  </div>

                  {/* BACK - INFO SIDE */}
                  <div className="absolute inset-0 bg-gray-300 rounded-2xl p-6 rotate-y-180 backface-hidden shadow-lg flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-gray-100 rounded-xl">
                          {Icon && <Icon className="h-8 w-8 text-blue-600" />}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-gray-900 text-lg line-clamp-4">
                        {item.description}
                      </p>

                      {item.extra && item.extra.length > 0 && (
                        <ul className="list-disc list-inside text-sm mt-2 text-gray-600">
                          {item.extra.map((tech, i) => (
                            <li key={i}>{tech}</li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <Link
                      to={`/portfolio/${item.slug || item.id}`}
                      className="text-blue-600 font-semibold mt-4 text-right hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
