import React from "react";
import './pagesCss/startpage.css'
import DefaultButton from "../components/defaultButton/DefaultButton.jsx";

function StartPage() {
    return (
        <div className="startPageContainer">
            <DefaultButton/>
            <h1>Start Page</h1>
        </div>
    )
}
export default StartPage;