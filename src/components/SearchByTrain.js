// src/components/SearchByTrain.js
import React, { useState } from "react";

export default function SearchByTrain() {
  const [trainNo, setTrainNo] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = () => {
    alert(`Searching for Train No: ${trainNo} on ${date}`);
    // Yaha API call integrate karna hoga
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Search by Train Number</h3>
      <input
        type="text"
        placeholder="Enter Train Number"
        value={trainNo}
        onChange={(e) => setTrainNo(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          width: "40%",
          marginRight: "5px",
        }}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          width: "35%",
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
