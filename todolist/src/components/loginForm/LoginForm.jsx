import React, {useState} from "react";
import './loginform.css'
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import DefaultButton from "../../components/defaultButton/DefaultButton.jsx";
import { FaEye, FaEyeSlash} from "react-icons/fa";
import AuthProvider, {useAuth} from "../../utils/AuthProvider.jsx";

const LoginForm = ({darkMode}) => {

    const loginPageContainerClass = darkMode ? "login-page-container dark-mode" : "login-page-container light-mode";
    const logoSrc = darkMode ? "/images/logo-hoch-weiss.png" : "/images/logo-hoch-dunkel.png";

    const navigate = useNavigate();

    const {setToken} = useAuth();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [buttonClicked, setButtonClicked] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/user/atuhenticate', {login, password});
            if (response.data && response.data.token){
                setToken(response.data.token);
                navigate('/home', {replace: true});
            }else{
                setError('Login failed');
            }
        }catch (error){
            console.error('Login error:', error);
            setError('Login failed');
        }
    }

    const handleButtonClick = (event) => {
        event.preventDefault();
        handleLogin();
        setButtonClicked(true);
    }

    return (
        <div className={loginPageContainerClass}>
            <div className="title-container">
                <img src={logoSrc} alt="logo" className="logo-form"/>
            </div>
            <div className="form-container">
                <form>
                    <label className="label">Benutzername:</label>
                    <input type="text" placeholder="Benutzername" value={login} onChange={e => setLogin(e.target.value)} className="input"/>
                    <label className="label">Passwort:</label>
                    <input type={showPassword ? "text" : "password"} placeholder="Passwort" value={password} onChange={e => setPassword(e.target.value)} className="input"/>
                    <button type="button" onClick={toggleShowPassword}>
                        {showPassword ? <FaEye/> : <FaEyeSlash/>}
                    </button>
                </form>
            </div>
            <div className="button-container">
                <Link to="/home">
                    <DefaultButton buttonText="Login" onClick={(event) => handleButtonClick(event)}/>
                </Link>
            </div>
            <div className="error-message">
                <label className="error">{error}</label>
            </div>
        </div>
    )
}

export default LoginForm;