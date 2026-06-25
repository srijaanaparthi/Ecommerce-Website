import { Link } from "react-router-dom";
import "./Navbar.css";

function Layout() {
  return (
    <header className="navbar">
      <div className="logo">
        <h2>🛍️ ShopEase</h2>
      </div>

      <nav className="nav-links">
        <Link to="/products" className="l">
          Home
        </Link>

        <Link to="/LandingPage" className="l">
          About
        </Link>

        <Link to="/CheckOut" className="l">
          details
        </Link>

        <Link to="/" className="login-btn">
          LogOut
        </Link>
      </nav>
    </header>
  );
}

export default Layout;