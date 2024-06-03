import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { FaFortAwesomeAlt, FaRegEdit } from "react-icons/fa";


export default function Navbar({darkMode}) {

    const [menuOpen, setMenuOpen] = useState(false);

    const logo = darkMode ? "/images/logo-lang-dunkel.png" : "/images/logo-lang-weiss.png";

    const navbarClass = darkMode ? "menu-container dark-mode" : "menu-container light-mode";

    const linkClass = darkMode ? "link dark-mode" : "link light-mode";

    return (
        <nav className={navbarClass}>
            <Link to="/" className="logo-link">
                <img src={logo} alt="Logo" className="img"/>
            </Link>
            <div
                onClick={() => {
                    setMenuOpen(true)
                }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className="menu">
                <>
                    <li className="item">
                        <NavLink to="/login" className={linkClass}>
                            <FaFortAwesomeAlt className="icon"/>
                            <div className="text">Login</div>
                        </NavLink>
                        <NavLink to="/register" className={linkClass}>
                            <FaRegEdit className="icon"/>
                            <div className="text">Registrieren</div>
                        </NavLink>
                    </li>
                </>
            </ul>
        </nav>
    );
}