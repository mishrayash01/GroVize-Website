import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import SolutionPage from "./pages/Solution";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import ComingSoon from "./pages/ComingSoon";
import CareersPage from "./pages/Careers";
import PricingPage from "./pages/Pricing";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import TermsOfServicePage from "./pages/TermsOfService";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/solution" element={<SolutionPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms-of-service" element={<TermsOfServicePage />} />
      <Route path="/desktop-login" element={<ComingSoon />} />
    </Routes>
  );
}
