import React from "react";
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
      icon: Wrench,
      title: "Repair of Computers & Printers",
      description:
        "We diagnose hardware & software faults, remove malware & viruses, replace screens & much more.",
    },
    {
      icon: ShieldCheck,
      title: "Preventative Maintenance",
      description:
        "Monthly checks to prolong computer & printer life, improve performance, and ensure reliability.",
    },
    {
      icon: Network,
      title: "Structured Networking Solutions",
      description:
        "We design, sell, install, and support networks for SMEs & enterprises, plus cable management.",
      extra: (
        <ul className="list-disc list-inside text-sm mt-2 text-gray-600">
          <li>Meraki</li>
          <li>Ubiquiti</li>
          <li>TP-Link</li>
          <li>Cisco</li>
          <li>Netgear</li>
        </ul>
      ),
    },
    {
      icon: Monitor,
      title: "Branded IT Products & Accessories",
      description:
        "We stock globally recognized brands — printers, PCs, monitors, servers, networking gear & more.",
      extra: (
        <ul className="list-disc list-inside text-sm mt-2 text-gray-600">
          <li>Hp</li>
          <li>Lenovo</li>
          <li>Toshiba</li>
          <li>Samsung</li>
          <li>Dell</li>
          <li>Huawei</li>
        </ul>
      ),
    },
    {
      icon: Camera,
      title: "Security Surveillance Hardware",
      description:
        "Installation of CCTV/IP cameras, access control & alarm systems, smoke & heat detectors.",
    },
    {
      icon: Code,
      title: "Software Solutions",
      description:
        "Custom software & trusted tools to support your business operations.",
      extra: (
        <ul className="list-disc list-inside text-sm mt-2 text-gray-600">
          <li>QuickBooks</li>
          <li>Antivirus</li>
          <li>Office 365</li>
        </ul>
      ),
    },
    {
      icon: Printer,
      title: "Bulk Printing",
      description:
        "We print brochures, flyers, books, magazines, banners, calendars, branding items & more.",
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
            Comprehensive IT solutions and services tailored to keep your
            business running efficiently and securely.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blissmanServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
              {service.extra}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
