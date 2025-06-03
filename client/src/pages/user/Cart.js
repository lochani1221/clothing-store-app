import React from "react";
import Layout from '../../components/Layout/Layout';
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { cartItems, updateQuantity, removeItem } = useCart();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Layout>
      <div style={styles.pageContainer}>
        <h2 style={styles.heading}>Your Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p style={styles.emptyCart}>Your cart is empty.</p>
        ) : (
          <>
            <div style={styles.cartItems}>
              {cartItems.map((item) => (
                <div key={item._id} style={styles.cartItem}>
              <img
                  src={item.image || "/images/default.jpg"}
                  alt={item.name}
                  style={styles.productImage}
                />
                  <div style={styles.productDetails}>
                    <h3 style={styles.productName}>{item.name}</h3>
                    <p style={styles.price}>${item.price.toFixed(2)}</p>
                    <div style={styles.quantityControl}>
                      <button
                        style={styles.qtyBtn}
                        onClick={() => updateQuantity(item._id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item._id, Number(e.target.value))
                        }
                        style={styles.qtyInput}
                      />
                      <button
                        style={styles.qtyBtn}
                        onClick={() => updateQuantity(item._id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <p style={styles.subtotal}>
                      Subtotal: ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(item._id)}
                    style={styles.removeBtn}
                    aria-label={`Remove ${item.name}`}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>

            <div style={styles.summary}>
              <h3 style={styles.summaryHeading}>Order Summary</h3>
              <p style={styles.summaryText}>
                Total ({cartItems.length} items):{" "}
                <strong>${totalPrice.toFixed(2)}</strong>
              </p>
              <button style={styles.checkoutBtn}>Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};


const styles = {
  pageContainer: {
    maxWidth: "900px",
    margin: "3rem auto",
    padding: "2rem 2.5rem",
    backgroundColor: "#f0f6ff", // soft background like Register page container
    borderRadius: "20px",
    boxShadow: "0 15px 40px rgba(0, 119, 204, 0.15)", // subtle blue-ish shadow
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#222",
  },
  heading: {
    fontSize: "2.4rem",
    marginBottom: "2rem",
    textAlign: "center",
    color: "#0077cc", // match Register page title color
    fontWeight: "700",
    letterSpacing: "1px",
  },
  emptyCart: {
    textAlign: "center",
    fontSize: "1.3rem",
    color: "#666",
    fontStyle: "italic",
  },
  cartItems: {
    display: "flex",
    flexDirection: "column",
    gap: "1.8rem",
  },
  cartItem: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #d1e3f8",
    borderRadius: "16px",
    padding: "1.4rem",
    position: "relative",
    gap: "1.2rem",
    backgroundColor: "#fff",
    boxShadow: "0 5px 15px rgba(0, 119, 204, 0.1)",
    transition: "transform 0.3s ease",
    cursor: "default",
  },
  cartItemHover: {
    transform: "scale(1.02)",
  },
  productImage: {
    width: "140px",
    height: "140px",
    objectFit: "cover",
    borderRadius: "16px",
    boxShadow: "0 5px 15px rgba(0, 119, 204, 0.15)",
    border: "1.5px solid #0077cc",
  },
  productDetails: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
  },
  productName: {
    margin: "0 0 0.6rem 0",
    fontSize: "1.4rem",
    color: "#0077cc",
    fontWeight: "700",
  },
  price: {
    margin: "0 0 1rem 0",
    color: "#0056b3",
    fontWeight: "700",
    fontSize: "1.15rem",
  },
  quantityControl: {
    display: "flex",
    alignItems: "center",
    gap: "0.7rem",
    marginBottom: "0.8rem",
  },
  qtyBtn: {
    width: "36px",
    height: "36px",
    borderRadius: "10px",
    border: "1.5px solid #0077cc",
    backgroundColor: "#e6f0ff",
    color: "#0056b3",
    cursor: "pointer",
    fontSize: "1.4rem",
    fontWeight: "700",
    userSelect: "none",
    transition: "background-color 0.3s ease",
  },
  qtyBtnDisabled: {
    backgroundColor: "#cbd7e9",
    color: "#a0aabf",
    cursor: "not-allowed",
  },
  qtyInput: {
    width: "60px",
    textAlign: "center",
    padding: "0.4rem",
    borderRadius: "10px",
    border: "1.5px solid #0077cc",
    fontSize: "1.1rem",
    fontWeight: "600",
    color: "#0056b3",
  },
  subtotal: {
    fontWeight: "700",
    color: "#0077cc",
    fontSize: "1.1rem",
  },
  removeBtn: {
    position: "absolute",
    top: "12px",
    right: "12px",
    border: "none",
    background: "none",
    fontSize: "2rem",
    color: "#e74c3c",
    cursor: "pointer",
    userSelect: "none",
    transition: "color 0.3s ease",
  },
  removeBtnHover: {
    color: "#c0392b",
  },
  summary: {
    marginTop: "3rem",
    padding: "1.5rem 2rem",
    borderTop: "3px solid #0077cc",
    backgroundColor: "#e6f0ff",
    borderRadius: "20px",
    textAlign: "right",
    boxShadow: "0 8px 30px rgba(0, 119, 204, 0.12)",
  },
  summaryHeading: {
    margin: "0 0 1.5rem 0",
    fontSize: "1.8rem",
    fontWeight: "800",
    color: "#0056b3",
    letterSpacing: "1.2px",
  },
  summaryText: {
    fontSize: "1.3rem",
    fontWeight: "700",
    marginBottom: "2rem",
    color: "#0077cc",
  },
  checkoutBtn: {
    background: "linear-gradient(to right, #007bff, #0056b3)",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    padding: "1rem 3rem",
    fontSize: "1.3rem",
    cursor: "pointer",
    fontWeight: "700",
    boxShadow: "0 6px 18px rgba(0, 123, 255, 0.5)",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
  },
  checkoutBtnHover: {
    background: "linear-gradient(to right, #0056b3, #003f7f)",
    boxShadow: "0 8px 25px rgba(0, 86, 179, 0.8)",
  },
};

export default Cart;
