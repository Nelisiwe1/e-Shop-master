// Sidebar.jsx
import { useLocation, NavLink } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const page = location.pathname;

  return (
    <nav className="w-1/5 bg-gray-100 p-4 h-screen">
      <ul className="space-y-4">
        <li>
          <NavLink
            exact
            to="/"
            className={`flex items-center ${page === "/" ? "text-blue-600" : ""}`}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/customer_orders"
            className={`flex items-center ${page === "/customer_orders" ? "text-blue-600" : ""}`}
          >
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={`flex items-center ${page === "/products" ? "text-blue-600" : ""}`}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/brands"
            className={`flex items-center ${page === "/brands" ? "text-blue-600" : ""}`}
          >
            Brands
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories"
            className={`flex items-center ${page === "/categories" ? "text-blue-600" : ""}`}
          >
            Categories
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/customers"
            className={`flex items-center ${page === "/customers" ? "text-blue-600" : ""}`}
          >
            Customers
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
