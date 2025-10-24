import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import API_BASE_URL from "../config";

const Portfolio = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/portfolio/`)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error fetching portfolio:", err));
  }, []);

  return (
    <section className="py-20 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">
          BLISSMAN PRODUCT PORTFOLIO
        </h1>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => {
            // Convert DB string → actual Lucide Icon
            const Icon = Icons[item.icon] || null;

            return (
              <Link
                key={item.id}
                to={`/portfolio/${item.slug || item.id}`}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 block"
              >
                {/* Icon + Title */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gray-100 rounded-xl">
                    {Icon && <Icon className="h-8 w-8 text-blue-600" />}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-gray-600">{item.description}</p>

                {/* Extra list if available */}
                {item.extra && item.extra.length > 0 && (
                  <ul className="list-disc list-inside text-sm mt-2 text-gray-600">
                    {item.extra.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
