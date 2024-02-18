import React from 'react';
import s from "../cart_checkout.module.css";

function PlaceOrder() {
    return (
        <div className={s.form_button}>
            <button className={s.form__btn_order}>Place Order</button>
        </div>
    );
}

export default PlaceOrder;