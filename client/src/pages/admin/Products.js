import React, { useState, useEffect } from "react";
import AdminLayout from "../admin/AdminLayout";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    photo: null,
  });

  // Load products on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/api/products");
        setProducts(data);
      } catch (error) {
        console.error("Failed to load products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", newProduct.name);
    formData.append("price", parseFloat(newProduct.price)); // ensure number
    formData.append("category", newProduct.category);
    formData.append("description", newProduct.description);
    formData.append("photo", newProduct.photo);

    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/products",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Product added successfully!");
      setProducts([...products, data]); // add new product to list
      setNewProduct({
        name: "",
        price: "",
        category: "",
        description: "",
        photo: null,
      });
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product");
    }
  };

  return (
    <AdminLayout>
      <div className="container p-4">
        <h2 className="text-center mb-4">Manage Products</h2>
        <form onSubmit={handleAddProduct} className="mb-4">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
          />
          <input
            type="number"
            className="form-control mb-2"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
          <select
            className="form-select mb-2"
            value={newProduct.category}
            onChange={(e) =>
              setNewProduct({ ...newProduct, category: e.target.value })
            }
          >
            <option value="">Select Category</option>
            <option value="Girls">Girl</option>
            <option value="Kids">Kids</option>
            <option value="Men">Men</option>
            <option value="Party">Party</option>
            <option value="Sports">Sports</option>
          </select>
          <textarea
            className="form-control mb-2"
            placeholder="Description"
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
          />
          <input
            type="file"
            accept="image/*"
            className="mb-3"
            onChange={(e) =>
              setNewProduct({ ...newProduct, photo: e.target.files[0] })
            }
          />
          <button className="btn btn-success" type="submit">
            Add Product
          </button>
        </form>

        <ul className="list-group">
          {products.map((prod) => (
            <li
              key={prod._id} // Use _id if using MongoDB
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{prod.name}</strong> (${prod.price}) - {prod.category}
                <p>{prod.description}</p>
              </div>
              <div>
                {prod.photoUrl && (
                  <img
                    src={`http://localhost:8080${prod.photoUrl}`}
                    alt={prod.name}
                    style={{ width: 60, height: 60, objectFit: "cover" }}
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </AdminLayout>
  );
};

export default Products;
