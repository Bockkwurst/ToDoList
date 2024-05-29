import React, {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import StartPage from "./pages/StartPage.jsx";
import ToggleSwitch from "./components/toggle/ToggleSwitch.jsx";

export function App() {
    const [toggled, setToggled] = useState(false);

    const handleClick = () => {
        setToggled((s) => !s);
    };

    return (
        <BrowserRouter>
            <div>
                <ToggleSwitch toggled={toggled} onClick={handleClick}/>
                <Routes>
                    <Route path="/" element={<StartPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;