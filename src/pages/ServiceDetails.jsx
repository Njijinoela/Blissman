import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { portfolioItems } from "../data/PortfolioData";
import FAQ from "../components/FAQ";
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

export default function ServiceDetails() {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data))
      .catch((err) => console.error("Error fetching service:", err));
  }, [id]);

  if (!service) {
    return <h2 className="text-center text-xl mt-10">Loading...</h2>;
  }

  const Icon = iconMap[service.icon] || Globe;

  const relatedProjects = portfolioItems.filter((p) =>
    service.portfolio?.includes(p.id)
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex items-center space-x-4 mb-6">
        <Icon className="h-10 w-10 text-blue-600" />
        <h1 className="text-3xl font-bold">{service.title}</h1>
      </div>

      {service.image_url && (
        <img
          src={service.image_url}
          alt={service.title}
          className="w-full h-full object-cover rounded-lg shadow mb-6"
        />
      )}

      <p className="text-lg text-gray-700 mb-8">{service.description}</p>

      {relatedProjects.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Related Portfolio Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProjects.map((project) => (
              <Link
                key={project.id}
                to={`/portfolio/${project.id}`}
                className="block bg-white rounded-lg shadow hover:shadow-lg transition"
              >
                <img
                  src={project.images?.[0]}
                  alt={project.title}
                  className="h-40 w-full object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {service.faqs?.length > 0 && <FAQ faqs={service.faqs} />}
    </div>
  );
}
