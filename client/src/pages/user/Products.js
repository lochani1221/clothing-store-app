import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from "../../context/CartContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Modal state
  const location = useLocation();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/api/products");
        if (selectedCategory) {
          const filtered = data.filter(
            (item) =>
              item.category &&
              item.category.toLowerCase() === selectedCategory.toLowerCase()
          );
          setProducts(filtered);
        } else {
          setProducts(data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  return (
    <Layout>
      <div style={styles.pageContainer}>
        <h2 style={styles.heading}>
          {selectedCategory ? `${selectedCategory} Products` : "All Products"}
        </h2>
        <div style={styles.productsGrid}>
          {products.map((product) => (
            <div key={product._id} style={styles.productCard}>
              <img
                src={`http://localhost:8080${product.photoUrl}`}
                alt={product.name}
                style={styles.productImage}
              />
              <div style={styles.productInfo}>
                <h3 style={styles.productName}>{product.name}</h3>
                <p style={styles.price}>Rs. {product.price.toFixed(2)}</p>
              </div>
              <div style={styles.buttonRow}>
                <button
                  style={{ ...styles.actionButton, ...styles.viewButton }}
                  onClick={() => setSelectedProduct(product)}
                >
                  View
                </button>
                <button
                  style={{ ...styles.actionButton, ...styles.shopNowButton }}
                  onClick={() => navigate(`/user/shop/${product._id}`)}
                >
                  Shop Now
                </button>
                <button
                  style={{ ...styles.actionButton, ...styles.addToCartButton }}
                  onClick={() => {
                    addToCart(product);
                    navigate("/user/cart");
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div style={styles.modalOverlay} onClick={() => setSelectedProduct(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeButton} onClick={() => setSelectedProduct(null)}>
              &times;
            </button>
            <h2 style={styles.modalTitle}>{selectedProduct.name}</h2>
            <img
              src={`http://localhost:8080${selectedProduct.photoUrl}`}
              alt={selectedProduct.name}
              style={styles.modalImage}
            />
            <p style={styles.modalDescription}>{selectedProduct.description}</p>
          </div>
        </div>
      )}
    </Layout>
  );
};

const styles = {
  pageContainer: {
    maxWidth: "1100px",
    margin: "2rem auto",
    padding: "1rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
  },
  heading: {
    fontSize: "2.2rem",
    marginBottom: "2rem",
    fontWeight: "700",
    textAlign: "center",
    color: "#222",
  },
  productsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: "2.5rem",
  },
  productCard: {
    borderRadius: "16px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
    overflow: "hidden",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  productImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderTopLeftRadius: "16px",
    borderTopRightRadius: "16px",
  },
  productInfo: {
    padding: "1rem 1.2rem",
    flexGrow: 1,
  },
  productName: {
    margin: "0 0 0.6rem 0",
    fontSize: "1.25rem",
    fontWeight: "700",
    color: "#1a1a1a",
  },
  price: {
    fontSize: "1.15rem",
    fontWeight: "700",
    color: "#ff6f61",
  },
  buttonRow: {
    display: "flex",
    gap: "0.75rem",
    padding: "1rem 1.2rem",
  },
  actionButton: {
    flex: 1,
    padding: "0.65rem 0",
    borderRadius: "25px",
    fontWeight: "600",
    fontSize: "1rem",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease, color 0.3s ease",
  },
  viewButton: {
    backgroundColor: "#2c3e50",
    color: "white",
  },
  shopNowButton: {
    backgroundColor: "#2c3e50",
    color: "white",
  },
  addToCartButton: {
    backgroundColor: "#2c3e50",
    color: "white",
  },

  // Modal Styles
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "30px",
    maxWidth: "500px",
    width: "90%",
    boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
    position: "relative",
    animation: "fadeIn 0.3s ease-in-out",
  },
  closeButton: {
    position: "absolute",
    top: "12px",
    right: "16px",
    background: "transparent",
    border: "none",
    fontSize: "1.8rem",
    cursor: "pointer",
    color: "#333",
  },
  modalTitle: {
    fontSize: "1.6rem",
    marginBottom: "1rem",
    color: "#0d6efd",
    textAlign: "center",
  },
  modalImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "1rem",
  },
  modalDescription: {
    fontSize: "1rem",
    color: "#444",
    textAlign: "justify",
    lineHeight: "1.5",
  },
};

export default Products;
