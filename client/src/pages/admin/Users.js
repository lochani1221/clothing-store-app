import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../admin/AdminLayout";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" });
  const [editingUserId, setEditingUserId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get("/api/users");
    setUsers(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    const res = await axios.post("/api/users", { ...form, password: "123456" }); // default password
    setUsers([...users, res.data]);
    setForm({ name: "", email: "", phone: "", address: "" });
  };

  const handleUpdate = async () => {
    const res = await axios.put(`/api/users/${editingUserId}`, form);
    setUsers(users.map((u) => (u._id === editingUserId ? res.data : u)));
    setForm({ name: "", email: "", phone: "", address: "" });
    setEditingUserId(null);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/users/${id}`);
    setUsers(users.filter((u) => u._id !== id));
  };

  const startEdit = (user) => {
    setForm(user);
    setEditingUserId(user._id);
  };

  return (
    <AdminLayout>
      <div className="container">
        <h2 className="text-center my-4">Manage Users</h2>

        <div className="mb-3">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="form-control mb-2" />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="form-control mb-2" />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="form-control mb-2" />
          <input name="address" value={form.address} onChange={handleChange} placeholder="Address" className="form-control mb-2" />
          {editingUserId ? (
            <button className="btn btn-success" onClick={handleUpdate}>Update User</button>
          ) : (
            <button className="btn btn-primary" onClick={handleAdd}>Add User</button>
          )}
        </div>

        <ul className="list-group">
          {users.map((u) => (
            <li key={u._id} className="list-group-item d-flex justify-content-between align-items-center">
              {u.name} | {u.email} | {u.phone} | {u.address}
              <div>
                <button className="btn btn-warning btn-sm me-2" onClick={() => startEdit(u)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(u._id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </AdminLayout>
  );
};

export default Users;
