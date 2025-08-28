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
} from "lucide-react";

const About = () => {
  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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
    { icon: Users, number: "10,000+", label: "Happy Customers" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Clock, number: "99.9%", label: "Uptime Record" },
    { icon: Globe, number: "5+", label: "Countries Served" },
  ];

  const team = [
    {
      name: "Emmanuel Okemwa",
      role: "CEO & Founder",
      image: "/okemwa.jpeg",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image:
        "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1",
    },
    {
      name: "Njiji Noel",
      role: "Web Developer",
      image: "/njiji.jpg",
    },
  ];

  return (
    <>
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
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
              Meet Our Leadership Team
            </h3>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Our experienced team brings together expertise in hosting, cloud
              infrastructure, and customer success to deliver exceptional
              service.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg mb-4"
                  />
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to get started? Contact our team for personalized solutions
              or get immediate support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        Phone Support
                      </h4>
                      <p className="text-gray-600">
                        +254 711 262396 / +254 780 008352
                      </p>
                      <p className="text-sm text-gray-500">
                        Available 24/7 for emergencies
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        Email Support
                      </h4>
                      <p className="text-gray-600">Blissmantech@gmail.com</p>
                      <p className="text-sm text-gray-500">
                        Response within 2 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        Office Location
                      </h4>
                      <p className="text-gray-600">
                        Plums Lane off Ojijo Road IBC Center
                      </p>
                      <p className="text-gray-600">Westlands, Nairobi Kenya</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="hosting">Web Hosting Inquiry</option>
                    <option value="support">IT Support Request</option>
                    <option value="billing">Billing Question</option>
                    <option value="technical">Technical Issue</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Describe your inquiry or issue in detail"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
