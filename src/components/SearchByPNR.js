// src/components/SearchByPNR.js
import React, { useState } from "react";

export default function SearchByPNR() {
  const [pnr, setPnr] = useState("");

  const handleSearch = () => {
    alert(`Searching orders for PNR: ${pnr}`);
    // Yaha API call integrate karna hoga
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Search by PNR</h3>
      <input
        type="text"
        placeholder="Enter PNR Number"
        value={pnr}
        onChange={(e) => setPnr(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          width: "70%",
        }}
      />
      <button
        onClick={handleSearch}
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
  );
}
