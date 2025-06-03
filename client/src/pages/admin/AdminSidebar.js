import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaTags,
  FaBoxOpen,
  FaUsers,
  FaSignOutAlt,
} from "react-icons/fa";

const AdminSidebar = () => {
  return (
    <aside style={styles.sidebar}>
      <div style={styles.logo}>
        <h2>Admin Panel</h2>
      </div>

      <nav style={styles.nav}>
        <NavLink
          to="/admin/dashboard"
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          <FaTachometerAlt style={styles.icon} />
          Dashboard
        </NavLink>
        <NavLink
          to="/admin/categories"
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          <FaTags style={styles.icon} />
          Categories
        </NavLink>
        <NavLink
          to="/admin/products"
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          <FaBoxOpen style={styles.icon} />
          Products
        </NavLink>
        <NavLink
          to="/admin/users"
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          <FaUsers style={styles.icon} />
          Users
        </NavLink>
        <NavLink
          to="/admin/orders"
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          <FaUsers style={styles.icon} />
          Manage Orders
        </NavLink>
        <div style={{ marginTop: "auto" }}>
          <NavLink
            to="/login"
            style={{ ...styles.link, color: "#ff4d4f" }}
            activeStyle={styles.activeLink}
          >
            <FaSignOutAlt style={styles.icon} />
            Logout
          </NavLink>
        </div>
      </nav>
    </aside>
  );
};

const styles = {
  sidebar: {
    display: "flex",
    flexDirection: "column",
    width: "240px",
    height: "100vh",
    backgroundColor: "#001529",
    color: "#fff",
    padding: "1rem 0",
    position: "fixed",
    top: 0,
    left: 0,
    boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
  },
  logo: {
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "2rem",
    letterSpacing: "1px",
    userSelect: "none",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  link: {
    display: "flex",
    alignItems: "center",
    padding: "0.75rem 2rem",
    color: "#bfbfbf",
    fontSize: "1rem",
    textDecoration: "none",
    transition: "background-color 0.3s ease, color 0.3s ease",
  },
  activeLink: {
    backgroundColor: "#1890ff",
    color: "#fff",
    fontWeight: "bold",
  },
  icon: {
    marginRight: "1rem",
    fontSize: "1.2rem",
  },
};

export default AdminSidebar;
