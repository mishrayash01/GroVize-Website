import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import HomePage from "./pages/Home";
import FeaturesPage from "./pages/Features";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import { ParticleBackground } from "./components/ParticleBackground";

export default function App() {
  return (
    <>
      <ParticleBackground />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        {/* This tracks performance for all GroVize pages */}
        <SpeedInsights />
      </Router>
    </>
  );
}