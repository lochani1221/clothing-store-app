import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Company Info */}
        <div style={styles.column}>
          <h3 style={styles.title}>HashClothings</h3>
          <p style={styles.text}>
            Bringing you the latest trends in men’s, women’s, and kids’ fashion.
            Quality and style delivered to your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div style={styles.column}>
          <h4 style={styles.subtitle}>Quick Links</h4>
          <ul style={styles.linkList}>
            <li><Link to="/user/about" style={styles.link}>About Us</Link></li>
            <li><Link to="/user/contact" style={styles.link}>Contact</Link></li>
            <li><Link to="/user/policy" style={styles.link}>Privacy Policy</Link></li>
            <li><Link to="/category" style={styles.link}>Shop Categories</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div style={styles.column}>
          <h4 style={styles.subtitle}>Get in Touch</h4>
          <p style={styles.text}>Email: support@hashclothings.com</p>
          <p style={styles.text}>Phone: +1 234 567 890</p>
          <p style={styles.text}>Location: New York, USA</p>
        </div>

        {/* Social Media */}
        <div style={styles.column}>
          <h4 style={styles.subtitle}>Follow Us</h4>
          <div style={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" style={styles.icon}>🌐</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" style={styles.icon}>📸</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" style={styles.icon}>🐦</a>
          </div>
        </div>
      </div>
      <div style={styles.bottomText}>
        &copy; {new Date().getFullYear()} HashClothings. All rights reserved.
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#222",
    color: "#fff",
    padding: "3rem 2rem 1rem",
    marginTop: "4rem",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  column: {
    flex: "1 1 200px",
    margin: "1rem",
  },
  title: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "1.25rem",
    marginBottom: "0.75rem",
    fontWeight: "600",
  },
  text: {
    fontSize: "0.95rem",
    lineHeight: "1.6",
  },
  linkList: {
    listStyle: "none",
    padding: 0,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    display: "block",
    marginBottom: "0.5rem",
    transition: "color 0.3s",
  },
  icon: {
    fontSize: "1.5rem",
    marginRight: "1rem",
    textDecoration: "none",
    color: "#ff5a5f",
    transition: "transform 0.2s",
  },
  socialIcons: {
    marginTop: "0.5rem",
  },
  bottomText: {
    textAlign: "center",
    paddingTop: "1.5rem",
    fontSize: "0.85rem",
    color: "#bbb",
  },
};

export default Footer;
