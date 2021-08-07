import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar_logo">
                <h2>MERN Shopping Cart</h2>
            </div>

            {/* links */}
            <ul className="navbar_links">
                <li>
                    <Link to="/cart" className="cart__link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                          cart
                          <span className="cartlogo_badge">0</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                </li>
            </ul>

            {/* hamburger menu */}
            <div className="hamburger_menu">
                <div></div>
                <div></div>
                <div></div>
            </div>

        </nav>
    )
}

export default Navbar