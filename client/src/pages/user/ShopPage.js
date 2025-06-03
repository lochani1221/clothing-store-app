import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import { useCart } from '../../context/CartContext';

const ShopPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8080/api/products/${id}`);
        setProduct(data);
      } catch (error) {
        console.error("Error loading product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <Layout>
      <div style={styles.container}>
        <img
          src={`http://localhost:8080${product.photoUrl}`}
          alt={product.name}
          style={styles.image}
        />
        <div style={styles.details}>
          <h2 style={styles.name}>{product.name}</h2>
          <p style={styles.description}>{product.description}</p>
          <p style={styles.price}>Rs. {product.price.toFixed(2)}</p>
          <button
            style={styles.cartButton}
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Layout>
  );
};

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '40px auto',
    display: 'flex',
    gap: '40px',
    padding: '20px',
    background: '#fff',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
  },
  image: {
    width: '400px',
    height: 'auto',
    borderRadius: '10px',
    objectFit: 'cover',
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: '20px',
    lineHeight: '1.6',
  },
  price: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#ff6f61',
    marginBottom: '20px',
  },
  cartButton: {
    padding: '12px 30px',
    fontSize: '1rem',
    background: '#2c3e50',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
};

export default ShopPage;
