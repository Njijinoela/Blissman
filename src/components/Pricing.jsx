import React, { useState } from "react";
import { Check } from "lucide-react";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly"); // monthly | yearly

  const colorClasses = {
    blue: {
      text: "text-blue-600",
      textLight: "text-blue-500",
      bg: "bg-blue-600 hover:bg-blue-700",
    },
    purple: {
      text: "text-purple-600",
      textLight: "text-purple-500",
      bg: "bg-purple-600 hover:bg-purple-700",
    },
    green: {
      text: "text-green-600",
      textLight: "text-green-500",
      bg: "bg-green-600 hover:bg-green-700",
    },
  };

  const plans = [
    {
      name: "Starter",
      monthly: 9.99,
      description: "Perfect for personal websites and small blogs",
      features: [
        "10 GB SSD Storage",
        "100 GB Bandwidth",
        "1 Email Account",
        "Free SSL Certificate",
        "24/7 Support",
        "99.9% Uptime Guarantee",
      ],
      popular: false,
      color: "blue",
      link: "https://your-payment-domain.com/checkout/starter",
    },
    {
      name: "Professional",
      monthly: 29.99,
      description: "Ideal for growing businesses and e-commerce",
      features: [
        "50 GB SSD Storage",
        "Unlimited Bandwidth",
        "10 Email Accounts",
        "Free SSL Certificate",
        "Daily Backups",
        "CDN Included",
        "24/7 Priority Support",
        "99.9% Uptime Guarantee",
      ],
      popular: true,
      color: "purple",
      link: "https://your-payment-domain.com/checkout/professional",
    },
    {
      name: "Enterprise",
      monthly: 99.99,
      description: "For high-traffic websites and applications",
      features: [
        "200 GB SSD Storage",
        "Unlimited Bandwidth",
        "Unlimited Email Accounts",
        "Free SSL Certificate",
        "Hourly Backups",
        "Premium CDN",
        "Dedicated Support Manager",
        "99.99% Uptime Guarantee",
        "Free Migration Service",
      ],
      popular: false,
      color: "green",
      link: "https://your-payment-domain.com/checkout/enterprise",
    },
  ];

  // Calculate price depending on cycle
  const getPrice = (monthly) => {
    if (billingCycle === "monthly") {
      return `$${monthly.toFixed(2)}`;
    }
    // 20% discount for yearly billing
    const yearlyPrice = monthly * 12 * 0.8;
    return `$${yearlyPrice.toFixed(2)}`;
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Transparent Pricing Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. All plans include our core
            features with no hidden fees or long-term commitments.
          </p>

          {/* Billing Toggle */}
          <div className="flex justify-center items-center mt-6 space-x-4">
            <span
              className={`text-sm font-medium ${
                billingCycle === "monthly" ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() =>
                setBillingCycle(
                  billingCycle === "monthly" ? "yearly" : "monthly"
                )
              }
              className="relative w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 transition duration-300"
            >
              <span
                className={`bg-white w-6 h-6 rounded-full shadow-md transform transition duration-300 ${
                  billingCycle === "yearly" ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span
              className={`text-sm font-medium ${
                billingCycle === "yearly" ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Yearly{" "}
              <span className="ml-1 text-green-600 font-semibold">-20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl shadow-lg ${
                plan.popular
                  ? "ring-2 ring-purple-500 transform scale-105"
                  : "border border-gray-200"
              } bg-white p-8 transition-all duration-300 hover:shadow-xl`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="mb-8">
                  <span
                    className={`text-5xl font-bold ${
                      colorClasses[plan.color].text
                    }`}
                  >
                    {getPrice(plan.monthly)}
                  </span>
                  <span className="text-gray-500 text-lg">
                    {billingCycle === "monthly" ? "/month" : "/year"}
                  </span>
                </div>

                {/* Get Started button → payment domain */}
                <a
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-purple-600 text-white hover:bg-purple-700 transform hover:scale-105"
                      : `${colorClasses[plan.color].bg} text-white`
                  }`}
                >
                  Get Started
                </a>
              </div>

              <div className="mt-8">
                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
                  What's included:
                </h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check
                        className={`h-5 w-5 ${
                          colorClasses[plan.color].textLight
                        } mr-3 flex-shrink-0`}
                      />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional IT Support Pricing */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              IT Support Add-ons
            </h3>
            <p className="text-gray-600">
              Professional IT support services available for all hosting plans
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Remote Support
              </h4>
              <p className="text-3xl font-bold text-blue-600 mb-2">$49</p>
              <p className="text-gray-600 text-sm">per incident</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Monthly IT Package
              </h4>
              <p className="text-3xl font-bold text-purple-600 mb-2">$199</p>
              <p className="text-gray-600 text-sm">per month</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Enterprise Support
              </h4>
              <p className="text-3xl font-bold text-green-600 mb-2">$499</p>
              <p className="text-gray-600 text-sm">per month</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
