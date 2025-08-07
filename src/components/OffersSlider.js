// src/components/OffersSlider.js
import React, { useState, useEffect } from "react";

export default function OffersSlider() {
  const slides = [
    "https://via.placeholder.com/400x150?text=Flat+30%25+Off",
    "https://via.placeholder.com/400x150?text=Free+Delivery+on+PNR+Orders",
    "https://via.placeholder.com/400x150?text=Special+Train+Meals",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div style={{ textAlign: "center", padding: "10px" }}>
      <img
        src={slides[current]}
        alt="Offer Banner"
        style={{ width: "95%", borderRadius: "10px" }}
      />
    </div>
  );
}
