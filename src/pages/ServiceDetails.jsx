import { useParams, Link } from "react-router-dom";
import { blissmanServices } from "../data/ServiceData";
import { portfolioItems } from "../data/PortfolioData";
import FAQ from "../components/FAQ";

export default function ServiceDetails() {
  const { id } = useParams();
  const service = blissmanServices.find((s) => s.id === id);

  if (!service) {
    return <h2 className="text-center text-xl mt-10">Service not found</h2>;
  }

  const Icon = service.icon;

  // Find portfolio items linked to this service
  const relatedProjects = portfolioItems.filter((p) =>
    service.portfolio.includes(p.id)
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Service Header */}
      <div className="flex items-center space-x-4 mb-6">
        {Icon && <Icon className="h-10 w-10 text-blue-600" />}
        <h1 className="text-3xl font-bold">{service.title}</h1>
      </div>

      {/* Hero Image */}
      {service.image && (
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover rounded-lg shadow mb-6"
        />
      )}

      {/* Description */}
      <p className="text-lg text-gray-700 mb-8">{service.description}</p>

      {/* Related Portfolio Section */}
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
                  <div className="flex items-center space-x-2 mb-2">
                    <project.icon className="h-5 w-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      {/* FAQs Section */}
      {service.faqs && service.faqs.length > 0 && <FAQ faqs={service.faqs} />}
    </div>
  );
}
