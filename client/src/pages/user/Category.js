import Layout from '../../components/Layout/Layout';
import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/api/categories");
        setCategories(data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryName) => {
    navigate(`/user/Products?category=${encodeURIComponent(categoryName)}`);
  };

  return (
    <Layout>
      <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.title}>Explore Clothing Categories</h1>
          <div style={styles.grid}>
            {categories.map((category) => (
              <div
                key={category.category_id}
                style={styles.card}
                onClick={() => handleCategoryClick(category.category_name)}
              >
                <img
                  src={
                    category.image
                      ? `http://localhost:8080/uploads/${category.image}`
                      : "https://via.placeholder.com/200x150?text=No+Image"
                  }
                  alt={category.category_name}
                  style={styles.image}
                />
                <button style={styles.ctaButton}>Shop Now</button>
                <h3 style={styles.name}>{category.category_name}</h3>
              </div>
            ))}
            <div style={styles.card} onClick={() => navigate("/user/Products")}>
              <img
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
                alt="All"
                style={styles.image}
              />
              <button style={styles.ctaButton}>Shop Now</button>

              <h3 style={styles.name}>All</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const styles = {
  container: {
    background: '#f0f4fa',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    padding: '60px 20px',
    fontFamily: '"Segoe UI", sans-serif',
  },
  content: {
    width: '100%',
    maxWidth: '1200px',
  },
  title: {
    textAlign: 'center',
    fontSize: '2.8rem',
    color: '#0d6efd',
    marginBottom: '50px',
    fontWeight: '700',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '40px',
    justifyItems: 'center',
  },
  card: {
    background: '#fff',
    borderRadius: '20px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
    width: '100%',
    height: '400px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: '220px',
    objectFit: 'cover',
    borderRadius: '14px',
    marginBottom: '20px',
    transition: 'transform 0.3s ease',
  },
  name: {
    fontSize: '1.3rem',
    color: '#0d6efd',
    fontWeight: '600',
    marginTop: '10px',
  },
  ctaButton: {
    backgroundColor: "#ff5a5f",
    border: "none",
    padding: "0.6rem 1.2rem",
    borderRadius: "30px",
    color: "#fff",
    fontSize: "0.95rem",
    fontWeight: "500",
    width: "100%",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
  },
};

// Add

export default CategoryPage;
