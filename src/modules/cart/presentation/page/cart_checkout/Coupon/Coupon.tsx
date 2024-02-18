import React from "react";
import s from "../cart_checkout.module.css";
import percent from "../../img/percent.png";

function Coupon() {
    return (
        <div className={s.coupon__main}>
            <div className={s.form__coupon}>
                <input className={s.form__inputCoupon}
                       type={"text"} name={"coupon"} placeholder={'Input'}/>
                <button className={s.form__btn_coupon}>Apply</button>
            </div>
            <div className={s.form__fields}>
                <div className={s.form__fieldsElement}>
                    <div className={s.form__fieldsElement_title}>
                        <img className={s.form__fieldsElement_title_img}
                             src={percent}/>
                        <div className={s.form__fieldsElement_value}>JenKateMW</div>
                    </div>
                    <div className={s.form__fieldsElement_value + ' ' + s.green} id={'coupon_value'}>-$25.00 [Remove]</div>
                </div>
                <div className={s.form__fieldsElement}>
                    <div className={s.form__fieldsElement_title}>
                        <div className={s.form__fieldsElement_title}>Shipping</div>
                    </div>
                    <div className={s.form__fieldsElement_value} id={'shipping'}>Free</div>
                </div>
                <div className={s.form__fieldsElement}>
                    <div className={s.form__fieldsElement_title}>
                        <div className={s.form__fieldsElement_value}>Subtotal</div>
                    </div>
                    <div className={s.form__fieldsElement_value} id={'subtotal'}>$99.00</div>
                </div>
                <div className={s.form__fieldsElement}>
                    <div className={s.form__fieldsElement_title}>
                        <div className={s.form__fieldsElement_value_total}>Total</div>
                    </div>
                    <div className={s.form__fieldsElement_value} id={'total'}>$235.00</div>
                </div>
            </div>
        </div>
    );
}

export default Coupon;