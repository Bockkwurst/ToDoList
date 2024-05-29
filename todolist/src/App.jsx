import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CustomButton from "./components/CustomButton.jsx";
import StartPage from "./pages/StartPage.jsx";

export function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<StartPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;