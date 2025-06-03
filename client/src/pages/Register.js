import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      await axios.post("http://localhost:8080/api/v1/auth/register", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        password: formData.password,
      });

      setSuccess("Registered successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        password: "",
        confirmPassword: "",
      });

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      setError(err.response?.data || "Registration failed");
    }
  };

  return (
    <Layout>
      <div style={styles.wrapper}>
        <div style={styles.card}>
          <div style={styles.left}>
            <img
              src="/images/register.jpg"
              alt="Register"
              style={styles.leftImage}
            />
            <div style={styles.overlay}>
              <h2 style={styles.welcomeTitle}>Join Us!</h2>
              <p style={styles.welcomeText}>
                Create your account and start shopping smarter today.
              </p>
            </div>
          </div>
          <div style={styles.right}>
            <h2 style={styles.heading}>Create Account</h2>
            <form style={styles.form} onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                style={styles.input}
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                style={styles.input}
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                style={styles.input}
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                style={styles.input}
                value={formData.address}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                style={styles.input}
                value={formData.password}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                style={styles.input}
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <button type="submit" style={styles.button}>
                Register
              </button>
              {error && <p style={styles.error}>{error}</p>}
              {success && <p style={styles.success}>{success}</p>}
            </form>

            <p style={styles.footerText}>
              Already have an account?{" "}
              <Link to="/login" style={styles.link}>
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "95vh",
    padding: "40px 20px",
    backgroundImage:
      "linear-gradient(to right, #e0f0ff, #f9fcff)", // soft gradient
  },
  card: {
    display: "flex",
    width: "90%",
    maxWidth: "900px",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  },
  left: {
    flex: 1,
    position: "relative",
    minHeight: "100%",
  },
  leftImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(to bottom right, rgba(13,110,253,0.6), rgba(255,255,255,0.3))",
    color: "#fff",
    padding: "40px 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  welcomeTitle: {
    fontSize: "2rem",
    fontWeight: "700",
  },
  welcomeText: {
    marginTop: "15px",
    fontSize: "1.1rem",
    lineHeight: "1.5",
  },
  right: {
    flex: 1,
    padding: "50px 40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  heading: {
    fontSize: "1.8rem",
    fontWeight: "700",
    color: "#0d6efd",
    marginBottom: "25px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  input: {
    padding: "12px 16px",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "1.5px solid #ddd",
    outline: "none",
    transition: "border-color 0.3s ease",
  },
  button: {
    backgroundColor: "#0d6efd",
    color: "#fff",
    padding: "12px 0",
    borderRadius: "8px",
    border: "none",
    fontWeight: "600",
    fontSize: "1.05rem",
    cursor: "pointer",
  },
  error: {
    color: "#dc3545",
    fontWeight: "600",
    textAlign: "center",
  },
  success: {
    color: "#28a745",
    fontWeight: "600",
    textAlign: "center",
  },
  footerText: {
    marginTop: "30px",
    fontSize: "0.95rem",
    textAlign: "center",
  },
  link: {
    color: "#0d6efd",
    fontWeight: "600",
    textDecoration: "none",
  },
};

export default Register;
