import {useEffect, useState} from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";
import "./navbar.css";
import {FaDoorOpen, FaFingerprint, FaRegEdit} from "react-icons/fa";
import {useAuth} from "../../utils/AuthProvider.jsx";


export default function Navbar({darkMode}) {

    const [menuOpen, setMenuOpen] = useState(false);
    const logo = darkMode ? "/images/logo-lang-dunkel.png" : "/images/logo-lang-weiss.png";
    const navbarClass = darkMode ? "menu-container dark-mode" : "menu-container light-mode";
    const linkClass = darkMode ? "link dark-mode" : "link light-mode";
    const { token: authToken, setToken} = useAuth();
    const [token, setLocalToken] = useState(authToken);
    const navigate = useNavigate();

    useEffect(() => {
        const cookie = document.cookie
            .split('; ')
            .find(row => row.startsWith('token='))

            if (cookie) {
                const token = cookie.split('=')[1];
                setToken(token);
            }
    }, []);

    useEffect(() => {
        setLocalToken(authToken);
    }, [authToken]);

    const handleLogoClick = (event) => {
        event.preventDefault();
        token ? navigate('/home') : navigate('/');
    }

    const handleLogout = () => {
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        setToken(null);
        navigate('/');
    }

    return (
        <nav className={navbarClass}>
            <a href="/" onClick={handleLogoClick} className="logo-link">
                <img src={logo} alt="Logo" className="img"/>
            </a>
            <div
                onClick={() => {
                    setMenuOpen(true)
                }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className="menu">

                {token ? (
                    <div className="links-container">
                        <li className="item">
                            <NavLink to="/addtodo" className={linkClass}>
                                <FaFingerprint className="icon"/>
                                <div className="text">To Do erstellen</div>
                            </NavLink>
                        </li>
                        <li className="item">
                            <NavLink to="/edittodo" className={linkClass}>
                                <FaRegEdit className="icon"/>
                                <div className="text">To Dos</div>
                            </NavLink>
                        </li>
                        <li className="item">
                            <a href="/" onClick={handleLogout} className={linkClass}>
                                <FaDoorOpen className="icon"/>
                                <div className="text">Logout</div>
                            </a>
                        </li>
                    </div>
                ) : (
                    <div className="links-container">
                        <li className="item">
                            <NavLink to="/login" className={linkClass}>
                                <FaFingerprint className="icon"/>
                                <div className="text">Login</div>
                            </NavLink>
                        </li>
                        <li className="item">
                            <NavLink to="/register" className={linkClass}>
                                <FaRegEdit className="icon"/>
                                <div className="text">Registrieren</div>
                            </NavLink>
                        </li>
                    </div>
                )}
            </ul>
        </nav>
    );
}