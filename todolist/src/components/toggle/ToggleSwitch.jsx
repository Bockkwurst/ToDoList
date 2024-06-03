import React from "react";
import styles from "./toggleswitch.module.css";

export default function ToggleSwitch({toggled, onClick}) {


    return (
        <div onClick={onClick} className={`${styles.toggle} ${toggled ? styles.night : ""}`}>
            <div className={styles.notch}>
                <div className={styles.crater1}/>
                <div className={styles.crater2}/>
            </div>
            <div className={`${styles.shape} ${styles.sm1}`}/>
            <div className={`${styles.shape} ${styles.sm2}`}/>
            <div className={`${styles.shape} ${styles.md}`}/>
            <div className={`${styles.shape} ${styles.lg}`}/>

        </div>
    )
}