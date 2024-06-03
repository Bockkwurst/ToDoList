import React from "react";
import {Link} from "react-router-dom";
import './startpage.css'
import DefaultButton from "../../components/defaultButton/DefaultButton.jsx";

function StartPage({darkMode}) {

    const startPageContainerClass = darkMode ? "start-page-container dark-mode" : "start-page-container light-mode";
    const title1Class = darkMode ? "title-1 dark-mode" : "title-1 light-mode";
    const title2Class = darkMode ? "title-2 dark-mode" : "title-2 light-mode";
    const title3Class = darkMode ? "title-3 dark-mode" : "title-3 light-mode";
    const logoSrc = darkMode ? "/images/logo-lang-dunkel.png" : "/images/logo-lang-weiss.png";


    return (
        <div className={startPageContainerClass}>
            <div className="title-container">
                <h2 className={title1Class}>Herzlich Willkommen</h2>
                <h4 className={title2Class}>beim</h4>
                <img src={logoSrc} alt="logo" className="logo"/>
                <h2 className={title3Class}>ToDo-Liste</h2>
            </div>
            <div className="button-container">
                <Link to="/login">
                    <DefaultButton buttonText="Login"/>
                </Link>
                <Link to="/register">
                    <DefaultButton buttonText="Registrieren"/>
                </Link>
            </div>
        </div>
    )
}

export default StartPage;