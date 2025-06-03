import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminLayout from "./AdminLayout";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [image, setImage] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editCategoryId, setEditCategoryId] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/categories");
      setCategories(res.data);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!categoryId || !categoryName) return;

    const formData = new FormData();
    formData.append("category_id", categoryId);
    formData.append("category_name", categoryName);
    if (image) {
      formData.append("image", image);
    }

    try {
      if (editMode) {
        await axios.put(`http://localhost:8080/api/categories/${editCategoryId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } else {
        await axios.post("http://localhost:8080/api/categories/add", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }
      resetForm();
      fetchCategories();
    } catch (error) {
      console.error("Failed to submit category:", error);
    }
  };

  const handleEdit = (cat) => {
    setEditMode(true);
    setEditCategoryId(cat._id);
    setCategoryId(cat.category_id);
    setCategoryName(cat.category_name);
    setImage(null); // Clear image on edit
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/categories/${id}`);
      fetchCategories();
    } catch (error) {
      console.error("Failed to delete category:", error);
    }
  };

  const resetForm = () => {
    setCategoryId("");
    setCategoryName("");
    setImage(null);
    setEditMode(false);
    setEditCategoryId(null);
  };

  return (
    <AdminLayout>
      <div className="container p-4">
        <h2 className="text-center mb-4">Manage Categories</h2>
        <form onSubmit={handleSubmit} className="mb-4" encType="multipart/form-data">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Category ID"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Category Name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          {image && (
            <div className="mb-3">
              <img
                src={URL.createObjectURL(image)}
                alt="Preview"
                style={{ width: "150px", height: "auto", borderRadius: "10px" }}
              />
            </div>
          )}
          <button className="btn btn-primary me-2" type="submit">
            {editMode ? "Update Category" : "Add Category"}
          </button>
          {editMode && (
            <button className="btn btn-secondary" onClick={resetForm} type="button">
              Cancel
            </button>
          )}
        </form>

        <ul className="list-group">
          {categories.map((cat) => (
            <li key={cat._id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>ID:</strong> {cat.category_id} &nbsp; | &nbsp;
                <strong>Name:</strong> {cat.category_name}
                {cat.image && (
                  <>
                    <br />
                    <img
                      src={`http://localhost:8080/uploads/${cat.image}`}
                      alt={cat.category_name}
                      style={{ width: "100px", marginTop: "5px", borderRadius: "5px" }}
                    />
                  </>
                )}
              </div>
              <div>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(cat)}>
                  Edit
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(cat._id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </AdminLayout>
  );
};

export default Categories;
