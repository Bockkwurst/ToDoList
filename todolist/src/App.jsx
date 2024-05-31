import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import StartPage from "./pages/StartPage.jsx";
import ToggleSwitch from "./components/toggle/ToggleSwitch.jsx";

export function App() {
    const [toggled, setToggled] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode){
            document.body.classList.add("dark-mode");
        }else{
            document.body.classList.remove("dark-mode");
        }
    }, [darkMode]);

    const handleClick = () => {
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <BrowserRouter>
            <div>
                <ToggleSwitch toggled={darkMode} onClick={handleClick}/>
                <Routes>
                    <Route path="/" element={<StartPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;