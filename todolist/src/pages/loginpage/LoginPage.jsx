import React from "react";
import LoginForm from "../../components/loginForm/LoginForm.jsx";

function LoginPage({darkMode, setDarkMode}) {

    return (
        <LoginForm darkMode={darkMode} setDarkMode={setDarkMode}/>
    )
}

export default LoginPage;