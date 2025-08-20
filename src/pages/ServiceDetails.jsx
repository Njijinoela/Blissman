import React from "react";
import { useParams, Link } from "react-router-dom";

const serviceDetails = {
  repair: {
    title: "Repair of Computers & Printers",
    image: "/services/repair.jpg",
    content: `We diagnose hardware & software issues, remove malware, replace screens, repair printers, and much more.
    Our expert technicians ensure minimal downtime and reliable service.`,
  },
  maintenance: {
    title: "Preventative Maintenance",
    image: "/services/maintenance.jpg",
    content: `Regular maintenance extends equipment lifespan and improves efficiency.
    We perform monthly checks, clean systems, and optimize performance.`,
  },
  networking: {
    title: "Structured Networking Solutions",
    image: "/services/networking.jpg",
    content: `We design, sell, and install networking solutions with brands like Cisco, TP-Link, Meraki, and Ubiquiti.
    From structured cabling to performance audits, we keep your business connected.`,
  },
  products: {
    title: "Branded IT Products & Accessories",
    image: "/services/products.jpg",
    content: `We stock globally recognized IT products — from PCs and monitors 
    to servers and networking equipment. Our inventory is ready for immediate dispatch.`,
  },
  cctv: {
    title: "Security Surveillance Hardware",
    image: "/services/cctv.jpg",
    content: `Blissman provides and installs CCTV and IP cameras, access control, 
    and alarm systems. We also supply smoke detectors and heat sensors to keep your 
    facilities safe and secure.`,
  },
  software: {
    title: "Software Solutions",
    image: "/services/software.jpg",
    content: `We provide trusted software tools and custom solutions tailored 
    for your business needs. Whether for accounting, security, or productivity, 
    our software keeps you ahead.`,
  },
  printing: {
    title: "Bulk Printing",
    image: "/services/printing.jpg",
    content: `Our printing services cover brochures, flyers, books, magazines, 
    banners, calendars, and promotional branding. We deliver high-quality prints 
    at scale for your business needs.`,
  },
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceDetails[id];

  if (!service) {
    return <p className="text-center mt-20">Service not found.</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
      />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{service.title}</h1>
      <p className="text-lg text-gray-700 leading-relaxed">{service.content}</p>

      <Link
        to="/service"
        className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        ← Back to Services
      </Link>
    </div>
  );
};

export default ServiceDetail;
