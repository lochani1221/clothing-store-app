import React from "react";
import Layout from '../../components/Layout/Layout';
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  // CSS Styles as JS objects
  const styles = {
    container: {
      display: "flex",
      flexWrap: "wrap",
      padding: "3rem 2rem",
      gap: "2rem",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: "100%",
      maxWidth: "500px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      transition: "transform 0.3s ease-in-out",
    },
    info: {
      maxWidth: "500px",
    },
    title: {
      fontSize: "2rem",
      fontWeight: "600",
      marginBottom: "1rem",
      color: "#222",
    },
    description: {
      fontSize: "1rem",
      color: "#555",
      marginBottom: "2rem",
    },
    details: {
      fontSize: "1.05rem",
      color: "#333",
    },
    item: {
      display: "flex",
      alignItems: "center",
      gap: "0.6rem",
      marginBottom: "1.2rem",
    },
    icon: {
      color: "#ff5a5f",
      fontSize: "1.5rem",
    },
    buttonWrapper: {
      marginTop: "2rem",
    },
    button: {
      padding: "0.8rem 1.5rem",
      fontSize: "1rem",
      backgroundColor: "#ff5a5f",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
  };

  return (
    <Layout>
      <div style={styles.container}>
        {/* Contact Image */}
        <div>
          <img
            src="/images/contactus.jpeg"
            alt="Contact Us"
            style={styles.image}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>

        {/* Contact Info */}
        <div style={styles.info}>
          <h2 style={styles.title}>Get in Touch</h2>
          <p style={styles.description}>
            Have questions about our products or need help with your order?
            We're here for you 24/7!
          </p>

          <div style={styles.details}>
            <div style={styles.item}>
              <BiMailSend style={styles.icon} />
              <span>help@ecommerceapp.com</span>
            </div>
            <div style={styles.item}>
              <BiPhoneCall style={styles.icon} />
              <span>012-3456789</span>
            </div>
            <div style={styles.item}>
              <BiSupport style={styles.icon} />
              <span>1800-0000-0000 (toll free)</span>
            </div>
          </div>

          {/* Contact Button */}
          <div style={styles.buttonWrapper}>
            <button
              style={styles.button}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e04b50")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ff5a5f")}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
