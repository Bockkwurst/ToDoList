import React from "react";
import './pagesCss/startpage.css'
import CustomButton from "../components/CustomButton.jsx";

function StartPage() {
    return (
        <div className="startPageContainer">
            <CustomButton/>
            <h1>Start Page</h1>
        </div>
    )
}
export default StartPage;