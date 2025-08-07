// src/components/PopularItems.js
import React from "react";

export default function PopularItems() {
  const items = [
    { name: "Veg Thali", img: "https://via.placeholder.com/100" },
    { name: "Biryani", img: "https://via.placeholder.com/100" },
    { name: "Pizza", img: "https://via.placeholder.com/100" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h3>Popular Items</h3>
      <div style={{ display: "flex", gap: "15px", overflowX: "auto" }}>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#FFF",
              borderRadius: "10px",
              padding: "10px",
              minWidth: "120px",
              textAlign: "center",
              boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={item.img}
              alt={item.name}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
