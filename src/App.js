// src/App.js
import React from "react";
import HeroBanner from "./components/HeroBanner";
import CategoryCards from "./components/CategoryCards";
import PopularItems from "./components/PopularItems";
import "./index.css";

function App() {
  return (
    <div>
      <HeroBanner />
      <CategoryCards />
      <PopularItems />
    </div>
  );
}

export default App;
