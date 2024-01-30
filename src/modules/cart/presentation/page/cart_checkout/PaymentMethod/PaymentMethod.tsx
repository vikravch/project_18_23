import React from 'react';
import s from "../cart_checkout.module.css";

const PaymentMethod = () => {
    return (
        <form className={s.cartForm}>
            <label className={s.cartForm__textTitle}>
                Payment method
            </label>
            <div className={s.cartForm__itemSelector}>
                <div className={s.itemSelector__item}>
                    <div className={s.itemSelector__content}><input type={"radio"} name="paymentMethod" id={"creditCard"}/>
                        <label className={s.itemSelector__text}
                               htmlFor="creditCard">Pay by Card Credit</label></div>
                </div>
                <div className={s.itemSelector__item}>
                    <div className={s.itemSelector__content}>
                        <input type={"radio"} name="paymentMethod" id={"debitCard"}/>
                        <label className={s.itemSelector__text}
                               htmlFor="debitCard">Pay by Card Credit</label>
                    </div>
                </div>
            </div>
            <div className={s.cartForm__item}>
                <label className={s.input__labelText}>Card Number</label>
                <input className={s.cartForm__input + ' ' + s.cartForm__inputWhole}
                       type={"text"} name={"cardNumber"} placeholder={'1234 1234 1234'}/>
            </div>
            <div className={s.cartForm__rowForTwo}>
                <div className={s.cartForm__item}>
                    <label className={s.input__labelText}>Expiration date</label>
                    <input className={s.cartForm__input + ' ' + s.cartForm__inputHalf}
                           type={"text"} name={"cardDate"} placeholder={'MM/YY'}/>
                </div>
                <div className={s.cartForm__item}>
                    <label className={s.input__labelText}>CVC</label>
                    <input className={s.cartForm__input + ' ' + s.cartForm__inputHalf}
                           type={"text"} name={"cvcCode"} placeholder={'CVC code'}/>
                </div>
            </div>
        </form>
    );
};

export default PaymentMethod;