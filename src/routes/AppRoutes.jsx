import { Routes, Route } from "react-router-dom";
import Home from "../assets/pages/Home";
import About from "../assets/pages/About";
import Careers from "../assets/pages/Careers";
import Contact from "../assets/pages/Contact";
import WhyBgmOverseas from "../assets/pages/WhyBgmOverseas";
import OurTeam from "../assets/pages/OurTeam";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
            <Route path="/why-bgm-overseas" element={<WhyBgmOverseas />} />
      <Route path="/our-team" element={<OurTeam />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/why-bgm-overseas" element={<WhyBgmOverseas />} />
      <Route path="/careers" element={<Careers />} />
    </Routes>
  );
}