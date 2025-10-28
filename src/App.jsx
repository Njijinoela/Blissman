import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Service from "./pages/Service";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import ServiceDetail from "./pages/ServiceDetails";
import CallToAction from "./components/CallToAction";
import QuoteWidget from "./components/QuoteWidget";
import Products from "./components/Products";
import PortfolioCarousel from "./pages/PortfolioCarousel";
import PortfolioDetail from "./pages/PortfolioDetails";
import CheckoutPage from "./components/CheckoutPage";
import ProductsCarousel from "./pages/ProductCarousel";
import BackToTop from "./components/BackToTop";

function App() {
  const location = useLocation();
  const isHero = location.pathname === "/";
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <div className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <PortfolioCarousel />
                <CallToAction />
                <ProductsCarousel />
              </>
            }
          />

          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
          <Route path="/service" element={<Service />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
      <QuoteWidget />
      {!isHero && <CallToAction />}
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;
