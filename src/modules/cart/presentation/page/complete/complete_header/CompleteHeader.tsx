import React from 'react';
import styles from "./complete_header.module.css";
import circle_complete from "../../img/circle_green.png";
import circle_3 from "../../img/circle_3.png";


function CompleteHeader() {
    return (
        <div className={styles.header__main}>
            <p className={styles.back}>&#60; back to home</p>
            <p className={styles.page_header}>Cart</p>
            <div className={styles.steps + ' ' + styles.step_mobile}>
                <div className={styles.step + ' ' + styles.step_past}>
                    <img className={styles.img_circle} src={circle_complete} alt={'circle'}/>
                    <p className={styles.step_name}>Shopping cart</p><br/>
                </div>
                <div className={styles.step + ' ' + styles.step_past}>
                    <img className={styles.img_circle} src={circle_complete} alt={'circle'}/>
                    <p className={styles.step_name}>Checkout details</p><br/>

                </div>
                <div className={styles.step + ' ' + styles.step_active}>
                    <img className={styles.img_circle} src={circle_3} alt={'circle'}/>
                    <p className={styles.step_name}>Order complete</p><br/>
                </div>
            </div>
        </div>
    );
}

export default CompleteHeader;