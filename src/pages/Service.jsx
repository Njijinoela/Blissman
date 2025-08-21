import React from "react";
import { Link } from "react-router-dom";
import blissmanServices from "../data/ServiceData";

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore Blissman’s complete portfolio of IT and digital services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blissmanServices.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
