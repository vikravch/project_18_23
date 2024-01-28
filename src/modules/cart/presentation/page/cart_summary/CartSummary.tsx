import React from 'react';
import styles from "../cart_summary/cart_summary.module.css";

function CartSummary() {
    return (
        <div className={styles.main}>
            <form className={styles.summary_form}>
                <p className={styles.summary_form_title}>Cart summary</p>
                <div className={styles.shipping}>
                    <div><input className={styles.radio} name='summary' type='radio' value='free'/> Free shipping</div>
                    <div className={styles.free_data}>$0.00</div>
                </div>
                <div className={styles.shipping}>
                    <div><input className={styles.radio} name='summary' type='radio' value='express'/> Express shipping
                    </div>
                    <div className={styles.free_data}>+$15.00</div>
                </div>
                <div className={styles.shipping}>
                    <div><input className={styles.radio} name='summary' type='radio' value='pick_up'/> Pick up</div>
                    <div className={styles.free_data}>%21.00</div>
                </div>
                <div className={styles.subtotal}>
                    <p className={styles.title}>Subtotal</p>
                    <p className={styles.value}>$123.56</p>
                </div>
                <div className={styles.total}>
                    <p className={styles.title}>Total</p>
                    <p className={styles.value}>$9358.56</p>
                </div>
                <div className={styles.btn}>
                    <button className={styles.btn_checkout} type="submit">Checkout</button>
                </div>
            </form>
        </div>
    );
}

export default CartSummary;