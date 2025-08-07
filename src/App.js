import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroBanner from "./components/HeroBanner";
import OffersSlider from "./components/OffersSlider";
import CategoryCards from "./components/CategoryCards";
import SearchByPNR from "./components/SearchByPNR";
import SearchByTrain from "./components/SearchByTrain";
import PopularItems from "./components/PopularItems";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ backgroundColor: "#FFF3CD", minHeight: "100vh" }}>
              <HeroBanner />
              <OffersSlider />
              <CategoryCards />
              <SearchByPNR />
              <SearchByTrain />
              <PopularItems />
              <Footer />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
