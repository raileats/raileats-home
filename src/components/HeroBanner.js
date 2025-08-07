// src/components/HeroBanner.js
import React from "react";

export default function HeroBanner() {
  return (
    <div style={{ backgroundColor: "#FFF3CD", padding: "20px" }}>
      <h2 style={{ textAlign: "center", color: "#000" }}>
        Rail Journey ka Swad, only Raileats ke Paas!
      </h2>
      <div style={{ marginTop: "15px", textAlign: "center" }}>
        <input
          type="text"
          placeholder="Enter PNR or Train Number"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "80%",
          }}
        />
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            marginLeft: "5px",
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}
