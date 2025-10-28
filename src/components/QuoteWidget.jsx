import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import emailjs from "emailjs-com";

const QuoteWidget = () => {
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Website Design",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_QUOTE_TEMPLATE_ID,
        {
          type: "Quote Request",
          from_name: formData.name,
          from_email: formData.email,
          phone: "N/A",
          service: formData.service,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Quote request sent!");
          setFormData({
            name: "",
            email: "",
            service: "Website Design",
            message: "",
          });
          setLoading(false);
          setExpanded(false);
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send quote. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {!expanded ? (
        // Floating Button
        <button
          onClick={() => setExpanded(true)}
          className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <MessageSquare size={20} />
          <span className="font-medium">Request a Quote</span>
        </button>
      ) : (
        // Expanded Form
        <div className="w-80 bg-white shadow-xl rounded-lg border border-gray-200">
          {/* Header */}
          <div className="flex justify-between items-center bg-blue-600 text-white px-4 py-2 rounded-t-lg">
            <h3 className="text-lg font-semibold">Request a Quote</h3>
            <button
              onClick={() => setExpanded(false)}
              className="hover:text-gray-200"
            >
              <X size={20} />
            </button>
          </div>

          {/* Form */}
          <div className="p-4">
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option>Website Design</option>
                  <option>IT Support</option>
                  <option>IT Consulting</option>
                  <option>Profile Design</option>
                  <option>Computer Services</option>
                  <option>Computer Repair</option>
                  <option>Domains & Hosting</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-2 px-4 rounded-md text-sm font-medium transition ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {loading ? "Sending..." : "Submit Request"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuoteWidget;
