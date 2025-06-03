import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const AdminHeader = () => {
  return (
    <header style={styles.header}>
      <div style={styles.left}>
        <h1 style={styles.title}>Admin Panel</h1>
      </div>

      <div style={styles.right}>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/register" style={styles.link}>Register</Link>
        <div style={styles.profileIcon}>
          <FaUserCircle size={28} title="Profile" />
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#2C3E50",
    color: "white",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    flex: 1,
  },
  title: {
    margin: 0,
    fontSize: "1.5rem",
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "1rem",
    transition: "0.3s",
  },
  profileIcon: {
    cursor: "pointer",
  },
};

export default AdminHeader;
