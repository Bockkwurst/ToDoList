import React from "react";
import './loginpage.css'

import LoginForm from "../../components/loginForm/LoginForm.jsx";

function LoginPage({darkMode, setDarkMode}) {

    return (
        <LoginForm darkMode={darkMode} setDarkMode={setDarkMode}/>
    )
}

export default LoginPage;