import './Navbar.css';
import {Link} from 'react-router-dom';


const Navbar = () => {
    return (
        <nav>
            {/* logo */}
            <div className="navbar_logo">
                <h2>MERN Shopping Cart</h2>
            </div>

            {/* links */}
            <ul className="navbar_links">
                <li>
                    <Link to="/cart">
                    </Link>
                </li>
            </ul>

            {/* hamburger menu */}

        </nav>
    )
}

export default Navbar