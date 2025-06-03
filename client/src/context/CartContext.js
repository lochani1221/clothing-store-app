// src/context/CartContext.js
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

const addToCart = (product) => {
  setCartItems((prevItems) => {
    const existing = prevItems.find(item => item._id === product._id);
    if (existing) {
      return prevItems.map(item =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }
    return [...prevItems, { ...product, quantity: 1 }];
  });
};

const updateQuantity = (id, newQty) => {
  if (newQty < 1) return;
  setCartItems(items =>
    items.map(item =>
      item._id === id ? { ...item, quantity: newQty } : item
    )
  );
};

const removeItem = (id) => {
  setCartItems(items => items.filter(item => item._id !== id));
};

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
