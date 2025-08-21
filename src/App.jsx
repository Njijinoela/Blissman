import React from "react";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Service from "./pages/Service";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import ServiceDetail from "./pages/ServiceDetails";
import ServicesCarousel from "./pages/ServiceCarousel";
import CallToAction from "./components/CallToAction";
import QuoteWidget from "./components/QuoteWidget";
import Products from "./components/Products";
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
                <ServicesCarousel />
                <CallToAction />
              </>
            }
          />

          {/* Separate pages */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/service" element={<Service />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
      <QuoteWidget />
      <Footer />
    </div>
  );
}

export default App;
