import { Link } from "react-router";
import { logoURL } from "../utils/constants";
import logoImg from '../../src/food2.png'


const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="header-logo"
         src = "https://ik.imagekit.io/q06kuqs4s/food.png"
         alt ="food Logo"
         />
      </div>

      <div className="search-bar">
        <input placeholder="Search Restaurants..." />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About Us</Link>
          </li>

          <li>
            <Link to="/contact">Contact Us</Link>
          </li>

          <li>
            <Link to="/cart">Cart</Link>
          </li>

          
        </ul>
      </div>
    </div>
  );
};

export default Header;
