import React from "react";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Service from "./pages/Service";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ServiceDetail from "./pages/ServiceDetails";

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <div className="flex-grow">
        <Routes>
          {/* Home Page with multiple sections */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Service />
                <Pricing />
              </>
            }
          />

          {/* Separate pages */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/service" element={<Service />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
