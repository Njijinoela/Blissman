import React, { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com"; // 👈 import emailjs

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // 👈 new state for loading

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // start loading

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setLoading(false); // stop loading
        },
        (error) => {
          console.error(error.text);
          alert("❌ Failed to send message. Please try again.");
          setLoading(false); // stop loading
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to get started? Contact our team for personalized solutions or
            get immediate support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                <p className="text-gray-600">
                  +254 711 262396 / +254 780 008352
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <Mail className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                <p className="text-gray-600">Blissmantech@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Office</h4>
                <p className="text-gray-600">Westlands, Nairobi Kenya</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <FaLinkedin className="h-6 w-6 text-blue-700" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  LinkedIn
                </h4>
                <a
                  href="https://www.linkedin.com/company/blissman-technologies-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Blissman Technologies Ltd
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name *"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              >
                <option value="">Select a subject</option>
                <option value="hosting">Web Hosting Inquiry</option>
                <option value="support">IT Support Request</option>
                <option value="billing">Billing Question</option>
                <option value="technical">Technical Issue</option>
                <option value="other">Other</option>
              </select>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Your message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center 
                  ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }
                `}
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && <Send className="ml-2 h-5 w-5" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
