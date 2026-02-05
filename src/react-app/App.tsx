import { BrowserRouter as Router } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import AppRoutes from "./routes";

export default function App() {
  return (
    <>
      <Router>
        <AppRoutes />
        {/* This tracks performance for all GroVize pages */}
        <SpeedInsights />
      </Router>
    </>
  );
}