import React from "react";
import styles from './button.module.css'

const DefaultButton = ({buttonText, onClick}) => {

    return (
        <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={onClick}>
                <span></span>
                {buttonText}
                <span></span>
            </button>
        </div>
    )
}

export default DefaultButton;