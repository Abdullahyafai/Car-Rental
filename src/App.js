import "./App.css";
import { Home } from "./Components/pages/Home";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import { About } from "./Components/pages/About";
import { Login } from "./Components/pages/Login";
import { Cars } from "./Components/pages/Cars";
import { Contactus } from "./Components/pages/Contactus";
import { Services } from "./Components/pages/Services";
import { Register } from "./Components/pages/Register";
import { CarDetailComp } from "./Components/CarDetailsComponents/CarDetailComp";
import CarContext from "./Context/CarContext";
// import Gallery from "./Components/Gallery/Gallery";
import CarGallery from "./Components/pages/CarGallery";
import FAQ from "./Components/FAQ/FAQ";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cars" element={<Cars />} />
        <Route path="/login" element={<Login />} />
        <Route path="/CarDetail" element={<CarDetailComp />} />
        <Route path="/Contact" element={<Contactus />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/gallery" element={<CarGallery />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/Register" element={<Register />} />
      </Routes> 
    </>
  );
}

export default App;
