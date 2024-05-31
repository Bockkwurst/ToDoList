import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import StartPage from "./pages/startpage/StartPage.jsx";
import ToggleSwitch from "./components/toggle/ToggleSwitch.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import RegisterPage from "./pages/registerpage/RegisterPage.jsx";
import LoginPage from "./pages/loginpage/LoginPage.jsx";

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
        <BrowserRouter>
            <div>
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
                <ToggleSwitch toggled={darkMode} onClick={handleClick}/>
                <Routes>
                    <Route path="/" element={<StartPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;