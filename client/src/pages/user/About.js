import React from "react";
import Layout from '../../components/Layout/Layout';

const features = [
  {
    icon: "🚚",
    title: "Free Shipping",
    description: "Enjoy free shipping on all orders over $50, delivered fast and safely to your doorstep.",
  },
  {
    icon: "🔄",
    title: "Easy Returns",
    description: "Not satisfied? Return your purchase hassle-free within 30 days for a full refund.",
  },
  {
    icon: "👗",
    title: "Trendy Collections",
    description: "Stay ahead with the latest styles curated by our expert fashion team.",
  },
  {
    icon: "💳",
    title: "Secure Payments",
    description: "Shop confidently with our safe and encrypted payment options.",
  },
];

const About = () => {
  return (
    <Layout>
      <div style={{ padding: "4rem 1rem", maxWidth: "900px", margin: "0 auto", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: "#333" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "center" }}>
          {/* Image Section */}
          <div style={{ flex: "1 1 300px", minWidth: "280px", borderRadius: "16px", overflow: "hidden", boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}>
            <img
              src="/images/about.jpeg"
              alt="About Us"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Text Section */}
          <div style={{ flex: "1 1 400px" }}>
            <h2 style={{ fontWeight: "700", fontSize: "2.8rem", marginBottom: "1rem" }}>About Our Store</h2>
            <p style={{ fontSize: "1.15rem", lineHeight: 1.7, marginBottom: "1rem" }}>
              Welcome to <strong>[Your Store Name]</strong> — your go-to destination for stylish, high-quality clothing for every occasion. We believe fashion is an expression of your unique personality, and we strive to bring you collections that are both trendy and timeless.
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.6, color: "#555" }}>
              From casual wear to elegant dresses, we curate every piece with care and a commitment to sustainability. Experience shopping that feels personal, inspiring, and effortless.
            </p>
            <button
              style={{
                marginTop: "1.5rem",
                padding: "0.75rem 2rem",
                fontSize: "1.1rem",
                borderRadius: "30px",
                border: "2px solid #333",
                backgroundColor: "transparent",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontWeight: "600",
                color: "#333",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#333";
                e.target.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#333";
              }}
            >
              Shop Now
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div style={{ marginTop: "4rem" }}>
          <h3 style={{ fontSize: "2rem", fontWeight: "700", textAlign: "center", marginBottom: "2rem" }}>
            Why Shop With Us?
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", gap: "2rem" }}>
            {features.map(({ icon, title, description }, idx) => (
              <div
                key={idx}
                style={{
                  flex: "1 1 220px",
                  padding: "1.5rem",
                  borderRadius: "12px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                  textAlign: "center",
                  color: "#222",
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{icon}</div>
                <h4 style={{ fontWeight: "700", fontSize: "1.3rem", marginBottom: "0.75rem" }}>{title}</h4>
                <p style={{ fontSize: "1rem", color: "#555", lineHeight: 1.5 }}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
