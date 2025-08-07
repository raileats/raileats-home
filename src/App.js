import React from "react";
import HeroBanner from "./components/HeroBanner";
import OffersSlider from "./components/OffersSlider";
import CategoryCards from "./components/CategoryCards";
import SearchByPNR from "./components/SearchByPNR";
import SearchByTrain from "./components/SearchByTrain";
import PopularItems from "./components/PopularItems";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div style={{ backgroundColor: "#FFF3CD", minHeight: "100vh" }}>
      {/* Top Banner */}
      <HeroBanner />

      {/* Offers Slider */}
      <OffersSlider />

      {/* Categories */}
      <CategoryCards />

      {/* Search Sections */}
      <SearchByPNR />
      <SearchByTrain />

      {/* Popular Items */}
      <PopularItems />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
