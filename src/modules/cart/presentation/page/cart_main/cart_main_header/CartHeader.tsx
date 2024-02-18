import React from 'react';
import styles from "./cart_main_header.module.css";
import circle_grey_3 from "../../img/circle_grey_3.png";
import circle_1 from "../../img/circle_1.png";
import circle_grey_2 from "../../img/circle_grey_2.png";

function CartHeader() {
    return (
        <div className={styles.header__main}>
            <p className={styles.back}>&#60; back to home</p>
            <p className={styles.page_header}>Cart</p>
            <div className={styles.steps + ' ' + styles.step_mobile}>
                <div className={styles.step + ' ' + styles.step_active}>
                    <img className={styles.img_circle} src={circle_1} alt={'circle'}/>
                    <p className={styles.step_name}>Shopping cart</p><br/>
                </div>
                <div className={styles.step + ' ' + styles.step_inactive}>
                    <img className={styles.img_circle} src={circle_grey_2} alt={'circle'}/>
                    <p className={styles.step_name}>Checkout details</p><br/>

                </div>
                <div className={styles.step_mobile_img}>
                    <img className={styles.img_circle} src={circle_grey_2} alt={'circle'}/>
                </div>
                <div className={styles.step + ' ' + styles.step_inactive}>
                    <img className={styles.img_circle} src={circle_grey_3} alt={'circle'}/>
                    <p className={styles.step_name}>Order complete</p><br/>
                </div>
            </div>
        </div>
    );
}

export default CartHeader;