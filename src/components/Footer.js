// src/components/Footer.js
import React from "react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#000", color: "#fff", padding: "20px", textAlign: "center" }}>
      <p>© {new Date().getFullYear()} RailEats.in</p>
      <p>Rail Journey ka Swad, only Raileats ke Paas!</p>
      <div style={{ marginTop: "10px" }}>
        <a href="/" style={{ color: "#fff", margin: "0 10px" }}>About</a>
        <a href="/" style={{ color: "#fff", margin: "0 10px" }}>Contact</a>
        <a href="/" style={{ color: "#fff", margin: "0 10px" }}>Privacy Policy</a>
      </div>
    </footer>
  );
}
