// src/pages/admin/Dashboard.js
import React, { useState } from "react";
import AdminLayout from "../admin/AdminLayout";

const Card = ({ title, number }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        ...(hover ? styles.cardHover : {}),
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h4 style={styles.cardTitle}>{title}</h4>
      <p style={styles.cardNumber}>{number}</p>
    </div>
  );
};

const LinkItem = ({ href, children }) => {
  const [hover, setHover] = useState(false);

  return (
    <li style={styles.linksListItem}>
      <a
        href={href}
        style={{ ...styles.link, ...(hover ? styles.linkHover : {}) }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {children}
      </a>
    </li>
  );
};

const Dashboard = () => {
  return (
    <AdminLayout>
      <div style={styles.container}>
        <h2 style={styles.heading}>Admin Dashboard</h2>

        <div style={styles.cardsContainer}>
          <Card title="Total Products" number="120" />
          <Card title="Total Users" number="350" />
          <Card title="Total Categories" number="10" />
          <Card title="Total Orders" number="85" />
        </div>

        <div style={styles.quickLinks}>
          <h3 style={styles.subHeading}>Quick Links</h3>
          <ul style={styles.linksList}>
            <LinkItem href="/admin/categories">Manage Categories</LinkItem>
            <LinkItem href="/admin/products">Manage Products</LinkItem>
            <LinkItem href="/admin/users">Manage Users</LinkItem>
            <LinkItem href="/admin/orders">Manage Orders</LinkItem>
          </ul>
        </div>
      </div>
    </AdminLayout>
  );
};

const styles = {
  container: {
    padding: "2rem",
    backgroundColor: "#f0f4f8",
    minHeight: "80vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  heading: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "2.5rem",
    color: "#2c3e50",
    fontWeight: "700",
    letterSpacing: "1.2px",
  },
  cardsContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "1.5rem",
    marginBottom: "3rem",
  },
  card: {
    background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
    color: "white",
    padding: "2rem",
    borderRadius: "15px",
    boxShadow: "0 10px 20px rgba(37, 117, 252, 0.3)",
    width: "220px",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "default",
  },
  cardHover: {
    transform: "translateY(-10px)",
    boxShadow: "0 15px 30px rgba(37, 117, 252, 0.6)",
  },
  cardTitle: {
    fontSize: "1.3rem",
    fontWeight: "600",
    marginBottom: "0.8rem",
    letterSpacing: "0.5px",
  },
  cardNumber: {
    fontSize: "2.2rem",
    fontWeight: "700",
  },
  quickLinks: {
    backgroundColor: "#ffffff",
    padding: "2rem",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    margin: "0 auto",
  },
  subHeading: {
    fontSize: "1.8rem",
    marginBottom: "1.5rem",
    textAlign: "center",
    color: "#34495e",
    fontWeight: "700",
  },
  linksList: {
    listStyle: "none",
    padding: 0,
    textAlign: "center",
  },
  linksListItem: {
    marginBottom: "1rem",
  },
  link: {
    color: "#2575fc",
    fontWeight: "600",
    fontSize: "1.1rem",
    textDecoration: "none",
    transition: "color 0.3s ease",
  },
  linkHover: {
    color: "#6a11cb",
  },
};

export default Dashboard;
