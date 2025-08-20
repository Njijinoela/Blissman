import React from "react";
import { Link } from "react-router-dom";
import {
  Wrench,
  ShieldCheck,
  Network,
  Monitor,
  Camera,
  Code,
  Printer,
} from "lucide-react";

const Services = () => {
  const blissmanServices = [
    {
      id: "repair",
      icon: Wrench,
      title: "Repair of Computers & Printers",
      description:
        "We offer comprehensive repair services for both computers and printers. From diagnosing hardware and software faults, removing malware and viruses, replacing damaged screens, and restoring performance — our certified engineers ensure your devices are always in top condition.",
      image: "/services/repair.jpg",
    },
    {
      id: "maintenance",
      icon: ShieldCheck,
      title: "Preventative Maintenance",
      description:
        "Like any machine, computers and printers need regular preventative maintenance. Our experts perform monthly checks, system cleaning, hardware testing, and software optimization. This extends the life of your equipment and reduces downtime.",
      image: "/services/maintenance.jpg",
    },
    {
      id: "networking",
      icon: Network,
      title: "Structured Networking Solutions",
      description:
        "We design, install, and maintain robust networking solutions for SMEs and large organizations. Services include structured cabling, network audits, and ongoing O&M support.",
      image: "/services/networking.jpg",
    },
    {
      id: "products",
      icon: Monitor,
      title: "Branded IT Products & Accessories",
      description:
        "We stock globally recognized IT brands such as HP, Dell, Lenovo, and Huawei. From laptops, servers, monitors, and networking gear, we supply only reliable products.",
      image: "/services/products.jpg",
    },
    {
      id: "cctv",
      icon: Camera,
      title: "Security Surveillance Hardware",
      description:
        "We provide and install high-quality CCTV and IP surveillance systems, access control, and alarm systems — keeping your facilities safe and monitored 24/7.",
      image: "/services/cctv.jpg",
    },
    {
      id: "software",
      icon: Code,
      title: "Software Solutions",
      description:
        "We deliver tailored software and trusted tools such as QuickBooks, Antivirus, and Office 365 to streamline your business operations.",
      image: "/services/software.jpg",
    },
    {
      id: "printing",
      icon: Printer,
      title: "Bulk Printing",
      description:
        "We print brochures, flyers, books, magazines, banners, calendars, branding items, and more. High-quality, affordable print solutions for your business.",
      image: "/services/printing.jpg",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore Blissman’s complete portfolio of IT services and products,
            designed to keep your business running efficiently, securely, and
            cost-effectively.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blissmanServices.map((service, index) => (
            <Link
              key={index}
              to={`/services/${service.id}`}
              className="block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="h-40 w-full object-cover"
              />

              {/* Content */}
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
