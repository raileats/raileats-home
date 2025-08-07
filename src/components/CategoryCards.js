// src/components/CategoryCards.js
import React from "react";

export default function CategoryCards() {
  const categories = [
    { name: "Food Delivery", icon: "🍱" },
    { name: "Grocery", icon: "🛒" },
    { name: "Goods Delivery", icon: "📦" },
    { name: "Ride Booking", icon: "🚖" },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "space-around", padding: "20px" }}>
      {categories.map((cat, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#FFF",
            borderRadius: "10px",
            padding: "10px",
            textAlign: "center",
            width: "22%",
            boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ fontSize: "30px" }}>{cat.icon}</div>
          <p>{cat.name}</p>
        </div>
      ))}
    </div>
  );
}
