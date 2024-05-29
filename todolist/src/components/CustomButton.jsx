import React from "react";
import styles from './componentsCss/button.module.css'

const CustomButton = ({buttonText, buttonClass, onClick}) => {

    return (
        <div className={styles.buttonContainer}>
            <button className={styles.buttonClass} onClick={onClick}>
                <span></span>
                {buttonText}
                <span></span>
            </button>
        </div>
    )
}

export default CustomButton;