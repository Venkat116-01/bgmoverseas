import { Routes, Route } from "react-router-dom";
import Home from "../assets/pages/Home";
import About from "../assets/pages/About";



import StudyInUSA from "../assets/components/Countries/StudyInUSA";
import StudyInUK from "../assets/components/Countries/StudyInUk";
import StudyInAustralia from "../assets/components/Countries/StudyInAustralia";
import StudyInCanada from "../assets/components/Countries/StudyInCanada";

import Careers from "../assets/pages/Careers";
import Contact from "../assets/pages/Contact";

import WhyBgmOverseas from "../assets/pages/WhyBgmOverseas";
import OurTeam from "../assets/pages/OurTeam";
import NotFound from "../assets/pages/NotFound";



export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} /> 
      <Route path="/study/usa" element={<StudyInUSA />} />
      <Route path="/study/uk" element={<StudyInUK />} />
      <Route path="/study/australia" element={<StudyInAustralia />} />
      <Route path="/study/canada" element={<StudyInCanada />} />
      
      


      <Route path="/why-bgm-overseas" element={<WhyBgmOverseas />} />
      <Route path="/our-team" element={<OurTeam />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}