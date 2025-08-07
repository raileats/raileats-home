import React from "react";

function OrderHistory() {
  const orders = [
    { id: 1, item: "Veg Thali", date: "2025-08-01", amount: 150 },
    { id: 2, item: "Paneer Biryani", date: "2025-08-05", amount: 200 },
    { id: 3, item: "Masala Dosa", date: "2025-08-07", amount: 120 }
  ];

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {orders.map((order) => (
        <li
          key={order.id}
          style={{
            padding: "10px",
            borderBottom: "1px solid #ccc",
            backgroundColor: "white",
            marginBottom: "5px"
          }}
        >
          <strong>{order.item}</strong> — ₹{order.amount} <br />
          <small>{order.date}</small>
        </li>
      ))}
    </ul>
  );
}

export default OrderHistory;
