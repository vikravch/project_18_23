import React from 'react';
import styles from "../cart_main_header/cart_main_header.module.css";
import circle_1 from "../img/circle_1.png";
import circle_grey_2 from "../img/circle_grey_2.png";
import circle_grey_3 from "../img/circle_grey_3.png";

function CartHeader() {
    return (
        <div className={styles.main}>
            <p className={styles.back}>&#60; back to home</p>
            <p className={styles.page_header}>Cart</p>
            <div className={styles.steps}>
                <div className={styles.step_active}>
                    <img className={styles.img_circle} src={circle_1}/>
                    <p className={styles.step_name}>Shopping cart</p><br/>
                </div>
                <div className={styles.step_grey}>
                    <img className={styles.img_circle} src={circle_grey_2}/>
                    <p className={styles.step_name}>Checkout details</p><br/>
                </div>
                <div className={styles.step_grey}>
                    <img className={styles.img_circle} src={circle_grey_3}/>
                    <p className={styles.step_name}>Order complete</p><br/>
                </div>
            </div>
        </div>
    );
}

export default CartHeader;