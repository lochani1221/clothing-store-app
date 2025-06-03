import React from "react";
import Layout from "./../components/Layout/Layout";
import { useNavigate } from "react-router-dom";

const trendingCategories = [
  {
    id: 1,
    name: "Men's Wear",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Women's Wear",
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Kids",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=400&q=80",
  },
];

const featuredClothing = [
  {
    id: 1,
    name: "Casual Denim Jacket",
    price: "$89.99",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Summer Floral Dress",
    price: "$59.99",
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Classic White Shirt",
    price: "$39.99",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Kids Hoodie",
    price: "$29.99",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/category");
  };

  return (
    <Layout>
      <div style={styles.container}>
        {/* Hero Section */}
        <section style={styles.hero}>
          <div style={styles.heroText}>
            <h1 style={styles.heroTitle}>Refresh Your Wardrobe</h1>
            <p style={styles.heroSubtitle}>
              Trendy, comfortable clothing for men, women, and kids.
            </p>
            <button style={styles.ctaButton} onClick={handleShopNow}>
              Shop Now
            </button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=80"
            alt="Clothing Hero"
            style={styles.heroImage}
          />
        </section>

        {/* Trending Categories */}
        <section>
          <h2 style={styles.sectionTitle}>Trending Categories</h2>
          <div style={styles.categoriesGrid}>
            {trendingCategories.map((cat) => (
              <div key={cat.id} style={styles.categoryCard}>
                <img src={cat.image} alt={cat.name} style={styles.categoryImage} />
                <h3 style={styles.categoryName}>{cat.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Clothing */}
        <section>
          <h2 style={styles.sectionTitle}>Featured Clothing</h2>
          <div style={styles.productsGrid}>
            {featuredClothing.map((item) => (
              <div key={item.id} style={styles.productCard}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={styles.productImage}
                />
                <h3 style={styles.productName}>{item.name}</h3>
                <p style={styles.productPrice}>{item.price}</p>
                <button style={styles.productButton}>Add to Cart</button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

const styles = {
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "2rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
  },
  hero: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "linear-gradient(90deg, #2c3e50, #3498db)",
    color: "white",
    borderRadius: "16px",
    padding: "3rem",
    marginBottom: "4rem",
    flexWrap: "wrap",
    gap: "2rem",
  },
  heroText: {
    flex: "1 1 400px",
  },
  heroTitle: {
    fontSize: "3rem",
    marginBottom: "1rem",
    fontWeight: "700",
  },
  heroSubtitle: {
    fontSize: "1.25rem",
    marginBottom: "2rem",
    opacity: 0.9,
  },
  ctaButton: {
    backgroundColor: "#f1c40f",
    border: "none",
    padding: "1rem 2.5rem",
    borderRadius: "50px",
    color: "#2c3e50",
    fontSize: "1.1rem",
    cursor: "pointer",
    fontWeight: "600",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  },
  heroImage: {
    flex: "1 1 400px",
    maxWidth: "100%",
    borderRadius: "16px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
  },

  sectionTitle: {
    fontSize: "2.2rem",
    marginBottom: "2rem",
    textAlign: "center",
    color: "#2c3e50",
    fontWeight: "700",
  },

  categoriesGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    flexWrap: "wrap",
    marginBottom: "4rem",
  },
  categoryCard: {
    width: "220px",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    cursor: "pointer",
    textAlign: "center",
    backgroundColor: "#fff",
    transition: "transform 0.3s ease",
  },
  categoryImage: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
  },
  categoryName: {
    padding: "1rem",
    fontWeight: "600",
    fontSize: "1.1rem",
    color: "#34495e",
  },

  productsGrid: {
    display: "flex",
    gap: "2rem",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "3rem",
  },
  productCard: {
    backgroundColor: "#fff",
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    width: "260px",
    padding: "1rem",
    textAlign: "center",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  },
  productImage: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "12px",
    marginBottom: "1rem",
  },
  productName: {
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
    color: "#2c3e50",
  },
  productPrice: {
    fontSize: "1rem",
    fontWeight: "600",
    marginBottom: "1rem",
    color: "#ff5a5f",
  },
  productButton: {
    backgroundColor: "#2c3e50",
    border: "none",
    padding: "0.75rem 1.5rem",
    borderRadius: "50px",
    color: "white",
    fontWeight: "600",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};

export default HomePage;
