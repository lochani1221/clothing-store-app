import React from "react";
import AdminLayout from "../admin/AdminLayout";

const ManageOrders = () => {
  const orders = [
    {
      id: "ORD12345",
      customer: "John Doe",
      date: "2025-05-25",
      total: "$120.00",
      status: "Processing",
    },
    {
      id: "ORD12346",
      customer: "Jane Smith",
      date: "2025-05-24",
      total: "$85.50",
      status: "Shipped",
    },
    {
      id: "ORD12347",
      customer: "Michael Johnson",
      date: "2025-05-23",
      total: "$200.00",
      status: "Delivered",
    },
  ];

  return (
     <AdminLayout>
    <div style={styles.container}>
      <h2 style={styles.heading}>Manage Orders</h2>
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Order ID</th>
              <th style={styles.th}>Customer</th>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Total</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} style={styles.tr}>
                <td style={styles.td}>{order.id}</td>
                <td style={styles.td}>{order.customer}</td>
                <td style={styles.td}>{order.date}</td>
                <td style={styles.td}>{order.total}</td>
                <td style={styles.td}>
                  <span style={{ ...styles.badge, ...getStatusStyle(order.status) }}>
                    {order.status}
                  </span>
                </td>
                <td style={styles.td}>
                  <button style={styles.button}>View</button>
                  <button style={{ ...styles.button, backgroundColor: "#dc3545" }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </AdminLayout>
  );
};



const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  tableWrapper: {
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    borderRadius: "8px",
    overflow: "hidden",
  },
  th: {
    padding: "12px 16px",
    textAlign: "left",
    backgroundColor: "#343a40",
    color: "#fff",
    fontWeight: "bold",
  },
  tr: {
    borderBottom: "1px solid #ddd",
  },
  td: {
    padding: "12px 16px",
    color: "#333",
  },
  button: {
    padding: "6px 12px",
    marginRight: "8px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "0.9rem",
  },
  badge: {
    padding: "4px 10px",
    borderRadius: "12px",
    color: "#fff",
    fontSize: "0.85rem",
  },
};

const getStatusStyle = (status) => {
  switch (status) {
    case "Processing":
      return { backgroundColor: "#ffc107" };
    case "Shipped":
      return { backgroundColor: "#17a2b8" };
    case "Delivered":
      return { backgroundColor: "#28a745" };
    default:
      return { backgroundColor: "#6c757d" };
  }
};


export default ManageOrders;
