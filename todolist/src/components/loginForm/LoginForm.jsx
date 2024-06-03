import React, {useState, useEffect} from "react";
import './loginform.css'
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import DefaultButton from "../../components/defaultButton/DefaultButton.jsx";
import { FaEye } from "react-icons/fa";

const LoginForm = ({darkMode}) => {

    const loginPageContainerClass = darkMode ? "login-page-container dark-mode" : "login-page-container light-mode";
    const title1Class = darkMode ? "title-1 dark-mode" : "title-1 light-mode";
    const title2Class = darkMode ? "title-2 dark-mode" : "title-2 light-mode";
    const title3Class = darkMode ? "title-3 dark-mode" : "title-3 light-mode";
    const logoSrc = darkMode ? "/images/logo-hoch-weiss.png" : "/images/logo-hoch-dunkel.png";

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={loginPageContainerClass}>
            <div className="title-container">
                <img src={logoSrc} alt="logo" className="logo-form"/>
            </div>
            <div className="form-container">
                <form>
                    <label className="label">Benutzername:</label>
                    <input type="text" placeholder="Benutzername" className="input"/>
                    <label className="label">Passwort:</label>
                    <input type={showPassword ? "text" : "password"} placeholder="Passwort" className="input"/>
                    <button type="button" onClick={toggleShowPassword}>
                        {showPassword ? <FaEye/> : <FaEye/>}
                    </button>
                </form>
            </div>
            <div className="button-container">
                <Link to="/home">
                    <DefaultButton buttonText="Login"/>
                </Link>
            </div>
        </div>
    )
}

export default LoginForm;