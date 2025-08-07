import React, { useEffect, useState } from "react";
import OrderHistory from "../components/OrderHistory";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      navigate("/login");
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) return null;

  return (
    <div style={{ padding: "20px", backgroundColor: "#FFF3CD", minHeight: "100vh" }}>
      <h2 style={{ color: "#000" }}>Welcome, {user.name}</h2>
      <p>📱 Mobile: {user.mobile}</p>
      <p>💰 Wallet Balance: ₹{user.wallet}</p>

      <h3 style={{ marginTop: "20px" }}>Your Order History</h3>
      <OrderHistory />

      <button
        onClick={handleLogout}
        style={{
          marginTop: "20px",
          backgroundColor: "black",
          color: "white",
          padding: "10px 20px",
          border: "none",
          cursor: "pointer"
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
