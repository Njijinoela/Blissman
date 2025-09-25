import React, { useState } from "react";
import {
  Users,
  Award,
  Clock,
  Globe,
  Phone,
  Mail,
  MapPin,
  Send,
  X,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

import teamData from "../data/teamData";

import emailjs from "emailjs-com";
import Contact from "./Contact";

const About = () => {
  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [selectedMember, setSelectedMember] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  // About data
  const stats = [
    { icon: Users, number: "1,000+", label: "Happy Customers" },
    { icon: Award, number: "7+", label: "Years Experience" },
    { icon: Clock, number: "99.9%", label: "Uptime Record" },
    { icon: Globe, number: "3+", label: "Countries Served" },
  ];

  return (
    <>
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Trusted Technology Partner Since 2019
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Blissman was established with an aim of providing latest
                technology solutions and with a firm commitment to meet the
                needs of both the corporate and the individual sector.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                In a fast-growing industry in Africa, we are dedicated to giving
                our customers innovative technology solutions and accessories at
                cost-effective prices, to satisfy the Kenyan market.
              </p>
              <h5 className="text-3xl font-bold text-gray-900 mb-4">
                Innovation
              </h5>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We strongly believe in giving our customers access to products
                that meet the best innovation standards in each industry.
              </p>
              <h5 className="text-3xl font-bold text-gray-900 mb-4">Design</h5>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Integrated experiences are both physical and digital. Blissman
                provides products where hardware and software work together
                effectively, enhancing both staff and customer experiences.
              </p>
              <h5 className="text-3xl font-bold text-gray-900 mb-4">Build</h5>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We build reliable IT infrastructure that supports your business
                goals, reducing bottlenecks and inefficiencies in traditional IT
                processes.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    24/7
                  </div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    ISO 27001
                  </div>
                  <div className="text-sm text-gray-600">
                    Security Certified
                  </div>
                </div>
              </div>
            </div>

            {/* Right content */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Blissman?</h3>
              <ul className="space-y-4 list-disc pl-6">
                <li>
                  Experience and background in both the local and international
                  IT industry
                </li>
                <li>Vast experience in customer support and services</li>
                <li>Strong local IT market knowledge for tailored solutions</li>
                <li>
                  Expertise in building IT networks from the ground up for
                  efficiency
                </li>
                <li>
                  Access to the best software to transform into a digital-first
                  organization
                </li>
                <li>
                  Maintenance and repair of IT accessories, including printers,
                  desktops, and servers
                </li>
                <li>
                  Consultancy services in software and hardware for a digital
                  future
                </li>
              </ul>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Team Section */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Powerful Team
            </h3>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Our experienced team brings together expertise in hosting, cloud
              infrastructure, and customer success to deliver exceptional
              service.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamData.map((member, index) => (
                <div
                  key={index}
                  className="text-center cursor-pointer hover:scale-105 transition"
                  onClick={() => setSelectedMember(member)}
                >
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg mb-4"
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-full mx-auto bg-gray-200 flex items-center justify-center shadow-lg mb-4">
                      <span className="text-gray-500">No Image</span>
                    </div>
                  )}
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h4>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Member Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-gray-800 rounded-xl shadow-xl max-w-lg w-full p-6 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-white-800"
              onClick={() => setSelectedMember(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center">
              {selectedMember.image ? (
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-28 h-28 rounded-full mx-auto object-cover shadow-md mb-4"
                />
              ) : (
                <div className="w-28 h-28 rounded-full mx-auto bg-gray-200 flex items-center justify-center shadow-md mb-4">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-white">
                {selectedMember.name}
              </h3>
              <p className="text-white mb-4">{selectedMember.role}</p>

              {selectedMember.social && selectedMember.social.length > 0 && (
                <div className="flex justify-center gap-4 mb-4">
                  {selectedMember.social.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-600 underline"
                    >
                      {social.platform}
                    </a>
                  ))}
                </div>
              )}

              <p className="text-white mb-4">{selectedMember.bio}</p>

              <h4 className="text-lg font-semibold text-white mb-2">Skills</h4>
              <ul className="flex flex-wrap justify-center gap-2">
                {selectedMember.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <Contact />
    </>
  );
};

export default About;
