import React from "react";
import { useParams, Link } from "react-router-dom";

const serviceDetails = {
  "web-design": {
    title: "Website Design",
    image: "/services/webdesign.jpg",
    content: `We create visually stunning, responsive, and user-friendly websites tailored to your brand. 
    From corporate sites to e-commerce platforms, our designs ensure seamless navigation, engaging layouts, 
    and optimized performance across all devices.`,
  },
  "it-support": {
    title: "IT Support",
    image: "/services/itsuppport.webp",
    content: `Our IT support team provides reliable troubleshooting, system maintenance, and proactive monitoring. 
    We ensure smooth day-to-day operations by resolving hardware, software, and networking issues quickly and effectively.`,
  },
  "it-consulting": {
    title: "IT Consulting",
    image: "/services/it-consulting.jpg",
    content: `We offer strategic IT consulting to help businesses align technology with growth. 
    From infrastructure planning, cloud adoption, and cybersecurity solutions to digital transformation strategies, 
    we guide you every step of the way.`,
  },
  "profile-design": {
    title: "Company Profile Design",
    image: "/services/company-profile.jpg",
    content: `A well-crafted company profile sets you apart. 
    We design professional and compelling profiles that highlight your brand identity, services, and achievements, 
    ensuring a powerful first impression for your clients and partners.`,
  },
  "computer-services": {
    title: "Computer Services",
    image: "/services/computer-services.jpg",
    content: `From software installation and system upgrades to virus removal and performance optimization, 
    we provide complete computer services. Our experts ensure your systems stay efficient, secure, and up-to-date.`,
  },
  "computer-repair": {
    title: "Computer Repair Services",
    image: "/services/computer-repair.jpg",
    content: `We specialize in diagnosing and repairing computer issues — whether it’s faulty hardware, 
    broken screens, overheating, or system errors. Our certified technicians get your devices back in working order fast.`,
  },
  domains: {
    title: "Domains & Hosting",
    image: "/services/domains.jpg",
    content: `Secure your online presence with our domain registration and reliable hosting services. 
    We provide fast, secure, and scalable solutions to keep your website accessible and performing at its best.`,
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
