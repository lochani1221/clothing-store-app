import { Routes, Route } from "react-router-dom";

// General Pages
import HomePage from "./pages/HomePage";
import About from "./pages/user/About";
import Contact from "./pages/user/Contact";
import Policy from "./pages/user/Policy";
import Category from "./pages/user/Category";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/user/Cart";
import Product from "./pages/user/Products";
import ShopPage from "./pages/user/ShopPage";
import Pagenotfound from "./pages/Pagenotfound";
import { CartProvider } from "./context/CartContext";

// Admin Pages (folder is `admin`, not `Admin`)
import AdminCategories from "./pages/admin/Categories";
import AdminProducts from "./pages/admin/Products";
import AdminUsers from "./pages/admin/Users";
import ManageOrders from "./pages/admin/Orders";
import Dashboard from "./pages/admin/Dashboard";
import GetStarted from "./pages/GetStarted";


function App() {
  return (
    <>
     <CartProvider>
      <Routes>
        
        <Route path="/" element={<GetStarted />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="user/shop/:id" element={<ShopPage />} />
        <Route path="/user/about" element={<About />} />
        <Route path="/user/contact" element={<Contact />} />
        <Route path="/user/policy" element={<Policy />} />
        <Route path="/user/category" element={<Category />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/cart" element={<Cart />} />
       <Route path="/user/Products" element={<Product />} />
        <Route path="*" element={<Pagenotfound />} />
        <Route path="/category" element={<Category />} />


        {/* Admin Routes */}
        <Route path="/admin/categories" element={<AdminCategories />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/orders" element={<ManageOrders />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
      </CartProvider>
    </>
  );
}

export default App;
