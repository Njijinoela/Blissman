import React from "react";
import { Users, Award, Clock, Globe } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "10,000+",
      label: "Happy Customers",
    },
    {
      icon: Award,
      number: "15+",
      label: "Years Experience",
    },
    {
      icon: Clock,
      number: "99.9%",
      label: "Uptime Record",
    },
    {
      icon: Globe,
      number: "5+",
      label: "Countries Served",
    },
  ];

  const team = [
    {
      name: "Emmanuel Okemwa",
      role: "CEO & Founder",
      image:
        "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image:
        "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Support",
      image:
        "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Trusted Technology Partner Since 2019
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Blissman was established with an aim of providing latest
              technology solutions and with a firm commit- ment to meet the
              needs of both the corporate and the individual sector. We intend
              to provide quality services and solutions which are personalized
              to target and meet the needs of our clientele.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              In an industry which is fast growing especially in Afri- ca, and
              with a vast area of potential, we are dedicated to giving our
              customers new technology solutions and accessories at cost
              effective prices, to satisfy the Kenyan market. To achieve this,
              we stand by the founding principles of our organization;
            </p>
            <h5 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Innovation
            </h5>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The Blissman brand strongly believes in giving our cus- tomers
              access to products that have met the best in- novation standards
              in the respective industry of each product.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              To keep up your organization at the forefront of efficien- cy and
              be a forward thinking company, Blissman pro- vides your
              organization with a suite of business tools that go beyond IT
              assets to serve as the foundation for all of your enterprise
              solutions and services.
            </p>
            <h5 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Design
            </h5>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Integrated experiences are inherently both physical andBLISSMAN
              PROFILE digital, but “integration” doesn’t mean doing everything
              at once in your organization. When enterprises use hardware and
              software that integrates good design, both in- voke a feeling,
              Both invoke an emotional response when staff and your end custom-
              ers are using the products. The digital interface of hardware is
              starting to catch up with the physical interaction with hardware,
              Blissman gives you access to products that bring the intersection
              of design when hardware and software are used together effectively
              in an organization.
            </p>
            <h5 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Build
            </h5>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Enterprises have accelerated the typical IT infrastructures which
              continues to em- phasize stability over speed. Requests for
              infrastructure services still often go through an assembly
              line-style process involving many handoffs, long delays, and
              frequent misunderstandings. Blissman seeks to build its clients
              the best IT infrastructure that supports their bottom line
              business objectives.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              To keep up your organization at the forefront of efficien- cy and
              be a forward thinking company, Blissman pro- vides your
              organization with a suite of business tools that go beyond IT
              assets to serve as the foundation for all of your enterprise
              solutions and services.
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
                <div className="text-sm text-gray-600">Security Certified</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Blissman?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>
                    Experience and background in both the local and
                    international IT industry
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>
                    Vast experience in customer support and services, which
                    would in turn mean excellent support and services given to
                    our customers
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>
                    Well acquainted with the local IT market thus easier to
                    building long lasting business ties and provide the services
                    tailored to the local business community
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>
                    Our team is equipped with the best equipment and skills to
                    build your Larger 6 IT network from the ground up to get you
                    up to speed with running an IT effi- cient organization.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>
                    We have access to the best software in the market to help
                    you transform into a digital first organization, with our
                    software tools, we set them up in the IT infrastructure that
                    we set up for your business.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>
                    Our team is able to fix your IT accessories when they need
                    an update or scheduled repairs and maintenance in order to
                    boost your organization’s pro- ductivity. This includes
                    printers, Desktops, server infrastructure and any device you
                    may have challenges with, we are a call away.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>
                    Providing consultancy services in software and hardware in
                    order to keep your organization up to speed with
                    developments in the IT space, enabling your organization
                    have a clear path to a digital future.
                  </span>
                </li>
              </ul>
            </div>
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
            infrastructure, and customer success to deliver exceptional service.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                  />
                </div>
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
  );
};

export default About;
