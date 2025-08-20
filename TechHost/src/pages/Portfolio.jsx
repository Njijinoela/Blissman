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

const portfolioItems = [
  {
    title: "Repair of Computers & Printers",
    description:
      "We diagnose hardware & software faults, remove malware & viruses, replace screens & much more.",
    icon: <Wrench className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "Preventative Maintenance",
    description:
      "Monthly checks to prolong computer & printer life, improve performance, and ensure reliability.",
    icon: <ShieldCheck className="h-8 w-8 text-green-600" />,
  },
  {
    title: "Structured Networking Solutions",
    description:
      "We design, sell, install, and support networks for SMEs & enterprises, plus cable management.",
    icon: <Network className="h-8 w-8 text-purple-600" />,
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
    title: "Branded IT Products & Accessories",
    description:
      "We stock globally recognized brands — printers, PCs, monitors, servers, networking gear & more.",
    icon: <Monitor className="h-8 w-8 text-orange-600" />,
  },
  {
    title: "Security Surveillance Hardware",
    description:
      "Installation of CCTV/IP cameras, access control & alarm systems, smoke & heat detectors.",
    icon: <Camera className="h-8 w-8 text-red-600" />,
  },
  {
    title: "Software Solutions",
    description:
      "Custom software & trusted tools to support your business operations.",
    icon: <Code className="h-8 w-8 text-indigo-600" />,
    extra: (
      <ul className="list-disc list-inside text-sm mt-2 text-gray-600">
        <li>QuickBooks</li>
        <li>Antivirus</li>
        <li>Office 365</li>
      </ul>
    ),
  },
  {
    title: "Bulk Printing",
    description:
      "We print brochures, flyers, books, magazines, banners, calendars, branding items & more.",
    icon: <Printer className="h-8 w-8 text-teal-600" />,
  },
];

const Portfolio = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">
          BLISSMAN PRODUCT PORTFOLIO
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gray-100 rounded-xl">{item.icon}</div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h2>
              </div>
              <p className="text-gray-600">{item.description}</p>
              {item.extra}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
