import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (name && mobile) {
      // Save user data to localStorage
      localStorage.setItem("user", JSON.stringify({ name, mobile, wallet: 500 }));
      navigate("/dashboard");
    } else {
      alert("Please enter your name and mobile number.");
    }
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#FFF3CD", height: "100vh" }}>
      <h2 style={{ color: "#000" }}>Customer Login</h2>
      <form onSubmit={handleLogin} style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
        />
        <input
          type="tel"
          placeholder="Enter Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
            width: "100%"
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
