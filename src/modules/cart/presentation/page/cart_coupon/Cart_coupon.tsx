import React from 'react';
import styles from "../cart_coupon/cart_coupon.module.css";
import percent from "../img/percent.png";

function CartCoupon() {
    return (
        <div className={styles.main}>
            <p className={styles.title_1}>Have a coupon?</p>
            <p className={styles.title_2}>Add your code for an instant cart discount</p>
            <div className={styles.form_input}>
                <div className={styles.icon_input}>
                    <img className={styles.percent} src={percent} alt={'percent'}/>
                    <input className={styles.input} value={'Coupon Code'}/>
                </div>
                <p className={styles.apply}>Apply</p>
            </div>
        </div>

    );
}

export default CartCoupon;