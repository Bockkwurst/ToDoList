import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import StartPage from "./pages/startpage/StartPage.jsx";
import ToggleSwitch from "./components/toggle/ToggleSwitch.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import RegisterPage from "./pages/registerpage/RegisterPage.jsx";
import LoginPage from "./pages/loginpage/LoginPage.jsx";
import AuthProvider from "./utils/AuthProvider.jsx";
import HomePage from "./pages/homepage/HomePage.jsx";

export function App() {
    const [toggled, setToggled] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [darkMode]);

    const handleClick = () => {
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <AuthProvider>
            <BrowserRouter>
                <div>
                    <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
                    <ToggleSwitch toggled={darkMode} onClick={handleClick}/>
                    <Routes>
                        <Route path="/" element={<StartPage darkMode={darkMode} setDarkMode={setDarkMode}/>}/>
                        <Route path="/register"
                               element={<RegisterPage darkMode={darkMode} setDarkMode={setDarkMode}/>}/>
                        <Route path="/login" element={<LoginPage darkMode={darkMode} setDarkMode={setDarkMode}/>}/>
                        <Route path="/home" element={<HomePage darkMode={darkMode} setDarkMode={setDarkMode}/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;