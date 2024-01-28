import React from 'react';
import styles from "../complete_header/complete_header.module.css";
import circle_green from "../img/circle_green.png";
import circle_3 from "../img/circle_3.png";

function CompleteHeader() {
    return (
        <div className={styles.main}>
            <p className={styles.back}>&#60; back to home</p>
            <p className={styles.page_header}>Complete!</p>
            <div className={styles.steps}>
                <div className={styles.step_green}>
                    <img className={styles.img_circle} src={circle_green}/>
                    <p className={styles.step_name}>Shopping cart</p><br/>
                </div>
                <div className={styles.step_green}>
                    <img className={styles.img_circle} src={circle_green}/>
                    <p className={styles.step_name}>Checkout details</p><br/>
                </div>
                <div className={styles.step_active}>
                    <img className={styles.img_circle} src={circle_3}/>
                    <p className={styles.step_name}>Order complete</p><br/>
                </div>
            </div>
        </div>
    );
}

export default CompleteHeader;