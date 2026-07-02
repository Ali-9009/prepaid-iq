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



function App() {

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);
  
  const location = useLocation

  return (
    <>
      <ScrollToTop />

      <Header />

      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>

            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />

            </Route>
          </Routes>
        </AnimatePresence>
      </main>


      <Footer />
    </>
  );
}

export default App;