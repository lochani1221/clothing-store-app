import React from "react";
import { NavLink, Link } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";

const navStyles = {
  background: "linear-gradient(90deg, #2c3e50, #3498db)",
  padding: "0.75rem 1rem",
};

const brandStyles = {
  color: "#fff",
  fontWeight: "bold",
  fontSize: "1.5rem",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
};

const navLinkStyles = {
  color: "#ecf0f1",
  fontWeight: 500,
  margin: "0 0.5rem",
  transition: "all 0.3s ease-in-out",
  textDecoration: "none",
};

const navLinkHoverStyles = {
  color: "#f1c40f",
  transform: "scale(1.05)",
  textDecoration: "underline",
};

const Header = () => {
  // Optional: hover effect using React state
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/user/category", label: "Category" },
    // { to: "/register", label: "Register" },
    // { to: "/login", label: "Login" },
    { to: "/user/cart", label: "Cart (0)" },
    { to: "/login", label: "Logout" },
  ];

  return (
    <nav className="navbar navbar-expand-lg shadow-sm" style={navStyles}>
      <div className="container-fluid">
        <Link to="/" style={brandStyles}>
          <GiShoppingBag size={28} className="me-2" />
          HASH CLOTHINGS
        </Link>
        <button
          className="navbar-toggler border-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-white" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <NavLink
                  to={item.to}
                  className="nav-link"
                  style={
                    hoveredIndex === index
                      ? { ...navLinkStyles, ...navLinkHoverStyles }
                      : navLinkStyles
                  }
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
