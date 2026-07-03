import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";

import Layout from "./Layout";

// Pages
import Home from "./pages/Home";
import WeService from "./pages/WeService";
import RetailSuite from "./pages/RetailSuite";
import PaymentPro from "./pages/PaymentPro";
import Api from "./pages/Api";
import SelfKiosk from "./pages/SelfKiosk";
import Contact from "./pages/Contact";

// footer
import MoneiQ from "./pages/MoneiQ";
import Inventory from "./pages/Inventory";
import SoftwareDev from "./pages/SoftwareDev";

// policies
import DMCA from "./pages/policies/DMCA";
import PrivacyPolicy from "./pages/policies/PrivacyPolicy";
import TermServices from "./pages/policies/TermServices";
import Cancellation from "./pages/policies/Cancellation";



function App() {

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);
  
  const location = useLocation();

  return (
    <>
      <ScrollToTop />

      <Header />

      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>

            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/moneyiq" element={<MoneiQ />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/software-development" element={<SoftwareDev />} />
              <Route path="/who-we-serve" element={<WeService />} />
              <Route path="/retail-suite" element={<RetailSuite />} />
              <Route path="/payment-processing" element={<PaymentPro />} />
              <Route path="/api-solutions" element={<Api />} />
              <Route path="/self-kiosk" element={<SelfKiosk />} />
              <Route path="/contact-us" element={<Contact />} />

              {/* policies */}
              <Route path="/dmca" element={<DMCA />} />
              <Route path="/Privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/term-of-services" element={<TermServices />} />
              <Route path="/cancellation-refund-policy" element={<Cancellation />} />

            </Route>
          </Routes>
        </AnimatePresence>
      </main>


      <Footer />
    </>
  );
}

export default App;