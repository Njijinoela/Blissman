import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";

const QuoteWidget = () => {
  const [expanded, setExpanded] = useState(false);

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
            <form className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
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
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service
                </label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none">
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
                  rows="3"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-700 transition"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuoteWidget;
