import React from "react";
import { useNavigate } from "react-router-dom";

const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>Welcome to StyleHub</h1>
        <p style={styles.subtitle}>
          Discover the latest trends in fashion and upgrade your wardrobe today.
        </p>
        <button
          style={styles.getStartedBtn}
          onClick={() => navigate("/login")}
          aria-label="Get Started"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    backgroundImage:
      'url("https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1470&q=80")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Poppins', sans-serif",
    color: "#fff",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    padding: "3rem 4rem",
    borderRadius: "12px",
    textAlign: "center",
    maxWidth: "500px",
    animation: "fadeInUp 1.2s ease forwards",
  },
  title: {
    fontSize: "3.5rem",
    fontWeight: "700",
    marginBottom: "1rem",
    letterSpacing: "2px",
  },
  subtitle: {
    fontSize: "1.3rem",
    marginBottom: "2.5rem",
    lineHeight: "1.5",
  },
  getStartedBtn: {
    fontSize: "1.2rem",
    padding: "0.75rem 3rem",
    borderRadius: "40px",
    border: "none",
    backgroundColor: "#ff6f61", // coral
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 6px 12px rgba(255,111,97,0.6)",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  },
};

// Adding simple CSS keyframe animations via global styles
const styleSheet = document.styleSheets[0];
const keyframes = `
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default GetStarted;
